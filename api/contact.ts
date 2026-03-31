// /api/contact.ts
export const config = { runtime: "nodejs" };

function getCookie(cookies: string, name: string) {
  const match = cookies.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function getClientIp(req: any) {
  const xff = req.headers["x-forwarded-for"];
  if (!xff) return null;
  return String(xff).split(",")[0].trim();
}

function getHostnameFromHeader(value?: string) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.hostname;
  } catch {
    return null;
  }
}

/**
 * Very lightweight in-memory rate limit.
 * Note: serverless instances can reset; this is still useful for v0.
 */
const RATE_BUCKET: Map<string, { count: number; resetAt: number }> = new Map();

function rateLimit(ip: string, limitPerMin: number) {
  const now = Date.now();
  const windowMs = 60_000;

  const bucket = RATE_BUCKET.get(ip);
  if (!bucket || now > bucket.resetAt) {
    RATE_BUCKET.set(ip, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (bucket.count >= limitPerMin) {
    return { ok: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { ok: true };
}

export default async function handler(req: any, res: any) {
  // Optional: handle preflight safely
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  // ---- Allowlist by Origin/Referer host ----
  const allowedHosts = (process.env.ALLOWED_HOSTS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const originHost = getHostnameFromHeader(req.headers.origin);
  const refererHost = getHostnameFromHeader(req.headers.referer);
  const hostToCheck = originHost || refererHost; // same-origin fetch usually includes origin

  if (allowedHosts.length > 0) {
    // If we can’t determine host, reject (tightest). If you prefer looser, change to allow.
    if (!hostToCheck || !allowedHosts.includes(hostToCheck)) {
      return res.status(403).json({ ok: false, error: "Forbidden origin" });
    }
  }

  // ---- Rate limit per IP ----
  const ip = getClientIp(req) || "unknown";
  const limitPerMin = Number(process.env.RATE_LIMIT_PER_MIN || "10");
  const rl = rateLimit(ip, limitPerMin);
  if (!rl.ok) {
    res.setHeader("Retry-After", String(rl.retryAfterSec));
    return res.status(429).json({ ok: false, error: "Too many requests" });
  }

  // ---- Parse body robustly ----
  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  const {
    fullName,
    email,
    company,
    message,
    honeypot,
    pageUri,
    pageName,
    utmSource,
    utmMedium,
    utmCampaign,
    utmTerm,
    utmContent,
  } = body || {};

  // Honeypot: if filled, pretend success (don’t signal bots)
  if (honeypot) return res.status(200).json({ ok: true });

  // Minimal validation (keep simple)
  if (!email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;
  if (!portalId || !formGuid) {
    return res.status(500).json({ ok: false, error: "Server misconfigured (missing env vars)" });
  }

  // Attribution goes into message so you can see it in HubSpot without creating extra properties
  const attributionLines = [
    pageUri ? `page=${pageUri}` : null,
    utmSource ? `utm_source=${utmSource}` : null,
    utmMedium ? `utm_medium=${utmMedium}` : null,
    utmCampaign ? `utm_campaign=${utmCampaign}` : null,
    utmTerm ? `utm_term=${utmTerm}` : null,
    utmContent ? `utm_content=${utmContent}` : null,
  ].filter(Boolean);

  const finalMessage =
    attributionLines.length > 0
      ? `${message}\n\n---\nAttribution:\n${attributionLines.join("\n")}`
      : message;

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

  // Send only fields with values (avoid “Not provided” noise)
  const fields = [
    { name: "email", value: String(email) },
    fullName ? { name: "full_name", value: String(fullName) } : null,
    company ? { name: "company_organization", value: String(company) } : null,
    { name: "message", value: String(finalMessage) },
  ].filter(Boolean);

  const hutk = getCookie(req.headers.cookie || "", "hubspotutk");

  const payload = {
    fields,
    context: {
      hutk: hutk || undefined,
      pageUri: pageUri || req.headers.referer || undefined,
      pageName: pageName || "Contact",
      ipAddress: ip !== "unknown" ? ip : undefined,
    },
  };

  try {
    const hsRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!hsRes.ok) {
      const details = await hsRes.text();
      return res.status(502).json({ ok: false, error: "HubSpot rejected", details });
    }

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    return res.status(502).json({ ok: false, error: "Submission failed" });
  }
}