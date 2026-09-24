import type { Metadata } from "next";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ImpactCard } from "@/components/impact/impact-card";
import { PageHero } from "@/components/sections/page-hero";
import { PartnershipCTA } from "@/components/sections/partnership-cta";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { getImpactMetrics } from "@/lib/supabase/queries";
import type { ImpactCategory, ImpactMetric } from "@/types/impact";

export const metadata: Metadata = {
  title: "Impact · Meaning Beyond the Material",
  alternates: { canonical: "/impact" },
  description:
    "Explore the environmental, social, and economic outcomes NIRA cultivates through circular coconut material innovation and transparent community governance.",
  keywords: [
    "NIRA impact",
    "circular bio-economy",
    "UN SDG 8",
    "UN SDG 12",
    "community livelihoods",
    "peatland conservation",
  ],
  openGraph: {
    title: "NIRA Impact · Three Pillars of Regenerative Value",
    description:
      "Material integrity, community prosperity, and radical transparency.",
    images: ["/images/nira-still-life.webp"],
  },
};

const narrativeFallback: Record<ImpactCategory, string> = {
  Environmental:
    "100% biological diversion of coconut husk and shell biomass away from open-air burning, while safeguarding critical peat bogs from destructive mining.",
  Social:
    "Centering collection, grading, and crafting within coastal agricultural villages, ensuring dignified, safe, and generational artisan participation.",
  Economic:
    "Unlocking new local economic streams from what was previously considered zero-value agricultural waste, lifting seasonal household revenues.",
};

function latestMetricFor(
  metrics: ImpactMetric[],
  category: ImpactCategory,
): ImpactMetric | undefined {
  return metrics.find((metric) => metric.category === category);
}

export default async function ImpactPage() {
  const metrics = await getImpactMetrics();
  const categories: ImpactCategory[] = ["Environmental", "Social", "Economic"];

  return (
    <>
      <PageHero
        eyebrow="Grounded Accountability"
        title="Meaning far beyond the material."
        description="A beautiful functional vessel is only one facet of regenerative design. NIRA's foundational ambition ties responsible material utilization directly to biodiversity preservation, soil health, and dignified household prosperity."
        image="/images/nira-still-life.webp"
        imageAlt="Editorial still life showing coconut material and emerging green sprout"
      />

      {/* Three Pillars Section */}
      <section className="nira-section bg-cream">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow text-coconut">
              01 / Three Dimensions of Renewal
            </p>
            <h2 className="type-section-title mt-3 text-forest">
              What true circularity looks like.
            </h2>
            <p className="type-lead mt-3 text-ink-muted">
              We reject single-metric sustainability claims in favor of balanced
              ecological, human, and local economic progress.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6">
            {categories.map((category, index) => {
              const metric = latestMetricFor(metrics, category);
              return metric && metric.value !== null ? (
                <ImpactCard
                  key={category}
                  className={
                    index === 2 ? "col-span-2 md:col-span-1" : undefined
                  }
                  kind="metric"
                  label={category}
                  description={metric.description}
                  value={metric.value.toLocaleString()}
                  unit={metric.unit ?? ""}
                  period={
                    metric.year ? `Year ${metric.year}` : "Field Verified"
                  }
                  source="NIRA Village Audits"
                />
              ) : (
                <ImpactCard
                  key={category}
                  className={
                    index === 2 ? "col-span-2 md:col-span-1" : undefined
                  }
                  kind="narrative"
                  label={category}
                  description={narrativeFallback[category]}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* Evidence Standard Section */}
      <section className="nira-section bg-sand/50">
        <Container className="nira-impact-columns grid items-center gap-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-coconut/20 bg-cream/70 px-3.5 py-1 text-xs font-semibold tracking-[0.14em] text-coconut uppercase">
              <ShieldCheck size={14} className="text-forest" />
              <span>Evidence Standard</span>
            </div>
            <h2 className="type-section-title text-forest">
              Show the work. Verify the numbers.
            </h2>
            <p className="type-lead mt-5 text-ink-muted leading-relaxed">
              We hold ourselves to a strict anti-greenwashing standard. NIRA
              publishes numerical metrics only when backed by auditable
              collection records, consensual community partnerships, and
              standardized third-party material lifecycle analyses.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-card border border-coconut/15 bg-cream p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
                  1
                </span>
                <h3 className="font-semibold text-forest">
                  Material Weight & Biomass Diversion
                </h3>
              </div>
              <p className="type-body text-ink-muted mt-2 text-sm">
                Documented tonnage of raw husks and shells diverted from
                roadside dump sites and agricultural burning pits, verified at
                village collection stations.
              </p>
            </div>

            <div className="rounded-card border border-coconut/15 bg-cream p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
                  2
                </span>
                <h3 className="font-semibold text-forest">
                  Household Sovereignty & Fair Compensation
                </h3>
              </div>
              <p className="type-body text-ink-muted mt-2 text-sm">
                Number of participating farming households receiving living-wage
                premiums above standard raw copra market volatility.
              </p>
            </div>

            <div className="rounded-card border border-coconut/15 bg-cream p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
                  3
                </span>
                <h3 className="font-semibold text-forest">
                  Lifecycle Carbon & Peatland Preservation
                </h3>
              </div>
              <p className="type-body text-ink-muted mt-2 text-sm">
                Comparative greenhouse gas mitigation calculated by replacing
                mined sphagnum peat and fossil-derived nursery plastics with
                renewable coir.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Goals Section */}
      <section
        className="nira-section bg-forest text-cream relative overflow-hidden"
        data-surface="dark"
      >
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <EyebrowBadge className="mb-3">
              03 / Global Goals · Local Grounding
            </EyebrowBadge>
            <h2 className="type-section-title text-cream">
              Where the NIRA model connects.
            </h2>
            <p className="type-lead mt-4 text-cream/80 leading-relaxed">
              NIRA directly aligns with the United Nations Sustainable
              Development Goals. This represents an alignment of operational
              philosophy and ethical intent.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <a
              href="https://sdgs.un.org/goals/goal8"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-card border border-cream/20 bg-forest-light/60 p-8 backdrop-blur-xs transition-all duration-300 hover:border-cream/40 hover:bg-forest-light"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-amber-accent uppercase">
                    UN SDG 8
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-cream/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream"
                  />
                </div>
                <h3 className="font-display mt-4 text-2xl md:text-3xl text-cream font-medium">
                  Decent Work & Economic Growth
                </h3>
                <p className="mt-3 text-sm text-cream/75 leading-relaxed">
                  Promoting sustained, inclusive economic growth and productive,
                  dignified employment for rural coconut farming families and
                  women artisans.
                </p>
              </div>
              <div className="mt-6 border-t border-cream/10 pt-4 text-xs font-medium text-amber-accent">
                View UN Goal Specification ↗
              </div>
            </a>

            <a
              href="https://sdgs.un.org/goals/goal12"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-card border border-cream/20 bg-forest-light/60 p-8 backdrop-blur-xs transition-all duration-300 hover:border-cream/40 hover:bg-forest-light"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-amber-accent uppercase">
                    UN SDG 12
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-cream/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream"
                  />
                </div>
                <h3 className="font-display mt-4 text-2xl md:text-3xl text-cream font-medium">
                  Responsible Consumption & Production
                </h3>
                <p className="mt-3 text-sm text-cream/75 leading-relaxed">
                  Substantially reducing agricultural waste generation through
                  biological recycling, zero-chemical material separation, and
                  closed-loop regenerative production.
                </p>
              </div>
              <div className="mt-6 border-t border-cream/10 pt-4 text-xs font-medium text-amber-accent">
                View UN Goal Specification ↗
              </div>
            </a>
          </div>
        </Container>
      </section>

      <PartnershipCTA />
    </>
  );
}
