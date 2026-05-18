"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const isAngisemCard = project.slug === "angisem";
  const isGrammarEditorCard = project.slug === "grammar-editor";
  const isFlightFinderCard = project.slug === "flight-finder";
  const isHeroObjectTop = isAngisemCard || isAngislabCard;
  const isHeroObjectContain = isGrammarEditorCard || isFlightFinderCard;
  const href = project.externalUrl ?? `${linkPrefix}/${project.slug}`;
  const isExternal = Boolean(project.externalUrl);

  return (
    <MotionLink
      data-work-card
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
        style={{
          aspectRatio: "16/9",
          background: isHeroObjectContain ? "var(--c-bg)" : "var(--c-border)",
        }}
      >
        <div
          className="absolute inset-0 z-0 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, var(--c-bg-surface) 0%, var(--c-border) 100%)" }}
          aria-hidden
        >
          <span className="card-placeholder-label">{project.company.toUpperCase()}</span>
        </div>
        {!imgFailed && (
          <Image
            src={project.thumbnail}
            alt={project.company}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={95}
            className={`relative z-[1] h-full w-full opacity-80 transition-opacity duration-200 group-hover:opacity-100${isHeroObjectContain ? " object-contain" : " object-cover"}${isHeroObjectTop ? " object-top" : ""}`}
            onError={() => setImgFailed(true)}
          />
        )}
      </div>

      <div className="card-body">
        {isSesameCard ? (
          <h3 className="card-title mb-1.5">
            Learn with Sesame Street
          </h3>
        ) : isHomerCard ? (
          <h3 className="card-title mb-1.5">
            EdTech App Redesign &amp; Rebrand
          </h3>
        ) : isHomerWebsiteCard ? (
          <h3 className="card-title mb-1.5">
            HOMER Rebrand &amp; Marketing Site Redesign
          </h3>
        ) : isAngislabCard ? (
          <h3 className="card-title mb-1.5">
            Growth Platform &amp; Design Systems
          </h3>
        ) : isAngiugcCard ? (
          <h3 className="card-title mb-1.5">
            Ask a Pro Q&amp;A + UGC Web Components
          </h3>
        ) : isAngisemCard ? (
          <h3 className="card-title mb-1.5">
            SEM Landing Page Optimization
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

        <div className="card-metric-footer">
          {isSesameCard ? (
            <>
              <span className="card-metric-value card-metric-value--sesame">
                {project.metric}
              </span>
              <p className="card-metric-label card-metric-label--sesame">
                <span className="card-metric-label-sesame-muted">
                  {project.metricLabel}
                </span>
              </p>
            </>
          ) : (
            <>
              <span className="card-metric-value">{project.metric}</span>
              <p className="card-metric-label">{project.metricLabel}</p>
            </>
          )}
          {(isSesameCard || isHomerCard || isHomerWebsiteCard || isAngislabCard || isAngiugcCard || isAngisemCard) && (
            <div className="card-metric-footer__logo-slot">
              <Image
                src={
                  isSesameCard
                    ? "/clientlogos/sesame_street_white.svg"
                    : isHomerCard || isHomerWebsiteCard
                      ? "/clientlogos/homer_cropped.svg"
                      : "/clientlogos/angi.svg"
                }
                alt={isSesameCard ? "Sesame Street" : isHomerCard || isHomerWebsiteCard ? "Homer" : "Angi"}
                width={120}
                height={28}
                className={`card-metric-footer__logo${isHomerCard || isHomerWebsiteCard ? " card-metric-footer__logo--compact" : ""}`}
                decoding="async"
              />
            </div>
          )}
        </div>
      </div>
    </MotionLink>
  );
}
