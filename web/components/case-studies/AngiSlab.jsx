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

export default function AngiSlab() {
  return (
    <>
      <Section id="overview">
        <Eyebrow>Overview</Eyebrow>
        <Title>
          A no-code component platform migration that unified two fragmented brands, eliminated developer dependency for growth experiments, and directly drove a 37% conversion lift on Angi&apos;s highest-traffic pages.
        </Title>

        <TwoCol>
          <div>
            <Sub>The context</Sub>
            <P>
              Angi&apos;s growth team was bottlenecked. Launching a new landing page or running an experiment meant waiting on engineering — the micro-frontend architecture was fragmented, patterns were inconsistent across Angi and HomeAdvisor, and there was no standardized component library to work from. Every test was slower and more expensive than it needed to be. SLAB was the answer: a no-code platform for building web experiences and running rapid growth tests. My job was to make it actually work at scale.
            </P>
          </div>
          <div>
            <Sub>My role</Sub>
            <P>
              I led the design work for the SLAB migration as the sole design lead on the Growth team. That meant auditing what existed, deciding what to keep and what to rebuild, and establishing the component and token system that both brands would run on going forward. This wasn&apos;t a visual refresh — it was a foundational infrastructure project with design at the center.
            </P>
          </div>
        </TwoCol>
      </Section>

      <ImgBlock id="01" label="Hero — platform, SLAB, or growth experimentation visual" />

      <KeyInsight
        quote="The problem wasn't the components themselves — it was the absence of a shared language between designers, engineers, and the marketers building on top of the platform. Until that existed, every new page was starting from zero."
      />

      <Section id="the-work">
        <Eyebrow>The work</Eyebrow>

        <h3 style={h3Work}>Audit first, build second.</h3>
        <P>
          I started with a full component library audit across both brands — cataloging what existed in SLAB, what was inconsistent, and what was missing entirely. Rather than designing new components speculatively, the audit drove the roadmap: fix what could be fixed, build what was genuinely absent, deprecate what was redundant.
        </P>

        <ImgBlock id="02" label="The work — component audit, catalog, or library spread" />

        <h3 style={h3Work}>Components + tokens as a system.</h3>
        <P>
          The output wasn&apos;t just components — it was a token layer that made the system maintainable. Design tokens meant that brand-specific decisions (Angi red vs. HomeAdvisor styling) lived in one place, not scattered across dozens of individual component specs. I refined the documentation and production builds to make handoff reliable and consistent.
        </P>

        <ImgBlock id="03" label="The work — tokens, documentation, or system architecture" />

        <h3 style={h3Work}>Enabling the team, not just shipping pages.</h3>
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
          The results came through GeoCat — Angi&apos;s highest-traffic SEO landing pages — where the new SLAB infrastructure enabled rapid iteration at a scale that wasn&apos;t possible before.
        </P>

        <StatGrid
          items={[
            { stat: '37%', label: 'Increase in conversion (GeoCat)' },
            { stat: '36%', label: 'Increase in funnel entry (GeoCat)' },
            { stat: '17.5%', label: 'Decrease in bounce rate (GeoCat)' },
            { stat: '20%', label: 'Reduction in design-to-development handoff time across the Growth org' },
          ]}
        />

        <ImgBlock id="05" label="Outcome — GeoCat results, experimentation, or live landing pages" />
      </Section>

      <Section id="reflection">
        <Eyebrow>Reflection</Eyebrow>
        <Title>What I&apos;d do differently</Title>
        <P>
          The thing I&apos;d do differently is advocate earlier for token documentation to be treated as a first-class deliverable — not something that gets refined after launch. The components we shipped were solid, but the token layer took longer to stabilize than it should have because it was treated as secondary to the visible UI work. On a system like this, the invisible infrastructure matters as much as what users actually see.
        </P>
      </Section>
    </>
  );
}
