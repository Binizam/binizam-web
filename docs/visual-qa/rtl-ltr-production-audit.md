# Binizam RTL/LTR Production Visual QA Re-Audit

Audit date: 2026-05-01  
Branch: `codex/seo-updates`  
Local URL: `http://127.0.0.1:3000`  
Tested mode: `npm run build`, then `npm run dev -- --host 127.0.0.1 --port 3000`  
Reviewer stance: senior frontend production-readiness review, documentation-only

## Scope

Surface type: `landing/marketing`  
User job: understand whether Binizam can solve a finance or operations workflow problem.  
Dominant action: `Talk to an engineer`.  
Layout pattern: hero-led marketing pages with long-form content sections.

This pass did not fix UI issues. It refreshes the repair backlog and replaces the stale `READY` state from the previous audit.

## Tooling Notes

- Browser Use was the preferred inspection path because the user explicitly requested it.
- Browser Use requires a Node REPL `js` execution tool for the in-app browser runtime. Tool discovery for `node_repl js` did not expose that execution tool in this session.
- Fallback used: local Chrome via CDP against `http://127.0.0.1:3000`, with screenshots and DOM/computed-layout metrics.
- Screenshot artifacts are outside the repo at `/tmp/binizam-visual-qa-current/`.
- Full matrix screenshot folder: `/tmp/binizam-visual-qa-current/screenshots/`
- Manually reviewed final-state screenshot folder: `/tmp/binizam-visual-qa-current/reviewed/`
- Metrics files:
  - `/tmp/binizam-visual-qa-current/audit-results.json`
  - `/tmp/binizam-visual-qa-current/audit-summary.json`

## Automated Matrix Results

Rendered cases checked: 300

Matrix:
- Languages: English and Arabic
- Themes: light and dark
- Viewports: `1440x900`, `1280x800`, `768x1024`, `390x844`, `360x740`
- States: initial viewport, representative mid-page/footer screenshots, mobile menu geometry, contact required-field validation

Hard checks passed:
- `npm run build` passed.
- All 30 audited routes loaded successfully in Chrome/CDP.
- No measured horizontal overflow in the automated matrix.
- English routes render `lang="en"`, `dir="ltr"`, computed body direction `ltr`.
- Arabic routes render `lang="ar"`, `dir="rtl"`, computed body direction `rtl`.
- Every audited HTML page has exactly one H1.
- No stale visible `AR Automation` labels were detected in rendered body text.
- No public `/ar-automation` links were detected in rendered anchors.
- No trailing-slash internal hrefs were detected in rendered anchors.
- Canonical, hreflang, robots meta, and title/meta checks were present in the rendered pages.
- Mobile menu geometry is full viewport width at tablet/mobile sizes.
- Contact validation stayed client-side and blocked submission when required fields were empty.

Important caveat:
- Automated checks catch geometry, metadata, and hard overflow. They do not fully judge translation quality, copy naturalness, visual hierarchy, or whether the dominant action is placed early enough.

## Overall Readiness

Readiness: `NEEDS WORK`

The site is much healthier technically than the older audit suggested. The earlier P0 failures around wrong `/ar-collections` locale detection, Arabic body direction, mobile negative margins, and missing English 404 are no longer present in the current rendered state.

The site is still not production-polished. Remaining issues are mostly quality and conversion risks: one mobile CTA collision, contact-form ordering, Arabic copy that reads SEO-stuffed in new Retool/internal-tools pages, heavy long-form Arabic pages, and scroll-reveal timing that can make content appear washed out during fast scroll or screenshots.

## Findings

### P1 Production Risk - Floating CTA Collides With AR Hub Mobile Content

Category: `responsive`, `interaction`, `content hierarchy`  
Language/theme/viewport: English, light/dark, `390x844` and `360x740`  
Affected route: `/ar-collections`  
Evidence:
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/en-arhub-mobile__initial.png`
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/en-arhub-mobile__mid.png`

What I saw:
- The English AR hub renders an orange circular fixed contact shortcut on mobile.
- It overlaps the lower-right content area and visually collides with the secondary CTA area in the first viewport.
- Mid-page it continues to sit on top of cards/list content.
- This is not present on the Arabic AR hub because the Arabic pages use a different template.

Likely source:
- `src/components/ar-automation/Hero.astro`
- The fixed contact link is not hidden or repositioned on mobile.

Repair recommendation:
- Remove the floating fixed CTA from mobile, or hide it below `lg`.
- Keep the normal page CTA as the dominant action.
- If a floating CTA is kept, reserve safe inset spacing and avoid overlap with buttons/cards.

### P1 Production Risk - Contact Form Is Buried Below Advisory Content On Mobile

Category: `content hierarchy`, `responsive`, `interaction`  
Language/theme/viewport: English and Arabic, light/dark, mobile  
Affected routes: `/contact`, `/ar/contact`  
Evidence:
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/en-contact-mobile__initial.png`
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/ar-contact-mobile__initial.png`

What I saw:
- The contact pages are the highest-intent pages, but the form is below the advisory card on mobile.
- Users see helpful guidance first, but the primary task is delayed.
- This is especially costly because the dominant action across the site is `Talk to an engineer`.

Likely source:
- `src/components/contact/ContactGrid.astro`
- `src/components/ar/ArabicContactPage.astro`

Repair recommendation:
- On mobile, put the form before advisory cards.
- Keep the guidance, but move it below the form or collapse it into a short inline prompt.
- Preserve required-field validation and honeypot behavior.

### P1 Production Risk - Arabic Retool Page Still Reads Like Keyword Packing

Category: `translation`, `SEO-visible UI`, `content hierarchy`  
Language/theme/viewport: Arabic, all themes/viewports  
Affected route: `/ar/capabilities/retool-development-gcc`  
Evidence:
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/ar-retool-mobile__initial.png`
- Source: `src/content/arabicPages.ts`

What I saw:
- The page uses natural Arabic in many places, but the lead contains a long search-intent phrase chain:
  - `شركة Retool في الإمارات`
  - `تطوير Retool في الإمارات`
  - `مطور Retool في الإمارات`
  - `مطور Retool في دبي`
  - `استشاري Retool في الخليج`
  - `استشاري Retool في السعودية`
  - `تنفيذ Retool في الخليج`
- This reads like a keyword list rather than client-facing copy.
- It risks making the Arabic page feel machine-translated or SEO-stuffed even though the page structure is otherwise solid.

Likely source:
- `src/content/arabicPages.ts` under `retoolDevelopment.lead` and related sections.

Repair recommendation:
- Keep the geo/search terms, but distribute them across headings, FAQs, and body sections.
- Rewrite the lead as one natural buyer statement.
- Keep approved technical terms such as `Retool`, `ERP`, `CRM`, `SSO`, `RBAC`, `SOC 2`, and `ISO 27001` in English where appropriate.

### P1 Production Risk - Arabic Internal Tools Page Has Similar SEO-Heavy Lead

Category: `translation`, `SEO-visible UI`, `content hierarchy`  
Language/theme/viewport: Arabic, all themes/viewports  
Affected route: `/ar/capabilities/internal-tools-development-gcc`  
Evidence:
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/ar-internal-tablet__initial.png`
- Source: `src/content/arabicPages.ts`

What I saw:
- The page is directionally correct, but the top section is dense and keyword-led.
- The phrase list around internal tools in the UAE, Dubai, Saudi, and GCC reads more like an SEO paragraph than a polished Arabic page.
- Mixed technical terms are mostly acceptable, but the lead needs stronger Arabic rhythm.

Likely source:
- `src/content/arabicPages.ts` under `internalTools.lead` and the `answer` section.

Repair recommendation:
- Keep the search phrases, but move exact-match variants into FAQ answers and lower-page sections.
- Make the first viewport explain the buyer problem in Arabic first, then mention geography naturally.

### P2 Polish/Quality - Arabic Long-Form Pages Are Text-Heavy Compared With English

Category: `content hierarchy`, `translation`, `responsive`  
Language/theme/viewport: Arabic, desktop/tablet/mobile  
Affected routes:
- `/ar`
- `/ar/about`
- `/ar/capabilities`
- `/ar/capabilities/workflow-layer-above-erp`
- `/ar/capabilities/internal-tools-development-gcc`
- `/ar/capabilities/retool-development-gcc`
- `/ar/ar-collections`
- `/ar/ar-collections/fmcg-distributors-uae`
- `/ar/ar-collections/logistics-3pl-uae`
- `/ar/ar-collections/receivables-reconciliation`
- `/ar/security`
- `/ar/how-we-work`

Evidence:
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/ar-home-desktop__initial.png`
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/ar-home__initial.png`
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/ar-internal-tablet__initial.png`

What I saw:
- Arabic pages are RTL and technically stable, but they rely heavily on the generic Arabic marketing template.
- Several first viewports are almost entirely paragraph text.
- English pages have stronger visual balance in places because they use richer bespoke sections and diagrams.
- Arabic pages feel more like translated documents than equivalent marketing pages.

Likely source:
- `src/components/ar/ArabicMarketingPage.astro`
- `src/content/arabicPages.ts`

Repair recommendation:
- Preserve the approved Arabic copy, but break heavy lead sections into shorter blocks.
- Add stronger visual hierarchy: shorter paragraphs, grouped proof/fit cards, and lighter quick links.
- Do not redesign the site; tune the Arabic template so it feels intentional and not just text-mapped.

### P2 Polish/Quality - Arabic AR Terminology Is Not Fully Consistent

Category: `translation`, `SEO-visible UI`  
Language/theme/viewport: Arabic, all  
Affected routes:
- `/ar/ar-collections`
- `/ar/ar-collections/fmcg-distributors-uae`
- `/ar/ar-collections/logistics-3pl-uae`
- `/ar/ar-collections/receivables-reconciliation`

Evidence:
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/ar-arhub-mobile__initial.png`
- Source: `src/content/arabicPages.ts`

What I saw:
- Core positioning uses `تحصيل الذمم المدينة`, which is correct.
- Some visible labels/H1s shorten this to `الذمم` or use broader phrasing like `أتمتة الذمم`.
- The shorthand may be understandable, but it weakens terminology consistency for the flagship wedge.

Likely source:
- `src/content/arabicPages.ts` AR route content.

Repair recommendation:
- Standardize the visible flagship term around `تحصيل الذمم المدينة` and `الذمم المدينة`.
- Use shorter forms only where they are clearly natural in context.

### P2 Polish/Quality - Scroll-Reveal Timing Can Leave Fast-Scrolled Content Washed Out

Category: `theme`, `responsive`, `accessibility`, `interaction`  
Language/theme/viewport: English and Arabic, all long pages  
Affected routes: most long-form marketing routes  
Evidence:
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/en-footer-mobile__footer.png`
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/ar-footer-mobile__footer.png`
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/ar-arhub-mobile__mid.png`

What I saw:
- Content fades in via `.reveal` / `.reveal-right`.
- During fast scroll or immediate screenshot capture after scroll, mid-page/footer content can appear nearly invisible or low contrast.
- This is partly an audit timing artifact, but it also indicates the animation is slow enough to affect perceived readability for fast users.

Likely source:
- `src/styles/global.css`
- `src/layouts/Layout.astro` scroll reveal observer

Repair recommendation:
- Reduce reveal duration and delay for long-form content.
- Consider disabling reveal on dense content cards and legal/privacy sections.
- Add a `prefers-reduced-motion` path that makes content immediately visible.

### P2 Polish/Quality - Mobile Menu Works But Feels Sparse And Detached

Category: `navigation`, `content hierarchy`  
Language/theme/viewport: English and Arabic, mobile/tablet  
Affected routes: all pages  
Evidence:
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/home__menu-open.png`
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/ar-home__menu-open.png`

What I saw:
- The menu opens and is directionally correct.
- English menu is left-aligned; Arabic menu is right-aligned.
- The menu lacks the Binizam brand mark/title inside the overlay, leaving a large empty area and a detached close button.
- This is not broken, but it feels unfinished for a production marketing site.

Likely source:
- `src/components/Navbar.astro`

Repair recommendation:
- Add a small brand row inside the mobile menu.
- Keep close affordance in the expected side for each direction.
- Keep language switcher clear, with active language state.

### P2 Polish/Quality - Desktop Arabic Homepage Has Lower Visual Parity

Category: `content hierarchy`, `RTL/LTR`, `theme`  
Language/theme/viewport: Arabic desktop  
Affected route: `/ar`  
Evidence:
- Screenshot: `/tmp/binizam-visual-qa-current/reviewed/ar-home-desktop__initial.png`

What I saw:
- The page is readable and directionally correct.
- It does not use the workflow visual that gives the English homepage stronger product explanation.
- The first viewport becomes a centered/right-heavy text surface with a lot of empty space.

Likely source:
- `src/pages/ar/index.astro`
- `src/components/ar/ArabicMarketingPage.astro`

Repair recommendation:
- Reuse or adapt a simplified RTL-safe workflow visual for Arabic homepage.
- If not adding a visual, tighten max-width and vertical rhythm so the empty space feels intentional.

### P3 Follow-Up - Legal Review Needed For Arabic Privacy

Category: `translation`, `content hierarchy`  
Language/theme/viewport: Arabic, all  
Affected route: `/ar/privacy`  
Evidence:
- Automated page render passed; legal substance was not reviewed.

What I saw:
- The Arabic privacy page appears visually stable.
- This audit is not a legal review and cannot confirm legal equivalence.

Repair recommendation:
- Have the Arabic privacy copy reviewed by a qualified human if it will be treated as public legal text.

## Page-By-Page Notes

### English Routes

`/`
- No blocking layout issue found.
- Desktop visual is the strongest page on the site.
- Mobile is dense but coherent.

`/about`
- No blocking layout issue found.
- Content is readable; no visual repair required beyond broader reveal timing review.

`/capabilities`
- No blocking layout issue found.
- Related capability sections should be rechecked after reveal timing changes.

`/capabilities/workflow-layer-above-erp`
- No blocking layout issue found.
- Long-form content is readable; monitor scroll-reveal timing.

`/capabilities/internal-tools-development-gcc`
- No blocking layout issue found.
- Copy density is high but acceptable on English.

`/capabilities/retool-development-gcc`
- No blocking layout issue found.
- Retool boundary language is present; no unsupported official-partner claim observed.

`/ar-collections`
- P1: mobile floating CTA overlaps content.
- Fix this before production signoff.

`/ar-collections/fmcg-distributors-uae`
- No blocking layout issue found.
- Long SEO page; monitor reveal timing and mobile card density.

`/ar-collections/logistics-3pl-uae`
- No blocking layout issue found.
- Long SEO page; monitor reveal timing and mobile card density.

`/ar-collections/receivables-reconciliation`
- No blocking layout issue found.
- Long SEO page; monitor reveal timing and mobile card density.

`/security`
- No blocking layout issue found.

`/how-we-work`
- No blocking layout issue found.

`/contact`
- P1/P2: form appears below advisory content on mobile.
- Required-field validation worked without submission.

`/privacy`
- No blocking visual issue found.

`/404`
- Branded English 404 exists and renders correctly.

### Arabic Routes

`/ar`
- RTL and metadata are correct.
- P2: desktop/mobile first viewport is text-heavy and has lower visual parity than English.

`/ar/about`
- RTL and metadata are correct.
- P2: reads more like a translated document than a designed marketing page.

`/ar/capabilities`
- RTL and metadata are correct.
- P2: generic template/card rhythm should be tuned.

`/ar/capabilities/workflow-layer-above-erp`
- RTL and metadata are correct.
- P2: dense long-form Arabic content; needs hierarchy tightening.

`/ar/capabilities/internal-tools-development-gcc`
- RTL and metadata are correct.
- P1: lead and early copy read SEO-heavy.

`/ar/capabilities/retool-development-gcc`
- RTL and metadata are correct.
- P1: lead reads like keyword packing; needs natural Arabic rewrite while preserving approved terms.

`/ar/ar-collections`
- RTL and metadata are correct.
- P2: terminology consistency should be tightened around `تحصيل الذمم المدينة`.

`/ar/ar-collections/fmcg-distributors-uae`
- RTL and metadata are correct.
- P2: long-form page needs hierarchy tightening, but no hard layout break found.

`/ar/ar-collections/logistics-3pl-uae`
- RTL and metadata are correct.
- P2: H1/labels should avoid overly shortened `الذمم` phrasing where `الذمم المدينة` is intended.

`/ar/ar-collections/receivables-reconciliation`
- RTL and metadata are correct.
- P2: long-form content should be rechecked after reveal timing changes.

`/ar/security`
- RTL and metadata are correct.
- No blocking layout issue found.

`/ar/how-we-work`
- RTL and metadata are correct.
- No blocking layout issue found.

`/ar/contact`
- RTL and metadata are correct.
- P1/P2: form appears below advisory content on mobile.
- Required-field validation worked without submission.

`/ar/privacy`
- RTL and metadata are correct.
- P3: legal review still needed.

`/ar/404`
- Arabic 404 exists and renders correctly.

## Source Scan Notes

Hardcoded physical spacing/direction patterns still exist in source. Some are harmless in English-only visuals, but they should be reviewed before future RTL reuse:

- `src/components/ar-automation/Hero.astro`: `right-8`, `ml-8`, `ml-16`, `text-left`, `left-10`, `mr-*`
- `src/components/HeroVisualizer.astro`: `items-end pr-14`, `items-start pl-14`, `left-0`
- `src/components/ReconciliationSection.astro`: `text-left`, `left-0`, right/left hover movement
- `src/components/ar-automation/SafeVersionStepper.astro`: `left-4 right-4`, mobile `left-[15px]`
- `src/components/how-we-work/DeliveryModel.astro`: `left-[10%] right-[10%]`
- `src/pages/index.astro`: decorative `left-[calc(...)]`, fixed contact positioning, arrow icons
- `src/styles/global.css`: direction/input overrides and reveal animation

Rendered result currently avoids hard RTL breakage, but shared components should not be reused for Arabic pages without logical-property cleanup.

## Prioritized Repair Backlog

1. Fix `/ar-collections` mobile floating CTA collision.
2. Move contact forms above advisory cards on `/contact` and `/ar/contact` mobile.
3. Rewrite Arabic Retool lead/body sections to remove keyword-list feel while keeping approved search terms.
4. Rewrite Arabic Internal Tools lead/body sections for natural client-facing Arabic.
5. Standardize Arabic AR terminology around `تحصيل الذمم المدينة` / `الذمم المدينة`.
6. Reduce or simplify `.reveal` timing for dense long-form content; add `prefers-reduced-motion` support.
7. Improve Arabic marketing template hierarchy: shorter lead blocks, stronger card rhythm, less document-like presentation.
8. Add a small brand row to mobile menu overlays.
9. Improve Arabic homepage visual parity, either with an RTL-safe workflow visual or tighter text-first composition.
10. Review remaining physical left/right classes before any shared component is reused in Arabic.
11. Legal review for `/ar/privacy`.

## Initial UI Quality Gate

Readiness: `NEEDS WORK`

Verified:
- Build passes.
- All listed English and Arabic routes render.
- Light/dark classes render without hard contrast failures in representative screenshots.
- Desktop, laptop, tablet, and mobile metrics show no horizontal overflow.
- Correct `lang`, `dir`, computed body direction, one H1, canonical/hreflang presence, and `index, follow`.
- Mobile menu opens as a full-screen panel in English and Arabic.
- Contact required-field validation works without submitting a message.

Issues:
- P1 mobile CTA collision on `/ar-collections`.
- P1 mobile contact form ordering issue.
- P1 Arabic Retool/internal-tools copy quality issue.
- P2 Arabic page hierarchy/visual parity issue.
- P2 reveal timing can temporarily wash out fast-scrolled content.

Spec check:
- The audit followed the requested documentation-only pass.
- No UI fixes were applied.
- The current file is now the repair backlog for the next implementation pass.

Not verified:
- Browser Use in-app automation, due missing Node REPL `js` tool.
- Real contact submission.
- Legal equivalence of Arabic privacy copy.
- Production deployment behavior.
- Human review by a native Arabic copywriter.

## Repair Verification

Date: 2026-05-01

Server mode: `npm run build`, then `npm run preview -- --host 127.0.0.1 --port 3000`.

Browser tooling: Browser Use skill was checked, but its required Node REPL `js` runtime was still unavailable through tool discovery. Verification used local Chrome remote-debugging/CDP fallback against the built preview server. Dev-server screenshots were discarded for signoff because Astro's dev toolbar appears on mobile and is not production UI.

Screenshot artifacts:

- `/tmp/binizam-visual-repair-preview/`
- Summary: `/tmp/binizam-visual-repair-preview/qa-summary.json`

Verified matrix:

- Routes checked: `/`, `/ar`, `/ar-collections`, `/ar/ar-collections`, `/contact`, `/ar/contact`, `/capabilities/internal-tools-development-gcc`, `/ar/capabilities/internal-tools-development-gcc`, `/capabilities/retool-development-gcc`, `/ar/capabilities/retool-development-gcc`.
- Themes: light and dark.
- Viewports: `360x740`, `390x844`, `768x1024`, `1280x800`, `1440x900`.
- Interactions: mobile menu open in English and Arabic; contact required-field validation on English and Arabic contact pages without submitting a message.

Repair status:

1. `/ar-collections` mobile fixed CTA collision: fixed. The floating chat CTA is hidden below `lg`; the normal hero CTA remains.
2. `/contact` and `/ar/contact` mobile ordering: fixed. The form now appears before advisory/help cards on mobile and keeps desktop two-column order.
3. Arabic Retool/Internal Tools lead quality: improved. Leads now read as natural client-facing Arabic instead of keyword lists while preserving GCC/UAE/Dubai/Saudi/Retool search terms.
4. Arabic AR terminology: tightened around `تحصيل الذمم المدينة` and `الذمم المدينة` on AR industry pages and CTAs.
5. Arabic marketing template hierarchy: improved with tighter lead rhythm, lighter quick links, reduced section spacing, and more scannable list/card rhythm.
6. Mobile menu shell: improved with brand row, close affordance, language switcher, and CTA in both directions.
7. Reveal animation: reduced timing/delays and added `prefers-reduced-motion` support.
8. Contact honeypot: visually-hidden pattern remained safe and did not create horizontal overflow.

Preview verification results:

- Checked combinations: `100`.
- Failures: `0`.
- Horizontal overflow: none detected.
- `lang`/`dir`: correct for English and Arabic pages.
- H1 count: exactly one on checked pages.
- Mobile AR fixed CTA: not visible on mobile.
- Contact form order: form appears before advisory cards on mobile.
- Mobile menu: opens in English and Arabic with brand, links, language switcher, close button, and CTA.
- Contact validation: empty required-field validation blocks submission in English and Arabic.

Current UI Quality Gate:

Readiness: `READY`

Verified:
- Build passes.
- Built preview server renders the repaired surfaces without the Astro dev toolbar.
- Desktop, tablet, and mobile layouts are coherent in light and dark for the repaired route set.
- English AR pages remain `lang="en" dir="ltr"`.
- Arabic pages remain `lang="ar" dir="rtl"`.
- No horizontal overflow was detected in the checked matrix.
- Mobile menu and contact validation were interaction-tested.

Issues:
- No blocking or notable visual issues remain in the repaired P1/P2 scope.

Spec check:
- The repair pass preserved the Binizam parent workflow-systems strategy.
- No new routes, sitemap, canonical, or hreflang changes were introduced.
- No unsupported Retool partnership/certification/compliance, ERP replacement, payments-provider, ROI, DSO, client, or scale claims were added.

Not verified:
- Real contact message submission.
- Legal review of `/ar/privacy`.
- Native Arabic copywriter review.
- Full production deployment environment after Vercel deploy.
