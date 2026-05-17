// Shared primitive components for all case studies.
// Import what you need: import { Section, Title, P, ImgBlock, ... } from './CaseStudyShared';
import Image from 'next/image';

export function Section({ id, children }) {
  return (
    <section id={id} style={{ marginBottom: '96px' }}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }) {
  return (
    <div className="section-eyebrow" style={{ color: 'var(--c-purple)', marginBottom: '16px' }}>
      {children}
    </div>
  );
}

export function Title({ children }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-heading-2)',
      fontWeight: 400,
      color: 'var(--c-text)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      marginBottom: '32px',
      maxWidth: '680px',
    }}>
      {children}
    </h2>
  );
}

export function Sub({ children }) {
  return (
    <div className="section-eyebrow" style={{ color: 'var(--c-purple)', marginBottom: '12px' }}>
      {children}
    </div>
  );
}

export function P({ children }) {
  return (
    <p className="section-subtext" style={{ marginBottom: '24px' }}>
      {children}
    </p>
  );
}

export function TwoCol({ children }) {
  return (
    <div className="case-study-two-col">
      {children}
    </div>
  );
}

export function StatGrid({ items }) {
  return (
    <div className="case-study-stat-grid">
      {items.map(({ stat, label }) => (
        <div key={label} style={{ background: 'var(--c-bg-raised)', padding: '24px', border: '0.5px solid var(--c-border)' }}>
          <div className="card-metric-value" style={{ fontSize: 'var(--fs-heading-2)', color: 'var(--c-green)', marginBottom: '8px' }}>{stat}</div>
          <div className="card-metric-label">{label}</div>
        </div>
      ))}
    </div>
  );
}

export function KeyInsight({ quote, sub, eyebrow = 'Key insight', children }) {
  const rich = children != null && children !== false;
  return (
    <div style={{
      background: 'var(--c-bg-raised)',
      border: '0.5px solid var(--c-border)',
      padding: '32px',
      marginTop: '40px',
      marginBottom: '40px',
    }}>
      {eyebrow ? (
        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
          {eyebrow}
        </div>
      ) : null}
      {rich ? (
        <div className="key-insight-rich">
          {children}
        </div>
      ) : (
        <>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'var(--fs-heading-3)',
            color: 'var(--c-text)',
            lineHeight: 1.4,
            fontWeight: 400,
            margin: 0,
          }}>
            {quote}
          </p>
          {sub && (
            <p className="section-subtext" style={{ marginTop: '12px', marginBottom: 0 }}>
              {sub}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export function VersionLabel({ children, type }) {
  return (
    <div className="section-eyebrow" style={{
      color: type === 'fail' ? 'var(--c-error)' : 'var(--c-green)',
      marginBottom: '8px',
      marginTop: '32px',
    }}>
      {children}
    </div>
  );
}

export function ImgBlock({ id, label, caption, aspect = '16/9', cols = 1, src, srcs, fit = 'contain', fits, positions, position = 'center', hug = false, align = 'center', intrinsicWidth, intrinsicHeight, displayWidth, displayHeight, imageEyebrow, sizes = '(max-width: 768px) 100vw, 680px' }) {
  const isLeft = align === 'left';
  const hasFixedDisplaySize = hug && displayWidth != null && displayHeight != null;
  const items = Array.from({ length: cols });
  return (
    <div style={{ margin: '40px 0' }}>
      {imageEyebrow ? (
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-xs)',
            letterSpacing: 'var(--ls-wide)',
            color: 'var(--c-green)',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}
        >
          {imageEyebrow}
        </div>
      ) : null}
      <div className="case-study-img-grid" data-cols={cols}>
        {items.map((_, i) => (
          <div key={i} style={{
            aspectRatio: hug
              ? (intrinsicWidth && intrinsicHeight ? `${intrinsicWidth} / ${intrinsicHeight}` : undefined)
              : aspect,
            background: 'var(--c-bg-surface)',
            border: '0.5px solid var(--c-border-mid)',
            position: 'relative',
            overflow: 'hidden',
            ...(hug ? { display: 'flex', justifyContent: isLeft ? 'flex-start' : 'center' } : {}),
          }}>
            {(srcs?.[i] || src) ? (
              hug ? (
                <Image
                  src={srcs?.[i] || src}
                  alt={label}
                  width={intrinsicWidth}
                  height={intrinsicHeight}
                  unoptimized
                  decoding="async"
                  style={{
                    display: 'block',
                    maxWidth: '100%',
                    width: hasFixedDisplaySize ? displayWidth : 'auto',
                    height: hasFixedDisplaySize ? displayHeight : 'auto',
                    marginLeft: isLeft ? 0 : 'auto',
                    marginRight: isLeft ? 'auto' : 'auto',
                    background: 'var(--c-bg)',
                  }}
                />
              ) : (
                <Image
                  src={srcs?.[i] || src}
                  alt={label}
                  fill
                  unoptimized
                  sizes={sizes}
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    background: 'var(--c-bg)',
                    objectFit: fits?.[i] || fit,
                    objectPosition: positions?.[i] || position,
                  }}
                />
              )
            ) : (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                height: '100%',
                padding: '16px',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-xs)',
                  color: 'var(--c-green)',
                  letterSpacing: 'var(--ls-wide)',
                  background: 'var(--c-bg)',
                  border: '0.5px solid var(--c-green-border)',
                  padding: '2px 8px',
                }}>
                  IMG {id}{cols > 1 ? ` ${i + 1}/${cols}` : ''}
                </div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--c-border-bright)" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="0" />
                  <path d="M3 15l5-5 4 4 3-3 6 5" />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="var(--c-border-bright)" stroke="none" />
                </svg>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-xs)',
                  color: 'var(--c-border-bright)',
                  letterSpacing: 'var(--ls-wide)',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}>
                  {label}{cols > 1 ? ` ${i + 1}/${cols}` : ''}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-sm)',
          color: 'var(--c-text-3)',
          letterSpacing: 'var(--ls-tight)',
          marginTop: '10px',
          lineHeight: 'var(--lh-base)',
        }}>
          {caption}
        </p>
      )}
    </div>
  );
}
