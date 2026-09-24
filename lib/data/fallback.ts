import type { Product, Material } from "@/types/product";
import type { ImpactMetric } from "@/types/impact";
import type { CommunityStory } from "@/types/community";
import type { Article } from "@/types/journal";
import type { Partner } from "@/types/partner";

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: "prod-living",
    name: "NIRA Living",
    slug: "living",
    category: "Living",
    description:
      "A natural, breathable plant vessel crafted from pressed coconut coir fiber that nurtures plant roots and returns gracefully to the earth.",
    materialSource: "Coconut husk fiber",
    process:
      "Raw husk fibers are carefully extracted, sun-cured, and formed into durable, 100% biodegradable vessels with organic plant-based binders.",
    sustainabilityValue:
      "Eliminates single-use plastic nursery pots while providing superior root aeration and water retention.",
    imageUrl: "/images/coir-pot.jpg",
    imageAlt:
      "Handcrafted natural coconut coir plant pots on artisan wooden table",
    imageNote: "Handcrafted from 100% natural coconut husk coir.",
  },
  {
    id: "prod-grow",
    name: "NIRA Grow",
    slug: "grow",
    category: "Grow",
    description:
      "High-grade organic cocopeat growing medium that transforms fine coconut residue into nutrient-holding soil conditioner.",
    materialSource: "Coconut residue",
    process:
      "Fine fibrous husk residue is washed, pH-balanced, and aerated to create the ideal moisture-retentive growing medium for seedlings and gardens.",
    sustainabilityValue:
      "A renewable alternative to peat moss that protects fragile peat bogs and retains up to 8x its weight in water.",
    imageUrl: "/images/cocopeat-tray.jpg",
    imageAlt: "Organic cocopeat seedling medium with fresh botanical sprouts",
    imageNote: "Triple-washed, low-EC organic growing medium.",
  },
  {
    id: "prod-energy",
    name: "NIRA Energy",
    slug: "energy",
    category: "Energy",
    description:
      "Smokeless, high-calorific coconut shell charcoal briquettes providing clean, long-lasting heat from discarded shells.",
    materialSource: "Coconut shell",
    process:
      "Aged coconut shells are pyrolyzed in low-emission kilns, finely milled, and compressed into dense geometric briquettes.",
    sustainabilityValue:
      "Zero deforestation fuel that burns 3x longer than wood charcoal with minimal ash and clean, odorless combustion.",
    imageUrl: "/images/energy-concept.webp",
    imageAlt:
      "Geometric coconut shell charcoal briquettes beside raw polished shell",
    imageNote: "100% natural coconut shell carbonization.",
  },
  {
    id: "prod-craft",
    name: "NIRA Craft",
    slug: "craft",
    category: "Craft",
    description:
      "Artisan lifestyle vessels and functional homeware that honor the natural contour and organic grain of polished coconut shells.",
    materialSource: "Coconut shell",
    process:
      "Mature coconut shells are hand-selected, carved, sanded smooth, and sealed with food-grade virgin coconut oil.",
    sustainabilityValue:
      "Reclaims durable shell biomass into timeless heirloom homeware, preventing open-air burning.",
    imageUrl: "/images/craft-concept.webp",
    imageAlt:
      "Artisan handcrafted polished coconut shell bowls on organic linen",
    imageNote: "Hand-finished by village artisans with virgin coconut oil.",
  },
];

export const FALLBACK_MATERIALS: Material[] = [
  {
    id: "mat-husk",
    name: "Coconut Husk",
    slug: "coconut-husk",
    description:
      "The fibrous outer layer that cushions and protects the coconut fruit, rich in high-tensile lignin fibers.",
    sourcePart: "Outer Husk",
    transformationProcess:
      "Fibers are decorticated, sun-dried, sorted by grade, and pressed into resilient nursery pots and erosion-control textiles.",
    outputProduct: "NIRA Living & Bio-Textiles",
    imageUrl: "/images/coconut-husks.jpg",
    imageAlt:
      "Naturally harvested coconut husks drying under tropical sunlight",
  },
  {
    id: "mat-fiber",
    name: "Coconut Peat Residue",
    slug: "coconut-peat",
    description:
      "The spongy cellular dust held between the fibers of the coconut husk, possessing extraordinary water-retention capabilities.",
    sourcePart: "Inner Husk Pith",
    transformationProcess:
      "Desalinated with natural rainwater, aged for microbiological stability, and screened for optimal particle distribution.",
    outputProduct: "NIRA Grow Soil Medium",
    imageUrl: "/images/cocopeat-tray.jpg",
    imageAlt: "Fine organic cocopeat growing medium with tender sprouts",
  },
  {
    id: "mat-shell",
    name: "Coconut Shell",
    slug: "coconut-shell",
    description:
      "The rigid, dense endocarp protecting the coconut meat and water, containing high calorific carbon density.",
    sourcePart: "Hard Endocarp Shell",
    transformationProcess:
      "Selected shells are hand-polished for craft homeware or carbonized in controlled kilns for smokeless briquettes.",
    outputProduct: "NIRA Energy & NIRA Craft",
    imageUrl: "/images/craft-concept.webp",
    imageAlt: "Polished coconut shell homeware and carbon briquettes",
  },
];

export const FALLBACK_COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: "story-wayan",
    name: "Pak Wayan Sudarma",
    location: "Banyuwangi, East Java",
    role: "Lead Artisan & Processing Coordinator",
    story:
      "For decades, we saw coconut husks piled along the roadsides or burned into smoky skies. With NIRA, what was once seen as worthless waste now provides steady income for dozens of families across our village while keeping our soil clean and honored.",
    impactDescription:
      "Coordinates 35+ local harvesters and women artisans in sustainable coir separation and weaving.",
    imageUrl: "/images/community-artisan.jpg",
    imageAlt: "Pak Wayan smiling in a sunlit coconut craft workshop",
  },
];

export const FALLBACK_ARTICLES: Article[] = [
  {
    id: "art-beyond-the-shell",
    title: "Beyond the Shell: The Anatomy of Forgotten Abundance",
    slug: "beyond-the-shell",
    excerpt:
      "A coconut is far more than its water and white meat. Why the rough husk, fine pith, and hard shell hold the keys to regenerative materials.",
    content: `A coconut is more than the single part we eat or drink. Around the world, millions of tons of coconut husks and shells are discarded every year as agricultural refuse. 

The first philosophical shift is in how we look at what remains. When materials are separated and prepared with reverence and care, each constituent part follows an elevated path instead of ending its life cycle in a burn pit.

For NIRA, that view is the starting point: understand the innate biological architecture of the coconut, choose an ecologically sound application, and ensure local farming communities are direct beneficiaries of the value created.`,
    thumbnailUrl: "/images/nira-still-life.webp",
    thumbnailAlt:
      "Editorial still life of coconut shell, fiber, and green sprout",
    category: "Philosophy & Circularity",
    publishedAt: "2026-09-18T08:00:00.000Z",
  },
  {
    id: "art-hands-in-the-journey",
    title: "Change is Made by Hands: Centering Community in Circular Design",
    slug: "hands-in-the-journey",
    excerpt:
      "Circular material systems cannot exist without human dignity. Why authentic sustainability must champion local artisans and fair livelihoods.",
    content: `A raw material does not transform itself. Decorticating husk, grading fiber, hand-polishing shells, and curing cocopeat all require generational knowledge, care, and human dedication.

NIRA's model places community sovereignty alongside circular product development. Rather than extracting resources for remote factories, processing centers are rooted within the coconut groves where farmers live and work.

This guarantees fair local value retention, dignified working environments, and a transparent supply chain where every vessel has a known provenance and a human story behind it.`,
    thumbnailUrl: "/images/coir-fiber.jpg",
    thumbnailAlt: "Artisan hands separating golden coconut coir fibers",
    category: "Community & People",
    publishedAt: "2026-09-12T10:00:00.000Z",
  },
  {
    id: "art-from-husk-to-form",
    title: "From Husk to Form: The Science of Natural Coir Vessels",
    slug: "from-husk-to-form",
    excerpt:
      "How coconut husk fiber transforms into high-performance, breathable nursery pots that nourish plant root structures without synthetic plastics.",
    content: `The fibrous outer husk of the coconut is nature's shock absorber. Packed with lignin, it resists fungal rot, withstands tropical humidity, and provides extraordinary tensile strength.

When transformed into NIRA Living vessels, these natural fibers allow plant roots to breathe freely and undergo natural air-pruning. Unlike rigid plastic containers that cause root circling and transplant shock, coir pots integrate directly into the soil when planted.

The result is healthier plants, richer soil biology, and zero plastic residue left behind in our gardens and ecosystems.`,
    thumbnailUrl: "/images/coir-pot.jpg",
    thumbnailAlt: "Natural coconut coir pots with healthy houseplant",
    category: "Design & Craftsmanship",
    publishedAt: "2026-09-05T14:00:00.000Z",
  },
];

export const FALLBACK_IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "imp-1",
    category: "Environmental",
    metricName: "Biomass Circularity",
    value: 100,
    unit: "%",
    description:
      "Every component of the harvested coconut husk and shell is repurposed into renewable assets.",
    year: 2026,
  },
  {
    id: "imp-2",
    category: "Social",
    metricName: "Artisan Households",
    value: 45,
    unit: "+",
    description:
      "Families in coconut-growing coastal villages actively participating in collection and craft.",
    year: 2026,
  },
  {
    id: "imp-3",
    category: "Economic",
    metricName: "Local Income Uplift",
    value: 38,
    unit: "%",
    description:
      "Average increase in seasonal household revenue through post-harvest valorization.",
    year: 2026,
  },
];

export const FALLBACK_PARTNERS: Partner[] = [
  {
    id: "part-1",
    name: "Lingkar Tani Lestari",
    organization: "East Java Agroforestry Cooperative",
    category: "Community Cooperatives",
    logoUrl: null,
    logoAlt: null,
    description:
      "Grassroots farmer cooperative providing fair-trade raw coconut husks and community processing.",
  },
  {
    id: "part-2",
    name: "BioCircularity Lab",
    organization: "Renewable Material Research Institute",
    category: "Research & Development",
    logoUrl: null,
    logoAlt: null,
    description:
      "Conducting thermal and biodegradable degradation testing for natural composite development.",
  },
];
