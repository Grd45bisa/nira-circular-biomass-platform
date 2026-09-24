# NIRA UI/UX Design System — Phase 2

**Status:** Design specification for the seven public pages. This document is the Phase 2 UI source of truth; it defines decisions for later implementation and is not frontend code.  
**Experience statement:** Nature has value. Transformation creates impact.  
**Design principle:** Every visible element should clarify nature, a transformation, a person, or an outcome.

Visual companions: [style tile](PHASE_2_STYLE_TILE.svg) and [responsive homepage storyboard](PHASE_2_RESPONSIVE_STORYBOARD.svg). Both are design studies, not approved photography or implemented pages.

## 1. Foundations

### 1.1 Color roles

The five NIRA brand colors are fixed. Use semantic roles rather than choosing colors separately for each page.

| Token | Value | Use |
| --- | --- | --- |
| `brand.forest` | `#063522` | Brand mark, primary action, navigation emphasis, deep green sections |
| `brand.coconut` | `#7a5645` | Material annotation, small accents, product-family context |
| `brand.wood` | `#482510` | Footer and selected dark story sections |
| `surface.cream` | `#fcf9f0` | Default page and card surface |
| `text.ink` | `#1c1c17` | Main reading text, headings, labels |

**Permitted derived treatments:** A subtle rule may use coconut brown at 25% opacity over cream; a light hover field may use forest green at 6% opacity over cream. Primary action states use lighter forest `#0d4730` on hover and deeper forest `#042b1b` while pressed. Cards may use a soft `#1c1c17` shadow at 6% opacity. These are treatments of the approved palette, not new brand colors. Reserve forest and wood full fills for moments of emphasis so the long page remains warm and open.

**Approved text pairings (calculated WCAG contrast):**

| Foreground / background | Ratio | Use |
| --- | ---: | --- |
| Ink / cream | 16.25:1 | Body and headings |
| Forest / cream | 12.95:1 | Links, labels, outline controls |
| Coconut / cream | 6.15:1 | Readable accents and metadata |
| Cream / forest | 12.95:1 | Primary button and dark sections |
| Cream / wood | 12.89:1 | Footer and dark story sections |

Use coconut brown for **text only on cream** in this system. Text over photographs requires an individually checked opaque or sufficiently dark scrim; a palette value alone does not establish contrast on an image. Never communicate an error, category, or active state with color alone. Focus indication needs a visible two-pixel outline with two-pixel separation from the control, checked on both light and dark surfaces.

### 1.2 Typography

**Chosen pairing:** Playfair Display for editorial headings; Inter for body, navigation, buttons, labels, and data. Keep Georgia and system sans serif as fallbacks. Font files, licensing, language coverage, and page weight are to be checked before implementation. Use sentence case, restrained weight, and no letter spacing on large serif headlines.

| Role | Mobile size / line height | Expanded size / line height | Weight | Guidance |
| --- | --- | --- | ---: | --- |
| Hero display | 48 / 52px | 80 / 84px | 500–600 | One idea, roughly 8–12 words maximum; allow intentional line breaks. |
| H1, interior page | 44 / 50px | 68 / 74px | 500–600 | One H1 per page. |
| H2, section title | 36 / 42px | 56 / 62px | 500–600 | Main chapter heading. |
| H3 | 28 / 34px | 36 / 42px | 500–600 | Product or story subsection. |
| Body large | 18 / 28px | 20 / 32px | 400 | Introductions and lead paragraphs. |
| Body medium | 16 / 26px | 18 / 29px | 400 | Default reading copy. |
| Body small | 14 / 22px | 16 / 25px | 400 | Supporting description; not the only explanation of a feature. |
| Caption / metadata | 12 / 18px | 14 / 21px | 500 | Dates, credits, source labels; never essential instructions. |
| Eyebrow | 12 / 18px | 13 / 20px | 600 | Short uppercase category label with modest tracking. |

Use a maximum of approximately 65 characters per line for paragraphs and 12–14 characters per line for expressive hero text when the layout allows. Maintain at least 16px default reading text. Section titles use the H2 scale and semantic H2 markup; “section title” is a role, not an extra heading level.

### 1.3 Space, size, and surfaces

Use a 4px base. The named scale is `4, 8, 12, 16, 24, 32, 48, 64, 80, 112, 144` px. A designer may use 20px for a mobile page gutter because it maintains usable width at 320px; arbitrary one-off spacing should be avoided.

| Relationship | Mobile | Tablet portrait | Landscape tablet | Desktop |
| --- | ---: | ---: | ---: | ---: |
| Page side gutter | 20px | 40px | 48px | 64px, within 1280px max container |
| Major section vertical padding | 64px | 80px | 112px | 144px |
| Section heading to intro | 16px | 24px | 24px | 24px |
| Intro to principal content | 32px | 40px | 48px | 64px |
| Content grid gap | 16px | 24px | 32px | 32px |
| Card internal padding | 20px | 24px | 24px | 32px |

Use a 24px radius for pill buttons, 16px for cards and media frames, and 8px for form fields. Shadows are restrained: at most `0 8px 28px rgba(28, 28, 23, 0.06)` for a raised product or article card. Cards also need a visible subtle border so they remain distinct without a shadow. Sections generally separate through space, imagery, or a deliberate full-width surface change, not repeated floating panels.

### 1.4 Container and grid

The content container is **at most 1280px wide, including its internal side gutters**. Content centers in larger viewports. Editorial prose inside that container stays narrower than image-led content.

| Viewport | Grid | Composition |
| --- | --- | --- |
| 320–767px | 4 tracks, 16px gaps | All narrative sections span the width as one column. |
| 768–1024px portrait | 8 tracks, 24px gaps | Narrative remains stacked; images can be wider but do not reorder the story. |
| 1024–1365px landscape | 12 tracks, 32px gaps | Image/text splits and selected two- or three-column groups. |
| 1366px+ | 12 tracks, 32px gaps | Full editorial composition; content stops growing at 1280px. |

At **1024px exactly**, portrait stays stacked and landscape may expand. The full navigation appears only when its seven links, brand mark, and action fit without crowding; target about 1200px as an initial design check rather than assuming that every landscape tablet fits the entire menu. Keep DOM and reading order identical across layouts; visual placement can change without changing meaning.

## 2. Component specifications

Components are consistent patterns, not prescriptions to put every piece of content in a card. Each has a plain content variant and accessible interaction states.

### 2.1 Navigation

| Aspect | Design rule |
| --- | --- |
| Identity | NIRA wordmark at left; “Nature Into Renewable Assets” can appear in a quieter secondary location, not crammed into the header. |
| Desktop | Seven links in the approved order; primary action “Become Partner” only if space permits. Current page uses a persistent underline or weight change plus semantic current-page state. |
| Compact | Brand mark and labeled menu button. Menu opens as a simple panel with all seven links and a clear close control. |
| Dimensions | 72px minimum desktop header; 64px compact header. Interactive targets at least 44×44px. |
| Behavior | Visible keyboard focus, Escape closes the menu, focus returns to the trigger, and the menu is navigable in reading order. |

Navigation should be quiet on first view; the hero remains the strongest visual element. A sticky header is optional and should not obscure section headings or consume excessive mobile height.

### 2.2 Button and link system

| Variant | Fill / border / text | Size and shape | States |
| --- | --- | --- | --- |
| Primary | Forest fill, cream text | 48px high mobile; 52px expanded; 20–24px horizontal padding; 24px radius | Hover: `#0d4730` fill; active: `#042b1b` fill with a subtle pressed offset; focus: separated 2px outline; disabled: muted but labeled. Cream text retains at least 10.17:1 contrast in hover and active states. |
| Secondary | Cream or transparent fill, 1.5px forest border, forest text | Same height and padding | Hover: 6% forest tint; active: 12% forest tint; focus: separated outline. |
| Text link | Forest text with persistent underline | 44px minimum target when it serves as a stand-alone action | Hover: stronger underline; focus: visible outline. |

Labels use direct verbs: **Explore NIRA**, **Discover Transformation**, **Explore Products**, **Become Partner**. A disabled control needs an explanation if the user could reasonably expect it to work. No hover effect may be the only indication of interactivity.

### 2.3 Cards and evidence blocks

| Pattern | Required content | Composition | Responsive rule |
| --- | --- | --- | --- |
| Product Card | Approved image, family/name, material source, short description, sustainability value, detail link | Image first, then clear text hierarchy; cream surface, subtle border, no large floating effect | One column mobile; two or four across only where text remains readable. Equal card heights are optional. |
| Impact Card | Verified value and unit *or* qualitative outcome, descriptive label, reporting period/source when numeric | Number supports a human explanation; avoid dashboard tiles | Stack on portrait, use a restrained row or editorial split on landscape. |
| Article Card | Thumbnail, category, title, date, excerpt if useful | Image-to-text ratio 3:2, category above title, metadata below | One column portrait; two or three columns only when titles remain legible. |

If there is no verified metric, the Impact Card becomes a short evidence statement with a real example. A component must never display sample figures as published facts. The product family is a label; the actual product name and material remain explicit.

### 2.4 Section Wrapper and narrative patterns

**Section Wrapper:** Optional eyebrow, semantic H2 title, concise introduction, content area, and optional contextual link. It sets section space and container alignment. Variants are cream, forest, or wood surfaces; dark variants switch text to cream and use only validated contrast pairings. The H2 appears before supporting content in reading order.

**Hero Section:** One H1, one supporting statement, up to two actions, one authentic visual. On portrait screens, copy precedes image; on landscape, image and copy may share a 5/7 split. Avoid placing essential text directly over a complex photograph.

**Story Section:** Real material/process image paired with a single narrative claim and a short explanation. In a split layout, alternate visual placement only when it improves pacing; mobile stays text then image unless the image is needed first to understand the text.

**Coconut Transformation:** An understandable static sequence of material → preparation/process → product → potential outcome. On portrait it reads vertically; on landscape it may branch to the four product families. Each branch is labeled in text and can be used without animation or hover.

**Partnership CTA:** A short invitation connected to the preceding evidence, one primary action, optional secondary contact route, and a real response expectation once the team establishes it. Use a distinct forest or wood surface sparingly near the end of the page.

### 2.5 Footer

Use a wood or forest surface with cream text. Include NIRA identity and one-sentence purpose, grouped links for the seven public pages, the approved contact route, image/story credits where needed, and privacy information for inquiry collection. Keep link labels visible and keyboard focus clear. On portrait, groups stack in the same reading order; on landscape, use up to three columns plus a final legal row. The footer should close the narrative calmly, without a second oversized sales CTA.

### 2.6 Form fields for Partnership

Use 48px minimum field height, 8px radius, visible 1.5px border, and labels above fields. Required status appears in text, not only a symbol. Provide brief helper copy, input-specific error text, and a confirmation state after successful submission. Error communication uses text and an icon or border treatment so it does not rely on color. Fields and consent copy must remain readable at 320px; any personal-data language must be approved before the form becomes live.

## 3. Page-level design direction

### 3.1 Homepage

The homepage is an editorial story that moves from nature through transformation and people to evidence and action. Use no more than two consecutive dark sections; let cream space and real images carry most of the pace.

| Order | Section | Hierarchy and layout | Pattern |
| --- | --- | --- | --- |
| 1 | Hero | “NIRA / Value Beyond Waste” H1, short proposition, then actions; authentic coconut/material image has equal narrative weight on wide screens. | Hero Section, primary and secondary button |
| 2 | Story Behind NIRA | A concise problem-to-opportunity statement followed by one tangible material example. Image of actual resource or hands. | Story Section |
| 3 | One Coconut, Endless Possibilities | Coconut source at the start, distinct labeled paths for husk/fiber, residue, and shell; products are the endpoints. | Coconut Transformation |
| 4 | Transformation Journey | Four numbered steps—Collect, Process, Create, Empower—with one-line explanations and process imagery. | Section Wrapper, process sequence |
| 5 | Product Showcase | Four families, each with a product, source material, and value statement. | Product Card or editorial product row |
| 6 | Impact | Lead with a real outcome, then verified environmental, social, and economic proof; do not use an empty metric grid. | Impact Card/evidence block |
| 7 | Community Story | Portrait or action photograph with an approved account and participant attribution. | Story Section |
| 8 | Invitation to Act | Return to the brand promise and offer a collaboration route. | Partnership CTA |

On mobile, all eight sections keep this order. On wide screens, the first and community stories may use split layouts, while transformation and product sections gain a larger visual field. The impact section is documentary evidence, not a dashboard.

### 3.2 About NIRA

Open with the meaning of Nature Into Renewable Assets and a brief philosophy statement. Follow with vision and mission as two clear editorial chapters, then values tied to observable behavior or material. Use one strong photograph per chapter rather than decorative cards. End with a link to the transformation story.

### 3.3 Transformation

Open on the coconut and its named parts. Show each material-to-product route as a labeled sequence, followed by the Collect → Process → Create → Empower process. Use close-up process photography and plain captions; never imply a branch applies to all products. On portrait, branches become consecutive vertical stories; on landscape, they can form a comparison field. Link each output to the matching product family.

### 3.4 Products

Start with a short explanation that products demonstrate the value of transformation. Present NIRA Energy, Grow, Living, and Craft with consistent product imagery and product/source/value fields. A product detail view should place the approved product image and name first, then **material source**, **making process**, **use**, and **substantiated sustainability value**. Product inquiry is secondary to understanding; no cart or marketplace pattern is introduced.

### 3.5 Impact

Open with an explanation of what NIRA measures and why. Group environmental, social, and economic outcomes into editorial sections, pairing each verified metric with reporting period, method/source, and a real-world interpretation. Use community imagery or a short approved story to connect the figures to people. If evidence is not ready, present the measurement approach and qualitative work only; do not show dummy counters.

### 3.6 Journal

Lead with a featured approved article using an image/text split. Follow with a modest grid of Article Cards grouped by education, process, and community stories as content permits. Reading pages use a narrow text column, clear H1/H2 hierarchy, date/author, image credits, and contextual related links. Do not invent article inventory to fill a grid.

### 3.7 Partnership

Begin with the collaboration proposition and the types of partner NIRA seeks. Show the collaboration model in a short sequence, then the contact route or form with a clear privacy explanation and response expectation. Use proof from the transformation and impact pages nearby so the invitation has context. End with a calm reassurance and alternate contact details when approved.

## 4. Photography and image direction

The image set should feel **documentary and premium**: natural light, true color, honest textures, and visible human activity. Commission or obtain rights to real community and production photographs. Prefer a specific frame of hands working with husk or shell over generic leaves or anonymous sustainability imagery.

| Subject | Preferred framing | Typical crop |
| --- | --- | --- |
| Hero material | Recognizable coconut form or material in a real setting, with space for adjacent copy | 4:5 portrait; 16:10 landscape |
| Process | Hands, tools, and material at an identifiable step | 3:2 |
| Product | Clear form, texture, and use context without staged excess | 4:3 |
| Community | Person in their own context, with permission and accurate attribution | 4:5 or 3:2 |
| Journal | Relevant story moment, not a generic category symbol | 3:2 |

Keep focal subjects inside safe crop areas for portrait and landscape. Avoid color grading that turns materials into an unrealistic hue. Provide factual alt text for informative images; decorative repeats can use empty alt text. Add captions when the process or person needs identification. Record ownership, license, consent, and credit alongside each asset.

## 5. Motion direction

Motion reveals cause and sequence; it does not supply missing meaning. Use a 180–240ms response for control states and a 500–700ms calm reveal for an optional entering section. At most one major reveal should demand attention in a viewport. A transformation branch may reveal in sequence, but its labels and relationships must be visible without motion. Parallax, if used, stays subtle and must not move text relative to its meaning. A counter animates only a verified metric and displays its final value immediately when motion is reduced or JavaScript is unavailable.

Respect `prefers-reduced-motion`: remove parallax and scroll-driven motion, use immediate content visibility, and shorten state transitions. Do not block navigation, reading, or keyboard use while an animation runs.

## 6. Responsive and accessibility validation

| Review size | Expected design check |
| --- | --- |
| 320px mobile portrait | Hero breaks cleanly, one-column story, 20px gutters, 44px targets, no horizontal scroll. |
| 375px mobile portrait | Product and article cards remain readable; buttons do not collide. |
| 768px tablet portrait | Same story order, larger breathing space, compact navigation. |
| 1024px tablet portrait | Still stacked despite width; images do not force premature two-column reading. |
| 1024px tablet landscape | Selected splits and grids work; navigation stays compact if seven links do not fit. |
| 1366px desktop | Full navigation and editorial splits; no content exceeds the 1280px container. |
| Wide desktop | Text and images stop stretching; whitespace frames the story. |

Acceptance checks for every page and component:

1. Reading and tab order match the narrative order; links and menu work by keyboard.
2. Text contrast uses the validated palette pairings; image overlays are checked with the actual image.
3. Body text is readable at 320px and does not rely on captions for essential information.
4. There is one clear H1 per page and a logical H2/H3 sequence.
5. Buttons, menu controls, and fields have visible focus and at least 44×44px interactive targets.
6. Every meaningful image has accurate alt text or a nearby caption; photo permissions and credits are known.
7. Reduced motion retains all information and actions.
8. Numeric claims have provenance; human stories have approval.

## 7. Design governance and implementation handoff

Use this document for component dimensions, hierarchy, and behavior. Use [Phase 0 foundation](PHASE_0_FOUNDATION.md) for the narrative and technical boundaries, and the `.agents` brand/architecture documents for project intent. A page may vary its composition, but it must reuse the semantic colors, type roles, spacing scale, core component states, and responsive reading order defined here.

Before Phase 3 implementation, create page compositions and component specimens at the validation sizes above, using approved or clearly marked provisional content. Review contrast against real imagery, font rendering and licensing, product mappings, accessibility states, and the actual partnership contact path. The absence of verified metrics or stories is a content dependency, not permission to create sample facts.

**Source note:** The Phase 2 brief references `.agents/00_FOUNDATION_AND_BRAND_UX.md`, which is absent from the workspace. [Phase 0 foundation](PHASE_0_FOUNDATION.md) and [the Phase 0 & 1 completion report](PHASE_0_1_COMPLETION_REPORT.md) provide that context; the remaining named `.agents` files were reviewed.
