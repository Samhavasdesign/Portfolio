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

export default function AngiUgc() {
  return (
    <>
      <Section id="overview">
        <Eyebrow>Overview</Eyebrow>
        <Title>
          A suite of UGC-driven web components that repurposed existing content — pro answers, homeowner reviews, and project photos — into high-performing SEO features that reduced bounce rates, drove organic traffic, and increased engagement by 63%.
        </Title>

        <TwoCol>
          <div>
            <Sub>The context</Sub>
            <P>
              Angi had a content problem hiding in plain sight. The platform was sitting on a wealth of user-generated content — pro answers, homeowner reviews, project photos — but most of it wasn&apos;t surfaced in a way that helped users or search engines. Articles and cost guides were underperforming. Pages weren&apos;t reaching or engaging as many users as they should have. And without UGC, Angi&apos;s SEO performance was more volatile and less competitive than it needed to be. The insight was simple: the content already existed. The problem was that nobody had designed a way to make it work.
            </P>
          </div>
          <div>
            <Sub>My role</Sub>
            <P>
              I led the design work as design lead on the Growth team, owning the end-to-end UX for a suite of new UGC-focused web components — from concept through production. This involved close collaboration with product, engineering, and SEO specialists to ensure the components worked both as user experiences and as indexable, search-optimized content surfaces.
            </P>
          </div>
        </TwoCol>

        <KeyInsight
          quote="Angi already had everything it needed — real homeowner stories, expert pro answers, genuine project photos. The gap wasn't content. It was a design system that could surface it."
        />
      </Section>

      <Section id="the-work">
        <Eyebrow>The work</Eyebrow>

        <h3 style={h3Work}>Ask a Pro Q&amp;A.</h3>
        <P>
          The centerpiece of the UGC initiative. Homeowners could submit questions, pros could answer them, and the resulting Q&amp;A content was surfaced directly on relevant service and cost guide pages. The component was designed to feel conversational and trustworthy — not a forum, but a curated expert resource. It was also built to be indexable, making every answer a potential SEO entry point.
        </P>

        <ImgBlock
          id="01"
          label="Ask a Pro Q&A component, mobile + desktop"
          cols={2}
        />

        <h3 style={{ ...h3Work, marginTop: '48px' }}>Project Stories.</h3>
        <P>
          A component that repurposed existing pro-uploaded project photos and homeowner reviews into narrative-driven content blocks. Rather than isolated star ratings, Project Stories gave context — what the job was, how it went, what the outcome looked like. This made the content more engaging for users and more substantive for search engines.
        </P>

        <ImgBlock id="02" label="Project Stories component" />

        <h3 style={{ ...h3Work, marginTop: '48px' }}>Pro Galleries.</h3>
        <P>
          A visual-first component surfacing pro project photos in a gallery format on relevant pages. Designed to drive engagement through browsing behavior and to give pros a stronger presence on the pages most likely to convert homeowners into leads.
        </P>

        <ImgBlock id="03" label="Pro Galleries component" />
      </Section>

      <Section id="outcome">
        <Eyebrow>Outcome</Eyebrow>
        <Title>
          63% increase in engagement. Stronger SEO stability. Lower bounce rates across content pages.
        </Title>

        <P>
          Ask a Pro Q&amp;A increased engagement by 63% and demonstrated stronger SEO stability than the control — experiencing less volatility in search performance, which was one of the primary goals of the initiative.
        </P>

        <StatGrid
          items={[
            { stat: '63%', label: 'increase in engagement (Ask a Pro Q&A)' },
            { stat: 'Improved', label: 'SEO stability vs. control' },
            { stat: 'Reduced', label: 'bounce rates across article and cost guide pages' },
          ]}
        />

        <ImgBlock id="04" label="Outcome — engagement, SEO, or live UGC components" />
      </Section>

      <Section id="reflection">
        <Eyebrow>Reflection</Eyebrow>
        <Title>What I&apos;d do differently.</Title>
        <P>
          I&apos;d push earlier for a unified content strategy across all three components — Ask a Pro, Project Stories, and Pro Galleries were designed in parallel but weren&apos;t always treated as a cohesive system. Establishing shared patterns and a content hierarchy from the start would have made the suite feel more intentional and reduced redundancy in the design and engineering work.
        </P>
        <Sub>What I&apos;d protect.</Sub>
        <P>
          The decision to treat UGC as a design problem, not just a content problem. The components only worked because they were designed to make raw user content feel trustworthy, scannable, and useful — not just technically present on the page. That framing kept the work grounded in user experience even when the primary driver was SEO performance.
        </P>
      </Section>
    </>
  );
}
