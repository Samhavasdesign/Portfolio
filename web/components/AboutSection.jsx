"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";

const DELIVERABLES = [
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

export default function AboutSection() {
  const rootRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const root = rootRef.current;
      if (!root) return;

      const revealNodes = root.querySelectorAll("[data-about-reveal]");
      if (revealNodes.length) {
        gsap.set(revealNodes, { autoAlpha: 0, y: 26 });
        gsap.to(revealNodes, {
          autoAlpha: 1,
          y: 0,
          duration: 0.74,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 82%", once: true },
        });
      }

      const cards = root.querySelectorAll("[data-about-card]");
      if (cards.length) {
        gsap.set(cards, { autoAlpha: 0, x: -38 });
        gsap.to(cards, {
          autoAlpha: 1,
          x: 0,
          duration: 0.78,
          stagger: 0.11,
          ease: "power3.out",
          scrollTrigger: { trigger: cards[0], start: "top 88%", once: true },
        });
      }

      const portrait = root.querySelector("[data-about-portrait]");
      if (portrait) {
        gsap.set(portrait, { autoAlpha: 0, scale: 0.94 });
        gsap.to(portrait, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.92,
          ease: "power3.out",
          scrollTrigger: { trigger: portrait, start: "top 86%", once: true },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const openAskSam = () => {
    window.dispatchEvent(new CustomEvent("open-ask-sam"));
  };

  return (
    <section ref={rootRef} id="about" className="section-container about-section">
      <div className="about-main-grid">
        <div className="about-copy-col" data-about-reveal>
          <h2 className="section-heading">About my design process</h2>

          <div className="about-body mt-6" data-about-reveal>
            <p>I design and ship products—usually faster than people expect.</p>

            <p>
              I keep the process lightweight and focused. Rather than spending weeks polishing a
              deck, I like to turn ideas into something tangible, put it in front of people, and
              learn from what happens. Early concepts often become usable prototypes in days, helping
              teams test assumptions and make better decisions sooner.
            </p>

            <p>
              I use AI throughout the process—not just to generate, but to explore, think, prototype,
              and evaluate. It helps me consider more directions without losing sight of the people
              I&apos;m designing for.
            </p>

            <p>
              And I design for real people, not ideal users. People are distracted, emotional, and
              rarely paying as much attention as we imagine. When something technically works but
              feels confusing or frustrating, they notice—and they leave. I care about making
              products that are intuitive, useful, and genuinely good to use.
            </p>

            <p>
              I&apos;m most at home in 0→1 work, where the problem is still taking shape and the path
              forward isn&apos;t obvious.
            </p>

            <p>Between New York and Rhode Island. Usually remote. Often elsewhere.</p>
            <p>Available for select projects.</p>
          </div>
        </div>

        <aside className="about-portrait-col" aria-label="Portrait of Samantha Havas" data-about-reveal>
          <motion.div
            className="about-portrait-card"
            data-about-portrait
            whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
          >
            <div className="about-portrait-inner">
              <Image
                src="/images/about-portrait.png"
                alt="Samantha Havas portrait"
                width={949}
                height={949}
                className="about-portrait-image"
                sizes="(min-width: 768px) 34vw, (min-width: 480px) 66vw, 92vw"
              />
            </div>
          </motion.div>
        </aside>
      </div>

      <div className="about-principles-wrap" data-about-reveal>
        <h3 className="mt-0 mb-7 md:mb-8">What I deliver</h3>
        <div className="about-principles-grid pt-3 md:pt-4">
          {DELIVERABLES.map((item) => (
            <motion.article
              key={item.title}
              data-about-card
              className="rounded-lg border p-6"
              style={{
                borderColor: "var(--c-border-mid)",
                background: "var(--c-bg-raised)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.02)",
              }}
              whileHover={prefersReducedMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              <h4
                className="font-mono uppercase tracking-[0.14em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  color: "var(--c-purple-hover)",
                }}
              >
                {item.title}
              </h4>
              <p className="mt-3 section-subtext">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="about-chat-cta-wrap" data-about-reveal>
        <p className="about-chat-copy">Want more? Ask me anything.</p>
        <motion.button
          type="button"
          onClick={openAskSam}
          className="about-chat-cta"
          whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          transition={{ type: "spring", stiffness: 480, damping: 26 }}
        >
          <motion.span
            className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--c-green)]"
            animate={prefersReducedMotion ? undefined : { opacity: [0.35, 1, 0.35], scale: [1, 1.18, 1] }}
            transition={prefersReducedMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span>Ask Sam</span>
        </motion.button>
      </div>
    </section>
  );
}
