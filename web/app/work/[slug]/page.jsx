'use client';
import { use } from 'react';
import Nav from '@/components/Nav';
import CaseStudyNav from '@/components/CaseStudyNav';
import { caseStudies } from '@/lib/work';

export default function CaseStudyPage({ params }) {
  const { slug } = use(params);
  const study = caseStudies.find(cs => cs.slug === slug);

  if (!study) return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-text-3)' }}>Case study not found</span>
    </div>
  );

  const isSesame = study.slug === 'sesame';
  const isHomer = study.slug === 'homer';

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
          Case study · IOS & ANDROID APP
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
          {isSesame
            ? 'Redesigning how children ages 2–6 learn to feel, connect, and grow.'
            : isHomer
            ? 'Redesigning how children ages 2–6 learn, play, and grow.'
            : study.summary}
        </h1>

        {/* Meta strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, auto)',
          gap: '48px',
          paddingTop: '32px',
          borderTop: '0.5px solid var(--c-border)',
          width: 'fit-content',
        }}>
          {(isSesame
            ? [
                { label: 'Company', value: 'Homer × Sesame Workshop' },
                { label: 'Role', value: 'Lead Product Designer' },
                { label: 'Timeline', value: '6 months · 2021' },
                { label: 'Platform', value: 'iOS · Android · Web' },
              ]
            : [
                { label: 'Company', value: study.company },
                { label: 'Role', value: study.role },
                { label: 'Year', value: study.year },
              ]
          ).map(({ label, value }) => (
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
      {isSesame ? (
        <div
          style={{
            width: '100%',
            aspectRatio: '21/9',
            borderBottom: '0.5px solid var(--c-border)',
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/work/sesame-hero.jpg"
            alt="Parent and child using tablet for learning"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      ) : (
        <div style={{ width: '100%', aspectRatio: '21/9', background: 'var(--c-bg-raised)', borderBottom: '0.5px solid var(--c-border)' }} />
      )}

      {/* ── Content area ────────────────────────────────────────── */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--grid-margin)',
        display: 'flex',
        gap: '80px',
        alignItems: 'flex-start',
      }}>
        <CaseStudyNav sections={study.sections} readTime={study.readTime} />

        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* ── SESAME ──────────────────────────────────────────── */}
          {isSesame && (
            <>
              <Section id="overview">
                <Eyebrow>Overview</Eyebrow>
                <Title>A social-emotional learning app for children ages 2–6, built in partnership with Sesame Workshop. Homer had the platform. I had 6 months to make it real.</Title>

                <TwoCol>
                  <div>
                    <Sub>The context</Sub>
                    <P>HOMER partnered with Sesame Workshop during the pandemic to build a new social-emotional learning app from scratch — helping children who lacked in-person socialization learn to identify emotions, manage feelings, and navigate peer relationships alongside their Sesame Street friends.</P>
                    <P>To accelerate development, we reused structural components from the HOMER Learn & Grow app I had worked on previously. That foundation shaped everything — and constrained some things too.</P>
                  </div>
                  <div>
                    <Sub>My role</Sub>
                    <P>I was appointed lead designer for the project, working under a design manager with a cross-functional team spanning product, curriculum, engineering, and outside illustration vendors. I also collaborated directly with the Sesame Street stakeholder team — navigating a complex approval process across two organizations with different priorities and design sensibilities.</P>
                  </div>
                </TwoCol>

              </Section>

              <div style={{
                marginBottom: '64px',
                borderBottom: '0.5px solid var(--c-border)',
                paddingBottom: '64px',
              }}>
                <div style={{
                  width: '100%',
                  border: '0.5px solid var(--c-border-mid)',
                  background: 'var(--c-bg-surface)',
                  overflow: 'hidden',
                }}>
                  <img
                    src="/images/work/sesame-research-intro.jpg"
                    alt="Parent and child using a tablet together on the floor"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>

              <Section id="research">
                <Eyebrow>Research</Eyebrow>
                <Title>We spent a week in a design sprint before touching a single screen. It was the right call.</Title>

                <P>Before the project kicked off, I researched around 20 apps in the SEL, wellness, and education space to map the competitive landscape. Most were either too adult-directed, too gamified, or too content-heavy for very young children.</P>

                <ImgBlock id="03" label="Competitive analysis grid — 20 apps across SEL, wellness, education" caption="Page 2 — the full competitive analysis grid showing competitor apps analyzed across main menu, search, sub-menu, content, and activity screens." src="/images/work/sesame-img-03.jpg" />

                <P>To align both organizations, the HOMER team ran a week-long design sprint with around 20 participants from Homer and Sesame — covering business strategy, curriculum goals, and product design. I helped plan and facilitate alongside the Director of Product and Design Manager.</P>

                <P>After the sprint, I built out user personas for both children and their parents and caregivers — since the app had to work for both simultaneously.</P>

                <ImgBlock id="06" label="User personas — Kelly (Mom), Sasha (Teacher), Jackson (Child), Sophie (Child)" caption="Page 3 middle — four detailed persona cards. Show in a 2×2 grid." cols={2} aspect="4/3" srcs={['/images/work/sesame-img-06-02.jpg', '/images/work/sesame-img-06-01.jpg']} />

                <KeyInsight
                  quote="Children ages 2–4 cannot read category labels. Any navigation system that relied on text was silently failing our youngest users."
                  sub="This single finding shaped every design decision that followed."
                />
              </Section>

              <Section id="objectives">
                <Eyebrow>Objectives</Eyebrow>
                <Title>Three goals. Each tied to something measurable.</Title>

                {[
                  {
                    num: '01',
                    title: 'Make content discovery work without reading',
                    body: "The app had 1,000+ pieces of content. Kids couldn't find anything — not because there was too little, but because the navigation assumed literacy. We needed a system that worked for a 2-year-old navigating alone.",
                    img: null,
                  },
                  {
                    num: '02',
                    title: 'Build an "Our Neighborhood" world that felt alive',
                    body: "We tested multiple art styles and app store prototypes with real children and parents before locking a direction. The winning concept used Sesame Street's iconic locations as navigation hubs — giving children a spatial, character-led mental model instead of a category list.",
                    img: null,
                  },
                  {
                    num: '03',
                    title: 'Design for sequential content consumption',
                    body: "Sesame Workshop decided mid-project that each location would represent a specific SEL theme — the Playground for Kindness and Empathy, the School for Navigating Social Spaces — with content experienced in a specific order. This changed the navigation problem entirely and required a full redesign of the submenu system.",
                    img: null,
                  },
                ].map(({ num, title, body, img }) => (
                  <div key={num} style={{ padding: '40px 0', borderBottom: '0.5px solid var(--c-border)' }}>
                    <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '12px' }}>
                      Objective {num}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-heading-3)', fontWeight: 400, color: 'var(--c-text)', marginBottom: '20px', letterSpacing: '-0.01em' }}>
                      {title}
                    </h3>
                    <P>{body}</P>
                    {img && <ImgBlock id={img.id} label={img.label} caption={img.caption} cols={img.cols} aspect={img.aspect} src={img.src} hug={img.hug} />}
                  </div>
                ))}
              </Section>

              <Section id="solution">
                <Eyebrow>Solution</Eyebrow>
                <Title>A location-based main menu, icon-only navigation, and a content flow system that guided children without them knowing they were being guided.</Title>

                <P>The main menu became a richly illustrated neighborhood map — each building representing a content theme. Children navigated by tapping locations, not reading labels. Characters were placed throughout to draw attention and signal interactivity.</P>

                <ImgBlock id="10" label="Final main menu design — Our Neighborhood illustrated map" caption="Page 4 right — the final illustrated neighborhood scene as the primary navigation system." aspect="16/10" src="/images/work/sesame-img-10.jpg" fit="cover" />

                <P>The submenu system went through two full redesigns. The first version used illustrated background scenes with tappable characters — children froze, confused about whether the background was a video. We scrapped it entirely.</P>

                <VersionLabel type="fail">Version 1 — failed in prototype testing</VersionLabel>
                <ImgBlock id="12" label="First submenu iteration — illustrated backgrounds (killed)" caption="Page 5 middle — six location submenu screens from the first version. Children confused interactive elements with video." cols={3} srcs={['/images/work/sesame-img-12-01.jpg', '/images/work/sesame-img-12-02.jpg', '/images/work/sesame-img-12-03.jpg']} />

                <P>The second version used a minimalist monochrome background to separate it visually from the main menu, with horizontally scrolling content buttons featuring icons and titles for parent legibility.</P>

                <VersionLabel type="success">Version 2 — shipped</VersionLabel>
                <ImgBlock id="13" label="Before/after submenu redesign" caption="Pages 5–6 — before showing the cluttered illustrated submenu, after showing the clean monochrome version." cols={3} srcs={['/images/work/sesame-img-13-01.jpg', '/images/work/sesame-img-13-02.jpg', '/images/work/sesame-img-13-03.jpg']} />

                <ImgBlock id="16" label="Sequential content flow model" caption="Content flow from unit menu through connective tissue and payoff screens." cols={1} aspect="4/3" src="/images/work/sesame-objective-03.jpg" hug={true} />
                <P>Navigation between content pieces used an autoplay system with gentle nudges, payoff moments, and connective menus — guiding children through a themed sequence without requiring decisions at every step.</P>
              </Section>

              <Section id="process">
                <Eyebrow>Process</Eyebrow>
                <Title>The hardest part wasn't the design. It was advocating for the user inside a stakeholder structure that wasn't built for it.</Title>

                <TwoCol>
                  <div>
                    <Sub>The stakeholder challenge</Sub>
                    <P>The Sesame Street team required sign-off on every aspect of the app. They were primarily accustomed to designing for older audiences and sometimes made assumptions about 2–6 year olds that didn't hold up in testing. Branding consistently took priority over usability, which created recurring tension.</P>
                  </div>
                  <div>
                    <Sub>The mid-project pivot</Sub>
                    <P>The most significant challenge came midway through: Sesame changed the content architecture entirely, moving from random assortments to themed content units per location. This invalidated the submenu designs we'd already built. Because engineering hadn't started on the wireframes yet, we were able to pivot — but it compressed the timeline significantly.</P>
                  </div>
                </TwoCol>

              </Section>

              <Section id="outcome">
                <Eyebrow>Outcome</Eyebrow>
                <Title>The app launched on time for Q4. It reached millions of children.</Title>

                <P>The Learn with Sesame Street app shipped on schedule with a multi-layered neighborhood navigation system, themed content units across five SEL domains, and a content flow designed to guide children through structured emotional learning sequences.</P>

                <P>The location-based navigation tested well with children — they understood the spatial model quickly and could find their way back to favorite content. The submenu redesign, though visually imperfect in one respect, performed better in usability testing than the original illustrated version.</P>

                <ImgBlock id="19" label="Final product — app demo video (1:25)" caption="Page 7 — the full app demo video. Embed as click-to-play. This is the strongest single artifact — the product working." />
              </Section>

              <Section id="reflection">
                <Eyebrow>Reflection</Eyebrow>
                <Title>What I'd do differently, and what I'd protect.</Title>

                <TwoCol>
                  <div>
                    <Sub>What I'd do differently</Sub>
                    <P>Push for clearer stakeholder alignment at the start — specifically around who has final design authority when brand and UX decisions conflict. Advocate for more testing with children under 3, where our signal was weakest. Document the information architecture in writing before any design begins, so a mid-project pivot has a cleaner path to resolution.</P>
                  </div>
                  <div>
                    <Sub>What I'd protect</Sub>
                    <P>The design sprint. Getting both organizations in the same room for a week before touching any screens was the single best investment we made. Every major decision that followed had a shared foundation.</P>
                    <P>The bigger lesson: designing for children is humbling. Every assumption you bring in from adult product design gets tested hard. The kids don't lie.</P>
                  </div>
                </TwoCol>
              </Section>
            </>
          )}

          {/* ── HOMER ───────────────────────────────────────────── */}
          {isHomer && (
            <>
              <Section id="overview">
                <Eyebrow>Overview</Eyebrow>
                <Title>Homer needed to become the product parents kept — and kids wanted to return to.</Title>
                <TwoCol>
                  <div>
                    <Sub>The context</Sub>
                    <P>Homer is an early learning app for children ages 2–6, with a library of 1,000+ lessons across reading, math, and social-emotional development. At the time of this project, the app had strong acquisition numbers but was losing ground on retention — kids were opening the app, but not coming back.</P>
                  </div>
                  <div>
                    <Sub>My role</Sub>
                    <P>I was the sole product designer on this initiative, working directly with the VP of Product, two engineers, and the brand team. I owned the full design lifecycle: research, wireframes, prototypes, usability testing, design system, and final UI across iOS, Android, and web.</P>
                  </div>
                </TwoCol>
                <ImgBlock id="01" label="Project overview — key screens" caption="Hero overview showing the full product context." />
              </Section>

              <Section id="research">
                <Eyebrow>Research</Eyebrow>
                <Title>We spent two weeks watching kids use the app. Not asking — watching.</Title>
                <P>I ran 14 moderated usability sessions with children ages 2–6 and their parents across in-home, daycare, and remote settings. The goal wasn't to validate — it was to understand what was actually happening before we touched anything.</P>
                <ImgBlock id="02" label="Research — field observations and synthesis" caption="Research artifacts from 14 usability sessions." />
              </Section>

              <Section id="objectives">
                <Eyebrow>Objectives</Eyebrow>
                <Title>Three design objectives, each tied to a measurable outcome.</Title>
                {[
                  { num: '01', title: 'Make relevant content more accessible', target: 'Reduce time-to-first-lesson by 40%', body: "The content library had over 1,000 lessons. Kids couldn't find anything. We rebuilt content discovery from scratch — moving from a flat grid to a curated, character-led home screen." },
                  { num: '02', title: 'Enhance usability for non-readers', target: 'Zero text-dependent navigation paths', body: "Every navigation element relied on text labels that 60% of our users couldn't read. We rebuilt the nav system around iconography, character cues, and audio feedback." },
                  { num: '03', title: 'Spark joy and drive return visits', target: 'Increase D7 retention by 25%', body: "The app felt static. We introduced motion, character reactions, and celebration moments — designing for joy, not addiction." },
                ].map(({ num, title, target, body }) => (
                  <div key={num} style={{ padding: '40px 0', borderBottom: '0.5px solid var(--c-border)' }}>
                    <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '12px' }}>Objective {num}</div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-heading-3)', fontWeight: 400, color: 'var(--c-text)', marginBottom: '8px', letterSpacing: '-0.01em' }}>{title}</h3>
                    <div className="section-eyebrow" style={{ marginBottom: '20px' }}>Target: {target}</div>
                    <P>{body}</P>
                    <ImgBlock id={`0${num}`} label={`Objective ${num} — explorations`} caption={`Design explorations for objective ${num}.`} />
                  </div>
                ))}
              </Section>

              <Section id="solution">
                <Eyebrow>Solution</Eyebrow>
                <Title>A character-led home screen, icon-only navigation, and a living design system.</Title>
                <P>The final design centered on three core changes: a curated home screen driven by Homer's character cast, a fully icon-based navigation system that worked without text, and a motion design language that made the app feel alive.</P>
                <ImgBlock id="04" label="Solution — final designs" caption="Final shipped product screens." aspect="21/9" />
              </Section>

              <Section id="process">
                <Eyebrow>Process</Eyebrow>
                <Title>How we got there — the iterations, dead ends, and pivots.</Title>
                <TwoCol>
                  <div>
                    <Sub>What we built and killed</Sub>
                    <P>We prototyped a recommendation engine, a learning path flow, and a parent dashboard in the first two weeks. All three got cut after testing. Killing them early saved roughly 3 sprints of engineering time.</P>
                  </div>
                  <div>
                    <Sub>Design system work</Sub>
                    <P>I built a component library of 40+ components across iOS, Android, and web — the first time Homer had a unified system across platforms. The system cut per-feature design and build time by roughly 30%.</P>
                  </div>
                </TwoCol>
                <ImgBlock id="05" label="Process — component library and flows" caption="Design system components and user flows." />
              </Section>

              <Section id="outcome">
                <Eyebrow>Outcome</Eyebrow>
                <Title>Shipped on time. Retention moved. The design system outlasted the project.</Title>
                <StatGrid items={[
                  { stat: '40%', label: 'faster time-to-first-lesson' },
                  { stat: '25%', label: 'increase in D7 retention' },
                  { stat: '30%', label: 'reduction in build time per feature' },
                ]} />
                <ImgBlock id="06" label="Outcome — final shipped product" caption="Final shipped product." aspect="21/9" />
              </Section>

              <Section id="reflection">
                <Eyebrow>Reflection</Eyebrow>
                <Title>What I'd do differently, and what I'd protect.</Title>
                <TwoCol>
                  <div>
                    <Sub>What I'd do differently</Sub>
                    <P>I'd push for a longer research phase with more children under 3. I'd also involve engineering earlier in the design system work — I built it largely in isolation and some component specs needed significant revision before they could ship.</P>
                  </div>
                  <div>
                    <Sub>What I'd protect</Sub>
                    <P>The decision to cut the recommendation engine. Every stakeholder wanted it. The data didn't support it. Holding that line — with research to back it up — was the right call and probably saved the project from scope creep.</P>
                  </div>
                </TwoCol>
              </Section>
            </>
          )}

          {/* ── GENERIC placeholder for other case studies ───────── */}
          {!isSesame && !isHomer && (
            <>
              {study.sections.map(({ id, label }) => (
                <Section key={id} id={id}>
                  <Eyebrow>{label}</Eyebrow>
                  <Title>{label} — coming soon</Title>
                  <P>This case study is currently being written. Check back soon.</P>
                  <ImgBlock id="01" label={`${label} — placeholder`} caption="Replace with actual content." />
                </Section>
              ))}
            </>
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
            <a
              href="/#work"
              className="nav-link"
              style={{ fontSize: 'var(--fs-base)' }}
            >
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

// ── Shared sub-components — all use global CSS tokens ─────────────

function Section({ id, children }) {
  return (
    <section id={id} style={{ marginBottom: '96px' }}>
      {children}
    </section>
  );
}

function Eyebrow({ children }) {
  return (
    <div className="section-eyebrow" style={{ color: 'var(--c-purple)', marginBottom: '16px' }}>
      {children}
    </div>
  );
}

function Title({ children }) {
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

function Sub({ children }) {
  return (
    <div className="section-eyebrow" style={{ color: 'var(--c-purple)', marginBottom: '12px' }}>
      {children}
    </div>
  );
}

function P({ children }) {
  return (
    <p className="section-subtext" style={{ marginBottom: '24px' }}>
      {children}
    </p>
  );
}

function TwoCol({ children }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      marginBottom: '40px',
    }}>
      {children}
    </div>
  );
}

function MetaGrid({ items }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, auto)',
      gap: '48px',
      paddingTop: '32px',
      borderTop: '0.5px solid var(--c-border)',
      width: 'fit-content',
      marginTop: '40px',
      marginBottom: '40px',
    }}>
      {items.map(({ label, value }) => (
        <div key={label}>
          <div className="section-eyebrow" style={{ marginBottom: '6px' }}>{label}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-base)', color: 'var(--c-text-2)' }}>{value}</div>
        </div>
      ))}
    </div>
  );
}

function StatGrid({ items }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2px',
      margin: '40px 0',
    }}>
      {items.map(({ stat, label }) => (
        <div key={label} style={{ background: 'var(--c-bg-raised)', padding: '24px', border: '0.5px solid var(--c-border)' }}>
          <div className="card-metric-value" style={{ fontSize: 'var(--fs-heading-2)', color: 'var(--c-green)', marginBottom: '8px' }}>{stat}</div>
          <div className="card-metric-label">{label}</div>
        </div>
      ))}
    </div>
  );
}

function KeyInsight({ quote, sub }) {
  return (
    <div style={{
      background: 'var(--c-bg-raised)',
      border: '0.5px solid var(--c-border)',
      padding: '32px',
      marginTop: '40px',
      marginBottom: '40px',
    }}>
      <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
        Key insight
      </div>
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
    </div>
  );
}

function VersionLabel({ children, type }) {
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

function ImgBlock({ id, label, caption, aspect = '16/9', cols = 1, src, srcs, fit = 'contain', fits, hug = false }) {
  const items = Array.from({ length: cols });
  return (
    <div style={{ margin: '40px 0' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: cols === 1 ? '1fr' : cols === 2 ? '1fr 1fr' : '1fr 1fr 1fr',
        gap: '2px',
      }}>
        {items.map((_, i) => (
          <div key={i} style={{
            aspectRatio: hug ? undefined : aspect,
            background: 'var(--c-bg-surface)',
            border: '0.5px solid var(--c-border-mid)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {(srcs?.[i] || src) ? (
              <img
                src={srcs?.[i] || src}
                alt={label}
                style={{ width: '100%', height: hug ? 'auto' : '100%', objectFit: fits?.[i] || fit, display: 'block', background: 'var(--c-bg)' }}
              />
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
                {/* Badge */}
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
                {/* Image icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--c-border-bright)" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="0" />
                  <path d="M3 15l5-5 4 4 3-3 6 5" />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="var(--c-border-bright)" stroke="none" />
                </svg>
                {/* Label */}
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
