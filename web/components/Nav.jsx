"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";

const NAV_LINKS = ["Work", "Lab", "Resume", "About"];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("scroll", close);
    window.addEventListener("hashchange", close);
    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("hashchange", close);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="nav-root" data-scrolled={isScrolled ? "true" : "false"}>
      <div className="nav-inner">
        <a href="/" className="inline-flex shrink-0 items-center" aria-label="Samantha Havas home">
          <img
            src="/samantha-havas-logo.png"
            alt="Samantha Havas logo"
            className="block h-9 w-auto max-w-[180px] object-contain object-left md:h-10 md:max-w-[220px]"
            decoding="async"
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((label, i) => (
            <span key={label} className="contents">
              {i > 0 && <span className="nav-separator" aria-hidden>·</span>}
              <a href={`#${label.toLowerCase()}`} className="nav-link">{label}</a>
            </span>
          ))}
        </div>

        <a href="#contact" className="nav-cta hidden md:inline-flex">
          {"Let's talk →"}
        </a>

        <button
          type="button"
          className="flex md:hidden items-center justify-center p-1"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--c-text)" }}
        >
          <MenuToggleIcon open={mobileOpen} className="size-6" duration={400} />
        </button>
      </div>

      <div
        className="nav-mobile-panel flex md:hidden"
        style={{
          maxHeight: mobileOpen ? "300px" : "0px",
          borderTop: mobileOpen ? "0.5px solid var(--c-border)" : "none",
        }}
      >
        {NAV_LINKS.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="nav-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </a>
        ))}
        <div className="nav-mobile-cta-wrap">
          <a href="#contact" className="nav-cta" onClick={() => setMobileOpen(false)}>
            {"Let's talk →"}
          </a>
        </div>
      </div>
    </nav>
  );
}
