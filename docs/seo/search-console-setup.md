# Search Console And Bing Webmaster Setup

Use this after deployment to verify that search engines can crawl, index, and understand Binizam's owned pages.

## Google Search Console

1. Create a domain property for `binizam.com` where possible.
2. Verify ownership with DNS, or set `GOOGLE_SITE_VERIFICATION` in the deployment environment and use the meta tag method.
3. Submit `https://binizam.com/sitemap.xml`.
4. Inspect these URLs and request indexing after deployment:
   - `https://binizam.com/`
   - `https://binizam.com/about`
   - `https://binizam.com/capabilities`
   - `https://binizam.com/capabilities/workflow-layer-above-erp`
   - `https://binizam.com/capabilities/internal-tools-development-gcc`
   - `https://binizam.com/capabilities/retool-development-gcc`
   - `https://binizam.com/ar-collections`
   - `https://binizam.com/ar-collections/fmcg-distributors-uae`
   - `https://binizam.com/ar-collections/logistics-3pl-uae`
   - `https://binizam.com/ar-collections/receivables-reconciliation`
   - `https://binizam.com/security`
   - `https://binizam.com/how-we-work`
   - `https://binizam.com/contact`
   - `https://binizam.com/privacy`
   - `https://binizam.com/ar`
   - `https://binizam.com/ar/about`
   - `https://binizam.com/ar/capabilities`
   - `https://binizam.com/ar/capabilities/workflow-layer-above-erp`
   - `https://binizam.com/ar/capabilities/internal-tools-development-gcc`
   - `https://binizam.com/ar/capabilities/retool-development-gcc`
   - `https://binizam.com/ar/ar-collections`
   - `https://binizam.com/ar/ar-collections/fmcg-distributors-uae`
   - `https://binizam.com/ar/ar-collections/logistics-3pl-uae`
   - `https://binizam.com/ar/ar-collections/receivables-reconciliation`
   - `https://binizam.com/ar/security`
   - `https://binizam.com/ar/how-we-work`
   - `https://binizam.com/ar/contact`
   - `https://binizam.com/ar/privacy`
5. Check Page indexing for crawl, canonical, duplicate, and noindex issues.
6. Check Performance after pages are indexed.
7. Check Manual actions.
8. Check Security issues.
9. Check Core Web Vitals.
10. Check Enhancements / structured data if Search Console shows them.

## Bing Webmaster Tools

1. Add `https://binizam.com/`.
2. Verify ownership with DNS, imported Google Search Console verification, or set `BING_SITE_VERIFICATION` in the deployment environment and use the meta tag method.
3. Submit `https://binizam.com/sitemap.xml`.
4. Inspect the same URLs listed above.
5. Check Site Explorer for indexed pages and crawl issues.
6. Review IndexNow only after deciding whether to create and publish an IndexNow key.
7. Monitor crawl errors, blocked resources, canonical issues, and unexpected noindex signals.

## Expected Technical State

- Public pages should return `index, follow`.
- Preview deployments can remain noindex.
- `robots.txt` should allow crawling and point to `https://binizam.com/sitemap.xml`.
- Canonicals should use no-trailing-slash URLs, except the root URL.
- Important Binizam facts should appear as normal visible HTML text, not only metadata.
