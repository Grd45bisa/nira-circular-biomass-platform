import type { Metadata } from "next";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/layout/container";
import { ImpactCard } from "@/components/impact/impact-card";
import { PageHero } from "@/components/sections/page-hero";
import { PartnershipCTA } from "@/components/sections/partnership-cta";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { getImpactMetrics } from "@/lib/supabase/queries";
import type { ImpactCategory, ImpactMetric } from "@/types/impact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "impactPage" });
  return {
    title: { absolute: t("metaTitle") },
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "id" ? "/dampak" : "/en/impact",
      languages: {
        "id-ID": "/dampak",
        en: "/en/impact",
        "x-default": "/dampak",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/images/nira-still-life.webp"],
    },
  };
}

function latestMetricFor(
  metrics: ImpactMetric[],
  category: ImpactCategory,
): ImpactMetric | undefined {
  return metrics.find((metric) => metric.category === category);
}

export default async function ImpactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "impactPage" });
  const common = await getTranslations({ locale, namespace: "common" });
  const metrics = await getImpactMetrics();
  const categories: ImpactCategory[] = ["Environmental", "Social", "Economic"];

  const categoryMeta: Record<
    ImpactCategory,
    { label: string; narrative: string; iconName: "leaf" | "users" | "coins" }
  > = {
    Environmental: {
      label: t("pillars.environmental.label"),
      narrative: t("pillars.environmental.narrative"),
      iconName: "leaf",
    },
    Social: {
      label: t("pillars.social.label"),
      narrative: t("pillars.social.narrative"),
      iconName: "users",
    },
    Economic: {
      label: t("pillars.economic.label"),
      narrative: t("pillars.economic.narrative"),
      iconName: "coins",
    },
  };

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        image="/images/nira-still-life.webp"
        imageAlt={t("hero.imageAlt")}
      />

      {/* Three Pillars Section */}
      <section className="nira-section bg-cream">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow text-coconut">{t("pillars.eyebrow")}</p>
            <h2 className="type-section-title mt-3 text-forest">
              {t("pillars.title")}
            </h2>
            <p className="type-lead mt-3 text-ink-muted">
              {t("pillars.lead")}
            </p>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6">
            {categories.map((category, index) => {
              const metric = latestMetricFor(metrics, category);
              const meta = categoryMeta[category];
              return metric && metric.value !== null ? (
                <ImpactCard
                  key={category}
                  className={
                    index === 2 ? "col-span-2 md:col-span-1" : undefined
                  }
                  kind="metric"
                  label={meta.label}
                  iconName={meta.iconName}
                  pillarLabel={common("pillar")}
                  evidenceLabel={common("evidence")}
                  description={metric.description}
                  value={metric.value.toLocaleString()}
                  unit={metric.unit ?? ""}
                  period={
                    metric.year
                      ? `${t("pillars.yearPrefix")} ${metric.year}`
                      : t("pillars.verifiedField")
                  }
                  source={t("pillars.source")}
                />
              ) : (
                <ImpactCard
                  key={category}
                  className={
                    index === 2 ? "col-span-2 md:col-span-1" : undefined
                  }
                  kind="narrative"
                  label={meta.label}
                  iconName={meta.iconName}
                  pillarLabel={common("pillar")}
                  description={meta.narrative}
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
              <span>{t("evidence.badge")}</span>
            </div>
            <h2 className="type-section-title text-forest">
              {t("evidence.title")}
            </h2>
            <p className="type-lead mt-5 text-ink-muted leading-relaxed">
              {t("evidence.lead")}
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-card border border-coconut/15 bg-cream p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
                  1
                </span>
                <h3 className="font-semibold text-forest">
                  {t("evidence.points.one.title")}
                </h3>
              </div>
              <p className="type-body text-ink-muted mt-2 text-sm leading-relaxed">
                {t("evidence.points.one.text")}
              </p>
            </div>

            <div className="rounded-card border border-coconut/15 bg-cream p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
                  2
                </span>
                <h3 className="font-semibold text-forest">
                  {t("evidence.points.two.title")}
                </h3>
              </div>
              <p className="type-body text-ink-muted mt-2 text-sm leading-relaxed">
                {t("evidence.points.two.text")}
              </p>
            </div>

            <div className="rounded-card border border-coconut/15 bg-cream p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
                  3
                </span>
                <h3 className="font-semibold text-forest">
                  {t("evidence.points.three.title")}
                </h3>
              </div>
              <p className="type-body text-ink-muted mt-2 text-sm leading-relaxed">
                {t("evidence.points.three.text")}
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
              {t("goals.eyebrow")}
            </EyebrowBadge>
            <h2 className="type-section-title text-cream">
              {t("goals.title")}
            </h2>
            <p className="type-lead mt-4 text-cream/80 leading-relaxed">
              {t("goals.lead")}
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
                    {t("goals.sdg8.tag")}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-cream/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream"
                  />
                </div>
                <h3 className="font-display mt-4 text-2xl md:text-3xl text-cream font-medium">
                  {t("goals.sdg8.title")}
                </h3>
                <p className="mt-3 text-sm text-cream/75 leading-relaxed">
                  {t("goals.sdg8.text")}
                </p>
              </div>
              <div className="mt-6 border-t border-cream/10 pt-4 text-xs font-medium text-amber-accent">
                {t("goals.sdg8.link")}
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
                    {t("goals.sdg12.tag")}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-cream/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream"
                  />
                </div>
                <h3 className="font-display mt-4 text-2xl md:text-3xl text-cream font-medium">
                  {t("goals.sdg12.title")}
                </h3>
                <p className="mt-3 text-sm text-cream/75 leading-relaxed">
                  {t("goals.sdg12.text")}
                </p>
              </div>
              <div className="mt-6 border-t border-cream/10 pt-4 text-xs font-medium text-amber-accent">
                {t("goals.sdg12.link")}
              </div>
            </a>
          </div>
        </Container>
      </section>

      <PartnershipCTA localized />
    </>
  );
}
