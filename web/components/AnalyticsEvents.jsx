"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Site-wide click tracking for Vercel Web Analytics custom events.
 * One delegated listener, so individual components don't need instrumenting.
 * Never sends message text, emails, or other personal data.
 */
export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const toggle = target.closest(".chatbot-toggle");
      if (toggle) {
        track("chat_toggle");
        return;
      }

      const button = target.closest("button");
      if (button && /^let.s talk/i.test(button.textContent.trim())) {
        track("contact_open");
        return;
      }

      const link = target.closest("a[href]");
      if (!link) return;

      let url;
      try {
        url = new URL(link.getAttribute("href"), window.location.href);
      } catch {
        return;
      }

      if (url.protocol === "mailto:") {
        track("email_click");
      } else if (url.pathname.toLowerCase().endsWith(".pdf")) {
        track("resume_click");
      } else if (url.origin !== window.location.origin) {
        track("outbound_click", { host: url.hostname.replace(/^www\./, "") });
      } else if (url.pathname.startsWith("/work/")) {
        track("case_study_click", { slug: url.pathname.split("/")[2] });
      } else if (url.pathname.startsWith("/lab/")) {
        track("lab_click", { slug: url.pathname.split("/")[2] });
      } else if (url.hash) {
        track("nav_click", { target: url.hash.slice(1).toLowerCase() });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
