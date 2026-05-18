'use client';
import { use } from 'react';
import Nav from '@/components/Nav';
import CaseStudyNav from '@/components/CaseStudyNav';
import { caseStudies } from '@/lib/work';
import Image from 'next/image';
import { Section, Eyebrow, Title, P, ImgBlock } from '@/components/case-studies/CaseStudyShared';
import Sesame from '@/components/case-studies/Sesame';
import Homer from '@/components/case-studies/Homer';
import AngiSlab from '@/components/case-studies/AngiSlab';
import AngiUgc from '@/components/case-studies/AngiUgc';
import AngiSem from '@/components/case-studies/AngiSem';
import HomerWebsite from '@/components/case-studies/HomerWebsite';

// Register case study components here. Slugs not listed fall back to the placeholder.
const REGISTRY = {
  angislab: AngiSlab,
  angisem: AngiSem,
  angiugc: AngiUgc,
  homerwebsite: HomerWebsite,
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

        {study.slug === 'angisem' && (
          <div style={{ marginTop: '48px' }}>
            <div className="section-eyebrow" style={{ marginBottom: '24px' }}>At a glance</div>
            <div className="case-study-meta-strip" style={{ paddingTop: 0, borderTop: 'none' }}>
              <div>
                <div className="section-eyebrow" style={{ marginBottom: '6px' }}>Scope</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-card-title)', color: 'var(--c-text)' }}>
                  SEM landing experience redesign + experimentation strategy
                </div>
              </div>
              <div>
                <div className="section-eyebrow" style={{ marginBottom: '6px' }}>Impact</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-card-title)', color: 'var(--c-text)' }}>
                  26.9% reduction in bounce rate
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-card-title)', color: 'var(--c-text)' }}>
                  62.6% CTR on engagement modules
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-card-title)', color: 'var(--c-text)' }}>
                  5M+ annual users impacted
                </div>
              </div>
              <div>
                <div className="section-eyebrow" style={{ marginBottom: '6px' }}>Team</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-card-title)', color: 'var(--c-text)' }}>
                  PM, UX Research, Content Strategy, Engineering
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Full-bleed hero image */}
      {study.heroImage ? (
        <div
          className={[
            'case-study-hero',
            study.slug === 'homerwebsite' && 'case-study-hero--homerwebsite',
            study.slug === 'homerwebsite' && 'case-study-hero--contain',
            (study.slug === 'homer' || study.slug === 'angislab') && 'case-study-hero--top',
          ].filter(Boolean).join(' ')}
        >
          <div className="case-study-hero__media">
            <Image
              key={study.heroImage}
              src={study.heroImage}
              alt={study.heroAlt ?? ''}
              fill
              sizes="100vw"
              quality={90}
              priority
              className="case-study-hero__image"
            />
          </div>
          {study.heroInProgress && (
            <div className="case-study-hero-overlay" role="status">
              <p className="case-study-hero-overlay__message">
                Case study in progress — full visuals coming soon
              </p>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            aspectRatio: study.slug === 'homerwebsite' ? '7685 / 5115' : '21 / 9',
            background: 'var(--c-bg-raised)',
            borderBottom: '0.5px solid var(--c-border)',
          }}
        />
      )}

      {/* ── Content area ────────────────────────────────────────── */}
      <div className={`case-study-layout${study.slug === 'homer' ? ' case-study-layout--homer-tight' : ''}`}>
        <CaseStudyNav sections={study.sections} readTime={study.readTime} />

        <div className={`case-study-content${study.slug === 'homer' ? ' case-study-content--homer-tight' : ''}`}>
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
