"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setMobileOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onHash = () => setMobileOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        borderBottom: "0.5px solid #1a1a1a",
        background: isScrolled ? "rgba(10, 10, 10, 0.85)" : "#0a0a0a",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          className="whitespace-nowrap"
          style={{
            fontFamily: "monospace",
            fontSize: "12px",
            fontWeight: "500",
            color: "#e8e4dc",
            letterSpacing: "0.14em",
            flexShrink: 0,
          }}
        >
          SAMANTHA HAVAS
        </span>

        <div className="hidden md:flex gap-6" style={{ alignItems: "center" }}>
          <a
            href="#work"
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#888880",
              letterSpacing: "0.08em",
              textDecoration: "none",
              paddingBottom: "2px",
              borderBottom: "0.5px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#c7a0df";
              e.currentTarget.style.borderBottomColor = "#c7a0df";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#888880";
              e.currentTarget.style.borderBottomColor = "transparent";
            }}
          >
            Work
          </a>
          <span style={{ color: "#222", fontFamily: "monospace", fontSize: "11px" }}>·</span>
          <a
            href="#lab"
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#888880",
              letterSpacing: "0.08em",
              textDecoration: "none",
              paddingBottom: "2px",
              borderBottom: "0.5px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#c7a0df";
              e.currentTarget.style.borderBottomColor = "#c7a0df";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#888880";
              e.currentTarget.style.borderBottomColor = "transparent";
            }}
          >
            Lab
          </a>
          <span style={{ color: "#222", fontFamily: "monospace", fontSize: "11px" }}>·</span>
          <a
            href="#resume"
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#888880",
              letterSpacing: "0.08em",
              textDecoration: "none",
              paddingBottom: "2px",
              borderBottom: "0.5px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#c7a0df";
              e.currentTarget.style.borderBottomColor = "#c7a0df";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#888880";
              e.currentTarget.style.borderBottomColor = "transparent";
            }}
          >
            Resume
          </a>
          <span style={{ color: "#222", fontFamily: "monospace", fontSize: "11px" }}>·</span>
          <a
            href="#about"
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#888880",
              letterSpacing: "0.08em",
              textDecoration: "none",
              paddingBottom: "2px",
              borderBottom: "0.5px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#c7a0df";
              e.currentTarget.style.borderBottomColor = "#c7a0df";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#888880";
              e.currentTarget.style.borderBottomColor = "transparent";
            }}
          >
            About
          </a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex"
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            color: "#4ade80",
            border: "0.5px solid #1a3d1a",
            padding: "6px 14px",
            textDecoration: "none",
            transition: "border-color 0.2s",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#4ade80";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#1a3d1a";
          }}
        >
          {"Let's talk →"}
        </a>

        <button
          type="button"
          className="flex md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#e8e4dc",
            padding: "4px",
          }}
        >
          <MenuToggleIcon open={mobileOpen} className="size-6" duration={400} />
        </button>
      </div>

      <div
        className="flex md:hidden"
        style={{
          flexDirection: "column",
          overflow: "hidden",
          maxHeight: mobileOpen ? "300px" : "0px",
          transition: "max-height 0.4s ease",
          borderTop: mobileOpen ? "0.5px solid #1a1a1a" : "none",
        }}
      >
        {["Work", "Lab", "Resume", "About"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "monospace",
              fontSize: "13px",
              color: "#888880",
              letterSpacing: "0.08em",
              textDecoration: "none",
              padding: "14px 40px",
              borderBottom: "0.5px solid #1a1a1a",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#c7a0df";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#888880";
            }}
          >
            {link}
          </a>
        ))}
        <div style={{ padding: "16px 40px" }}>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#4ade80",
              border: "0.5px solid #1a3d1a",
              padding: "8px 16px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {"Let's talk →"}
          </a>
        </div>
      </div>
    </nav>
  );
}
