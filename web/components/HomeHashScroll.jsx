"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHashTarget() {
  const id = window.location.hash.slice(1);
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Ensures in-app navigations to `/#section` land on the correct block (App Router + hash). */
export default function HomeHashScroll() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (pathname !== "/") return;
    scrollToHashTarget();
  }, [pathname]);

  useLayoutEffect(() => {
    if (pathname !== "/") return;
    window.addEventListener("hashchange", scrollToHashTarget);
    return () => window.removeEventListener("hashchange", scrollToHashTarget);
  }, [pathname]);

  return null;
}
