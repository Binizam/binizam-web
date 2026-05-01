export type Locale = 'en' | 'ar';

export const routePairs = [
  { en: '/', ar: '/ar' },
  { en: '/about', ar: '/ar/about' },
  { en: '/capabilities', ar: '/ar/capabilities' },
  { en: '/capabilities/workflow-layer-above-erp', ar: '/ar/capabilities/workflow-layer-above-erp' },
  { en: '/capabilities/internal-tools-development-gcc', ar: '/ar/capabilities/internal-tools-development-gcc' },
  { en: '/capabilities/retool-development-gcc', ar: '/ar/capabilities/retool-development-gcc' },
  { en: '/ar-collections', ar: '/ar/ar-collections' },
  { en: '/ar-collections/fmcg-distributors-uae', ar: '/ar/ar-collections/fmcg-distributors-uae' },
  { en: '/ar-collections/logistics-3pl-uae', ar: '/ar/ar-collections/logistics-3pl-uae' },
  { en: '/ar-collections/receivables-reconciliation', ar: '/ar/ar-collections/receivables-reconciliation' },
  { en: '/security', ar: '/ar/security' },
  { en: '/how-we-work', ar: '/ar/how-we-work' },
  { en: '/contact', ar: '/ar/contact' },
  { en: '/privacy', ar: '/ar/privacy' }
] as const;

export const arabicPublicRoutes = routePairs.map((pair) => pair.ar);
export const englishPublicRoutes = routePairs.map((pair) => pair.en);
export const sitemapRoutes = routePairs.flatMap((pair) => [pair.en, pair.ar]);

export const brandDescriptions: Record<Locale, string> = {
  en: 'Binizam builds governed internal workflow systems for GCC finance and operations teams.',
  ar: 'بنظام تبني أنظمة سير عمل داخلية منظّمة وقابلة للتتبع لفرق المالية والعمليات في الخليج.'
};

export function normalizePath(pathname: string) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

export function isArabicPath(pathname: string) {
  const normalized = normalizePath(pathname);
  return normalized === '/ar' || normalized.startsWith('/ar/');
}

export function getLocaleFromPath(pathname: string): Locale {
  return isArabicPath(pathname) ? 'ar' : 'en';
}

export function getRoutePair(pathname: string) {
  const normalized = normalizePath(pathname);
  if (normalized === '/404' || normalized === '/ar/404') return { en: '/404', ar: '/ar/404' };
  return routePairs.find((pair) => pair.en === normalized || pair.ar === normalized) || routePairs[0];
}

export function getLocalizedPath(pathname: string, locale: Locale) {
  const normalized = normalizePath(pathname);
  const pair = getRoutePair(normalized);
  return pair[locale];
}

export function toAbsoluteUrl(pathname: string, site: URL) {
  const normalized = normalizePath(pathname);
  return new URL(normalized === '/' ? '/' : normalized, site).toString();
}

export function getHreflangAlternates(pathname: string, site: URL) {
  const pair = getRoutePair(pathname);
  return {
    en: toAbsoluteUrl(pair.en, site),
    ar: toAbsoluteUrl(pair.ar, site),
    xDefault: toAbsoluteUrl(pair.en, site)
  };
}
