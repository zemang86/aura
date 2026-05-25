# Aura FHE Design System (marketing-v2)

Dark editorial financial-terminal brand. Applied site-wide via `body.marketing-v2`
(set by `BodyClass` in `src/app/layout.tsx`).

All tokens and utility classes live in `src/app/globals.css`. New components
should compose these classes rather than inventing one-off Tailwind.

---

## 1. Tokens

```css
/* Surfaces */
--ink: #0a0a0b;      /* page background */
--ink-2: #101012;    /* recessed surfaces (code panes, hover) */
--ink-3: #16161a;    /* deeper recess */

/* Text */
--paper: #f4f1ea;    /* headlines, primary text */
--bone: #efead9;     /* body text */
--bone-dim: #9a9483; /* meta, secondary */
--bone-faint: #5e5a50; /* tertiary / placeholder */

/* Accents */
--coral: #ff6b3d;             /* primary accent, italic display, CTAs */
--coral-soft: rgba(255,107,61,0.16);
--cipher: #2dd49a;            /* "live" status, success states */

/* Rules / hairlines */
--rule:   rgba(232,226,212,0.08);
--rule-2: rgba(232,226,212,0.16);
--rule-3: rgba(232,226,212,0.28);

/* Type families */
--m-sans:  Inter (var)        /* body + display */
--m-serif: Fraunces italic    /* italic emphasis in display copy */
--m-mono:  JetBrains Mono     /* meta labels, KPIs, code */
```

Selection highlight is coral-on-ink. `body.marketing-v2 a` is unstyled — every
link must opt into a class (`m-btn-*`, `m-link-inline`, `soc-ring`, etc).

---

## 2. Typography

| Class            | Use                                        | Family   |
| ---------------- | ------------------------------------------ | -------- |
| `.t-display`     | Hero headlines (home / mega)               | sans 800 |
| `.t-h2`          | Section headlines                          | sans 800 |
| `.t-h2-sm`       | Smaller section headlines                  | sans 800 |
| `.t-h3`          | Card titles                                | sans 700 |
| `.t-h4`          | Sub-card titles                            | sans 600 |
| `.t-body`        | Body copy                                  | sans 400 |
| `.t-meta`        | Mono caps labels (10.5px, 0.22em tracking) | mono     |
| `.t-meta-sm`     | Smaller meta                               | mono     |

**Editorial italic.** Inside `.t-display`, `.t-h2`, `.t-h3`, `.t-h4`,
`.page-hero h1`, `.m-section-head h2`, `.cta-block h2`, `.foot-display`, and
`.feature-card h3` — wrapping a word in `<em>` switches it to Fraunces italic
with `font-variation-settings: "opsz" 144` and recolors it `--coral`. This is
the brand's signature gesture; use it on one word per headline.

```jsx
<h1>Discover Aura's <em>architecture.</em></h1>
```

---

## 3. Layout primitives

Wrap every inner page in `<div className="page-shell">` — that gives 76px of
top padding to clear the fixed HUD bar.

```jsx
<div className="page-shell">
  <section className="page-hero">
    <div className="page-hero-inner">
      <div className="page-hero-meta">Section · Subtitle</div>
      <h1>Headline with <em>italic</em>.</h1>
      <p className="page-hero-deck">One-paragraph deck.</p>
    </div>
  </section>

  <div className="kpi-row">{/* optional 4-col KPI strip */}</div>

  <section className="m-section">
    <div className="m-section-inner">
      <div className="m-section-head">
        <h2>Section title <em>with</em> italic.</h2>
        <div className="right">Right-aligned commentary or deck.</div>
      </div>
      {/* section body */}
    </div>
  </section>

  <section className="cta-block">{/* end-of-page CTA */}</section>
</div>
```

| Class              | Purpose                                                     |
| ------------------ | ----------------------------------------------------------- |
| `.page-shell`      | Top-level page wrapper (76px top padding for HUD bar)       |
| `.page-hero`       | First section: meta + display headline + deck               |
| `.page-hero-inner` | Constrained inner (max 1280px)                              |
| `.page-hero-meta`  | Mono caps meta line with coral hairline                     |
| `.page-hero-deck`  | Hero paragraph                                              |
| `.m-section`       | Standard content section (120px vertical pad, hairline top) |
| `.m-section.bare`  | Same but no top border                                      |
| `.m-section-inner` | 1280px max constrained inner                                |
| `.m-section-head`  | Two-col grid: large `<h2>` left, `.right` deck right        |
| `.cta-block`       | End-of-page CTA (large italic headline + buttons)           |

---

## 4. Components

### KPI row

Four equal cells with hairline dividers. Becomes 2×2 on narrow screens.

```jsx
<div className="kpi-row">
  <div className="kpi">
    <div className="kpi-num">100×</div>
    <div className="kpi-label">Faster than legacy FHE</div>
  </div>
  {/* up to 4 */}
</div>
```

### Principle grid

2-column grid of numbered cells. Used for pillars / principles / benchmark
breakdowns.

```jsx
<div className="principle-grid">
  <div className="principle">
    <div className="principle-num">01</div>
    <h3>Title.</h3>
    <p>One-sentence description.</p>
  </div>
  {/* repeat */}
</div>
```

### Editorial prose

```jsx
<div className="m-prose">
  <p>Standard paragraph. Use <em>italic</em> for emphasis.</p>
  <p className="pull">Larger pulled italic quote with coral left border.</p>
</div>
```

### Feature card (with status)

Used on the ecosystem page for application sections.

```jsx
<article className="feature-card">
  <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
    <span className="status-chip">01</span>
    <span className="status-chip live"><span className="dot" />Live today</span>
  </div>
  <h3>Title.</h3>
  <p className="lede">Lede copy.</p>

  {/* hero stat */}
  <div className="hero-stat">
    <span className="v">50 tps</span>
    <span className="l">Encrypted LLM on consumer hardware</span>
  </div>

  {/* or metrics grid */}
  <div className="metrics">
    <div><span className="l">TVL</span><span className="v">—</span></div>
    <div><span className="l">Markets</span><span className="v">—</span></div>
    <div><span className="l">Volume</span><span className="v">—</span></div>
  </div>
</article>
```

`.status-chip` variants: bare (mono dim), `.live` (cipher green), `.coral`.

### Tag grid

```jsx
<div className="tag-grid">
  <div className="tag">Encrypted swaps</div>
  {/* … */}
</div>
```

### Comparison table

```jsx
<div className="cmp-wrap">
  <table className="cmp-table">
    <thead>
      <tr><th /><th className="us">Aura FHE</th><th>Other</th></tr>
    </thead>
    <tbody>
      <tr>
        <td className="label">Row label</td>
        <td className="us">Our value</td>
        <td>Other value</td>
      </tr>
    </tbody>
  </table>
</div>
```

`.us` highlights the Aura column in coral / paper-on-bold.

### Code pane

```jsx
<pre className="code-pane">
  <code>
    <span className="c-com">// comment</span>
    <span className="c-kw">const</span> x =
    <span className="c-fn">encrypt</span>(value);
  </code>
</pre>
```

Span classes: `.c-com` (faint), `.c-kw` (cipher green), `.c-fn` (coral).

### FAQ

```jsx
<div className="faq-list">
  <details className="faq-row">
    <summary>Question?</summary>
    <p>Answer.</p>
  </details>
</div>
```

### "Where to next" / channel cards

Two-column grid with hover slide-in:

```jsx
<div className="next-row">
  <Link href="/path">
    <span className="meta">Section</span>
    <h3>Title.</h3>
    <p>Description.</p>
    <span className="arr-row">Read more <span>→</span></span>
  </Link>
</div>
```

### Forms

Hairline-bottom inputs, mono caps labels, coral focus state.

```jsx
<form className="m-form">
  <div className="m-form-row">
    <div className="m-field">
      <label>Your name</label>
      <input type="text" placeholder="…" />
    </div>
    <div className="m-field">
      <label>Your email <span className="req">*</span></label>
      <input type="email" required />
    </div>
  </div>

  <div className="m-field">
    <label>Topic</label>
    <select>{/* … */}</select>
  </div>

  <div className="m-field">
    <label>Message <span className="req">*</span></label>
    <textarea rows={6} />
  </div>

  <p className="m-form-disclaimer">Privacy note.</p>

  <div>
    <button type="submit" className="m-btn-primary">
      Send <span className="arr">→</span>
    </button>
  </div>
</form>
```

Success state:

```jsx
<div className="m-form-success">
  <span className="ok">Message received</span>
  <h3>Thanks.</h3>
  <p>What happens next.</p>
</div>
```

### Buttons + inline links

| Class             | Use                                                  |
| ----------------- | ---------------------------------------------------- |
| `.m-btn-primary`  | Filled coral primary CTA                             |
| `.m-btn-outline`  | Hairline secondary CTA                               |
| `.m-link-inline`  | Inline coral underline-on-hover link                 |

All three accept a child `<span className="arr">→</span>` that animates on hover.

### Social ring

48×48 circular icon button.

```jsx
<div className="soc-row">
  <a className="soc-ring" href="…" aria-label="X">{/* svg */}</a>
</div>
```

### Blog

- List page: `.blog-list` grid of `.blog-card` with `.img-wrap > img` + `.meta`
  + `<h2>`.
- Single article: `<div className="article-shell">` containing `.back-link`,
  `.article-meta`, `<h1>`, optional `.article-img`, then
  `<article className="prose-article">` for HTML body. `prose-article` styling
  is scoped under `body.marketing-v2` to use Inter + bone/paper + coral links.

### 404

```jsx
<div className="m-404">
  <div className="meta">Error · 404</div>
  <div className="num">4<em>0</em>4</div>
  <p>Description.</p>
  <Link className="m-btn-primary" href="/">Go home <span className="arr">→</span></Link>
</div>
```

---

## 5. Global chrome

Provided by `src/app/layout.tsx` — every route inherits these automatically.

| Mounted | Source                                       | Purpose                                |
| ------- | -------------------------------------------- | -------------------------------------- |
| `BodyClass` | `src/components/marketing/body-class.tsx` | Adds `marketing-v2` to `<body>`.       |
| `.grain`    | inline `<div>`                            | Fixed full-viewport noise overlay.     |
| `HUD`       | `src/components/marketing/hud.tsx`        | Frosted top bar + variant-aware corners.|
| `MarketingFooter` | `src/components/marketing/marketing-footer.tsx` | Site footer with display headline.|

### HUD behavior

- Reads `usePathname()`. On `/` → `variant="home"` (cursor/scroll/time
  bottom-left, "Scroll down" cue bottom-right). Elsewhere → top bar only.
- Top bar is fixed, 76px tall, z-index 49, `pointer-events: none`. Inner items
  re-enable pointer events. Becomes frosted (`backdrop-filter: blur(18px)
  saturate(160%)`, `rgba(10,10,11,0.65)` bg) when `scrollY > 8`.
- Backdrop-filter uses a `--bf` CSS custom-property pattern to defeat Lightning
  CSS's prefix-stripping — do not "simplify" it.
- Nav links live in `NAV_LINKS` at the top of the file. Hamburger opens a
  full-screen overlay with the same links + Documentation + Contact + socials.
- Logo: Framer-hosted PNG at 32px tall desktop / 26px mobile.

---

## 6. Home-only patterns

These section CSS blocks (`.cover`, `.mega`, `.spec`, `.cases`, `.m-roadmap`,
`.caps`, `.refs`) are used exclusively by the home page components in
`src/components/marketing/`. Do not pull them into inner pages — use the
`.m-section` + `.m-section-head` + primitives above instead. If a future page
needs a home-style fullbleed motif, extract a new top-level class rather than
reaching into these.

---

## 7. Spacing & rhythm

### Max widths (page width rule)

**Nothing on the marketing site stretches edge-to-edge on big monitors.**
Two constraints, layered:

| Layer            | Token            | Value  | Applied to                                                                  |
| ---------------- | ---------------- | ------ | --------------------------------------------------------------------------- |
| Section (outer)  | `--m-page-max`   | 1440px | Every top-level section, on every page                                      |
| Content (inner)  | (literal 1280px) | 1280px | Inner-page content wrappers — `.page-hero-inner`, `.m-section-inner`, `.cta-block-inner` |

The outer 1440 constraint is applied via a single shared selector in
`globals.css`. The current selector list:

```
.cover, .mega, .spec, .cases, .m-roadmap, .caps, .refs, .m-foot,
.page-hero, .m-section, .cta-block, .kpi-row
```

All of those are `max-width: var(--m-page-max); margin: 0 auto`. The section
background and page background are both `--ink`, so on a viewport wider than
1440px, the constrained section appears to float in infinite ink — no visible
seam. Section borders + hairlines stop at the 1440 frame, which is the
desired "boxed" feel.

Inner pages additionally use a tighter 1280px content column via the
`*-inner` wrappers. This nests inside the 1440 section frame: section 1440
wide, content column 1280 centered with ~80px of section bg on each side.
The result is a wider brand "frame" with a tighter editorial reading column
inside it.

The home page does **not** use inner wrappers — its content fills the 1440
frame so the display type, ticker rail, and case grid have room to breathe.

**Rule for new code:**
- **New top-level section?** Add its class to the shared selector list in
  `globals.css` near the top of the marketing-v2 section block. Never invent
  a per-section `max-width` rule.
- **New inner-page content?** Wrap it in `.m-section-inner` (or `.page-hero-inner`
  / `.cta-block-inner`). Don't put content directly in a section without an
  inner wrapper.
- **Need to override the max?** Don't. If something genuinely needs to bleed
  wider (e.g., a future full-bleed image marquee), introduce a new
  `.m-fullbleed` class with `max-width: none` and document it here.

### Other rules

- Sections use **120px vertical padding** desktop, **72px** mobile.
- Page hero uses **120px top / 80px bottom** desktop, **96 / 64** mobile.
- Hairline dividers everywhere — never solid borders. `--rule` is the default,
  `--rule-2` for hover/elevated, `--rule-3` for the rare stronger divider.
- Use **mono caps with 0.18–0.22em letter-spacing** for any meta text. Sentence
  case + sans for everything else.

---

## 8. Adding a new page

1. Create `src/app/<route>/page.tsx`.
2. Wrap in `<div className="page-shell">`.
3. Open with `.page-hero` (meta + `<h1>` with one `<em>` word + deck).
4. (Optional) `.kpi-row` for at-a-glance numbers.
5. Compose `.m-section` blocks. Each gets a `.m-section-head` with a 2-col
   headline-left / right-deck layout.
6. Inside sections, reach for: `.principle-grid`, `.m-prose`, `.tag-grid`,
   `.feature-card`, `.faq-list`, `.next-row`, `.cmp-table`, `.code-pane`.
7. Close with `.cta-block` (left-aligned huge italic + button row).
8. Add the route to `NAV_LINKS` in `hud.tsx` if it should appear in the nav.

The HUD, grain, BodyClass, and MarketingFooter come for free from the layout.

---

## 9. What NOT to do

- Don't reintroduce `--color-accent-1` / `--color-accent-2` / `text-h2` /
  `text-p16` / `text-pre-heading-16` — those legacy tokens still exist in
  `globals.css` but are reserved for any legacy surfaces. New code uses the
  marketing-v2 vocabulary above.
- Don't apply Tailwind color utilities (`text-white`, `text-zinc-400`,
  `bg-black`) on marketing-v2 surfaces — they bypass the token system. Use
  inline `style={{ color: "var(--bone-dim)" }}` only if no class fits, and
  prefer adding a new utility class to `globals.css` if the pattern recurs.
- Don't use `next/image` `unoptimized` unless the image is a Framer-hosted
  PNG that we don't want to proxy.
- Don't put `backdrop-filter` directly in `globals.css` without the `--bf`
  custom-property indirection — Lightning CSS will strip the unprefixed
  property.
- Don't add a per-page footer. The layout already mounts `MarketingFooter`.
- Don't add a per-page HUD. Same reason. If a page needs HUD variant override,
  pass `variant` explicitly on the layout HUD or extend the auto-detect logic.
