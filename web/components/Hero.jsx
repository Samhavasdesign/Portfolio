"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const GITHUB_EVENTS_ENDPOINT =
  "https://api.github.com/users/samhavasdesign/events/public?per_page=20";

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
    payload: { commits: [{ message: "Refine hero copy cadence and hierarchy" }] },
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
      const commitCount = event.payload?.commits?.length ?? 0;
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

export default function Hero() {
  const [events, setEvents] = useState(FALLBACK_EVENTS);
  const [clock, setClock] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [didUseFallback, setDidUseFallback] = useState(true);
  const [isPanePulsing, setIsPanePulsing] = useState(false);
  const previousTopEventId = useRef(FALLBACK_EVENTS[0]?.id || null);

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
      const response = await fetch(GITHUB_EVENTS_ENDPOINT, {
        method: "GET",
        headers,
        cache: "no-store",
      });
      if (!response.ok) throw new Error(`GitHub response ${response.status}`);

      const raw = await response.json();
      const filtered = Array.isArray(raw)
        ? raw.filter((item) => ALLOWED_EVENT_TYPES.has(item?.type))
        : [];
      if (filtered.length === 0) throw new Error("No events returned");

      const nextTopId = filtered[0]?.id || null;
      if (previousTopEventId.current && nextTopId !== previousTopEventId.current) {
        setIsPanePulsing(true);
        window.setTimeout(() => setIsPanePulsing(false), 500);
      }
      previousTopEventId.current = nextTopId;

      setEvents(filtered);
      setDidUseFallback(false);
    } catch {
      setEvents(FALLBACK_EVENTS);
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
      for (const event of events) {
        repoSet.add(event?.repo?.name || "unknown/repo");
        const eventDate = new Date(event?.created_at).getTime();
        if (!Number.isNaN(eventDate) && eventDate >= thirtyDaysAgo && event?.type === "PushEvent") {
          commits30d += event?.payload?.commits?.length ?? 0;
        }
      }
      return { yearsExp: 10, commits30d, reposActive: repoSet.size };
    } catch {
      return { yearsExp: 10, commits30d: 0, reposActive: 0 };
    }
  }, [events]);

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

  return (
    <section
      className="bg-[#0a0a0a] text-[#e8e4dc]"
      style={{ height: "calc(100vh - 57px)", minHeight: "600px", overflow: "hidden" }}
    >
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <div className="relative flex h-full flex-col justify-between overflow-hidden border-b border-[#1e1e1e] px-10 py-6 md:py-8 md:border-b-0 md:border-r">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-24 -top-28 h-[360px] w-[360px] rounded-full bg-[#c58ad6] opacity-[0.08] blur-[90px]" />
            <div className="absolute right-[-90px] top-[18%] h-[320px] w-[320px] rounded-full bg-[#6f8dff] opacity-[0.06] blur-[95px]" />
            <div className="absolute left-[20%] bottom-[-120px] h-[340px] w-[340px] rounded-full bg-[#ef8bc8] opacity-[0.05] blur-[100px]" />
            <div className="absolute right-[12%] bottom-[10%] h-[260px] w-[260px] rounded-full bg-[#4bc0bc] opacity-[0.05] blur-[90px]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
                backgroundSize: "140px 140px",
              }}
            />
          </div>
          <div className="relative z-10 space-y-6 md:space-y-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#444440]">
              <span style={{ color: "#ddb1e6" }}>SR PRODUCT DESIGNER · 10 YEARS · </span>
              <span style={{ color: "#ddb1e6" }}>DESIGN × CODE × AI</span>
            </p>
            <h1 className="font-[Georgia,serif] text-[34px] font-normal leading-[1.02] tracking-[-0.01em] text-[#e8e4dc] md:text-[40px]">
              <span className="block">Designed it.</span>
              <span className="block">Built it.</span>
              <span className="block text-[#f0ece4]">Shipped it.</span>
            </h1>
            <p className="max-w-[56ch] font-mono text-[13px] leading-relaxed text-[#888880]">
              Hi, I'm Sam. I use AI across the full design process —
              research, prototyping, and production — to ship fast.
              Available for staff roles and freelance.
            </p>
            <div className="flex flex-wrap gap-2">
              {["FIGMA", "CLAUDE", "CURSOR", "V0", "FIRECRAWL", "VERCEL"].map((tool) => (
                <span
                  key={tool}
                  className="rounded border border-[#2e2e2e] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#666660]"
                >
                  {tool}
                </span>
              ))}
            </div>
            <a
              className="mt-4 md:mt-8"
              href="#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "monospace",
                fontSize: "11px",
                color: "#4ade80",
                letterSpacing: "0.08em",
                textDecoration: "none",
                border: "0.5px solid #1a3d1a",
                padding: "8px 16px",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#4ade80";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1a3d1a";
              }}
            >
              VIEW WORK ↓
            </a>
          </div>
          <div className="relative z-10 grid grid-cols-3 border border-[#1e1e1e]">
            <div className="border-r border-[#1e1e1e] px-3 py-3">
              <p className="font-mono text-[18px] text-[#e8e4dc]">{stats.yearsExp}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#555550]">years exp.</p>
            </div>
            <div className="border-r border-[#1e1e1e] px-3 py-3">
              <p className="font-mono text-[18px] text-[#e8e4dc]">{stats.commits30d}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#555550]">
                commits (30d)
              </p>
            </div>
            <div className="px-3 py-3">
              <p className="font-mono text-[18px] text-[#e8e4dc]">{stats.reposActive}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#555550]">
                repos active
              </p>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col overflow-hidden transition-colors duration-500 ${isPanePulsing ? "bg-[#07100a]" : "bg-[#050505]"}`}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div className="flex items-center justify-between border-b border-[#0e0e0e] px-10 py-4 font-mono text-[11px] text-[#9a9a9a]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
              <span className="uppercase tracking-[0.12em] text-[#22c55e]">LIVE</span>
              <span className="text-[#6b6b6b]">- github.com/samhavasdesign</span>
            </div>
            <span className="text-[#7c7c7c]">{clock}</span>
          </div>
          <div>
            {events.map((event) => (
              <div
                key={event.id}
                className="grid translate-y-0 grid-cols-[70px_78px_1fr] items-start gap-3 border-b border-[#0e0e0e] px-10 py-3 font-mono text-[11px] text-[#7a7a7a] opacity-100 transition duration-300"
              >
                <span>{toRelativeTime(event.created_at)}</span>
                <span className="inline-flex w-fit rounded-full bg-[#090f09] px-2 py-[2px] text-[10px] uppercase tracking-[0.1em] text-[#1a3d1a]">
                  {getTypeLabel(event.type)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[#bdbdbd]">{event.repo?.name || "unknown/repo"}</p>
                  <p className="truncate text-[#606060]">{getEventMessage(event)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-[#0e0e0e] px-10 py-4 font-mono text-[11px] text-[#666666]">
            <span>
              {events.length} events {didUseFallback ? "(fallback)" : ""}
            </span>
            <button
              type="button"
              onClick={fetchEvents}
              disabled={isRefreshing}
              className="rounded border border-[#1e1e1e] px-2 py-1 uppercase tracking-[0.1em] text-[#8a8a8a] transition duration-300 hover:translate-y-[1px] hover:text-[#c2c2c2] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isRefreshing ? "refreshing..." : "refresh"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
