import { SkillCategory } from '../models/skill-category.model';
export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: 'Angular interfaces',
    skills: ['Angular', 'TypeScript', 'RxJS', 'Signals'],
    description: 'Customer journeys, reusable components, forms, and application state.',
  },
  {
    title: 'UI delivery',
    skills: ['HTML & CSS', 'Responsive design', 'Tailwind CSS', 'Arabic / RTL'],
    description: 'Interfaces that work across screen sizes, languages, and user roles.',
  },
  {
    title: 'Supporting product work',
    skills: ['Express', 'SQLite', 'Tauri', 'REST APIs'],
    description: 'Local services and desktop integration for my independent business applications.',
  },
  {
    title: 'Working practices',
    skills: ['Git', 'Code reviews', 'Testing', 'Agile delivery'],
    description:
      'I use AI-assisted tools for exploration, implementation, and review. Architecture decisions, validation, and final accountability remain mine.',
  },
];
