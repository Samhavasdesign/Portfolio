export const metadata = {
  title: "Style Guide — Internal",
  robots: { index: false, follow: false },
};

/* ─── helpers ───────────────────────────────────────────────────────────── */

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ borderTop: "0.5px solid var(--c-border-mid)", paddingTop: "3rem", marginTop: "3rem" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--c-text-3)", marginBottom: "0.75rem" }}>
        {title}
      </p>
      {children}
    </section>
  );
}

function Row({ label, children, gap = "1.5rem" }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      {label && (
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-3)", marginBottom: "0.75rem", letterSpacing: "var(--ls-base)" }}>
          {label}
        </p>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap }}>
        {children}
      </div>
    </div>
  );
}

function Token({ label, sub }) {
  return (
    <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-3)", marginTop: "0.5rem" }}>
      <span style={{ color: "var(--c-text-2)" }}>{label}</span>
      {sub && <><br />{sub}</>}
    </div>
  );
}

function Swatch({ varName, hex, label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "120px" }}>
      <div
        style={{
          background: varName ? `var(${varName})` : hex,
          height: "64px",
          borderRadius: "var(--radius-sm)",
          border: "0.5px solid var(--c-border-bright)",
        }}
      />
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", lineHeight: 1.5 }}>
        <span style={{ color: "var(--c-text)" }}>{hex}</span>
        <br />
        {varName && <span style={{ color: "var(--c-purple-hover)" }}>{varName}</span>}
        {label && <><br /><span style={{ color: "var(--c-text-3)" }}>{label}</span></>}
      </div>
    </div>
  );
}

function SpacingBar({ label, value, px }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
      <div style={{ width: "7rem", fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-3)", flexShrink: 0 }}>{label}</div>
      <div style={{ height: "20px", background: "var(--c-purple-border)", width: value, borderRadius: "2px", flexShrink: 0 }} />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-2)" }}>{value} {px && `· ${px}`}</span>
    </div>
  );
}

function RadiusBox({ label, token, value }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
      <div style={{
        width: "80px", height: "80px",
        border: "0.5px solid var(--c-purple-hover)",
        background: "var(--c-bg-raised)",
        borderRadius: token ? `var(${token})` : value,
      }} />
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", textAlign: "center", color: "var(--c-text-3)" }}>
        {value}<br />
        {token && <span style={{ color: "var(--c-purple-hover)" }}>{token}</span>}
        {!token && <span style={{ color: "var(--c-text-2)" }}>{label}</span>}
        {token && label && <><br /><span style={{ color: "var(--c-text-2)" }}>{label}</span></>}
      </div>
    </div>
  );
}

function FsRow({ token, value, usage }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "0.625rem" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-purple-hover)", width: "10rem", flexShrink: 0 }}>{token}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text)", width: "3rem", flexShrink: 0 }}>{value}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-3)" }}>{usage}</span>
    </div>
  );
}

/* ─── page ──────────────────────────────────────────────────────────────── */

export default function StyleGuide() {
  return (
    <div style={{ background: "var(--c-bg)", color: "var(--c-text)", minHeight: "100vh", paddingTop: "80px", paddingBottom: "10rem" }}>

      {/* Internal notice */}
      <div style={{
        background: "#1a1200",
        borderBottom: "0.5px solid #3a2e00",
        padding: "0.6rem var(--grid-margin)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-sm)",
        color: "#c8a840",
        letterSpacing: "var(--ls-tight)",
      }}>
        ⚠ INTERNAL — Style Guide · Not indexed · Not linked from nav
      </div>

      <div style={{ padding: "4rem var(--grid-margin) 0" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, color: "var(--c-text)", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
          Style Guide
        </h1>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-body)", color: "var(--c-text-2)", marginBottom: "0.5rem" }}>
          Live reference for all design tokens, components, and patterns in use.
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-base)", color: "var(--c-text-3)" }}>
          Everything on this page renders using the site&apos;s actual CSS — it is a live demo.
        </p>

        {/* ── 1. TYPOGRAPHY ──────────────────────────────────────────── */}
        <Section id="typography" title="1 · Typography">

          <Row label="Font families">
            <div>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "var(--c-text)", margin: 0 }}>
                The quick brown fox
              </p>
              <Token label="--font-serif · Georgia, Times New Roman, serif" sub="Headings, card titles, display, metric values" />
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "20px", color: "var(--c-text)", margin: 0 }}>
                The quick brown fox
              </p>
              <Token label="--font-mono · Geist Mono" sub="Body, labels, nav, tags, eyebrows, code" />
            </div>
          </Row>

          <Row label="Type scale tokens (--fs-*)">
            <div style={{ width: "100%" }}>
              <FsRow token="--fs-xs"         value="11px"  usage="Style guide labels, internal UI only" />
              <FsRow token="--fs-sm"         value="12px"  usage="Hero chips, hero eyebrow, stat labels, event pills, form labels (ContactModal)" />
              <FsRow token="--fs-base"       value="14px"  usage="Nav, section eyebrow/meta, card meta/summary/tag/label, chatbot sub/prompts/toggle" />
              <FsRow token="--fs-body"       value="15px"  usage="Section subtext, nav mobile links, chatbot messages/input, hero intro" />
              <FsRow token="--fs-ui"         value="16px"  usage="Chatbot send button · iOS zoom-safe minimum for interactive inputs" />
              <FsRow token="--fs-card-title" value="19px"  usage="WorkGridCard title (company name)" />
              <FsRow token="--fs-metric"     value="24px"  usage="WorkGridCard metric value" />
              <FsRow token="--fs-heading-2"  value="34px"  usage="h2 global, .section-heading (scales to 38px / 36px at 768px)" />
              <FsRow token="--fs-heading-3"  value="26px"  usage="h3 global (scales to 30px at 768px)" />
            </div>
          </Row>

          <Row label="Letter spacing tokens (--ls-*)">
            <div style={{ width: "100%" }}>
              {[
                { token: "--ls-tight",  value: "0.06em", usage: "card-meta, card-metric-label, chatbot-toggle-label" },
                { token: "--ls-base",   value: "0.08em", usage: "nav-link, nav-mobile-link, section-meta, hero-cta" },
                { token: "--ls-wide",   value: "0.10em", usage: "hero-event-pill, hero-refresh, card-placeholder-label" },
                { token: "--ls-wider",  value: "0.12em", usage: "hero-chip, hero-stat-label, card-tag" },
                { token: "--ls-widest", value: "0.14em", usage: "WorkShowcase feature card h3" },
                { token: "--ls-hero",   value: "0.35em", usage: "hero-eyebrow, section-eyebrow" },
              ].map(({ token, value, usage }) => (
                <div key={token} style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "0.625rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-purple-hover)", width: "10rem", flexShrink: 0 }}>{token}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text)", width: "4rem", flexShrink: 0 }}>{value}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-3)" }}>{usage}</span>
                </div>
              ))}
            </div>
          </Row>

          <Row label="Line height tokens (--lh-*)">
            <div style={{ width: "100%" }}>
              {[
                { token: "--lh-tight",   value: "1.2",  usage: "h2 (1.08 overrides), display text" },
                { token: "--lh-snug",    value: "1.4",  usage: "card-title (1.35 overrides)" },
                { token: "--lh-base",    value: "1.6",  usage: "card-summary, chatbot-msg-assistant" },
                { token: "--lh-relaxed", value: "1.75", usage: "Reserved — closest named stop above 1.65" },
              ].map(({ token, value, usage }) => (
                <div key={token} style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "0.625rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-purple-hover)", width: "10rem", flexShrink: 0 }}>{token}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text)", width: "4rem", flexShrink: 0 }}>{value}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-3)" }}>{usage}</span>
                </div>
              ))}
            </div>
          </Row>

          <Row label="Display / Hero (Georgia · --hero-fs-display + 2pt · lh 1.02)">
            <div>
              <p className="hero-display" style={{ margin: 0 }}>Designed it.</p>
              <Token label=".hero-display · calc(38px + 2pt) / 44px at md" />
            </div>
          </Row>

          <Row label="Global headings">
            <div>
              <h2 style={{ margin: 0 }}>Section heading h2</h2>
              <Token label="h2 · --fs-heading-2 (34px) / 38px at 768px · Georgia · lh 1.08" />
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Sub-heading h3</h3>
              <Token label="h3 · --fs-heading-3 (26px) / 30px at 768px · Georgia · lh 1.14" />
            </div>
          </Row>

          <Row label="Section classes">
            <div>
              <p className="section-heading" style={{ margin: 0 }}>Selected work</p>
              <Token label=".section-heading · --fs-heading-2 / 36px at 768px · Georgia" />
            </div>
            <div>
              <p className="section-eyebrow" style={{ margin: 0 }}>Portfolio</p>
              <Token label=".section-eyebrow · --fs-base · uppercase · --ls-hero" />
            </div>
            <div>
              <p className="section-meta" style={{ margin: 0 }}>6 PROJECTS · 2016–2025</p>
              <Token label=".section-meta · --fs-base · --ls-base" />
            </div>
            <div style={{ maxWidth: "320px" }}>
              <p className="section-subtext" style={{ margin: 0 }}>Scroll-driven reveals below mirror how case studies enter the page.</p>
              <Token label=".section-subtext · --fs-body · lh 1.65" />
            </div>
          </Row>

          <Row label="Card classes">
            <div>
              <p className="card-title" style={{ margin: 0 }}>Angi</p>
              <Token label=".card-title · --fs-card-title · Georgia" />
            </div>
            <div>
              <p className="card-meta" style={{ margin: 0 }}>Senior Product Designer · 2022–2025</p>
              <Token label=".card-meta · --fs-base · --c-purple-hover · --ls-tight" />
            </div>
            <div style={{ maxWidth: "240px" }}>
              <p className="card-summary" style={{ margin: 0 }}>Redesigning the core marketplace experience for 280K+ daily visitors.</p>
              <Token label=".card-summary · --fs-base · --lh-base" />
            </div>
            <div>
              <span className="card-tag">Growth</span>
              <Token label=".card-tag · --fs-base · --radius-sm · --c-border-bright border · --ls-wider" />
            </div>
            <div>
              <span className="card-metric-value">$3M+</span>
              <Token label=".card-metric-value · --fs-metric · Georgia" />
            </div>
            <div>
              <span className="card-metric-label">daily revenue impacted</span>
              <Token label=".card-metric-label · --fs-base · --ls-tight" />
            </div>
          </Row>

          <Row label="Hero small text">
            <div>
              <p className="hero-intro" style={{ margin: 0 }}>I design and build AI-native products.</p>
              <Token label=".hero-intro · --fs-body · lh 1.625" />
            </div>
            <div>
              <span className="hero-chip" style={{ border: "0.5px solid var(--c-border-bright)", padding: "2px 8px", borderRadius: "var(--radius-sm)" }}>Figma</span>
              <Token label=".hero-chip · --fs-sm · uppercase · --ls-wider" />
            </div>
            <div>
              <p className="hero-stat-value" style={{ margin: 0 }}>10</p>
              <Token label=".hero-stat-value · --hero-fs-stat-value (22px)" />
            </div>
            <div>
              <p className="hero-stat-label" style={{ margin: 0 }}>Years exp.</p>
              <Token label=".hero-stat-label · --hero-fs-stat-label (12px) · --ls-wider" />
            </div>
          </Row>

          <Row label="Nav text">
            <div>
              <a className="nav-link" href="#" style={{ display: "inline-block" }}>Work</a>
              <Token label=".nav-link · --fs-base · --ls-base" />
            </div>
            <div>
              <a className="nav-cta" href="#" style={{ display: "inline-flex" }}>{"Let's talk →"}</a>
              <Token label=".nav-cta · --fs-base · green outlined" />
            </div>
          </Row>

          <Row label="Chatbot / form text">
            <div>
              <span className="chatbot-header-title">ASK SAM</span>
              <Token label=".chatbot-header-title · --fs-body · --c-purple" />
            </div>
            <div>
              <span className="chatbot-header-sub">Portfolio assistant</span>
              <Token label=".chatbot-header-sub · --fs-base · --c-text-2" />
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-sm)", color: "var(--c-error)" }}>Please enter a valid email.</span>
              <Token label="Form error · --fs-sm · --c-error" />
            </div>
          </Row>

        </Section>

        {/* ── 2. COLOR PALETTE ───────────────────────────────────────── */}
        <Section id="colors" title="2 · Color Palette">

          <Row label="Backgrounds">
            <Swatch varName="--c-bg"         hex="#0a0a0a" label="Page background" />
            <Swatch varName="--c-bg-raised"   hex="#0d0d0d" label="Card / raised surface" />
            <Swatch varName="--c-bg-surface"  hex="#111111" label="Skeleton / inset" />
            <Swatch varName="--c-bg-chat"     hex="#1b1b1b" label="Modal / chatbot" />
          </Row>

          <Row label="Text">
            <Swatch varName="--c-text"   hex="#e8e4dc" label="Primary text" />
            <Swatch varName="--c-text-2" hex="#888880" label="Secondary · 5.5:1" />
            <Swatch varName="--c-text-3" hex="#848480" label="Tertiary · 5.3:1" />
          </Row>

          <Row label="Borders">
            <Swatch varName="--c-border"        hex="#1a1a1a" label="Default divider" />
            <Swatch varName="--c-border-mid"    hex="#1e1e1e" label="Mid-strength" />
            <Swatch varName="--c-border-bright" hex="#2a2a2a" label="Input / visible edge" />
          </Row>

          <Row label="Accent — Green">
            <Swatch varName="--c-green"        hex="#4ade80" label="CTA / live indicator" />
            <Swatch varName="--c-green-live"   hex="#22c55e" label="Hover / pulsing dot" />
            <Swatch varName="--c-green-border" hex="#1a3d1a" label="CTA border" />
          </Row>

          <Row label="Accent — Purple">
            <Swatch varName="--c-purple"        hex="#ddb1e6" label="Chatbot header / eyebrow" />
            <Swatch varName="--c-purple-hover"  hex="#c7a0df" label="Card meta / nav hover" />
            <Swatch varName="--c-purple-border" hex="#3a3140" label="Card hover border" />
          </Row>

          <Row label="GitHub panel grays (consolidated from 7 values)">
            <Swatch varName="--c-code-dim"    hex="#7a7a7a" label="Row text, dim, clock" />
            <Swatch varName="--c-code-mid"    hex="#9a9a9a" label="Header text" />
            <Swatch varName="--c-code-bright" hex="#bdbdbd" label="Repo name, refresh hover" />
          </Row>

          <Row label="Status">
            <Swatch varName="--c-error" hex="#df8f8f" label="Form error text/border" />
          </Row>

          <Row label="Decorative glow — local scope only (not global tokens)">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-3)", lineHeight: 2 }}>
              <div>These colors are defined as CSS custom properties on the component root element — not in <span style={{ color: "var(--c-purple-hover)" }}>:root</span>.</div>
              <div><span style={{ color: "var(--c-purple-hover)" }}>Hero.jsx</span> — --blob-purple #c58ad6 · --blob-blue #6f8dff · --blob-pink #ef8bc8 · --blob-teal #4bc0bc</div>
              <div><span style={{ color: "var(--c-purple-hover)" }}>Hero.jsx</span> — --hero-pane-bg #050505 · --hero-pane-live #07100a · --hero-pill-bg #090f09</div>
              <div><span style={{ color: "var(--c-purple-hover)" }}>WorkGrid.jsx</span> — --blob-blue #6f8dff · --blob-purple #c58ad6 · --blob-indigo #4a6fa5</div>
              <div><span style={{ color: "var(--c-purple-hover)" }}>WorkShowcase.jsx</span> — --blob-blue #6f8dff · --blob-purple #c58ad6</div>
            </div>
          </Row>

          <Row label="Hardcoded — no close token match">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-3)", lineHeight: 2 }}>
              <div><span style={{ color: "var(--c-text-2)" }}>#444440</span> — .hero-eyebrow text (near-black, intentionally dark)</div>
              <div><span style={{ color: "var(--c-text-2)" }}>#f0ece4</span> — .hero-display-highlight (slightly brighter than --c-text)</div>
              <div><span style={{ color: "var(--c-text-2)" }}>#4a8c4a</span> — .hero-event-pill text (muted green, distinct from --c-green)</div>
              <div><span style={{ color: "var(--c-text-2)" }}>#6b4f7c</span> — .chatbot-prompt-btn hover border (mid purple, between border and hover tokens)</div>
              <div><span style={{ color: "var(--c-text-2)" }}>#333</span> — Chatbot loading dots (no token match)</div>
            </div>
          </Row>

        </Section>

        {/* ── 3. BUTTONS ─────────────────────────────────────────────── */}
        <Section id="buttons" title="3 · Buttons">

          <Row label="Primary — filled green (contact form submit)">
            <div>
              <button type="button" style={{ background: "var(--c-green)", color: "var(--c-bg)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-base)", textTransform: "uppercase", letterSpacing: "var(--ls-wide)", padding: "12px 24px", border: "none", borderRadius: "var(--radius-sm)", cursor: "pointer" }}>
                Send it
              </button>
              <Token label="bg --c-green · text --c-bg · --radius-sm · --fs-base · --ls-wide" sub="Hover: bg --c-green-live" />
            </div>
            <div>
              <button type="button" style={{ background: "var(--c-green-live)", color: "var(--c-bg)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-base)", textTransform: "uppercase", letterSpacing: "var(--ls-wide)", padding: "12px 24px", border: "none", borderRadius: "var(--radius-sm)", cursor: "pointer" }}>
                Send it (hover)
              </button>
              <Token label="Hover state" />
            </div>
            <div>
              <button type="button" disabled style={{ background: "var(--c-green)", color: "var(--c-bg)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-base)", textTransform: "uppercase", letterSpacing: "var(--ls-wide)", padding: "12px 24px", border: "none", borderRadius: "var(--radius-sm)", cursor: "not-allowed", opacity: 0.8 }}>
                Sending...
              </button>
              <Token label="Disabled state · opacity 0.8" />
            </div>
          </Row>

          <Row label="Outlined green — hero CTA">
            <div>
              <a className="hero-cta" href="#">View work →</a>
              <Token label=".hero-cta · --hero-fs-cta · --c-green-border" sub="Hover: border --c-green · transition --duration-base" />
            </div>
          </Row>

          <Row label="Outlined green — nav CTA">
            <div>
              <a className="nav-cta" href="#">{"Let's talk →"}</a>
              <Token label=".nav-cta · --fs-base · padding 6px 14px" sub="Hover: border --c-green · transition --duration-base" />
            </div>
          </Row>

          <Row label="Ghost — chatbot prompt">
            <div>
              <button type="button" className="chatbot-prompt-btn">
                What&apos;s your most impactful project?
              </button>
              <Token label=".chatbot-prompt-btn · --fs-base · --c-border-mid · --radius-sm" sub="Hover: border #6b4f7c · --c-purple-hover · transition --duration-base" />
            </div>
          </Row>

          <Row label="Icon — chatbot send">
            <div>
              <button type="button" className="chatbot-send-btn">→</button>
              <Token label=".chatbot-send-btn · --fs-ui (16px) · --c-green · no border" />
            </div>
          </Row>

          <Row label="Pill — chatbot toggle">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--c-green)", borderRadius: "100px", padding: "12px 20px", cursor: "pointer" }}>
                <span className="chatbot-toggle-dot" />
                <span className="chatbot-toggle-label">Ask Sam</span>
              </div>
              <Token label=".chatbot-toggle · bg --c-green · --radius-full" sub="Toggle label: --fs-base · --ls-tight · transition --duration-base" />
            </div>
          </Row>

          <Row label="Icon — modal close">
            <div>
              <button type="button" style={{ height: "44px", width: "44px", borderRadius: "var(--radius-sm)", border: "0.5px solid var(--c-green-border)", background: "transparent", color: "var(--c-green)", fontSize: "22px", lineHeight: 1, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                ×
              </button>
              <Token label="44×44px · --radius-sm · border --c-green-border · --c-green" sub="Hover: border + text --c-green-live · transition --duration-base" />
            </div>
          </Row>

        </Section>

        {/* ── 4. FORM ELEMENTS ───────────────────────────────────────── */}
        <Section id="forms" title="4 · Form Elements">

          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-base)", color: "var(--c-text-3)", marginBottom: "2rem" }}>
            All form elements from ContactModal. Focus state: border transitions to --c-purple-hover.
          </p>

          <Row label="Label">
            <div>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-sm)", textTransform: "uppercase", letterSpacing: "var(--ls-wider)", color: "var(--c-text)" }}>
                Name
              </label>
              <Token label="--fs-sm · uppercase · --ls-wider · --c-text" />
            </div>
          </Row>

          <Row label="Text / email input — default">
            <div style={{ width: "320px" }}>
              <input type="text" placeholder="Hey, I'm..." readOnly style={{ width: "100%", fontFamily: "var(--font-mono)", fontSize: "var(--fs-body)", background: "var(--c-border)", color: "var(--c-text)", border: "0.5px solid var(--c-border-bright)", borderRadius: "var(--radius-sm)", padding: "10px 12px", outline: "none", boxSizing: "border-box" }} />
              <Token label="bg --c-border · border --c-border-bright · --fs-body · --radius-sm" sub="Placeholder: --c-text-3 · Focus: border --c-purple-hover" />
            </div>
          </Row>

          <Row label="Text input — focus (simulated)">
            <div style={{ width: "320px" }}>
              <input type="text" defaultValue="samantha@example.com" readOnly style={{ width: "100%", fontFamily: "var(--font-mono)", fontSize: "var(--fs-body)", background: "var(--c-border)", color: "var(--c-text)", border: "0.5px solid var(--c-purple-hover)", borderRadius: "var(--radius-sm)", padding: "10px 12px", outline: "none", boxSizing: "border-box" }} />
              <Token label="Focus: border --c-purple-hover" />
            </div>
          </Row>

          <Row label="Text input — error">
            <div style={{ width: "320px" }}>
              <input type="text" placeholder="Hey, I'm..." readOnly style={{ width: "100%", fontFamily: "var(--font-mono)", fontSize: "var(--fs-body)", background: "var(--c-border)", color: "var(--c-text)", border: "0.5px solid var(--c-error)", borderRadius: "var(--radius-sm)", padding: "10px 12px", outline: "none", boxSizing: "border-box" }} />
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-sm)", color: "var(--c-error)", marginTop: "4px" }}>Please share your name.</p>
              <Token label="Error: border --c-error · error text --c-error · --fs-sm" />
            </div>
          </Row>

          <Row label="Textarea">
            <div style={{ width: "320px" }}>
              <textarea placeholder="Tell me a bit more..." rows={4} readOnly style={{ width: "100%", fontFamily: "var(--font-mono)", fontSize: "var(--fs-body)", background: "var(--c-border)", color: "var(--c-text)", border: "0.5px solid var(--c-border-bright)", borderRadius: "var(--radius-sm)", padding: "10px 12px", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-3)", textAlign: "right", marginTop: "4px" }}>0 characters</p>
              <Token label="Same as input + resize:vertical · char counter --fs-xs --c-text-3" />
            </div>
          </Row>

          <Row label="Inquiry dropdown (custom select)">
            <div style={{ width: "320px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "var(--fs-body)", background: "var(--c-border)", color: "var(--c-purple-hover)", border: "0.5px solid var(--c-purple-hover)", borderRadius: "var(--radius-sm)", padding: "10px 12px", cursor: "pointer" }}>
                <span>Job opportunity</span>
                <span style={{ fontSize: "var(--fs-xs)" }}>▼</span>
              </div>
              <Token label="Selected: border + text --c-purple-hover" sub="Unselected: border --c-border-bright · text --c-text" />
            </div>
            <div style={{ width: "320px" }}>
              <div style={{ border: "0.5px solid var(--c-border-mid)", borderRadius: "var(--radius-sm)", background: "var(--c-bg-raised)", padding: "4px", boxShadow: "0 8px 24px rgba(0,0,0,0.45)" }}>
                {["Job opportunity", "Freelance project", "Collaboration", "Just saying hi"].map((opt, i) => (
                  <div key={opt} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px", borderRadius: "var(--radius-sm)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-base)", background: i === 0 ? "rgba(221,177,230,0.14)" : "transparent", color: i === 0 ? "var(--c-purple-hover)" : "var(--c-text-2)" }}>
                    <span style={{ fontSize: "var(--fs-sm)", opacity: i === 0 ? 1 : 0 }}>✓</span>
                    <span>{opt}</span>
                  </div>
                ))}
              </div>
              <Token label="Panel: bg --c-bg-raised · --fs-base" sub="Selected: rgba(221,177,230,0.14) bg · --c-purple-hover text" />
            </div>
          </Row>

          <Row label="Chatbot text input">
            <div style={{ width: "320px" }}>
              <input type="text" placeholder="Ask me anything..." readOnly className="chatbot-text-input" style={{ width: "100%", boxSizing: "border-box" }} />
              <Token label=".chatbot-text-input · --fs-body · bg --c-border · --radius-sm" />
            </div>
          </Row>

        </Section>

        {/* ── 5. SPACING ─────────────────────────────────────────────── */}
        <Section id="spacing" title="5 · Spacing & Grid">

          <Row label="Grid margin (--grid-margin) by breakpoint">
            <div style={{ width: "100%" }}>
              <SpacingBar label="mobile (<640px)"  value="1.25rem" px="20px" />
              <SpacingBar label="sm (640px+)"      value="2rem"    px="32px" />
              <SpacingBar label="lg (1024px+)"     value="3rem"    px="48px" />
              <SpacingBar label="wide (1440px+)"   value="7.1875rem" px="115px" />
            </div>
          </Row>

          <Row label="Section vertical padding (--section-pad-y)">
            <div style={{ width: "100%" }}>
              <SpacingBar label="mobile"       value="5rem"   px="80px" />
              <SpacingBar label="lg (1024px+)" value="7.5rem" px="120px" />
            </div>
          </Row>

          <Row label="Hero top inset (--hero-top-inset)">
            <div style={{ width: "100%" }}>
              <SpacingBar label="default"        value="3.75rem" px="60px" />
              <SpacingBar label="wide (1440px+)" value="6.25rem" px="100px" />
            </div>
          </Row>

        </Section>

        {/* ── 6. BORDER RADIUS ───────────────────────────────────────── */}
        <Section id="radius" title="6 · Border Radius">

          <Row label="Token system (--radius-*)" gap="2rem">
            <RadiusBox token="--radius-sm"   value="4px"    label="tags, inputs, buttons, dropdowns" />
            <RadiusBox token="--radius-md"   value="8px"    label="chatbot panel, feature cards" />
            <RadiusBox token="--radius-lg"   value="12px"   label="contact modal (md+), WorkShowcase panel" />
            <RadiusBox token="--radius-xl"   value="16px"   label="reserved for large panels" />
            <RadiusBox token="--radius-full" value="9999px" label="pills, chatbot toggle" />
          </Row>

          <Row label="Hardcoded (no token — unique use)">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-3)", lineHeight: 2 }}>
              <div><span style={{ color: "var(--c-text-2)" }}>6px</span> — chatbot message bubble (.chatbot-msg-user)</div>
              <div><span style={{ color: "var(--c-text-2)" }}>50%</span> — chatbot toggle dot (circle)</div>
              <div><span style={{ color: "var(--c-text-2)" }}>0.25rem</span> — .hero-refresh button (4px, matches --radius-sm)</div>
            </div>
          </Row>

        </Section>

        {/* ── 7. MOTION ──────────────────────────────────────────────── */}
        <Section id="motion" title="7 · Motion">

          <Row label="Duration tokens (--duration-*)">
            <div style={{ width: "100%" }}>
              {[
                { token: "--duration-fast",   value: "150ms",  usage: "Reserved — not yet wired to a class" },
                { token: "--duration-base",   value: "200ms",  usage: "Nav links, card borders, button colors, chatbot prompt hover, chatbot toggle bg" },
                { token: "--duration-slow",   value: "300ms",  usage: "Nav background (scroll), hero refresh text, hero pane pulse" },
                { token: "--duration-reveal", value: "750ms",  usage: "GSAP scroll reveal base duration" },
              ].map(({ token, value, usage }) => (
                <div key={token} style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "0.625rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-purple-hover)", width: "11rem", flexShrink: 0 }}>{token}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text)", width: "4rem", flexShrink: 0 }}>{value}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-3)" }}>{usage}</span>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginTop: "0.5rem" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-purple-hover)", width: "11rem", flexShrink: 0 }}>--ease-out</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text)", flexShrink: 0 }}>cubic-bezier(0.16, 1, 0.3, 1)</span>
              </div>
            </div>
          </Row>

          <Row label="GSAP scroll reveals (ScrollTrigger · once: true · ease: power3.out)">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-2)", lineHeight: 2.2 }}>
              <div>Section headers — autoAlpha 0→1 · y 28→0 · duration 0.75s · trigger top 88%</div>
              <div>Grid cards — autoAlpha 0→1 · x -52→0 · duration 0.85s · stagger 0.12s · trigger top 82%</div>
              <div>Feature cards — x -56→0 · stagger 0.14s · trigger top 82%</div>
              <div>Dashboard panel — scale 0.92→1 · duration 1s · trigger top 80%</div>
            </div>
          </Row>

          <Row label="Framer Motion spring configs (JS — not CSS tokens)">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-2)", lineHeight: 2.2 }}>
              <div><span style={{ color: "var(--c-purple-hover)" }}>Cards whileHover</span> — y: -6 · stiffness 420 · damping 28</div>
              <div><span style={{ color: "var(--c-purple-hover)" }}>Cards base transition</span> — stiffness 400 · damping 30</div>
              <div><span style={{ color: "var(--c-purple-hover)" }}>Hero chips</span> — y: -2 · scale 1.04 · stiffness 460 · damping 22</div>
            </div>
          </Row>

        </Section>

        {/* ── 8. LAYOUT ──────────────────────────────────────────────── */}
        <Section id="layout" title="8 · Layout & Breakpoints">

          <Row label="Breakpoints">
            <div style={{ width: "100%" }}>
              {[
                { label: "sm",   value: "640px",  desc: "Grid: 2-col cards · --grid-margin 2rem" },
                { label: "md",   value: "768px",  desc: "Hero 2-col · h2/h3 scale up · section-heading 36px" },
                { label: "lg",   value: "1024px", desc: "Grid: 3-col cards · --grid-margin 3rem · --section-pad-y 7.5rem" },
                { label: "wide", value: "1440px", desc: "--grid-margin 7.1875rem · --hero-top-inset 6.25rem" },
              ].map(({ label, value, desc }) => (
                <div key={label} style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "0.875rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-base)", color: "var(--c-purple-hover)", width: "3rem", flexShrink: 0 }}>{label}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-base)", color: "var(--c-text)", width: "5rem", flexShrink: 0 }}>{value}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-base)", color: "var(--c-text-2)" }}>{desc}</span>
                </div>
              ))}
            </div>
          </Row>

          <Row label="Max-width containers">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-base)", color: "var(--c-text-2)", lineHeight: 2.2 }}>
              <div><span style={{ color: "var(--c-purple-hover)" }}>full bleed</span> — Hero, WorkGrid, WorkShowcase outer, Nav</div>
              <div><span style={{ color: "var(--c-purple-hover)" }}>64rem (1024px) · max-w-5xl</span> — WorkShowcase inner section</div>
              <div><span style={{ color: "var(--c-purple-hover)" }}>480px</span> — Contact modal (desktop)</div>
              <div><span style={{ color: "var(--c-purple-hover)" }}>460px</span> — Chatbot panel</div>
              <div><span style={{ color: "var(--c-purple-hover)" }}>100dvh</span> — Contact modal (mobile, full screen)</div>
            </div>
          </Row>

          <Row label="Z-index tokens (--z-*)">
            <div style={{ width: "100%" }}>
              {[
                { token: "--z-sticky",  value: "100",  usage: ".nav-root (fixed header)" },
                { token: "--z-overlay", value: "999",  usage: ".chatbot-backdrop" },
                { token: "--z-panel",   value: "1000", usage: ".chatbot-panel, .chatbot-toggle" },
                { token: "--z-modal",   value: "9999", usage: "ContactModal overlay (Tailwind z-[9999])" },
              ].map(({ token, value, usage }) => (
                <div key={token} style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "0.625rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-purple-hover)", width: "8rem", flexShrink: 0 }}>{token}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text)", width: "3rem", flexShrink: 0 }}>{value}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-text-3)" }}>{usage}</span>
                </div>
              ))}
            </div>
          </Row>

        </Section>

        {/* ── 9. ICONS ───────────────────────────────────────────────── */}
        <Section id="icons" title="9 · Icons & Glyphs">
          <Row label="Unicode / text glyphs in use">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "1.5rem", width: "100%" }}>
              {[
                { glyph: "→",  usage: "Nav CTA, chatbot send, hero CTA" },
                { glyph: "×",  usage: "Modal close button" },
                { glyph: "▼",  usage: "Inquiry dropdown chevron" },
                { glyph: "✓",  usage: "Dropdown selected, form success" },
                { glyph: "·",  usage: "Nav link separator" },
                { glyph: "●",  usage: "Chatbot toggle dot (rendered as div)" },
              ].map(({ glyph, usage }) => (
                <div key={glyph} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "28px", color: "var(--c-text)", lineHeight: 1 }}>{glyph}</div>
                  <Token label={usage} />
                </div>
              ))}
            </div>
          </Row>

          <Row label="MenuToggleIcon (animated SVG component)">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-base)", color: "var(--c-text-2)" }}>
              components/ui/menu-toggle-icon.tsx — animated hamburger/close · 24×24px · used in mobile Nav
            </div>
          </Row>
        </Section>

      </div>
    </div>
  );
}
