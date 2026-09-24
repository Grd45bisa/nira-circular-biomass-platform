# NIRA Phase 3 Frontend Foundation

**Status:** Frontend scaffold and reusable component base implemented. The homepage and interior pages remain content shells for Phase 4.

## Architecture decisions

| Decision | Reason | Result |
| --- | --- | --- |
| Use a root `app/` Next.js App Router layout. | It matches the NIRA technical architecture and the folders prepared in Phase 0. | One route convention and one global layout. |
| Keep the root layout a Server Component. | Most public content can render on the server. | Only the interactive header is a Client Component. |
| Implement Tailwind v4 tokens in `app/globals.css`. | The Phase 2 system defines exact colors, type scales, spacing, and surfaces. | Utilities and shared CSS consume one token set. |
| Self-host Playfair Display and Inter through `next/font`. | The Phase 2 system chose this pair and calls for performance-conscious delivery. | Font variables drive editorial and body type with fallbacks. |
| Keep seven routes as minimal shells. | Navigation must lead to valid routes, while full pages are out of Phase 3 scope. | No dead navigation links and no fabricated product, impact, or journal content. |
| Mark the site `noindex` during foundation work. | The routes are incomplete. | Search engines are asked not to index the temporary presentation. |
| Defer Supabase, animation, CMS, and product details. | The current phase excludes backend integration and complete pages. | No unused data client or speculative content model is introduced. |

## Design system mapping

| Phase 2 rule | Implemented location |
| --- | --- |
| Forest, coconut, wood, cream, ink and primary action states | `app/globals.css` Tailwind theme variables |
| Playfair Display and Inter | `app/layout.tsx` font variables; type classes in `app/globals.css` |
| 4px spacing base, 1280px container, portrait/landscape section space | `app/globals.css`; `components/layout/container.tsx` |
| Pill buttons, card radius, natural shadow, visible focus | `components/ui/` and global CSS |
| Seven-link navigation with compact menu | `lib/navigation.ts`; `components/layout/site-header.tsx` |
| Cream or dark section variants | `components/sections/section.tsx` |
| Product, impact, and article evidence hierarchy | Typed components in their respective folders |

At 1024px, portrait remains stacked and landscape can expand. The full seven-link navigation begins at 1200px, when it has space to fit. The header menu exposes `aria-expanded`, supports Escape, and returns focus to its trigger. The layout includes a skip link. Motion is currently limited to control transitions and is suppressed for reduced-motion preferences.

## Component contracts

- `Button` and `ButtonLink` share primary, secondary, and text treatments. Disabled buttons are visibly muted.
- `Card` is a restrained surface primitive. Editorial cards add the content specific to products, verified impact, or articles.
- `ProductCard` requires source material and sustainability value; `ArticleCard` requires a dated article and meaningful image alt text.
- `ImpactCard` accepts either a qualitative evidence statement or a numeric metric. Numeric metrics require a period and source in its TypeScript props.
- `HeroSection` and `Section` establish heading hierarchy and responsive spacing. The complete homepage narrative remains a Phase 4 task.

## Boundaries for Phase 4

1. Replace route shells with approved, full page content and authentic images.
2. Remove root `noindex` only when the public pages and metadata are ready to publish.
3. Confirm the primary site language before final typography and copy review.
4. Validate product materials and environmental claims, impact data, community consent, and contact handling before those elements appear live.
5. Add Supabase only in its planned integration phase; keep public data retrieval server-side.

**Source note:** The Phase 3 prompt names `.agents/00_FOUNDATION_AND_BRAND_UX.md`, which is absent. Its context is covered by [Phase 0 foundation](PHASE_0_FOUNDATION.md) and [the Phase 0 & 1 completion report](PHASE_0_1_COMPLETION_REPORT.md). `.agents/TASKS.md` and the other named `.agents` sources were reviewed. The prompt ended after “Folder Architecture — Create:” and the user delegated the remaining structure choice; the established root folder layout was used.
