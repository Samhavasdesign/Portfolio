import type { CaseStudy } from "@/lib/work";

export const labProjects: CaseStudy[] = [
  {
    slug: "grammar-editor",
    company: "Grammar Editor",
    role: "Claude API · React · Vercel",
    year: "2025",
    tags: ["AI", "Writing", "Claude"],
    metric: "Real-time",
    metricLabel: "inline rewrites",
    summary: "A lightweight writing editor wired to the Claude API. Highlights grammar issues and suggests rewrites inline.",
    thumbnail: "/images/lab/say-that-better-hero.png",
    readTime: "",
    protected: false,
    sections: [],
    externalUrl: "https://text-refiner--samhavas.replit.app/",
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
  },
];
