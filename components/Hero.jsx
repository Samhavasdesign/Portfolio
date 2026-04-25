import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const GITHUB_USERNAME = "samhavasdesign";
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
    payload: {
      size: 1,
      commits: [{ message: "Refine hero copy cadence and hierarchy" }],
    },
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
  } catch (error) {
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

    if (event.type === "WatchEvent") {
      return "Repository starred";
    }

    if (event.type === "ForkEvent") {
      return "Repository forked";
    }

    return "Activity updated";
  } catch (error) {
    return "Activity updated";
  }
}

function getTypeLabel(type) {
  try {
    return type.replace("Event", "");
  } catch (error) {
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

  const updateClock = useCallback(() => {
    try {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setClock(`${h}:${m}:${s}`);
    } catch (error) {
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

      if (filtered.length === 0) {
        throw new Error("No events returned");
      }

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
    } catch (error) {
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

      return {
        yearsExp: 10,
        commits30d,
        reposActive: repoSet.size,
      };
    } catch (error) {
      return {
        yearsExp: 10,
        commits30d: 0,
        reposActive: 0,
      };
    }
  }, [statsTimelineEvents]);

  useEffect(() => {
    try {
      updateClock();
      const timer = window.setInterval(updateClock, 1000);
      return () => window.clearInterval(timer);
    } catch (error) {
      return undefined;
    }
  }, [updateClock]);

  useEffect(() => {
    try {
      fetchEvents();
      const poller = window.setInterval(fetchEvents, 60000);
      return () => window.clearInterval(poller);
    } catch (error) {
      return undefined;
    }
  }, [fetchEvents]);

  return (
    <section className="bg-[#0a0a0a] text-[#e8e4dc] flex flex-col md:h-[calc(100vh-57px)] md:min-h-[600px] md:overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 md:flex-1 md:min-h-0">
        <div className="hero-at-wide-left flex h-full flex-col gap-y-[50px] max-md:justify-between md:justify-start md:gap-y-16 lg:gap-y-20 overflow-hidden border-b border-[#1e1e1e] px-5 py-6 sm:px-8 sm:py-8 md:border-b-0 md:border-r md:px-10 md:py-8 lg:px-12 lg:py-10">
          <div className="space-y-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#444440]">
              <span style={{ color: "#C586C0" }}>SR PRODUCT DESIGNER · DESIGN × CODE × AI</span>
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

            <div className="flex flex-col gap-y-[calc(1rem+25px)]">
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
                className="self-start inline-flex items-center gap-2 font-mono text-[11px] text-[#4ade80] tracking-[0.08em] no-underline border border-[#1a3d1a] px-4 py-2 transition-colors duration-200 hover:border-[#4ade80]"
                href="#work"
              >
                VIEW WORK ↓
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 border border-[#1e1e1e]">
            <div className="border-r border-[#1e1e1e] px-3 py-3">
              <p className="font-mono text-[18px] text-[#e8e4dc]">{stats.yearsExp}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#555550]">
                years exp.
              </p>
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
          className={`hero-at-wide-right flex max-h-[300px] flex-col md:max-h-none md:overflow-hidden transition-colors duration-500 ${
            isPanePulsing ? "bg-[#07100a]" : "bg-[#050505]"
          }`}
        >
          <div className="hero-at-wide-github flex items-center justify-between border-b border-[#0e0e0e] px-5 py-4 sm:px-8 md:px-10 lg:px-12 font-mono text-[11px] text-[#9a9a9a]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="uppercase tracking-[0.12em] text-[#22c55e]">LIVE</span>
              <span className="text-[#6b6b6b]">- github.com/samhavasdesign</span>
            </div>
            <span className="text-[#7c7c7c]">{clock}</span>
          </div>

          <div className="flex-1 overflow-y-auto min-h-0">
            {feedEvents.map((event) => (
              <div
                key={event.id}
                className="hero-at-wide-github grid grid-cols-[70px_78px_1fr] items-start gap-3 border-b border-[#0e0e0e] px-5 py-3 sm:px-8 md:px-10 lg:px-12 font-mono text-[11px] text-[#7a7a7a] opacity-100 translate-y-0 transition duration-300"
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

          <div className="hero-at-wide-github flex items-center justify-between border-t border-[#0e0e0e] px-5 py-4 sm:px-8 md:px-10 lg:px-12 font-mono text-[11px] text-[#666666]">
            <span>
              {feedEvents.length} events {didUseFallback ? "(fallback)" : ""}
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
