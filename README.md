# NIRA Website

The public NIRA website tells the story of coconut materials moving from overlooked resources to useful product directions and community opportunity. Built with Next.js App Router, strict TypeScript, and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality commands

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build
```

Use `npm run format` to apply Prettier formatting.

## Pages

Home, About, Transformation, Products, Impact, Journal (with three editorial articles), and Partnership. The image credits page records the sources and nature of representative imagery.

## Launch configuration

Set `SITE_URL` to the final HTTPS origin at build time. The site uses it for canonical URLs, Open Graph images, `robots.txt`, and the sitemap. Without it, pages remain `noindex` and crawlers are disallowed so a preview build is not indexed under a temporary host.

The project source does not yet include a direct NIRA contact address, approved NIRA product photography, community profiles, or verified impact figures. The Partnership page therefore prepares a copyable inquiry without sending data. Complete these inputs before public launch.

## Structure

| Path                                                                | Purpose                                                           |
| ------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `app/`                                                              | Public routes, metadata, global styles, sitemap, and robots rules |
| `components/layout/`                                                | Navigation, footer, and container                                 |
| `components/sections/`                                              | Story, process, hero, and collaboration sections                  |
| `components/products/`, `components/impact/`, `components/journal/` | Reusable content cards                                            |
| `lib/content.ts`                                                    | Typed product and journal content                                 |
| `public/images/`                                                    | Optimized editorial art and representative material images        |
| `docs/`                                                             | Phase reports and design direction                                |

Design tokens and responsive direction come from [the Phase 2 design system](docs/PHASE_2_DESIGN_SYSTEM.md). The Phase 4 handoff is in [the completion report](docs/PHASE_4_COMPLETION_REPORT.md).
