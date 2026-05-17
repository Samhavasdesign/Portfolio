'use client';
import { useEffect, useState } from 'react';

export default function CaseStudyNav({ sections, readTime }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const activationOffset = window.innerWidth >= 768 ? 96 : 132;
      let current = sections[0]?.id;

      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= activationOffset) {
          current = id;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 48;
      if (atBottom) {
        current = sections[sections.length - 1]?.id ?? current;
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActiveSection(id);
    setMobileOpen(false);

    const content = document.querySelector('.case-study-content');
    const stickyOffset = window.innerWidth >= 768 ? 96 : 132;

    const measure = () => {
      const elementTop = el.getBoundingClientRect().top + window.scrollY;
      const targetTop = elementTop - stickyOffset;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      return { targetTop, maxScroll, deficit: targetTop - maxScroll };
    };

    let { targetTop, maxScroll, deficit } = measure();
    let paddingChanged = false;

    if (content && deficit > 0) {
      const current = parseFloat(content.style.paddingBottom) || 0;
      const needed = Math.ceil(deficit) + 80;
      if (needed > current) {
        content.style.paddingBottom = `${needed}px`;
        void content.offsetHeight;
        paddingChanged = true;
        ({ targetTop, maxScroll } = measure());
      }
    }

    const top = Math.min(Math.max(0, targetTop), maxScroll);

    if (paddingChanged) {
      window.scrollTo({ top, behavior: 'auto' });
      requestAnimationFrame(() => {
        const { targetTop: nextTop, maxScroll: nextMax } = measure();
        const corrected = Math.min(Math.max(0, nextTop), nextMax);
        if (Math.abs(corrected - window.scrollY) > 4) {
          window.scrollTo({ top: corrected, behavior: 'auto' });
        }
      });
      return;
    }

    window.scrollTo({ top, behavior: 'smooth' });

    // Correct for any layout shift that happened during scroll (e.g. images finishing load)
    setTimeout(() => {
      const { targetTop: correctedTop, maxScroll: correctedMax, deficit: correctedDeficit } = measure();
      if (content && correctedDeficit > 0) {
        const current = parseFloat(content.style.paddingBottom) || 0;
        const needed = Math.ceil(correctedDeficit) + 80;
        if (needed > current) {
          content.style.paddingBottom = `${needed}px`;
          void content.offsetHeight;
        }
      }
      const { targetTop: finalTop, maxScroll: finalMax } = measure();
      const corrected = Math.min(Math.max(0, finalTop), finalMax);
      if (Math.abs(corrected - window.scrollY) > 16) {
        window.scrollTo({ top: corrected, behavior: 'smooth' });
      }
    }, 650);
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
            {label}
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
          fontSize: 'var(--fs-body)',
          color: 'var(--c-purple)',
          letterSpacing: 'var(--ls-wide)',
        }}>
          {sections.find(s => s.id === activeSection)?.label}
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-body)',
            color: 'var(--c-text-3)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: 'var(--ls-base)',
            minHeight: 'unset',
            minWidth: 'unset',
          }}
        >
          {mobileOpen ? 'Close ×' : 'Sections ↓'}
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
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
