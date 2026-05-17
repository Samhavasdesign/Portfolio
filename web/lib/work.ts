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
  // Optional hero overrides — fall back to summary / company+role+year if omitted
  headline?: string;
  heroImage?: string;
  heroAlt?: string;
  heroEyebrow?: string;
  metaItems?: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'angiugc',
    company: 'Angi',
    role: 'Senior Product Designer',
    year: '2025-2026',
    tags: ['Web', 'SEO', 'Content', 'Growth', 'CRO'],
    metric: '63%',
    metricLabel: 'engagement increase',
    summary:
      "Turning Angi's untapped content into an SEO engine — and a reason for homeowners to stay.",
    thumbnail: '/images/work/angi-ask-a-pro-card.jpg',
    readTime: '9 min read',
    protected: false,
    headline:
      "Turning Angi's untapped content into an SEO engine — and a reason for homeowners to stay.",
    heroImage: '/images/work/angi-ask-a-pro-hero.jpg',
    heroAlt:
      'Professional service worker in a kitchen reviewing his phone',
    heroEyebrow: 'Case study · Web · Content',
    metaItems: [
      { label: 'Company', value: 'Angi' },
      { label: 'Role', value: 'Design Lead' },
      { label: 'Timeline', value: '2022–2024' },
      { label: 'Platform', value: 'Web (Mobile First)' },
    ],
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'the-work', label: 'The work' },
      { id: 'outcome', label: 'Outcome' },
      { id: 'reflection', label: 'Reflection' },
    ],
  },
  {
    slug: 'angislab',
    company: 'Angi',
    role: 'Senior Product Designer',
    year: '2025-2026',
    tags: ['Web', 'Design system', 'Growth', 'CRO', 'Tokens'],
    metric: '37%',
    metricLabel: 'conversion lift',
    summary:
      'Leading the SLAB no-code platform migration — a shared component and token system that let Growth ship experiments without waiting on engineering.',
    thumbnail: '/images/work/angislab-card.png',
    readTime: '8 min read',
    protected: false,
    headline:
      "Building the platform that let Angi's growth team ship without waiting.",
    heroImage: '/images/work/SLAB-hero.png',
    heroAlt:
      'Angi Solution Center Home Exteriors page mockup with hero, article grid, and design system components',
    heroEyebrow: 'Case study · Web · Design systems',
    metaItems: [
      { label: 'Company', value: 'Angi' },
      { label: 'Role', value: 'Senior Product Design Lead' },
      { label: 'Timeline', value: '2022–2024' },
      { label: 'Platform', value: 'Web (Mobile First)' },
    ],
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'the-work', label: 'The work' },
      { id: 'outcome', label: 'Outcome' },
      { id: 'reflection', label: 'Reflection' },
    ],
  },
  {
    slug: 'angisem',
    company: 'Angi',
    role: 'Senior Product Designer',
    year: '2022–2023',
    tags: ['Web', 'CRO', 'A/B Testing', 'UXR', 'Growth'],
    metric: '26.9%',
    metricLabel: 'bounce rate reduction',
    summary:
      'A two-year experimentation project that reframed how Angi thinks about SEM conversion.',
    thumbnail: '/images/work/angisem-card.jpg',
    readTime: '10 min read',
    protected: false,
    headline:
      'A 77% bounce rate, a $2M/month problem, and everything we learned trying to fix it.',
    heroImage: '/images/work/SEM-hero.png',
    heroAlt: 'Angi SEM landing page mockup showing the search experience on mobile and desktop',
    heroEyebrow: 'Case study · Web · CRO',
    metaItems: [
      { label: 'Company', value: 'Angi' },
      { label: 'Role', value: 'Design Lead' },
      { label: 'Timeline', value: '2022–2023' },
      { label: 'Platform', value: 'Web (Mobile First)' },
    ],
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'phase-1', label: 'Phase 1' },
      { id: 'phase-2', label: 'Phase 2' },
      { id: 'phase-3', label: 'Phase 3' },
      { id: 'outcome', label: 'Outcome' },
      { id: 'reflection', label: 'Reflection' },
    ],
  },
  {
    slug: 'sesame',
    company: 'Learn with Sesame Street',
    role: 'Lead Product Designer',
    year: '2022',
    tags: ['EdTech', 'Design System', 'App', 'Kids', 'UXR', 'Positioning', 'Growth'],
    metric: '0→1',
    metricLabel: 'from concept to App Store',
    summary: 'Designed and launched a social-emotional learning app for kids in partnership with Sesame Workshop.',
    thumbnail: '/images/work/sesame-thumb.png',
    readTime: '8 min read',
    protected: false,
    headline: 'Redesigning how children ages 2–6 learn to feel, connect, and grow.',
    heroImage: '/images/work/sesame-hero.jpg',
    heroAlt: 'Parent and child using tablet for learning',
    heroEyebrow: 'Case study · iOS & Android App',
    metaItems: [
      { label: 'Company', value: 'Homer × Sesame Workshop' },
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Timeline', value: '6 months · 2021' },
      { label: 'Platform', value: 'iOS · Android · Web' },
    ],
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'research', label: 'Research' },
      { id: 'objectives', label: 'Objectives' },
      { id: 'solution', label: 'Solution' },
      { id: 'process', label: 'Process' },
      { id: 'outcome', label: 'Outcome' },
      { id: 'reflection', label: 'Reflection' },
      { id: 'see-it-in-action', label: 'See it in action' },
    ],
  },
  {
    slug: 'homer',
    company: 'Homer Learning',
    role: 'Product Designer',
    year: '2020',
    tags: ['EdTech', 'Design System', 'App', 'UXR', 'Product Concept', 'Rebrand'],
    metric: '25%',
    metricLabel: 'child engagement lift',
    summary: 'A redesign of an early childhood education app designed for kids ages 2–8.',
    thumbnail: '/images/work/homer-thumb.png',
    readTime: '10 min read',
    protected: false,
    headline: 'Merging two apps into one, and building the learning platform kids could actually navigate alone.',
    heroImage: '/images/HOMER_Learn_%26_Grow_Lifestyle_Photo_1.jpg',
    heroAlt: 'Child holding a tablet showing the HOMER Learn and Grow home screen in a bright playroom',
    heroEyebrow: 'Case study · iOS & Android App',
    metaItems: [
      { label: 'Company', value: 'Homer Learning' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Timeline', value: '2020 · ~1 year' },
      { label: 'Platform', value: 'iOS · Android · Tablet' },
    ],
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'research', label: 'Research' },
      { id: 'objectives', label: 'Objectives' },
      { id: 'solution', label: 'Solution' },
      { id: 'process', label: 'Process' },
      { id: 'outcome', label: 'Outcome' },
      { id: 'reflection', label: 'Reflection' },
      { id: 'see-it-in-action', label: 'See it in action' },
    ],
  },
  {
    slug: 'homerwebsite',
    company: 'Homer Learning',
    role: 'Product Designer',
    year: '2020–2021',
    tags: ['Web', 'Design system', 'Marketing', 'Rebrand'],
    metric: '2M+',
    metricLabel: 'families reached',
    summary:
      'Translating a brand overhaul into a scalable component system and full site redesign for millions of families.',
    thumbnail: '/images/work/homerwebsite-cardimage.png',
    readTime: '9 min read',
    protected: false,
    headline:
      "Rebuilding HOMER's digital front door — from a fragmented site to a conversion-driven platform built for millions of families.",
    heroImage: '/images/work/homer-website-hero-5x.png',
    heroAlt:
      'HOMER marketing site redesign mockups on a dark background showing learning areas, blog hero, and Explore Kits pages',
    heroEyebrow: 'Case study · Web · Marketing',
    metaItems: [
      { label: 'Company', value: 'Homer Learning' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Timeline', value: '2020–2021' },
      { label: 'Platform', value: 'Web · Mobile · Tablet' },
    ],
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'the-work', label: 'The work' },
      { id: 'outcome', label: 'Outcome' },
      { id: 'reflection', label: 'Reflection' },
    ],
  },
];
