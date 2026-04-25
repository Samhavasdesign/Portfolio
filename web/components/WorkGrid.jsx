"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudies } from "@/lib/work";
import WorkGridCard from "@/components/WorkGridCard";

export default function WorkGrid() {
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
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 88%",
            once: true,
          },
        });
      }

      if (cards?.length) {
        gsap.set(cards, { autoAlpha: 0, x: -52 });
        gsap.to(cards, {
          autoAlpha: 1,
          x: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 82%",
            once: true,
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="work"
      className="relative overflow-hidden"
      style={{
        background: "#0a0a0a",
        padding: "120px clamp(20px, 4vw, 32px)",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.4]" aria-hidden>
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#6f8dff] opacity-25 blur-[88px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#c58ad6] opacity-20 blur-[80px]" />
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#4a6fa5] opacity-15 blur-[72px]" />
      </div>

      <div className="relative z-10">
        <div
          ref={headerRef}
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px 24px",
            marginBottom: "clamp(40px, 5vw, 56px)",
          }}
        >
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "32px",
              fontWeight: 400,
              color: "#e8e4dc",
              letterSpacing: "-0.02em",
            }}
          >
            Selected work
          </h2>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#444440",
              letterSpacing: "0.08em",
            }}
          >
            6 PROJECTS · 2016–2025
          </span>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 xl:gap-10"
        >
          {caseStudies.map((project) => (
            <WorkGridCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
