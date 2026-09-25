import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Image Credits & Documentation",
  description:
    "Sources, attributions, and documentation for visual assets used across the PANDA COCO platform.",
  robots: { index: false, follow: true },
};

const credits = [
  {
    image: "Coconut husks drying in village workshop",
    medium: "Documentary Photography",
    details:
      "Sun-cured harvested coconut husks on woven bamboo mats in Keboncau Agro-Hub.",
    license: "CC BY-SA 4.0 / Editorial Rights",
  },
  {
    image: "Raw coir fiber artisan craftsmanship",
    medium: "Documentary Photography",
    details:
      "Close-up artisan separation of golden coconut coir fibers in Keboncau processing hub.",
    license: "CC BY-SA 4.0 / Editorial Rights",
  },
  {
    image: "Ibu Siti Rohmah, Lead Quality Coordinator",
    medium: "Environmental Portrait",
    details:
      "Documentary portrait of lead coordinator for OPTIMALKAN IBU in Keboncau, Pandeglang.",
    license: "PANDA COCO Community Archive",
  },
  {
    image: "PANDA COCOfiber - Industrial Coir Fiber",
    medium: "Studio Product Photography",
    details:
      "Natural golden coconut coir fibers and vessels engineered from 100% natural husks.",
    license: "PANDA COCO Design Studio",
  },
  {
    image: "PANDA COCOpeat - Organic Growing Medium",
    medium: "Macro Botanical Photography",
    details:
      "Fine aerated coconut pith substrate with tender sprouting seedlings.",
    license: "PANDA COCO Agricultural Archive",
  },
  {
    image: "PANDA COCO Bio-Briket - Carbon Briquettes",
    medium: "Studio Still Life",
    details:
      "Geometric hexagonal coconut shell charcoal briquettes beside polished raw shell.",
    license: "PANDA COCO Technical Visualization",
  },
  {
    image: "PANDA COCO Green Panel - Biocomposite Interior Board",
    medium: "Studio Still Life",
    details:
      "Compressed natural coir acoustic boards with non-toxic botanical binders.",
    license: "PANDA COCO Design Studio",
  },
] as const;

export default function ImageCreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Asset Provenance"
        title="The imagery behind the story."
        description="Visual transparency is integral to our communication standard. Here is the attribution, context, and photographic provenance for assets across this platform."
      />
      <section className="nira-section bg-cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="type-section-title text-forest">
              Visual Asset Index
            </h2>
            <p className="type-body text-ink-muted mt-3">
              Images reflect verified material documentation, community
              portraiture, and high-fidelity product representations designed
              according to PANDA COCO&apos;s circular agro-industrial aesthetic guidelines.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-card border border-coconut/15 bg-sand/30 shadow-xs">
            <ul className="divide-y divide-coconut/15">
              {credits.map((credit) => (
                <li
                  key={credit.image}
                  className="grid gap-3 p-6 sm:grid-cols-12 sm:items-center transition-colors hover:bg-sand/60"
                >
                  <div className="sm:col-span-5">
                    <span className="font-semibold text-forest block">
                      {credit.image}
                    </span>
                    <span className="text-xs text-coconut font-medium">
                      {credit.medium}
                    </span>
                  </div>
                  <div className="sm:col-span-4 text-xs text-ink-muted">
                    {credit.details}
                  </div>
                  <div className="sm:col-span-3 text-right">
                    <span className="rounded-full bg-cream border border-coconut/15 px-3 py-1 text-[0.6875rem] font-semibold text-forest">
                      {credit.license}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 rounded-card border border-coconut/15 bg-cream p-8 max-w-3xl shadow-xs">
            <h3 className="font-display text-xl text-forest font-medium">
              Editorial & Prototype Disclosure
            </h3>
            <p className="type-body text-ink-muted mt-3 text-sm leading-relaxed">
              Product visualizations and representative botanical imagery are
              utilized to illustrate material transformation pipelines and
              functional prototypes. Production specifications and commercial
              inventory are finalized collaboratively with our regional
              manufacturing and cooperative partners.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
