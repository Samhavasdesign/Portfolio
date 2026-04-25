"use client";

import { useEffect, useRef } from "react";

/**
 * Full reload when the user returns to this tab after leaving it
 * (Page Visibility: hidden → visible). Also reloads on bfcache restore.
 */
export default function VisibilityReload() {
  const leftTabRef = useRef(false);

  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        leftTabRef.current = true;
      } else if (document.visibilityState === "visible" && leftTabRef.current) {
        window.location.reload();
      }
    };

    const onPageShow = (event) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", onPageShow);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return null;
}
