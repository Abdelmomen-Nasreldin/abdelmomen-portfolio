import { Project } from '../models/project.model';

export const FEATURED_PROJECTS: readonly Project[] = [
  {
    id: 'cafe-pos',
    title: 'Cafe POS System',
    subtitle: 'Offline-First Point of Sale',
    overview:
      'A robust point-of-sale system designed for cafes and restaurants, built with an offline-first architecture to ensure uninterrupted operations regardless of network conditions.',
    problem:
      'Traditional POS systems fail when internet connectivity is unreliable, leading to lost transactions and poor customer experience in high-traffic environments.',
    challenges: [
      'Implementing reliable offline data persistence with conflict resolution',
      'Synchronizing local IndexedDB data with a remote backend upon reconnection',
      'Maintaining responsive UI performance with large local datasets',
      'Handling edge cases in offline-to-online state transitions',
    ],
    architectureDecisions: [
      'Chose Dexie.js for IndexedDB abstraction with structured schema versioning',
      'Implemented a queue-based sync strategy for deferred server writes',
      'Used Angular signals for reactive local state without RxJS overhead',
      'Adopted a service-worker-first caching strategy for static assets',
    ],
    stack: ['Angular', 'TypeScript', 'Dexie.js', 'IndexedDB', 'TailwindCSS', 'Node.js'],
    keyFeatures: [
      'Full offline operation with automatic sync',
      'Real-time order management dashboard',
      'Inventory tracking with low-stock alerts',
      'Receipt generation and print support',
      'Multi-terminal support',
    ],
    engineeringHighlights: [
      'Zero-downtime offline-to-online transitions',
      'Conflict-free replicated data handling',
      'Sub-100ms UI interactions on mid-range devices',
      'Structured IndexedDB schema migrations',
    ],
    githubUrl: 'https://github.com/YOUR_GITHUB/cafe-pos', // TODO: Replace
  },
  {
    id: 'course-platform',
    title: 'Course Platform',
    subtitle: 'Role-Based Learning Management',
    overview:
      'An enterprise-grade learning management system with role-based access for administrators, instructors, and students, supporting course creation, enrollment, and progress tracking.',
    problem:
      'Educational institutions needed a scalable platform that enforces strict access control across multiple user roles while remaining intuitive for non-technical users.',
    challenges: [
      'Designing a flexible role-based authorization system with granular permissions',
      'Building a scalable course content management architecture',
      'Implementing real-time progress tracking across distributed user sessions',
      'Ensuring data consistency across admin, instructor, and student views',
    ],
    architectureDecisions: [
      'Implemented route guards with role-based lazy-loaded feature modules',
      'Used a centralized auth service with JWT token management and refresh',
      'Adopted a layered service architecture separating API, state, and UI concerns',
      'Applied Angular standalone components for better tree-shaking',
    ],
    stack: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    keyFeatures: [
      'Admin dashboard with analytics and user management',
      'Instructor course builder with multimedia support',
      'Student progress tracking and certificate generation',
      'Role-based navigation and feature gating',
      'RESTful API integration with pagination',
    ],
    engineeringHighlights: [
      'Granular route-level authorization with guard composition',
      'Lazy-loaded feature modules reducing initial bundle by 40%',
      'Reusable form components with dynamic validation',
      'Comprehensive API error handling with user-facing feedback',
    ],
    githubUrl: 'https://github.com/YOUR_GITHUB/course-platform', // TODO: Replace
  },
  {
    id: 'tourism-platform',
    title: 'Tourism Platform',
    subtitle: 'SEO-Optimized Travel Application',
    overview:
      'A high-performance tourism platform built with Angular SSR for optimal search engine visibility, featuring dynamic content rendering, interactive booking flows, and responsive design.',
    problem:
      'Tourism businesses struggled with poor search rankings due to client-side rendering, and existing platforms offered subpar mobile experiences that hurt conversion rates.',
    challenges: [
      'Achieving fast Time to First Contentful Paint with server-side rendering',
      'Managing complex dynamic routes for destinations, tours, and bookings',
      'Optimizing image-heavy pages for performance across devices',
      'Implementing smooth booking flows with multi-step form validation',
    ],
    architectureDecisions: [
      'Adopted Angular Universal (SSR) for search engine indexing and performance',
      'Implemented dynamic route generation from CMS data',
      'Used NgOptimizedImage for automatic image optimization and lazy loading',
      'Applied transfer state to prevent duplicate API calls during hydration',
    ],
    stack: ['Angular', 'TypeScript', 'Angular SSR', 'TailwindCSS', 'REST APIs'],
    keyFeatures: [
      'Server-side rendered pages for SEO',
      'Interactive destination explorer with filters',
      'Multi-step booking flow with validation',
      'Responsive design optimized for mobile conversion',
      'Dynamic meta tags for social sharing',
    ],
    engineeringHighlights: [
      'Lighthouse performance score above 90',
      'SEO-optimized dynamic meta tag generation',
      'Efficient hydration with transfer state',
      'Image-heavy pages loading under 2 seconds on 3G',
    ],
    liveDemoUrl: 'https://your-tourism-demo.com', // TODO: Replace
    githubUrl: 'https://github.com/YOUR_GITHUB/tourism-platform', // TODO: Replace
  },
] as const;
