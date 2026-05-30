import { NavItem } from '../models/nav-item.model';

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'About', fragment: 'about' },
  { label: 'Expertise', fragment: 'expertise' },
  { label: 'Projects', fragment: 'projects' },
  { label: 'Experience', fragment: 'experience' },
  { label: 'Mentorship', fragment: 'mentorship' },
  { label: 'Contact', fragment: 'contact' },
] as const;
