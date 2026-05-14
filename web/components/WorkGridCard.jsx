"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

/** @typedef {import("@/lib/work").CaseStudy} CaseStudy */

/** @param {{ project: CaseStudy, linkPrefix?: string }} props */
export default function WorkGridCard({ project, linkPrefix = "/work" }) {
  const [imgFailed, setImgFailed] = useState(false);
  const isSesameCard = project.slug === "sesame";
  const isHomerCard = project.slug === "homer";
  const isHomerWebsiteCard = project.slug === "homerwebsite";
  const isAngislabCard = project.slug === "angislab";
  const isAngiugcCard = project.slug === "angiugc";

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
          style={{ background: "linear-gradient(135deg, var(--c-bg-surface) 0%, var(--c-border) 100%)" }}
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
        {isSesameCard ? (
          <h3 className="card-title mb-1.5">
            0 → 1 Social-Emotional Learning App
          </h3>
        ) : isHomerCard ? (
          <h3 className="card-title mb-1.5">
            EdTech App Redesign &amp; Rebrand
          </h3>
        ) : isHomerWebsiteCard ? (
          <h3 className="card-title mb-1.5">
            Homer Marketing Site Redesign
          </h3>
        ) : isAngislabCard ? (
          <h3 className="card-title mb-1.5">
            Growth Platform &amp; Design Systems
          </h3>
        ) : isAngiugcCard ? (
          <h3 className="card-title mb-1.5">
            Ask a Pro Q&amp;A + UGC Web Components
          </h3>
        ) : (
          <p className="card-title mb-1.5">{project.company}</p>
        )}
        <p className="card-meta mb-3">{project.role} · {project.year}</p>
        <p className="card-summary mb-4">{project.summary}</p>

        <div className="mt-6 mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="card-tag">{tag.toUpperCase()}</span>
          ))}
        </div>

        <div
          className="flex items-end gap-2 justify-between pt-4"
          style={{ borderTop: "0.5px solid var(--c-border)" }}
        >
          <div
            className={
              isSesameCard
                ? "flex min-w-0 flex-1 items-start gap-2 pr-2"
                : "flex items-baseline gap-2"
            }
          >
            <span
              className={
                isSesameCard
                  ? "card-metric-value card-metric-value--sesame shrink-0"
                  : "card-metric-value"
              }
            >
              {project.metric}
            </span>
            <span
              className={
                isSesameCard
                  ? "card-metric-label min-w-0 flex-1 leading-snug"
                  : "card-metric-label"
              }
            >
              {project.metricLabel}
            </span>
          </div>
          {(isSesameCard || isHomerCard || isHomerWebsiteCard || isAngislabCard || isAngiugcCard) && (
            <img
              src={
                isSesameCard
                  ? "/clientlogos/sesame_street_white.svg"
                  : isHomerCard || isHomerWebsiteCard
                    ? "/clientlogos/homer_cropped.svg"
                    : "/clientlogos/angi.svg"
              }
              alt={isSesameCard ? "Sesame Street" : isHomerCard || isHomerWebsiteCard ? "Homer" : "Angi"}
              className={`shrink-0 ${isHomerCard || isHomerWebsiteCard ? "h-6" : "h-7"} w-auto object-contain opacity-90`}
              decoding="async"
            />
          )}
        </div>
      </div>
    </MotionLink>
  );
}
