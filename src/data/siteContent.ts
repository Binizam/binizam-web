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
  readTime: string;
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
  { label: 'Direct answer', href: '#direct-answer' },
  { label: 'How it works', href: '#how-it-works' },
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
      'Accounts receivable automation for GCC finance teams: collections worklists, cash application, disputes, payment reconciliation, ERP integration, and audit-ready workflows.',
    eyebrow: 'Solutions / Accounts receivable automation',
    h1: 'Accounts receivable automation for GCC finance teams.',
    lead:
      'Build a controlled AR workflow layer across collections, cash application, disputes, and reconciliation while your ERP remains the system of record.',
    directAnswer:
      'Accounts receivable automation means replacing spreadsheet-driven follow-up, payment matching, dispute routing, and reconciliation handoffs with governed workflows that assign owners, enforce approvals, and keep an audit trail tied to ERP data.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'Best main entry point',
    serviceName: 'Accounts receivable automation',
    outcomes: [
      {
        icon: 'solar:chart-2-linear',
        title: 'Cleaner DSO control',
        text: 'Track overdue action, PTP status, dispute age, and owner accountability from one AR operating layer.',
        label: 'DSO'
      },
      {
        icon: 'solar:clipboard-list-linear',
        title: 'Lower manual coordination',
        text: 'Move follow-ups and exception routing out of inbox threads into shared queues and status logic.',
        label: 'Queues'
      },
      {
        icon: 'solar:shield-check-linear',
        title: 'Audit-ready workflows',
        text: 'Keep approval, override, and status-change history visible for finance managers and internal review.',
        label: 'Control'
      }
    ],
    visual: {
      caption: 'AR workflow map',
      cards: [
        {
          icon: 'solar:bill-list-linear',
          title: 'Invoices + aging',
          text: 'Pull open AR, customer status, and ownership from ERP/CRM systems.',
          label: '01'
        },
        {
          icon: 'solar:users-group-two-rounded-linear',
          title: 'Collections + disputes',
          text: 'Route collector actions, PTP promises, dispute states, and approvals.',
          label: '02'
        },
        {
          icon: 'solar:scale-linear',
          title: 'Cash app + reconciliation',
          text: 'Match payments, isolate exceptions, and hand back controlled updates.',
          label: '03'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'AR workflows we automate first',
        intro:
          'This page is the umbrella workflow map. Each module below can be implemented as a focused first slice and expanded once the team has a stable operating loop.',
        cards: [
          {
            icon: 'solar:sort-from-bottom-to-top-linear',
            title: 'Collector prioritization',
            text: 'Rank accounts by aging, amount, SLA, segment, and risk so collectors do not spend the morning deciding where to start.'
          },
          {
            icon: 'solar:inbox-archive-linear',
            title: 'Cash application exceptions',
            text: 'Capture remittance gaps, short payments, and unapplied cash in a queue with owner, reason code, and resolution status.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Disputes and PTP',
            text: 'Standardize dispute intake, promise-to-pay tracking, evidence collection, and manager approvals for sensitive outcomes.'
          },
          {
            icon: 'solar:layers-minimalistic-linear',
            title: 'Payment reconciliation',
            text: 'Identify “expected vs actual” breaks between bank data, ERP records, and customer account status before they become month-end clean-up.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'What the operating layer should contain',
        intro:
          'For SEO and for implementation quality, each AR page should make the control model explicit: what users see, what the system automates, and where approvals stay human.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Worklists and next-action queues',
            text: 'Shared queues with account ownership, priority, action reason, current state, and target follow-up date.'
          },
          {
            icon: 'solar:bolt-linear',
            title: 'Scheduled reminders and escalations',
            text: 'Cadence logic, SLA reminders, internal escalation rules, and status updates that do not depend on manual spreadsheet maintenance.'
          },
          {
            icon: 'solar:key-minimalistic-square-linear',
            title: 'Approval and exception controls',
            text: 'Manager review gates for write-offs, sensitive adjustments, account overrides, and customer-specific edge cases.'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'Audit trail and reporting state',
            text: 'A durable event history tied to real workflow actions so dashboards reflect what the team actually did, not a manually edited status sheet.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'How a safe V1 usually ships',
        intro:
          'Start with one workflow slice where value and control are easy to verify, then expand to adjacent AR modules and country-specific variants.',
        cards: [
          {
            icon: 'solar:radar-linear',
            title: 'Pick one queue and one owner group',
            text: 'For example, overdue accounts for one business unit, one collector team, or one exception class.'
          },
          {
            icon: 'solar:plug-circle-linear',
            title: 'Connect ERP and source systems with least privilege',
            text: 'Start read-heavy, isolate the exact write operations, and make reconciliation visible before widening scope.'
          },
          {
            icon: 'solar:calendar-mark-linear',
            title: 'Run a short review cycle with finance managers',
            text: 'Validate queue logic, status definitions, approval boundaries, and handover docs before rollout to all operators.'
          }
        ],
        note:
          'Binizam does not replace your ERP or become your payment processor. The workflow layer sits alongside your system of record and exposes the work that otherwise happens in spreadsheets and inboxes.'
      }
    ],
    faqs: [
      {
        q: 'What does accounts receivable automation include?',
        a: 'For Binizam, AR automation usually includes collections queues, follow-up workflows, PTP/dispute tracking, cash-application exception handling, payment reconciliation, approval controls, and audit-ready reporting.'
      },
      {
        q: 'Does Binizam replace SAP, Oracle, or Microsoft Dynamics?',
        a: 'No. The ERP stays the system of record for financial postings and master data. Binizam builds the workflow layer, operator tools, and reconciliation logic around it.'
      },
      {
        q: 'Can the first implementation be limited to one workflow?',
        a: 'Yes. The safest starting point is usually one queue, one exception type, or one team workflow, then expand after the first reviewable V1 is stable.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'AR Collections Automation',
        href: '/solutions/ar-collections-automation/',
        description: 'Prioritized follow-up queues, PTP tracking, and manager exceptions.',
        icon: 'solar:users-group-two-rounded-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Cash Application Automation',
        href: '/solutions/cash-application-automation/',
        description: 'Payment matching and remittance exception routing without spreadsheet clean-up.',
        icon: 'solar:inbox-archive-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'What is accounts receivable automation?',
        href: '/guides/what-is-accounts-receivable-automation/',
        description: 'A short definition and implementation model that explains the control boundaries.',
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
      'AR collections automation for collector worklists, follow-up cadences, PTP and dispute handling, manager exceptions, and ERP-connected audit trails.',
    eyebrow: 'Solutions / AR collections automation',
    h1: 'AR collections automation with prioritized worklists, follow-ups, disputes, and audit trails.',
    lead:
      'Give collectors a clear queue, make PTP and disputes traceable, and keep manager exceptions controlled without moving financial ownership out of your ERP.',
    directAnswer:
      'AR collections automation should create one ranked collector worklist, standardize follow-up and escalation logic, capture PTP/dispute states consistently, and preserve manager approval and audit history for every sensitive outcome.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'Most common starting point',
    serviceName: 'AR collections automation',
    outcomes: [
      {
        icon: 'solar:sort-from-bottom-to-top-linear',
        title: 'Prioritized collector coverage',
        text: 'Reduce missed follow-ups by making next actions and ownership explicit across each overdue segment.',
        label: 'Focus'
      },
      {
        icon: 'solar:hand-shake-linear',
        title: 'Structured PTP + disputes',
        text: 'Track customer promises, disputed invoices, reason codes, and escalation paths in one state model.',
        label: 'PTP'
      },
      {
        icon: 'solar:document-text-linear',
        title: 'Manager-visible audit trail',
        text: 'Record who changed a state, approved an exception, or overrode a queue rule and why.',
        label: 'Audit'
      }
    ],
    visual: {
      caption: 'Collections worklist flow',
      cards: [
        {
          icon: 'solar:clipboard-list-linear',
          title: 'Queue',
          text: 'Accounts ranked by aging, SLA, amount, segment, and priority rule.',
          label: 'Worklist'
        },
        {
          icon: 'solar:alarm-linear',
          title: 'Follow-up',
          text: 'Cadence reminders, task outcomes, and customer response capture.',
          label: 'Cadence'
        },
        {
          icon: 'solar:shield-keyhole-linear',
          title: 'Exception',
          text: 'Manager review for sensitive outcomes, disputes, and write-off logic.',
          label: 'Control'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'Where collections work usually breaks',
        intro:
          'The goal is not more notifications. The goal is one operating loop where each account has an owner, a state, a next action, and a review path.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Spreadsheet-based collector assignment',
            text: 'Replace manual sorting and ad hoc ownership with queue rules, filters, and visible handoffs.'
          },
          {
            icon: 'solar:history-2-linear',
            title: 'Follow-ups buried in email',
            text: 'Make response capture and next-step creation part of the workflow, not a memory task.'
          },
          {
            icon: 'solar:users-group-two-rounded-linear',
            title: 'PTP and disputes tracked inconsistently',
            text: 'Force key fields, due dates, reason codes, and escalation triggers so managers can trust reporting.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'Collector and manager workflows to scaffold first',
        intro:
          'These are the operator-facing modules the page should describe and the template should make easy to expand later with screenshots or richer examples.',
        cards: [
          {
            icon: 'solar:sort-from-bottom-to-top-linear',
            title: 'Collector worklists',
            text: 'Daily queue ranked by aging, invoice value, customer tier, SLA, and owner rules.'
          },
          {
            icon: 'solar:alarm-linear',
            title: 'Follow-up sequences',
            text: 'Automated reminders, internal escalations, and next-action prompts with outcome logging.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'PTP and dispute states',
            text: 'Promise dates, dispute categories, owner assignment, and required approvals for sensitive actions.'
          },
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'Manager exceptions',
            text: 'Review queues for stalled accounts, special handling requests, and override decisions.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'Safe V1 implementation pattern',
        intro:
          'Start with one queue and one action model, then add disputes, PTP depth, templates, and segmentation once managers trust the state data.',
        cards: [
          {
            icon: 'solar:checklist-minimalistic-linear',
            title: 'One ranked queue',
            text: 'Launch with the core collector worklist and a small set of validated status transitions.'
          },
          {
            icon: 'solar:link-circle-linear',
            title: 'One source-of-record sync',
            text: 'Connect open AR and customer status from ERP/CRM, then add write-back rules only where required.'
          },
          {
            icon: 'solar:document-add-linear',
            title: 'One reviewable handover pack',
            text: 'Document workflow states, queue rules, approvals, and ownership before expanding to a larger book of business.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'Do you replace our ERP?',
        a: 'No. When an ERP is involved, Binizam adds a controlled workflow and queue layer alongside it. The ERP remains the system of record for ledger data and postings.'
      },
      {
        q: 'Do you process payments?',
        a: 'No. Binizam does not act as a payment processor. We build the follow-up, exception, reconciliation, and approval workflows around your existing payment channels and financial systems.'
      },
      {
        q: 'Can AI be used in collections workflows?',
        a: 'Yes, but only where the recommendation or draft action can be reviewed, monitored, and overridden. The default implementation keeps approval boundaries and auditability explicit.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Collector Worklists',
        href: '/solutions/collector-worklists/',
        description: 'Queue design, ownership rules, next-action states, and escalation logic.',
        icon: 'solar:sort-from-bottom-to-top-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Invoice Dispute Management',
        href: '/solutions/invoice-dispute-management/',
        description: 'Route disputes and deductions with status, evidence, approvals, and resolution history.',
        icon: 'solar:hand-shake-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'AR collections workflow best practices',
        href: '/guides/ar-collections-workflow/',
        description: 'How to structure queues, PTP states, escalations, and collector reporting.',
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
      'Cash application automation for payment matching, remittance capture, short-pay exception queues, and ERP handoff controls.',
    eyebrow: 'Solutions / Cash application automation',
    h1: 'Cash application automation that routes exceptions instead of hiding them in spreadsheets.',
    lead:
      'Match payment and remittance data where rules are clear, then isolate short-pay and no-match exceptions into a controlled resolution queue.',
    directAnswer:
      'Cash application automation should reconcile incoming bank payments and remittance data against open invoices, post only the safe matches your team approves, and route partial payments, missing references, and disputed deductions into exception workflows.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'High leverage after collections',
    serviceName: 'Cash application automation',
    outcomes: [
      {
        icon: 'solar:inbox-archive-linear',
        title: 'Less unapplied cash cleanup',
        text: 'Move no-match items into reason-coded queues with owner assignment and resolution status.',
        label: 'Exceptions'
      },
      {
        icon: 'solar:scanner-linear',
        title: 'More consistent remittance intake',
        text: 'Standardize bank files, payment references, and email remittance capture before matching logic runs.',
        label: 'Remittance'
      },
      {
        icon: 'solar:link-circle-linear',
        title: 'Safer ERP handoff',
        text: 'Define which matches can post, which require approval, and how exceptions are reconciled.',
        label: 'ERP'
      }
    ],
    visual: {
      caption: 'Cash application matching flow',
      cards: [
        {
          icon: 'solar:banknote-linear',
          title: 'Payment + remittance input',
          text: 'Bank file, transfer reference, customer email, or remittance attachment.',
          label: 'Capture'
        },
        {
          icon: 'solar:scanner-linear',
          title: 'Matching rules',
          text: 'Invoice reference, amount, customer, date, and tolerance logic.',
          label: 'Match'
        },
        {
          icon: 'solar:layers-minimalistic-linear',
          title: 'Exception queue',
          text: 'Partial payment, short pay, duplicate, and no-reference cases.',
          label: 'Review'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'Cash application bottlenecks to move out of inboxes',
        intro:
          'The implementation should make matching confidence, exception reason, and handoff status visible so month-end cleanup becomes operationally manageable.',
        cards: [
          {
            icon: 'solar:bill-check-linear',
            title: 'Missing or messy remittance references',
            text: 'Normalize payment identifiers, attached remittance files, and email context before matching.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Partial payments and deductions',
            text: 'Route short pays and deduction-linked transactions into a dispute/reconciliation queue instead of manually parking them.'
          },
          {
            icon: 'solar:copy-linear',
            title: 'Duplicate or stale matching attempts',
            text: 'Track match status, review outcome, and posting state so the team can tell what has already been handled.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'Matching and exception states to scaffold',
        intro:
          'Each card should become a reusable page section with plain-language AR terminology and enough structure for later screenshots or examples.',
        cards: [
          {
            icon: 'solar:scanner-linear',
            title: 'Auto-match candidates',
            text: 'Propose exact and near-match candidates using invoice references, amount logic, customer mapping, and payment timing.'
          },
          {
            icon: 'solar:key-minimalistic-square-linear',
            title: 'Approval boundaries',
            text: 'Require human review for low-confidence matches, large adjustments, or customer-specific tolerance rules.'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'Reason-coded exceptions',
            text: 'Classify no-match, short-pay, duplicate, unidentified, and timing mismatch cases so resolution reporting is meaningful.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'Safe V1 rollout for cash application',
        intro:
          'Start where source data is consistent enough to deliver visible improvement without pretending every payment can be posted touchlessly on day one.',
        cards: [
          {
            icon: 'solar:file-text-linear',
            title: 'One bank feed or payment channel',
            text: 'Launch matching and exception handling for one file format, one entity, or one customer segment first.'
          },
          {
            icon: 'solar:tuning-linear',
            title: 'One tolerance model',
            text: 'Define exact-match and review-required thresholds so operators trust what the workflow is proposing.'
          },
          {
            icon: 'solar:cloud-upload-linear',
            title: 'One controlled ERP posting path',
            text: 'Make handoff, reversal, and error handling explicit before expanding write-back automation.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'Can cash application be fully automated?',
        a: 'Some matches can be automated with high confidence, but partial payments, deductions, and missing remittance references should usually be routed to a review workflow instead of forced posting.'
      },
      {
        q: 'How do you handle short payments or deductions?',
        a: 'Short pays should be captured with a reason code, linked to the invoice/customer context, and routed into dispute or reconciliation workflows with clear ownership.'
      },
      {
        q: 'Can bank files and email remittances both be supported?',
        a: 'Yes. The workflow can ingest structured bank files and operational remittance emails, but the matching and review rules should be rolled out source by source.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Payment Reconciliation Automation',
        href: '/solutions/payment-reconciliation-automation/',
        description: 'Detect bank/ERP mismatches and route no-match exceptions to owners.',
        icon: 'solar:scale-linear'
      },
      {
        eyebrow: 'Integration',
        label: 'APIs & Bank Files',
        href: '/integrations/api-bank-files/',
        description: 'How bank files, APIs, webhooks, and batch syncs fit into the control model.',
        icon: 'solar:programming-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'Cash application explained',
        href: '/guides/cash-application/',
        description: 'Understand matching logic, exception states, and ERP handoff patterns.',
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
    h1: 'Payment reconciliation workflows for bank, ERP, and customer-account mismatches.',
    lead:
      'Turn out-of-sync payment events into owned exception queues with clear status, resolution paths, and audit history.',
    directAnswer:
      'Payment reconciliation automation compares expected customer-account and ERP states with actual bank/payment events, isolates mismatches, assigns an owner, and tracks resolution so reconciliation becomes a live workflow instead of a month-end scramble.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'Best for exception-heavy finance ops',
    serviceName: 'Payment reconciliation automation',
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
      cards: [
        {
          icon: 'solar:database-linear',
          title: 'Expected state',
          text: 'Open invoices, customer status, posted payments, and reference data.',
          label: 'ERP'
        },
        {
          icon: 'solar:transfer-horizontal-linear',
          title: 'Actual event',
          text: 'Incoming payment, bank line, remittance update, or customer-side action.',
          label: 'Bank'
        },
        {
          icon: 'solar:shield-warning-linear',
          title: 'Mismatch queue',
          text: 'Duplicate, partial, timing, customer mapping, and posting exceptions.',
          label: 'Review'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'Where reconciliation breaks accumulate',
        intro:
          'The page content should make the exception taxonomy obvious so human readers and LLMs understand what the workflow layer is responsible for.',
        cards: [
          {
            icon: 'solar:clock-circle-linear',
            title: 'Timing mismatches',
            text: 'Payments arrive before/after ERP state updates or sync jobs, creating false breaks and stale follow-up.'
          },
          {
            icon: 'solar:shield-warning-linear',
            title: 'Amount and short-pay breaks',
            text: 'Customer payment does not equal the open invoice amount and needs a reason-coded resolution path.'
          },
          {
            icon: 'solar:user-id-linear',
            title: 'Customer mapping and reference issues',
            text: 'Bank references, customer names, and invoice identifiers do not align cleanly with ERP master data.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'Exception workflow states to scaffold',
        intro:
          'Make each reconciliation issue operationally manageable with one state model, one owner, one due date, and one audit trail.',
        cards: [
          {
            icon: 'solar:folder-open-linear',
            title: 'Exception intake',
            text: 'Create a queue item with source system, customer, amount, reason code, confidence, and current owner.'
          },
          {
            icon: 'solar:check-read-linear',
            title: 'Resolution paths',
            text: 'Define whether the item requires remittance lookup, dispute escalation, manual posting review, or account mapping correction.'
          },
          {
            icon: 'solar:chart-square-linear',
            title: 'Recurring-break reporting',
            text: 'Track volume and aging by reason code so the team can identify where process or data improvements matter most.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'What to implement first',
        intro:
          'Start by routing one high-friction exception category into a controlled queue, then widen the taxonomy and sync coverage.',
        cards: [
          {
            icon: 'solar:filter-linear',
            title: 'Pick one exception class',
            text: 'For example, no-remittance payments, duplicate references, or short pays above a threshold.'
          },
          {
            icon: 'solar:link-circle-linear',
            title: 'Anchor the source and target systems',
            text: 'Make the exact fields, polling cadence, and ownership rules explicit before writing back to ERP.'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'Define closure rules',
            text: 'Document what “resolved” means and which audit fields are required for management review.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'What causes payment reconciliation breaks?',
        a: 'Common causes include timing differences, partial or short payments, missing remittance references, duplicate entries, and customer-account mapping mismatches between bank data and ERP records.'
      },
      {
        q: 'Who should own reconciliation exceptions?',
        a: 'Ownership depends on the issue type. Finance ops may handle posting/matching, collections may handle customer follow-up, and managers should review sensitive adjustments or overrides.'
      },
      {
        q: 'Can reconciliation be monitored continuously instead of only at month-end?',
        a: 'Yes. The goal of the workflow layer is to detect breaks continuously, assign them quickly, and make exception aging visible before close.'
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
      'Accounts receivable automation for UAE finance teams: AR collections, payment reconciliation, bilingual workflows, ERP integration, and audit-ready controls.',
    eyebrow: 'Solutions / UAE',
    h1: 'Accounts receivable automation for UAE finance and operations teams.',
    lead:
      'Build English/Arabic-ready AR workflows for UAE teams while keeping ERP ownership, controls, and data boundaries explicit.',
    directAnswer:
      'AR automation for UAE teams should support bilingual operator workflows, local approval and escalation requirements, VAT-aware process handling, and ERP-integrated collections, dispute, and reconciliation queues without replacing the system of record.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'GCC market page',
    serviceName: 'Accounts receivable automation UAE',
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
      cards: [
        {
          icon: 'solar:map-point-linear',
          title: 'UAE entities and teams',
          text: 'Segment queues by entity, geography, language, and manager ownership.',
          label: 'UAE'
        },
        {
          icon: 'solar:global-linear',
          title: 'Arabic + English labels',
          text: 'Keep content data structured so Arabic routes and localized UI text can follow.',
          label: 'EN / AR'
        },
        {
          icon: 'solar:bill-list-linear',
          title: 'VAT-aware process notes',
          text: 'Surface invoice/dispute context carefully without making unsupported tax-system claims.',
          label: 'VAT'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'Common UAE AR operating gaps',
        intro:
          'This page should answer UAE buyer intent directly while linking back to the core AR suite and specific sub-solution pages.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Entity and segment-specific collections queues',
            text: 'Model worklists by UAE entity, customer segment, team ownership, and approval rules.'
          },
          {
            icon: 'solar:layers-minimalistic-linear',
            title: 'Bank/payment exception handling',
            text: 'Route remittance mismatches and account exceptions into reason-coded queues with manager visibility.'
          },
          {
            icon: 'solar:global-linear',
            title: 'Bilingual workflow rollout path',
            text: 'Use an English-first implementation with Arabic-ready content fields and route patterns.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'What UAE pages should explain clearly',
        intro:
          'The content should be GCC-specific without overclaiming legal or regulatory implementation details.',
        cards: [
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'Data hosting and access boundaries',
            text: 'Link to Security and explain least-privilege access, audit logs, and what stays inside your current stack.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Commercial follow-up and dispute workflows',
            text: 'Show how collector actions, PTP tracking, and dispute routing fit UAE finance team operations.'
          },
          {
            icon: 'solar:bill-check-linear',
            title: 'VAT/e-invoicing caution zone',
            text: 'Acknowledge invoice/tax context at the workflow layer, while deferring statutory system-of-record logic to ERP and local systems.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'Suggested first UAE rollout',
        intro:
          'Start with one UAE entity or customer segment, then expand to bilingual workflow UI and adjacent AR modules.',
        cards: [
          {
            icon: 'solar:map-point-linear',
            title: 'One UAE entity',
            text: 'Ship one AR queue or exception workflow for one business unit or customer segment.'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'One operating taxonomy',
            text: 'Define status labels, reason codes, and approval rules in English first with Arabic-ready fields.'
          },
          {
            icon: 'solar:plug-circle-linear',
            title: 'One ERP integration path',
            text: 'Anchor what is read, what is written, and how exceptions are reconciled.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'Can UAE workflows support both Arabic and English?',
        a: 'Yes. The first rollout can be English-first while the content model, labels, and routes stay Arabic-ready so Arabic pages and bilingual UI text can be added cleanly.'
      },
      {
        q: 'Where should VAT or e-invoicing logic live?',
        a: 'Binizam can expose invoice and workflow context, but statutory tax logic and system-of-record posting rules should remain in your ERP or approved financial systems.'
      },
      {
        q: 'Can implementation start with one UAE business unit?',
        a: 'Yes. That is usually the safest rollout path before expanding to additional entities, segments, or bilingual operational views.'
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
        description: 'Collector queues, PTP/dispute states, and manager exception handling.',
        icon: 'solar:users-group-two-rounded-linear'
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
      'Accounts receivable automation for Saudi Arabia finance teams: collections workflows, dispute routing, reconciliation queues, Arabic-ready operations, and ERP boundaries.',
    eyebrow: 'Solutions / Saudi Arabia',
    h1: 'Accounts receivable automation for Saudi finance teams.',
    lead:
      'Build Arabic/English-ready AR workflows for Saudi teams with explicit ERP boundaries, exception ownership, and manager approval controls.',
    directAnswer:
      'AR automation for Saudi finance teams should structure collections, disputes, and reconciliation around clear owners and approvals, support Arabic/English workflows, and keep statutory invoicing and posting logic inside the ERP or approved KSA systems.',
    quickLinks: solutionQuickLinks,
    scopeTag: 'GCC market page',
    serviceName: 'Accounts receivable automation Saudi Arabia',
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
      cards: [
        {
          icon: 'solar:map-point-linear',
          title: 'Saudi AR teams',
          text: 'Model users, segments, and ownership at KSA entity level.',
          label: 'KSA'
        },
        {
          icon: 'solar:bill-check-linear',
          title: 'ZATCA-aware boundary',
          text: 'Keep statutory invoice/posting concerns in ERP or approved KSA systems.',
          label: 'System'
        },
        {
          icon: 'solar:global-linear',
          title: 'Arabic + English ops',
          text: 'Design states, labels, and guides so Arabic rollout can follow cleanly.',
          label: 'EN / AR'
        }
      ]
    },
    sections: [
      {
        id: 'what-this-solves',
        eyebrow: 'What this solves',
        title: 'Saudi AR workflows this page should anchor',
        intro:
          'This is a localized landing page, so the copy should address KSA search intent while routing readers to the deeper AR module pages.',
        cards: [
          {
            icon: 'solar:users-group-rounded-linear',
            title: 'Collector queue execution',
            text: 'Organize KSA customer accounts, due dates, next actions, and manager escalation in one queue.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Dispute and PTP tracking',
            text: 'Separate payment promises from disputed invoices and route sensitive outcomes to manager review.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Reconciliation exceptions',
            text: 'Track amount, timing, and reference breaks between customer payments, bank data, and ERP state.'
          }
        ]
      },
      {
        id: 'workflow-design',
        eyebrow: 'Workflow design',
        title: 'KSA implementation boundaries to explain',
        intro:
          'Keep the language conservative and operational: Binizam builds the workflow layer, not the statutory invoicing engine.',
        cards: [
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'ZATCA/system-of-record boundary',
            text: 'Do not overstate platform ownership. Make clear that approved ERP/KSA systems remain authoritative where required.'
          },
          {
            icon: 'solar:global-linear',
            title: 'Arabic-ready labels and content routes',
            text: 'Use content fields and schema that can later produce Arabic pages under `/ar/...` with hreflang.'
          },
          {
            icon: 'solar:plug-circle-linear',
            title: 'ERP and bank integration map',
            text: 'Explain how SAP, Oracle, Dynamics, APIs, and bank files fit without promising unsupported connectors.'
          }
        ]
      },
      {
        id: 'implementation-scope',
        eyebrow: 'Implementation scope',
        title: 'Suggested first Saudi rollout',
        intro:
          'Ship a narrow V1 with one team or queue, then expand to Arabic UI/content and adjacent AR workflows.',
        cards: [
          {
            icon: 'solar:clipboard-list-linear',
            title: 'One KSA collections queue',
            text: 'Implement one ranked queue and status taxonomy for one operating team.'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'One approval model',
            text: 'Define what collectors can close directly and which outcomes need manager approval.'
          },
          {
            icon: 'solar:link-circle-linear',
            title: 'One data sync path',
            text: 'Start with read visibility and controlled write-back rules to the system of record.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'Can Saudi AR workflows support Arabic and English?',
        a: 'Yes. The first implementation can be English-first while labels, content fields, and route structures stay ready for Arabic rollout.'
      },
      {
        q: 'Does Binizam handle ZATCA compliance directly?',
        a: 'Binizam should not be positioned as the statutory invoicing engine. The workflow layer can route invoice/dispute context, but ZATCA-related posting and system-of-record logic should remain in approved ERP or KSA systems.'
      },
      {
        q: 'Can rollout begin with one Saudi entity or team?',
        a: 'Yes. Start with one entity, one collector team, or one exception queue, then expand after the first workflow is stable.'
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
      'A practical guide to accounts receivable automation: what it means, which workflows to automate first, ERP boundaries, risks, and GCC implementation considerations.',
    eyebrow: 'Guides / Fundamentals',
    h1: 'What is accounts receivable automation?',
    lead:
      'A plain-English explanation for finance teams evaluating AR workflow automation without losing ERP control or auditability.',
    directAnswer:
      'Accounts receivable automation is the use of workflow software, integrations, and approval logic to manage invoice follow-up, payment matching, dispute handling, and reconciliation with less manual coordination while keeping the ERP as the financial system of record.',
    quickLinks: guideQuickLinks,
    articleSummary:
      'This guide defines AR automation, explains the workflow states that matter, and shows where to start if your team still relies on spreadsheets and inboxes for collections and reconciliation work.',
    readTime: '6 min read',
    visual: {
      caption: 'AR automation concept map',
      cards: [
        {
          icon: 'solar:clipboard-list-linear',
          title: 'Manual AR process',
          text: 'Spreadsheets, inbox follow-up, and unclear ownership.',
          label: 'Before'
        },
        {
          icon: 'solar:git-branch-linear',
          title: 'Workflow automation layer',
          text: 'Queues, rules, approvals, and exception routing.',
          label: 'During'
        },
        {
          icon: 'solar:shield-check-linear',
          title: 'ERP-controlled outcomes',
          text: 'Traceable updates and system-of-record boundaries remain explicit.',
          label: 'After'
        }
      ]
    },
    sections: [
      {
        id: 'how-it-works',
        eyebrow: 'How it works',
        title: 'The workflow states AR automation should cover',
        intro:
          'The article body should explain AR automation as a set of concrete operating states rather than vague “AI transformation” claims.',
        cards: [
          {
            icon: 'solar:users-group-two-rounded-linear',
            title: 'Collections follow-up',
            text: 'Rank customers, assign next actions, track reminders, and capture outcomes.'
          },
          {
            icon: 'solar:scanner-linear',
            title: 'Cash application and matching',
            text: 'Match incoming payments to invoices and route uncertain cases to a review queue.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Disputes, PTP, and manager approvals',
            text: 'Separate promises from disputes and keep sensitive resolutions reviewable.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Reconciliation and exception closure',
            text: 'Detect “expected vs actual” breaks and assign an owner until the issue is resolved.'
          }
        ]
      },
      {
        id: 'what-to-implement-first',
        eyebrow: 'What to implement first',
        title: 'A practical AR automation starting sequence',
        intro:
          'This section should link back to the relevant solution pages so the guide supports commercial SEO as well as informational search.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Start with collector worklists',
            text: 'If overdue coverage is weak, launch one queue and one status taxonomy first.'
          },
          {
            icon: 'solar:inbox-archive-linear',
            title: 'Add cash-app exception routing',
            text: 'If unapplied cash and short pays create cleanup, move no-match items into owned queues.'
          },
          {
            icon: 'solar:shield-keyhole-linear',
            title: 'Protect approval boundaries',
            text: 'Do not automate sensitive write-offs or customer-impacting outcomes without a review layer.'
          }
        ],
        note:
          'A good AR automation implementation is usually narrow, observable, and explainable in the first release. Broad AI claims are less useful than one stable workflow and one trusted exception loop.'
      }
    ],
    faqs: [
      {
        q: 'What is the simplest definition of accounts receivable automation?',
        a: 'It is a controlled workflow layer that reduces manual AR follow-up, payment matching, dispute routing, and reconciliation work while preserving ERP ownership and auditability.'
      },
      {
        q: 'What should not be automated first?',
        a: 'Avoid automating high-risk write-offs, ambiguous customer-impacting actions, or low-confidence payment matches before approval controls and exception queues are in place.'
      },
      {
        q: 'Is AI required for AR automation?',
        a: 'No. Many teams should start with rules, queues, and approvals first. AI can be added later only where outputs are reviewable and monitored.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Accounts Receivable Automation',
        href: '/solutions/accounts-receivable-automation/',
        description: 'Move from guide concepts to the main commercial AR workflow page.',
        icon: 'solar:chart-2-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Cash Application Automation',
        href: '/solutions/cash-application-automation/',
        description: 'See how no-match payment cases can be routed instead of manually parked.',
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
      'A practical GCC-focused guide to reducing DSO with collector worklists, dispute routing, escalation controls, reconciliation visibility, and AR automation.',
    eyebrow: 'Guides / GCC collections',
    h1: 'How to reduce DSO in GCC B2B collections.',
    lead:
      'A workflow-first playbook for improving overdue coverage, dispute resolution speed, and exception visibility in GCC AR operations.',
    directAnswer:
      'To reduce DSO in GCC B2B collections, make overdue accounts visible in a ranked owner-based queue, separate PTP from true disputes, escalate stale actions quickly, and reconcile payment exceptions continuously instead of waiting for month-end clean-up.',
    quickLinks: guideQuickLinks,
    articleSummary:
      'This guide focuses on operational changes that improve follow-through and exception resolution for GCC finance teams, without relying on unproven AI claims.',
    readTime: '7 min read',
    visual: {
      caption: 'DSO reduction levers',
      cards: [
        {
          icon: 'solar:sort-from-bottom-to-top-linear',
          title: 'Rank overdue accounts',
          text: 'Prioritize by aging, amount, risk, and SLA.',
          label: 'Queue'
        },
        {
          icon: 'solar:alarm-linear',
          title: 'Escalate stale actions',
          text: 'Trigger follow-ups and manager review before accounts drift.',
          label: 'Cadence'
        },
        {
          icon: 'solar:scale-linear',
          title: 'Resolve exceptions fast',
          text: 'Shorten dispute and reconciliation cycles with owner-based queues.',
          label: 'Close'
        }
      ]
    },
    sections: [
      {
        id: 'how-it-works',
        eyebrow: 'How it works',
        title: 'Operational causes of DSO that automation can fix',
        intro:
          'The content should be practical, GCC-aware, and tied to measurable workflow behavior rather than generic finance theory.',
        cards: [
          {
            icon: 'solar:clipboard-list-linear',
            title: 'Collectors do not have one ranked queue',
            text: 'When priorities are rebuilt manually, high-risk accounts and overdue follow-ups are easy to miss.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Disputes stall without ownership',
            text: 'A disputed invoice needs a reason code, an owner, evidence, and a resolution deadline.'
          },
          {
            icon: 'solar:inbox-archive-linear',
            title: 'Payment exceptions are cleaned up too late',
            text: 'Unapplied cash, short pays, and no-match items should become live work items, not month-end surprises.'
          }
        ]
      },
      {
        id: 'what-to-implement-first',
        eyebrow: 'What to implement first',
        title: 'A DSO-focused rollout sequence',
        intro:
          'These sections should give enough detail for AI answer engines to extract a useful operating playbook and enough links for commercial conversion.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Launch collector worklists first',
            text: 'Give each customer or invoice one owner, one status, one due date, and one next action.'
          },
          {
            icon: 'solar:shield-warning-linear',
            title: 'Create a manager escalation queue',
            text: 'Route stale PTPs, risky accounts, and approval-required outcomes before they age silently.'
          },
          {
            icon: 'solar:chart-square-linear',
            title: 'Track exception aging and closure',
            text: 'Measure dispute cycle time, queue aging, and owner coverage alongside DSO.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'What reduces DSO fastest operationally?',
        a: 'For many teams, the fastest operational improvement comes from a ranked collector queue, clear ownership, and fast dispute/escalation routing rather than broad process redesign.'
      },
      {
        q: 'Which AR metrics should be tracked alongside DSO?',
        a: 'Track overdue action coverage, stale queue items, broken PTPs, dispute cycle time, unapplied cash aging, and exception volume by reason code.'
      },
      {
        q: 'Where does automation help most in GCC collections?',
        a: 'Automation is usually most valuable in follow-up cadence, queue prioritization, bilingual workflow routing, dispute handoffs, and reconciliation exception visibility.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Collector Worklists',
        href: '/solutions/collector-worklists/',
        description: 'Turn DSO goals into one ranked queue and one owner-based operating model.',
        icon: 'solar:sort-from-bottom-to-top-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'AR Collections Automation',
        href: '/solutions/ar-collections-automation/',
        description: 'PTP tracking, follow-up cadences, disputes, and manager exceptions.',
        icon: 'solar:users-group-two-rounded-linear'
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
      'Cash application explained for AR teams: what payment matching means, why remittance data causes manual work, and how exception workflows reduce unapplied cash.',
    eyebrow: 'Guides / Cash application',
    h1: 'Cash application explained.',
    lead:
      'A practical guide to payment matching, remittance exceptions, short pays, and ERP handoff boundaries.',
    directAnswer:
      'Cash application is the AR process of matching incoming customer payments to open invoices and customer accounts. Automation helps when payment and remittance data can be normalized, but partial payments and unclear references should still be routed into a review workflow.',
    quickLinks: guideQuickLinks,
    articleSummary:
      'Use this guide to explain cash application clearly on the site, then route readers to the commercial cash-application and reconciliation solution pages.',
    readTime: '5 min read',
    visual: {
      caption: 'Payment matching workflow',
      cards: [
        {
          icon: 'solar:banknote-linear',
          title: 'Payment received',
          text: 'Bank line, transfer, or payment event arrives.',
          label: '1'
        },
        {
          icon: 'solar:scanner-linear',
          title: 'Match to invoice',
          text: 'Use references, amount, customer mapping, and timing logic.',
          label: '2'
        },
        {
          icon: 'solar:shield-warning-linear',
          title: 'Route exceptions',
          text: 'Short pay, no reference, or duplicate cases move to review.',
          label: '3'
        }
      ]
    },
    sections: [
      {
        id: 'how-it-works',
        eyebrow: 'How it works',
        title: 'Why cash application is often still manual',
        intro:
          'The article should answer search intent directly and make exception handling a first-class part of the workflow story.',
        cards: [
          {
            icon: 'solar:file-text-linear',
            title: 'Remittance arrives separately from payment',
            text: 'Payment confirmation and invoice references may come through emails, attachments, portals, or bank formats.'
          },
          {
            icon: 'solar:scale-linear',
            title: 'Partial payments need judgment',
            text: 'Short pays, deductions, and tolerance cases often need a reason-coded review path.'
          },
          {
            icon: 'solar:user-id-linear',
            title: 'Customer mapping is imperfect',
            text: 'Names, references, and invoice IDs can be inconsistent across customer and banking systems.'
          }
        ]
      },
      {
        id: 'what-to-implement-first',
        eyebrow: 'What to implement first',
        title: 'Where to start with cash application automation',
        intro:
          'The content scaffold should stay specific enough that future examples can be added without changing the template.',
        cards: [
          {
            icon: 'solar:file-check-linear',
            title: 'Standardize one payment source',
            text: 'Start with one bank file, one channel, or one customer segment where data quality is reasonably consistent.'
          },
          {
            icon: 'solar:tuning-linear',
            title: 'Define exact-match vs review-required rules',
            text: 'Keep low-confidence and partial-match cases in an exception queue until operators trust the workflow.'
          },
          {
            icon: 'solar:cloud-upload-linear',
            title: 'Make ERP handoff explicit',
            text: 'Document which outcomes can be posted automatically and which require approval or manual review.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'Why is cash application hard to automate?',
        a: 'Because remittance data is often incomplete, customer references are inconsistent, and partial payments or deductions require review before posting.'
      },
      {
        q: 'What is unapplied cash?',
        a: 'Unapplied cash is a received payment that has not yet been matched to the correct invoice or customer account and therefore remains unresolved operationally.'
      },
      {
        q: 'Should all cash application exceptions be posted automatically?',
        a: 'No. Low-confidence matches, short pays, duplicates, and missing-reference cases should usually be routed to a review queue first.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'Cash Application Automation',
        href: '/solutions/cash-application-automation/',
        description: 'Turn this guide into an implementation-ready matching and exception workflow.',
        icon: 'solar:scanner-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Payment Reconciliation Automation',
        href: '/solutions/payment-reconciliation-automation/',
        description: 'Handle mismatches and exception closure after matching fails or needs review.',
        icon: 'solar:scale-linear'
      },
      {
        eyebrow: 'Integration',
        label: 'APIs & Bank Files',
        href: '/integrations/api-bank-files/',
        description: 'How bank feeds, files, and APIs can feed the cash application workflow.',
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
      'AR collections workflow best practices: queue design, follow-up cadence, promise-to-pay tracking, disputes, manager escalation, auditability, and reporting.',
    eyebrow: 'Guides / Collections workflow',
    h1: 'AR collections workflow best practices.',
    lead:
      'A practical operating model for structuring collector queues, PTP/dispute states, manager escalation, and audit-ready reporting.',
    directAnswer:
      'A good AR collections workflow gives each overdue customer or invoice one owner, one status, one due next action, one escalation path, and one auditable record of PTP, dispute, and resolution decisions.',
    quickLinks: guideQuickLinks,
    articleSummary:
      'This guide is designed to become a useful AI-citable explanation of collections workflow structure while sending commercial intent to the AR collections and collector worklist pages.',
    readTime: '6 min read',
    visual: {
      caption: 'Collections workflow state map',
      cards: [
        {
          icon: 'solar:clipboard-list-linear',
          title: 'Open account queue',
          text: 'Rank by aging, balance, SLA, segment, and owner.',
          label: 'Queue'
        },
        {
          icon: 'solar:hand-shake-linear',
          title: 'PTP or dispute state',
          text: 'Capture promise dates, reason codes, and evidence needs.',
          label: 'State'
        },
        {
          icon: 'solar:shield-keyhole-linear',
          title: 'Escalation + approval',
          text: 'Route stalled or sensitive outcomes to manager review.',
          label: 'Review'
        }
      ]
    },
    sections: [
      {
        id: 'how-it-works',
        eyebrow: 'How it works',
        title: 'Workflow elements every collections process should define',
        intro:
          'These sections are intentionally concrete so the content can rank for workflow queries and be summarized by LLMs without ambiguity.',
        cards: [
          {
            icon: 'solar:sort-from-bottom-to-top-linear',
            title: 'Queue ranking and segmentation',
            text: 'Decide how aging, amount, SLA, customer tier, and dispute/PTP state should affect priority.'
          },
          {
            icon: 'solar:alarm-linear',
            title: 'Follow-up cadence and next action',
            text: 'Define when to send reminders, when to call, and when to escalate stale items.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'PTP and dispute state model',
            text: 'Track promise dates, broken promises, reason codes, evidence, and current owner.'
          },
          {
            icon: 'solar:document-text-linear',
            title: 'Audit trail and manager reporting',
            text: 'Record state changes, approvals, overrides, queue aging, and exception closure metrics.'
          }
        ]
      },
      {
        id: 'what-to-implement-first',
        eyebrow: 'What to implement first',
        title: 'A safe collections workflow rollout sequence',
        intro:
          'Keep the first implementation simple enough that collectors trust the queue and managers trust the reporting.',
        cards: [
          {
            icon: 'solar:list-check-minimalistic-linear',
            title: 'Launch one collector queue',
            text: 'Use one owner model and one small set of statuses before introducing richer automation.'
          },
          {
            icon: 'solar:hand-shake-linear',
            title: 'Separate PTP from dispute',
            text: 'This distinction is one of the easiest ways to improve operational clarity and reporting quality.'
          },
          {
            icon: 'solar:shield-warning-linear',
            title: 'Add manager review for sensitive outcomes',
            text: 'Protect adjustments, write-offs, and unusual customer handling with explicit approval paths.'
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'How should collectors prioritize accounts?',
        a: 'Use a mix of aging, amount, SLA, customer segment, dispute/PTP status, and business-specific risk rules, but keep the ranking explainable.'
      },
      {
        q: 'What states should an AR collections workflow track?',
        a: 'At minimum: open follow-up, contact attempted, PTP, broken PTP, disputed, awaiting internal review, escalated, and resolved/closed with reason.'
      },
      {
        q: 'How do teams avoid spreadsheet drift?',
        a: 'Move ownership, status changes, due dates, and exception notes into one shared workflow layer with controlled transitions and reporting based on actual events.'
      }
    ],
    relatedLinks: [
      {
        eyebrow: 'Solution',
        label: 'AR Collections Automation',
        href: '/solutions/ar-collections-automation/',
        description: 'Implement the queue, follow-up, PTP, and dispute model described in this guide.',
        icon: 'solar:users-group-two-rounded-linear'
      },
      {
        eyebrow: 'Solution',
        label: 'Collector Worklists',
        href: '/solutions/collector-worklists/',
        description: 'Build the daily operating queue that collectors and managers use.',
        icon: 'solar:list-check-minimalistic-linear'
      },
      {
        eyebrow: 'Guide',
        label: 'How to reduce DSO in GCC',
        href: '/guides/reduce-dso-gcc/',
        description: 'Connect queue discipline to DSO improvement and stale-action reduction.',
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
