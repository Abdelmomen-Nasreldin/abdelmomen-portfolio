import { MentorshipItem } from '../models/mentorship.model';

export const MENTORSHIP_ITEMS: readonly MentorshipItem[] = [
  {
    title: 'Angular Guidance',
    description:
      'Helping junior developers build a strong foundation in Angular, from component architecture to state management with signals and RxJS.',
    icon: 'code',
  },
  {
    title: 'Code Reviews',
    description:
      'Conducting thorough code reviews focused on clean architecture, TypeScript best practices, and maintainable, production-ready code.',
    icon: 'review',
  },
  {
    title: 'Learning Roadmaps',
    description:
      'Creating structured learning paths tailored to individual goals, covering frontend fundamentals through advanced enterprise patterns.',
    icon: 'roadmap',
  },
  {
    title: 'Career Development',
    description:
      'Sharing insights on growing as a frontend engineer, navigating the industry, and building a strong technical portfolio.',
    icon: 'career',
  },
] as const;
