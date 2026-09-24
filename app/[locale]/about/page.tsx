import type { Metadata } from "next";
import { Compass, HeartHandshake, Leaf, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { PartnershipCTA } from "@/components/sections/partnership-cta";
import { StorySection } from "@/components/sections/story-section";

export const metadata: Metadata = {
  title: "About NIRA · Philosophy, Vision & Circular Values",
  alternates: { canonical: "/about" },
  description:
    "Discover the NIRA ethos: unlocking value in overlooked coconut materials with communities, craft, and regenerative design at the core.",
  keywords: [
    "NIRA philosophy",
    "circular bio-economy",
    "coconut agroforestry",
    "regenerative design",
    "community empowerment",
  ],
  openGraph: {
    title: "About NIRA · Value Beyond Waste",
    description:
      "Every part of nature holds value. Discover the thinking behind NIRA.",
    images: ["/images/nira-still-life.webp"],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Ethos & Origin"
        title="Every part holds a deeper possibility."
        description="Nature Into Renewable Assets (NIRA) was founded on an essential observation: modern industrial systems discard the majority of agricultural biomass as valueless waste. We believe regenerative design begins by revealing the inherent brilliance of what nature already provides."
        image="/images/nira-still-life.webp"
        imageAlt="Editorial still life of whole coconut, split shell, raw coir fibers, and fresh green sprout"
      />

      <StorySection
        eyebrow="01 / Our Philosophy"
        title="Value begins with reverence and attention."
        paragraphs={[
          "A rough coconut husk is not trash. A hard dense shell is not a disposal problem. When observed with reverence, every constituent layer possesses distinct biological advantages — from natural antimicrobial lignin fibers to water-retentive spongy pith and high-density organic carbon.",
          "That same attention must extend to the people who steward these trees. Materials gain true meaning only through the generational knowledge, fair compensation, and craftsmanship of the farming communities who nurture them.",
        ]}
        image="/images/coir-fiber.jpg"
        imageAlt="Artisan hands carefully separating golden coconut coir fibers in open-air workshop"
        imageNote="Artisan handling raw coconut fibers in East Java, Indonesia."
      />

      {/* Vision & Mission */}
      <section className="nira-section bg-sand/50">
        <Container className="nira-two-column nira-about-vision-grid grid gap-8">
          <div className="rounded-card border border-coconut/15 bg-cream/90 p-8 md:p-10 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-forest" />
              <p className="eyebrow text-coconut">Our Vision</p>
            </div>
            <h2 className="type-section-title mt-4 text-forest text-2xl md:text-3xl">
              A future that honors the whole of nature.
            </h2>
            <p className="type-body text-ink-muted mt-5 leading-relaxed">
              We envision a restorative circular economy where 100% of harvested
              coconut biomass circulates through living systems, completely
              displacing petroleum-based single-use plastics, while generating
              decentralized, resilient prosperity for tropical farming
              households.
            </p>
          </div>

          <div className="rounded-card border border-coconut/15 bg-cream/90 p-8 md:p-10 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-forest" />
              <p className="eyebrow text-coconut">Our Mission</p>
            </div>
            <h2 className="type-section-title mt-4 text-forest text-2xl md:text-3xl">
              Make regenerative alternatives tangible.
            </h2>
            <p className="type-body text-ink-muted mt-5 leading-relaxed">
              To engineer and scale high-utility bio-material applications from
              coconut husk, pith, and shell — delivering uncompromised aesthetic
              and functional excellence through ethical village partnerships and
              radical supply chain transparency.
            </p>
          </div>
        </Container>
      </section>

      {/* Four Core Values */}
      <section className="nira-section bg-cream">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow text-coconut">02 / What Guides Us</p>
            <h2 className="type-section-title mt-3 text-forest">
              Four principles, one constant direction.
            </h2>
            <p className="type-lead mt-3 text-ink-muted">
              These tenets shape our research, our artisan relationships, and
              our product design standards.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Leaf,
                number: "01",
                name: "Respect for Nature",
                text: "Treating nature not as raw commodity to extract, but as an evolved biological system to understand, honor, and restore.",
              },
              {
                icon: Compass,
                number: "02",
                name: "Care in Craft",
                text: "Rejecting synthetic shortcuts. We employ physical mechanical separation, rainwater curing, and organic plant-based binders.",
              },
              {
                icon: HeartHandshake,
                number: "03",
                name: "People at the Center",
                text: "Centering agricultural communities as dignified co-creators and primary beneficiaries of every commercial product line.",
              },
              {
                icon: ShieldCheck,
                number: "04",
                name: "Evidence & Transparency",
                text: "No greenwashing. We communicate verified metrics when confirmed and clearly state where ongoing field research continues.",
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.name}
                  className="group flex flex-col justify-between rounded-card border border-coconut/15 bg-sand/30 p-7 shadow-xs transition-all duration-300 hover:border-coconut/35 hover:bg-sand/60 hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream">
                        <Icon size={18} />
                      </div>
                      <span className="font-display text-2xl font-light text-coconut/50">
                        {value.number}
                      </span>
                    </div>

                    <h3 className="font-display mt-6 text-xl text-forest font-medium">
                      {value.name}
                    </h3>

                    <p className="type-body text-ink-muted mt-3 text-sm leading-relaxed">
                      {value.text}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-coconut/10 pt-3">
                    <span className="text-[0.6875rem] font-bold tracking-wider text-forest uppercase">
                      Guiding Principle
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <PartnershipCTA />
    </>
  );
}
