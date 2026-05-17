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
import AngiSemCarousel from './AngiSemCarousel';

const h3Work = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'var(--fs-heading-3)',
  fontWeight: 400,
  color: 'var(--c-text)',
  marginBottom: '20px',
  letterSpacing: '-0.01em',
};

export default function AngiSem() {
  return (
    <>
      <Section id="overview">
        <Eyebrow>Overview</Eyebrow>
        <Title>
          A multi-phase experimentation project to redesign Angi&apos;s SEM landing page — the first brand touchpoint for 5 million paid search visitors a year. What started as a straightforward A/B test became a rigorous, two-year investigation into why users bounce, what actually builds trust, and the tension between engagement and conversion.
        </Title>

        <TwoCol>
          <div>
            <Sub>The context</Sub>
            <P>
              Angi&apos;s SEM landing page was bleeding revenue. Paid search pages attracted over 5 million visitors a year and had been performing well — until late 2021, when conversion dropped from 13% to 9% as post-pandemic behavior shifted. The bounce rate climbed to 77%, representing roughly $2.16 million in lost revenue every month. The page itself was sparse: a headline, a ZIP code field, a button. Users who weren&apos;t ready to immediately submit a service request had nowhere to go but back. My team was tasked with fixing it.
            </P>
          </div>
          <div>
            <Sub>My role</Sub>
            <P>
              I led design on this project alongside a fellow designer, a PM, an engineering manager, a user researcher, and a team of engineers. I owned the end-to-end design process across both phases — from competitive analysis and hypothesis formation through wireframing, A/B test design, and the full page reconceptualization. This was my crash course in data-driven design.
            </P>
          </div>
        </TwoCol>

        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
          The final design
        </div>

        <ImgBlock
          id="kelp-final"
          label="KELP final page design"
          src="/images/work/KELPpagefinal.png"
          hug
          intrinsicWidth={1521}
          intrinsicHeight={1034}
        />

        <KeyInsight
          quote="The page had a single conversion path for two completely different users — one ready to hire a pro today, and one still figuring out if they even need one. Until we designed for both, we couldn't win."
        />

      </Section>

<h3 style={h3Work}>Top of funnel user journey</h3>

      <ImgBlock
        id="sem-overview"
        label="Angi SEM page overview"
        src="/images/work/SEM-overview.png"
        hug
        intrinsicWidth={2018}
        intrinsicHeight={701}
      />

      <h3 style={h3Work}>SEM LP = the gateway to the Angi experience</h3>

      <ImgBlock
        id="sem-visual"
        label="Angi SEM visual overview"
        src="/images/work/SEM-visual.png"
        hug
        intrinsicWidth={3489}
        intrinsicHeight={2103}
      />

      <Section id="the-work">
        <Eyebrow>The work</Eyebrow>

        <h3 id="phase-1" style={h3Work}>Phase 1 — We optimized the interface.</h3>
        <P>
          Leadership needed to see movement fast. Before we had a chance to do SEM-specific research, we were already in testing.
        </P>

        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
          The plan
        </div>
        <P>
          Working with our PM and stakeholders, we aligned on a clear plan of attack: optimize the SEM landing page through a series of A/B tests against the control using component-based design. The goal was to engage users earlier in the funnel and give them enough context to move forward           — without overwhelming them into bouncing.
        </P>

        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
          Hypothesis
        </div>
        <P>
          If the SEM page becomes more visually engaging, clearly communicates value, and incorporates known trust builders, then user engagement will increase and bounce rate will decrease.
        </P>

        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
          Success metrics
        </div>
        <P>
          We defined three success metrics going in: reducing bounce rate was the primary goal — we were targeting a 15% reduction — with increasing SR conversion rate and SR continuation rate as secondary metrics. Having targets set before testing meant we could evaluate results honestly rather than retrofitting a narrative afterward.
        </P>

        <P>
          With the goalpost set, we ran three variants simultaneously.
        </P>

        <ImgBlock
          id="variant-b-1"
          label="Phase 1 Variant B detail"
          src="/images/work/Variant-B-1.png"
          hug
          intrinsicWidth={1920}
          intrinsicHeight={1080}
        />

        <ImgBlock
          id="variant-b-2"
          label="Phase 1 Variant B results"
          src="/images/work/Variant-B-2.png"
          hug
          intrinsicWidth={1920}
          intrinsicHeight={1080}
        />

        <ImgBlock
          id="variant-c-1"
          label="Phase 1 Variant C detail"
          src="/images/work/Variant-C-1.png"
          hug
          intrinsicWidth={1920}
          intrinsicHeight={1080}
        />

        <ImgBlock
          id="variant-c-2"
          label="Phase 1 Variant C results"
          src="/images/work/Variant-C-2.png"
          hug
          intrinsicWidth={1920}
          intrinsicHeight={1080}
        />

        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
          What we learned
        </div>
        <P>
          Neither variant won. Variant B added value props and trust builders below the fold — it actually increased bounce rate by 16.8% and hurt SR submits. Variant C stripped everything down to a hero image and headline — it was flat against control.
        </P>

        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
          The insight
        </div>
        <P>
          A SEM landing page is its own unique context. Assuming what resonates on other pages will transfer here is like comparing apples to oranges — and we lost several test cycles learning that the hard way.
        </P>

        <h3 id="phase-2" style={{ ...h3Work, marginTop: '48px' }}>Phase 2 — Research exposed a deeper problem.</h3>
        <P>
          We needed to stop guessing. We commissioned a dedicated UXR study — 4 SEM ad variants and 5 landing page designs, tested with 50 participants across relevance, trustworthiness, confidence, and likelihood to enter a ZIP code.
        </P>

        <ImgBlock
          id="02"
          label="SEM Ads & Landing Page Study — 4 ad variants and 5 landing page designs"
          src="/images/work/SEMresearch.png"
          hug
          intrinsicWidth={5760}
          intrinsicHeight={3240}
        />

        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
          Key insights
        </div>
        <P>
          The research gave us three things we hadn&apos;t had before. Certain design components build trust — specifically the Angi brand itself, job-tailored imagery, and numbers indicating Angi&apos;s success. Most users expected to see a list of pros after proceeding, regardless of which ad or landing page they came from. And the main bounce reasons came down to two things: wanting more information before committing, or aversion to the Angi brand.
        </P>

        <P>
          Armed with those findings, we ran a new round of isolated variant tests — keyword copy, hero card treatment, headline copy, value props in the hero. The research also surfaced something that reframed the Phase 1 results: most users weren&apos;t scrolling past the fold at all, and when they did, there was little indication they were actually reading. Content volume wasn&apos;t the answer.
        </P>

        <ImgBlock
          id="postresearch-1"
          label="Post-research isolated variant test 1"
          src="/images/work/Postresearch-1.png"
          hug
          intrinsicWidth={1920}
          intrinsicHeight={1080}
        />

        <ImgBlock
          id="postresearch-2"
          label="Post-research isolated variant test 2"
          src="/images/work/Postresearch-2.png"
          hug
          intrinsicWidth={1920}
          intrinsicHeight={1080}
        />

        <ImgBlock
          id="postresearch-3"
          label="Post-research isolated variant test 3"
          src="/images/work/Postresearch-3.png"
          hug
          intrinsicWidth={1920}
          intrinsicHeight={1080}
        />

        <ImgBlock
          id="postresearch-4"
          label="Post-research isolated variant test 4"
          src="/images/work/Postresearch-4.png"
          hug
          intrinsicWidth={1920}
          intrinsicHeight={1080}
        />

        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px', marginTop: '40px' }}>
          What we learned
        </div>
        <P>
          None of the isolated tests demonstrated a significant improvement in key metrics compared to the control. The surface-level variables weren&apos;t the problem. Something structural needed to change.
        </P>

        <h3 id="phase-3" style={{ ...h3Work, marginTop: '48px' }}>Phase 3 — We redesigned around user intent.</h3>
        <P>
          The isolated tests stalling forced a harder question. We weren&apos;t going to optimize our way out of this. The real problem was structural: the page only gave users one way to engage — enter a ZIP and start a service request. That worked for users ready to hire. It did nothing for the other half.
        </P>

        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
          The problem
        </div>
        <P>
          Research revealed that 50% of users landing on the SEM page were ready to convert. The other 50% were in a browsing mindset — researching costs, comparing options, not ready to hire. The existing page served only one of those users. Until we designed for both, we couldn&apos;t win.
        </P>

        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
          New hypothesis
        </div>
        <P>
          If we leverage content tailored to a specific job to support users at varying levels of readiness, then we will reduce bounce rates and achieve higher 42-day conversion compared to the standard SR path.
        </P>

        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
          Success metrics
        </div>
        <P>
          We also added a new metric: 42-day CVR. Single-session CVR was the wrong lens for half our audience. Users in the browsing mindset weren&apos;t going to convert in the same session — but they might come back. We needed to measure that.
        </P>

        <P>
          We partnered with leadership and the Angi content team on a full reconceptualization. Two strong concepts emerged from content mapping work. The Fishing model — a hub-and-spoke page ordered from strong to weak user intent, with modules users could self-select into. And the Step by Step model — a page that walked users through four stages of project preparation before connecting them with a pro. I wireframed both and presented them to stakeholders to secure alignment before moving into testing.
        </P>

        <ImgBlock
          id="newconcept-1"
          label="New concept wireframe 1"
          src="/images/work/Newconcept-1.png"
          hug
          intrinsicWidth={3840}
          intrinsicHeight={2160}
        />

        <ImgBlock
          id="newconcept-2"
          label="New concept wireframe 2"
          src="/images/work/Newconcept-2.png"
          hug
          intrinsicWidth={3840}
          intrinsicHeight={2160}
        />

        <ImgBlock
          id="newconcept-3"
          label="New concept wireframe 3"
          src="/images/work/Newconcept-3.png"
          hug
          intrinsicWidth={3840}
          intrinsicHeight={2160}
        />

        <ImgBlock
          id="newconcept-4"
          label="New concept wireframe 4"
          src="/images/work/Newconcept-4.png"
          hug
          intrinsicWidth={3840}
          intrinsicHeight={2160}
        />

        <h3 style={h3Work}>Final concept: stepped approach</h3>
        <P>
          In order to meet users where they are, the page outlines steps for users to go through in order to provide all of the information they needed before contacting a pro.
        </P>

        <AngiSemCarousel />

        <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '16px' }}>
          What we learned
        </div>
        <P>
          The new page worked — at least half of what we set out to do. Bounce rate dropped 26.9%. CTR on content modules hit 62.6%. Scroll rate reached 45.81% and average time on page was 2.28 minutes. Users were genuinely engaged. But SR CVR dropped 33.51% and 42-day CVR dropped 34.5%. Of the users who did engage, 30.6% entered the SR path directly — but 54.1% of those who scrolled to project costs then exited, signaling they were still in consideration mode, not ready to convert in the same session.
        </P>

        <ImgBlock
          id="summary-1"
          label="Phase 3 results summary — engagement metrics"
          src="/images/work/summary-1.png"
          hug
          intrinsicWidth={5760}
          intrinsicHeight={3240}
        />

        <ImgBlock
          id="summary-2"
          label="Phase 3 results summary — conversion metrics"
          src="/images/work/summary-2.png"
          hug
          intrinsicWidth={5760}
          intrinsicHeight={3240}
        />

        <KeyInsight
          quote="The users who engaged most deeply with our content were the least likely to convert that session. That wasn't a design failure — it was a targeting problem we hadn't named yet."
        />

      </Section>

      <Section id="outcome">
        <Eyebrow>Outcome</Eyebrow>
        <Title>Not a clean win — something more valuable.</Title>

        <P>
          Two years of rigorous testing reshaped how we understood SEM user behavior. We established that the page serves two distinct user types with fundamentally different needs — and that designing for both requires rethinking what success looks like. Engagement and immediate conversion are in tension by design on this page. Ironically, the findings led us away from the original SEM page entirely. The reconceptualized experience launched as a standalone product for high-consideration categories — roofing, HVAC, major renovations — where users genuinely need more information before committing to a pro.
        </P>

        <StatGrid
          items={[
            { stat: '26.9%', label: 'reduction in bounce rate (reconceptualized experience)' },
            { stat: '62.6%', label: 'CTR on content modules' },
            { stat: '2.28 min', label: 'average time on page' },
            { stat: '5M+', label: 'paid search visitors per year' },
          ]}
        />
      </Section>

      <Section id="reflection">
        <Eyebrow>Reflection</Eyebrow>
        <Title>What I&apos;d do differently.</Title>
        <P>
          Start with SEM-specific research before running a single test. We assumed learnings from other page contexts would transfer — they didn&apos;t. The SEM landing page is a unique moment in the funnel with its own psychology, and we lost several test cycles to assumptions we could have invalidated in week one with a targeted study. I&apos;d also push harder to reframe the success metric earlier. Bounce rate and single-session CVR are in tension by design on a page that serves both ready-to-convert and still-researching users. Until we added 42-day CVR as a metric, we were measuring the wrong thing for half our audience.
        </P>
        <Sub>What I&apos;d protect.</Sub>
        <P>
          The decision to go back to fundamentals when the isolated tests stalled. It would have been easier to keep tweaking variants. Instead we did the harder thing — content mapping, concept development, stakeholder alignment, full wireframes — and came out with a much more honest understanding of the problem. That&apos;s the work that actually moved the team forward.
        </P>
      </Section>
    </>
  );
}
