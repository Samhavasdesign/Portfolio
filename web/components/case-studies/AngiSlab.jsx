import {
  Section,
  Eyebrow,
  Title,
  Sub,
  P,
  TwoCol,
  KeyInsight,
  ImgBlock,
  StatGrid,
} from './CaseStudyShared';

const h3Work = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'var(--fs-heading-3)',
  fontWeight: 400,
  color: 'var(--c-text)',
  marginBottom: '20px',
  letterSpacing: '-0.01em',
};

const reflectionWrap = {
  background: 'var(--c-bg-surface)',
  borderTop: '2px solid var(--c-purple)',
  padding: '48px 40px',
  marginTop: '8px',
};

export default function AngiSlab() {
  return (
    <>
      <Section id="overview">
        <Eyebrow>Overview</Eyebrow>
        <Title>
          37% conversion lift. 36% increase in funnel entry. Behind those numbers was a full rebuild of Angi&apos;s marketing infrastructure — unifying two fragmented brands, replacing ad hoc page creation with a scalable component system, and giving growth teams the ability to launch experiments without engineering support.
        </Title>

        <TwoCol>
          <div>
            <Sub>The context</Sub>
            <P>
              The existing system had fractured across brands, teams, and tooling. Pages were rebuilt from scratch repeatedly, components lacked consistency, and even small growth experiments required engineering support.
            </P>
          </div>
          <div>
            <Sub>My role</Sub>
            <P>
              I led product design for the migration from a legacy page builder to SLAB, defining the component system, responsive behavior, and authoring experience used across Angi and HomeAdvisor.
            </P>
          </div>
        </TwoCol>
      </Section>

      <ImgBlock id="01" label="Hero — platform, SLAB, or growth experimentation visual" />

      <KeyInsight
        quote="The real problem wasn't UI inconsistency — it was operational inconsistency. Designers, engineers, and marketers were all solving the same problems differently, with no shared language between them. Every new page effectively started from zero."
      />

      <Section id="the-work">
        <Eyebrow>The work</Eyebrow>

        <h3 style={h3Work}>Audit first, build second.</h3>
        <P>
          I started with a full component library audit across both brands — cataloging what existed in SLAB, what was inconsistent, and what was missing entirely. Rather than designing new components speculatively, the audit drove the roadmap: fix what could be fixed, build what was genuinely absent, deprecate what was redundant. The rule was simple: standardize what already worked, rebuild only what was broken, and avoid creating net-new components unless they solved a recurring need.
        </P>

        <ImgBlock id="02" label="The work — component audit, catalog, or library spread" />

        <h3 style={h3Work}>Designing the system beneath the UI</h3>
        <P>
          Beyond individual components, the goal was a shared foundation both brands could run on. Brand-specific styling lived in one place instead of being rebuilt on every page, and clear documentation made it easier for teams to assemble experiences from validated building blocks without reinventing patterns each time.
        </P>

        <ImgBlock id="03" label="The work — tokens, documentation, or system architecture" />

        <h3 style={h3Work}>Designing for operational scale</h3>
        <P>
          The goal was always for the Growth team to be able to move without design or engineering in the loop for every experiment. The component library I built and the SLAB migration made that possible — non-designers could assemble pages from validated, on-brand building blocks.
        </P>

        <ImgBlock id="04" label="The work — team enablement, SLAB builder, or assembled pages" />
      </Section>

      <Section id="outcome">
        <Eyebrow>Outcome</Eyebrow>
        <Title>
          37% increase in conversion. 36% increase in funnel entry. 17.5% decrease in bounce rate.
        </Title>

        <P>
          The migration launched across Angi&apos;s highest-traffic SEO landing pages and fundamentally changed how quickly teams could ship, test, and iterate.
        </P>

        <StatGrid
          items={[
            { stat: '37%', label: 'Increase in conversion (GeoCat)' },
            { stat: '36%', label: 'Increase in funnel entry (GeoCat)' },
            { stat: '17.5%', label: 'Decrease in bounce rate (GeoCat)' },
            { stat: '20%', label: 'Reduction in design-to-development handoff time across the Growth org' },
          ]}
        />

        <P>
          That time was reinvested into faster experimentation cycles and higher shipping velocity across growth teams.
        </P>

        <ImgBlock id="05" label="Outcome — GeoCat results, experimentation, or live landing pages" />
      </Section>

      <Section id="reflection">
        <Eyebrow>Reflection</Eyebrow>
        <div style={reflectionWrap}>
          <Title>What I&apos;d do differently</Title>
          <P>
            We built a flexible system quickly because the organization needed speed. In hindsight, I would have pushed for token standardization earlier — some inconsistencies became harder to unwind once multiple teams were building independently inside the system. The tradeoff was worth it, but it reinforced how important governance becomes once a design system reaches operational scale.
          </P>
        </div>
      </Section>
    </>
  );
}
