import Image from 'next/image';
import SesameIpadDemoEmbed from '@/components/SesameIpadDemoEmbed';
import { Section, Eyebrow, Title, Sub, P, TwoCol, KeyInsight, VersionLabel, ImgBlock } from './CaseStudyShared';

const HOMER_LEGACY_SCREENSHOTS = [
  {
    label: 'Homescreen',
    src: '/images/homer/legacyhomer.webp',
    alt: 'Legacy HOMER app homepage',
    caption:
      'Too many distractions and buttons for kids to easily navigate. We saw a lot of frustration and confusion on this screen.',
  },
  {
    label: 'Reading pathway',
    src: '/images/homer/legacyreadingpathway.webp',
    alt: 'Legacy HOMER reading pathway screen',
    caption:
      "The only interactivity on this screen is the lessons. We saw a lot of taps on the bottom icons, distraction with the background art, and confusion around 'locked' lessons.",
  },
  {
    label: 'Lesson menu',
    src: '/images/homer/legacylessonsmenu.webp',
    alt: 'Legacy HOMER lesson menu screen',
    caption:
      'Two-way scroll was confusing for kids, and hierarchy is confusing.',
  },
];

/**
 * Layout mirrors Sesame.jsx section-for-section so you can swap copy and
 * wire images under /public/images/work/homer-* (see src paths below).
 */
export default function Homer() {
  return (
    <>
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
          Before the redesign
        </h3>

        <div className="homer-legacy-shots">
          {HOMER_LEGACY_SCREENSHOTS.map((item) => (
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
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-sm)',
                  color: 'var(--c-text-3)',
                  lineHeight: 'var(--lh-base)',
                  marginTop: '10px',
                  marginBottom: 0,
                  opacity: 0.6,
                }}
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        <P>Before touching screens, I spent significant time with HOMER&apos;s learning and curriculum experts and immersed myself in research on child psychology and developing motor skills. Children ages 2–8 have an extremely low tolerance for frustration, limited literacy, and no patience for hierarchy. Every assumption I brought in from adult product design had to be pressure-tested against that reality.</P>

        <KeyInsight
          eyebrow="The 3-tap rule"
          quote={"A two-year-old will throw a tablet across the room if they can't find what they want in three taps. That's not an exaggeration — it's a design requirement."}
        />

        <div className="mx-auto my-10 w-full max-w-4xl">
          <Image
            src="/images/homer/brainstormfigjam.jpg"
            alt="Research synthesis — FigJam board on child development constraints and legacy pathway model"
            width={1600}
            height={1000}
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

        <ImgBlock id="06" label="Research — curriculum alignment and child development inputs" caption="Working sessions and inputs from learning experts alongside child-centered design criteria." cols={2} aspect="4/3" srcs={['/images/work/homer-img-06-02.jpg', '/images/work/homer-img-06-01.jpg']} />

        <KeyInsight
          quote="A 2-year-old navigating alone means every extra tap is a potential exit point."
          sub="The architecture had to be shallow enough that content was always within reach — and forgiving enough that getting lost wasn&apos;t possible."
        />
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

        <P>We built the design system from scratch — streamlining button styles, states, and positioning to create consistent UI patterns that supported intuitive navigation. Every button and illustration was tested with real children to ensure they were communicating clearly before going into production.</P>

        <ImgBlock id="10" label="Solution — main menu and shallow IA" caption="Flexible category grid and age-aware placement on the main menu." aspect="16/10" src="/images/work/homer-img-10.jpg" fit="cover" />

        <P>For the parent experience, we used age gates and visually subordinate UI to keep parent-facing screens accessible but unobtrusive — always pairing them with voice-over instruction and easy exit paths for kids who wandered in accidentally.</P>

        <P>The delight layer — Lottie animations, in-app transitions, sound effects — was designed in close collaboration with the illustration and animation team, and advocated for at every roadmap review. These moments aren&apos;t decoration; they&apos;re what make a children&apos;s app feel alive and keep young learners coming back.</P>

        <Sub>Prototype testing questions</Sub>
        <P>We tested navigation and comprehension with children in the 2–8 range to validate shallow IA, visual recognition, and recovery — focusing on independence, not parent prompts.</P>
        <P>We specifically wanted to learn:</P>
        <ul className="section-subtext case-study-list">
          <li>Could children find a subject and start an activity within a strict tap budget?</li>
          <li>Did iconography and layout read clearly without text labels?</li>
          <li>When a child entered a parent surface by mistake, could they exit without help?</li>
          <li>Did motion and sound clarify state changes — or add noise that slowed decisions?</li>
          <li>Did personalized placement feel obvious to kids, or did it confuse spatial memory?</li>
        </ul>
        <P>The results reinforced moving away from a single centralized pathway toward a shallow, grid-first model.</P>

        <VersionLabel type="fail">Version 1 — failed in prototype testing</VersionLabel>

        <ImgBlock id="12" label="Version 1 — pathway-heavy navigation exploration" caption="Early exploration extending a centralized pathway model across multiple subjects." cols={3} srcs={['/images/work/homer-img-12-01.jpg', '/images/work/homer-img-12-02.jpg', '/images/work/homer-img-12-03.jpg']} />

        <P>The first iteration tried to extend HOMER Reading&apos;s centralized pathway logic across five subject areas — preserving a familiar mental model for existing families.</P>
        <P>In testing, younger children stalled when the path didn&apos;t match what they wanted to do next. Depth stacked quickly, and &ldquo;back&rdquo; wasn&apos;t always obvious — which violated the tap budget we knew we had to hit.</P>
        <P>Several sessions ended with kids bouncing between screens hunting for a favorite activity type, not a prescribed sequence.</P>
        <P>The takeaway: a single-threaded pathway couldn&apos;t scale to multi-subject exploration without punishing the youngest users.</P>

        <P>We rebuilt around a shallow category grid with age-aware prominence on the home surface — prioritizing reachability over linear progression.</P>

        <VersionLabel type="success">Version 2 — shipped</VersionLabel>

        <ImgBlock id="13" label="Version 2 — shipped shallow grid and hierarchy" caption="Shipped navigation — shallow hierarchy, clearer targets, and reduced dead-ends." cols={3} srcs={['/images/work/homer-img-13-01.jpg', '/images/work/homer-img-13-02.jpg', '/images/work/homer-img-13-03.jpg']} />

        <P>The shipped system reduced depth, increased visual clarity on tappable targets, and made &ldquo;home&rdquo; consistently recoverable — so getting lost stopped being a realistic failure mode.</P>
        <P>Kids could move between subjects without reading, and parents still had clear adjacent surfaces for settings and visibility.</P>

        <ImgBlock id="16" label="Flow — shallow architecture and cross-surface model" caption="System-level view of shallow IA, parent gates, and content reachability." cols={1} aspect="4/3" src="/images/work/homer-objective-03.jpg" hug={true} />
        <P>iOS shipped first, with Android as a fast follow across a defined device matrix: iPhone 8, iPhone X, iPad Mini, Android 360, Android Pixel 2, and Galaxy Tablet 10.</P>
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
        <Title>What I&apos;d do differently, and what I&apos;d protect.</Title>

        <TwoCol>
          <div>
            <Sub>What I&apos;d do differently</Sub>
            <P>I&apos;d push harder for delight from the start of the roadmap conversation, not at the end. Lottie animations and sound design were consistently the first things cut under timeline pressure — but they&apos;re also what makes a children&apos;s app actually sticky. Making the retention case for those moments earlier, with data, would have protected more of them.</P>
            <P>I&apos;d also advocate for more structured testing with the youngest users — ages 2–3 — where our signal was weakest and assumptions were most likely to break down.</P>
          </div>
          <div>
            <Sub>What I&apos;d protect</Sub>
            <P>The decision to design the system from scratch rather than retrofit the old architecture. Starting with a clean design system meant consistent patterns, faster iteration, and a product that felt cohesive from day one.</P>
            <P>And the relationships with curriculum and learning experts. Designing for children without deep subject matter input is a liability. That cross-functional trust was what kept the product honest.</P>
          </div>
        </TwoCol>
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
    </>
  );
}
