# IndexNow Setup

IndexNow can notify participating search engines when URLs are added, updated, or deleted. It is not a Google substitute, and this repo does not auto-submit URLs yet.

## Current Decision

IndexNow is documentation-only for now.

- No IndexNow key is hardcoded.
- No URLs are submitted automatically.
- No runtime endpoint is added.

## To Enable Later

1. Generate an IndexNow key.
2. Store it as `INDEXNOW_KEY` in the deployment environment or a secure deployment secret.
3. Publish the key at the site root using the required filename.
4. Submit updated canonical URLs to an IndexNow-compatible endpoint after deployment.
5. Log submissions and failures.

## URLs To Submit After Major SEO Updates

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
- `https://binizam.com/ar/capabilities/internal-tools-development-gcc`
- `https://binizam.com/ar/capabilities/retool-development-gcc`
