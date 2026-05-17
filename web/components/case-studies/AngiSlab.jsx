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

const keyInsightWrap = {
  marginTop: '64px',
  marginBottom: '64px',
  paddingTop: '20px',
  paddingBottom: '20px',
  paddingLeft: '24px',
  borderLeft: '3px solid var(--c-green)',
};

const keyInsightQuote = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'clamp(20px, 3.25vw, 34px)',
  color: 'var(--c-text)',
  lineHeight: 1.4,
  fontWeight: 400,
  margin: 0,
};

const reflectionWrap = {
  background: 'var(--c-bg-chat)',
  border: '0.5px solid var(--c-border-mid)',
  borderTop: '2px solid var(--c-purple)',
  padding: '56px 44px',
  marginTop: '24px',
  marginBottom: '8px',
};

export default function AngiSlab() {
  return (
    <>
      <Section id="overview">
        <Eyebrow>Overview</Eyebrow>
        <Title>
          37% conversion lift. 36% increase in funnel entry.
          <br />
          <br />
          Behind those numbers was a rebuild of Angi&apos;s marketing infrastructure: unifying Angi, HomeAdvisor, and Instapro, replacing ad hoc page creation with a scalable component system, and enabling growth teams to launch experiments without engineering support.
        </Title>

        <TwoCol>
          <div>
            <Sub>The context</Sub>
            <P>
              The existing system had fractured across brands, teams, and tooling. Pages were rebuilt from scratch repeatedly, components lacked consistency, and even small growth experiments required engineering support.
            </P>
            <P>
              Three distinct brand expressions needed to run on the same underlying component architecture — each with its own visual language, but sharing the same structural foundation.
            </P>
          </div>
          <div>
            <Sub>My role</Sub>
            <P>
              I led product design for the migration from a legacy page builder to SLAB, defining the component system, responsive behavior, and authoring experience used across Angi, HomeAdvisor, and Instapro.
            </P>
          </div>
        </TwoCol>
      </Section>

      <Section id="the-work">
        <Eyebrow>The work</Eyebrow>

        <h3 style={h3Work}>Audit first, build second.</h3>
        <P>
          I started with a full component library audit across Angi, HomeAdvisor, and Instapro — cataloging what existed in SLAB, what was inconsistent, and what was missing entirely. Rather than designing new components speculatively, the audit drove the roadmap: fix what could be fixed, build what was genuinely absent, deprecate what was redundant. The rule was simple: standardize what already worked, rebuild only what was broken, and avoid creating net-new components unless they solved a recurring need.
        </P>

        <ImgBlock
          id="02"
          label="Pro card audit overview"
          src="/images/work/PRO-CARD-AUDIT.png"
          hug
          intrinsicWidth={11520}
          intrinsicHeight={9903}
        />

        <div style={keyInsightWrap}>
          <KeyInsight>
            <p style={keyInsightQuote}>
              The real problem wasn&apos;t UI inconsistency — it was operational inconsistency. Designers, engineers, and marketers were all solving the same problems differently, with no shared language between them. Every new page effectively started from zero.
            </p>
          </KeyInsight>
        </div>

        <h3 style={h3Work}>Designing the system beneath the UI</h3>
        <P>
          The goal was a single token layer that all three brands — Angi, HomeAdvisor, and Instapro — could run on. Each brand had its own visual language, but semantic tokens meant brand-specific values lived in one place rather than being hardcoded into every component. Swap the token set, the brand changes. The components stay the same. Instead of rebuilding components for every brand, teams could swap token sets and instantly reskin experiences across Angi, HomeAdvisor, and Instapro.
        </P>

        <ImgBlock
          id="03"
          label="Brand tokens — Angi, HomeAdvisor, and Instapro token layer"
          src="/images/work/Brand-tokens-1.png"
          hug
          intrinsicWidth={11520}
          intrinsicHeight={12822}
        />

        <ImgBlock
          id="03b"
          label="Brand tokens — continued"
          src="/images/work/Brand-tokens-2.png"
          hug
          intrinsicWidth={11520}
          intrinsicHeight={13929}
        />

        <h3 style={h3Work}>Speccing for scale</h3>
        <P>
          At this scale, ambiguity became operational debt. A spacing inconsistency in one component could silently propagate across hundreds of pages. Beyond the token layer, every component shipped with detailed spec documentation — spacing, typography, color, and interactive states called out explicitly. With three brands building on the same system, handoff precision wasn&apos;t optional.
        </P>

        <ImgBlock id="04" label="Spec documentation — spacing, typography, color, and interactive states" />

        <h3 style={h3Work}>Designing for operational scale</h3>
        <P>
          The goal wasn&apos;t just consistency — it was operational autonomy. Every component was built into the CMS with configurable props — content, layout, visibility, and brand expression all controllable by marketers directly. No design review. No engineering ticket. A marketer could turn a section on, swap the headline, change the layout variant, and publish — without touching code or filing a request.
        </P>
        <P>
          That was the goal from the start: make the system so well-specced and constrained that the right decision was always the easiest one to make.
        </P>

        <ImgBlock
          id="05"
          label="Contentful — SLAB builder and assembled pages"
          src="/images/work/Contentful.png"
          hug
          intrinsicWidth={6630}
          intrinsicHeight={4587}
        />
      </Section>

      <ImgBlock id="06" label="Outcome — GeoCat results, experimentation, or live landing pages" />

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
