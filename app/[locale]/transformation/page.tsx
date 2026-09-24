import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { JourneySteps } from "@/components/sections/journey-steps";
import { PageHero } from "@/components/sections/page-hero";
import { PartnershipCTA } from "@/components/sections/partnership-cta";
import { StorySection } from "@/components/sections/story-section";
import { ButtonLink } from "@/components/ui/button";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";

export const metadata: Metadata = {
  title: "Transformation · Biological Architecture to Renewable Assets",
  alternates: { canonical: "/transformation" },
  description:
    "Follow the NIRA transformation methodology: mechanical decortication, cellular pith purification, and low-emission pyrolysis turn discarded coconut biomass into regenerative products.",
  keywords: [
    "coconut transformation",
    "cocofiber extraction",
    "cocopeat processing",
    "coconut shell pyrolysis",
    "circular bio-materials",
  ],
  openGraph: {
    title: "Transformation at NIRA · Value Beyond Waste",
    description:
      "From whole coconut to engineered bio-materials to regenerative products.",
    images: ["/images/coconut-husks.jpg"],
  },
};

export default function TransformationPage() {
  return (
    <>
      <PageHero
        eyebrow="Transformation Methodology"
        title="From raw coconut to endless possibility."
        description="There is no single second life for a coconut. Every anatomical layer — husk, pith, and shell — follows a calibrated, chemical-free route from post-harvest biomass to regenerative assets."
        image="/images/coconut-husks.jpg"
        imageAlt="Naturally harvested coconut husks drying on woven bamboo mats"
      />

      {/* Material Map Grid */}
      <section className="nira-section bg-cream">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow text-coconut">
              01 / The Circular Material Map
            </p>
            <h2 className="type-section-title mt-4 text-forest">
              One origin. Distinct futures.
            </h2>
            <p className="type-lead mt-3 text-ink-muted">
              Rather than blending biomass into indistinguishable pulp, NIRA
              preserves the unique mechanical and cellular qualities inherent to
              each layer.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                part: "Outer Husk",
                material: "Natural Coir Fiber",
                badge: "Structural Tensile Lignin",
                process:
                  "Mechanical decortication and sun-curing isolate high-tensile, rot-resistant fibers without synthetic adhesives.",
                form: "NIRA Living (Breathable Pots & Bio-Textiles)",
                href: "/products#living",
              },
              {
                part: "Inner Pith Residue",
                material: "Organic Cocopeat",
                badge: "Cellular Sponge Matrix",
                process:
                  "Rainwater desalinating, particle grading, and microbiological resting yield an aerated moisture-retentive substrate.",
                form: "NIRA Grow (Peat-Free Seedling Medium)",
                href: "/products#grow",
              },
              {
                part: "Hard Endocarp Shell",
                material: "Bio-Carbon & Polished Shell",
                badge: "High-Calorific Endocarp",
                process:
                  "Controlled pyrolysis carbonization generates clean briquettes; precision hand-sanding crafts timeless tabletop homeware.",
                form: "NIRA Energy & NIRA Craft",
                href: "/products#energy",
              },
            ].map((item) => (
              <div
                key={item.part}
                className="group flex flex-col justify-between rounded-card border border-coconut/15 bg-sand/30 p-7 shadow-xs transition-all duration-300 hover:border-coconut/35 hover:shadow-elevated hover:bg-sand/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-coconut uppercase">
                      {item.part}
                    </span>
                    <span className="rounded-full bg-cream px-2.5 py-0.5 text-[0.6875rem] font-semibold text-forest">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display mt-5 text-2xl text-forest font-medium">
                    {item.material}
                  </h3>

                  <p className="type-body text-ink-muted mt-3 text-sm leading-relaxed">
                    {item.process}
                  </p>
                </div>

                <div className="mt-8 border-t border-coconut/15 pt-4">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest group-hover:text-forest-hover"
                  >
                    <span>{item.form}</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story Section: Hands in the Fiber */}
      <StorySection
        eyebrow="02 / Tactile Craftsmanship"
        title="Fiber begins with human touch."
        paragraphs={[
          "The outer husk of the coconut is nature's shock absorber. Filled with natural lignin, it repels excess moisture, resists bacterial decay, and maintains breathability under extreme tropical climate shifts.",
          "When artisan hands separate and weave these golden strands, they transform rough agricultural remnants into vessels that breathe with living plants. When the plant outgrows the pot, both can be transplanted directly into the ground without plastic waste or transplant trauma.",
        ]}
        image="/images/coir-fiber.jpg"
        imageAlt="Close-up of artisan hands carefully handling and separating long golden-brown coconut coir fibers"
        imageNote="Artisan handling raw coconut coir fibers in an open-air workshop."
        reverse
      />

      {/* Step by Step Journey Section */}
      <section
        className="nira-section bg-forest text-cream relative overflow-hidden"
        data-surface="dark"
      >
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <EyebrowBadge className="mb-3">03 / End-to-End System</EyebrowBadge>
            <h2 className="type-section-title text-cream">
              Collect. Process. Create. Empower.
            </h2>
            <p className="type-lead mt-4 text-cream/80 leading-relaxed">
              Every step in our cycle is transparently rooted in fair trade,
              zero-chemical refining, and localized community ownership.
            </p>
          </div>

          <div className="mt-12">
            <JourneySteps />
          </div>
        </Container>
      </section>

      {/* Link to Products */}
      <section className="nira-section bg-sand/50">
        <Container className="nira-cta-columns grid gap-8 lg:items-end">
          <div>
            <p className="eyebrow text-coconut">04 / The Result</p>
            <h2 className="type-section-title mt-4 text-forest">
              Experience the finished forms.
            </h2>
            <p className="type-lead mt-4 max-w-xl text-ink-muted">
              Living, Grow, Energy, and Craft show how high aesthetic standards
              and deep ecological responsibility elevate everyday living.
            </p>
          </div>
          <ButtonLink href="/products" className="w-fit shadow-xs">
            Explore All Product Families <ArrowUpRight size={18} />
          </ButtonLink>
        </Container>
      </section>

      <PartnershipCTA />
    </>
  );
}
