# NIRA — Phase 0 foundation and brand UX strategy

**Status:** Strategy and architecture ready for review. No interface or production code is included in this phase.

## 1. Product and brand understanding

NIRA means **Nature Into Renewable Assets**. Its central story is the transformation of overlooked coconut materials into useful products and opportunities for communities. The website should make that transformation understandable, credible, and human. It should position NIRA as a circular economy movement connecting nature, craft, innovation, and people.

**Brand promise:** NIRA reveals value in coconut resources that might otherwise be overlooked, with the aim of creating environmental, social, and economic benefit.

**Desired visitor progression:** Curiosity → understanding → appreciation → trust → action.

| Personality | Experience implication |
| --- | --- |
| Natural | Show recognizable coconut materials, environments, and processes. |
| Premium | Use restrained composition, careful typography, generous space, and precise language. |
| Human | Introduce real participants and describe their role in the work. |
| Innovative | Make the material-to-product transformation easy to grasp. |

The primary expression is **Natural Premium Circular**: deep forest green `#063522`, coconut brown `#7a5645`, dark wood `#482510`, coconut cream `#fcf9f0`, and warm black `#1c1c17`. Pair an elegant serif heading style with a clear modern sans serif body style. Photography should use real materials, people, and production in natural light. Movement should reveal the story at a calm pace and respect reduced-motion preferences.

**Voice:** Warm, professional, clear, and concise. Copy should explain a specific material, action, or result rather than rely on general sustainability slogans. The opening proposition is **“NIRA — Value Beyond Waste”**, supported by **“Transforming overlooked coconut resources into meaningful solutions for nature and communities.”** This is proposed website copy from the supplied brief; publication still requires brand approval.

## 2. Audience needs and paths

| Audience | First question | Evidence they need | Useful next action |
| --- | --- | --- | --- |
| Sustainability partners | Can this initiative create credible impact? | Process, verified outcomes, program model, real stories | Explore Impact → Partnership |
| Eco-conscious customers | What is this product and where does it come from? | Material source, making process, use, sustainability value | Explore Products → product detail or inquiry |
| Community partners | How could our community participate? | Roles, collaboration model, participant stories, contact route | Community story → Partnership |

All three paths share one narrative spine:

1. **Discover:** Identify NIRA and its promise immediately.
2. **Understand:** Explain why unused coconut husk, fiber, shell, and residue represent an opportunity.
3. **Explore:** Connect each material to a process and a resulting product.
4. **Believe:** Show authentic products, people, and substantiated impact.
5. **Engage:** Offer a clear route to learn more or propose a partnership.

The homepage should serve this shared path. Interior pages should provide the detail each audience needs without forcing them to traverse the entire homepage.

## 3. Information architecture

**Primary navigation:** Home · About NIRA · Transformation · Products · Impact · Journal · Partnership.

| Page | Primary purpose | Essential content | Main action |
| --- | --- | --- | --- |
| Home | Introduce the complete transformation story | Promise, opportunity, material paths, process, products, evidence, people | Explore NIRA / Become Partner |
| About NIRA | Establish the philosophy and people behind NIRA | Meaning, vision, mission, values | Discover Transformation |
| Transformation | Explain how coconut resources become useful outputs | Material origins, collect/process/create/empower process, responsible descriptions | Explore Products |
| Products | Explain the four product families | Product image, use, material source, process, sustainability value | Product inquiry / Partnership |
| Impact | Build confidence in outcomes | Environmental, social, and economic evidence; methodology and dates for metrics | Become Partner |
| Journal | Publish education and documented stories | Articles, community stories, process notes | Explore related content |
| Partnership | Invite relevant collaboration | Opportunity, collaboration model, contact route | Submit inquiry |

### Homepage narrative and hierarchy

| Order | Section | Visitor question answered | Content priority | Next link |
| --- | --- | --- | --- | --- |
| 1 | Hero | What is NIRA? | Name, “Value Beyond Waste,” one-sentence proposition, authentic image, two clear actions | About / Partnership |
| 2 | Story Behind NIRA | Why does this matter? | Unused coconut materials → their overlooked potential → NIRA's response | Transformation |
| 3 | One Coconut, Endless Possibilities | What can one coconut become? | Husk/fiber → cocofiber → growing products; residue → cocopeat → growing media; shell → briquettes or craft products | Products |
| 4 | Transformation Journey | How does it happen? | Collect → Process → Create → Empower, with plain-language descriptions | Transformation |
| 5 | Product Showcase | What has been created? | NIRA Energy, Grow, Living, Craft; one useful product example and material source each | Products |
| 6 | Impact | What changes as a result? | Environmental, social, economic outcomes with source and reporting period when quantified | Impact |
| 7 | Community Story | Who is part of it? | A real participant, their role, and an approved story or quotation | About / Journal |
| 8 | Invitation to Act | How can I participate? | Collaboration proposition and contact route | Partnership |

The hero and first story section carry the most important context. A visitor should understand the central proposition before reaching product categories. The process and products provide tangible proof of transformation; impact and community evidence earn trust before the final invitation.

**Material accuracy rule:** The source documents describe husk, fiber, residue, and shell at different levels of detail. Product pages must use reviewed material-to-output mappings for each item. Do not imply that every product comes from every part of a coconut.

## 4. Content and proof requirements

| Content | Needed before publication | Handling until available |
| --- | --- | --- |
| Impact metrics | Value, unit, reporting period, calculation method, owner, and source | Use a qualitative description; never invent a number or animate a placeholder as fact. |
| Community stories | Identifiable participant, approved account, photo permission, location and role where relevant | Keep the section as a content requirement; do not create a fictional profile. |
| Product claims | Confirmed material, process, use, specifications, availability, and evidence for environmental claims | Describe only verified attributes. Avoid unqualified “clean,” “carbon neutral,” or comparative claims. |
| Process photography | Original or licensed photos of materials, making, products, and people | Use an approved asset list with alt text and provenance. |
| Partnership route | Responsible contact, response process, privacy text, and inquiry fields | Define the CTA destination before making a form live. |
| Journal content | Approved article owner, title, date, imagery, and review process | Publish only reviewed entries. |

**Editorial sequence:** Problem → opportunity → transformation → demonstrated outcome → next step. Product copy should answer what it is, what material it uses, how it is made, and why that matters. Every published metric needs context that connects the quantity to a real outcome.

**Initial language assumption:** The main Phase 0 brief and numbered source documents are in English, so the proposed page labels and copy above are English. The supplemental `ARCHITECTURE.md`, `DESIGN.md`, and `RPD.md` include Indonesian wording. The site language and any bilingual requirement should be confirmed before production copy is finalized.

## 5. Visual and interaction foundation

- Use the five approved colors as semantic tokens for brand, accent, dark surface, page surface, and text. Contrast must be checked in each actual text/background pairing.
- Use a serif for major editorial headings and a sans serif for reading, navigation, controls, and data. Final fonts need licensing and performance review.
- Keep content within a maximum width of 1280px, with generous section space and readable line lengths.
- Use a small, consistent component vocabulary: Container, Section Wrapper, HeroSection, StorySection, CoconutTransformation, ProductCard, ImpactCard/ImpactCounter, ArticleCard, and PartnershipCTA. Add a component only when it has a clear reusable purpose.
- Prefer documentary photography and useful material close-ups. Avoid artificial nature motifs, excessive gradients, glass effects, and visual decoration that does not explain the story.
- The transformation graphic must remain understandable without animation or pointer input. Motion is optional enhancement, with reduced-motion support.
- Give all interactive elements clear names, visible focus, keyboard access, and sufficient target size. Use semantic headings and meaningful image alt text.

## 6. Responsive strategy

Start with a single-column, content-first composition at 320px. Mobile portrait and tablet portrait keep the same reading order; tablet portrait gains breathing room. Expanded image/text arrangements and grids begin for landscape tablet and desktop. Navigation remains compact until the expanded layout can fit it without crowding.

| Context | Layout behavior |
| --- | --- |
| 320–767px, portrait or narrow viewport | Single column, compact navigation, restrained imagery and motion. |
| 768–1024px, portrait | Single column, larger spacing and type where appropriate; same story order as mobile. |
| 1024–1365px, landscape | Expanded image/text sections, selective grids, full navigation if it fits. |
| 1366px and wider | Expanded layout within the 1280px content maximum. |

The source responsive guide places 1024px in both tablet categories. **Decision:** At exactly 1024px, orientation decides the composition: portrait remains stacked; landscape may expand. Implementation should respond to available width and content fit rather than a device name alone. Verify at 320, 375, 768, 1024 portrait, 1024 landscape, 1366, and a wide desktop viewport.

## 7. Technical foundation

| Concern | Phase 1 direction |
| --- | --- |
| Framework | Next.js App Router with strict TypeScript. |
| Styling | Tailwind CSS, configured with NIRA's semantic design tokens. |
| UI | Purpose-built components; shadcn/ui only where a suitable accessible primitive is needed. |
| Motion | Framer Motion for purposeful client-side enhancements; static content remains available without it. |
| Icons | Lucide React when an icon conveys meaning. |
| Content/data | Supabase PostgreSQL and Storage for reviewed dynamic content; Server Components for public data and SEO content. |
| Hosting | Vercel for the Next.js app; Supabase Cloud for data and storage. |

**Prepared repository layout:**

```text
app/
  about/  transformation/  products/  impact/  journal/  partnership/
components/
  ui/  layout/  sections/  products/  impact/  journal/
lib/
  supabase/
types/
hooks/
public/
  images/
docs/
```

These directories are placeholders for Phase 1, not interface implementation. The root `app/` layout follows the named technical architecture. The previous Create Next App scaffold used `src/app/` but is currently deleted in the working tree; Phase 1 should use one layout consistently rather than both.

**Data boundaries:** Plan for `products`, `materials`, `impact_metrics`, `community`, `journal`, `partners`, and `inquiries` as described in the source schema. Finalize field types, relationships, publication status, media ownership, and access rules before migrations. Public reads should expose only approved content. Inquiry submission needs server-side validation, abuse protection, and restricted access to personal data. Service keys must never reach the browser. Authentication, dashboard, admin, marketplace, and payment are outside Phase 1 scope.

**Rendering and quality:** Favor Server Components for page structure and content; use Client Components only for interaction. Optimize real images with Next Image, size them appropriately, and defer below-the-fold media. Each public route needs title, description, Open Graph data, structured headings, accessible navigation, and relevant structured data. Add sitemap, robots rules, and canonical URLs once production routes and domain are known.

## 8. Decisions and handoff gates

| Decision | Basis |
| --- | --- |
| Use the eight-section homepage order in this document | The Phase 0 brief and numbered information architecture align on this flow. The older `ARCHITECTURE.md` places human impact and dashboard earlier; the current order builds evidence before the final invitation. |
| Keep product content within a larger story | The PRD and brand guidelines position products as proof of transformation, not a storefront. |
| Show only substantiated impact | The content guideline requires human context for metrics; no actual verified metric is supplied. |
| Begin Phase 1 with the seven public routes | The PRD and information architecture both define these routes and exclude account and commerce features. |

**Phase 0 outcome:** The brand direction, audience journeys, homepage order, information hierarchy, responsive strategy, development rules, and repository structure are defined. Before publication, the team must confirm the site language and supply approved product facts, images, community permissions, impact evidence, and partnership contact details. Unverified material remains unpublished.

### Phase 1 implementation order

1. Recreate the application scaffold in the prepared root layout and establish strict TypeScript, Tailwind tokens, metadata, and basic accessibility conventions.
2. Build shared layout and navigation, then the homepage narrative with reviewed copy and authentic assets.
3. Build the six interior pages using shared components and the same material/product taxonomy.
4. Connect approved dynamic content and the partnership inquiry path to Supabase with access policies and validation.
5. Review real content across target viewports, keyboard flows, reduced motion, SEO metadata, and image performance before launch.

## Source of truth

Primary references: `.agents/AGENTS.md` and `.agents/00_PROJECT_CONTEXT.md` through `.agents/12_FUTURE_ROADMAP.md`. The supplied Phase 0 brief defines this phase's objective and homepage sequence. Supplemental references: `.agents/ARCHITECTURE.md`, `.agents/DESIGN.md`, and `.agents/RPD.md`. Where these overlap differently, the decision table above states the selected interpretation.
