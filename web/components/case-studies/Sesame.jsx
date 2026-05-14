import SesameIpadDemoEmbed from '@/components/SesameIpadDemoEmbed';
import { Section, Eyebrow, Title, Sub, P, TwoCol, KeyInsight, VersionLabel, ImgBlock } from './CaseStudyShared';

export default function Sesame() {
  return (
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
            <P>I served as lead designer on the project, working across a cross-functional team spanning product, curriculum, engineering, and outside illustration vendors — while collaborating directly with the Sesame Workshop stakeholder team to navigate a complex approval process across two organizations with different priorities and design sensibilities.</P>
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
            src="/images/work/sesame-hero-carousel-1-app-3x2.mp4"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            aria-label="Sesame app hero carousel screen recording"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      <Section id="research">
        <Eyebrow>Research</Eyebrow>
        <Title>We spent a week in a design sprint before touching a single screen. It was the right call.</Title>

        <P>Before the project kicked off, I researched around 20 apps in the SEL, wellness, and education space to map the competitive landscape. Most were either too adult-directed, too gamified, or too content-heavy for very young children.</P>

        <ImgBlock id="03" label="Competitive analysis grid — 20 apps across SEL, wellness, education" caption="Image of a FigJam board from a group brainstorm session that I hosted" src="/images/work/SesameStCompetitiveAnalysis.jpg" hug />

        <P>To align both organizations, the HOMER team ran a week-long design sprint with around 20 participants from Homer and Sesame — covering business strategy, curriculum goals, and product design. I helped plan and facilitate alongside the Director of Product and Design Manager.</P>

        <P>After the sprint, I built out user personas for both children and their parents and caregivers — since the app had to work for both simultaneously.</P>

        <ImgBlock id="06" label="Design sprint — cross-functional brainstorm with Homer and Sesame Workshop teams" caption="Working session during the week-long sprint before screen design." src="/images/work/BrainstormingSession.png" hug />

        <P>We then tested early navigation prototypes with 10 children ages 3–4, focusing on key questions: Where do they tap? Do they understand the buildings and characters are tappable? Are the background images distracting? Can they find their way back to favorite content? The answers shaped every structural decision that followed.</P>

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
          },
          {
            num: '02',
            title: 'Build an "Our Neighborhood" world that felt alive',
            body: "We tested multiple art styles and app store prototypes with real children and parents before locking a direction. The winning concept used Sesame Street's iconic locations as navigation hubs — giving children a spatial, character-led mental model instead of a category list.",
          },
          {
            num: '03',
            title: 'Design for sequential content consumption',
            body: "Sesame Workshop decided mid-project that each location would represent a specific SEL theme — the Playground for Kindness and Empathy, the School for Navigating Social Spaces — with content experienced in a specific order. This changed the navigation problem entirely and required a full redesign of the submenu system.",
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
        <Title>A location-based main menu, icon-only navigation, and a content flow system that guided children without them knowing they were being guided.</Title>

        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--fs-heading-3)',
          fontWeight: 400,
          color: 'var(--c-text)',
          marginBottom: '20px',
          letterSpacing: '-0.01em',
        }}>
          Main menu
        </h3>

        <P>The main menu became a richly illustrated neighborhood map — each building representing a content theme. Children navigated by tapping locations, not reading labels. Characters were placed throughout to draw attention and signal interactivity.</P>

        <Eyebrow>Concept and wireframes</Eyebrow>

        <ImgBlock id="09" label="Main menu — early concepting and exploration" aspect="16/10" src="/images/work/sesamest-menuconcepting.jpg" fit="cover" />

        <Eyebrow>Finalized version</Eyebrow>

        <ImgBlock id="10" label="Final main menu design — Our Neighborhood illustrated map" aspect="16/10" src="/images/work/sesame-img-10.jpg" fit="cover" />

        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--fs-heading-3)',
          fontWeight: 400,
          color: 'var(--c-text)',
          marginBottom: '20px',
          letterSpacing: '-0.01em',
        }}>
          Submenu - content navigation
        </h3>

        <P>The submenu system went through two full redesigns. The first version used illustrated background scenes with tappable characters — children froze, confused about whether the background was a video. We scrapped it entirely.</P>

        <KeyInsight eyebrow="Prototype testing questions">
          <P>We tested the prototype with children ages 3–4 to better understand how pre-literate users interpreted the navigation system and interacted with the environment.</P>
          <P>We specifically wanted to learn:</P>
          <ul className="section-subtext case-study-list">
            <li>Do children understand that buildings and characters are tappable?</li>
            <li>Do they navigate using spatial memory or visual detail?</li>
            <li>Are illustrated backgrounds perceived as interactive or passive?</li>
            <li>Can children independently return to previously viewed content?</li>
            <li>How much visual complexity is too much before interaction clarity breaks down?</li>
          </ul>
          <p className="section-subtext" style={{ marginBottom: 0 }}>
            The results fundamentally changed the product direction.
          </p>
        </KeyInsight>

        <VersionLabel type="fail">Version 1 — failed in prototype testing</VersionLabel>

        <ImgBlock id="11" label="Version 1 submenu — illustrated interactive environment before three-up screens" src="/images/work/SesameStreetSubmenuBefore.jpg" hug />

        <ImgBlock id="12" label="First submenu iteration — illustrated backgrounds (killed)" caption="Three location submenu screens from the first version of the submenu navigation. Children confused interactive elements with video." cols={3} srcs={['/images/work/sesame-img-12-01.jpg', '/images/work/sesame-img-12-02.jpg', '/images/work/sesame-img-12-03.jpg']} />

        <P>The first submenu prototypes used richly illustrated interactive environments designed to feel immersive and playful. In testing, the opposite happened.</P>
        <P>Children often struggled to distinguish interactive elements from decorative scenery. Several users attempted to tap background objects repeatedly, while others ignored important navigation cues entirely.</P>
        <P>One child froze completely after entering the submenu because she believed the environment was a passive video rather than an interactive screen.</P>
        <P>The testing revealed that visual richness was competing directly with usability.</P>

        <P>The second version used a minimalist monochrome background to separate it visually from the main menu, with horizontally scrolling content buttons featuring icons and titles for parent legibility.</P>

        <Eyebrow>Finalized version</Eyebrow>

        <ImgBlock id="14" label="Shipped submenu — horizontal scrolling content cards on simplified illustrated background" src="/images/work/sesame-submenu-finalized.png" hug />

        <ImgBlock id="13" label="Before/after submenu redesign" caption="Pages 5–6 — before showing the cluttered illustrated submenu, after showing the clean monochrome version. Three location submenu screens showing the redesigned clean monochrome version that made it into production." cols={3} srcs={['/images/work/sesame-img-13-01.jpg', '/images/work/sesame-img-13-02.jpg', '/images/work/sesame-img-13-03.jpg']} />

        <P>To reduce cognitive load, we simplified the visual hierarchy dramatically. The redesigned submenu system separated background environments from tappable content, introduced horizontally scrolling content cards, and reduced the number of simultaneous interaction targets on screen.</P>
        <P>The result was visually less ambitious, but significantly easier for children to understand and navigate independently.</P>

        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--fs-heading-3)',
          fontWeight: 400,
          color: 'var(--c-text)',
          marginBottom: '20px',
          letterSpacing: '-0.01em',
        }}>
          Content flow: putting it all together
        </h3>

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
        <Title>The app launched on schedule for Q4. It&apos;s still reaching children today.</Title>

        <P>The Learn with Sesame Street app shipped on schedule and has since reached over 500,000 downloads on Android alone, remaining an active product under Begin Learning&apos;s portfolio today.</P>

        <P>The final product shipped across iOS, Android, and web with a multi-layered &ldquo;Neighborhood&rdquo; navigation model built around spatial recognition instead of reading comprehension. Children navigated by recognizing locations, characters, and visual landmarks — not category labels.</P>

        <P>Prototype testing validated that younger users understood the neighborhood mental model significantly faster than traditional menu-based navigation. Children were able to independently return to familiar locations and favorite content using spatial memory alone.</P>

        <P>The final experience guided children through themed SEL learning paths without requiring constant decision-making at every step. Instead of functioning like a traditional content library, the app behaved more like a structured emotional learning journey disguised as exploration and play.</P>

        <P>One of the biggest wins was simplifying the submenu system. Early versions used fully illustrated interactive environments, but testing revealed that children struggled to distinguish decorative background elements from tappable interactions. Reducing visual complexity and introducing horizontally scrolling content cards dramatically improved usability and interaction clarity.</P>

        <P>The navigation foundation proved durable. The app has since expanded with an extended content library, new exclusive classes, and physical kit bundles — all built on top of the same core architecture we designed.</P>

        <SesameIpadDemoEmbed label="Open Begin Learn with Sesame Street — See It in Action, play a game" />
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

      <Section id="see-it-in-action">
        <Eyebrow>See it in action</Eyebrow>
        <P>Watch the app demo above, or download it yourself:</P>
        <div className="case-study-store-links">
          <a
            href="https://apps.apple.com/us/app/learn-with-sesame-street/id1556706683"
            className="case-study-store-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Store <span className="case-study-store-link-arrow" aria-hidden="true">↗</span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.homer.sesame&hl=en_US"
            className="case-study-store-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play <span className="case-study-store-link-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="section-subtext case-study-store-note">
          Note: the product has continued to evolve since the original 2021 launch — this case study reflects the work completed during my tenure.
        </p>
      </Section>
    </>
  );
}
