import { SocialLink } from '../models/social-link.model';

export const SITE_CONFIG = {
  name: 'Abdelmomen Nasreldin',
  title: 'Frontend Software Engineer | Angular Specialist',
  headline: 'Building scalable, performant, enterprise-grade web applications.',
  description:
    'Frontend Software Engineer with 4+ years of experience building scalable Angular applications, recognized as an Angular expert and instructor.',
  email: 'abdelmomen.nasr@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1kBlHWypnZCXM0XTXVvSGRLDNWaxR78Wy/view?usp=sharing',
  siteUrl: 'https://abdelmomen.dev',
  socialImageUrl: 'https://abdelmomen.dev/assets/social-preview.png',
} as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/Abdelmomen-Nasreldin',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abdelmomen-nasreldin/',
    icon: 'linkedin',
  },
  {
    label: 'LeetCode',
    url: 'https://leetcode.com/u/Abdelmomen-Nasreldin/',
    icon: 'leetcode',
  },
] as const;
