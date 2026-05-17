import Image from 'next/image';
import SesameIpadDemoEmbed from '@/components/SesameIpadDemoEmbed';
import { Section, Eyebrow, Title, Sub, P, TwoCol, KeyInsight, ImgBlock } from './CaseStudyShared';

const reflectionWrap = {
  background: 'var(--c-bg-surface)',
  borderTop: '2px solid var(--c-purple)',
  padding: '48px 40px',
  marginTop: '8px',
};

const HOMER_LEGACY_SCREENSHOTS = [
  {
    label: 'Homescreen',
    src: '/images/homer/legacyhomer.webp',
    alt: 'Legacy HOMER app homepage',
  },
  {
    label: 'Reading pathway',
    src: '/images/homer/legacyreadingpathway.webp',
    alt: 'Legacy HOMER reading pathway screen',
  },
  {
    label: 'Lesson menu',
    src: '/images/homer/legacylessonsmenu.webp',
    alt: 'Legacy HOMER lesson menu screen',
  },
];

const HOMER_AFTER_REDESIGN_SCREENSHOTS = [
  {
    label: 'Home',
    src: '/images/work/homer-after-home.png',
    alt: "HOMER Learn & Grow redesigned home screen with centered play control and grown-ups entry",
  },
  {
    label: 'Main menu',
    src: '/images/work/homer-after-mainmenu.png',
    alt: 'HOMER main menu with subject tiles in a shallow category grid',
  },
  {
    label: 'Content menu',
    src: '/images/work/homer-after-contentmenu.png',
    alt: 'Content menu with featured unit and grid of lesson artwork thumbnails',
  },
  {
    label: 'Reading pathway',
    src: '/images/work/homer-after-readingpath.png',
    alt: "Holly's learning path with a single lesson card on a simplified progress line",
  },
];

function HomerLegacyBeforeRedesign({
  leadingSpacing = false,
  heading = 'Before the redesign',
  shots = HOMER_LEGACY_SCREENSHOTS,
  gridClassName = 'homer-legacy-shots',
  heroImage = null,
}) {
  return (
    <>
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--fs-heading-3)',
          fontWeight: 400,
          color: 'var(--c-text)',
          letterSpacing: '-0.01em',
          lineHeight: 1.25,
          marginTop: leadingSpacing ? '48px' : 0,
          marginBottom: '24px',
          maxWidth: '680px',
        }}
      >
        {heading}
      </h3>

      {heroImage ? (
        <div className="homer-redesign-hero">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            quality={95}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}

      <div className={gridClassName}>
        {shots.map((item) => (
          <div key={item.src} className="homer-legacy-cell">
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
              {item.label}
            </div>
            <div className="homer-legacy-frame">
              <Image src={item.src} alt={item.alt} fill quality={95} loading="lazy" decoding="async" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/**
 * Layout mirrors Sesame.jsx section-for-section so you can swap copy and
 * wire images under /public/images/work/homer-* (see src paths below).
 */
export default function Homer() {
  return (
    <div className="homer-case-study">
      <style>
        {`
          .homer-legacy-shots {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.25rem;
            margin-bottom: 2.5rem;
            margin-top: 8px;
          }
          .homer-legacy-shots > .homer-legacy-cell:nth-child(3) {
            grid-column: span 2;
          }
          @media (min-width: 768px) {
            .homer-legacy-shots {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
            .homer-legacy-shots > .homer-legacy-cell:nth-child(3) {
              grid-column: span 1;
            }
          }
          .homer-after-shots {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.25rem;
            margin-bottom: 2.5rem;
            margin-top: 8px;
          }
          .homer-redesign-hero {
            margin-bottom: 2rem;
            border-radius: 0.5rem;
            overflow: hidden;
          }
          .homer-redesign-hero img {
            display: block;
            width: 100%;
            height: auto;
          }
          .homer-legacy-cell {
            display: flex;
            flex-direction: column;
            min-width: 0;
          }
          .homer-legacy-frame {
            position: relative;
            width: 100%;
            aspect-ratio: 4 / 3;
            overflow: hidden;
            border-radius: 0.5rem;
          }
          .homer-legacy-frame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .homer-lottie-showcase-eyebrow {
            font-family: var(--font-mono);
            font-size: var(--fs-xs);
            letter-spacing: var(--ls-wide);
            color: var(--c-green);
            text-transform: uppercase;
            margin-bottom: 10px;
          }
          .homer-lottie-showcase {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin: 40px 0;
          }
          .homer-lottie-showcase__stack {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            min-width: 0;
          }
          .homer-lottie-frame {
            border-radius: 0.5rem;
            overflow: hidden;
            border: 0.5px solid var(--c-border-mid);
            background: var(--c-bg-surface);
          }
          .homer-lottie-frame img {
            width: 100%;
            height: auto;
            display: block;
          }
          @media (min-width: 768px) {
            .homer-lottie-showcase {
              flex-direction: row;
              align-items: flex-start;
              gap: 1.25rem;
            }
            .homer-lottie-showcase__primary,
            .homer-lottie-showcase__stack {
              flex: 1;
              min-width: 0;
            }
          }
          .homer-solution-divider {
            border-top: 0.5px solid var(--c-border);
            margin-top: 48px;
            margin-bottom: 32px;
          }
          .homer-case-study > section:last-of-type {
            margin-bottom: 32px;
          }
        `}
      </style>
      <Section id="overview">
        <Eyebrow>Overview</Eyebrow>
        <Title>A comprehensive early learning platform for children ages 2–8, built to replace two separate apps with a single personalized experience. HOMER had the content. We had to make it navigable by a two-year-old.</Title>

        <TwoCol>
          <div>
            <Sub>The context</Sub>
            <P>HOMER Learning had built a strong product in HOMER Reading — an app proven to increase early reading scores by 74% with just 15 minutes a day. But the company&apos;s ambition had grown. The goal was to merge HOMER Reading and HOMER Stories into a single unified platform spanning reading, math, social-emotional learning, creativity, and thinking skills. That meant throwing out the old architecture entirely and starting from scratch.</P>
          </div>
          <div>
            <Sub>My role</Sub>
            <P>I joined as a product designer partnering with the design lead on what was effectively a zero-to-one rebuild of HOMER&apos;s core product. The scope covered end-to-end UX — information architecture, interaction design, design system, and final UI — across iOS and Android. I worked within an agile sprint process alongside a product manager, user researchers, engineers, curriculum experts, illustrators, animators, and a marketing team.</P>
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
          <video
            src="/images/work/homer-landing-page-3x2.mp4"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            aria-label="Homer landing page screen recording"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      <Section id="research">
        <Eyebrow>Research</Eyebrow>
        <Title>The hardest design constraint wasn&apos;t the content library. It was the user.</Title>

        <HomerLegacyBeforeRedesign />

        <P>Before touching screens, I spent significant time with HOMER&apos;s learning and curriculum experts and immersed myself in research on child psychology and developing motor skills. Children ages 2–8 have an extremely low tolerance for frustration, limited literacy, and no patience for hierarchy. Every assumption I brought in from adult product design had to be pressure-tested against that reality.</P>

        <KeyInsight
          quote="A 2-year-old navigating alone means every extra tap is a potential exit point. Content should never be more than 3 taps away."
        />

        <div className="mx-auto my-10 w-full max-w-4xl">
          <Image
            src="/images/homer/brainstormfigjam.jpg"
            alt="Research synthesis — FigJam board on child development constraints and legacy pathway model"
            width={1600}
            height={1000}
            quality={95}
            className="h-auto w-full rounded-lg object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <p
            className="opacity-60"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--c-text-3)',
              lineHeight: 'var(--lh-base)',
              marginTop: '10px',
              marginBottom: 0,
            }}
          >
            Research synthesis — constraints from child development and the legacy pathway model.
          </p>
        </div>

        <P>We also inherited a specific challenge from the previous app: HOMER Reading had used a centralized learning pathway model that worked well for a single subject but couldn&apos;t scale to a multi-subject platform. We needed a new architecture from the ground up.</P>
      </Section>

      <Section id="objectives">
        <Eyebrow>Objectives</Eyebrow>
        <Title>Three goals. Each tied to something measurable.</Title>

        {[
          {
            num: '01',
            title: 'Make content discovery work without reading',
            body: 'The new platform had hundreds of pieces of content across five subject areas. Kids couldn&apos;t rely on labels or categories. Navigation had to work through visual recognition, age-appropriate iconography, and a shallow hierarchy that kept the main menu always within a few taps.',
          },
          {
            num: '02',
            title: 'Design for two audiences in one app',
            body: 'HOMER Learn & Grow had to serve children independently while giving parents visibility and control. Parent-facing screens, settings, and alerts needed to coexist without confusing young users — using age gates, muted visual hierarchy for adult UI, and clear exit paths if a child accidentally triggered a parent screen.',
          },
          {
            num: '03',
            title: 'Build in delight that earns its place',
            body: 'Moments of joy — Lottie animations, in-app transitions, sound design — are what make children come back. They&apos;re also the first things cut when timelines compress. Advocating for these wasn&apos;t just a design preference; it was a retention argument.',
          },
        ].map(({ num, title, body }) => (
          <div key={num} style={{ padding: '40px 0', borderBottom: '0.5px solid var(--c-border)' }}>
            <div className="section-eyebrow" style={{ color: 'var(--c-green)', marginBottom: '12px' }}>
              Objective {num}
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-heading-3)', fontWeight: 400, color: 'var(--c-text)', marginBottom: '20px', letterSpacing: '-0.01em' }}>
              {title}
            </h3>
            <P>{body}</P>
          </div>
        ))}
      </Section>

      <Section id="solution">
        <Eyebrow>Solution</Eyebrow>
        <Title>A shallow architecture, a flexible grid, and a design system built to grow.</Title>

        <P>The core navigation decision was a deliberately shallow information hierarchy — a flexible grid of content categories on the main menu, organized by age and emotional scheduling needs, so that kids were never more than a few taps from anything. Button placement on the main menu adapts based on the child&apos;s age, making the experience feel personalized without requiring any input from the child.</P>

        <ImgBlock id="10" imageEyebrow="UX audit: Improved content discovery" label="Solution — main menu and shallow IA" caption="Learn & Grow information architecture and core app flow" src="/images/work/homer-img-10.png" hug={true} intrinsicWidth={8192} intrinsicHeight={5460} />

        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'var(--fs-heading-3)',
            fontWeight: 400,
            color: 'var(--c-text)',
            letterSpacing: '-0.01em',
            lineHeight: 1.25,
            marginTop: 0,
            marginBottom: '24px',
            maxWidth: '680px',
          }}
        >
          From concept to foundation
        </h3>

        <P>We built the design system from scratch — streamlining button styles, states, and positioning to create consistent UI patterns that supported intuitive navigation. Every button and illustration was tested with real children to ensure they were communicating clearly before going into production.</P>

        <P>For the parent experience, we used age gates and visually subordinate UI to keep parent-facing screens accessible but unobtrusive — always pairing them with voice-over instruction and easy exit paths for kids who wandered in accidentally.</P>

        <ImgBlock id="11" imageEyebrow="Examples of our build for the design system and interaction framework" label="Learn & Grow — design system documentation: components, offline flow, navigation elements, and motion timeline" src="/images/work/homer-learn-grow-ui.jpg" hug={true} intrinsicWidth={1024} intrinsicHeight={682} />

        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'var(--fs-heading-3)',
            fontWeight: 400,
            color: 'var(--c-text)',
            letterSpacing: '-0.01em',
            lineHeight: 1.25,
            marginTop: 0,
            marginBottom: '24px',
            maxWidth: '680px',
          }}
        >
          Using motion to create delight and engagement
        </h3>

        <P>The delight layer — Lottie animations, in-app transitions, sound effects — was designed in close collaboration with the illustration and animation team, and advocated for at every roadmap review. These moments aren&apos;t decoration; they&apos;re what make a children&apos;s app feel alive and keep young learners coming back.</P>

        <div className="homer-lottie-showcase-eyebrow">Menu transitions and payoff animations</div>

        <div className="homer-lottie-showcase" role="group" aria-label="Animated GIF examples from Learn & Grow">
          <div className="homer-lottie-showcase__primary">
            <div className="homer-lottie-frame">
              <Image
                src="/images/work/lotties1.gif"
                alt="Learn & Grow subject thumbnails in a grid with playful motion and color"
                width={1500}
                height={1496}
                decoding="async"
                loading="lazy"
                unoptimized
              />
            </div>
          </div>
          <div className="homer-lottie-showcase__stack">
            <div className="homer-lottie-frame">
              <Image
                src="/images/work/lotties2.gif"
                alt="Celebration animation with a bird in a plane towing a You did it banner"
                width={1450}
                height={696}
                decoding="async"
                loading="lazy"
                unoptimized
              />
            </div>
            <div className="homer-lottie-frame">
              <Image
                src="/images/work/lotties3.gif"
                alt="Moose character in a circular frame with confetti and geometric shapes"
                width={1450}
                height={696}
                decoding="async"
                loading="lazy"
                unoptimized
              />
            </div>
          </div>
        </div>

        <HomerLegacyBeforeRedesign
          leadingSpacing
          heading="After the redesign"
          heroImage={{
            src: '/images/work/homer-after-marketing.png',
            alt: 'HOMER Learn & Grow on a tablet with subject tiles for Math, Reading, and Stories beside the HOMER cat mascot',
            width: 1024,
            height: 734,
          }}
          shots={HOMER_AFTER_REDESIGN_SCREENSHOTS}
          gridClassName="homer-after-shots"
        />

        <div className="homer-solution-divider" aria-hidden="true" />
      </Section>

      <Section id="process">
        <Eyebrow>Process</Eyebrow>
        <Title>Zero-to-one in sprints — systems, specialists, and constant kid testing.</Title>

        <TwoCol>
          <div>
            <Sub>How the team worked</Sub>
            <P>We ran in agile sprints with tight feedback loops between design, product, research, and engineering — and we treated curriculum experts as design partners, not reviewers at the end. That rhythm let us kill dead-ends early and keep the IA decisions tied to real child behavior.</P>
          </div>
          <div>
            <Sub>What stayed non-negotiable</Sub>
            <P>Child sessions stayed on the calendar even when timelines compressed. The shallow architecture, parent gates, and design system foundations were the scaffolding everything else hung on — so we protected testing and system consistency the same way we protected launch scope.</P>
          </div>
        </TwoCol>
      </Section>

      <Section id="outcome">
        <Eyebrow>Outcome</Eyebrow>
        <Title>The app launched to press coverage and a 25% increase in child engagement.</Title>

        <P>HOMER Learn & Grow shipped as a full platform replacement — not an update, a complete reimagination — and was covered by Business Wire at launch. The redesigned navigation and optimized core app flows drove a 25% increase in child engagement across the 2–6 age range, validated through playtesting and iterative UX improvements.</P>

        <P>The platform replaced both HOMER Reading and HOMER Stories while preserving existing users&apos; reading pathways, expanding the curriculum to five subject areas, and earning KidSAFE certification. It remains HOMER&apos;s core product today.</P>

        <P>The shallow architecture proved its worth immediately — children could navigate independently, which was the product&apos;s central promise to parents: guilt-free, educational screen time, any time, anywhere.</P>

        <SesameIpadDemoEmbed
          label="Open Begin — HOMER, see it in action and play a lesson free"
          previewSrc="/images/work/homer-begin-click-to-play-preview.jpg"
          href="https://www.beginlearning.com/homer/pdp#:~:text=See%20It%20in%20Action%20%E2%80%93%20Play%20a%20Lesson%20Free!"
        />
      </Section>

      <Section id="reflection">
        <Eyebrow>Reflection</Eyebrow>
        <div style={reflectionWrap}>
          <Title>What I&apos;d do differently</Title>
          <P>
            I&apos;d push harder for delight from the start of the roadmap conversation, not at the end. Lottie animations and sound design were consistently the first things cut under timeline pressure — but they&apos;re also what makes a children&apos;s app actually sticky. Making the retention case for those moments earlier, with data, would have protected more of them.
          </P>
          <P>
            I&apos;d also advocate for more structured testing with the youngest users — ages 2–3 — where our signal was weakest and assumptions were most likely to break down.
          </P>
          <Sub>What I&apos;d protect</Sub>
          <P>
            The decision to design the system from scratch rather than retrofit the old architecture. Starting with a clean design system meant consistent patterns, faster iteration, and a product that felt cohesive from day one.
          </P>
          <P>
            And the relationships with curriculum and learning experts. Designing for children without deep subject matter input is a liability. That cross-functional trust was what kept the product honest.
          </P>
        </div>
      </Section>

      <Section id="see-it-in-action">
        <Eyebrow>See it in action</Eyebrow>
        <P>The app is available on iOS and Android.</P>
        <div className="case-study-store-links">
          <a
            href="https://apps.apple.com/us/app/homer-fun-learning-for-kids/id601437586"
            className="case-study-store-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Store <span className="case-study-store-link-arrow" aria-hidden="true">↗</span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.learnwithhomer.webapp&hl=en_US"
            className="case-study-store-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play <span className="case-study-store-link-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="section-subtext case-study-store-note">
          Note that the product has continued to evolve since the original 2020 launch — this case study reflects the work completed during my tenure.
        </p>
      </Section>
    </div>
  );
}
