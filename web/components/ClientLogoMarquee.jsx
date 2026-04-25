/**
 * Placeholder “logos” for marquee testing — light marks on transparent SVGs.
 * Replace the two `DummyLogoStrip` instances with your real logo row when ready.
 */

function DummyLogoStrip() {
  const common = "h-7 w-auto shrink-0 text-[rgba(232,228,220,0.78)] md:h-8";

  return (
    <div className="client-logo-marquee-set flex items-center">
      <svg viewBox="0 0 100 28" className={common} aria-hidden>
        <circle cx="14" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="14" r="9" fill="currentColor" opacity="0.35" />
        <path d="M78 6h16v16H78z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      <svg viewBox="0 0 110 28" className={common} aria-hidden>
        <path d="M6 22L22 6l10 10 14-14 16 20H6z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      <svg viewBox="0 0 96 28" className={common} aria-hidden>
        <rect x="6" y="6" width="28" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="44" y="8" width="46" height="12" rx="1" fill="currentColor" opacity="0.25" />
      </svg>

      <svg viewBox="0 0 88 28" className={common} aria-hidden>
        <path
          d="M44 5L8 23h72L44 5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="miter"
        />
      </svg>

      <svg viewBox="0 0 104 28" className={common} aria-hidden>
        <circle cx="20" cy="14" r="4" fill="currentColor" />
        <circle cx="52" cy="14" r="4" fill="currentColor" />
        <circle cx="84" cy="14" r="4" fill="currentColor" />
        <path d="M20 20h64" stroke="currentColor" strokeWidth="2" />
      </svg>

      <svg viewBox="0 0 92 28" className={common} aria-hidden>
        <text
          x="6"
          y="19"
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
          fontSize="13"
          letterSpacing="0.35em"
        >
          LOGO
        </text>
      </svg>

      <svg viewBox="0 0 90 28" className={common} aria-hidden>
        <path
          d="M14 22V6M14 14h22M36 6v16M54 6l10 16 10-16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>

      <svg viewBox="0 0 98 28" className={common} aria-hidden>
        <rect x="8" y="8" width="12" height="12" fill="currentColor" opacity="0.9" />
        <rect x="26" y="8" width="12" height="12" fill="currentColor" opacity="0.45" />
        <rect x="44" y="8" width="12" height="12" fill="currentColor" opacity="0.65" />
        <rect x="62" y="8" width="12" height="12" fill="currentColor" opacity="0.3" />
      </svg>
    </div>
  );
}

export default function ClientLogoMarquee() {
  return (
    <section className="client-logo-marquee" aria-label="Client logos (placeholder marks for testing)">
      <div className="client-logo-marquee-inner">
        <div className="client-logo-marquee-track" aria-hidden="true">
          <DummyLogoStrip />
          <DummyLogoStrip />
        </div>
      </div>
    </section>
  );
}
