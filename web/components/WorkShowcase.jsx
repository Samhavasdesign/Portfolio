"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const features = [
  {
    title: "Design systems",
    body: "Tokens, components, and documentation that scale with the product and engineering.",
  },
  {
    title: "AI-native workflows",
    body: "Research, prototyping, and production loops that pair craft with automation.",
  },
  {
    title: "Ship-ready UI",
    body: "From Figma to code—tight polish, accessible patterns, and measurable outcomes.",
  },
];

export default function WorkShowcase() {
  const rootRef = useRef(null);
  const cardsRef = useRef(null);
  const dashboardRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll("[data-feature-card]");
      if (cards?.length) {
        gsap.set(cards, { autoAlpha: 0, x: -56 });
        gsap.to(cards, {
          autoAlpha: 1,
          x: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 82%",
            once: true,
          },
        });
      }

      const panel = dashboardRef.current;
      if (panel) {
        gsap.set(panel, { autoAlpha: 0, scale: 0.92 });
        gsap.to(panel, {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            once: true,
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="border-t border-[#1a1a1a] bg-[#0a0a0a] px-10 py-24 text-[#e8e4dc] md:px-12 lg:px-16">
      <section id="how-work-ships" aria-labelledby="work-heading" className="mx-auto max-w-5xl">
        <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#555550]">Portfolio</p>
        <h2
          id="work-heading"
          className="mt-3 font-[Georgia,serif] text-[28px] font-normal tracking-[-0.02em] text-[#e8e4dc] md:text-[34px]"
        >
          How work ships
        </h2>
        <p className="mt-4 max-w-[52ch] font-mono text-[13px] leading-relaxed text-[#888880]">
          Scroll-driven reveals below mirror how case studies and dashboards enter the page—staggered blocks, then a
          scale-up preview.
        </p>

        <div ref={cardsRef} className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {features.map((item) => (
            <motion.article
              key={item.title}
              data-feature-card
              className="rounded-lg border border-[#1e1e1e] bg-[#0d0d0d] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 420, damping: 28 } }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#c7a0df]">{item.title}</h3>
              <p className="mt-3 font-mono text-[12px] leading-relaxed text-[#9a9a9a]">{item.body}</p>
            </motion.article>
          ))}
        </div>

        <div
          ref={dashboardRef}
          data-dashboard-panel
          className="relative mt-20 overflow-hidden rounded-xl border border-[#242424] bg-[#080808] p-6 md:p-8"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true">
            <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-[#6f8dff] opacity-20 blur-[70px]" />
            <div className="absolute bottom-0 left-1/4 h-40 w-40 rounded-full bg-[#c58ad6] opacity-15 blur-[60px]" />
          </div>
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#666660]">Dashboard preview</p>
              <span className="rounded-full border border-[#1e3d1e] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#4ade80]">
                Live metrics
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
              <div className="space-y-3 rounded-lg border border-[#1a1a1a] bg-[#0c0c0c] p-4">
                <div className="h-2 w-24 rounded-full bg-[#2a2a2a]" />
                <div className="h-28 rounded-md bg-[#101010] ring-1 ring-[#1a1a1a]" />
                <div className="flex gap-2">
                  <div className="h-2 flex-1 rounded-full bg-[#1f1f1f]" />
                  <div className="h-2 flex-1 rounded-full bg-[#1f1f1f]" />
                  <div className="h-2 w-10 rounded-full bg-[#1f1f1f]" />
                </div>
              </div>
              <div className="space-y-3 rounded-lg border border-[#1a1a1a] bg-[#0c0c0c] p-4">
                {[72, 54, 88, 64].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#4ade80]" />
                    <div className="h-2 rounded-full bg-[#222]" style={{ width: `${w}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
