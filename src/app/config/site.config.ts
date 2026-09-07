import { SocialLink } from '../models/social-link.model';

export const SITE_CONFIG = {
  name: 'Abdelmomen Nasreldin',
  title: 'Frontend Engineer | Angular & TypeScript',
  headline: 'From customer journeys to the tools a business runs on.',
  description:
    'Frontend engineer at Vodafone Egypt. I build Angular customer journeys and independently develop offline business applications. Previously an Angular instructor at NTI.',
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
