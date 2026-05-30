import { SkillCategory } from '../models/skill-category.model';

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'HTML',
      'SCSS',
      'TailwindCSS',
    ],
  },
  {
    title: 'Architecture & Performance',
    skills: [
      'Standalone Components',
      'State Management',
      'Signals',
      'Lazy Loading',
      'Frontend Architecture',
      'Performance Optimization',
      'Reusable Components',
    ],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Engineering Practices',
    skills: [
      'Agile',
      'Git',
      'Code Reviews',
      'Responsive Design',
      'Cross-browser Compatibility',
    ],
  },
] as const;
