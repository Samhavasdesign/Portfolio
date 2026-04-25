"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudies } from "@/lib/work";
import WorkGridCard from "@/components/WorkGridCard";

export default function WorkGrid({
  title = "Selected work",
  meta = "6 PROJECTS · 2016–2025",
  projects = caseStudies,
  id = "work",
  linkPrefix = "/work",
}) {
  const rootRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const header = headerRef.current;
      const grid = gridRef.current;
      const cards = grid?.querySelectorAll("[data-work-card]");

      if (header) {
        gsap.set(header, { autoAlpha: 0, y: 28 });
        gsap.to(header, {
          autoAlpha: 1, y: 0, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: header, start: "top 88%", once: true },
        });
      }

      if (cards?.length) {
        gsap.set(cards, { autoAlpha: 0, x: -52 });
        gsap.to(cards, {
          autoAlpha: 1, x: 0, duration: 0.85, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: grid, start: "top 82%", once: true },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id={id}
      className="section-container relative overflow-hidden"
      style={{
        background: "var(--c-bg)",
        // Decorative glow — local scope only, not part of the global token system
        "--blob-blue": "#6f8dff",
        "--blob-purple": "#c58ad6",
        "--blob-indigo": "#4a6fa5",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[var(--blob-blue)] opacity-25 blur-[88px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[var(--blob-purple)] opacity-20 blur-[80px]" />
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--blob-indigo)] opacity-15 blur-[72px]" />
      </div>

      <div className="relative z-10">
        <div
          ref={headerRef}
          className="mb-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-4 lg:mb-14"
        >
          <h2 className="section-heading">{title}</h2>
          <span className="section-meta">{meta}</span>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 xl:gap-10"
        >
          {projects.map((project) => (
            <WorkGridCard key={project.slug} project={project} linkPrefix={linkPrefix} />
          ))}
        </div>
      </div>
    </section>
  );
}
