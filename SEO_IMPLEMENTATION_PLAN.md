# Binizam SEO Implementation Plan

Snapshot date: April 30, 2026

This document turns the SEO/page-strategy findings into an executable implementation plan. It should be used with `SEO_AUDIT_FINDINGS.md`.

## Summary

Implement a controlled first-wave content expansion while keeping Binizam positioned as the parent brand for governed internal workflow systems for GCC finance and operations teams.

AR Collections Automation is the flagship wedge and most common first workflow slice, but Binizam should not become an AR-only company.

## Implementation Sequence

1. Update global navigation copy:
   - Change visible `AR Automation` labels to `AR Collections`.
   - Keep top navigation limited to Capabilities, AR Collections, Security, How we work, and Talk to an engineer.

2. Update existing page metadata:
   - `/`
   - `/capabilities`
   - `/ar-collections`
   - `/security`
   - `/how-we-work`
   - `/contact`

3. Expand the AR hub at `/ar-collections`:
   - Define AR collections automation as receivables execution above ERP.
   - Add collector worklists, aging prioritization, payment matching, remittance handling, receipt allocation, reconciliation queues, disputes/PTP, short-pays, deductions, roles, best-fit companies, first-slice examples, and cards to the new child pages.

4. Expand `/capabilities` as the parent-brand page:
   - Keep it broad around governed internal workflow systems, workflow layer above ERP, Retool-first internal apps, queues/worklists, approvals, integrations, workflow state, exception routing, reconciliation, audit trails, controlled automation, and AR Collections as one common starting point.

5. Expand the homepage:
   - Strengthen GCC finance/ops workflow-system positioning.
   - Add links to the AR hub, workflow-layer page, FMCG page, logistics / 3PL page, and receivables reconciliation page.
   - Keep `not ERP replacement` and `not payments provider` language clear.

6. Add first-wave pages:
   - `/ar-collections/fmcg-distributors-uae`
   - `/ar-collections/logistics-3pl-uae`
   - `/ar-collections/receivables-reconciliation`
   - `/capabilities/workflow-layer-above-erp`

7. Lightly expand trust and conversion pages:
   - `/security`: scoped permissions, least privilege, audit logs, encryption, data minimization, AR/finance workflow data boundaries, no payment handling, no full card-data scope, approvals, and traceability.
   - `/how-we-work`: first-slice examples, one queue + one exception path, AR workflow example, QA, handover, runbook, workflow maps, approvals, audit events, integration plan, scoped build approach, and engineer-led fit check.
   - `/contact`: `Talk to an engineer` title/H1, no sales deck tone, and prompts around stuck workflows, systems involved, ERP/accounting systems, bank/remittance/payment files, sensitive approvals, auditability needs, and first-slice scope.

8. Rework footer groups:
   - Binizam: Capabilities, Workflow layer above ERP, Security, How we work, Contact.
   - AR Collections: AR collections automation, UAE FMCG distributors, UAE logistics / 3PL operators, Receivables reconciliation.

9. Run internal-linking and SEO checks:
   - No orphan first-wave pages.
   - No stale `/ar-automation` links.
   - No stale visible `AR Automation` labels.
   - Internal links use no-trailing-slash paths.
   - Canonicals and sitemap stay no-trailing-slash.

## Metadata Targets

| Route | Title | H1 |
|---|---|---|
| `/` | `Workflow Systems for GCC Finance & Ops | Binizam` | `Workflow systems for finance and operations teams` |
| `/capabilities` | `Internal Workflow Automation Capabilities | Binizam` | `Capabilities for governed internal workflow systems` |
| `/ar-collections` | `AR Collections Automation for GCC Finance Teams | Binizam` | `AR collections automation above your ERP` |
| `/security` | `Security for Internal Workflow Systems | Binizam` | `Security and data boundaries for internal workflows` |
| `/how-we-work` | `How Binizam Builds Internal Workflow Systems | Binizam` | `How we build workflow systems in controlled slices` |
| `/contact` | `Talk to an Engineer | Binizam` | `Talk to an engineer` |
| `/ar-collections/fmcg-distributors-uae` | `AR Collections Automation for UAE FMCG Distributors | Binizam` | `AR collections automation for UAE FMCG distributors` |
| `/ar-collections/logistics-3pl-uae` | `Receivables Automation for UAE Logistics & 3PL Operators | Binizam` | `Receivables automation for UAE logistics and 3PL operators` |
| `/ar-collections/receivables-reconciliation` | `Receivables Reconciliation Automation Above ERP | Binizam` | `Receivables reconciliation automation above the ERP` |
| `/capabilities/workflow-layer-above-erp` | `Workflow Layer Above ERP for Finance & Ops | Binizam` | `A workflow layer above your ERP` |

## Test Plan

- Run `npm run build`.
- Confirm generated sitemap includes the four new routes.
- Confirm canonical URLs are no-trailing-slash.
- Confirm every page has one H1 and unique title/meta description.
- Search for accidental `/ar-automation` links, stale `AR Automation` labels, orphaned new pages, and trailing-slash internal hrefs.
- Browser-check desktop and mobile layouts for the homepage, AR hub, one industry page, receivables reconciliation, workflow-layer page, contact, nav, and footer.
- Verify no page implies Binizam replaces ERP, handles payments, has unsupported clients/certifications/partnerships/results, or offers `start free trial` / `book product demo`.
- Run `git diff` and `git status --short --branch`.

## Report-Back Format

After implementation, report:

1. Files changed
2. Pages/routes added
3. Metadata updated
4. Navigation/footer changes
5. Internal links added
6. Sitemap/canonical changes
7. Assumptions made
8. Anything intentionally not implemented and why
9. Risks or follow-up recommendations

## Assumptions

- Root-level docs are correct because the repo has no `docs/` directory.
- Phase-two and held pages are documented but not created now.
- The existing visual language stays intact.
- `Talk to an engineer` remains the primary CTA.
