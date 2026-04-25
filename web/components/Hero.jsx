"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";

/* Hero typography lives in app/globals.css (.hero-*, --hero-fs-*) and lib/tokens.ts (hero). */

const GITHUB_USERNAME = "samhavasdesign";
/** GitHub caps a user’s public timeline at 300 events; use max pages × per_page to match. */
const GITHUB_EVENTS_PER_PAGE = 100;
const GITHUB_EVENTS_MAX_PAGES = 3;
const FEED_EVENT_LIMIT = 20;

function userPublicEventsUrl(page) {
  return `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=${GITHUB_EVENTS_PER_PAGE}&page=${page}`;
}

async function fetchUserPublicEventsTimeline(headers) {
  const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
  const all = [];
  for (let page = 1; page <= GITHUB_EVENTS_MAX_PAGES; page += 1) {
    const response = await fetch(userPublicEventsUrl(page), {
      method: "GET",
      headers,
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`GitHub response ${response.status}`);
    }
    const batch = await response.json();
    if (!Array.isArray(batch) || batch.length === 0) {
      break;
    }
    all.push(...batch);
    if (batch.length < GITHUB_EVENTS_PER_PAGE) {
      break;
    }
    const oldestInPage = new Date(batch[batch.length - 1]?.created_at).getTime();
    if (!Number.isNaN(oldestInPage) && oldestInPage < thirtyDaysAgo) {
      break;
    }
  }
  return all;
}

const ALLOWED_EVENT_TYPES = new Set([
  "PushEvent",
  "CreateEvent",
  "PullRequestEvent",
  "IssuesEvent",
  "WatchEvent",
  "ForkEvent",
]);

const FALLBACK_EVENTS = [
  {
    id: "fallback-1",
    type: "PushEvent",
    repo: { name: "samhavasdesign/portfolio" },
    created_at: "2026-04-24T14:05:00.000Z",
    payload: { size: 1, commits: [{ message: "Refine hero copy cadence and hierarchy" }] },
  },
  {
    id: "fallback-2",
    type: "PullRequestEvent",
    repo: { name: "samhavasdesign/design-system" },
    created_at: "2026-04-24T12:48:00.000Z",
    payload: {
      action: "opened",
      pull_request: { title: "Tighten dark token contrast behavior" },
    },
  },
  {
    id: "fallback-3",
    type: "CreateEvent",
    repo: { name: "samhavasdesign/ai-ui-lab" },
    created_at: "2026-04-23T17:30:00.000Z",
    payload: { ref_type: "repository", ref: "ai-ui-lab" },
  },
  {
    id: "fallback-4",
    type: "WatchEvent",
    repo: { name: "samhavasdesign/realtime-patterns" },
    created_at: "2026-04-23T08:11:00.000Z",
    payload: { action: "started" },
  },
];

function toRelativeTime(isoString) {
  try {
    const now = Date.now();
    const target = new Date(isoString).getTime();
    const deltaMs = Math.max(0, now - target);
    const minutes = Math.floor(deltaMs / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return "just now";
  } catch {
    return "recent";
  }
}

function getEventMessage(event) {
  try {
    if (!event) return "Activity updated";
    if (event.type === "PushEvent") {
      const commitMessage = event.payload?.commits?.[0]?.message;
      const commitCount = pushEventCommitCount(event.payload);
      if (commitMessage) return commitMessage;
      return commitCount > 0 ? `${commitCount} commit(s) pushed` : "Code pushed";
    }
    if (event.type === "PullRequestEvent") {
      return event.payload?.pull_request?.title || "Pull request activity";
    }
    if (event.type === "IssuesEvent") {
      const title = event.payload?.issue?.title;
      return title ? `${event.payload?.action}: ${title}` : "Issue activity";
    }
    if (event.type === "CreateEvent") {
      const refType = event.payload?.ref_type || "resource";
      const ref = event.payload?.ref || "new item";
      return `${refType} created: ${ref}`;
    }
    if (event.type === "WatchEvent") return "Repository starred";
    if (event.type === "ForkEvent") return "Repository forked";
    return "Activity updated";
  } catch {
    return "Activity updated";
  }
}

function getTypeLabel(type) {
  try {
    return type.replace("Event", "");
  } catch {
    return "Event";
  }
}

/** GitHub PushEvent truncates `payload.commits`; true count is `payload.size`. */
function pushEventCommitCount(payload) {
  if (!payload || typeof payload !== "object") return 0;
  if (typeof payload.size === "number") return payload.size;
  return Array.isArray(payload.commits) ? payload.commits.length : 0;
}

export default function Hero() {
  const [feedEvents, setFeedEvents] = useState(FALLBACK_EVENTS);
  const [statsTimelineEvents, setStatsTimelineEvents] = useState(FALLBACK_EVENTS);
  const [clock, setClock] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [didUseFallback, setDidUseFallback] = useState(true);
  const [isPanePulsing, setIsPanePulsing] = useState(false);
  const previousTopEventId = useRef(FALLBACK_EVENTS[0]?.id || null);
  const heroSectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  /** Full drift when PRM is off or unknown; opacity-only pulse when PRM is on (still “alive”, no travel). */
  const ambientDrift = prefersReducedMotion !== true;
  const ambientPulseOnly = prefersReducedMotion === true;

  const updateClock = useCallback(() => {
    try {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setClock(`${h}:${m}:${s}`);
    } catch {
      setClock("--:--:--");
    }
  }, []);

  const fetchEvents = useCallback(async () => {
    try {
      setIsRefreshing(true);
      const headers = { Accept: "application/vnd.github+json" };
      if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
      }
      const raw = await fetchUserPublicEventsTimeline(headers);
      const filtered = raw.filter((item) => ALLOWED_EVENT_TYPES.has(item?.type));
      if (filtered.length === 0) throw new Error("No events returned");

      const feedSlice = filtered.slice(0, FEED_EVENT_LIMIT);
      const nextTopId = feedSlice[0]?.id || null;
      if (previousTopEventId.current && nextTopId !== previousTopEventId.current) {
        setIsPanePulsing(true);
        window.setTimeout(() => setIsPanePulsing(false), 500);
      }
      previousTopEventId.current = nextTopId;

      setFeedEvents(feedSlice);
      setStatsTimelineEvents(filtered);
      setDidUseFallback(false);
    } catch {
      setFeedEvents(FALLBACK_EVENTS);
      setStatsTimelineEvents(FALLBACK_EVENTS);
      setDidUseFallback(true);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  const stats = useMemo(() => {
    try {
      const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
      let commits30d = 0;
      const repoSet = new Set();
      for (const event of statsTimelineEvents) {
        const eventDate = new Date(event?.created_at).getTime();
        if (Number.isNaN(eventDate) || eventDate < thirtyDaysAgo) continue;
        repoSet.add(event?.repo?.name || "unknown/repo");
        if (event?.type === "PushEvent") {
          commits30d += pushEventCommitCount(event.payload);
        }
      }
      return { yearsExp: 10, commits30d, reposActive: repoSet.size };
    } catch {
      return { yearsExp: 10, commits30d: 0, reposActive: 0 };
    }
  }, [statsTimelineEvents]);

  useEffect(() => {
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, [updateClock]);

  useEffect(() => {
    fetchEvents();
    const poller = window.setInterval(fetchEvents, 60000);
    return () => window.clearInterval(poller);
  }, [fetchEvents]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const root = heroSectionRef.current;
      if (!root) return;
      const reveals = root.querySelectorAll("[data-hero-reveal]");
      if (reveals.length) {
        gsap.set(reveals, { autoAlpha: 0, y: 28 });
        gsap.to(reveals, {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.08,
          ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          once: true,
        },
        });
      }
      const right = root.querySelector("[data-hero-right]");
      if (right) {
        gsap.set(right, { autoAlpha: 0, x: 48 });
        gsap.to(right, {
          autoAlpha: 1,
          x: 0,
          duration: 0.88,
          ease: "power3.out",
        scrollTrigger: {
          trigger: right,
          start: "top bottom",
          once: true,
        },
        });
      }
    }, heroSectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroSectionRef}
      className="bg-[#0a0a0a] text-[#e8e4dc] flex flex-col md:h-[calc(100vh-57px)] md:min-h-[600px] md:overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:flex-1 md:min-h-0">
        <div className="hero-at-wide-left relative flex flex-col gap-y-[50px] max-md:justify-between md:h-full md:justify-start md:gap-y-16 lg:gap-y-20 overflow-hidden border-b border-[#1e1e1e] pb-8 md:border-b-0 md:border-r md:pb-10 lg:pb-12">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <motion.div
              className="will-change-transform absolute -left-24 -top-28 h-[360px] w-[360px] rounded-full bg-[#c58ad6] opacity-[0.09] blur-[90px]"
              initial={
                ambientPulseOnly
                  ? { opacity: 0.09 }
                  : { opacity: 0.09, x: 0, y: 0, scale: 1 }
              }
              animate={
                ambientDrift
                  ? {
                      x: [0, 26, -18, 20, 0],
                      y: [0, -20, 16, -12, 0],
                      scale: [1, 1.06, 1.03, 1.05, 1],
                      opacity: [0.09, 0.12, 0.1, 0.115, 0.09],
                    }
                  : ambientPulseOnly
                    ? { opacity: [0.09, 0.125, 0.095, 0.11, 0.09] }
                    : { opacity: 0.1 }
              }
              transition={
                ambientDrift
                  ? { duration: 20, repeat: Infinity, ease: "easeInOut" }
                  : ambientPulseOnly
                    ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0 }
              }
            />
            <motion.div
              className="will-change-transform absolute right-[-90px] top-[18%] h-[320px] w-[320px] rounded-full bg-[#6f8dff] opacity-[0.078] blur-[95px]"
              initial={
                ambientPulseOnly
                  ? { opacity: 0.075 }
                  : { opacity: 0.078, x: 0, y: 0, scale: 1 }
              }
              animate={
                ambientDrift
                  ? {
                      x: [0, -28, 22, -16, 0],
                      y: [0, 18, -14, 12, 0],
                      scale: [1, 1.05, 1.08, 1.04, 1],
                      opacity: [0.078, 0.1, 0.085, 0.095, 0.078],
                    }
                  : ambientPulseOnly
                    ? { opacity: [0.075, 0.11, 0.085, 0.1, 0.075] }
                    : { opacity: 0.09 }
              }
              transition={
                ambientDrift
                  ? { duration: 17, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                  : ambientPulseOnly
                    ? { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                    : { duration: 0 }
              }
            />
            <motion.div
              className="will-change-transform absolute left-[20%] bottom-[-120px] h-[340px] w-[340px] rounded-full bg-[#ef8bc8] opacity-[0.07] blur-[100px]"
              initial={
                ambientPulseOnly
                  ? { opacity: 0.065 }
                  : { opacity: 0.07, x: 0, y: 0, scale: 1 }
              }
              animate={
                ambientDrift
                  ? {
                      x: [0, -22, 26, -18, 0],
                      y: [0, 14, -18, 10, 0],
                      scale: [1, 1.07, 1.04, 1.06, 1],
                      opacity: [0.07, 0.095, 0.08, 0.09, 0.07],
                    }
                  : ambientPulseOnly
                    ? { opacity: [0.065, 0.1, 0.075, 0.09, 0.065] }
                    : { opacity: 0.08 }
              }
              transition={
                ambientDrift
                  ? { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1.6 }
                  : ambientPulseOnly
                    ? { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                    : { duration: 0 }
              }
            />
            <motion.div
              className="will-change-transform absolute right-[12%] bottom-[10%] h-[260px] w-[260px] rounded-full bg-[#4bc0bc] opacity-[0.068] blur-[90px]"
              initial={
                ambientPulseOnly
                  ? { opacity: 0.06 }
                  : { opacity: 0.068, x: 0, y: 0, scale: 1 }
              }
              animate={
                ambientDrift
                  ? {
                      x: [0, 20, -24, 14, 0],
                      y: [0, -14, 18, -10, 0],
                      scale: [1, 1.08, 1.05, 1.06, 1],
                      opacity: [0.068, 0.092, 0.075, 0.088, 0.068],
                    }
                  : ambientPulseOnly
                    ? { opacity: [0.06, 0.095, 0.07, 0.085, 0.06] }
                    : { opacity: 0.075 }
              }
              transition={
                ambientDrift
                  ? { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                  : ambientPulseOnly
                    ? { duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
                    : { duration: 0 }
              }
            />
            <motion.div
              className="will-change-[opacity,background-position] absolute inset-0 bg-repeat"
              style={{
                opacity: 0.055,
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
                backgroundSize: "140px 140px",
              }}
              initial={
                ambientPulseOnly
                  ? { opacity: 0.05, backgroundPosition: "0% 0%" }
                  : { opacity: 0.055, backgroundPosition: "0% 0%" }
              }
              animate={
                ambientDrift
                  ? {
                      opacity: [0.055, 0.085, 0.065, 0.078, 0.055],
                      backgroundPosition: ["0% 0%", "120% 90%", "20% 120%", "80% 40%", "0% 0%"],
                    }
                  : ambientPulseOnly
                    ? { opacity: [0.05, 0.08, 0.055, 0.07, 0.05] }
                    : { opacity: 0.065 }
              }
              transition={
                ambientDrift
                  ? { duration: 26, repeat: Infinity, ease: "easeInOut" }
                  : ambientPulseOnly
                    ? { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0 }
              }
            />
          </div>
          <div className="relative z-10 space-y-6 md:space-y-8">
            <p data-hero-reveal className="hero-eyebrow">
              <span className="hero-eyebrow-accent">SR PRODUCT DESIGNER · DESIGN × CODE × AI</span>
            </p>
            <h1 data-hero-reveal className="hero-display">
              <span className="block">Designed it.</span>
              <span className="block">Built it.</span>
              <span className="hero-display-highlight block">Shipped it.</span>
            </h1>
            <p data-hero-reveal className="hero-intro max-w-[56ch]">
              Hi, I'm Sam. I use AI across the full design process —
              research, prototyping, and production — to ship fast.
              Available for staff roles and freelance.
            </p>
            <div data-hero-reveal className="flex flex-col gap-y-[calc(1rem+25px)]">
              <div className="flex flex-wrap gap-2">
                {["FIGMA", "CLAUDE", "CURSOR", "V0", "FIRECRAWL", "VERCEL"].map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ y: -2, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 460, damping: 22 }}
                    className="hero-chip rounded border border-[#2e2e2e] px-2 py-1"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
              <motion.a
                className="hero-cta self-start"
                href="#work"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 480, damping: 26 }}
              >
                VIEW WORK ↓
              </motion.a>
            </div>
          </div>
          <div data-hero-reveal className="relative z-10 grid grid-cols-3 border border-[#1e1e1e]">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="border-r border-[#1e1e1e] px-3 py-3"
            >
              <p className="hero-stat-value">{stats.yearsExp}</p>
              <p className="hero-stat-label">years exp.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="border-r border-[#1e1e1e] px-3 py-3"
            >
              <p className="hero-stat-value">{stats.commits30d}</p>
              <p className="hero-stat-label">
                commits (30d)
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="px-3 py-3"
            >
              <p className="hero-stat-value">{stats.reposActive}</p>
              <p className="hero-stat-label">
                repos active
              </p>
            </motion.div>
          </div>
        </div>
        <div
          data-hero-right
          className={`hero-at-wide-right flex flex-col overflow-hidden transition-colors duration-500 ${isPanePulsing ? "bg-[#07100a]" : "bg-[#050505]"}`}
        >
          <div className="hero-at-wide-github hero-github hero-github-header flex items-center justify-between border-b border-[#0e0e0e] pb-4">
            <div className="flex items-center gap-2">
              <motion.span
                className="block h-2 w-2 rounded-full bg-[#22c55e]"
                animate={{ scale: [1, 1.25, 1], opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <span className="hero-github-live uppercase tracking-[0.12em]">LIVE</span>
              <span className="hero-github-dim">- github.com/samhavasdesign</span>
            </div>
            <span className="hero-github-clock">{clock}</span>
          </div>
          <div>
            {feedEvents.map((event, index) => (
              <div
                key={event.id}
                className={`hero-at-wide-github hero-github hero-github-row ${index >= 3 ? "hidden lg:grid" : "grid"} translate-y-0 grid-cols-[70px_78px_1fr] items-start gap-3 border-b border-[#0e0e0e] py-3 lg:py-5 xl:py-6 opacity-100 transition duration-300`}
              >
                <span>{toRelativeTime(event.created_at)}</span>
                <span className="hero-event-pill inline-flex w-fit rounded-full bg-[#090f09] px-2 py-[2px]">
                  {getTypeLabel(event.type)}
                </span>
                <div className="min-w-0">
                  <p className="hero-github-repo truncate">{event.repo?.name || "unknown/repo"}</p>
                  <p className="hero-github-msg truncate">{getEventMessage(event)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hero-at-wide-github hero-github hero-github-footer flex items-center justify-between border-t border-[#0e0e0e] py-4">
            <span>
                {feedEvents.length} events {didUseFallback ? "(fallback)" : ""}
            </span>
            <motion.button
              type="button"
              onClick={fetchEvents}
              disabled={isRefreshing}
              whileHover={isRefreshing ? undefined : { y: -2, scale: 1.03 }}
              whileTap={isRefreshing ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 500, damping: 28 }}
              className="hero-refresh transition duration-300"
            >
              {isRefreshing ? "refreshing..." : "refresh"}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
