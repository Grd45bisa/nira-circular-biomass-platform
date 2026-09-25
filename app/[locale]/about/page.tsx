import type { Metadata } from "next";
import { Compass, HeartHandshake, Leaf, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { PartnershipCTA } from "@/components/sections/partnership-cta";
import { StorySection } from "@/components/sections/story-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: { absolute: t("metaTitle") },
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "id" ? "/tentang" : "/en/about",
      languages: {
        "id-ID": "/tentang",
        en: "/en/about",
        "x-default": "/tentang",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: ["/images/nira-still-life.webp"],
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  const coreValues = [
    {
      icon: Leaf,
      number: "01",
      name: t("values.v1.name"),
      text: t("values.v1.text"),
    },
    {
      icon: Compass,
      number: "02",
      name: t("values.v2.name"),
      text: t("values.v2.text"),
    },
    {
      icon: HeartHandshake,
      number: "03",
      name: t("values.v3.name"),
      text: t("values.v3.text"),
    },
    {
      icon: ShieldCheck,
      number: "04",
      name: t("values.v4.name"),
      text: t("values.v4.text"),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        image="/images/nira-still-life.webp"
        imageAlt={t("hero.imageAlt")}
      />

      <StorySection
        eyebrow={t("philosophy.eyebrow")}
        title={t("philosophy.title")}
        paragraphs={[t("philosophy.p1"), t("philosophy.p2")]}
        image="/images/coir-fiber.jpg"
        imageAlt={t("philosophy.imageAlt")}
        imageNote={t("philosophy.imageNote")}
        link={{
          href: "/transformation",
          label: t("philosophy.link"),
        }}
      />

      {/* Vision & Mission */}
      <section className="nira-section bg-sand/50">
        <Container className="nira-two-column nira-about-vision-grid grid gap-8">
          <div className="rounded-card border border-coconut/15 bg-cream/90 p-8 md:p-10 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-forest" />
              <p className="eyebrow text-coconut">{t("vision.eyebrow")}</p>
            </div>
            <h3 className="font-display mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-forest leading-snug">
              {t("vision.title")}
            </h3>
            <p className="type-body text-ink-muted mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed">
              {t("vision.description")}
            </p>
          </div>

          <div className="rounded-card border border-coconut/15 bg-cream/90 p-6 sm:p-8 md:p-10 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-forest" />
              <p className="eyebrow text-coconut">{t("mission.eyebrow")}</p>
            </div>
            <h3 className="font-display mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-forest leading-snug">
              {t("mission.title")}
            </h3>
            <p className="type-body text-ink-muted mt-5 leading-relaxed">
              {t("mission.description")}
            </p>
          </div>
        </Container>
      </section>

      {/* Four Core Values */}
      <section className="nira-section bg-cream">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow text-coconut">{t("values.eyebrow")}</p>
            <h2 className="type-section-title mt-3 text-forest">
              {t("values.title")}
            </h2>
            <p className="type-lead mt-3 text-ink-muted">
              {t("values.lead")}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.number}
                  className="group flex flex-col justify-between rounded-card border border-coconut/15 bg-sand/30 p-4 sm:p-5 lg:p-7 shadow-xs transition-all duration-300 hover:border-coconut/35 hover:bg-sand/60 hover:-translate-y-0.5 hover:shadow-elevated"
                >
                  <div className="flex items-start gap-3.5 sm:block">
                    {/* Icon & Number Header */}
                    <div className="flex items-center justify-between sm:w-full">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream shrink-0 shadow-2xs sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                        <Icon className="h-4.5 w-4.5 lg:h-5 lg:w-5" />
                      </div>
                      <span className="hidden font-display text-xl font-light text-coconut/50 sm:inline-block lg:text-2xl">
                        {value.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2 sm:block sm:mt-4 lg:mt-6">
                        <h3 className="font-display text-base font-medium text-forest leading-snug sm:text-lg lg:text-xl">
                          {value.name}
                        </h3>
                        <span className="font-display text-base font-light text-coconut/50 sm:hidden">
                          {value.number}
                        </span>
                      </div>

                      <p className="type-body text-ink-muted mt-1.5 text-xs leading-relaxed sm:mt-2.5 sm:text-sm lg:mt-3">
                        {value.text}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:block mt-4 border-t border-coconut/10 pt-2.5 lg:mt-6 lg:pt-3">
                    <span className="text-[0.625rem] font-bold tracking-wider text-forest/80 uppercase lg:text-[0.6875rem]">
                      {t("values.badge")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Roadmap 2026–2030 */}
      <section className="nira-section bg-forest text-cream relative overflow-hidden" data-surface="dark">
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-amber-accent">{t("roadmap.eyebrow")}</p>
            <h2 className="type-section-title mt-3 text-cream">{t("roadmap.title")}</h2>
            <p className="type-lead mt-3 text-cream/75 leading-relaxed">{t("roadmap.lead")}</p>
          </div>

          <div className="mt-10 sm:mt-12 space-y-4">
            {(["one", "two", "three", "four", "five"] as const).map((key, index) => {
              const phase = t.raw(`roadmap.phases.${key}`) as { year: string; label: string; items: string[] };
              return (
                <div
                  key={key}
                  className="group grid grid-cols-[4rem_1fr] sm:grid-cols-[5rem_1fr] gap-4 sm:gap-6 rounded-card border border-cream/10 bg-forest-light/40 p-5 sm:p-6 backdrop-blur-xs transition-all duration-300 hover:border-cream/25 hover:bg-forest-light"
                >
                  {/* Year badge */}
                  <div className="flex flex-col items-center gap-1 pt-0.5">
                    <span className="font-display text-2xl sm:text-3xl font-semibold text-amber-accent leading-none">
                      {phase.year}
                    </span>
                    <span className="text-[0.5625rem] font-bold tracking-widest text-amber-accent/60 uppercase">
                      F.{index + 1}
                    </span>
                    {index < 4 && (
                      <div className="mt-2 w-px flex-1 border-l border-dashed border-cream/15" />
                    )}
                  </div>

                  {/* Phase content */}
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-medium text-cream leading-snug">
                      {phase.label}
                    </h3>
                    <ul className="mt-3 space-y-1.5">
                      {phase.items.map((item: string) => (
                        <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-cream/70 leading-relaxed">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-accent/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <PartnershipCTA localized />
    </>
  );
}
