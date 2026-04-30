# ClickUp Agent Map

Snapshot date: April 30, 2026

This is the agent-facing map for the connected Binizam ClickUp workspace. Use it before browsing ClickUp broadly. It tells you what context exists, where it lives, and which direct IDs to use when you need the source of truth.

ClickUp remains the source of truth. This file is a navigation layer and context summary, not a mirror of the documents.

## Workspace Snapshot

- Workspace: `90151520424`
- Space: `90156236633` (`Space`)
- Visible hierarchy:
  - Ops (`901513349175`)
    - General list (`901520460107`)
  - Sales (`901513349194`)
    - General list (`901520460106`)
  - Marketing (`901513349208`)
    - Website & Assets list (`901520460108`)
    - General list (`901519859967`)
  - Product (`901513349220`)
    - General list (`901519859980`)
  - Market Research (`901513567642`)
    - MR-00 Setup list (`901520132930`)
    - MR-01 Phase 1 - Desk Research list (`901520132933`)
    - MR-02 Phase 2 - Primary Research list (`901520132934`)
    - MR-03 Phase 3 - Decision list (`901520132932`)
  - Standalone list: `List` (`901514545972`)

Visible inventory in this snapshot:

- 25 document search results across 24 unique documents.
- 56 task results.
- No visible task results were returned for Product, Market Research, or the standalone List in the latest task search.
- `Knowledge Base` is the only visible multi-page document in this snapshot. It contains the root page, two placeholder articles, and an `Onboarding` page.

## Access Recipes

Use these ClickUp connector tools directly. Prefer targeted IDs from this map over broad searches.

### Broad Search

Use when the map does not obviously contain the source you need, or when the user asks for the latest ClickUp state.

```json
_clickup_search({
  "keywords": "normalization",
  "filters": {
    "asset_types": ["doc", "task"]
  },
  "count": 10,
  "sort": [
    { "field": "updated_at", "direction": "desc" }
  ]
})
```

For a full document refresh:

```json
_clickup_search({
  "filters": {
    "asset_types": ["doc"]
  },
  "count": 100,
  "sort": [
    { "field": "updated_at", "direction": "desc" }
  ]
})
```

For a full task refresh:

```json
_clickup_search({
  "filters": {
    "asset_types": ["task"]
  },
  "count": 100,
  "sort": [
    { "field": "updated_at", "direction": "desc" }
  ]
})
```

### List Document Pages

Use when a document has multiple pages, or before reading an unfamiliar document.

```json
_clickup_list_document_pages({
  "document_id": "2kyq6258-155",
  "max_page_depth": -1
})
```

### Read Document Content

Use the `document_id` and `page_id` from the document index below.

```json
_clickup_get_document_pages({
  "document_id": "2kyq6258-595",
  "page_ids": ["2kyq6258-575"],
  "content_format": "text/md"
})
```

### Read Task Details

Use for task descriptions, checklists, due dates, subtasks, or parent-child structure. Use `summary` first unless you know you need full details.

```json
_clickup_get_task({
  "task_id": "86c9aham7",
  "subtasks": true,
  "detail_level": "summary"
})
```

### Read Task Comments

Use only when the task description/subtasks are insufficient. Do not bulk-mirror comments into repo docs.

```json
_clickup_get_task_comments({
  "task_id": "86c9aham7"
})
```

## Source Map By Topic

### Start Here / Onboarding

- `Binizam ICP Definition v1.1` is the base strategy source for target company shape, geography, buyer/champion logic, exclusions, and first-slice fit.
- `Binizam: Positioning and messaging` is the canonical company description, one-liners, 30-second pitch, and disclosure-tier map.
- `Knowledge Base` includes ClickUp default knowledge pages plus an onboarding page about password-manager protocol. Do not copy operational secrets from it; fetch it only when access/onboarding policy is relevant.

### Company Positioning And Messaging

- Use `Binizam: Positioning and messaging` for canonical wording, category boundaries, and how much technical/security detail to reveal at each buying stage.
- Use `Linkedin Page Content` for company-page setup, public tagline/about copy, specialties, banner text, CTA, and launch-post copy.
- Use `Binizam Logo: Decision & Usage Notes` for brand meaning, colors, logo variants, favicon guidance, and Figma source.

### Website, Brand, SEO, And Content

- Use `Website Content` for the actual website copy, page IA, SEO titles/descriptions, microcopy, privacy copy, and CTA language.
- Use `Website Design` for UX style, typography, color rules, layout system, WhatsApp/channel rationale, component language, and motion/trust constraints.
- Use `Website - Stack & Launch Plan` for Astro/Vercel/HubSpot/Cloudflare/Google Workspace stack decisions and launch verification.
- Use `SEO strategy` for search/AEO strategy, sitemap/canonical/indexing rules, Search Console launch checklist, and anti-patterns.
- Use `Binizam Logo: Decision & Usage Notes` for visual identity implementation.

### Market Research, ICP, And Industry Intelligence

- Use `Idea #1: AR automation system` for the original idea YAML, final market-research arbiter verdict, constraints, pricing hypotheses, stack assumptions, and remaining blockers.
- Use `Market Research Master Plan (GCC-first AR Automation)` for the research pipeline and bias-control process.
- Use `Binizam ICP Definition v1.1` as the current base ICP source of truth.
- Use `Binizam: Industries shortlist` for the industry longlist, scoring rubric, shortlist, and early validation plan.
- Use `Industries Validation` for the real-account validation outcomes behind Wholesale / Distribution and Logistics / Freight / 3PL.
- Use the one-page snapshots plus industry intelligence docs for deeper workflow/buyer/system context by industry.

### Sales, Targeting, Sourcing, And Campaign Design

- Use `Target account and contact design` for the detailed account/contact maps for Wholesale / Distribution and Logistics / Freight / 3PL.
- Use `Binizam First-Wave Campaign Design` for the final first-wave lane structure, launch order, learning goals, and guardrails.
- Use `Binizam First-Wave Sourcing Briefs: Working Version` for practical sourcing filters, target titles, keep/drop rules, checklists, and VA workflow.
- Use `Insights: Compaign design logic` for the plain-English logic behind outbound lanes and why early campaigns should be narrow.
- Use `Apollo Demo Call Sheet` for evaluating Apollo vs Prospeo as a sourcing tool.

### Product / Lead Ops Console / Internal Tool Specs

- Use `Binizam Lead Ops Console - Normalization Spec` for the normalization pipeline, deterministic rules, candidate/evidence outputs, matching boundaries, and downstream contract.
- Use `Binizam Lead Ops Console - V1 Schema Checklist` for the proposed database tables, relationships, seed/config tables, migration order, and schema definition of done.
- Use task `Create our first internal tool` for active implementation tracking around the first internal tool.

### Ops And ClickUp Operating System

- Use task `P0.5 ClickUp Operating System v1` for the completed setup of the minimum ClickUp execution system.
- Use the workspace hierarchy in this file to place or find work by function.
- Treat completed tasks as historical execution context unless a completed task clearly records a final decision.

## Document Index

### Core Strategy And Research

| Source | IDs | URL | Summary | Use this when |
| --- | --- | --- | --- | --- |
| Binizam ICP Definition v1.1 | `document_id: 2kyq6258-595`; `page_id: 2kyq6258-575` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-595/2kyq6258-575) | Base ICP: UAE-first, Saudi-next, finance-mature B2B operators with visible AR/credit-control ownership and manual receivables execution above ERP. Defines strong/weak fit, exclusions, champion/buyer pattern, and contained first-slice logic. | You need target-account truth, ICP boundaries, role logic, or fit criteria. |
| Idea #1: AR automation system | `document_id: 2kyq6258-315`; `page_id: 2kyq6258-355` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-315/2kyq6258-355) | Original AR collections automation idea in YAML plus market-research findings and final arbiter decision. Key verdict: product feasibility and pain are supported, but procurement friction, ERP access speed, and competition entrenchment remain blockers to validate. | You need the original offer assumptions, research verdict, stack assumptions, pricing hypotheses, or go/no-go blockers. |
| Market Research Master Plan (GCC-first AR Automation) | `document_id: 2kyq6258-175`; `page_id: 2kyq6258-235` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-175/2kyq6258-235) | Research operating plan: desk research, primary research, go/pivot/kill memo, claim ledger discipline, independent model runs, audit gates, evidence resolver, and final arbiter process. | You need to understand or rerun the validation methodology. |
| Binizam: Industries shortlist | `document_id: 2kyq6258-615`; `page_id: 2kyq6258-595` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-615/2kyq6258-595) | Longlist and scoring rubric across wholesale/distribution, logistics/3PL, industrial equipment, medical supply, building materials, retail distribution, and construction/engineering. Ranks Wholesale / Distribution and Logistics / 3PL highest. | You need industry-prioritization context or why certain industries were selected/deprioritized. |
| Industries Validation | `document_id: 2kyq6258-635`; `page_id: 2kyq6258-615` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-635/2kyq6258-615) | Real-account validation summary. Wholesale / Distribution produced strong Tier A density. Logistics improved after narrowing away from giant/global accounts and toward regional warehouse-heavy operators. | You need evidence behind the first-wave industry choices. |

### Industry Intelligence And Snapshots

| Source | IDs | URL | Summary | Use this when |
| --- | --- | --- | --- | --- |
| Wholesale/Distribution one page snapshot | `document_id: 2kyq6258-655`; `page_id: 2kyq6258-635` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-655/2kyq6258-635) | Concise industry snapshot: why wholesale/distribution fits, buyer map, likely systems, workflow pains, best-fit account pattern, first-slice offer logic, and messaging inputs. | You need a fast summary of the wholesale/distribution opportunity. |
| Wholesale/distribution industry intelligence | `document_id: 2kyq6258-695`; `page_id: 2kyq6258-715` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-695/2kyq6258-715) | Deep workflow map for wholesale/distribution: operating model, receivables workflow, manual work above ERP, exception patterns, likely ERP/payment/remittance environment, first-slice data needs, and value story. | You need detailed wholesale workflow/system assumptions or first-slice design context. |
| Logistics/Freight/3PL one page snapshot | `document_id: 2kyq6258-675`; `page_id: 2kyq6258-695` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-675/2kyq6258-695) | Concise logistics snapshot: regional warehouse-heavy 3PL/forwarding/warehousing pattern, pain points, buyer map, likely systems, best-fit filters, first-slice offer, and messaging angles. | You need a fast summary of the logistics opportunity. |
| Logistics Industry Intelligence | `document_id: 2kyq6258-735`; `page_id: 2kyq6258-755` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-735/2kyq6258-755) | Deep logistics workflow map: billing-to-cash, discrepancy/dispute handling, ops dependencies, likely ERP/WMS/TMS/freight systems, bank/remittance inputs, first-slice data, and difference from wholesale. | You need detailed logistics workflow/system assumptions or first-slice design context. |
| Target account and contact design | `document_id: 2kyq6258-715`; `page_id: 2kyq6258-735` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-715/2kyq6258-735) | Detailed account and contact maps for Wholesale / Distribution and Logistics / Freight / 3PL. Covers subsegments, strong/weak patterns, title maps, buyer/champion/fallback roles, Arabic variants, geography filters, false positives, and sourcing rules. | You need target-account patterns, title selection, or keep/drop sourcing decisions. |

### Sales And Campaign Design

| Source | IDs | URL | Summary | Use this when |
| --- | --- | --- | --- | --- |
| Insights: Compaign design logic | `document_id: 2kyq6258-755`; `page_id: 2kyq6258-775` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-755/2kyq6258-775) | Plain-English explanation of outbound lanes, why blasting broad lists ruins learning, and which decisions campaign structure must make: industry, subsegment, country, role cluster, pain angle, lane count, launch order, and scale/kill rules. | You need to understand the sales logic behind first-wave campaigns. |
| Binizam First-Wave Campaign Design | `document_id: 2kyq6258-795`; `page_id: 2kyq6258-815` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-795/2kyq6258-815) | Final campaign structure. Launch Lane 1: UAE FMCG Distribution AR Control; Lane 2: UAE Warehouse-Heavy Logistics Receivables Execution. Later lanes include UAE Foodservice, Saudi expansion, and selective fulfillment/e-commerce 3PL. | You need final lane structure, launch order, learning goals, or outbound guardrails. |
| Binizam First-Wave Sourcing Briefs: Working Version | `document_id: 2kyq6258-835`; `page_id: 2kyq6258-855` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-835/2kyq6258-855) | Practical sourcing brief for Lane 1 and Lane 2: must-have signals, target titles, sponsor-layer/fallback titles, exclusions, keep/drop logic, scoring checklists, universal researcher rules, and spreadsheet workflow. | You need to source companies/contacts or build lead-list criteria. |
| Apollo Demo Call Sheet | `document_id: 2kyq6258-895`; `page_id: 2kyq6258-915` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-895/2kyq6258-915) | Call script and scorecard for evaluating Apollo vs Prospeo as a sourcing layer, focused on UAE/GCC coverage, role coverage, search precision, email quality, export usability, credits/pricing, and trial/sample asks. | You need to prepare or evaluate the Apollo sourcing-tool demo. |

### Product And Lead Ops Console

| Source | IDs | URL | Summary | Use this when |
| --- | --- | --- | --- | --- |
| Binizam Lead Ops Console - Normalization Spec | `document_id: 2kyq6258-855`; `page_id: 2kyq6258-875` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-855/2kyq6258-875) | Normalization spec for messy Apollo/Prospeo/manual rows. Defines responsibilities, inputs/outputs, deterministic stages, title/geography/subsegment normalization, evidence extraction, errors/warnings, matching/dedupe boundaries, confidence model, and downstream contract. | You are implementing import normalization, dedupe preparation, evidence, or review handoff. |
| Binizam Lead Ops Console - V1 Schema Checklist | `document_id: 2kyq6258-875`; `page_id: 2kyq6258-895` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-875/2kyq6258-895) | Database schema checklist for the lead ops console: users, imports, raw rows, companies, aliases, contacts, title/email history, evidence, normalization events, matches, lanes, candidates, enrichments, reviews, exports, jobs, dictionaries, and reason codes. | You are designing or reviewing schema/migrations for the internal lead ops tool. |

### Website, Brand, And Marketing Assets

| Source | IDs | URL | Summary | Use this when |
| --- | --- | --- | --- | --- |
| Binizam: Positioning and messaging | `document_id: 2kyq6258-375`; `page_id: 2kyq6258-395` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-375/2kyq6258-395) | Canonical positioning statement, AR-specific and Binizam-first one-liners, short/full canonical intros, 30-second pitch, and disclosure-tier map for first impression, discovery, and security/procurement stages. | You need public-facing copy, founder intros, or positioning boundaries. |
| Website Content | `document_id: 2kyq6258-455`; `page_id: 2kyq6258-515` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-455/2kyq6258-515) | Site-wide labels and full page copy for `/`, `/capabilities`, `/ar-collections`, `/security`, `/how-we-work`, `/contact`, `/privacy`, plus SEO titles/descriptions and microcopy. | You are implementing or editing website content. |
| Website Design | `document_id: 2kyq6258-475`; `page_id: 2kyq6258-535` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-475/2kyq6258-535) | Website UX style guide: warm humanist/lucid authority direction, IBM Plex typography, bento/proof-forward layout, components, forms, WhatsApp fast lane, motion limits, trust cues, and sand/graphite palette. | You are making user-visible website UI/design changes. |
| Website - Stack & Launch Plan | `document_id: 2kyq6258-415`; `page_id: 2kyq6258-475` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-415/2kyq6258-475) | Website v0 implementation plan: Astro, Vercel, HubSpot, Git Markdown/MDX content, Cloudflare, Google Workspace, Arabic readiness, risks, and launch checks. | You need website technical stack, launch sequence, or deployment verification. |
| SEO strategy | `document_id: 2kyq6258-395`; `page_id: 2kyq6258-435` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-395/2kyq6258-435) | SEO/AEO plan: indexing, sitemap, robots, canonicals, CWV, IA, security page, structured data, BOFU/MOFU content, Arabic/hreflang, Search Console setup, social preview, and emergency noindex instructions. | You are changing SEO, IA, metadata, structured data, or launch/indexing behavior. |
| Binizam Logo: Decision & Usage Notes | `document_id: 2kyq6258-435`; `page_id: 2kyq6258-495` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-435/2kyq6258-495) | Logo decision record: geometric Arabic Nun concept, color palette, light/dark/icon variants, usage rules, and Figma source. | You need brand assets, colors, favicon/logo guidance, or visual identity rationale. |
| Linkedin Page Content | `document_id: 2kyq6258-575`; `page_id: 2kyq6258-555` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-575/2kyq6258-555) | LinkedIn company page setup pack: owner/admin model, page name/URL, industry, size/type, tagline, about section, specialties, location/language phrasing, logo/banner specs, CTA, first post, founder linkage, and publish checklist. | You are creating/updating the LinkedIn page or launch post. |

### Knowledge Base

| Source | IDs | URL | Summary | Use this when |
| --- | --- | --- | --- | --- |
| Knowledge Base | `document_id: 2kyq6258-155`; `page_id: 2kyq6258-175` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-155/2kyq6258-175) | Mostly ClickUp starter knowledge-base links and template structure. Has subpages `Knowledge Article 1` and `Knowledge Article 2` that are placeholder/template content. | You need ClickUp help-center structure or to confirm that the KB pages are mostly starter templates. |
| Knowledge Article 1 | `document_id: 2kyq6258-155`; `page_id: 2kyq6258-195` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-155/2kyq6258-195) | Placeholder/example knowledge-base article template. | Usually ignore unless updating KB structure. |
| Knowledge Article 2 | `document_id: 2kyq6258-155`; `page_id: 2kyq6258-215` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-155/2kyq6258-215) | Placeholder/example knowledge-base article template. | Usually ignore unless updating KB structure. |
| Onboarding | `document_id: 2kyq6258-155`; `page_id: 2kyq6258-455` | [Open](https://app.clickup.com/90151520424/docs/2kyq6258-155/2kyq6258-455) | Onboarding note about company password-management policy and access workflow. Contains operational security guidance; fetch only when relevant and do not copy secrets into repo docs. | You need onboarding/access policy context. |

## Task Index

Use tasks for execution state, ownership, and historical decisions. A `complete` task is historical context unless it clearly records a final decision. For task details or comments, fetch by task ID rather than browsing.

### Ops / General (`901513349175` / `901520460107`)

| Task | ID | Status | Assignee | Parent | Why inspect |
| --- | --- | --- | --- | --- | --- |
| [P0.5 ClickUp Operating System v1](https://app.clickup.com/t/86c7vm78h) | `86c7vm78h` | complete | Unassigned | - | Understand the completed minimum ClickUp operating system setup. |
| [Create our first internal tool](https://app.clickup.com/t/86c9ahdpv) | `86c9ahdpv` | to do | tesnime sebei | - | Track active work for the first internal tool / lead ops console. |

### Sales / General (`901513349194` / `901520460106`)

| Task | ID | Status | Assignee | Parent | Why inspect |
| --- | --- | --- | --- | --- | --- |
| [Industry solution understanding](https://app.clickup.com/t/86c9aham7) | `86c9aham7` | to do | tesnime sebei | - | Parent task for industry operating briefs, systems mapping, and first-slice solution shapes. |
| [Build Wholesale / Distribution operating brief](https://app.clickup.com/t/86c9ahazv) | `86c9ahazv` | complete | tesnime sebei | `86c9aham7` | Historical work behind the wholesale operating brief. |
| [Build Logistics / Freight / 3PL operating brief](https://app.clickup.com/t/86c9ahb9j) | `86c9ahb9j` | complete | tesnime sebei | `86c9aham7` | Historical work behind the logistics operating brief. |
| [Map likely ERP / systems environment for Wholesale / Distribution](https://app.clickup.com/t/86c9ahbm5) | `86c9ahbm5` | complete | tesnime sebei | `86c9aham7` | Historical task for wholesale systems assumptions. |
| [Map likely ERP / systems environment for Logistics / Freight / 3PL](https://app.clickup.com/t/86c9ahbt1) | `86c9ahbt1` | complete | tesnime sebei | `86c9aham7` | Historical task for logistics systems assumptions. |
| [Define first-slice solution shape for Wholesale / Distribution](https://app.clickup.com/t/86c9ahbwx) | `86c9ahbwx` | to do | tesnime sebei | `86c9aham7` | Active/pending work to turn wholesale research into the first workflow slice. |
| [Define first-slice solution shape for Logistics / Freight / 3PL](https://app.clickup.com/t/86c9ahbzj) | `86c9ahbzj` | to do | tesnime sebei | `86c9aham7` | Active/pending work to turn logistics research into the first workflow slice. |
| [Targeting and campaign structure](https://app.clickup.com/t/86c9ahchy) | `86c9ahchy` | complete | tesnime sebei | - | Parent task for target account/contact maps and first-wave campaign structure. |
| [Define target account pattern for Wholesale / Distribution](https://app.clickup.com/t/86c9ahcjr) | `86c9ahcjr` | complete | tesnime sebei | `86c9ahchy` | Historical task behind wholesale account-pattern decisions. |
| [Define target account pattern for Logistics / Freight / 3PL](https://app.clickup.com/t/86c9ahcth) | `86c9ahcth` | complete | tesnime sebei | `86c9ahchy` | Historical task behind logistics account-pattern decisions. |
| [Define target contact map for Wholesale / Distribution](https://app.clickup.com/t/86c9ahcya) | `86c9ahcya` | complete | tesnime sebei | `86c9ahchy` | Historical task behind wholesale title/contact mapping. |
| [Define target contact map for Logistics / Freight / 3PL](https://app.clickup.com/t/86c9ahdpk) | `86c9ahdpk` | complete | tesnime sebei | `86c9ahchy` | Historical task behind logistics title/contact mapping. |
| [Design first-wave campaign structure](https://app.clickup.com/t/86c9ahdue) | `86c9ahdue` | complete | tesnime sebei | `86c9ahchy` | Historical task behind the final first-wave campaign design. |
| [Lead sourcing and messaging prep](https://app.clickup.com/t/86c9ahe0a) | `86c9ahe0a` | to do | tesnime sebei | - | Parent task for lead-list criteria and messaging inputs. |
| [Build first lead-list criteria for both industries](https://app.clickup.com/t/86c9ahe4v) | `86c9ahe4v` | complete | tesnime sebei | `86c9ahe0a` | Historical source for list-building rules across both first-wave industries. |
| [Define messaging inputs for first-wave outreach](https://app.clickup.com/t/86c9ahea6) | `86c9ahea6` | to do | tesnime sebei | `86c9ahe0a` | Active/pending work for outbound messaging inputs. |
| [Create a dictionnary doc for must-know terms in the target industries](https://app.clickup.com/t/86c9az9p8) | `86c9az9p8` | to do | tesnime sebei | - | Pending glossary/dictionary work for industry terminology. |
| [Define target industries](https://app.clickup.com/t/86c96998e) | `86c96998e` | complete | tesnime sebei | - | Parent task for early target-industry definition and validation. |
| [Generate candidate industries](https://app.clickup.com/t/86c9699x0) | `86c9699x0` | complete | tesnime sebei | `86c96998e` | Historical task behind the initial industry longlist. |
| [Lock the ICP foundation](https://app.clickup.com/t/86c96999q) | `86c96999q` | complete | tesnime sebei | `86c96998e` | Historical task behind the ICP foundation. |
| [Research and understand the shortlisted industries](https://app.clickup.com/t/86c969aw2) | `86c969aw2` | complete | tesnime sebei | `86c96998e` | Historical task behind industry research. |
| [Build the industry decision](https://app.clickup.com/t/86c969ba9) | `86c969ba9` | complete | Unassigned | `86c96998e` | Historical task behind final industry decisions. |
| [Build the one-page industry snapshot](https://app.clickup.com/t/86c969bdx) | `86c969bdx` | complete | Unassigned | `86c96998e` | Historical task behind industry snapshot docs. |
| [Verify the total launch cost for our sales pipeline](https://app.clickup.com/t/86c8nm5g9) | `86c8nm5g9` | complete | Mahmoud Ali | - | Historical cost check for the sales pipeline/tooling stack. |
| [warm up all 3 domains](https://app.clickup.com/t/86c8nkdne) | `86c8nkdne` | complete | Mahmoud Ali | - | Historical email-domain warmup work. |
| [Buy domains for cold outreach](https://app.clickup.com/t/86c8nkdhd) | `86c8nkdhd` | complete | Mahmoud Ali | - | Historical cold-outreach domain acquisition work. |
| [Update company engineering inbox identity](https://app.clickup.com/t/86c96xc13) | `86c96xc13` | complete | Mahmoud Ali | - | Historical email identity/configuration task. The original ClickUp title contains a specific inbox address; keep this map redacted. |
| [Define pilot scope](https://app.clickup.com/t/86c9aa3pj) | `86c9aa3pj` | to do | Unassigned | - | Pending work to define pilot scope. |
| [Create templates for cold outreach](https://app.clickup.com/t/86c9aa2eh) | `86c9aa2eh` | to do | Unassigned | - | Pending outbound template creation. |
| [Learn how to use smartlead](https://app.clickup.com/t/86c9aa27h) | `86c9aa27h` | to do | Unassigned | - | Pending Smartlead operating knowledge. |
| [decide between apollo and prospio](https://app.clickup.com/t/86c9aa1yt) | `86c9aa1yt` | to do | Unassigned | - | Pending sourcing-tool decision. |
| [Choose between Smartlead vs Instantly.ai for the email sequencer](https://app.clickup.com/t/86c8nmffw) | `86c8nmffw` | complete | tesnime sebei | - | Historical email-sequencer decision work. |

### Marketing / Website & Assets (`901513349208` / `901520460108`)

| Task | ID | Status | Assignee | Parent | Why inspect |
| --- | --- | --- | --- | --- | --- |
| [P0.4 Website v0 (single page) + HubSpot contact point](https://app.clickup.com/t/86c7vm78f) | `86c7vm78f` | complete | tesnime sebei | - | Historical website v0 launch task and HubSpot contact point context. |
| [Ensure indexing safety + canonical/OG consistency](https://app.clickup.com/t/86c91bw0q) | `86c91bw0q` | complete | tesnime sebei | - | Historical SEO/indexing safety task. |
| [Ensure Sitemap + robots.txt correctness](https://app.clickup.com/t/86c91c9d6) | `86c91c9d6` | complete | tesnime sebei | - | Historical sitemap/robots verification task. |
| [Connect Hubspot](https://app.clickup.com/t/86c91chkf) | `86c91chkf` | complete | tesnime sebei | - | Historical HubSpot connection task. |
| [Vercel deploy hygiene (prod vs preview behavior)](https://app.clickup.com/t/86c91crr0) | `86c91crr0` | complete | tesnime sebei | - | Historical production/preview deployment hygiene task. |
| [Full SEO/AEO validation pass (production URL first, domain later)](https://app.clickup.com/t/86c91djh9) | `86c91djh9` | complete | Mahmoud Ali | - | Historical SEO/AEO validation task. |
| [Check mobile performance (Lighthouse evidence run)](https://app.clickup.com/t/86c91dk7p) | `86c91dk7p` | complete | tesnime sebei | - | Historical mobile performance/Lighthouse task. |
| [Email deliverability basics (Google Workspace DNS)](https://app.clickup.com/t/86c91dmey) | `86c91dmey` | to do | tesnime sebei | - | Pending DNS/deliverability work for Google Workspace. |
| [Add /ar/ placeholder route (reserved) + keep it always noindex](https://app.clickup.com/t/86c93zkga) | `86c93zkga` | to do | tesnime sebei | - | Pending Arabic route reservation/noindex task. |
| [Domain cutover (final step) + go live indexing switch](https://app.clickup.com/t/86c91dkpj) | `86c91dkpj` | complete | tesnime sebei | - | Historical domain cutover and indexing switch task. |
| [Search Console + sitemap submission (post-domain, post-indexing switch)](https://app.clickup.com/t/86c91dm1z) | `86c91dm1z` | complete | tesnime sebei | - | Historical Search Console and sitemap submission task. |
| [Website / credibility assets](https://app.clickup.com/t/86c9ahc3f) | `86c9ahc3f` | to do | tesnime sebei | - | Pending website credibility asset work. |
| [Weekly website maintenance checklist (10-15 minutes)](https://app.clickup.com/t/86c95kkpg) | `86c95kkpg` | to do | tesnime sebei | - | Pending recurring-style website maintenance process. |
| [Add lightweight analytics without hurting performance](https://app.clickup.com/t/86c95khe9) | `86c95khe9` | to do | tesnime sebei | - | Pending analytics implementation task. |
| [Fix favicon issue](https://app.clickup.com/t/86c9aa89k) | `86c9aa89k` | to do | Unassigned | - | Pending favicon fix. |
| [SEO improvements](https://app.clickup.com/t/86c966nhe) | `86c966nhe` | to do | Unassigned | - | Pending SEO improvement work. |

### Marketing / General (`901513349208` / `901519859967`)

| Task | ID | Status | Assignee | Parent | Why inspect |
| --- | --- | --- | --- | --- | --- |
| [Create Linkedin page](https://app.clickup.com/t/86c949x03) | `86c949x03` | complete | Unassigned | - | Historical LinkedIn page creation task. |
| [Create first linkedin post](https://app.clickup.com/t/86c94y2fp) | `86c94y2fp` | complete | Unassigned | - | Historical first LinkedIn post task. |
| [Create second linkedin post](https://app.clickup.com/t/86c9aa8m8) | `86c9aa8m8` | complete | Unassigned | - | Historical second LinkedIn post task. |
| [Create third linkedin post](https://app.clickup.com/t/86c9aa8q2) | `86c9aa8q2` | to do | Unassigned | - | Pending third LinkedIn post task. |
| [Look for GCC focused alternatives to linkedin and consider creating an account there](https://app.clickup.com/t/86c9aa8z2) | `86c9aa8z2` | to do | Unassigned | - | Pending GCC social/channel exploration. |
| [Create fourth linkedin post](https://app.clickup.com/t/86c9afvm6) | `86c9afvm6` | to do | Unassigned | - | Pending fourth LinkedIn post task. |

## Refresh Procedure

When this map may be stale, refresh in this order:

1. Fetch hierarchy with `_clickup_get_workspace_hierarchy({ "limit": 50, "max_depth": 2 })`.
2. Fetch docs with `_clickup_search({ "filters": { "asset_types": ["doc"] }, "count": 100, "sort": [{ "field": "updated_at", "direction": "desc" }] })`.
3. Fetch tasks with `_clickup_search({ "filters": { "asset_types": ["task"] }, "count": 100, "sort": [{ "field": "updated_at", "direction": "desc" }] })`.
4. For new or changed docs, call `_clickup_list_document_pages` and then `_clickup_get_document_pages` with `content_format: "text/md"`.
5. For task groups that matter to current work, call `_clickup_get_task` with `subtasks: true` and `detail_level: "summary"`.
6. Compare counts to this snapshot: 24 unique docs / 25 doc search results / 56 tasks.
7. Update this file with new IDs, URLs, summaries, and task status changes. Do not copy full document bodies or task comments into this map.

## Verification Notes For This Snapshot

- On April 30, 2026, the ClickUp connector confirmed the workspace hierarchy exactly as listed above.
- The latest document search returned 25 doc results across 24 unique documents, matching the provided snapshot.
- The latest task search returned 56 task results, matching the provided snapshot.
- `Knowledge Base` page listing was refreshed with `_clickup_list_document_pages`; visible pages are `Knowledge Base`, `Knowledge Article 1`, `Knowledge Article 2`, and `Onboarding`.
- Task parent/subtask structure was spot-checked with `Industry solution understanding` (`86c9aham7`) and `Targeting and campaign structure` (`86c9ahchy`) using `_clickup_get_task({ "subtasks": true, "detail_level": "summary" })`.
- The task title for `86c96xc13` still contains a specific inbox address in ClickUp. This map intentionally uses a redacted operational title.
- This file intentionally excludes emails, profile-image URLs, credentials, and long copied ClickUp bodies.
