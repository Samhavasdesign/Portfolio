# YukiHomes — Navigation prototype

UX audit prototype for YukiHomes (a Japan real-estate client of the agency Avianu). A single static page, `index.html`, that redesigns the site's header and navigation, with a hero section for context. There is no build step: open `index.html` in a browser, or serve the folder (`npx serve .`) so the video loads reliably.

The live site is built in Webflow, so everything here should stay translatable to Webflow: plain HTML/CSS, light vanilla JS, no frameworks.

## Files
- `index.html` — all markup, CSS and JS inline
- `assets/yukihomes-logo.webp` — logo
- `assets/shibuya-crossing.mp4`, `assets/hero-poster.jpg` — the previous hero background video and its poster frame. No longer referenced by `index.html` since the hero moved to a flat ink-black editorial layout; kept on disk in case a video treatment returns elsewhere.

## Current design decisions
- **Type:** Archivo (Google Fonts, variable) for display. Wordmark, top-level nav links and mobile menu rows use Archivo Expanded Bold (`font-stretch:125%`, weight 700). The hero H1 pushes the same face further — `font-stretch:125%`, weight 800, all caps, tight tracking, 0.92 line height. Secondary links (dropdown items, mobile sub-links) use Helvetica regular. Nav/panel CTAs use Helvetica bold, uppercase. Helvetica stack is `--font-ui`; a script face (`Caveat`, `--font-script`) is used once, for the handwritten accent beside the hero image.
- **Brand direction:** stay sans serif; the studio's roots are snowboarding/surfing and film photography. Avoid a lux/real-estate serif feel — the hero now leans further into snowboard-film / editorial-outdoor territory (ink black, acid green, cream) rather than traditional real estate or SaaS.
- **Hero palette:** ink black background (`--bg:#0D0D0D`), warm cream text (`--text:#F5F1E8`), acid green accent (`--acid:#DFFF00`) used only for the eyebrow rule, the primary CTA, hover states, the active-nav underline and one script accent — never as a fill or dominant colour. Neutral gray (`--gray:#767676`) for small caption/metadata text.
- **Hero layout:** two-column editorial grid at ≥901px (headline ~60% width, image ~35%, generous gap) collapsing to a single stacked column below that. No full-bleed background image or video — the image is a small, cropped, rectangular "film still" with real negative space around it, plus tiny uppercase caption metadata (location, coordinates) underneath, styled like a photo credit line.
- **Nav layout:** no pill container; links left-aligned right after the logo; Get Started at far right. Unchanged structurally by the hero redesign — only its colours moved to the cream/acid palette.
- **Sticky header:** fixed. Logo, nav and header height never change on scroll; only the background swaps from a fading scrim to a solid blurred bar.
- **Logo:** 65px tall desktop, 54px phones.
- **Links:** cream in every state; hover feedback via background tint or small shift, never colour.
- **Two CTA styles, split by role:** the nav/panel "Get Started" stays a small outlined button (transparent, 0.75px cream inset stroke, cream label; hover inverts to acid green fill with ink text). The hero's "Find your dream home" is a solid acid-green rectangle with ink text, 6px corners (`--radius-cta`) — compact, not oversized, no pill/gradient/shadow.
- **Desktop dropdown trays:** black background.
- **Hero H1:** `clamp(2.75rem,7.4vw,6.75rem)`, three manual line breaks ("Buy Japan. / Skip the / bullshit."), all caps via `text-transform`.
- **Menus by breakpoint:** phones (≤640px) full-screen panel; tablet (641–900px) right-hand drawer capped at 440px over a dimmed backdrop; desktop (≥901px) dropdowns. The hero's own two-column/one-column breakpoint is set separately, at 901px.

## Keep in sync
The page ends with a notes section ("What changed, and why" and "Design revisions"). When changing the design, update the matching line there so the notes stay accurate.

## Known caveats
- The brand's Webflow-hosted "Helvetica New" only ships 300/400/500. Bold (700) would be synthesised in Webflow unless a bold file is uploaded.
- The 0.75px stroke may render as 1px or faint on standard-resolution screens.
- **The hero image is a placeholder.** There's no licensed photo asset in this project, so the right-side "film still" is an inline SVG illustration (gradient sky, flat mountain shapes, a piste line, a pictogram figure) standing in for a real photograph — e.g. a snowboarder descending powder in Niseko. Swap `assets/` in a real image and replace the `<svg>` in the `.hero-figure` with an `<img>` before this ships anywhere real.
