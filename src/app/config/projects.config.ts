import { Project } from '../models/project.model';

export const FEATURED_PROJECTS: readonly Project[] = [
  {
    id: 'cafe-manager',
    title: 'Cafe Manager',
    subtitle: 'Offline Windows Café POS & Operations',
    overview:
      'A desktop point-of-sale and café operations system for Moods Cafe, built for reliable single-machine operation without a cloud service or web API.',
    problem:
      'A café needs to create and settle orders, manage its menu and inventory, print receipts, and protect operational records even when the internet is unavailable.',
    challenges: [
      'Keeping order, payment, stock, and reporting semantics consistent in a local-first desktop application',
      'Making sensitive order and inventory changes safe to retry without duplicating operational effects',
      'Supporting owner and cashier workflows without exposing owner-only administration and recovery actions',
      'Protecting upgrade, backup, restore, and device-licensing workflows for a real café deployment',
    ],
    architectureDecisions: [
      'Built an Angular 21 webview inside a Tauri 2 Windows desktop host',
      'Used a local SQLite database as the operational source of truth, with no cloud backend or network API',
      'Moved critical order, inventory, and recipe operations behind native atomic SQLite commands',
      'Separated owner and cashier access while keeping licensing, backup, path, and printing capabilities narrowly scoped',
    ],
    stack: ['Angular 21', 'TypeScript', 'Tauri 2', 'Rust', 'SQLite', 'Tailwind CSS'],
    keyFeatures: [
      'Order creation, settlement, and receipt-printing workflows',
      'Menu, customer, recipe, and ingredient-based inventory management',
      'Owner reporting, data-health, backup, restore, and device-licensing workflows',
      'Operational inventory visibility for both owner and cashier roles',
      'Offline-first Windows desktop deployment',
    ],
    engineeringHighlights: [
      'Atomic, auditable order transitions with idempotent operation handling',
      'Financial reporting based on completed order operations rather than mutable order status alone',
      'Atomic product-and-recipe saves and ingredient movement handling',
      'Versioned upgrade and recovery work designed to preserve existing café data',
    ],
  },
  {
    id: 'dental-clinic-management',
    title: 'Dental Clinic Management System',
    subtitle: 'Offline Single-Clinic Workflow — Actively Developed',
    overview:
      'A bilingual Angular, Express, and SQLite application for a single dental clinic, designed for local Windows and private-LAN operation with role-specific clinical and reception workflows.',
    problem:
      'A clinic needs a dependable daily flow from scheduling and treatment through safe front-desk checkout, while preserving patient privacy, financial integrity, and auditability.',
    challenges: [
      'Connecting clinical treatment completion with Reception checkout without exposing clinical details',
      'Keeping appointment, patient, visit, treatment, billing, and audit effects consistent under concurrent use',
      'Enforcing different operational access for Admin, Dentist, and Reception roles',
      'Evolving an offline SQLite product without fabricating or silently rewriting historical clinic records',
    ],
    architectureDecisions: [
      'Kept Express and SQLite server-authoritative for workflow transitions, validation, and financial rules',
      'Used role-shaped HTTP and Socket.IO payloads to preserve Reception privacy boundaries',
      'Protected operational commands with version checks and idempotency keys',
      'Kept the product single-clinic, offline-capable, bilingual, and free of cloud-sync or multi-clinic scope',
    ],
    stack: ['Angular', 'TypeScript', 'Express', 'SQLite', 'Socket.IO', 'Tailwind CSS'],
    keyFeatures: [
      'Appointment scheduling, arrival, clinical service, checkout, and release workflow',
      'Reception-safe account review, follow-up, and next-appointment actions',
      'Treatment plans, visit records, odontogram workflows, and procedure-derived billing',
      'Immutable financial events, reporting, CSV export, and bilingual print support',
      'Local backup, licensing, readiness, and privacy-safe support diagnostics',
    ],
    engineeringHighlights: [
      'Server-authoritative encounter completion commits linked clinical, billing, audit, and checkout effects atomically',
      'Checkout access exposes only operationally necessary data to Reception',
      'Version-guarded and idempotent commands prevent stale or duplicated workflow changes',
      'Arabic and English experience with an offline local Windows/private-LAN deployment model',
    ],
  },
] as const;
