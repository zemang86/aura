# Porting notes

Decisions and deferrals made while porting the AFHE Framer project
(`c40ffc37102ccfb1`) into this Next.js codebase. The unframer MCP is the
source of truth for design — see `AGENTS.md` for the project rule.

## Skipped as dead code in the Framer source

These were present in the Framer project but not wired into anything visible
or carry placeholder/boilerplate copy. Not ported.

- **`CostCalculator_1.tsx`** (`lFjycob`) — generic SaaS calculator with
  defaults like "Get a custom automation plan" and "AI Supply could reclaim
  80%". The home page's Calculator section uses a `commoninja` third-party
  embed instead, not this component.
- **`Examples.tsx` code override** (`NNd7td5`) — Framer's default
  `withRotate` / `withHover` / `withRandomColor` boilerplate from
  `framer.com/developers/overrides/`. Not referenced by any component.
- **`SEOStructuredData_1.tsx`** (`Uk9BtmS`) — duplicate of `WBopkLR`. Its
  richer FAQ content (12 entries vs 6) and extra metadata were merged into
  `src/lib/seo/structured-data.ts`; the component itself was not ported
  because we render JSON-LD server-side in the root layout.

## Deferred / approximated

- **Home Process carousel** — was a 3-tab toggle with placeholder copy for
  Token/Wallet (Framer XML had empty variants). Rebuilt as a 5-card snap-scroll
  carousel using CMO-supplied copy (2026-05-22): SDK, AURA Token, Aura Wallet,
  Coprocessor & Mining Protocol, Global Ecosystem.
- **Home Industries** — source uses a draggable gravity-physics canvas on
  the left half (`GravityComponent`); ported as a static border-card grid.
- **Home Calculator embed** — third-party `commoninja` widget; the section
  renders a dashed placeholder where the embed should go.
- **Home Roadmap** — section is `opacity="0.2"` in Framer (deliberately
  dimmed/draft). Title and intro paragraph are ported; the actual wave
  content does not exist yet in the source.
- **Nav mobile menu** — source has `Phone` and `PhoneOpen` variants in the
  `Navigation` component but no children defined yet. Built desktop nav only;
  mobile links hidden under md breakpoint.
- **Social icons in Nav/Footer** — inline hand-drawn SVGs for LinkedIn / X /
  Discord rather than extracting the nested SVG primitives from the Framer
  `SocialMedia` component (`o4WWSPI9A`).
- **Industry/team cards on `/about` and `/technology`** — Framer's
  `TeamMemberCard` (`TuGpO6o5a`) variant `qeUlOdsBh` is empty in the XML.
  Built simple bordered cards using the existing design tokens.
- **`/contact` and `/about` hero backgrounds** — Framer reuses the same
  image (`8JwCpYZqtAGXFuwcoQydgn88ctQ.jpg`) on every page hero; kept faithful.

## Font substitution

- **LT Remark** (proprietary, Framer-licensed) — substituted with Google's
  **Instrument Serif** as the display font fallback. Visual parity for
  headings requires the LT Remark license or a curated swap.

## Navigation link mapping

In the Framer XML, the *Technology* nav label was linked to `/ecosystem` and
*Ecosystem* to `/technology` (almost certainly a copy-paste bug in the source).
User confirmed the swap, so this codebase ships the corrected mapping.
