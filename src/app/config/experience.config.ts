import { Experience } from '../models/experience.model';

export const EXPERIENCES: readonly Experience[] = [
  {
    company: 'Vodafone Egypt',
    role: 'Frontend Developer',
    period: 'Apr 2024 \u2013 Present',
    type: 'work',
    highlights: [
      'Developing and maintaining Ana Vodafone self-service portals serving millions of users',
      'Engineering reusable Angular component libraries consumed across multiple product teams',
      'Driving performance optimization initiatives reducing page load times significantly',
      'Contributing to AI-powered personalization features for enhanced user engagement',
      'Collaborating in Agile squads with cross-functional teams across multiple markets',
    ],
  },
  {
    company: 'NTI (National Telecommunication Institute)',
    role: 'Angular Instructor',
    period: '2025',
    type: 'teaching',
    highlights: [
      'Designed and delivered a comprehensive 60-hour Angular curriculum',
      'Taught modern Angular patterns including Standalone Components and Signals',
      'Covered advanced RxJS patterns for real-world application development',
      'Mentored students through hands-on projects and code reviews',
      'Provided career guidance and learning roadmaps for frontend development',
    ],
  },
  {
    company: 'Hadaf Solutions',
    role: 'Frontend Developer',
    period: '2023 \u2013 2024',
    type: 'work',
    highlights: [
      'Led the migration of legacy ERP systems to modern Angular web applications',
      'Established component architecture patterns adopted across the engineering team',
      'Implemented complex form workflows for enterprise resource planning modules',
      'Improved application performance through lazy loading and code splitting strategies',
    ],
  },
  {
    company: 'Vijua',
    role: 'Frontend Developer',
    period: '2022 \u2013 2023',
    type: 'work',
    highlights: [
      'Built interactive educational platform features using Angular',
      'Developed responsive, accessible interfaces for diverse student populations',
      'Collaborated with design and backend teams to deliver engaging learning experiences',
      'Implemented real-time content update mechanisms for live classroom sessions',
    ],
  },
] as const;
