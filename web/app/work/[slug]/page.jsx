'use client';
import { use } from 'react';
import Nav from '@/components/Nav';
import CaseStudyNav from '@/components/CaseStudyNav';
import { caseStudies } from '@/lib/work';
import { Section, Eyebrow, Title, P, ImgBlock } from '@/components/case-studies/CaseStudyShared';
import Sesame from '@/components/case-studies/Sesame';
import Homer from '@/components/case-studies/Homer';

// Register case study components here. Slugs not listed fall back to the placeholder.
const REGISTRY = {
  sesame: Sesame,
  homer: Homer,
};

export default function CaseStudyPage({ params }) {
  const { slug } = use(params);
  const study = caseStudies.find(cs => cs.slug === slug);

  if (!study) return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-text-3)' }}>Case study not found</span>
    </div>
  );

  const Content = REGISTRY[study.slug];

  const metaItems = study.metaItems ?? [
    { label: 'Company', value: study.company },
    { label: 'Role', value: study.role },
    { label: 'Year', value: study.year },
  ];

  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh', color: 'var(--c-text)' }}>
      <Nav />

      {/* ── Hero header ─────────────────────────────────────────── */}
      <div style={{
        borderBottom: '0.5px solid var(--c-border)',
        padding: 'calc(var(--section-pad-y) + 57px) var(--grid-margin) var(--section-pad-y)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div className="section-eyebrow" style={{ color: 'var(--c-purple)', marginBottom: '20px' }}>
          {study.heroEyebrow ?? 'Case study'}
        </div>

        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(28px, 4vw, 56px)',
          fontWeight: 400,
          color: 'var(--c-text)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          maxWidth: '800px',
          marginBottom: '40px',
        }}>
          {study.headline ?? study.summary}
        </h1>

        <div className="case-study-meta-strip">
          {metaItems.map(({ label, value }) => (
            <div key={label}>
              <div className="section-eyebrow" style={{ marginBottom: '6px' }}>{label}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-card-title)', color: 'var(--c-text)' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-bleed hero image */}
      {study.heroImage ? (
        <div style={{ width: '100%', aspectRatio: '21/9', borderBottom: '0.5px solid var(--c-border)', overflow: 'hidden' }}>
          <img
            src={study.heroImage}
            alt={study.heroAlt ?? ''}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      ) : (
        <div style={{ width: '100%', aspectRatio: '21/9', background: 'var(--c-bg-raised)', borderBottom: '0.5px solid var(--c-border)' }} />
      )}

      {/* ── Content area ────────────────────────────────────────── */}
      <div className="case-study-layout">
        <CaseStudyNav sections={study.sections} readTime={study.readTime} />

        <div className="case-study-content">
          {Content ? (
            <Content study={study} />
          ) : (
            study.sections.map(({ id, label }) => (
              <Section key={id} id={id}>
                <Eyebrow>{label}</Eyebrow>
                <Title>{label} — coming soon</Title>
                <P>This case study is currently being written. Check back soon.</P>
                <ImgBlock id="01" label={`${label} — placeholder`} caption="Replace with actual content." />
              </Section>
            ))
          )}

          {/* ── Next / back CTA ──────────────────────────────────── */}
          <div style={{
            borderTop: '0.5px solid var(--c-border)',
            paddingTop: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '32px',
          }}>
            <a href="/#work" className="nav-link" style={{ fontSize: 'var(--fs-base)' }}>
              ← All work
            </a>
            {(() => {
              const idx = caseStudies.findIndex(cs => cs.slug === study.slug);
              const next = caseStudies[(idx + 1) % caseStudies.length];
              return (
                <a href={`/work/${next.slug}`} className="nav-cta">
                  Next: {next.company} →
                </a>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}
