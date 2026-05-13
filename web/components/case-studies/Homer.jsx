import { Section, Eyebrow, Title, Sub, P, TwoCol, StatGrid, ImgBlock } from './CaseStudyShared';

export default function Homer() {
  return (
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
  );
}
