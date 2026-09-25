import type { Metadata } from "next";
import { ArrowDown, Handshake, Network, Sprout } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/layout/container";
import { InquiryBuilder } from "@/components/partnership/inquiry-builder";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partnershipPage" });
  return {
    title: { absolute: t("metaTitle") },
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "id" ? "/kemitraan" : "/en/partnership",
      languages: {
        "id-ID": "/kemitraan",
        en: "/en/partnership",
        "x-default": "/kemitraan",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/images/nira-still-life.webp"],
    },
  };
}

export default async function PartnershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partnershipPage" });

  const tracks = [
    {
      icon: Sprout,
      title: t("tracks.sourcing.title"),
      badge: t("tracks.sourcing.badge"),
      text: t("tracks.sourcing.text"),
    },
    {
      icon: Handshake,
      title: t("tracks.codev.title"),
      badge: t("tracks.codev.badge"),
      text: t("tracks.codev.text"),
    },
    {
      icon: Network,
      title: t("tracks.community.title"),
      badge: t("tracks.community.badge"),
      text: t("tracks.community.text"),
    },
  ];

  const steps = [
    {
      number: "01",
      title: t("process.steps.one.title"),
      text: t("process.steps.one.text"),
    },
    {
      number: "02",
      title: t("process.steps.two.title"),
      text: t("process.steps.two.text"),
    },
    {
      number: "03",
      title: t("process.steps.three.title"),
      text: t("process.steps.three.text"),
    },
    {
      number: "04",
      title: t("process.steps.four.title"),
      text: t("process.steps.four.text"),
    },
  ];

  const bullets = [
    {
      title: t("inquiry.bullets.email.title"),
      text: t("inquiry.bullets.email.text"),
    },
    {
      title: t("inquiry.bullets.brief.title"),
      text: t("inquiry.bullets.brief.text"),
    },
    {
      title: t("inquiry.bullets.privacy.title"),
      text: t("inquiry.bullets.privacy.text"),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      >
        <ButtonLink
          href="#inquiry"
          className="bg-cream text-forest hover:bg-sand transition-all shadow-sm inline-flex items-center gap-2"
        >
          <span>{t("hero.cta")}</span>
          <ArrowDown size={16} />
        </ButtonLink>
      </PageHero>

      {/* Collaboration Tracks */}
      <section className="nira-section bg-cream">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow text-coconut">{t("tracks.eyebrow")}</p>
            <h2 className="type-section-title mt-3 text-forest">
              {t("tracks.title")}
            </h2>
            <p className="type-lead mt-3 text-ink-muted">
              {t("tracks.lead")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tracks.map((item, index) => {
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

                    <h3 className="font-display mt-5 text-lg sm:text-xl text-forest font-medium leading-snug">
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
              {t("process.eyebrow")}
            </EyebrowBadge>
            <h2 className="type-section-title text-cream">
              {t("process.title")}
            </h2>
            <p className="type-lead mt-4 text-cream/80 leading-relaxed">
              {t("process.lead")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-card border border-cream/15 bg-forest-light/60 p-6 md:p-8 backdrop-blur-xs transition-colors hover:bg-forest-light"
              >
                <span className="font-display text-3xl font-light text-amber-accent">
                  {step.number}
                </span>
                <h3 className="font-display mt-3 text-base sm:text-lg text-cream font-medium leading-snug">
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

      {/* FAQ B2B */}
      <section className="nira-section bg-sand/40">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow text-coconut">{t("faq.eyebrow")}</p>
            <h2 className="type-section-title mt-3 text-forest">{t("faq.title")}</h2>
            <p className="type-lead mt-3 text-ink-muted">{t("faq.lead")}</p>
          </div>

          <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
            {(t.raw("faq.items") as Array<{ q: string; a: string }>).map((item, index) => (
              <details
                key={index}
                className="group rounded-card border border-coconut/15 bg-cream/80 shadow-xs open:shadow-sm transition-all duration-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 select-none">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest/10 text-[0.6875rem] font-bold text-forest">
                      {index + 1}
                    </span>
                    <span className="font-display text-sm sm:text-base font-medium text-forest leading-snug">
                      {item.q}
                    </span>
                  </div>
                  <span className="ml-auto shrink-0 text-coconut transition-transform duration-200 group-open:rotate-45 text-xl font-light">
                    +
                  </span>
                </summary>
                <div className="border-t border-coconut/10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <p className="text-sm text-ink-muted leading-relaxed pl-9">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Inquiry Builder Section */}
      <section id="inquiry" className="nira-section scroll-mt-20 bg-sand/40">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <EyebrowBadge tone="light" className="mb-4 bg-cream/70">
              {t("inquiry.eyebrow")}
            </EyebrowBadge>

            <h2 className="type-section-title text-forest">
              {t("inquiry.title")}
            </h2>

            <p className="type-lead text-ink-muted mt-5 leading-relaxed">
              {t("inquiry.lead")}
            </p>

            <div className="mt-8 rounded-card border border-coconut/15 bg-cream/80 p-6 space-y-4 text-xs text-ink-muted">
              {bullets.map((bullet) => (
                <div
                  key={bullet.title}
                  className="flex items-start gap-2.5"
                >
                  <span className="font-bold text-forest mt-0.5">✦</span>
                  <p>
                    <strong className="text-forest font-semibold">
                      {bullet.title}
                    </strong>{" "}
                    {bullet.text}
                  </p>
                </div>
              ))}
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