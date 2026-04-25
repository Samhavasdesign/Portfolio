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
          autoAlpha: 1, x: 0, duration: 0.85, stagger: 0.14, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 82%", once: true },
        });
      }

      const panel = dashboardRef.current;
      if (panel) {
        gsap.set(panel, { autoAlpha: 0, scale: 0.92 });
        gsap.to(panel, {
          autoAlpha: 1, scale: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: panel, start: "top 80%", once: true },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="section-container border-t"
      style={{ borderColor: "var(--c-border)", background: "var(--c-bg)", color: "var(--c-text)" }}
    >
      <section id="how-work-ships" aria-labelledby="work-heading" className="mx-auto max-w-5xl">
        <p className="section-eyebrow">Portfolio</p>
        <h2 id="work-heading" className="section-heading mt-3">How work ships</h2>
        <p className="section-subtext mt-4 max-w-[52ch]">
          Scroll-driven reveals below mirror how case studies and dashboards enter the
          page—staggered blocks, then a scale-up preview.
        </p>

        <div ref={cardsRef} className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {features.map((item) => (
            <motion.article
              key={item.title}
              data-feature-card
              className="rounded-lg border p-6"
              style={{
                borderColor: "var(--c-border-mid)",
                background: "var(--c-bg-raised)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.02)",
              }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 420, damping: 28 } }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <h3
                className="font-mono uppercase tracking-[0.14em]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--c-purple-hover)" }}
              >
                {item.title}
              </h3>
              <p className="mt-3 section-subtext">{item.body}</p>
            </motion.article>
          ))}
        </div>

        <div
          ref={dashboardRef}
          data-dashboard-panel
          className="relative mt-20 overflow-hidden rounded-xl border p-6 md:p-8"
          style={{ borderColor: "#242424", background: "#080808" }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden>
            <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-[#6f8dff] opacity-20 blur-[70px]" />
            <div className="absolute bottom-0 left-1/4 h-40 w-40 rounded-full bg-[#c58ad6] opacity-15 blur-[60px]" />
          </div>
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="section-eyebrow">Dashboard preview</p>
              <span
                className="rounded-full border px-2 py-1 font-mono text-[12px] uppercase tracking-[0.12em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  borderColor: "#1e3d1e",
                  color: "var(--c-green)",
                }}
              >
                Live metrics
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
              <div
                className="space-y-3 rounded-lg border p-4"
                style={{ borderColor: "var(--c-border)", background: "#0c0c0c" }}
              >
                <div className="h-2 w-24 rounded-full bg-[#2a2a2a]" />
                <div className="h-28 rounded-md bg-[#101010] ring-1 ring-[#1a1a1a]" />
                <div className="flex gap-2">
                  <div className="h-2 flex-1 rounded-full bg-[#1f1f1f]" />
                  <div className="h-2 flex-1 rounded-full bg-[#1f1f1f]" />
                  <div className="h-2 w-10 rounded-full bg-[#1f1f1f]" />
                </div>
              </div>
              <div
                className="space-y-3 rounded-lg border p-4"
                style={{ borderColor: "var(--c-border)", background: "#0c0c0c" }}
              >
                {[72, 54, 88, 64].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full" style={{ background: "var(--c-green)" }} />
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
