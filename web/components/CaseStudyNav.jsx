'use client';
import { useEffect, useState } from 'react';

export default function CaseStudyNav({ sections, readTime }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Keep section headers visible below sticky nav/chrome on both breakpoints.
    const stickyOffset = window.innerWidth >= 768 ? 96 : 132;
    const top = window.scrollY + el.getBoundingClientRect().top - stickyOffset;

    window.scrollTo({ top, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop sticky nav */}
      <nav
        className="hidden md:flex"
        style={{
          position: 'sticky',
          top: '80px',
          flexDirection: 'column',
          gap: '4px',
          width: '180px',
          flexShrink: 0,
        }}
      >
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-xs)',
          color: 'var(--c-border-bright)',
          letterSpacing: 'var(--ls-wide)',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          {readTime}
        </div>

        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-base)',
              color: activeSection === id ? 'var(--c-purple)' : 'var(--c-text-3)',
              background: 'none',
              border: 'none',
              borderLeft: `1.5px solid ${activeSection === id ? 'var(--c-purple)' : 'var(--c-border)'}`,
              cursor: 'pointer',
              textAlign: 'left',
              padding: '10px 0 10px 12px',
              letterSpacing: 'var(--ls-base)',
              transition: 'color var(--duration-base), border-color var(--duration-base)',
              minHeight: 'unset',
              minWidth: 'unset',
            }}
          >
            {label.toUpperCase()}
          </button>
        ))}

        <a
          href="/#work"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-sm)',
            color: 'var(--c-border-bright)',
            textDecoration: 'none',
            marginTop: '24px',
            letterSpacing: 'var(--ls-base)',
            transition: 'color var(--duration-base)',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--c-text-2)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--c-border-bright)'}
        >
          ← All work
        </a>
      </nav>

      {/* Mobile nav bar */}
      <div
        className="flex md:hidden"
        style={{
          position: 'sticky',
          top: '57px',
          background: 'rgba(10,10,10,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '0.5px solid var(--c-border)',
          zIndex: 50,
          padding: '12px var(--grid-margin)',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-sm)',
          color: 'var(--c-purple)',
          letterSpacing: 'var(--ls-wide)',
          textTransform: 'uppercase',
        }}>
          {sections.find(s => s.id === activeSection)?.label?.toUpperCase()}
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-sm)',
            color: 'var(--c-text-3)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: 'var(--ls-base)',
            minHeight: 'unset',
            minWidth: 'unset',
          }}
        >
          {mobileOpen ? 'CLOSE ×' : 'SECTIONS ↓'}
        </button>

        {mobileOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--c-bg)',
            borderBottom: '0.5px solid var(--c-border)',
            padding: '8px 0',
            zIndex: 50,
          }}>
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  display: 'block',
                  width: '100%',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-body)',
                  color: activeSection === id ? 'var(--c-purple)' : 'var(--c-text-2)',
                  background: 'none',
                  border: 'none',
                  borderBottom: '0.5px solid var(--c-border)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '16px var(--grid-margin)',
                  letterSpacing: 'var(--ls-base)',
                  minHeight: 'unset',
                  minWidth: 'unset',
                }}
              >
                {label.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
