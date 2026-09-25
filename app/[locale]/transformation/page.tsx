import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/layout/container";
import { JourneySteps } from "@/components/sections/journey-steps";
import { PageHero } from "@/components/sections/page-hero";
import { PartnershipCTA } from "@/components/sections/partnership-cta";
import { StorySection } from "@/components/sections/story-section";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "transformation" });
  return {
    title: { absolute: t("metaTitle") },
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "id" ? "/proses" : "/en/transformation",
      languages: {
        "id-ID": "/proses",
        en: "/en/transformation",
        "x-default": "/proses",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/images/coconut-husks.jpg"],
    },
  };
}

export default async function TransformationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "transformation" });

  const materialItems = [
    {
      key: "husk",
      href: "/products#living" as any,
    },
    {
      key: "pith",
      href: "/products#grow" as any,
    },
    {
      key: "shell",
      href: "/products#energy" as any,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        image="/images/coconut-husks.jpg"
        imageAlt={t("hero.imageAlt")}
      />

      {/* Material Map Grid */}
      <section className="nira-section bg-cream">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow text-coconut">
              {t("materialMap.eyebrow")}
            </p>
            <h2 className="type-section-title mt-4 text-forest">
              {t("materialMap.title")}
            </h2>
            <p className="type-lead mt-3 text-ink-muted">
              {t("materialMap.lead")}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3 lg:mt-12">
            {materialItems.map(({ key, href }) => (
              <div
                key={key}
                className="group flex flex-col justify-between rounded-card border border-coconut/15 bg-sand/30 p-5 sm:p-6 lg:p-7 shadow-xs transition-all duration-300 hover:border-coconut/35 hover:shadow-elevated hover:bg-sand/50"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold tracking-widest text-coconut uppercase">
                      {t(`materialMap.items.${key}.part` as any)}
                    </span>
                    <span className="rounded-full bg-cream px-2.5 py-0.5 text-[0.6875rem] font-semibold text-forest shadow-2xs">
                      {t(`materialMap.items.${key}.badge` as any)}
                    </span>
                  </div>

                  <h3 className="font-display mt-4 sm:mt-5 text-lg sm:text-xl text-forest font-medium">
                    {t(`materialMap.items.${key}.material` as any)}
                  </h3>

                  <p className="type-body text-ink-muted mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed">
                    {t(`materialMap.items.${key}.process` as any)}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 border-t border-coconut/15 pt-3.5 sm:pt-4">
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest group-hover:text-forest-hover"
                  >
                    <span>{t(`materialMap.items.${key}.form` as any)}</span>
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
        eyebrow={t("craft.eyebrow")}
        title={t("craft.title")}
        paragraphs={[t("craft.p1"), t("craft.p2")]}
        image="/images/coir-fiber.jpg"
        imageAlt={t("craft.imageAlt")}
        imageNote={t("craft.imageNote")}
        link={{
          href: "/products",
          label: t("result.action"),
        }}
        reverse
      />

      {/* Step by Step Journey Section */}
      <section
        className="nira-section bg-forest text-cream relative overflow-hidden"
        data-surface="dark"
      >
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <EyebrowBadge className="mb-3">{t("system.eyebrow")}</EyebrowBadge>
            <h2 className="type-section-title text-cream">
              {t("system.title")}
            </h2>
            <p className="type-lead mt-4 text-cream/80 leading-relaxed">
              {t("system.lead")}
            </p>
          </div>

          <div className="mt-12">
            <JourneySteps localized />
          </div>
        </Container>
      </section>

      {/* PDCA Governance & Risk Mitigation */}
      <section className="nira-section bg-cream">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow text-coconut">{t("pdca.eyebrow")}</p>
            <h2 className="type-section-title mt-3 text-forest">{t("pdca.title")}</h2>
            <p className="type-lead mt-3 text-ink-muted leading-relaxed">{t("pdca.lead")}</p>
          </div>

          {/* PDCA Cycle Cards */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {(["plan", "do", "check", "act"] as const).map((cycle, index) => (
              <div
                key={cycle}
                className="group flex flex-col rounded-card border border-coconut/15 bg-sand/40 p-4 sm:p-5 lg:p-6 shadow-xs transition-all duration-300 hover:border-coconut/35 hover:bg-sand/70 hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-forest text-[0.625rem] font-bold text-cream uppercase tracking-wide">
                    {t(`pdca.cycles.${cycle}.label`)}
                  </span>
                  <span className="font-display text-xl font-light text-coconut/40">0{index + 1}</span>
                </div>
                <h3 className="font-display text-sm sm:text-base font-medium text-forest leading-snug">
                  {t(`pdca.cycles.${cycle}.title`)}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                  {t(`pdca.cycles.${cycle}.text`)}
                </p>
              </div>
            ))}
          </div>

          {/* Risk Mitigation */}
          <div className="mt-10 sm:mt-12">
            <h3 className="font-display text-base sm:text-lg font-semibold text-forest mb-5">
              {t("pdca.risks.title")}
            </h3>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(["supply", "quality", "wastewater", "safety"] as const).map((risk) => (
                <div
                  key={risk}
                  className="rounded-card border border-coconut/15 bg-sand/20 p-4 sm:p-5 shadow-xs"
                >
                  <p className="text-[0.625rem] font-bold tracking-widest text-coconut uppercase mb-1.5">
                    {t(`pdca.risks.${risk}.label`)}
                  </p>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {t(`pdca.risks.${risk}.text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Link to Products */}
      <section className="nira-section bg-sand/50">
        <Container className="nira-cta-columns grid gap-8 lg:items-end">
          <div>
            <p className="eyebrow text-coconut">{t("result.eyebrow")}</p>
            <h2 className="type-section-title mt-4 text-forest">
              {t("result.title")}
            </h2>
            <p className="type-lead mt-4 max-w-xl text-ink-muted">
              {t("result.lead")}
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-pill bg-forest px-5 text-center text-sm sm:text-base font-semibold text-cream shadow-xs transition-colors duration-200 hover:bg-forest-hover active:bg-forest-active w-fit"
          >
            <span>{t("result.action")}</span>
            <ArrowUpRight size={18} />
          </Link>
        </Container>
      </section>

      <PartnershipCTA localized />
    </>
  );
}
