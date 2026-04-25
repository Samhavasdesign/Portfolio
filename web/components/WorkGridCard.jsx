"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

/** @typedef {import("@/lib/work").CaseStudy} CaseStudy */

/** @param {{ project: CaseStudy, linkPrefix?: string }} props */
export default function WorkGridCard({ project, linkPrefix = "/work" }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <MotionLink
      data-work-card
      href={`${linkPrefix}/${project.slug}`}
      className="group block border-solid no-underline"
      style={{
        background: "var(--c-bg-raised)",
        color: "inherit",
        borderWidth: "0.5px",
        borderColor: "var(--c-border)",
      }}
      whileHover={{
        y: -6,
        borderColor: "var(--c-purple-border)",
        backgroundColor: "var(--c-bg-surface)",
        transition: { type: "spring", stiffness: 420, damping: 28 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16/9", background: "var(--c-border)" }}
      >
        <div
          className="absolute inset-0 z-0 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #161616 0%, #1a1a1a 100%)" }}
          aria-hidden
        >
          <span className="card-placeholder-label">{project.company.toUpperCase()}</span>
        </div>
        {!imgFailed && (
          <img
            src={project.thumbnail}
            alt={project.company}
            className="relative z-[1] h-full w-full object-cover opacity-80 transition-opacity duration-200 group-hover:opacity-100"
            onError={() => setImgFailed(true)}
          />
        )}
      </div>

      <div className="card-body">
        <p className="card-title mb-1.5">{project.company}</p>
        <p className="card-meta mb-3">{project.role} · {project.year}</p>
        <p className="card-summary mb-4">{project.summary}</p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="card-tag">{tag.toUpperCase()}</span>
          ))}
        </div>

        <div
          className="flex items-baseline gap-2 pt-4"
          style={{ borderTop: "0.5px solid var(--c-border)" }}
        >
          <span className="card-metric-value">{project.metric}</span>
          <span className="card-metric-label">{project.metricLabel}</span>
        </div>
      </div>
    </MotionLink>
  );
}
