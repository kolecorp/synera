# Feature 03: Design System Visual Refresh

Aligning the entire `@synera/foundation` design system to the new Synera brand mockup.

## Design Reference
Mockup: Synera landing page — navy-teal palette, editorial serif (Cormorant Garamond), minimal white-space-first layout, Zed-inspired component density.

## Token Changes
- [x] `colors.css` — new navy-teal palette (`--color-brand-*`, `--color-neutral-*`, `--color-accent`)
- [x] `typography.css` — Cormorant Garamond serif, Inter sans, expanded scale (`--text-2xs`, `--text-4xl`–`--text-6xl`), `--leading-*`, `--tracking-*` tokens, `.kicker` utility
- [x] `themes/light.css` — new semantic mappings (`--color-surface-subtle`, `--color-cta-bg`, `--color-border-strong`)
- [x] `css/base.css` — antialiased, `h1–h6` reset, `p` reset

## Component Changes
- [x] `button` — pill shape (`border-radius: full`), dark navy CTA primary, ghost variant, `.btn__arrow`, `--sm`/`--lg` sizes
- [x] `marketing-nav` — minimal header, centered links, logo spaced uppercase
- [x] `feature-icon-block` — numbered step (01/02/03) with teal accent, `.feature-icon-block__arrow`
- [x] `sidebar` — 240px, teal active state, `--text-2xs` group labels
- [x] `topbar` — `.topbar__kicker`, serif display title, `--text-4xl`, border-bottom divider
- [x] `badge` — border + dot variant, refined per-color oklch values
- [x] `avatar` — sm/lg/xl sizes, `--teal` variant
- [x] `stat-panel` — `.stat-panel__card` wrapper, `.stat-panel__metric` hero number, `.stat-panel__kicker`
- [x] `data-table` — sticky header, teal hover, `--text-2xs` uppercase headers, `--tracking-wider`
- [x] `form-input` — teal focus ring, `has()` icon offset, `--text-sm` size
- [x] `auth-button` — minimal border, refined divider
- [x] `pattern-card` — brand-50 header bg, hover shadow, footer subtle bg
- [x] `node-badge` — teal active border, neutral resting state
- [x] `trust-logo-row` — stacked name/sub layout, monochrome columns
- [x] `apps/playground` — full rebuild with Cormorant Garamond, selected components demoed (typography, buttons, badges, avatars, stat-panel, pattern-card, feature-icon-block, forms, data-table, trust-logo-row)

## Font Loading
Google Fonts: `Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500` + `Inter:wght@400;500;600;700`
