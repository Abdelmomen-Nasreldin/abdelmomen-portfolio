import { Experience } from '../models/experience.model';
export const EXPERIENCES: readonly Experience[] = [
  {
    company: 'Vodafone Egypt',
    role: 'Frontend Developer',
    period: 'Apr 2024 – Present',
    type: 'work',
    highlights: [
      'Develop Angular self-service journeys and reusable interface components for Ana Vodafone.',
      'Collaborate with design, product, and backend colleagues to turn campaign requirements into customer experiences.',
    ],
  },
  {
    company: 'NTI (National Telecommunication Institute)',
    role: 'Angular Instructor',
    period: 'Jul – Aug 2025',
    type: 'teaching',
    highlights: [
      'Delivered NTI’s 60-hour Angular program, covering TypeScript, standalone components, RxJS, and state management.',
      'Guided students through practical projects, debugging, and detailed code reviews.',
    ],
  },
  {
    company: 'Hadaf Solutions',
    role: 'Frontend Developer',
    period: 'Oct 2023 – Mar 2024',
    type: 'work',
    highlights: [
      'Contributed to the migration of a desktop ERP to an Angular web application.',
      'Built enterprise form workflows and responsive interfaces, integrating them with backend services.',
    ],
  },
  {
    company: 'Vijua',
    role: 'Frontend Developer',
    period: 'Apr 2022 – Sep 2023',
    type: 'work',
    highlights: [
      'Built digital-content interfaces for the Kotobee platform using HTML, CSS, and JavaScript.',
      'Worked remotely with designers and developers on responsive, cross-browser experiences.',
    ],
  },
];
