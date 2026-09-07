import { Project } from '../models/project.model';
export const FEATURED_PROJECTS: readonly Project[] = [
  {
    id: 'cafe-manager',
    title: 'Café Manager',
    subtitle: 'An offline Windows point of sale for an independent café',
    overview:
      'A desktop application that brings ordering, customer credit, inventory, and reporting into one local workspace. Built around the daily work of an owner and a cashier.',
    problem:
      'A café needs to keep serving customers when the internet is unavailable. The cashier needs a clear way to assemble orders and record payment, while the owner needs to maintain the menu and understand the business.',
    role: 'Independent product development',
    status: 'Business application',
    context: 'Single café · Windows desktop · Local SQLite storage',
    stack: ['Angular', 'TypeScript', 'Tauri', 'Rust', 'SQLite'],
    decisions: [
      {
        title: 'Keep the order journey in one workspace',
        approach:
          'The interface brings product selection and the current order together. Separate owner and cashier views keep administration away from the main service workflow.',
        tradeoff:
          'A focused single-device workflow keeps the interface manageable, but does not provide multi-till synchronization or online ordering.',
      },
      {
        title: 'Use Angular in a native desktop host',
        approach:
          'Angular supplies the interface and state management; Tauri connects it to local storage and desktop capabilities. Orders and menu data live in SQLite on the machine.',
        tradeoff:
          'Working without a cloud service makes local backup, recovery, and Windows-specific testing part of operating the product.',
      },
    ],
    outcomes: [
      'A connected workflow for creating orders, recording settlement, and preparing receipts.',
      'Owner tools for menu maintenance, recipes, ingredient stock, customer credit, and reports.',
      'A desktop delivery model that does not require a cloud API for daily operation.',
    ],
    reflection:
      'The next priority is making exceptional situations as clear as the normal sale: correcting a mistake, handling unpaid work, and explaining stock changes.',
    attribution:
      'My independently developed application for an independent café. Demonstration captures use fictional data.',
    images: [
      {
        src: '/assets/projects/cafe-order.webp',
        previewSrc: '/assets/projects/cafe-order-card.webp',
        width: 1536,
        height: 816,
        alt: 'Café point of sale with a product menu and a two-item demonstration cart',
        caption:
          'The ordering workspace keeps product selection, quantities, and the running total together. Fictional menu and demonstration order.',
      },
      {
        src: '/assets/projects/cafe-orders.webp',
        width: 1536,
        height: 816,
        alt: 'Café order list showing two fictional pending orders and status filters',
        caption:
          'Order tracking separates pending, paid, postponed, and cancelled work, with date and shift filters. All customers and transactions shown are fictional.',
      },
    ],
    evidence: [],
  },
  {
    id: 'dental-clinic-management',
    title: 'Dental Clinic Management System',
    subtitle: 'From appointment scheduling to reception checkout',
    overview:
      'A bilingual application for a single clinic, connecting appointments, treatment records, and front-desk workflows. Different roles see the information relevant to their work.',
    problem:
      'Scheduling, treatment, and payment happen at different points in a clinic visit. The interface needs to connect those steps without making reception staff work through private clinical information.',
    role: 'Independent product development',
    status: 'Actively developed',
    context: 'Single clinic · Windows / private LAN · Arabic and English',
    stack: ['Angular', 'TypeScript', 'Express', 'SQLite', 'Socket.IO'],
    decisions: [
      {
        title: 'Design around the handoff to reception',
        approach:
          'The clinical workflow and reception checkout are separate views of the same visit. Reception receives operational information for the next step, while treatment details stay in the clinical workflow.',
        tradeoff:
          'Separate role-specific views require deliberate API payloads and coordinated status updates, rather than simply hiding fields in the browser.',
      },
      {
        title: 'Treat Arabic and English as complete interfaces',
        approach:
          'The Angular interface supports both languages and right-to-left layouts, including scheduling, patient workflows, and printing. A local Express service coordinates data shared by clinic users.',
        tradeoff:
          'Each language and role adds a meaningful combination to test. Local operation also means deployment and recovery need attention alongside the interface.',
      },
    ],
    outcomes: [
      'A linked appointment, treatment, and checkout workflow for clinic staff.',
      'Role-specific screens for Admin, Dentist, and Reception, with Arabic and English interfaces.',
      'Treatment planning, visit records, account review, and local reporting in one application.',
    ],
    reflection:
      'This product is actively developed. The focus is on validating complete staff journeys and difficult handoffs before adding multi-clinic or cloud-sync scope.',
    attribution:
      'My independently developed clinic application. Demonstration captures contain fictional patients and records.',
    images: [
      {
        src: '/assets/projects/dental-appointments.webp',
        previewSrc: '/assets/projects/dental-appointments-card.webp',
        width: 1265,
        height: 712,
        alt: 'Arabic clinic schedule showing appointments for four fictional patients',
        caption:
          'The Arabic scheduling view supports the clinic’s daily appointment workflow in a right-to-left layout. All patients and appointments shown are fictional.',
      },
      {
        src: '/assets/projects/dental-chart.webp',
        width: 1265,
        height: 712,
        alt: 'English patient record with dental chart and clinical section tabs for Nour Demo',
        caption:
          'The English patient workspace groups visits, charting, treatment plans, prescriptions, and billing. This is a fictional patient record, shown before clinical findings are entered.',
      },
    ],
    evidence: [],
  },
];
