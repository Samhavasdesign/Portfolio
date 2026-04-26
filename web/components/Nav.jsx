"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import ContactModal from "@/components/ContactModal";

const NAV_LINKS = ["Work", "AI Lab", "Resume", "About"];
const RESUME_PATH = "/SamanthaHavas_SeniorProductDesigner_Resume.pdf";

function getNavLinkProps(label) {
  if (label === "Resume") {
    return {
      href: RESUME_PATH,
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }

  return { href: `#${label.toLowerCase()}` };
}

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
            className="block h-10 w-auto max-w-[200px] object-contain object-left md:h-11 md:max-w-[240px]"
            decoding="async"
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((label, i) => (
            <span key={label} className="contents">
              {i > 0 && <span className="nav-separator" aria-hidden>·</span>}
              <a {...getNavLinkProps(label)} className="nav-link">{label}</a>
            </span>
          ))}
        </div>

        <ContactModal triggerClassName="nav-cta hidden md:inline-flex" triggerLabel="Let's talk →" />

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
            {...getNavLinkProps(label)}
            className="nav-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </a>
        ))}
        <div className="nav-mobile-cta-wrap">
          <ContactModal
            triggerClassName="nav-cta"
            triggerLabel="Let's talk →"
            onOpen={() => setMobileOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
}
