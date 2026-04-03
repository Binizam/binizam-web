export interface NavChild {
  label: string;
  href: string;
  description: string;
  icon: string;
}

export interface NavSection {
  label: string;
  href: string;
  items?: NavChild[];
}

export interface PageCard {
  icon: string;
  title: string;
  text: string;
  label?: string;
}

export interface PageSection {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  cards: PageCard[];
  note?: string;
}

export interface GuideArticleBlock {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  cards: PageCard[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedLink {
  eyebrow: string;
  label: string;
  href: string;
  description: string;
  icon: string;
}

export interface PageVisual {
  caption: string;
  cards: PageCard[];
  tone?: 'amber' | 'emerald' | 'sky' | 'rose' | 'indigo' | 'slate';
}

interface BaseSeoPage {
  slug: string;
  href: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  directAnswer: string;
  quickLinks: Array<{ label: string; href: string }>;
  sections: PageSection[];
  faqs: FaqItem[];
  relatedLinks: RelatedLink[];
  visual: PageVisual;
}

export interface SolutionPage extends BaseSeoPage {
  kind: 'solution';
  serviceName: string;
  outcomes: PageCard[];
  scopeTag: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
}

export interface IntegrationPage extends BaseSeoPage {
  kind: 'integration';
  serviceName: string;
  stackBoundary: {
    systemOfRecord: string;
    binizamLayer: string;
  };
}

export interface GuidePage extends BaseSeoPage {
  kind: 'guide';
  articleSummary: string;
  articleCategory: string;
  articleBlocks: GuideArticleBlock[];
  dateModified: string;
  readTime: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
}

export type SeoPage = SolutionPage | IntegrationPage | GuidePage;

const solutionQuickLinks = [
  { label: 'What this solves', href: '#what-this-solves' },
  { label: 'Workflow design', href: '#workflow-design' },
  { label: 'Implementation scope', href: '#implementation-scope' },
  { label: 'FAQ', href: '#faq' }
];

const integrationQuickLinks = [
  { label: 'Integration model', href: '#integration-model' },
  { label: 'What stays in your ERP', href: '#system-boundary' },
  { label: 'Rollout sequence', href: '#rollout-sequence' },
  { label: 'FAQ', href: '#faq' }
];

const guideQuickLinks = [
  { label: 'Key takeaways', href: '#key-takeaways' },
  { label: 'Workflow example', href: '#workflow-example' },
  { label: 'What to implement first', href: '#what-to-implement-first' },
  { label: 'FAQ', href: '#faq' }
];

export const solutionPages: SolutionPage[] = [
  {
    kind: 'solution',
    slug: 'accounts-receivable-automation',
    href: '/solutions/accounts-receivable-automation/',
    title: 'Accounts Receivable Automation for GCC Finance Teams | Binizam',
    description:
      'Accounts receivable automation for GCC finance teams across collections, cash application, payment reconciliation, and disputes, with ERP-safe controls and audit-ready workflows.',
    eyebrow: 'Solutions / Accounts receivable automation',
    h1: 'Accounts receivable automation for GCC finance teams that need control, speed, and ERP-safe execution.',
    lead:
      'Build one operating layer for collections, cash application, disputes, and payment reconciliation so UAE and Saudi finance teams can run AR from queues, approvals, and exception states while SAP, Oracle, Dynamics, or your ERP remains the system of record.',
    directAnswer:
      'Accounts receivable automation replaces spreadsheet follow-up, manual remittance matching, ad hoc dispute routing, and month-end reconciliation cleanup with governed workflows tied to ERP data. For GCC teams, the practical goal is not “AI everywhere”; it is one queue-driven AR operating model with clear owners, approval gates, bilingual-ready labels, and an auditable state trail for every customer account and exception.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'Best main entry point',
    serviceName: 'Accounts receivable automation',
    secondaryCtaHref: '/solutions/ar-collections-automation/',
    secondaryCtaLabel: 'See collections workflows',
    outcomes: [
      {
        icon: 'solar:chart-2-linear',
        title: 'Cleaner DSO and overdue control',
        text: 'Track collector coverage, PTP commitments, dispute age, exception aging, and owner accountability from one AR operating layer instead of stitching status from exports.',
        label: 'DSO'
      },
      {
        icon: 'solar:clipboard-list-linear',
        title: 'Less manual coordination across teams',
        text: 'Move follow-up actions, payment exceptions, customer disputes, and manager escalations out of inbox threads into shared queues with explicit status logic.',
        label: 'Queues'
      },
      {
        icon: 'solar:shield-check-linear',
        title: 'Audit-ready workflow history',
        text: 'Keep approval decisions, queue overrides, status changes, and ERP handoff events visible for finance managers, internal control reviews, and implementation handover.',
        label: 'Control'
      }
    ],
    visual: {
      caption: 'AR workflow map',
      tone: 'amber',
      cards: [
        {
          icon: 'solar:bill-list-linear',
          title: 'Open invoices, aging, and customer context',
          text: 'Sync open AR, account status, owner assignment, and customer context from ERP/CRM systems into one queue layer.',
          label: '01'
        },
        {
          icon: 'solar:users-group-two-rounded-linear',
          title: 'Collections, PTP, disputes, and manager review',
          text: 'Route daily collector actions, promise-to-pay updates, dispute states, and approval-required outcomes through governed workflow transitions.',
          label: '02'
        },
        {
          icon: 'solar:scale-linear',
          title: 'Cash application, reconciliation, and ERP handoff',
          text: 'Match incoming payments where confidence is high, isolate exceptions, and send only controlled updates back to the system of record.',
          label: '03'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'The AR workflow bottlenecks we usually automate first',
        intro:
          'This page is the umbrella workflow map for GCC AR teams. Each module below can ship as a narrow first slice, then expand once collectors, managers, and finance operations agree on one queue model, one exception taxonomy, and one ERP boundary.',
        cards: [
          {
            icon: 'solar:sort-from-bottom-to-top-linear',
            title: 'Collector prioritization and follow-up queues',
            text: 'Rank accounts by aging bucket, open amount, customer segment, dispute/PTP state, SLA, and escalation risk so collectors start from one operational queue instead of manually re-sorting exports each morning.'
          },
          {
            icon: 'solar:inbox-archive-linear',
            title: 'Cash application and unapplied-cash exceptions',
            text: 'Capture missing remittance references, short payments, unidentified receipts, and duplicate-match candidates in a reason-coded queue with one owner, one due date, and one closure status.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Promise-to-pay, dispute, and deduction tracking',
            text: 'Separate “customer promised to pay” from “customer disputes the invoice,” require evidence and reason codes, and make manager review mandatory for sensitive adjustments or write-off recommendations.'
          },
          {
            icon: 'solar:layers-minimalistic-linear',
            title: 'Payment reconciliation before close week',
            text: 'Continuously compare “expected vs actual” payment state across bank data, remittance records, and ERP/customer-account status so breaks are owned during the month, not discovered in a last-minute close scramble.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'What the AR operating layer should include without replacing your ERP',
        intro:
          'The implementation should make the control model explicit: what operators see, what gets automated, where humans approve, and which financial actions remain in SAP, Oracle, Dynamics, or the system you already trust.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Worklists, next actions, and queue governance',
            text: 'Shared queues with account ownership, queue reason, customer priority, action due date, current state, and a reassignment trail so manager reviews are based on real workflow activity.'
          },
          {
            icon: 'solar:bolt-linear',
            title: 'Cadence logic, reminders, and escalation rules',
            text: 'Automate internal reminders, overdue-task nudges, SLA escalations, and customer follow-up prompts while keeping account-sensitive communication reviewable where wording matters.'
          },
          {
            icon: 'solar:key-minimalistic-square-linear',
            title: 'Approval boundaries for sensitive outcomes',
            text: 'Gate write-offs, credit adjustments, settlement decisions, customer-specific tolerance overrides, and queue-rule exceptions behind named manager approval flows with visible context.'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'Audit trail, reporting state, and operational KPIs',
            text: 'Store a durable event history for status changes, approvals, reminders, and ERP handoff events so dashboards reflect real team actions and DSO/exception reports are not manually reconstructed.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'How to ship a safe first version without over-scoping the AR program',
        intro:
          'For most GCC finance teams, the safest rollout is one queue, one owner group, one reason taxonomy, and one read-heavy ERP sync first. Once the operating loop is stable, expand to adjacent AR modules and UAE/KSA-specific variants.',
        cards: [
          {
            icon: 'solar:radar-linear',
            title: 'Start with one high-friction queue',
            text: 'Pick one book of business, one entity, or one exception category where the current pain is obvious and the success criteria are easy for finance leaders to validate.'
          },
          {
            icon: 'solar:plug-circle-linear',
            title: 'Integrate ERP, CRM, and bank data with least privilege',
            text: 'Start read-heavy, isolate exactly which write-back actions are allowed, and make every downstream update and sync failure visible before expanding automation scope.'
          },
          {
            icon: 'solar:calendar-mark-linear',
            title: 'Validate the state model with managers before rollout',
            text: 'Review status definitions, queue ranking logic, approval rules, bilingual label needs, and handover documentation in a short implementation cycle before opening the workflow to every collector.'
          }
        ],
        note:
          'Binizam does not replace your ERP or act as a payment processor. The workflow layer sits alongside your system of record and makes the work that currently lives in spreadsheets, WhatsApp follow-ups, and email threads visible, reviewable, and auditable.'
      }
    ],
    faqs: [
      {
        q: 'What does accounts receivable automation include?',
        a: 'For Binizam, AR automation usually includes collector worklists, follow-up workflows, promise-to-pay tracking, dispute and deduction handling, cash-application exceptions, payment reconciliation, approval controls, and audit-ready operational reporting tied to ERP context.'
      },
      {
        q: 'Does Binizam replace SAP, Oracle, or Microsoft Dynamics?',
        a: 'No. SAP, Oracle, Microsoft Dynamics, or your ERP should remain the system of record for ledger postings, master data, statutory invoicing logic, and core financial ownership. Binizam builds the AR workflow layer, operator queues, and exception controls around that system.'
      },
      {
        q: 'Can the first implementation be limited to one workflow?',
        a: 'Yes. A strong first rollout is usually one collections queue, one cash-application exception class, or one reconciliation workflow for a single entity or team. That lets finance leaders verify state logic, approvals, and reporting before expanding across the AR stack.'
      },
      {
        q: 'Is this relevant if our GCC teams work in both Arabic and English?',
        a: 'Yes. The current rollout can remain English-first while the content model, state labels, and route structure stay Arabic-ready so bilingual UI labels and Arabic pages can be added later without rebuilding the page system.'
      },
      {
        q: 'How should AI be introduced in AR workflows?',
        a: 'Use AI only where recommendations, draft actions, or matching suggestions are reviewable and reversible. For the first version, it is usually safer to anchor the workflow in explainable rules, approval gates, and a complete audit trail, then add AI assistance only where it improves operator speed without weakening control.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'AR Collections Automation',
        href: '/solutions/ar-collections-automation/',
        description: 'Go deeper on collector queues, follow-up cadences, PTP states, dispute handling, and manager exception review.',
        icon: 'solar:users-group-two-rounded-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Cash Application Automation',
        href: '/solutions/cash-application-automation/',
        description: 'See how remittance capture, confidence-based matching, short-pay handling, and ERP-safe posting work in practice.',
        icon: 'solar:inbox-archive-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'What is accounts receivable automation?',
        href: '/guides/what-is-accounts-receivable-automation/',
        description: 'Use the guide to explain the operating model internally before you scope a first AR workflow implementation.',
        icon: 'solar:book-bookmark-linear'
      }
    ]
  },
  {
    kind: 'solution',
    slug: 'ar-collections-automation',
    href: '/solutions/ar-collections-automation/',
    title: 'AR Collections Automation with Worklists, PTP, and Disputes | Binizam',
    description:
      'AR collections automation for GCC finance teams: ranked collector worklists, follow-up cadences, PTP and dispute state tracking, manager approvals, and ERP-connected audit trails.',
    eyebrow: 'Solutions / AR collections automation',
    h1: 'AR collections automation with prioritized collector worklists, PTP workflows, dispute states, and manager-visible controls.',
    lead:
      'Give collectors one ranked queue, make promise-to-pay and dispute outcomes traceable, and keep manager exceptions controlled while your ERP remains the system of record for invoices, customer balances, and financial postings.',
    directAnswer:
      'AR collections automation should give every collector one ranked worklist, define the next action for each overdue account, capture promise-to-pay and dispute states in a consistent taxonomy, and preserve manager approval and audit history for every sensitive outcome. For GCC teams, it should also support entity/segment routing and Arabic-ready labels without forcing a replacement of SAP, Oracle, Dynamics, or your existing ERP.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'Most common starting point',
    serviceName: 'AR collections automation',
    secondaryCtaHref: '/guides/ar-collections-workflow/',
    secondaryCtaLabel: 'Read the collections workflow guide',
    outcomes: [
      {
        icon: 'solar:sort-from-bottom-to-top-linear',
        title: 'Prioritized collector coverage',
        text: 'Reduce missed follow-ups by giving each collector one explainable queue with owner assignment, next-action reason, due date, and stale-action visibility by segment or entity.',
        label: 'Focus'
      },
      {
        icon: 'solar:hand-shake-linear',
        title: 'Structured PTP and dispute handling',
        text: 'Capture customer promises, disputed invoices, reason codes, evidence links, and escalation paths in one state model that managers and operators can trust.',
        label: 'PTP'
      },
      {
        icon: 'solar:document-text-linear',
        title: 'Manager-visible audit trail',
        text: 'Record who changed an account state, approved an exception, postponed a follow-up, reassigned a queue item, or overrode a prioritization rule and why.',
        label: 'Audit'
      }
    ],
    visual: {
      caption: 'Collections worklist flow',
      tone: 'indigo',
      cards: [
        {
          icon: 'solar:clipboard-list-linear',
          title: 'Daily collector queue',
          text: 'Accounts ranked by aging, amount, segment, SLA, broken PTP, and manager-defined priority rules.',
          label: 'Worklist'
        },
        {
          icon: 'solar:alarm-linear',
          title: 'Follow-up cadence and response logging',
          text: 'Due-today reminders, customer response capture, next-action creation, and escalation triggers when promises slip.',
          label: 'Cadence'
        },
        {
          icon: 'solar:shield-keyhole-linear',
          title: 'Dispute, special handling, and approval queue',
          text: 'Manager review for disputed balances, settlement requests, write-off recommendations, and customer-specific override requests.',
          label: 'Control'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'Where collections work usually breaks when the process lives in exports and email',
        intro:
          'The goal is not simply more reminders. The goal is one operating loop where every overdue customer account has a current owner, a workflow state, a next action, a promise/dispute history, and a review path when the account becomes sensitive.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Spreadsheet-based collector assignment',
            text: 'Replace manual sorting, duplicated account ownership, and ad hoc reassignment with queue rules, segment filters, and an auditable handoff history.'
          },
          {
            icon: 'solar:history-2-linear',
            title: 'Follow-ups and customer responses buried in email',
            text: 'Turn call notes, email outcomes, promised dates, and next-step creation into workflow updates so collectors are not relying on inbox memory or private trackers.'
          },
          {
            icon: 'solar:users-group-two-rounded-linear',
            title: 'PTP and dispute states tracked inconsistently',
            text: 'Require promise dates, expected payment amounts, dispute reason codes, evidence links, owner updates, and escalation triggers so management reporting reflects actual account status.'
          },
          {
            icon: 'solar:shield-warning-linear',
            title: 'High-risk accounts not escalated in time',
            text: 'Surface broken PTPs, stale disputes, large-value overdue balances, and accounts breaching SLA into manager review queues before they quietly age further.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'Collector and manager workflows that should be designed first',
        intro:
          'These are the operator-facing modules that matter most in a first implementation. Each one should be explainable to collectors, finance managers, and operations leaders before you introduce deeper automation or AI-assisted ranking.',
        cards: [
          {
            icon: 'solar:sort-from-bottom-to-top-linear',
            title: 'Collector worklists',
            text: 'Daily queue ranked by aging, invoice value, customer tier, dispute/PTP state, SLA, risk, and owner rules, with a clear explanation for why each account is on today’s list.'
          },
          {
            icon: 'solar:alarm-linear',
            title: 'Follow-up sequences',
            text: 'Cadence reminders, internal escalations, next-action prompts, and response logging that respect account-specific sensitivity and do not send customer-facing messages without the right review boundary.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'PTP, dispute, and broken-promise states',
            text: 'Promise date, expected payment amount, dispute category, assigned owner, broken-PTP escalation, and mandatory approval rules for settlement, credit, or write-off outcomes.'
          },
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'Manager exceptions',
            text: 'Separate review queues for stalled accounts, customer-specific handling, queue-rule overrides, high-risk balances, and exception outcomes that require management sign-off.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'Safe V1 implementation pattern for a collections rollout',
        intro:
          'Start with one queue and one action model, then add richer PTP/dispute states, customer templates, bilingual labels, and segmentation rules once managers trust the workflow data and collectors are using the queue daily.',
        cards: [
          {
            icon: 'solar:checklist-minimalistic-linear',
            title: 'Launch one ranked queue and a small state taxonomy',
            text: 'Begin with the core collector worklist plus a small number of validated statuses such as “follow-up due,” “PTP received,” “dispute open,” “manager review,” and “resolved.”'
          },
          {
            icon: 'solar:link-circle-linear',
            title: 'Connect one source-of-record sync and one exception feed',
            text: 'Sync open AR and customer status from ERP/CRM, then add write-back rules only for explicitly approved outcomes and keep all sync failures visible.'
          },
          {
            icon: 'solar:document-add-linear',
            title: 'Document the manager review model before scaling',
            text: 'Write down queue rules, state definitions, reassignment rules, approval boundaries, and reporting expectations before expanding to more entities or a larger book of business.'
          }
        ],
        note:
          'A rule-based queue is usually the right V1. AI suggestions can be layered later, but collector ranking and exception handling should remain explainable and overrideable so finance leaders do not lose trust in the workflow.'
      }
    ],
    faqs: [
      {
        q: 'Does AR collections automation replace our ERP or collections module?',
        a: 'No. When an ERP is involved, Binizam adds a queue, workflow, and exception layer alongside the system of record. The ERP remains authoritative for invoice balances, ledger postings, and master data.'
      },
      {
        q: 'Can promise-to-pay and dispute workflows be tracked separately?',
        a: 'Yes. They should be separate states. A promise-to-pay means the customer acknowledges the balance but payment is pending. A dispute means the invoice itself is being challenged and usually requires reason coding, evidence, and a different approval path.'
      },
      {
        q: 'Do you send customer emails or process payments directly?',
        a: 'Binizam is not a payment processor. We can support follow-up workflows, task assignment, and reviewed message templates, but payment movement should stay in your approved payment channels and financial systems.'
      },
      {
        q: 'Can AI be used in collections workflows?',
        a: 'Yes, but only where the suggestion or draft action remains reviewable and overrideable. For example, AI may help draft notes or propose queue priority, but manager approvals, dispute outcomes, and account-sensitive actions should stay governed.'
      },
      {
        q: 'What is the best starting point if our team is spread across UAE and Saudi entities?',
        a: 'Start with one entity, one collector team, and one set of statuses so the operating rhythm is stable. Then add entity-specific routing, bilingual labels, and localized approval rules once the first queue is working.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Collector Worklists',
        href: '/solutions/collector-worklists/',
        description: 'See the queue-prioritization model behind a high-coverage collector operating rhythm.',
        icon: 'solar:sort-from-bottom-to-top-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Invoice Dispute Management',
        href: '/solutions/invoice-dispute-management/',
        description: 'Go deeper on dispute reason codes, evidence collection, approval paths, and resolution history.',
        icon: 'solar:hand-shake-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'AR collections workflow best practices',
        href: '/guides/ar-collections-workflow/',
        description: 'Use this guide to align your team on queue states, follow-up cadences, and escalation rules before implementation.',
        icon: 'solar:book-bookmark-linear'
      }
    ]
  },
  {
    kind: 'solution',
    slug: 'cash-application-automation',
    href: '/solutions/cash-application-automation/',
    title: 'Cash Application Automation for AR Payment Matching | Binizam',
    description:
      'Cash application automation for AR teams: remittance capture, confidence-based invoice matching, short-pay and no-match exception queues, and ERP-safe posting handoff.',
    eyebrow: 'Solutions / Cash application automation',
    h1: 'Cash application automation that matches clean payments quickly and routes every exception into an owned review workflow.',
    lead:
      'Bring bank lines, transfer references, remittance emails, and open-invoice context into one workflow so finance ops can auto-match the obvious cases, review short pays and no-reference items, and hand safe postings back to the ERP.',
    directAnswer:
      'Cash application automation should reconcile incoming bank payments and remittance data against open invoices, propose exact and near-match candidates with visible confidence, route partial payments and missing-reference items into reason-coded exception queues, and only trigger ERP posting where the review and approval boundary is explicit.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'High leverage after collections',
    serviceName: 'Cash application automation',
    secondaryCtaHref: '/guides/cash-application/',
    secondaryCtaLabel: 'Read the cash application guide',
    outcomes: [
      {
        icon: 'solar:inbox-archive-linear',
        title: 'Less unapplied-cash cleanup',
        text: 'Move unidentified receipts, short pays, and no-reference items into reason-coded queues with owner assignment, due dates, and closure status.',
        label: 'Exceptions'
      },
      {
        icon: 'solar:scanner-linear',
        title: 'More consistent remittance intake',
        text: 'Standardize bank-file imports, payment references, attachment capture, and email remittance parsing before matching rules run.',
        label: 'Remittance'
      },
      {
        icon: 'solar:link-circle-linear',
        title: 'Safer ERP handoff and reversal handling',
        text: 'Define which match scenarios can be posted automatically, which require human review, and how failed or reversed postings are tracked back to the source payment.',
        label: 'ERP'
      }
    ],
    visual: {
      caption: 'Cash application matching flow',
      tone: 'emerald',
      cards: [
        {
          icon: 'solar:banknote-linear',
          title: 'Payment and remittance intake',
          text: 'Capture bank file rows, transfer references, lockbox-style files, customer remittance emails, and attachment metadata.',
          label: 'Capture'
        },
        {
          icon: 'solar:scanner-linear',
          title: 'Matching rules and confidence review',
          text: 'Score candidates using invoice references, amount/tolerance logic, customer mapping, date windows, and duplicate detection.',
          label: 'Match'
        },
        {
          icon: 'solar:layers-minimalistic-linear',
          title: 'Exception queue and ERP posting handoff',
          text: 'Route short pays, no-match cases, duplicate candidates, and posting failures into owned resolution states.',
          label: 'Review'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'Cash application bottlenecks to move out of email, exports, and manual side trackers',
        intro:
          'The implementation should make source capture, matching confidence, exception reason, owner assignment, and ERP handoff status visible so unapplied cash and short-pay cleanup becomes a daily workflow instead of a close-week firefight.',
        cards: [
          {
            icon: 'solar:bill-check-linear',
            title: 'Missing, messy, or inconsistent remittance references',
            text: 'Normalize transfer references, invoice numbers, customer identifiers, attachment metadata, and operational email context before the matching engine proposes a candidate.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Partial payments, short pays, and deductions',
            text: 'Route short-pay transactions, deductions, and underpayments into a dispute or reconciliation workflow with reason codes instead of leaving them parked in local spreadsheets.'
          },
          {
            icon: 'solar:copy-linear',
            title: 'Duplicate matches and stale review decisions',
            text: 'Track candidate status, reviewer action, posting result, and reversal outcomes so operators can tell what has already been handled and which payment records are still unresolved.'
          },
          {
            icon: 'solar:user-check-linear',
            title: 'No clear owner for no-match exceptions',
            text: 'Assign unidentified receipts, account-mapping breaks, and document-missing cases to a named owner with an SLA so no-match items do not sit unworked for weeks.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'Matching and exception states that make the process controllable',
        intro:
          'The matching logic should be explainable to finance users, not a black box. Operators need to see why a payment matched, why a candidate was rejected, and what must happen before the cash can be posted safely.',
        cards: [
          {
            icon: 'solar:scanner-linear',
            title: 'Exact-match and near-match candidate generation',
            text: 'Propose match candidates using invoice references, customer-account mapping, amount/tolerance rules, transaction dates, remittance document text, and duplicate-payment checks.'
          },
          {
            icon: 'solar:key-minimalistic-square-linear',
            title: 'Confidence thresholds and approval boundaries',
            text: 'Post only high-confidence scenarios that your team explicitly approves. Send low-confidence matches, large tolerances, and customer-specific edge cases to a human review queue with the right context attached.'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'Reason-coded exceptions and closure states',
            text: 'Classify no-match, short-pay, duplicate, unidentified, timing mismatch, and account-mapping failures so reporting shows why cash remains unapplied and what action closed each case.'
          },
          {
            icon: 'solar:cloud-upload-linear',
            title: 'ERP posting handoff and error handling',
            text: 'Make posting attempts, failed write-back events, reversal requests, and manual fallback steps visible so operators are not guessing whether the ERP update succeeded.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'Safe V1 rollout for cash application automation',
        intro:
          'Start where source data is clean enough to deliver visible improvement without pretending every payment can be posted touchlessly on day one. A strong V1 usually automates the easy matches and makes exceptions dramatically easier to resolve.',
        cards: [
          {
            icon: 'solar:file-text-linear',
            title: 'One bank feed, payment channel, or customer segment',
            text: 'Launch matching and exception handling for one file format, one entity, or one high-volume customer segment before widening coverage.'
          },
          {
            icon: 'solar:tuning-linear',
            title: 'One tolerance model and one exception taxonomy',
            text: 'Define exact-match rules, review-required thresholds, short-pay categories, and closure states so operators trust why a payment went to auto-post or to review.'
          },
          {
            icon: 'solar:cloud-upload-linear',
            title: 'One controlled ERP posting path',
            text: 'Make the handoff payload, approval boundary, failure handling, reversal process, and audit fields explicit before expanding automated write-back.'
          }
        ],
        note:
          'If remittance quality is uneven, a hybrid model is often the right starting point: automate exact matches, queue near-matches for review, and use reason-coded exceptions to expose which customers or channels create the most unresolved cash.'
      }
    ],
    faqs: [
      {
        q: 'Can cash application be fully automated?',
        a: 'Some payment matches can be automated with high confidence, especially when references and amounts line up cleanly. Partial payments, deductions, missing references, and low-confidence candidates should usually be routed to a review workflow instead of forced posting.'
      },
      {
        q: 'How do you handle short payments or deductions?',
        a: 'Short pays should be captured with a reason code, linked to invoice and customer context, assigned to an owner, and routed into dispute or reconciliation workflows where approvals and final closure are recorded.'
      },
      {
        q: 'Can bank files and email remittances both be supported?',
        a: 'Yes. The workflow can ingest structured bank files, API payloads, and operational remittance emails or attachments. Matching and review rules should be rolled out source by source so each channel has clear validation and exception handling.'
      },
      {
        q: 'Does Binizam post cash directly into the ERP?',
        a: 'Binizam can support a controlled posting handoff, but the ERP should remain the system of record for ledger ownership and financial posting logic. For a first rollout, many teams prefer a review-first or read-first approach before enabling broader write-back.'
      },
      {
        q: 'How does this connect to payment reconciliation?',
        a: 'Cash application focuses on matching a payment to open invoices and deciding what can be posted. Payment reconciliation checks whether actual bank, remittance, and ERP states remain aligned over time and routes any mismatch into an exception workflow.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Payment Reconciliation Automation',
        href: '/solutions/payment-reconciliation-automation/',
        description: 'Move from payment matching into continuous “expected vs actual” reconciliation and exception ownership.',
        icon: 'solar:scale-linear'
      },
      {
        eyebrow: 'Integration',
        label: 'APIs & Bank Files',
        href: '/integrations/api-bank-files/',
        description: 'See how bank-file ingestion, APIs, webhooks, retries, and idempotent sync fit the workflow boundary.',
        icon: 'solar:programming-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'Cash application explained',
        href: '/guides/cash-application/',
        description: 'Use the guide to align your team on matching logic, exception states, and ERP handoff rules before implementation.',
        icon: 'solar:book-bookmark-linear'
      }
    ]
  },
  {
    kind: 'solution',
    slug: 'payment-reconciliation-automation',
    href: '/solutions/payment-reconciliation-automation/',
    title: 'Payment Reconciliation Automation for AR Exception Queues | Binizam',
    description:
      'Payment reconciliation automation for bank-to-ERP mismatches, short-pay routing, exception ownership, SLA tracking, and audit trails.',
    eyebrow: 'Solutions / Payment reconciliation automation',
    h1: 'Payment reconciliation automation for bank, ERP, and customer-account mismatches that need owner-based exception handling.',
    lead:
      'Turn out-of-sync bank lines, remittance events, ERP postings, and customer-account statuses into reason-coded exception queues with one owner, one SLA, one resolution path, and one audit history.',
    directAnswer:
      'Payment reconciliation automation compares expected AR and ERP state with actual bank/payment events, isolates timing, amount, duplicate, and customer-mapping mismatches, assigns an owner and due date, and tracks how each break was resolved. The outcome should be a live exception workflow that supports continuous close, not a spreadsheet-only month-end scramble.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'Best for exception-heavy finance ops',
    serviceName: 'Payment reconciliation automation',
    secondaryCtaHref: '/solutions/cash-application-automation/',
    secondaryCtaLabel: 'See cash application workflows',
    outcomes: [
      {
        icon: 'solar:scale-linear',
        title: 'Earlier mismatch detection',
        text: 'Surface timing, amount, duplicate, and missing-reference issues while they are still actionable.',
        label: 'Control'
      },
      {
        icon: 'solar:users-group-rounded-linear',
        title: 'Clear exception ownership',
        text: 'Route each break to finance ops, collections, customer ops, or a manager review queue.',
        label: 'Owners'
      },
      {
        icon: 'solar:clock-circle-linear',
        title: 'SLA and aging visibility',
        text: 'See how long exceptions remain open and which categories create repeated operational drag.',
        label: 'SLA'
      }
    ],
    visual: {
      caption: 'Expected vs actual reconciliation',
      tone: 'sky',
      cards: [
        {
          icon: 'solar:database-linear',
          title: 'Expected state',
          text: 'Open invoices, customer account status, posted-payment records, expected remittance references, and master-data mappings.',
          label: 'ERP'
        },
        {
          icon: 'solar:transfer-horizontal-linear',
          title: 'Actual event',
          text: 'Incoming bank line, gateway settlement, remittance update, customer-side payment action, or manual posting event.',
          label: 'Bank'
        },
        {
          icon: 'solar:shield-warning-linear',
          title: 'Owned mismatch queue',
          text: 'Route duplicate, partial, timing, customer-mapping, and failed-posting exceptions to the right team with an SLA and closure state.',
          label: 'Review'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'Where payment reconciliation breaks accumulate when bank, ERP, and customer data drift out of sync',
        intro:
          'The page should make the exception taxonomy obvious so finance buyers, operators, and LLMs can understand exactly what the workflow layer is responsible for and what remains owned by the ERP or payment system.',
        cards: [
          {
            icon: 'solar:clock-circle-linear',
            title: 'Timing mismatches',
            text: 'Payments arrive before ERP state refreshes, batch jobs lag behind bank settlement, or collector follow-up happens against stale account status, creating false breaks and duplicated work.'
          },
          {
            icon: 'solar:shield-warning-linear',
            title: 'Amount and short-pay breaks',
            text: 'Customer payment does not equal the open invoice amount because of deductions, rounding, bank fees, disputes, or partial settlement, so each case needs a reason code and a resolution owner.'
          },
          {
            icon: 'solar:user-id-linear',
            title: 'Customer mapping and reference issues',
            text: 'Bank references, legal-entity names, remittance identifiers, and invoice numbers do not align cleanly with ERP master data, especially across multiple GCC entities or customer hierarchies.'
          },
          {
            icon: 'solar:cloud-cross-linear',
            title: 'Failed write-back or duplicate posting events',
            text: 'A posting attempt fails, a reversal is needed, or two systems update the same payment state in different sequences, so operators need one visible recovery path.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'Exception workflow states that turn reconciliation into a daily operating process',
        intro:
          'Every reconciliation break should become one operational object with a source snapshot, a reason code, one owner, one due date, one resolution path, and one audit trail that records how the break was closed.',
        cards: [
          {
            icon: 'solar:folder-open-linear',
            title: 'Exception intake',
            text: 'Create a queue item with source system, event timestamp, customer/entity context, invoice references, amount delta, confidence score, reason code, current owner, and due date.'
          },
          {
            icon: 'solar:check-read-linear',
            title: 'Resolution paths',
            text: 'Route the case to remittance lookup, collector follow-up, dispute escalation, manual posting review, account-mapping correction, or manager approval based on the break category.'
          },
          {
            icon: 'solar:chart-square-linear',
            title: 'Recurring-break reporting',
            text: 'Report volume, aging, reopen rate, and closure reasons by customer, bank channel, ERP entity, and exception class so recurring process or master-data issues become visible.'
          },
          {
            icon: 'solar:shield-check-linear',
            title: 'Closure and control evidence',
            text: 'Store who closed the break, which data changed, what evidence was reviewed, and whether an ERP write-back or manual correction was performed.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'What to implement first for a reconciliation rollout',
        intro:
          'Start by routing one high-friction exception category into a controlled queue, then widen the taxonomy, entity coverage, and sync frequency once the ownership model and closure rules are stable.',
        cards: [
          {
            icon: 'solar:filter-linear',
            title: 'Pick one exception class',
            text: 'For example: no-remittance payments above a threshold, duplicate transfer references, short pays from a specific customer segment, or failed ERP write-back events.'
          },
          {
            icon: 'solar:link-circle-linear',
            title: 'Anchor the source and target systems',
            text: 'Define the exact bank fields, ERP fields, polling cadence, deduplication rules, and ownership routing before enabling any automated write-back or case closure logic.'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'Define closure rules',
            text: 'Document what “resolved” means for each exception class, which evidence and audit fields are mandatory, and when manager approval is required before an item can leave the queue.'
          }
        ],
        note:
          'For exception-heavy teams, reconciliation usually improves faster when the first milestone is “every break is visible and owned” rather than “every break is auto-fixed.” That keeps the workflow realistic and gives finance leaders cleaner root-cause reporting.'
      }
    ],
    faqs: [
      {
        q: 'What causes payment reconciliation breaks?',
        a: 'Common causes include timing differences between bank and ERP updates, partial or short payments, missing remittance references, duplicate transfer identifiers, failed posting attempts, and customer-account mapping mismatches across systems or entities.'
      },
      {
        q: 'Who should own reconciliation exceptions?',
        a: 'Ownership should depend on the break type. Finance ops may handle posting and matching issues, collections may handle customer clarification, master-data owners may handle mapping corrections, and managers should review sensitive adjustments or overrides.'
      },
      {
        q: 'Can reconciliation be monitored continuously instead of only at month-end?',
        a: 'Yes. The goal of the workflow layer is to detect breaks continuously, assign them quickly, and make exception aging visible before close so reconciliation becomes a live operating process rather than a month-end clean-up exercise.'
      },
      {
        q: 'How is this different from cash application automation?',
        a: 'Cash application focuses on matching a payment to invoices and deciding what can be posted. Payment reconciliation checks whether actual bank, remittance, and ERP states remain aligned after those events and routes any mismatch into an owned exception workflow.'
      },
      {
        q: 'Can a first version run read-only?',
        a: 'Yes. A read-first V1 is often the safest way to validate exception detection, reason codes, owner routing, and SLA reporting before enabling controlled ERP updates or closure write-back.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Cash Application Automation',
        href: '/solutions/cash-application-automation/',
        description: 'Payment and remittance matching with controlled exception queues.',
        icon: 'solar:scanner-linear'
      },
      {
        eyebrow: 'Integration',
        label: 'APIs & Bank Files',
        href: '/integrations/api-bank-files/',
        description: 'Bank files, APIs, polling, and webhook patterns for AR reconciliation.',
        icon: 'solar:programming-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'How to reduce DSO in GCC',
        href: '/guides/reduce-dso-gcc/',
        description: 'Operational playbook for improving collections visibility and exception follow-through.',
        icon: 'solar:book-bookmark-linear'
      }
    ]
  },
  {
    kind: 'solution',
    slug: 'invoice-dispute-management',
    href: '/solutions/invoice-dispute-management/',
    title: 'Invoice Dispute Management Workflows for AR Teams | Binizam',
    description:
      'Invoice dispute management workflows for deduction tracking, reason codes, evidence collection, approvals, and ERP/customer-status synchronization.',
    eyebrow: 'Solutions / Invoice dispute management',
    h1: 'Invoice dispute and deduction workflows with ownership, approvals, and traceability.',
    lead:
      'Capture disputes and deductions in a structured state model so finance, customer ops, and managers can resolve issues without losing context across inboxes.',
    directAnswer:
      'Invoice dispute management should separate “customer promised to pay” from “customer disputes the invoice,” require reason codes and evidence, assign owners and due dates, and keep approval history visible before account status is updated in the ERP or CRM.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'Best for dispute-heavy AR books',
    serviceName: 'Invoice dispute management',
    outcomes: [
      {
        icon: 'solar:hand-shake-linear',
        title: 'Cleaner dispute states',
        text: 'Track status, reason, evidence, owner, and resolution path for each disputed invoice or deduction.',
        label: 'States'
      },
      {
        icon: 'solar:shield-keyhole-linear',
        title: 'Controlled adjustments',
        text: 'Require approval for sensitive credit notes, write-offs, or special handling outcomes.',
        label: 'Approvals'
      },
      {
        icon: 'solar:document-text-linear',
        title: 'No lost context',
        text: 'Keep customer communication, evidence requests, and internal decisions tied to one workflow record.',
        label: 'Traceability'
      }
    ],
    visual: {
      caption: 'Dispute state model',
      cards: [
        {
          icon: 'solar:inbox-unread-linear',
          title: 'Dispute intake',
          text: 'Capture reason code, owner, due date, and invoice/customer context.',
          label: 'Open'
        },
        {
          icon: 'solar:file-check-linear',
          title: 'Evidence + review',
          text: 'Collect documents, route to the right owner, and request approval where needed.',
          label: 'Review'
        },
        {
          icon: 'solar:check-read-linear',
          title: 'Resolution + sync',
          text: 'Close with outcome, audit trail, and ERP/customer-status update boundaries.',
          label: 'Close'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'Dispute and deduction workflows that should not live in email threads',
        intro:
          'The implementation should make disputed invoices visible as first-class work items, not side-notes buried under the collections process.',
        cards: [
          {
            icon: 'solar:hand-shake-linear',
            title: 'PTP and disputes mixed together',
            text: 'Separate promise-to-pay tracking from true invoice disputes so collector reporting stays accurate.'
          },
          {
            icon: 'solar:file-text-linear',
            title: 'Missing evidence and reason codes',
            text: 'Require structured inputs before escalation so finance managers can review the case without hunting through inboxes.'
          },
          {
            icon: 'solar:user-linear',
            title: 'Unclear owner handoffs',
            text: 'Route customer-service, finance, and manager steps through explicit ownership transitions and status changes.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'Core dispute workflow modules',
        intro:
          'These sections should become expandable content areas in the shared solution template, with enough specificity for search and LLM extraction.',
        cards: [
          {
            icon: 'solar:tag-linear',
            title: 'Dispute taxonomy',
            text: 'Reason codes for pricing, delivery, tax, credit memo, duplicate billing, quantity, or contract mismatch.'
          },
          {
            icon: 'solar:folder-open-linear',
            title: 'Evidence collection',
            text: 'Attach documents, customer notes, shipment references, and internal review comments to one case record.'
          },
          {
            icon: 'solar:shield-check-linear',
            title: 'Approval matrix',
            text: 'Define which outcomes can be resolved by operators and which require finance-manager review.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'Safe V1 scope',
        intro:
          'Launch one dispute queue and one reason taxonomy first, then add deeper ERP write-back and customer-specific automation.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'One dispute queue',
            text: 'Centralize open disputes with required fields and owner assignment.'
          },
          {
            icon: 'solar:layers-minimalistic-linear',
            title: 'One status model',
            text: 'Use a small, governed set of statuses so reporting and escalation rules stay clean.'
          },
          {
            icon: 'solar:link-circle-linear',
            title: 'One ERP/customer sync rule',
            text: 'Define how resolution should or should not update invoice/customer state in downstream systems.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'How are disputes different from promise-to-pay states?',
        a: 'A promise to pay means the customer agrees the invoice is owed but payment is pending. A dispute means the customer is challenging all or part of the invoice, which usually requires evidence, reason coding, and a separate resolution path.'
      },
      {
        q: 'Can customer communication be automated?',
        a: 'Some reminders and status updates can be templated, but customer-facing messages should remain reviewable where wording, approval, or account-specific nuance matters.'
      },
      {
        q: 'What audit data should be retained?',
        a: 'Retain reason codes, owner changes, approval actions, supporting evidence, timestamps, and final resolution outcomes.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'AR Collections Automation',
        href: '/solutions/ar-collections-automation/',
        description: 'Connect dispute states to collector worklists and follow-up queues.',
        icon: 'solar:users-group-two-rounded-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Payment Reconciliation Automation',
        href: '/solutions/payment-reconciliation-automation/',
        description: 'Route disputed short-pay and customer-account mismatches into owned exception workflows.',
        icon: 'solar:scale-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'AR collections workflow best practices',
        href: '/guides/ar-collections-workflow/',
        description: 'How to structure collections, PTP, and dispute states without spreadsheet drift.',
        icon: 'solar:book-bookmark-linear'
      }
    ]
  },
  {
    kind: 'solution',
    slug: 'collector-worklists',
    href: '/solutions/collector-worklists/',
    title: 'Collector Worklists and AR Queue Prioritization | Binizam',
    description:
      'Collector worklists and AR queue prioritization for aging, SLA, customer risk, next-action routing, manager escalation, and reporting.',
    eyebrow: 'Solutions / Collector worklists',
    h1: 'Collector worklists that rank accounts by aging, risk, SLA, and next best action.',
    lead:
      'Replace manual spreadsheet sorting with a governed collector queue where every account has a reason, owner, and next step.',
    directAnswer:
      'A strong collector worklist ranks accounts using business rules such as aging, balance, segment, SLA, dispute/PTP state, and account risk, then assigns one clear owner and one next action so coverage and escalation are visible every day.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'Best for team execution control',
    serviceName: 'Collector worklists and prioritization',
    outcomes: [
      {
        icon: 'solar:list-check-minimalistic-linear',
        title: 'One daily queue',
        text: 'Collectors start from a ranked list instead of rebuilding priorities manually.',
        label: 'Queue'
      },
      {
        icon: 'solar:user-id-linear',
        title: 'Clear ownership',
        text: 'Each account, invoice, or case has one assigned owner and a visible status trail.',
        label: 'Owner'
      },
      {
        icon: 'solar:chart-square-linear',
        title: 'Manager reporting',
        text: 'See stale actions, unworked high-risk accounts, and workload distribution by team or segment.',
        label: 'Metrics'
      }
    ],
    visual: {
      caption: 'Queue prioritization card stack',
      cards: [
        {
          icon: 'solar:fire-linear',
          title: 'Priority 1',
          text: 'High balance, aging risk, broken PTP, or urgent SLA.',
          label: 'Aging 90+'
        },
        {
          icon: 'solar:clock-circle-linear',
          title: 'Priority 2',
          text: 'Follow-up due today, customer response pending, or payment confirmation needed.',
          label: 'Due today'
        },
        {
          icon: 'solar:shield-warning-linear',
          title: 'Manager review',
          text: 'Special handling, disputed balance, or approval-required exception.',
          label: 'Escalation'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'Why collector teams lose coverage',
        intro:
          'The queue should make invisible prioritization logic explicit so users and search engines can understand the workflow model clearly.',
        cards: [
          {
            icon: 'solar:sort-from-bottom-to-top-linear',
            title: 'Manual sorting by aging exports',
            text: 'Replace spreadsheet filters with configurable ranking logic and segment views.'
          },
          {
            icon: 'solar:alarm-linear',
            title: 'Missed follow-up timing',
            text: 'Attach due dates, next actions, and reminders to the queue item instead of relying on memory.'
          },
          {
            icon: 'solar:users-group-rounded-linear',
            title: 'Overlapping or unclear ownership',
            text: 'Make owner assignment and reassignments auditable so work does not get double-handled or dropped.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'Queue fields and manager controls',
        intro:
          'These are the content blocks and data scaffolds that can later support richer examples or mockups.',
        cards: [
          {
            icon: 'solar:chart-linear',
            title: 'Ranking rules',
            text: 'Aging bucket, open amount, customer tier, dispute/PTP state, SLA, and business-specific priority overrides.'
          },
          {
            icon: 'solar:check-read-linear',
            title: 'Next-action guidance',
            text: 'Structured recommended action, due date, contact channel, and reason for the queue position.'
          },
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'Escalations and overrides',
            text: 'Manager controls for reassignment, exception handling, and high-risk or sensitive accounts.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'How to launch worklists safely',
        intro:
          'Roll out one queue definition and one status taxonomy first, then iterate once collector behavior and manager reporting match expectations.',
        cards: [
          {
            icon: 'solar:filter-linear',
            title: 'One segment or team',
            text: 'Start with one customer segment, one entity, or one collector group.'
          },
          {
            icon: 'solar:tuning-linear',
            title: 'One ranking model',
            text: 'Choose a small number of explainable sorting rules before adding predictive logic.'
          },
          {
            icon: 'solar:chart-square-linear',
            title: 'One review dashboard',
            text: 'Give managers a simple view of overdue actions, stale queues, and exception volume.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'How should collector prioritization rules work?',
        a: 'Start with explainable rules such as aging, balance, segment, due date, dispute/PTP state, and SLA. AI recommendations can be added later, but the ranking should remain reviewable.'
      },
      {
        q: 'How is account ownership assigned?',
        a: 'Ownership can follow customer segment, entity, geography, queue type, or manager assignment rules, but each record should show one current owner and a reassignment history.'
      },
      {
        q: 'Is AI required for collector worklists?',
        a: 'No. A rule-based queue is often the safer V1. AI can be added only where the recommendation can be audited and overridden.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'AR Collections Automation',
        href: '/solutions/ar-collections-automation/',
        description: 'Use the worklist as the entry point into follow-up, PTP, and dispute workflows.',
        icon: 'solar:users-group-two-rounded-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'How to reduce DSO in GCC',
        href: '/guides/reduce-dso-gcc/',
        description: 'Why queue coverage and escalation discipline matter for overdue recovery.',
        icon: 'solar:chart-2-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'AR collections workflow best practices',
        href: '/guides/ar-collections-workflow/',
        description: 'Workflow states, queue design, and collector-management operating rhythm.',
        icon: 'solar:book-bookmark-linear'
      }
    ]
  },
  {
    kind: 'solution',
    slug: 'accounts-receivable-automation-uae',
    href: '/solutions/accounts-receivable-automation-uae/',
    title: 'Accounts Receivable Automation UAE for Finance Teams | Binizam',
    description:
      'Accounts receivable automation for UAE finance teams in Dubai, Abu Dhabi, and multi-entity UAE operations: collections, cash application, reconciliation, bilingual-ready workflows, and ERP-safe controls.',
    eyebrow: 'Solutions / UAE',
    h1: 'Accounts receivable automation for UAE finance and operations teams running multi-entity, bilingual AR workflows.',
    lead:
      'Build English-first but Arabic-ready AR workflows for UAE teams in Dubai, Abu Dhabi, and multi-entity operating structures while keeping ERP ownership, approval controls, and data boundaries explicit.',
    directAnswer:
      'Accounts receivable automation for UAE teams should support bilingual-ready operator labels, entity-specific collection queues, manager approvals, VAT-aware workflow context, and ERP-integrated cash application, disputes, and reconciliation without replacing the statutory system of record. The safest model is to automate operating workflows and exception routing while leaving financial postings, tax logic, and authoritative master data in SAP, Oracle, Dynamics, or your approved finance systems.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'GCC market page',
    serviceName: 'Accounts receivable automation UAE',
    secondaryCtaHref: '/solutions/ar-collections-automation/',
    secondaryCtaLabel: 'See UAE collections workflows',
    outcomes: [
      {
        icon: 'solar:global-linear',
        title: 'Arabic + English workflow readiness',
        text: 'Design queue labels, status models, and operating flows so Arabic pages and bilingual UIs can be added cleanly.',
        label: 'Bilingual'
      },
      {
        icon: 'solar:shield-check-linear',
        title: 'UAE control boundaries',
        text: 'Make ERP ownership, approvals, and hosting/security constraints explicit for local finance stakeholders.',
        label: 'Governance'
      },
      {
        icon: 'solar:plug-circle-linear',
        title: 'UAE integration flexibility',
        text: 'Support ERP, CRM, bank-file, and API patterns commonly seen in UAE operating stacks.',
        label: 'Integrations'
      }
    ],
    visual: {
      caption: 'UAE AR workflow localization',
      tone: 'rose',
      cards: [
        {
          icon: 'solar:map-point-linear',
          title: 'UAE entities, emirate coverage, and team routing',
          text: 'Segment queues by UAE legal entity, emirate coverage, customer segment, language preference, and manager ownership.',
          label: 'UAE'
        },
        {
          icon: 'solar:global-linear',
          title: 'Arabic + English operating labels',
          text: 'Use English-first content while keeping workflow state names, metadata, and route structure ready for Arabic UI and Arabic page expansion.',
          label: 'EN / AR'
        },
        {
          icon: 'solar:bill-list-linear',
          title: 'VAT-aware invoice and dispute context',
          text: 'Surface invoice and tax-context fields in the workflow layer while leaving statutory tax posting and compliance logic in the approved ERP or finance stack.',
          label: 'VAT'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'Common UAE AR operating gaps in multi-entity teams',
        intro:
          'This page answers UAE-specific buyer intent while routing readers to the core AR suite and module pages. The implementation focus is practical: make overdue ownership, dispute status, payment exceptions, and approvals visible across entities and teams.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Entity, emirate, and segment-specific collection queues',
            text: 'Model worklists by UAE legal entity, business unit, emirate coverage, customer segment, and manager ownership so each collector sees the right book and escalation path.'
          },
          {
            icon: 'solar:layers-minimalistic-linear',
            title: 'Bank/payment exception handling across local channels',
            text: 'Route remittance mismatches, short pays, unidentified receipts, and account-mapping breaks into reason-coded queues with explicit owner assignment and manager visibility.'
          },
          {
            icon: 'solar:global-linear',
            title: 'Bilingual workflow rollout path',
            text: 'Use an English-first implementation if that matches your operating team today, but keep Arabic-ready labels, content fields, and URL patterns so Arabic pages and bilingual UI can follow without a redesign.'
          },
          {
            icon: 'solar:shield-check-linear',
            title: 'Manager approval and audit controls',
            text: 'Standardize approval rules for sensitive dispute outcomes, settlement decisions, write-off recommendations, and customer-specific overrides with an audit trail tied to the workflow state.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'What a UAE AR workflow rollout should explain clearly',
        intro:
          'The content should be UAE-specific without overstating legal or statutory behavior. Binizam should be positioned as the workflow and exception layer, while VAT rules, invoice posting, and financial source-of-truth logic remain in the approved system of record.',
        cards: [
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'Data hosting, least-privilege access, and audit boundaries',
            text: 'Explain which systems are read, which systems can be written to, who has operator or manager access, and how audit logs are retained, then route buyers to the Security page for deeper review.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Commercial follow-up, PTP, and dispute workflows',
            text: 'Show how collector actions, promise-to-pay commitments, dispute routing, document requests, and manager approvals work for UAE finance teams handling a mixed customer base.'
          },
          {
            icon: 'solar:bill-check-linear',
            title: 'VAT/e-invoicing caution zone',
            text: 'Expose invoice and VAT context where operators need it, but avoid positioning the workflow layer as the statutory tax engine or invoice issuer unless that logic remains in your approved ERP or local finance system.'
          },
          {
            icon: 'solar:plug-circle-linear',
            title: 'UAE integration patterns',
            text: 'Map how SAP, Oracle, Dynamics, CRM data, bank files, and internal APIs feed the queue layer, and define how exceptions are reconciled back to the source system.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'Suggested first UAE rollout for a safe V1',
        intro:
          'Start with one UAE entity, one customer segment, or one high-volume collector workflow, then expand to bilingual UI labels, additional emirates/entities, and adjacent AR modules once managers trust the state model.',
        cards: [
          {
            icon: 'solar:map-point-linear',
            title: 'One UAE entity, one team, or one customer segment',
            text: 'Ship one collections or exception workflow for a clearly bounded business unit first so adoption, approvals, and reporting can be validated quickly.'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'One operating taxonomy with Arabic-ready fields',
            text: 'Define queue states, reason codes, escalation paths, and manager approval rules in English first while preserving Arabic-ready labels and translation keys in the content model.'
          },
          {
            icon: 'solar:plug-circle-linear',
            title: 'One ERP/bank integration path and one control boundary',
            text: 'Anchor exactly what is read from ERP and bank systems, what is allowed to be written back, and how failed sync or posting exceptions are reconciled.'
          }
        ],
        note:
          'For UAE buyers, we should keep the message precise: Binizam runs the workflow, queues, approvals, and exception routing layer; your ERP and approved finance systems should remain authoritative for statutory tax and posting logic.'
      }
    ],
    faqs: [
      {
        q: 'Can UAE workflows support both Arabic and English?',
        a: 'Yes. The first rollout can be English-first while queue labels, workflow state fields, and route structures remain Arabic-ready so Arabic pages and bilingual UI text can be introduced later without rebuilding the page and data model.'
      },
      {
        q: 'Where should VAT or e-invoicing logic live?',
        a: 'Binizam can expose invoice context, tax-related fields, and dispute workflow metadata to operators, but statutory tax logic, invoice issuance, and source-of-truth posting rules should remain in your ERP or approved finance systems.'
      },
      {
        q: 'Can implementation start with one UAE business unit?',
        a: 'Yes. That is usually the safest rollout path. Start with one entity, team, or customer segment; validate ownership rules, approval boundaries, and reporting; then expand to additional UAE entities, emirates, and bilingual operational views.'
      },
      {
        q: 'Does Binizam support UAE-specific bank files or local integration patterns?',
        a: 'The integration layer can support APIs, batch files, and bank-file ingestion patterns, but each source should be scoped explicitly so validation, retry behavior, and exception handling are clear before rollout.'
      },
      {
        q: 'How is this UAE page different from the main AR automation page?',
        a: 'The main AR automation page explains the full operating model. This UAE page localizes that model for UAE entity structures, bilingual operating needs, local approval patterns, and UAE buyer search intent.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Accounts Receivable Automation',
        href: '/solutions/accounts-receivable-automation/',
        description: 'The full AR workflow map that this UAE page localizes.',
        icon: 'solar:chart-2-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'AR Collections Automation',
        href: '/solutions/ar-collections-automation/',
        description: 'See the collector queue, PTP/dispute state model, and manager exception handling that a UAE rollout can start with.',
        icon: 'solar:users-group-two-rounded-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'How to reduce DSO in GCC',
        href: '/guides/reduce-dso-gcc/',
        description: 'Use the GCC DSO playbook to connect UAE collector coverage, dispute escalation, and reconciliation exceptions.',
        icon: 'solar:book-bookmark-linear'
      },
      {
        eyebrow: 'Support',
        label: 'Security',
        href: '/security/',
        description: 'Access model, data boundaries, hosting, and least-privilege implementation posture.',
        icon: 'solar:shield-check-linear'
      }
    ]
  },
  {
    kind: 'solution',
    slug: 'accounts-receivable-automation-saudi-arabia',
    href: '/solutions/accounts-receivable-automation-saudi-arabia/',
    title: 'Accounts Receivable Automation Saudi Arabia for KSA Finance Teams | Binizam',
    description:
      'Accounts receivable automation for Saudi Arabia finance teams: AR collections, dispute workflows, reconciliation queues, Arabic-ready operations, and ZATCA-aware ERP boundaries.',
    eyebrow: 'Solutions / Saudi Arabia',
    h1: 'Accounts receivable automation for Saudi finance teams that need Arabic-ready workflows and clear ZATCA/system-of-record boundaries.',
    lead:
      'Build Arabic/English-ready AR workflows for Saudi teams with queue-based collections, owned reconciliation exceptions, manager approval controls, and a conservative ERP boundary that keeps statutory posting and ZATCA-sensitive logic in approved systems.',
    directAnswer:
      'Accounts receivable automation for Saudi finance teams should structure collections, disputes, and payment reconciliation around named owners, reason codes, and manager approvals, support Arabic/English operating labels, and keep statutory invoicing, ZATCA-related workflows, and source-of-truth posting logic inside the ERP or approved KSA systems.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'GCC market page',
    serviceName: 'Accounts receivable automation Saudi Arabia',
    secondaryCtaHref: '/integrations/sap/',
    secondaryCtaLabel: 'See SAP workflow integration',
    outcomes: [
      {
        icon: 'solar:global-linear',
        title: 'Arabic-ready operating model',
        text: 'Prepare route, label, and content data for Arabic-language expansion without changing the page templates later.',
        label: 'AR'
      },
      {
        icon: 'solar:shield-check-linear',
        title: 'KSA control clarity',
        text: 'Keep ZATCA/statutory system boundaries separate from the AR workflow and exception layer.',
        label: 'Boundary'
      },
      {
        icon: 'solar:users-group-two-rounded-linear',
        title: 'Queue-first collector execution',
        text: 'Give Saudi AR teams an operating queue that fits local entity, customer, and approval structures.',
        label: 'Queues'
      }
    ],
    visual: {
      caption: 'KSA workflow boundary map',
      tone: 'slate',
      cards: [
        {
          icon: 'solar:map-point-linear',
          title: 'Saudi entities, teams, and customer segments',
          text: 'Model ownership by Saudi entity, collector team, customer segment, language preference, and approval hierarchy.',
          label: 'KSA'
        },
        {
          icon: 'solar:bill-check-linear',
          title: 'ZATCA-aware workflow boundary',
          text: 'Expose invoice and status context in the AR queue layer while keeping statutory invoice issuance, compliance logic, and posting authority in approved KSA systems.',
          label: 'System'
        },
        {
          icon: 'solar:global-linear',
          title: 'Arabic + English operating states',
          text: 'Design statuses, labels, guide content, and workflow metadata so Arabic rollout can follow cleanly when the business is ready.',
          label: 'EN / AR'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'Saudi AR workflows this page should anchor for KSA buyer intent',
        intro:
          'This is a KSA landing page, so the copy should address Saudi buyer intent directly while routing readers to the deeper AR suite, collections, and SAP integration pages. The message should stay practical and conservative around compliance boundaries.',
        cards: [
          {
            icon: 'solar:users-group-rounded-linear',
            title: 'Collector queue execution across Saudi entities',
            text: 'Organize KSA customer accounts, due dates, broken PTPs, next actions, entity-specific ownership, and manager escalation in one queue instead of entity-by-entity spreadsheets.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Dispute, deduction, and PTP tracking',
            text: 'Separate payment promises from disputed invoices, capture reason codes and evidence, and route sensitive settlements, credit requests, or write-off recommendations to manager review.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Payment reconciliation and bank/ERP exceptions',
            text: 'Track amount, timing, duplicate-reference, and customer-mapping breaks between bank data, remittance references, and ERP state so unresolved exceptions do not linger until close week.'
          },
          {
            icon: 'solar:global-linear',
            title: 'Arabic-ready workflows for operators and reviewers',
            text: 'Use English-first pages and workflows today if that matches your rollout team, but preserve Arabic-ready labels, route structure, and workflow metadata for the next localization phase.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'KSA implementation boundaries and operating-model decisions to explain upfront',
        intro:
          'Keep the language operational and careful: Binizam should be described as the queue, exception, and approvals layer. ZATCA-sensitive invoice issuance, statutory compliance logic, and ledger posting authority should remain in SAP, Oracle, Dynamics, or approved KSA finance systems.',
        cards: [
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'ZATCA/system-of-record boundary',
            text: 'Do not overstate platform ownership. Make clear which invoice, tax, and posting workflows remain authoritative inside ERP or approved KSA systems and which operational states are mirrored in the workflow layer.'
          },
          {
            icon: 'solar:global-linear',
            title: 'Arabic-ready labels and content routes',
            text: 'Use content fields, state names, and schema structures that can later support Arabic pages under `/ar/...` plus bilingual UI labels and hreflang without a template rewrite.'
          },
          {
            icon: 'solar:plug-circle-linear',
            title: 'ERP and bank integration map',
            text: 'Explain how SAP, Oracle, Dynamics, CRM data, APIs, and bank files fit together, and keep connector claims scoped to systems and operations that are explicitly implemented.'
          },
          {
            icon: 'solar:shield-check-linear',
            title: 'Manager approval and escalation rules',
            text: 'Define who can change a state, approve a settlement, override queue ranking, or close a dispute, and keep those actions visible in audit logs.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'Suggested first Saudi rollout for a safe KSA V1',
        intro:
          'Ship a narrow V1 with one Saudi entity, one collector group, or one reconciliation exception workflow, then expand to Arabic UI/content, additional entities, and adjacent AR modules once ownership and reporting are working.',
        cards: [
          {
            icon: 'solar:clipboard-list-linear',
            title: 'One KSA collections queue and one state model',
            text: 'Implement one ranked worklist and a small status taxonomy for one operating team so daily usage, reassignment, and escalation behavior are easy to verify.'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'One approval model and one audit handover',
            text: 'Define what collectors can close directly, which dispute or settlement outcomes need manager approval, and which event fields must be retained for internal control review.'
          },
          {
            icon: 'solar:link-circle-linear',
            title: 'One data sync path with a conservative write-back scope',
            text: 'Start with read visibility from ERP and bank sources, then introduce tightly scoped write-back actions only where the system-of-record boundary and failure handling are explicit.'
          }
        ],
        note:
          'A good KSA positioning rule for this page: Binizam can automate AR operating workflows and exception routing, but statutory e-invoicing, ZATCA-sensitive posting logic, and authoritative ledger control should stay in the approved ERP or local finance system.'
      }
    ],
    faqs: [
      {
        q: 'Can Saudi AR workflows support Arabic and English?',
        a: 'Yes. The first implementation can be English-first while labels, content fields, workflow states, and route structures remain ready for Arabic rollout and bilingual operator views.'
      },
      {
        q: 'Does Binizam handle ZATCA compliance directly?',
        a: 'Binizam should not be positioned as the statutory invoicing engine. The workflow layer can expose invoice context, route disputes, and manage approval states, but ZATCA-related posting and source-of-truth compliance logic should remain in approved ERP or KSA finance systems.'
      },
      {
        q: 'Can rollout begin with one Saudi entity or team?',
        a: 'Yes. Start with one Saudi entity, one collector team, or one exception queue, validate usage and reporting, then expand after the first workflow is stable.'
      },
      {
        q: 'Which integration page should Saudi buyers review first?',
        a: 'If SAP is the source of record, start with the SAP integration page. If your stack is Oracle, Dynamics, or API/bank-file heavy, review those integration pages and define exactly what is read, written, and audited in the first phase.'
      },
      {
        q: 'How is this Saudi page different from the main AR automation page?',
        a: 'The main AR automation page explains the full AR operating layer. This Saudi page localizes that model around Arabic-ready workflows, KSA entity structures, and careful ZATCA/system-of-record boundary language for Saudi buyer intent.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Accounts Receivable Automation',
        href: '/solutions/accounts-receivable-automation/',
        description: 'Core AR workflow architecture that this KSA page localizes.',
        icon: 'solar:chart-2-linear'
      },
      {
        eyebrow: 'Integration',
        label: 'SAP Integration',
        href: '/integrations/sap/',
        description: 'How SAP can remain system of record while Binizam handles workflow queues and exceptions.',
        icon: 'solar:database-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'How to reduce DSO in GCC',
        href: '/guides/reduce-dso-gcc/',
        description: 'Operational playbook for overdue recovery and escalation discipline in GCC AR teams.',
        icon: 'solar:book-bookmark-linear'
      }
    ]
  }
];

export const integrationPages: IntegrationPage[] = [
  {
    kind: 'integration',
    slug: 'sap',
    href: '/integrations/sap/',
    title: 'SAP AR Workflow Automation Without Replacing SAP | Binizam',
    description:
      'Build AR collections, disputes, reconciliation, and manager approval workflows alongside SAP while SAP remains the system of record.',
    eyebrow: 'Integrations / SAP',
    h1: 'AR workflow automation alongside SAP without replacing SAP as system of record.',
    lead:
      'Use SAP for authoritative financial data and postings, and Binizam for operator worklists, exception routing, approvals, and reconciliation visibility.',
    directAnswer:
      'In a SAP setup, Binizam should sit as an operational workflow layer: read AR/account context from SAP, route collector and reconciliation tasks, and only perform controlled write-back actions where the process and approval boundary are explicit.',
    quickLinks: integrationQuickLinks,
    serviceName: 'SAP AR workflow integration',
    stackBoundary: {
      systemOfRecord:
        'SAP remains responsible for ledger data, master records, statutory posting logic, and financial source-of-truth ownership.',
      binizamLayer:
        'Binizam handles worklists, exception triage, dispute/PTP state, manager approvals, and operational reporting around SAP data.'
    },
    visual: {
      caption: 'SAP + Binizam operating model',
      cards: [
        {
          icon: 'solar:database-linear',
          title: 'SAP system of record',
          text: 'Open AR, customer master, invoice status, and posting boundaries.',
          label: 'SAP'
        },
        {
          icon: 'solar:layers-minimalistic-linear',
          title: 'Binizam workflow layer',
          text: 'Queues, states, approvals, reminders, and reconciliation exceptions.',
          label: 'Workflow'
        },
        {
          icon: 'solar:users-group-two-rounded-linear',
          title: 'Finance operators',
          text: 'Collectors, managers, and exception owners working from one queue.',
          label: 'Team'
        }
      ]
    },
    sections: [
      {
        id: 'integration-model',
        eyebrow: 'Integration model',
        title: 'SAP-connected workflows to implement first',
        intro:
          'Start with read visibility and controlled workflow state, then add write-back only where SAP ownership and approval boundaries are clear.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Collections queues over SAP AR',
            text: 'Build worklists and next-action states around customer/invoice data synced from SAP.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Dispute and PTP tracking',
            text: 'Capture workflow state in Binizam while preserving SAP as the authoritative financial record.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Reconciliation exception routing',
            text: 'Detect mismatches from SAP, bank files, and operational systems, then assign resolution owners.'
          }
        ]
      },
      {
        id: 'system-boundary',
        eyebrow: 'System boundary',
        title: 'What stays in SAP vs what moves to the workflow layer',
        intro:
          'The page should clarify boundaries for buyers and avoid implying Binizam becomes the ledger or statutory engine.',
        cards: [
          {
            icon: 'solar:database-linear',
            title: 'Keep in SAP',
            text: 'Ledger ownership, invoice posting, master-data governance, and statutory accounting controls.'
          },
          {
            icon: 'solar:layers-minimalistic-linear',
            title: 'Run in Binizam',
            text: 'Task routing, queue prioritization, dispute states, approvals, escalation, and workflow reporting.'
          },
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'Control writes carefully',
            text: 'Treat updates back to SAP as explicit operations with permission boundaries, validations, and audit history.'
          }
        ]
      },
      {
        id: 'rollout-sequence',
        eyebrow: 'Rollout sequence',
        title: 'Safe SAP rollout sequence',
        intro:
          'A conservative rollout is easier to govern and easier to explain on the page than a vague “full transformation” promise.',
        cards: [
          {
            icon: 'solar:link-circle-linear',
            title: 'Map one SAP data extract',
            text: 'Identify which AR fields and customer/account statuses the workflow needs to read first.'
          },
          {
            icon: 'solar:clipboard-list-linear',
            title: 'Launch one operator queue',
            text: 'Pilot a collections, dispute, or reconciliation queue for one user group.'
          },
          {
            icon: 'solar:check-read-linear',
            title: 'Validate write-back and approval rules',
            text: 'Add controlled posting/status updates only after managers approve the process model.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'Does Binizam replace SAP?',
        a: 'No. SAP remains the system of record. Binizam adds an operator workflow and exception layer around SAP data.'
      },
      {
        q: 'What SAP data can be used in AR workflows?',
        a: 'Usually open invoices, customer/account context, aging, payment status, and fields needed to route exceptions. Exact scope should be constrained by least-privilege access.'
      },
      {
        q: 'Can write-back to SAP be avoided in the first phase?',
        a: 'Yes. A read-first V1 is often a safer way to validate queue logic, ownership, and reconciliation visibility before enabling controlled updates.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Accounts Receivable Automation',
        href: '/solutions/accounts-receivable-automation/',
        description: 'Main AR workflow map that can sit alongside SAP.',
        icon: 'solar:chart-2-linear'
      },
      {
        eyebrow: 'Support',
        label: 'Security',
        href: '/security/',
        description: 'Least-privilege access, auditability, and hosting boundaries.',
        icon: 'solar:shield-check-linear'
      },
      {
        eyebrow: 'Integration',
        label: 'APIs & Bank Files',
        href: '/integrations/api-bank-files/',
        description: 'How external data sources can be reconciled with SAP-driven AR workflow states.',
        icon: 'solar:programming-linear'
      }
    ]
  },
  {
    kind: 'integration',
    slug: 'oracle',
    href: '/integrations/oracle/',
    title: 'Oracle AR Collections Workflow Integration | Binizam',
    description:
      'Build AR worklists, dispute routing, and reconciliation workflows alongside Oracle while preserving Oracle as the source of financial truth.',
    eyebrow: 'Integrations / Oracle',
    h1: 'Oracle AR workflow automation with controlled queues, disputes, and reconciliation.',
    lead:
      'Use Oracle as the authoritative financial system and add a workflow layer for operational execution, exception ownership, and reviewable approvals.',
    directAnswer:
      'For Oracle-led AR operations, Binizam should consume invoice/customer/payment context from Oracle, manage queue and exception workflows in a separate control layer, and keep financial posting ownership in Oracle unless specific approved write-back rules are defined.',
    quickLinks: integrationQuickLinks,
    serviceName: 'Oracle AR workflow integration',
    stackBoundary: {
      systemOfRecord:
        'Oracle remains the financial source of truth for ledger posting, customer/invoice master data, and statutory logic.',
      binizamLayer:
        'Binizam provides collector worklists, dispute states, exception routing, manager approvals, and operational reporting.'
    },
    visual: {
      caption: 'Oracle + Binizam workflow split',
      cards: [
        {
          icon: 'solar:database-linear',
          title: 'Oracle AR data',
          text: 'Customer accounts, invoices, balances, and payment status.',
          label: 'Oracle'
        },
        {
          icon: 'solar:layers-minimalistic-linear',
          title: 'Workflow layer',
          text: 'Queue rules, exception states, approvals, and reconciliation actions.',
          label: 'Binizam'
        },
        {
          icon: 'solar:shield-check-linear',
          title: 'Controlled handoff',
          text: 'Documented boundaries for what can or cannot be written back.',
          label: 'Controls'
        }
      ]
    },
    sections: [
      {
        id: 'integration-model',
        eyebrow: 'Integration model',
        title: 'Oracle-connected workflows to scaffold',
        intro:
          'Keep the implementation copy clear enough that future page expansion can add Oracle-specific screenshots or integration diagrams without changing the template.',
        cards: [
          {
            icon: 'solar:sort-from-bottom-to-top-linear',
            title: 'Collector worklists over Oracle AR data',
            text: 'Turn Oracle account and invoice context into operator queues with next-action and ownership rules.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Dispute and PTP workflows',
            text: 'Route customer promises, disputes, and approval-required outcomes while retaining a workflow audit trail.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Reconciliation exceptions',
            text: 'Surface bank/customer/Oracle mismatches and route them to finance owners.'
          }
        ]
      },
      {
        id: 'system-boundary',
        eyebrow: 'System boundary',
        title: 'What remains in Oracle',
        intro:
          'This section protects messaging accuracy and gives buyers confidence that Binizam is not pretending to be an ERP replacement.',
        cards: [
          {
            icon: 'solar:database-linear',
            title: 'Oracle as record owner',
            text: 'Keep ledger posting, customer master, invoice records, and approved statutory processes in Oracle.'
          },
          {
            icon: 'solar:clipboard-list-linear',
            title: 'Binizam as execution layer',
            text: 'Handle collector workflows, exception queues, approvals, and reporting state outside spreadsheets.'
          },
          {
            icon: 'solar:key-minimalistic-square-linear',
            title: 'Least-privilege connector design',
            text: 'Limit integration scope to the fields and operations needed for the first workflow slice.'
          }
        ]
      },
      {
        id: 'rollout-sequence',
        eyebrow: 'Rollout sequence',
        title: 'Recommended Oracle rollout path',
        intro:
          'Use one workflow and one data sync first so process quality can be validated before expanding to broader AR automation.',
        cards: [
          {
            icon: 'solar:file-text-linear',
            title: 'Define the Oracle data shape',
            text: 'Identify which invoice/customer/payment fields are required for the target queue.'
          },
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Pilot one queue or exception workflow',
            text: 'Launch collections, disputes, or reconciliation for one team or entity.'
          },
          {
            icon: 'solar:check-read-linear',
            title: 'Review handoff and write-back rules',
            text: 'Lock approval logic and audit requirements before increasing automation depth.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'Does Binizam replace Oracle AR?',
        a: 'No. Oracle remains the authoritative system for financial records. Binizam adds operational queues, exception workflows, and approvals around that data.'
      },
      {
        q: 'Can Oracle integration start read-only?',
        a: 'Yes. A read-first rollout is usually the cleanest way to validate workflow and ownership before enabling any approved write-back actions.'
      },
      {
        q: 'What workflows are a good Oracle starting point?',
        a: 'Collections worklists, dispute intake, PTP tracking, and reconciliation exceptions are the most common first slices.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'AR Collections Automation',
        href: '/solutions/ar-collections-automation/',
        description: 'Use Oracle AR data to drive collector queues and PTP/dispute states.',
        icon: 'solar:users-group-two-rounded-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Payment Reconciliation Automation',
        href: '/solutions/payment-reconciliation-automation/',
        description: 'Route Oracle/bank/customer mismatches into owned exception workflows.',
        icon: 'solar:scale-linear'
      },
      {
        eyebrow: 'Support',
        label: 'How we work',
        href: '/how-we-work/',
        description: 'Delivery model, checkpoints, and reviewable implementation artifacts.',
        icon: 'solar:code-square-linear'
      }
    ]
  },
  {
    kind: 'integration',
    slug: 'microsoft-dynamics',
    href: '/integrations/microsoft-dynamics/',
    title: 'Microsoft Dynamics AR Workflow Automation | Binizam',
    description:
      'Microsoft Dynamics AR workflow automation for collections, disputes, reconciliation, and approval queues while Dynamics remains system of record.',
    eyebrow: 'Integrations / Microsoft Dynamics',
    h1: 'Microsoft Dynamics AR automation with workflow queues and exception controls.',
    lead:
      'Add collector worklists, dispute states, and reconciliation routing around Dynamics data without moving financial ownership out of your ERP.',
    directAnswer:
      'Binizam can operate as a workflow layer around Microsoft Dynamics by reading customer/invoice/payment data, assigning collector and exception work, and preserving approval and audit logic while Dynamics remains the source of financial truth.',
    quickLinks: integrationQuickLinks,
    serviceName: 'Microsoft Dynamics AR workflow integration',
    stackBoundary: {
      systemOfRecord:
        'Microsoft Dynamics remains responsible for financial posting, account records, and approved ERP-side business logic.',
      binizamLayer:
        'Binizam runs operator queues, follow-up state, dispute handling, reconciliation exceptions, and manager approvals.'
    },
    visual: {
      caption: 'Dynamics + workflow layer',
      cards: [
        {
          icon: 'solar:database-linear',
          title: 'Dynamics AR',
          text: 'Invoice, customer, and payment data remains anchored in ERP.',
          label: 'Dynamics'
        },
        {
          icon: 'solar:sort-from-bottom-to-top-linear',
          title: 'Operational queues',
          text: 'Collectors and finance managers work from queue and status logic.',
          label: 'Queues'
        },
        {
          icon: 'solar:document-text-linear',
          title: 'Review trail',
          text: 'Actions, approvals, and exception resolutions stay auditable.',
          label: 'Audit'
        }
      ]
    },
    sections: [
      {
        id: 'integration-model',
        eyebrow: 'Integration model',
        title: 'Dynamics-backed workflows to build first',
        intro:
          'The page structure should make the implementation path obvious to buyers evaluating Dynamics-heavy AR teams.',
        cards: [
          {
            icon: 'solar:users-group-two-rounded-linear',
            title: 'Collections worklists',
            text: 'Rank customer accounts and invoices from Dynamics data and assign next actions.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Dispute and PTP state',
            text: 'Track promise dates, dispute reasons, and review ownership outside inboxes.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Reconciliation exception handling',
            text: 'Route timing, amount, and reference mismatches into owned workflows.'
          }
        ]
      },
      {
        id: 'system-boundary',
        eyebrow: 'System boundary',
        title: 'What stays in Dynamics',
        intro:
          'This section keeps the integration story credible and avoids overpromising ERP replacement.',
        cards: [
          {
            icon: 'solar:database-linear',
            title: 'ERP source-of-truth ownership',
            text: 'Keep financial records, posting logic, and account data authoritative in Dynamics.'
          },
          {
            icon: 'solar:layers-minimalistic-linear',
            title: 'Workflow and exception layer',
            text: 'Run operational states, manager approvals, and queue routing in Binizam.'
          },
          {
            icon: 'solar:key-minimalistic-square-linear',
            title: 'Scoped access controls',
            text: 'Grant only the data and actions needed for the selected workflow slice.'
          }
        ]
      },
      {
        id: 'rollout-sequence',
        eyebrow: 'Rollout sequence',
        title: 'Recommended Dynamics rollout path',
        intro:
          'Start with one workflow and one integration scope, then expand based on manager review and operator adoption.',
        cards: [
          {
            icon: 'solar:filter-linear',
            title: 'Choose one customer segment or queue',
            text: 'Pilot with one AR team, entity, or exception class.'
          },
          {
            icon: 'solar:plug-circle-linear',
            title: 'Connect only required Dynamics fields',
            text: 'Make the read/write contract explicit and auditable.'
          },
          {
            icon: 'solar:calendar-mark-linear',
            title: 'Review rollout artifacts',
            text: 'Validate queue logic, status transitions, and handover docs before broad release.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'Does Binizam replace Microsoft Dynamics?',
        a: 'No. Dynamics remains the system of record. Binizam provides operational workflow, queue logic, and exception handling around Dynamics data.'
      },
      {
        q: 'Which Dynamics fields matter first?',
        a: 'Usually invoice/account identifiers, customer segment, aging, balance, payment status, owner, and any fields needed to classify disputes or exceptions.'
      },
      {
        q: 'Can Binizam integrate with non-Dynamics systems at the same time?',
        a: 'Yes. The workflow layer can also connect to bank files, APIs, CRM systems, and internal tools where reconciliation or operator context depends on them.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Collector Worklists',
        href: '/solutions/collector-worklists/',
        description: 'Queue prioritization and manager visibility for Dynamics-backed AR operations.',
        icon: 'solar:sort-from-bottom-to-top-linear'
      },
      {
        eyebrow: 'Integration',
        label: 'Retool',
        href: '/integrations/retool/',
        description: 'How Retool-first operator UIs can sit above ERP data with governed workflows.',
        icon: 'solar:code-square-linear'
      },
      {
        eyebrow: 'Support',
        label: 'Security',
        href: '/security/',
        description: 'Access requirements, least privilege, and data boundary expectations.',
        icon: 'solar:shield-check-linear'
      }
    ]
  },
  {
    kind: 'integration',
    slug: 'retool',
    href: '/integrations/retool/',
    title: 'Retool Finance Workflow Automation for AR Teams | Binizam',
    description:
      'Retool-first internal AR tools for collector worklists, dispute workflows, reconciliation queues, admin controls, and ERP-connected operating UIs.',
    eyebrow: 'Integrations / Retool',
    h1: 'Retool-first internal AR tools with governed workflow and ERP integrations.',
    lead:
      'Use Retool for fast operator UIs and Binizam for the implementation pattern, workflow state, integrations, and control boundaries around AR operations.',
    directAnswer:
      'Retool can be a strong operator UI layer for internal AR workflows when queue logic, permissions, workflow state, and ERP integration boundaries are designed explicitly and sensitive outcomes remain approval-controlled.',
    quickLinks: integrationQuickLinks,
    serviceName: 'Retool AR workflow implementation',
    stackBoundary: {
      systemOfRecord:
        'ERP, CRM, bank, and approved internal systems remain authoritative for financial and customer data.',
      binizamLayer:
        'Binizam uses a Retool-first UI implementation style for operator tools while keeping workflow state, permissions, and integration logic governed.'
    },
    visual: {
      caption: 'Retool-first implementation pattern',
      cards: [
        {
          icon: 'solar:window-frame-linear',
          title: 'Operator UI',
          text: 'Worklists, case views, dashboards, and admin forms implemented with a Retool-first approach.',
          label: 'Retool'
        },
        {
          icon: 'solar:git-branch-linear',
          title: 'Workflow + integration logic',
          text: 'Status transitions, approvals, reconciliation checks, and source syncs.',
          label: 'Logic'
        },
        {
          icon: 'solar:shield-keyhole-linear',
          title: 'Permissions + audit',
          text: 'Role-scoped access, sensitive-action review, and traceable outcome history.',
          label: 'Control'
        }
      ]
    },
    sections: [
      {
        id: 'integration-model',
        eyebrow: 'Integration model',
        title: 'When Retool is a good fit for AR operations',
        intro:
          'This page should explain the practical advantage of Retool without implying Retool itself is your ledger, payment processor, or statutory system.',
        cards: [
          {
            icon: 'solar:window-frame-linear',
            title: 'Internal operator UIs',
            text: 'Collector worklists, exception dashboards, dispute forms, and management review screens.'
          },
          {
            icon: 'solar:settings-linear',
            title: 'Admin tools for controlled changes',
            text: 'Role management, queue rules, templates, and reason-code maintenance.'
          },
          {
            icon: 'solar:chart-2-linear',
            title: 'Operational reporting',
            text: 'Queue aging, action coverage, dispute cycle time, and exception volume dashboards.'
          }
        ]
      },
      {
        id: 'system-boundary',
        eyebrow: 'System boundary',
        title: 'What should and should not live in Retool',
        intro:
          'This section matters for SEO trust and implementation discipline because finance teams need to see governance and system boundaries.',
        cards: [
          {
            icon: 'solar:check-read-linear',
            title: 'Good fit for Retool',
            text: 'Operator screens, admin workflows, review queues, and internal dashboards.'
          },
          {
            icon: 'solar:database-linear',
            title: 'Should remain in ERP/finance systems',
            text: 'Ledger ownership, statutory posting logic, payment processing, and approved financial recordkeeping.'
          },
          {
            icon: 'solar:shield-check-linear',
            title: 'Must be designed carefully',
            text: 'Long-running workflow state, retries, audit logs, and write-back approvals should be explicitly modeled.'
          }
        ]
      },
      {
        id: 'rollout-sequence',
        eyebrow: 'Rollout sequence',
        title: 'Recommended Retool-first rollout',
        intro:
          'Start with one operator workflow and one integration boundary before expanding to richer admin and reporting features.',
        cards: [
          {
            icon: 'solar:clipboard-list-linear',
            title: 'One queue UI',
            text: 'Ship the daily operator worklist and case view first.'
          },
          {
            icon: 'solar:git-branch-linear',
            title: 'One governed status model',
            text: 'Define state transitions, approvals, and audit fields before adding more modules.'
          },
          {
            icon: 'solar:plug-circle-linear',
            title: 'One source integration',
            text: 'Connect one ERP/API/bank feed path and validate least-privilege access.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'Does Retool replace the ERP?',
        a: 'No. In this model, Retool is an internal UI layer for operators and managers. The ERP remains the system of record.'
      },
      {
        q: 'Is Retool suitable for audit-sensitive AR workflows?',
        a: 'It can be, if permissions, approvals, workflow state, and audit logging are implemented deliberately and sensitive write actions are scoped carefully.'
      },
      {
        q: 'Can Binizam build Retool-based admin tools as well as user worklists?',
        a: 'Yes. Admin pages for queue rules, templates, owner assignment, and reason-code maintenance are a natural fit when governance is explicit.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Accounts Receivable Automation',
        href: '/solutions/accounts-receivable-automation/',
        description: 'Workflow architecture and AR module map that Retool-first UIs can expose.',
        icon: 'solar:chart-2-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Collector Worklists',
        href: '/solutions/collector-worklists/',
        description: 'One of the most practical Retool-first AR workflow modules to implement.',
        icon: 'solar:clipboard-list-linear'
      },
      {
        eyebrow: 'Support',
        label: 'How we work',
        href: '/how-we-work/',
        description: 'Reviewable implementation slices, checkpoints, and handover docs.',
        icon: 'solar:code-square-linear'
      }
    ]
  },
  {
    kind: 'integration',
    slug: 'api-bank-files',
    href: '/integrations/api-bank-files/',
    title: 'API and Bank File Integrations for AR Workflows | Binizam',
    description:
      'API, webhook, and bank-file integrations for AR payment matching, reconciliation, exception handling, retries, observability, and secure workflow operations.',
    eyebrow: 'Integrations / APIs & bank files',
    h1: 'API, webhook, and bank-file integrations for AR workflows.',
    lead:
      'Connect bank feeds, internal APIs, webhook events, and batch files into one exception-aware AR workflow layer with clear retry and ownership rules.',
    directAnswer:
      'AR workflow integrations should normalize incoming files and API events, reconcile them against ERP/customer state, handle retries and duplicates safely, and route any uncertain records into reason-coded exception queues.',
    quickLinks: integrationQuickLinks,
    serviceName: 'API and bank-file AR integration',
    stackBoundary: {
      systemOfRecord:
        'Bank systems, ERP platforms, and approved internal services remain authoritative for the records they own.',
      binizamLayer:
        'Binizam normalizes AR events into workflow queues, reconciliation checks, retry/exception handling, and operator review states.'
    },
    visual: {
      caption: 'Bank/API event intake',
      cards: [
        {
          icon: 'solar:file-text-linear',
          title: 'Bank file or API event',
          text: 'SFTP files, API pulls, webhook events, or internal service payloads.',
          label: 'Input'
        },
        {
          icon: 'solar:refresh-linear',
          title: 'Normalize + retry',
          text: 'Validation, idempotency checks, scheduling, and failure handling.',
          label: 'Process'
        },
        {
          icon: 'solar:layers-minimalistic-linear',
          title: 'Exception queue',
          text: 'Route unresolved or low-confidence records to finance owners.',
          label: 'Review'
        }
      ]
    },
    sections: [
      {
        id: 'integration-model',
        eyebrow: 'Integration model',
        title: 'Source patterns this page should cover',
        intro:
          'The content should be specific enough for technical buyers while avoiding unsupported connector promises.',
        cards: [
          {
            icon: 'solar:file-text-linear',
            title: 'Bank files and batch syncs',
            text: 'Ingest structured exports or statements on a schedule and route parse/matching exceptions.'
          },
          {
            icon: 'solar:programming-linear',
            title: 'APIs and internal services',
            text: 'Pull or receive customer/account/payment events and map them into workflow state.'
          },
          {
            icon: 'solar:refresh-linear',
            title: 'Retry and duplicate handling',
            text: 'Track failed jobs, idempotency keys, stale payloads, and manual reprocessing states.'
          }
        ]
      },
      {
        id: 'system-boundary',
        eyebrow: 'System boundary',
        title: 'What the integration layer should and should not do',
        intro:
          'This section should make operational controls and data responsibility clear for search, LLMs, and human buyers.',
        cards: [
          {
            icon: 'solar:layers-minimalistic-linear',
            title: 'Normalize into workflow state',
            text: 'Map raw events into cases, queue items, reasons, and owner assignments.'
          },
          {
            icon: 'solar:shield-warning-linear',
            title: 'Do not silently post uncertain data',
            text: 'Route low-confidence matches and parse failures into review queues instead of forcing updates.'
          },
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'Use scoped credentials and observability',
            text: 'Expose what runs on a schedule, what failed, and which manual action is required.'
          }
        ]
      },
      {
        id: 'rollout-sequence',
        eyebrow: 'Rollout sequence',
        title: 'Practical rollout path',
        intro:
          'Implement one source, one workflow mapping, and one exception queue first so failure handling is visible before scaling ingestion.',
        cards: [
          {
            icon: 'solar:file-check-linear',
            title: 'One input source',
            text: 'Choose one bank file, API endpoint, webhook, or batch job first.'
          },
          {
            icon: 'solar:tuning-linear',
            title: 'One schema and validation contract',
            text: 'Define required fields, fallback behavior, and what counts as a reviewable exception.'
          },
          {
            icon: 'solar:chart-square-linear',
            title: 'One run-status dashboard',
            text: 'Show sync success, failures, stale queues, and unresolved integration exceptions.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'Can bank files and APIs be used in the same workflow?',
        a: 'Yes. One workflow can combine batch files, API reads, and internal service events, but each source should have an explicit validation and exception-handling path.'
      },
      {
        q: 'How often should sync jobs run?',
        a: 'That depends on the source system and operational urgency. Start with a cadence that is easy to observe and reconcile, then tighten once failure handling is stable.'
      },
      {
        q: 'What happens when a file or API job fails?',
        a: 'Failures should be visible in a run-status or exception queue with owner assignment, retry options, and an audit trail.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Cash Application Automation',
        href: '/solutions/cash-application-automation/',
        description: 'Match incoming payments and remittances, then route exceptions cleanly.',
        icon: 'solar:scanner-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Payment Reconciliation Automation',
        href: '/solutions/payment-reconciliation-automation/',
        description: 'Use bank/API inputs to detect and resolve “expected vs actual” breaks.',
        icon: 'solar:scale-linear'
      },
      {
        eyebrow: 'Support',
        label: 'Security',
        href: '/security/',
        description: 'Least privilege, audit logging, and operational access expectations.',
        icon: 'solar:shield-check-linear'
      }
    ]
  }
];

export const guidePages: GuidePage[] = [
  {
    kind: 'guide',
    slug: 'what-is-accounts-receivable-automation',
    href: '/guides/what-is-accounts-receivable-automation/',
    title: 'What Is Accounts Receivable Automation? Definition, Workflow, and Controls | Binizam',
    description:
      'What accounts receivable automation means, how AR workflows usually work, what to automate first, what should stay in the ERP, and how GCC teams can roll it out safely.',
    eyebrow: 'Guides / Fundamentals',
    h1: 'What is accounts receivable automation?',
    lead:
      'A practical, plain-English guide for finance teams evaluating AR workflow automation, ERP boundaries, approval controls, and safe rollout patterns across GCC operations.',
    directAnswer:
      'Accounts receivable automation is the use of workflow software, integrations, rules, and approval controls to manage invoice follow-up, collections queues, payment matching, disputes, and reconciliation with less manual coordination. In a well-designed setup, the workflow layer runs the operating process while the ERP remains the financial system of record for postings, master data, and statutory logic.',
    quickLinks: guideQuickLinks,
    articleSummary:
      'This guide gives a buyer-safe definition of accounts receivable automation, explains the core workflow states, clarifies what should and should not be automated first, and shows how GCC finance teams can introduce an AR operating layer without replacing the ERP.',
    articleCategory: 'AR automation fundamentals',
    dateModified: '2026-04-03',
    readTime: '9 min read',
    secondaryCtaHref: '/solutions/accounts-receivable-automation/',
    secondaryCtaLabel: 'See the AR automation solution',
    visual: {
      caption: 'AR automation concept map',
      tone: 'amber',
      cards: [
        {
          icon: 'solar:clipboard-list-linear',
          title: 'Manual AR process',
          text: 'Collectors rebuild priorities from aging exports, remittance matching happens in spreadsheets, and dispute ownership lives in email threads.',
          label: 'Before'
        },
        {
          icon: 'solar:git-branch-linear',
          title: 'Workflow automation layer',
          text: 'Shared queues, status rules, approval gates, reminders, matching logic, and exception routing turn AR into a visible operating process.',
          label: 'During'
        },
        {
          icon: 'solar:shield-check-linear',
          title: 'ERP-controlled outcomes',
          text: 'The ERP remains authoritative for ledger postings and master data, while the workflow layer records what happened and who approved each action.',
          label: 'After'
        }
      ]
    },
    articleBlocks: [
      {
        id: 'key-takeaways',
        eyebrow: 'Key takeaways',
        title: 'What AR automation should mean in practice',
        intro:
          'If a page or vendor pitch is vague, use these four checks to separate useful AR automation from generic “digital transformation” language.',
        cards: [
          {
            icon: 'solar:clipboard-list-linear',
            title: 'Automation should create one operating queue, not just another report',
            text: 'Each invoice, customer, or exception should have one owner, one state, one due next action, and one visible escalation path.',
            label: 'Execution'
          },
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'The ERP should remain the system of record',
            text: 'Workflow tools can orchestrate work and approvals, but ledger postings, statutory tax logic, and authoritative master data should stay in approved finance systems.',
            label: 'Boundary'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Exception handling matters as much as straight-through automation',
            text: 'Short pays, no-match payments, broken promises, and disputed invoices need reason-coded queues instead of hidden manual cleanup.',
            label: 'Exceptions'
          }
        ]
      },
      {
        id: 'common-mistakes',
        eyebrow: 'Common mistakes',
        title: 'What makes AR automation fail or lose trust',
        intro:
          'Most failures are not caused by a lack of AI. They happen when the state model, approval boundaries, or ERP handoff rules are unclear.',
        cards: [
          {
            icon: 'solar:shield-warning-linear',
            title: 'Trying to auto-close sensitive actions before review rules exist',
            text: 'Write-offs, credits, settlement exceptions, and low-confidence matches should not be automated until manager approvals and audit fields are defined.'
          },
          {
            icon: 'solar:inbox-archive-linear',
            title: 'Moving data but not changing the operating workflow',
            text: 'Syncing ERP data into a dashboard is not enough if collectors still prioritize from private spreadsheets and exceptions still live in email.'
          },
          {
            icon: 'solar:global-linear',
            title: 'Ignoring GCC operating context',
            text: 'If UAE or Saudi teams need entity-specific routing, Arabic-ready labels, or local approval chains, those workflow details should be modeled from day one.'
          }
        ]
      },
      {
        id: 'workflow-example',
        eyebrow: 'Workflow example',
        title: 'A simple AR automation flow a finance team can ship first',
        intro:
          'A realistic first implementation should be small enough to verify, but complete enough to create a working operating loop.',
        cards: [
          {
            icon: 'solar:sort-from-bottom-to-top-linear',
            title: '1. Sync open AR and generate a ranked collector queue',
            text: 'Pull invoice aging, balances, owner mapping, dispute/PTP state, and customer context from ERP/CRM systems.'
          },
          {
            icon: 'solar:alarm-linear',
            title: '2. Trigger follow-ups, capture outcomes, and escalate stale accounts',
            text: 'Record call notes, customer responses, promise dates, dispute reasons, and manager review requests in one workflow state trail.'
          },
          {
            icon: 'solar:scanner-linear',
            title: '3. Match payments where rules are clear and route exceptions where they are not',
            text: 'Send no-match payments, short pays, and account-mapping breaks into an owned queue and only write back to ERP when the posting boundary is approved.'
          }
        ]
      },
      {
        id: 'automate-vs-manual',
        eyebrow: 'Automate vs manual',
        title: 'Where to automate first and where to keep a human review step',
        intro:
          'A strong AR roadmap should be rule-first and control-first in the early phase, then introduce AI or higher automation only where outputs remain explainable.',
        cards: [
          {
            icon: 'solar:bolt-linear',
            title: 'Automate queue creation, reminders, state transitions, and exact-match suggestions',
            text: 'These actions reduce repetitive coordination and are usually easier to explain, audit, and tune.'
          },
          {
            icon: 'solar:key-minimalistic-square-linear',
            title: 'Keep manual review for write-offs, settlements, customer-sensitive messages, and weak match candidates',
            text: 'That protects finance control and keeps operators from losing trust in the system after one bad automated decision.'
          },
          {
            icon: 'solar:magic-stick-3-linear',
            title: 'Introduce AI as assistive drafting or ranking, not unchecked posting logic',
            text: 'AI can suggest next actions or summarize account history, but operators and managers should still be able to inspect, override, and audit the recommendation.'
          }
        ]
      }
    ],
    sections: [
      {
        id: 'how-it-works',
        eyebrow: 'How it works',
        title: 'The workflow states a complete AR automation layer should cover',
        intro:
          'Think of accounts receivable automation as a set of operational states. Each state should be tied to one owner, one timestamp, one reason code when needed, and one auditable transition path.',
        cards: [
          {
            icon: 'solar:users-group-two-rounded-linear',
            title: 'Collections follow-up and queue prioritization',
            text: 'Rank customers, assign next actions, schedule reminders, record customer responses, and escalate stale or high-risk accounts.'
          },
          {
            icon: 'solar:scanner-linear',
            title: 'Cash application and payment matching',
            text: 'Match incoming payments and remittance references to invoices, then send partial or ambiguous cases to a review queue.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Disputes, PTP, and manager approvals',
            text: 'Separate promises to pay from true disputes, track reason codes and evidence, and require manager review for sensitive account outcomes.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Reconciliation and exception closure',
            text: 'Detect “expected vs actual” mismatches across bank, remittance, and ERP data, assign an owner, and close each exception with a reason and audit trail.'
          }
        ]
      },
      {
        id: 'what-to-implement-first',
        eyebrow: 'What to implement first',
        title: 'A practical AR automation rollout sequence',
        intro:
          'If your team still runs collections and reconciliation in spreadsheets, these are the safest first milestones to ship before expanding into broader automation or AI assistance.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Start with collector worklists',
            text: 'If overdue coverage is weak, launch one ranked collector queue and one small status taxonomy for one entity or one customer segment.'
          },
          {
            icon: 'solar:inbox-archive-linear',
            title: 'Add cash-app exception routing',
            text: 'If unapplied cash and short pays create cleanup, move no-match and partial-payment cases into reason-coded queues with SLA and owner tracking.'
          },
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'Protect approval boundaries',
            text: 'Do not automate sensitive write-offs, settlements, customer-impacting communications, or low-confidence posting outcomes without explicit review logic.'
          }
        ],
        note:
          'A good AR automation implementation is usually narrow, observable, and explainable in the first release. Broad AI claims are less useful than one stable workflow, one trusted exception loop, and one clearly documented ERP boundary.'
      },
      {
        id: 'gcc-implementation-context',
        eyebrow: 'GCC implementation context',
        title: 'What UAE and Saudi teams should clarify before rolling out AR automation',
        intro:
          'The workflow pattern is similar across markets, but GCC operating structures often add entity-specific approval chains, bilingual operator needs, and careful system-of-record boundaries around tax and posting logic.',
        cards: [
          {
            icon: 'solar:map-point-linear',
            title: 'Entity-specific ownership and escalation',
            text: 'Model queues by UAE or Saudi legal entity, business unit, customer segment, and manager owner so one team does not accidentally inherit another entity’s account exceptions.'
          },
          {
            icon: 'solar:global-linear',
            title: 'Arabic-ready labels and customer context',
            text: 'If Arabic support is on the roadmap, preserve translatable state names, reason codes, and content fields from the start instead of hardcoding English-only workflow labels.'
          },
          {
            icon: 'solar:bill-check-linear',
            title: 'VAT/ZATCA and posting boundaries',
            text: 'Expose invoice and dispute context in the AR workflow layer, but leave statutory invoice issuance, tax logic, and authoritative postings inside approved ERP or finance systems.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'What is the simplest definition of accounts receivable automation?',
        a: 'It is a controlled workflow layer that reduces manual collections follow-up, payment matching, dispute routing, and reconciliation work while preserving ERP ownership, approval boundaries, and auditability.'
      },
      {
        q: 'What should not be automated first?',
        a: 'Avoid automating write-offs, settlement approvals, customer-sensitive messages, or low-confidence payment matches before manager review paths, reason codes, and audit fields are in place.'
      },
      {
        q: 'Is AI required for AR automation?',
        a: 'No. Many teams should start with rules, queues, statuses, and approvals first. AI can be added later for drafting, summarization, or prioritization only where recommendations remain reviewable and overrideable.'
      },
      {
        q: 'Does AR automation replace ERP systems such as SAP, Oracle, or Microsoft Dynamics?',
        a: 'It should not replace them for ledger ownership or statutory logic. A safer model is to keep the ERP as the system of record and use the workflow layer for queues, exceptions, reminders, and management approvals.'
      },
      {
        q: 'What is the best first AR workflow to automate?',
        a: 'If overdue coverage is the main issue, start with collector worklists. If unapplied cash is the bigger bottleneck, start with cash-application exceptions. If close is painful, start with reconciliation breaks that have a clear owner and closure rule.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Accounts Receivable Automation',
        href: '/solutions/accounts-receivable-automation/',
        description: 'Move from the definition in this guide to the full AR operating-layer solution page.',
        icon: 'solar:chart-2-linear'
      },
      {
        eyebrow: 'Integration',
        label: 'SAP Integration',
        href: '/integrations/sap/',
        description: 'See how the workflow layer can sit around SAP while SAP remains the system of record.',
        icon: 'solar:database-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Cash Application Automation',
        href: '/solutions/cash-application-automation/',
        description: 'Go deeper on no-match payment queues, remittance capture, and controlled ERP posting handoff.',
        icon: 'solar:scanner-linear'
      },
      {
        eyebrow: 'Support',
        label: 'How we work',
        href: '/how-we-work/',
        description: 'Understand the implementation checkpoints and reviewable delivery model.',
        icon: 'solar:code-square-linear'
      }
    ]
  },
  {
    kind: 'guide',
    slug: 'reduce-dso-gcc',
    href: '/guides/reduce-dso-gcc/',
    title: 'How to Reduce DSO in GCC B2B Collections | Binizam',
    description:
      'How GCC finance teams can reduce DSO with ranked collector queues, faster dispute resolution, broken-PTP escalation, unapplied-cash cleanup, and continuous reconciliation.',
    eyebrow: 'Guides / GCC collections',
    h1: 'How to reduce DSO in GCC B2B collections.',
    lead:
      'A workflow-first playbook for improving overdue coverage, dispute cycle time, broken-promise escalation, and payment-exception visibility across UAE, Saudi, and broader GCC AR operations.',
    directAnswer:
      'To reduce DSO in GCC B2B collections, give each overdue account one owner and one ranked next action, separate promise-to-pay from true disputes, escalate broken promises and stale follow-ups quickly, and resolve payment/reconciliation exceptions continuously so collectible invoices do not stay blocked by process ambiguity.',
    quickLinks: guideQuickLinks,
    articleSummary:
      'This guide explains the operational causes of high DSO in GCC collections teams, shows which workflow levers usually matter first, and gives a practical rollout sequence that prioritizes queue discipline, exception ownership, and manager review over generic “AI transformation” claims.',
    articleCategory: 'GCC DSO operations',
    dateModified: '2026-04-03',
    readTime: '10 min read',
    secondaryCtaHref: '/solutions/ar-collections-automation/',
    secondaryCtaLabel: 'See AR collections automation',
    visual: {
      caption: 'DSO reduction levers',
      tone: 'rose',
      cards: [
        {
          icon: 'solar:sort-from-bottom-to-top-linear',
          title: 'Rank overdue accounts',
          text: 'Prioritize by aging, amount, customer segment, dispute/PTP state, SLA breach risk, and ownership rules.',
          label: 'Queue'
        },
        {
          icon: 'solar:alarm-linear',
          title: 'Escalate stale actions and broken PTPs',
          text: 'Move overdue promises, missed follow-ups, and sensitive customer exceptions into manager review before they age silently.',
          label: 'Cadence'
        },
        {
          icon: 'solar:scale-linear',
          title: 'Resolve exceptions fast',
          text: 'Shorten dispute and reconciliation cycles by giving every blocker one reason code, one owner, and one due date.',
          label: 'Close'
        }
      ]
    },
    articleBlocks: [
      {
        id: 'key-takeaways',
        eyebrow: 'Key takeaways',
        title: 'The most reliable DSO levers are operational, not cosmetic',
        intro:
          'DSO improves when collectible invoices stop getting lost in stale queues, unclear ownership, and unresolved exceptions. These are the levers to inspect first.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Coverage matters: every overdue account needs one owner and one next action',
            text: 'If collectors spend time deciding what to work instead of acting, high-value accounts and near-due follow-ups are easy to miss.',
            label: 'Coverage'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Dispute and PTP states must be separated',
            text: 'A promised payment, a broken promise, and a disputed invoice require different workflows, different escalation logic, and different reporting treatment.',
            label: 'States'
          },
          {
            icon: 'solar:inbox-archive-linear',
            title: 'Unapplied cash can inflate “collections pain” even when customers already paid',
            text: 'No-match remittance, short pays, and posting delays should become operational exceptions that are resolved during the month, not at close.',
            label: 'Cash'
          }
        ]
      },
      {
        id: 'common-mistakes',
        eyebrow: 'Common mistakes',
        title: 'Why “reduce DSO” projects often stall',
        intro:
          'Most stalled initiatives focus on dashboards or generic automation while leaving the collector operating model and exception ownership unchanged.',
        cards: [
          {
            icon: 'solar:chart-square-linear',
            title: 'Tracking DSO as a metric but not fixing the workflow causes behind it',
            text: 'If broken PTPs, stale disputes, and unworked no-match payments do not have owners and due dates, reporting alone will not improve collection behavior.'
          },
          {
            icon: 'solar:user-id-linear',
            title: 'Using broad team ownership instead of one accountable owner per account or exception',
            text: 'A queue item owned by “finance” or “collections” is easy to ignore. One current owner plus reassignment history makes escalation and coaching easier.'
          },
          {
            icon: 'solar:global-linear',
            title: 'Not modeling entity and language differences in GCC teams',
            text: 'UAE and Saudi teams may need different entity routing, manager approval chains, and Arabic-ready labels. Those should be part of the workflow design, not a later afterthought.'
          }
        ]
      },
      {
        id: 'workflow-example',
        eyebrow: 'Workflow example',
        title: 'A practical weekly DSO operating loop',
        intro:
          'This is the type of queue cadence and manager review rhythm that can be implemented as a first AR collections V1.',
        cards: [
          {
            icon: 'solar:sort-from-bottom-to-top-linear',
            title: '1. Collectors start from a ranked queue every day',
            text: 'The queue sorts by aging, amount, promise status, dispute state, SLA, and customer segment so coverage is driven by policy instead of personal spreadsheets.'
          },
          {
            icon: 'solar:alarm-linear',
            title: '2. Broken promises and stale actions auto-escalate',
            text: 'Accounts with overdue PTP dates, no response after the follow-up window, or large-value balances move into a manager-visible exception review queue.'
          },
          {
            icon: 'solar:scale-linear',
            title: '3. Disputes and payment exceptions are resolved in parallel',
            text: 'Dispute owners and reconciliation owners work from reason-coded queues so collectible balances are not blocked by unresolved operational side work.'
          }
        ]
      },
      {
        id: 'automate-vs-manual',
        eyebrow: 'Automate vs manual',
        title: 'Where automation should push DSO down and where manual review still matters',
        intro:
          'The goal is faster follow-through and cleaner escalation, not blind auto-collection. That means keeping sensitive account actions governed.',
        cards: [
          {
            icon: 'solar:bolt-linear',
            title: 'Automate ranking, reminders, broken-PTP escalation, and stale queue detection',
            text: 'Those actions are repeatable and can dramatically reduce missed follow-up without changing who owns final account decisions.'
          },
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'Keep manual approval for settlements, write-offs, and unusual customer handling',
            text: 'Finance leaders should still control sensitive outcomes and account-specific exceptions, especially when policy or relationship context matters.'
          },
          {
            icon: 'solar:scanner-linear',
            title: 'Use automation to route cash and reconciliation exceptions, not to hide them',
            text: 'If a payment cannot be matched or an amount does not tie, the system should surface the blocker and assign an owner instead of masking the break.'
          }
        ]
      }
    ],
    sections: [
      {
        id: 'how-it-works',
        eyebrow: 'How it works',
        title: 'Operational causes of high DSO that workflow automation can actually fix',
        intro:
          'The most actionable DSO problems are usually visible in the day-to-day workflow: who owns the account, whether the next action is overdue, whether the customer promise slipped, and whether disputes or payment exceptions are blocking closure.',
        cards: [
          {
            icon: 'solar:clipboard-list-linear',
            title: 'Collectors do not have one ranked queue',
            text: 'When priorities are rebuilt manually from aging exports, high-value balances, urgent near-due follow-ups, and risky customer segments are easy to miss or double-handle.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Disputes stall without ownership',
            text: 'A disputed invoice needs a reason code, an evidence trail, a current owner, a target resolution date, and a manager escalation path when the case goes stale.'
          },
          {
            icon: 'solar:inbox-archive-linear',
            title: 'Payment exceptions are cleaned up too late',
            text: 'Unapplied cash, short pays, no-match remittance, and failed posting events should become live queue items, not month-end surprises.'
          },
          {
            icon: 'solar:shield-warning-linear',
            title: 'Broken PTPs are not escalated fast enough',
            text: 'If a customer misses a promised date and nothing triggers a new action or manager review, the account can quietly age while everyone believes it is “in progress.”'
          }
        ]
      },
      {
        id: 'what-to-implement-first',
        eyebrow: 'What to implement first',
        title: 'A DSO-focused rollout sequence',
        intro:
          'This rollout sequence is designed to improve collection execution quickly while keeping the first implementation small, explainable, and easy for managers to review.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Launch collector worklists first',
            text: 'Give each customer or invoice one current owner, one status, one action due date, and one reason for its queue priority.'
          },
          {
            icon: 'solar:shield-warning-linear',
            title: 'Create a manager escalation queue',
            text: 'Route stale PTPs, risky balances, unresolved disputes, and approval-required outcomes to a visible manager queue before they age silently.'
          },
          {
            icon: 'solar:chart-square-linear',
            title: 'Track exception aging and closure',
            text: 'Measure dispute cycle time, queue aging, broken-PTP volume, unapplied-cash age, and owner coverage alongside DSO so workflow fixes are tied to operational metrics.'
          }
        ]
      },
      {
        id: 'gcc-operating-model',
        eyebrow: 'GCC operating model',
        title: 'GCC-specific workflow details that can materially affect DSO',
        intro:
          'For UAE and Saudi operations, the same AR workflow pattern still applies, but entity routing, bilingual context, and ERP/tax boundaries need to be clear enough for operators and managers to trust the process.',
        cards: [
          {
            icon: 'solar:map-point-linear',
            title: 'Route by legal entity, geography, and customer segment',
            text: 'A collector queue should respect which entity owns the receivable, which team covers the region, and which manager approves special handling.'
          },
          {
            icon: 'solar:global-linear',
            title: 'Keep Arabic-ready labels and customer context available',
            text: 'Even if the first rollout is English-first, preserving Arabic-ready state names and customer-facing context makes later localization easier.'
          },
          {
            icon: 'solar:bill-check-linear',
            title: 'Do not move statutory posting or tax logic out of the approved system',
            text: 'Use the workflow layer to expose account state and assign work, while SAP, Oracle, Dynamics, or local systems remain authoritative for posting and statutory rules.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'What reduces DSO fastest operationally?',
        a: 'For many teams, the fastest operational improvement comes from a ranked collector queue, clear owner assignment, broken-PTP escalation, and faster dispute/payment-exception routing rather than a broad redesign of the entire finance process.'
      },
      {
        q: 'Which AR metrics should be tracked alongside DSO?',
        a: 'Track overdue action coverage, stale queue items, broken PTP volume, dispute cycle time, unapplied cash aging, reconciliation exception aging, and closure volume by reason code and owner.'
      },
      {
        q: 'Where does automation help most in GCC collections?',
        a: 'Automation is usually most valuable in queue prioritization, follow-up cadence, broken-promise escalation, bilingual workflow routing, dispute handoffs, and reconciliation exception visibility.'
      },
      {
        q: 'Can DSO improve if customers already pay but cash is not matched quickly?',
        a: 'Yes. Slow cash application and unapplied-cash cleanup can make balances look unresolved even when payment has arrived. That is why matching exceptions and reconciliation breaks should be part of the same DSO operating model.'
      },
      {
        q: 'Should AI be the first lever in a DSO reduction program?',
        a: 'Usually no. A rule-based queue, explicit statuses, and manager escalation often produce a more reliable first improvement. AI can be layered later for summarization or prioritization only where recommendations remain explainable.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Collector Worklists',
        href: '/solutions/collector-worklists/',
        description: 'Turn DSO goals into one ranked queue and one owner-based operating model for collector execution.',
        icon: 'solar:sort-from-bottom-to-top-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'AR Collections Automation',
        href: '/solutions/ar-collections-automation/',
        description: 'Go from this DSO playbook to a live collections workflow with PTP states, disputes, and manager exceptions.',
        icon: 'solar:users-group-two-rounded-linear'
      },
      {
        eyebrow: 'Integration',
        label: 'SAP Integration',
        href: '/integrations/sap/',
        description: 'Keep SAP as the system of record while Binizam handles queues, escalations, and exception workflows.',
        icon: 'solar:database-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'AR Automation UAE',
        href: '/solutions/accounts-receivable-automation-uae/',
        description: 'Localized AR workflow positioning for UAE finance and operations teams.',
        icon: 'solar:map-point-linear'
      }
    ]
  },
  {
    kind: 'guide',
    slug: 'cash-application',
    href: '/guides/cash-application/',
    title: 'Cash Application Explained for Accounts Receivable Teams | Binizam',
    description:
      'Cash application explained for AR teams: what payment matching means, why remittance data creates manual work, how unapplied-cash exceptions are handled, and what to automate first.',
    eyebrow: 'Guides / Cash application',
    h1: 'Cash application explained.',
    lead:
      'A practical guide to payment matching, remittance capture, short pays, no-match exceptions, and ERP posting boundaries for accounts receivable teams.',
    directAnswer:
      'Cash application is the accounts receivable process of matching incoming customer payments to open invoices and the correct customer account, then updating the system of record once the match is trusted. Automation helps most when remittance data can be normalized and exact-match rules are clear, but short pays, no-reference payments, duplicates, and low-confidence matches should still be routed into a review workflow.',
    quickLinks: guideQuickLinks,
    articleSummary:
      'This guide explains what cash application means, why it is still manual in many finance teams, how exception queues should work, and how to draw the line between safe automation and human review before ERP posting.',
    articleCategory: 'Cash application operations',
    dateModified: '2026-04-03',
    readTime: '8 min read',
    secondaryCtaHref: '/solutions/cash-application-automation/',
    secondaryCtaLabel: 'See cash application automation',
    visual: {
      caption: 'Payment matching workflow',
      tone: 'emerald',
      cards: [
        {
          icon: 'solar:banknote-linear',
          title: 'Payment and remittance received',
          text: 'Bank lines, transfer references, lockbox-like files, customer emails, or remittance attachments arrive from different sources.',
          label: '1'
        },
        {
          icon: 'solar:scanner-linear',
          title: 'Match to invoice',
          text: 'Use invoice references, payment amount, customer mapping, date windows, tolerance rules, and duplicate checks to suggest a match.',
          label: '2'
        },
        {
          icon: 'solar:shield-warning-linear',
          title: 'Route exceptions and hand off safe postings',
          text: 'Short pays, no-reference items, and weak matches move to review, while approved matches are posted or handed off to ERP under a controlled boundary.',
          label: '3'
        }
      ]
    },
    articleBlocks: [
      {
        id: 'key-takeaways',
        eyebrow: 'Key takeaways',
        title: 'What cash application should do in a controlled AR workflow',
        intro:
          'A useful cash application process should make payment matching faster while making uncertainty more visible, not less.',
        cards: [
          {
            icon: 'solar:scanner-linear',
            title: 'Match logic should be explainable',
            text: 'Operators should see which invoice reference, amount tolerance, customer mapping, or date rule created a candidate match.',
            label: 'Confidence'
          },
          {
            icon: 'solar:inbox-archive-linear',
            title: 'Exceptions need owner-based queues',
            text: 'No-match payments, short pays, duplicate candidates, and missing remittance cases should each have one owner, one reason code, and one resolution state.',
            label: 'Exceptions'
          },
          {
            icon: 'solar:cloud-upload-linear',
            title: 'ERP handoff must be controlled',
            text: 'Only trusted matches should be posted automatically; low-confidence cases and sensitive adjustments need a review layer before the system of record is updated.',
            label: 'ERP'
          }
        ]
      },
      {
        id: 'common-mistakes',
        eyebrow: 'Common mistakes',
        title: 'Why cash application remains manual even after “automation” projects',
        intro:
          'The bottleneck is often remittance quality, exception ownership, and posting control, not just a lack of matching software.',
        cards: [
          {
            icon: 'solar:file-text-linear',
            title: 'Matching payment lines without capturing remittance context',
            text: 'A bank reference alone may not tell you which invoice or customer account is intended, especially when the remittance arrives later by email or portal.'
          },
          {
            icon: 'solar:shield-warning-linear',
            title: 'Auto-posting short pays or weak matches too aggressively',
            text: 'That can reduce manual work in the short term but create harder reconciliation or dispute cleanup when the posting decision was wrong.'
          },
          {
            icon: 'solar:copy-linear',
            title: 'Not tracking duplicate attempts, reversals, and failed write-back events',
            text: 'If operators cannot see whether a payment was already reviewed, posted, or reversed, the same exception gets handled multiple times.'
          }
        ]
      },
      {
        id: 'workflow-example',
        eyebrow: 'Workflow example',
        title: 'A simple cash application workflow for one bank channel',
        intro:
          'A first V1 should usually start with one source and one tolerance model so the team can test matching quality and exception routing before expanding coverage.',
        cards: [
          {
            icon: 'solar:banknote-linear',
            title: '1. Import bank lines and collect remittance attachments',
            text: 'Normalize reference fields, customer identifiers, document metadata, and source timestamps so matching rules receive clean enough input data.'
          },
          {
            icon: 'solar:tuning-linear',
            title: '2. Propose exact and near matches with explicit confidence thresholds',
            text: 'Exact matches can move to approved posting logic, while near matches, partial amounts, and ambiguous references move to manual review.'
          },
          {
            icon: 'solar:document-text-linear',
            title: '3. Close every exception with a reason code and posting outcome',
            text: 'Mark whether the issue was resolved by remittance lookup, customer mapping correction, dispute escalation, partial settlement handling, or a controlled ERP update.'
          }
        ]
      },
      {
        id: 'automate-vs-manual',
        eyebrow: 'Automate vs manual',
        title: 'What to automate in cash application and what to keep human-reviewed',
        intro:
          'The right boundary depends on data quality and tolerance rules, but the first rollout should usually be conservative around posting decisions.',
        cards: [
          {
            icon: 'solar:bolt-linear',
            title: 'Automate exact-match suggestions, file normalization, and queue creation',
            text: 'Those steps remove repetitive processing and make the review team faster without changing final control ownership.'
          },
          {
            icon: 'solar:key-minimalistic-square-linear',
            title: 'Keep manual review for short pays, deductions, and low-confidence customer mapping',
            text: 'Those cases often require account context, policy judgment, or a dispute workflow before posting.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Use reconciliation workflows for unresolved mismatch states',
            text: 'If a payment event and ERP state still do not align after cash application review, move the break into a reconciliation exception queue rather than leaving it in an email thread.'
          }
        ]
      }
    ],
    sections: [
      {
        id: 'how-it-works',
        eyebrow: 'How it works',
        title: 'Why cash application is often still manual in AR teams',
        intro:
          'Most manual work happens because payment and remittance data arrive through different channels, references are inconsistent, and finance users need to judge whether a partial or ambiguous payment can be posted safely.',
        cards: [
          {
            icon: 'solar:file-text-linear',
            title: 'Remittance arrives separately from the bank payment',
            text: 'Invoice references and deduction details may arrive in email bodies, attachments, portals, or customer-specific files instead of the bank line itself.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Partial payments need judgment',
            text: 'Short pays, bank fees, deductions, rounded amounts, and settlement agreements often need a reason-coded review path before a posting decision is made.'
          },
          {
            icon: 'solar:user-id-linear',
            title: 'Customer mapping is imperfect',
            text: 'Customer names, payer entities, invoice numbers, and transfer references can vary across banking, remittance, and ERP data, especially across multi-entity GCC operations.'
          },
          {
            icon: 'solar:cloud-cross-linear',
            title: 'Posting handoff and reversal handling are unclear',
            text: 'If a write-back fails, a reversal is needed, or a posting was already attempted, operators need one visible state trail rather than another spreadsheet note.'
          }
        ]
      },
      {
        id: 'what-to-implement-first',
        eyebrow: 'What to implement first',
        title: 'Where to start with cash application automation',
        intro:
          'Start with one payment source, one exception taxonomy, and one approved posting boundary so the team can validate match quality and exception routing before expanding to more channels.',
        cards: [
          {
            icon: 'solar:file-check-linear',
            title: 'Standardize one payment source and one remittance capture pattern',
            text: 'Start with one bank file, API feed, or customer segment where data quality is reasonably consistent, then add harder channels later.'
          },
          {
            icon: 'solar:tuning-linear',
            title: 'Define exact-match vs review-required rules',
            text: 'Specify confidence thresholds, amount tolerances, duplicate checks, and customer-mapping rules so operators know exactly why a payment was auto-posted or sent to review.'
          },
          {
            icon: 'solar:cloud-upload-linear',
            title: 'Make ERP handoff explicit',
            text: 'Document which match outcomes can be posted automatically, which require manager review, how failed write-back is handled, and what audit fields must be retained.'
          }
        ]
      },
      {
        id: 'reconciliation-boundary',
        eyebrow: 'Reconciliation boundary',
        title: 'How cash application and payment reconciliation should fit together',
        intro:
          'Cash application and payment reconciliation are related but not identical. A strong workflow separates “match and post this payment” from “why do bank, remittance, and ERP states still disagree?”',
        cards: [
          {
            icon: 'solar:scanner-linear',
            title: 'Cash application decides invoice matching and posting readiness',
            text: 'It should answer which invoice and customer account the payment belongs to and whether the match is trusted enough for ERP handoff.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Reconciliation handles residual mismatches and timing breaks',
            text: 'If bank, remittance, and ERP states still do not align because of timing, duplication, or posting errors, the break should move into a separate exception queue.'
          },
          {
            icon: 'solar:shield-check-linear',
            title: 'Both workflows should keep the ERP boundary clear',
            text: 'The workflow layer can route reviews and record decisions, but authoritative posting and ledger ownership should remain inside the system of record.'
          }
        ],
        note:
          'For GCC teams, this boundary is especially important when local entities, bank channels, and ERP posting rules differ by market or legal entity.'
      }
    ],
    faqs: [
      {
        q: 'Why is cash application hard to automate?',
        a: 'Because remittance data is often incomplete or delayed, customer references are inconsistent, payer names may not match ERP records, and short pays or deductions often require review before posting.'
      },
      {
        q: 'What is unapplied cash?',
        a: 'Unapplied cash is a received payment that has not yet been matched to the correct invoice or customer account and therefore remains unresolved operationally or unposted in the expected ERP state.'
      },
      {
        q: 'Should all cash application exceptions be posted automatically?',
        a: 'No. Low-confidence matches, short pays, duplicate candidates, deduction-related differences, and missing-reference cases should usually be routed to a review queue first.'
      },
      {
        q: 'What data is needed for cash application automation?',
        a: 'At minimum, you need open invoice/customer data from ERP, incoming payment records from bank or payment systems, and remittance references or documents that explain which invoices the customer intended to pay.'
      },
      {
        q: 'Does Binizam become the system of record for cash posting?',
        a: 'No. The workflow layer can propose matches, route exceptions, and support controlled handoff, but the ERP or approved finance system should remain authoritative for posting and ledger ownership.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Cash Application Automation',
        href: '/solutions/cash-application-automation/',
        description: 'Move from this guide into the commercial cash application workflow and exception-routing page.',
        icon: 'solar:scanner-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Payment Reconciliation Automation',
        href: '/solutions/payment-reconciliation-automation/',
        description: 'See how “expected vs actual” breaks are handled after a match fails, duplicates, or needs owner review.',
        icon: 'solar:scale-linear'
      },
      {
        eyebrow: 'Integration',
        label: 'APIs & Bank Files',
        href: '/integrations/api-bank-files/',
        description: 'Understand how bank files, APIs, webhooks, and batch imports feed payment-matching workflows.',
        icon: 'solar:programming-linear'
      }
    ]
  },
  {
    kind: 'guide',
    slug: 'ar-collections-workflow',
    href: '/guides/ar-collections-workflow/',
    title: 'AR Collections Workflow Best Practices for Finance Teams | Binizam',
    description:
      'AR collections workflow best practices for finance teams: queue design, follow-up cadence, promise-to-pay and dispute states, manager escalation, audit controls, and reporting.',
    eyebrow: 'Guides / Collections workflow',
    h1: 'AR collections workflow best practices.',
    lead:
      'A practical operating model for structuring collector queues, follow-up cadences, PTP/dispute states, manager escalation, and audit-ready reporting for GCC AR teams.',
    directAnswer:
      'A good AR collections workflow gives each overdue customer or invoice one owner, one status, one due next action, one escalation path, and one auditable record of promise-to-pay, dispute, and resolution decisions. The process should separate “follow up,” “PTP received,” “PTP broken,” “dispute open,” “manager review,” and “resolved” states so collectors and managers do not operate from private spreadsheets.',
    quickLinks: guideQuickLinks,
    articleSummary:
      'This guide explains the workflow states, queue logic, escalation rules, and control boundaries behind a strong collections process, and then connects that article content to the AR collections and collector-worklist solution pages.',
    articleCategory: 'Collections workflow design',
    dateModified: '2026-04-03',
    readTime: '9 min read',
    secondaryCtaHref: '/solutions/ar-collections-automation/',
    secondaryCtaLabel: 'See AR collections automation',
    visual: {
      caption: 'Collections workflow state map',
      tone: 'indigo',
      cards: [
        {
          icon: 'solar:clipboard-list-linear',
          title: 'Open account queue',
          text: 'Rank accounts by aging, balance, customer segment, SLA, dispute/PTP state, and current owner.',
          label: 'Queue'
        },
        {
          icon: 'solar:hand-shake-linear',
          title: 'PTP or dispute state',
          text: 'Capture promised dates, broken promises, dispute reason codes, requested evidence, and assigned owner changes.',
          label: 'State'
        },
        {
          icon: 'solar:shield-keyhole-linear',
          title: 'Escalation + approval',
          text: 'Route stalled accounts, settlement requests, high-risk balances, and policy exceptions to manager review.',
          label: 'Review'
        }
      ]
    },
    articleBlocks: [
      {
        id: 'key-takeaways',
        eyebrow: 'Key takeaways',
        title: 'What every collections workflow should define before automation',
        intro:
          'The best collections operating models are explicit about queue ownership, status transitions, and escalation logic. That is what makes automation useful and reporting trustworthy.',
        cards: [
          {
            icon: 'solar:sort-from-bottom-to-top-linear',
            title: 'One ranked queue and one owner per account',
            text: 'Collectors should not start their day by rebuilding priorities from exports. One queue and one owner reduce duplicate handling and missed follow-up.',
            label: 'Queue'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'PTP and disputes must be separate states',
            text: 'A customer who promised to pay is operationally different from a customer disputing the invoice. Mixing those states damages reporting and escalation quality.',
            label: 'States'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'Every sensitive action needs a visible audit trail',
            text: 'Approvals, queue overrides, write-off recommendations, reassignment, and customer-specific exceptions should all be tied to named users and timestamps.',
            label: 'Audit'
          }
        ]
      },
      {
        id: 'common-mistakes',
        eyebrow: 'Common mistakes',
        title: 'What breaks collections workflows in practice',
        intro:
          'These are the operating-model issues that usually create spreadsheet drift, stale promises, and weak manager visibility.',
        cards: [
          {
            icon: 'solar:alarm-linear',
            title: 'Follow-up cadence exists in memory, not in the system',
            text: 'If reminders and due dates are not attached to the account state, collectors rely on personal notes and managers cannot tell what is overdue.'
          },
          {
            icon: 'solar:user-id-linear',
            title: 'Ownership is assigned by team, not by record',
            text: 'A record needs one current owner and a reassignment trail; otherwise escalation and accountability become fuzzy.'
          },
          {
            icon: 'solar:shield-warning-linear',
            title: 'Manager exceptions are handled outside the workflow',
            text: 'Once write-offs, settlements, or special handling requests move to email approvals, the queue and the audit trail stop reflecting reality.'
          }
        ]
      },
      {
        id: 'workflow-example',
        eyebrow: 'Workflow example',
        title: 'A practical collections state machine a team can implement',
        intro:
          'A simple state model is usually better than a large one. These states are enough to run a first queue while keeping reporting and controls clean.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: '1. Open follow-up → contact attempted → PTP received',
            text: 'The account starts in a due-follow-up state, the collector logs outreach attempts and outcomes, and a valid promise-to-pay stores a payment date and expected amount.'
          },
          {
            icon: 'solar:shield-warning-linear',
            title: '2. PTP broken or dispute opened → manager review if stale or sensitive',
            text: 'A broken promise creates a new escalation path; a true dispute requires reason coding, evidence capture, and potentially a manager approval step.'
          },
          {
            icon: 'solar:check-read-linear',
            title: '3. Resolved, closed with reason, or reassigned',
            text: 'Every terminal state should explain how the case was closed, whether ERP state changed, and who approved any unusual outcome.'
          }
        ]
      },
      {
        id: 'automate-vs-manual',
        eyebrow: 'Automate vs manual',
        title: 'What to automate in collections and what to keep manager-reviewed',
        intro:
          'Automation should remove repetitive coordination while preserving judgment on high-risk customer outcomes.',
        cards: [
          {
            icon: 'solar:bolt-linear',
            title: 'Automate daily queue ranking, reminders, and stale-action escalation',
            text: 'Those are repeatable operating controls that reduce missed coverage and keep collectors focused.'
          },
          {
            icon: 'solar:key-minimalistic-square-linear',
            title: 'Keep write-offs, settlement exceptions, and VIP-account overrides behind approval gates',
            text: 'Managers should remain accountable for sensitive policy decisions and account-specific exceptions.'
          },
          {
            icon: 'solar:magic-stick-3-linear',
            title: 'Use AI for draft summaries or suggested next actions only where the logic remains reviewable',
            text: 'A collector or manager should still be able to inspect why an account was prioritized and override the recommendation if the context is wrong.'
          }
        ]
      }
    ],
    sections: [
      {
        id: 'how-it-works',
        eyebrow: 'How it works',
        title: 'Workflow elements every collections process should define',
        intro:
          'These are the operating fields and status rules that should exist before a collections team tries to automate follow-up or queue prioritization.',
        cards: [
          {
            icon: 'solar:sort-from-bottom-to-top-linear',
            title: 'Queue ranking and segmentation',
            text: 'Decide how aging, amount, customer tier, legal entity, SLA, dispute/PTP state, and risk flags should affect account priority.'
          },
          {
            icon: 'solar:alarm-linear',
            title: 'Follow-up cadence and next action',
            text: 'Define when to send reminders, when to call, how to log the customer response, and when to escalate stale items or broken promises.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'PTP and dispute state model',
            text: 'Track promised payment date, expected amount, broken-promise status, dispute reason codes, evidence links, and current owner.'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'Audit trail and manager reporting',
            text: 'Record state changes, approvals, queue overrides, reassignment, account notes, queue aging, and closure reasons so reporting is based on real workflow events.'
          }
        ]
      },
      {
        id: 'what-to-implement-first',
        eyebrow: 'What to implement first',
        title: 'A safe collections workflow rollout sequence',
        intro:
          'Keep the first rollout simple enough that collectors trust the queue and managers trust the reporting before adding richer segmentation, bilingual UI, or AI suggestions.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Launch one collector queue',
            text: 'Use one owner model, one small status taxonomy, and one clear ranking rule set for a single team, segment, or entity.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Separate PTP from dispute',
            text: 'This distinction is one of the easiest ways to improve operational clarity, forecast confidence, and manager escalation quality.'
          },
          {
            icon: 'solar:shield-warning-linear',
            title: 'Add manager review for sensitive outcomes',
            text: 'Protect settlement exceptions, write-offs, account-specific overrides, and unusual customer handling with explicit approval paths.'
          }
        ]
      },
      {
        id: 'gcc-collections-context',
        eyebrow: 'GCC workflow context',
        title: 'How this workflow should adapt for GCC finance teams',
        intro:
          'The state machine should remain simple, but GCC operating details such as entity ownership, Arabic-ready labels, and ERP boundary controls should be represented in the model.',
        cards: [
          {
            icon: 'solar:map-point-linear',
            title: 'Entity and territory routing',
            text: 'Route accounts by legal entity, geography, customer segment, and manager owner so UAE or Saudi operating boundaries are respected.'
          },
          {
            icon: 'solar:global-linear',
            title: 'Arabic-ready statuses and customer context',
            text: 'Keep status names, reason codes, and customer notes structured so Arabic workflows and Arabic pages can be introduced later.'
          },
          {
            icon: 'solar:database-linear',
            title: 'ERP system-of-record boundary',
            text: 'Collections states, reminders, and approvals can live in the workflow layer, but authoritative invoice balances and postings should remain in SAP, Oracle, Dynamics, or the approved ERP.'
          }
        ],
        note:
          'If reconciliation or cash-application exceptions are major blockers, link those exception queues back into the collections workflow so collectors do not chase invoices that are actually blocked by an unapplied-cash or posting issue.'
      }
    ],
    faqs: [
      {
        q: 'How should collectors prioritize accounts?',
        a: 'Use a mix of aging, open amount, customer segment, legal entity, SLA, promise/dispute state, and business-specific risk rules, but keep the ranking explainable so collectors and managers understand why an account is prioritized.'
      },
      {
        q: 'What states should an AR collections workflow track?',
        a: 'At minimum: open follow-up, contact attempted, PTP received, broken PTP, dispute open, evidence requested, manager review, escalated, and resolved or closed with a reason code.'
      },
      {
        q: 'How do teams avoid spreadsheet drift?',
        a: 'Move ownership, status changes, due dates, customer notes, approval decisions, and exception reasons into one shared workflow layer with controlled transitions and reporting based on actual events.'
      },
      {
        q: 'Should customer follow-up messages be fully automated?',
        a: 'Not always. Internal reminders and task creation are often safe to automate first, but customer-facing messages may need templates, review rules, and account-specific approvals before broad automation.'
      },
      {
        q: 'How does this workflow connect to ERP data?',
        a: 'The workflow layer should read open AR, account status, and customer context from ERP/CRM systems, then write back only the status or posting updates that have an explicit control boundary and audit trail.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'AR Collections Automation',
        href: '/solutions/ar-collections-automation/',
        description: 'Implement the queue, follow-up cadence, PTP, and dispute model described in this guide.',
        icon: 'solar:users-group-two-rounded-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Collector Worklists',
        href: '/solutions/collector-worklists/',
        description: 'Build the daily ranked operating queue that collectors and managers use to reduce missed follow-up.',
        icon: 'solar:list-check-minimalistic-linear'
      },
      {
        eyebrow: 'Integration',
        label: 'Oracle Integration',
        href: '/integrations/oracle/',
        description: 'See how Oracle can stay the system of record while Binizam handles worklists, status, and exception routing.',
        icon: 'solar:database-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'How to reduce DSO in GCC',
        href: '/guides/reduce-dso-gcc/',
        description: 'Connect queue discipline, broken-PTP escalation, and dispute closure speed to DSO improvement.',
        icon: 'solar:chart-2-linear'
      }
    ]
  }
];

function getSolutionNavLabel(slug: string, fallback: string) {
  switch (slug) {
    case 'accounts-receivable-automation':
      return 'Accounts Receivable Automation';
    case 'ar-collections-automation':
      return 'AR Collections Automation';
    case 'cash-application-automation':
      return 'Cash Application Automation';
    case 'payment-reconciliation-automation':
      return 'Payment Reconciliation';
    case 'invoice-dispute-management':
      return 'Invoice Dispute Management';
    case 'collector-worklists':
      return 'Collector Worklists';
    case 'accounts-receivable-automation-uae':
      return 'AR Automation UAE';
    case 'accounts-receivable-automation-saudi-arabia':
      return 'AR Automation Saudi Arabia';
    default:
      return fallback;
  }
}

function getIntegrationNavLabel(slug: string) {
  switch (slug) {
    case 'sap':
      return 'SAP';
    case 'oracle':
      return 'Oracle';
    case 'microsoft-dynamics':
      return 'Microsoft Dynamics';
    case 'retool':
      return 'Retool';
    case 'api-bank-files':
      return 'APIs & Bank Files';
    default:
      return slug;
  }
}

export const siteNavigation: NavSection[] = [
  {
    label: 'Solutions',
    href: '/solutions/',
    items: solutionPages.map(({ h1, href, slug, visual }) => ({
      label: getSolutionNavLabel(slug, h1.replace(/\.$/, '')),
      href,
      description: visual.cards[0]?.text ?? '',
      icon: visual.cards[0]?.icon ?? 'solar:bolt-linear'
    }))
  },
  {
    label: 'Integrations',
    href: '/integrations/',
    items: integrationPages.map(({ slug, href, visual }) => ({
      label: getIntegrationNavLabel(slug),
      href,
      description: visual.cards[0]?.text ?? '',
      icon: visual.cards[0]?.icon ?? 'solar:plug-circle-linear'
    }))
  },
  {
    label: 'Guides',
    href: '/guides/',
    items: guidePages.map(({ href, h1, visual }) => ({
      label: h1.replace(/\.$/, ''),
      href,
      description: visual.cards[0]?.text ?? '',
      icon: visual.cards[0]?.icon ?? 'solar:book-bookmark-linear'
    }))
  },
  { label: 'Security', href: '/security/' },
  { label: 'How we work', href: '/how-we-work/' }
];

export const footerColumns = [
  {
    title: 'Solutions',
    links: [
      { label: 'Accounts Receivable Automation', href: '/solutions/accounts-receivable-automation/' },
      { label: 'AR Collections Automation', href: '/solutions/ar-collections-automation/' },
      { label: 'Cash Application Automation', href: '/solutions/cash-application-automation/' },
      { label: 'Payment Reconciliation', href: '/solutions/payment-reconciliation-automation/' }
    ]
  },
  {
    title: 'Integrations & Guides',
    links: [
      { label: 'Integrations Hub', href: '/integrations/' },
      { label: 'Retool', href: '/integrations/retool/' },
      { label: 'Guides Hub', href: '/guides/' },
      { label: 'What is AR Automation?', href: '/guides/what-is-accounts-receivable-automation/' }
    ]
  },
  {
    title: 'Trust',
    links: [
      { label: 'Security', href: '/security/' },
      { label: 'How we work', href: '/how-we-work/' },
      { label: 'Privacy Policy', href: '/privacy/' }
    ]
  },
  {
    title: 'Contact',
    links: [
      { label: 'engineers@binizam.com', href: 'mailto:engineers@binizam.com' },
      { label: 'Contact', href: '/contact/' }
    ]
  }
];

export const solutionHubHighlights: PageCard[] = [
  {
    icon: 'solar:chart-2-linear',
    title: 'Start with one AR module, then expand',
    text: 'Pilot collections, cash application, disputes, or reconciliation as a focused V1, then connect adjacent workflows once the state model is stable.'
  },
  {
    icon: 'solar:shield-check-linear',
    title: 'Keep ERP and payment boundaries explicit',
    text: 'Binizam builds the workflow layer and operator UIs around your source systems, not a replacement ledger or payment processor.'
  },
  {
    icon: 'solar:global-linear',
    title: 'Built for GCC operating context',
    text: 'The content and URL structure is English-first today, but the data model is ready for Arabic routes and bilingual workflow labels later.'
  }
];

export const integrationHubHighlights: PageCard[] = [
  {
    icon: 'solar:database-linear',
    title: 'System of record stays where it belongs',
    text: 'SAP, Oracle, Dynamics, and approved systems keep authoritative financial ownership.'
  },
  {
    icon: 'solar:layers-minimalistic-linear',
    title: 'Binizam handles queues and exceptions',
    text: 'Use one workflow layer for ownership, reminders, approvals, reconciliation, and reporting.'
  },
  {
    icon: 'solar:key-minimalistic-square-linear',
    title: 'Least-privilege by default',
    text: 'Scope integrations to the exact fields and operations needed for each workflow slice.'
  }
];

export const guideHubHighlights: PageCard[] = [
  {
    icon: 'solar:book-bookmark-linear',
    title: 'Direct-answer sections for AI and human readers',
    text: 'Each guide begins with a concise explanation, then expands into process detail and implementation tradeoffs.'
  },
  {
    icon: 'solar:link-circle-linear',
    title: 'Guides feed solution pages',
    text: 'Every guide links to the matching commercial pages so informational search demand has a clear next step.'
  },
  {
    icon: 'solar:shield-warning-linear',
    title: 'No inflated automation claims',
    text: 'The content stays specific about states, controls, system boundaries, and what should remain human-reviewed.'
  }
];
