/**
 * Hero type scale — must match `app/globals.css` (`:root` variables `--hero-fs-*`
 * and classes `.hero-*`). Update both when changing sizes.
 */
export const hero = {
  eyebrow: "12px",
  /** Matches `.hero-display`: base + 2pt (see globals.css). */
  display: "calc(38px + 2pt)",
  displayMd: "calc(44px + 2pt)",
  intro: "15px",
  chip: "12px",
  cta: "13px",
  statValue: "22px",
  statLabel: "12px",
  github: "13px",
  eventPill: "12px",
} as const;
