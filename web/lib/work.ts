export type CaseStudy = {
  slug: string;
  company: string;
  role: string;
  year: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  summary: string;
  thumbnail: string;
  readTime: string;
  protected: boolean;
  sections: { id: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'angi',
    company: 'Angi',
    role: 'Senior Product Designer',
    year: '2022–2025',
    tags: ['Growth', 'Design System', 'Mobile'],
    metric: '$3M+',
    metricLabel: 'daily revenue impacted',
    summary: 'Redesigning the core marketplace experience for 280K+ daily visitors.',
    thumbnail: '/images/work/angi-thumb.jpg',
    readTime: '8 min read',
    protected: false,
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'research', label: 'Research' },
      { id: 'objectives', label: 'Objectives' },
      { id: 'solution', label: 'Solution' },
      { id: 'process', label: 'Process' },
      { id: 'outcome', label: 'Outcome' },
      { id: 'reflection', label: 'Reflection' },
    ],
  },
  {
    slug: 'homer',
    company: 'Homer',
    role: 'Product Designer',
    year: '2020–2022',
    tags: ['EdTech', 'Mobile', 'Research'],
    metric: '2M+',
    metricLabel: 'children impacted',
    summary: 'Redesigning a Sesame Street learning app for children ages 2–6.',
    thumbnail: '/images/work/homer-thumb.png',
    readTime: '10 min read',
    protected: false,
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'research', label: 'Research' },
      { id: 'objectives', label: 'Objectives' },
      { id: 'solution', label: 'Solution' },
      { id: 'process', label: 'Process' },
      { id: 'outcome', label: 'Outcome' },
      { id: 'reflection', label: 'Reflection' },
    ],
  },
  {
    slug: 'sesame',
    company: 'Learn with Sesame Street',
    role: 'Lead Product Designer',
    year: '2022',
    tags: ['EdTech', 'Mobile', 'Kids'],
    metric: 'Q4',
    metricLabel: 'on-time launch',
    summary: 'Designing a social-emotional learning app for children ages 2–6 in partnership with Sesame Workshop.',
    thumbnail: '/images/work/sesame-thumb.jpg',
    readTime: '8 min read',
    protected: false,
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'research', label: 'Research' },
      { id: 'objectives', label: 'Objectives' },
      { id: 'solution', label: 'Solution' },
      { id: 'process', label: 'Process' },
      { id: 'outcome', label: 'Outcome' },
      { id: 'reflection', label: 'Reflection' },
    ],
  },
  {
    slug: 'stackla',
    company: 'Stackla',
    role: 'Lead Visual Designer',
    year: '2016–2019',
    tags: ['Brand', 'MarTech', 'Growth'],
    metric: '31%',
    metricLabel: 'increase in demo requests',
    summary: 'Leading a full brand refresh and homepage redesign for a global MarTech platform.',
    thumbnail: '/images/work/stackla-thumb.jpg',
    readTime: '7 min read',
    protected: false,
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'research', label: 'Research' },
      { id: 'objectives', label: 'Objectives' },
      { id: 'solution', label: 'Solution' },
      { id: 'process', label: 'Process' },
      { id: 'outcome', label: 'Outcome' },
      { id: 'reflection', label: 'Reflection' },
    ],
  },
  {
    slug: 'sephora',
    company: 'Sephora',
    role: 'Lead Digital Designer',
    year: '2019–2020',
    tags: ['Retail', 'Web', 'Campaign'],
    metric: '500+',
    metricLabel: 'net new leads in first month',
    summary: 'Designing high-impact digital campaigns and microsites for one of the world\'s leading beauty brands.',
    thumbnail: '/images/work/sephora-thumb.jpg',
    readTime: '6 min read',
    protected: false,
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'research', label: 'Research' },
      { id: 'objectives', label: 'Objectives' },
      { id: 'solution', label: 'Solution' },
      { id: 'process', label: 'Process' },
      { id: 'outcome', label: 'Outcome' },
      { id: 'reflection', label: 'Reflection' },
    ],
  },
  {
    slug: 'amex',
    company: 'American Express',
    role: 'Lead Digital Designer',
    year: '2019–2020',
    tags: ['Finance', 'Web', 'Brand'],
    metric: '33%',
    metricLabel: 'boost in organic web traffic',
    summary: 'Designing brand-aligned digital experiences for one of the world\'s most recognized financial brands.',
    thumbnail: '/images/work/amex-thumb.jpg',
    readTime: '6 min read',
    protected: false,
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'research', label: 'Research' },
      { id: 'objectives', label: 'Objectives' },
      { id: 'solution', label: 'Solution' },
      { id: 'process', label: 'Process' },
      { id: 'outcome', label: 'Outcome' },
      { id: 'reflection', label: 'Reflection' },
    ],
  },
];
