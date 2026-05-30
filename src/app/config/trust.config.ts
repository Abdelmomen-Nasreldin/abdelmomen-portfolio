import { TrustStat } from '../models/trust-stat.model';

export const TRUST_STATS: readonly TrustStat[] = [
  {
    value: '4+',
    label: 'Years Experience',
    description: 'Building production Angular applications',
  },
  {
    value: 'Vodafone',
    label: 'Egypt',
    description: 'Enterprise-scale frontend engineering',
  },
  {
    value: 'Angular',
    label: 'Instructor at NTI',
    description: '60-hour curriculum design & delivery',
  },
  {
    value: 'Mentoring',
    label: 'Junior Developers',
    description: 'Code reviews, roadmaps & guidance',
  },
] as const;
