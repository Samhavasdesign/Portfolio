"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

/** @typedef {import("@/lib/work").CaseStudy} CaseStudy */

/**
 * Single case-study tile for the work grid. Keeps layout, motion, and media
 * handling isolated so the parent grid can focus on section-level behavior.
 *
 * @param {{ project: CaseStudy }} props
 */
export default function WorkGridCard({ project }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <MotionLink
      data-work-card
      href={`/work/${project.slug}`}
      className="group block border-solid bg-[#0d0d0d] text-inherit no-underline"
      style={{
        borderWidth: "0.5px",
        borderColor: "#1a1a1a",
      }}
      whileHover={{
        y: -6,
        borderColor: "#2a2a2a",
        backgroundColor: "#111",
        transition: { type: "spring", stiffness: 420, damping: 28 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "16/9",
          background: "#1a1a1a",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background: "linear-gradient(135deg, #161616 0%, #1a1a1a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-hidden
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "10px",
              color: "#2a2a2a",
              letterSpacing: "0.1em",
            }}
          >
            {project.company.toUpperCase()}
          </span>
        </div>
        {!imgFailed ? (
          <img
            src={project.thumbnail}
            alt={project.company}
            className="relative z-[1] h-full w-full object-cover opacity-80 transition-opacity duration-200 group-hover:opacity-100"
            onError={() => setImgFailed(true)}
          />
        ) : null}
      </div>

      <div style={{ padding: "20px 24px 24px" }}>
        <div
          style={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
            marginBottom: "12px",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "monospace",
                fontSize: "9px",
                color: "#444440",
                border: "0.5px solid #1e1e1e",
                padding: "2px 8px",
                letterSpacing: "0.08em",
              }}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "17px",
            fontWeight: 400,
            color: "#e8e4dc",
            letterSpacing: "-0.02em",
            lineHeight: 1.35,
            marginBottom: "6px",
          }}
        >
          {project.company}
        </div>

        <div
          style={{
            fontFamily: "monospace",
            fontSize: "10px",
            color: "#444440",
            letterSpacing: "0.06em",
            marginBottom: "8px",
          }}
        >
          {project.role} · {project.year}
        </div>

        <p
          style={{
            fontFamily: "monospace",
            fontSize: "12px",
            color: "#888880",
            lineHeight: 1.6,
            margin: "0 0 16px",
          }}
        >
          {project.summary}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "8px",
            paddingTop: "16px",
            borderTop: "0.5px solid #1a1a1a",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "22px",
              color: "#e8e4dc",
              fontWeight: 400,
            }}
          >
            {project.metric}
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "10px",
              color: "#444440",
              letterSpacing: "0.06em",
            }}
          >
            {project.metricLabel}
          </span>
        </div>
      </div>
    </MotionLink>
  );
}
