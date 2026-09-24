import type { Metadata } from "next";
import { ArrowDown, Handshake, Network, Sprout } from "lucide-react";

import { Container } from "@/components/layout/container";
import { InquiryBuilder } from "@/components/partnership/inquiry-builder";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";

export const metadata: Metadata = {
  title: "Partnership · Co-Creating Regenerative Value",
  alternates: { canonical: "/partnership" },
  description:
    "Explore strategic collaborations with NIRA: bulk circular raw materials, product co-design, horticultural substrate distribution, and community agroforestry.",
  keywords: [
    "NIRA partnership",
    "coconut collaboration",
    "circular bio-materials",
    "agroforestry",
  ],
  openGraph: {
    title: "Partner with NIRA · Co-Creating Circular Futures",
    description:
      "Connect material knowledge, design craft, and community sovereignty.",
    images: ["/images/nira-still-life.webp"],
  },
};

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Open Collaboration"
        title="Create new possibilities together."
        description="The most transformative ecological breakthroughs happen when circular material science, industrial design, and grassroots agricultural cooperatives converge. We invite mission-aligned partners to build alongside us."
      >
        <ButtonLink
          href="#inquiry"
          className="bg-cream text-forest hover:bg-sand transition-all shadow-sm inline-flex items-center gap-2"
        >
          <span>Draft an Inquiry</span>
          <ArrowDown size={16} />
        </ButtonLink>
      </PageHero>

      {/* Collaboration Tracks */}
      <section className="nira-section bg-cream">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow text-coconut">01 / Collaboration Pathways</p>
            <h2 className="type-section-title mt-3 text-forest">
              Distinct roles. Shared ecological intent.
            </h2>
            <p className="type-lead mt-3 text-ink-muted">
              Whether you are an established brand replacing virgin plastics, a
              horticultural grower seeking consistent cocopeat, or an
              institution advancing bio-composites.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Sprout,
                title: "Material Sourcing & Supply",
                badge: "Wholesale & Bulk",
                text: "Secure verified, triple-washed organic cocopeat growing media and graded coir fiber direct from fair-trade village processing centers.",
              },
              {
                icon: Handshake,
                title: "Product Co-Development",
                badge: "Design & Manufacturing",
                text: "Collaborate on bespoke natural plant vessels, bio-composite homeware, or tailored bio-charcoal formulations engineered for your market.",
              },
              {
                icon: Network,
                title: "Community & Agroforestry",
                badge: "Cooperative Alliances",
                text: "Expand decentralized post-harvest collection infrastructure across coastal coconut belt communities, championing living wages and skills training.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex flex-col justify-between rounded-card border border-coconut/15 bg-sand/30 p-8 shadow-xs transition-all duration-300 hover:border-coconut/35 hover:bg-sand/60 hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream">
                        <Icon size={18} />
                      </div>
                      <span className="font-display text-2xl font-light text-coconut/50">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-display mt-6 text-2xl text-forest font-medium">
                      {item.title}
                    </h3>

                    <p className="type-body text-ink-muted mt-3 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-coconut/15 pt-4">
                    <span className="rounded-full bg-cream px-3 py-1 text-[0.6875rem] font-semibold text-forest uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How We Work Together */}
      <section
        className="nira-section bg-forest text-cream relative overflow-hidden"
        data-surface="dark"
      >
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <EyebrowBadge className="mb-3">
              02 / Engagement Architecture
            </EyebrowBadge>
            <h2 className="type-section-title text-cream">
              How we partner together.
            </h2>
            <p className="type-lead mt-4 text-cream/80 leading-relaxed">
              We operate through disciplined transparency, rapid iterative
              prototyping, and steadfast respect for community governance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Listen & Diagnose",
                text: "Deeply understand your material requirements, mechanical constraints, and target sustainability outcomes.",
              },
              {
                number: "02",
                title: "Formulate & Prototype",
                text: "Calibrate coconut fiber density, particle sizing, or molding specifications in our regional workshop hubs.",
              },
              {
                number: "03",
                title: "Pilot & Validate",
                text: "Conduct rigorous real-world degradation, water retention, or thermal tests with verified documentation.",
              },
              {
                number: "04",
                title: "Scale & Steward",
                text: "Establish transparent supply contracts backed by direct farmer cooperative payments and traceability.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-card border border-cream/15 bg-forest-light/60 p-6 md:p-8 backdrop-blur-xs transition-colors hover:bg-forest-light"
              >
                <span className="font-display text-3xl font-light text-amber-accent">
                  {step.number}
                </span>
                <h3 className="font-display mt-4 text-xl text-cream font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm text-cream/75 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Inquiry Builder Section */}
      <section id="inquiry" className="nira-section scroll-mt-20 bg-sand/40">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <EyebrowBadge tone="light" className="mb-4 bg-cream/70">
              Direct Touchpoint
            </EyebrowBadge>

            <h2 className="type-section-title text-forest">
              Bring an idea to the table.
            </h2>

            <p className="type-lead text-ink-muted mt-5 leading-relaxed">
              Use our interactive brief generator to structure your project
              intent, target material family, and estimated timeline.
            </p>

            <div className="mt-8 rounded-card border border-coconut/15 bg-cream/80 p-6 space-y-4 text-xs text-ink-muted">
              <div className="flex items-start gap-2.5">
                <span className="font-bold text-forest mt-0.5">✦</span>
                <p>
                  <strong className="text-forest font-semibold">
                    Direct Email:
                  </strong>{" "}
                  Open your default email client pre-populated with your
                  complete specifications.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="font-bold text-forest mt-0.5">✦</span>
                <p>
                  <strong className="text-forest font-semibold">
                    One-Click Copy:
                  </strong>{" "}
                  Copy clean formatted brief text to share via WhatsApp, Slack,
                  or proposal decks.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="font-bold text-forest mt-0.5">✦</span>
                <p>
                  <strong className="text-forest font-semibold">
                    Zero Telemetry:
                  </strong>{" "}
                  Input fields execute client-side; no third-party tracking
                  scripts.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <InquiryBuilder />
          </div>
        </Container>
      </section>
    </>
  );
}
