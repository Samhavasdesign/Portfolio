import type { CaseStudy } from "@/lib/work";

export const labProjects: CaseStudy[] = [
  {
    slug: "purrsist",
    company: "Purrsist",
    role: "Next.js · Claude Code · Cursor",
    year: "2026",
    tags: ["Productivity App", "AI Sorting", "PWA", "Solo Build", "Personal Project"],
    metric: "",
    metricLabel: "",
    summary:
      "A calm capture tool for a brain that loses things — text in, AI sorts it, and the app hands it back on its own schedule instead of asking you to manage it.",
    thumbnail: "/images/lab/purrsist-hero.jpg",
    readTime: "",
    protected: false,
    sections: [],
    externalUrl: "https://purrsist.co",
  },
  {
    slug: "rethink-wallet",
    company: "Digital Experience for Rethink",
    role: "Claude Code · Cursor",
    year: "2026",
    tags: ["Nonprofit", "Prototype", "Dashboard"],
    metric: "",
    metricLabel: "",
    summary:
      "A donor wallet prototype that makes impact tangible — balance, giving history, and where support goes.",
    thumbnail: "/images/lab/rethink-wallet-hero.webp",
    readTime: "",
    protected: false,
    sections: [],
    externalUrl: "https://digitizing-44tt.vercel.app/dashboard?wallet=all",
  },
  {
    slug: "design-eval-toolkit",
    company: "AI Design Evaluation Toolkit",
    role: "Claude API · Claude Code",
    year: "2026",
    tags: ["SaaS Tool", "AI Evaluation", "API Integration", "Workflow Optimization", "Personal Project"],
    metric: "",
    metricLabel: "",
    summary:
      "A Claude-powered evaluation toolkit that scores AI generated designs against the original prompt — aesthetics, usability, and adherence in one pass.",
    thumbnail: "/images/lab/design-eval-toolkit-hero.webp",
    readTime: "",
    protected: false,
    sections: [],
    externalUrl: "https://design-eval-checklist.vercel.app/",
  },
  {
    slug: "flight-finder",
    company: "Flight Finder",
    role: "Scraping · Claude · Vercel",
    year: "2025",
    tags: ["AI", "Scraping", "Travel"],
    metric: "< 1 day",
    metricLabel: "build to deploy",
    summary:
      "A Claude-assisted scrape pipeline that pulls airline deals and surfaces them in a clean, scannable UI.",
    thumbnail: "/images/lab/flight-finder-hero.png",
    readTime: "",
    protected: false,
    sections: [],
    hidden: true,
  },
];

export const visibleLabProjects = labProjects.filter((project) => !project.hidden);
