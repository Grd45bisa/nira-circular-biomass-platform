import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import {getTranslations} from 'next-intl/server';

import { ImpactCard } from "@/components/impact/impact-card";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/products/product-card";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsCounterBar } from "@/components/sections/stats-counter-bar";
import { JourneySection } from "@/components/sections/journey-steps";
import { MaterialExplorer } from "@/components/sections/material-explorer";
import { PartnershipCTA } from "@/components/sections/partnership-cta";
import { StorySection } from "@/components/sections/story-section";
import { ButtonLink } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import {Link} from '@/i18n/navigation';
import {
  getCommunityStories,
  getImpactMetrics,
  getProducts,
} from "@/lib/supabase/queries";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'home'});
  return {
    title: {absolute: t('metaTitle')},
    description: t('metaDescription'),
    alternates: {canonical: locale === 'id' ? '/' : '/en', languages: {'id-ID': '/', en: '/en', 'x-default': '/'}},
    openGraph: {title: t('metaTitle'), description: t('metaDescription'), images: ['/images/nira-still-life.webp']}
  };
}

export default async function HomePage() {
  const t = await getTranslations('home');
  const common = await getTranslations('common');
  const [products, communityStories, impactMetrics] = await Promise.all([
    getProducts(),
    getCommunityStories(),
    getImpactMetrics(),
  ]);

  return (
    <>
      <HeroSection
        eyebrow={t('hero.eyebrow')}
        tagline={t('hero.tagline')}
        title={
          <>
            {t('hero.titleFirst')} <br className="hidden sm:inline" />
            <span className="nira-main-hero-emphasis font-serif italic font-normal text-coconut">
              {t('hero.titleSecond')}
            </span>
          </>
        }
        subtitleCallout={t('hero.callout')}
        description={t('hero.description')}
        actions={
          <>
            <ButtonLink
              href="/transformation"
              className="nira-main-hero-action min-h-10 shrink-0 inline-flex items-center gap-1.5 rounded-pill bg-forest px-4 py-2 text-xs font-semibold text-cream shadow-md hover:bg-forest-light sm:min-h-11 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm lg:min-h-12 lg:px-6 lg:py-3 lg:text-base"
            >
              <span className="nira-main-hero-action-short">{t('hero.actionShort')}</span>
              <span className="nira-main-hero-action-long">
                {t('hero.actionLong')}
              </span>
              <ArrowUpRight size={15} className="shrink-0" />
            </ButtonLink>
            <Link
              href="/about"
              className="nira-main-hero-secondary shrink-0 whitespace-nowrap text-xs font-semibold tracking-wide text-forest underline decoration-coconut/50 underline-offset-8 transition-colors hover:text-forest-light hover:decoration-forest sm:text-sm"
            >
              {t('hero.about')}
            </Link>
          </>
        }
        highlights={
          <div className="nira-main-hero-note flex max-w-xl items-start gap-2.5 text-xs leading-relaxed text-ink-muted">
            <span className="nira-main-hero-note-icon flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-forest/20 bg-forest/10 text-[0.6875rem] font-bold text-forest">
              ✓
            </span>
            <p>
              <strong className="nira-main-hero-note-strong font-semibold text-forest">
                {t('hero.noteStrong')}
              </strong>{" "}
              {t('hero.note')}
            </p>
          </div>
        }
        media={
          <div className="group relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] overflow-hidden rounded-card border border-coconut/20 bg-sand/40 shadow-elevated">
            <Image
              src="/images/nira-still-life.webp"
              alt={t('hero.imageAlt')}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute right-3.5 bottom-3.5 left-3.5 sm:right-4 sm:bottom-4 sm:left-4 flex items-center justify-between">
              <span className="rounded-full bg-cream/95 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.6875rem] sm:text-xs font-semibold tracking-wide text-forest uppercase backdrop-blur-xs shadow-xs">
                {t('hero.imageBadge')}
              </span>
              <span className="text-[0.625rem] sm:text-[0.6875rem] font-medium text-cream/90 tracking-wider">
                {t('hero.imageParts')}
              </span>
            </div>
          </div>
        }
        mobileEyebrow={t('hero.eyebrowMobile')}
        mobileDescription={t('hero.descriptionMobile')}
        mobileActionLabel={t('hero.actionShort')}
        mobileAboutLabel={t('hero.aboutShort')}
        mobileStats={[
          { value: t('hero.stat1Value'), label: t('hero.stat1Label') },
          { value: t('hero.stat2Value'), label: t('hero.stat2Label') },
          { value: t('hero.stat3Value'), label: t('hero.stat3Label') },
        ]}
        mobilePillars={t('hero.bottomPillars')}
      />

      {/* Capacity & Key Impact Counter Bar */}
      <StatsCounterBar />

      {/* Section 01: Story */}
      <StorySection
        eyebrow={t('story.eyebrow')}
        title={t('story.title')}
        paragraphs={[t('story.p1'), t('story.p2')]}
        image="/images/coconut-husks.jpg"
        imageAlt={t('story.imageAlt')}
        imageNote={t('story.imageNote')}
        link={{ href: '/about', label: t('story.link') }}
      />

      {/* Section 02: One Coconut, Endless Possibilities */}
      <section className="nira-section bg-sand/50" id="possibilities">
        <Container>
          <div className="nira-community-columns grid gap-6 lg:items-end">
            <div>
              <p className="eyebrow text-coconut">
                {t('materialsIntro.eyebrow')}
              </p>
              <h2 className="type-section-title mt-4 max-w-xl text-forest text-balance">
                {t('materialsIntro.title')}
              </h2>
            </div>
            <p className="type-lead max-w-xl text-ink-muted">
              {t('materialsIntro.description')}
            </p>
          </div>

          <MaterialExplorer />
        </Container>
      </section>

      {/* Section 03: Four-Step Journey */}
      <JourneySection />

      {/* Section 04: Product Showcase */}
      <section className="nira-section bg-cream" id="products">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-coconut">{t('products.eyebrow')}</p>
              <h2 className="type-section-title mt-4 max-w-xl text-forest text-balance">
                {t('products.title')}
              </h2>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-hover"
            >
              <span className="border-b border-forest/30 pb-0.5 group-hover:border-forest">
                {t('products.explore')}
              </span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {products.length === 0 ? (
            <div className="mt-12">
              <EmptyState message={t('products.empty')} />
            </div>
          ) : (
            <div className="mt-8 md:mt-10">
              {products.length > 1 && (
                <p className="nira-products-hint mb-3 flex items-center gap-2 text-xs font-semibold tracking-wide text-coconut">
                  {t('products.swipe')} <span aria-hidden="true">→</span>
                </p>
              )}
              <div
                className="nira-products-track"
                role="region"
                aria-roledescription="carousel"
                aria-label={t('products.carousel')}
              >
                {products.map((product) => (
                  <ProductCard
                    key={product.slug}
                    href={`/products#${product.slug}`}
                    family={product.category}
                    name={product.name}
                    imageSrc={product.imageUrl}
                    imageAlt={product.imageAlt ?? product.name}
                    materialSource={product.materialSource}
                    description={product.description}
                    sustainabilityValue={product.sustainabilityValue}
                  />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Section 05: Impact */}
      <section className="nira-section bg-sand/40" id="impact">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-coconut">{t('impact.eyebrow')}</p>
              <h2 className="type-section-title mt-4 max-w-xl text-forest text-balance">
                {t('impact.title')}
              </h2>
            </div>
            <Link
              href="/impact"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-hover"
            >
              <span className="border-b border-forest/30 pb-0.5 group-hover:border-forest">
                {t('impact.link')}
              </span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <p className="type-lead mt-5 max-w-2xl text-ink-muted">
            {t('impact.description')}
          </p>

          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6">
            {impactMetrics.map((metric, index) => (
              <ImpactCard
                key={metric.id}
                className={index === 2 ? "col-span-2 md:col-span-1" : undefined}
                kind={metric.value !== null ? "metric" : "narrative"}
                label={metric.metricName}
                value={metric.value !== null ? String(metric.value) : ""}
                unit={metric.unit ?? ""}
                period={metric.year ? `${common('year')} ${metric.year}` : undefined}
                source={t('impact.source')}
                description={metric.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Section 06: Community / People at the Center */}
      <section className="nira-section bg-cream" id="community">
        <Container>
          <div className="nira-community-grid grid gap-6 sm:gap-8">
            <div className="nira-community-media">
              <div className="nira-community-photo group relative overflow-hidden rounded-card border border-coconut/15 bg-sand/30 shadow-natural">
                <Image
                  src={
                    communityStories[0]?.imageUrl ||
                    "/images/community-artisan.jpg"
                  }
                  alt={t('community.imageAlt')}
                  fill
                  sizes="(min-width: 1366px) 42vw, (min-width: 1024px) and (orientation: landscape) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                />
              </div>
              <p className="type-caption mt-2 text-coconut/80 italic">
                {t('community.caption')}
              </p>
            </div>

            <div className="nira-community-copy">
              <p className="eyebrow text-coconut">{t('community.eyebrow')}</p>
              <h2 className="type-section-title mt-2 text-forest sm:mt-3 text-balance">
                {t('community.title')}
              </h2>

              <div className="mt-4 rounded-card border-l-4 border-coconut bg-sand/30 p-4 sm:mt-5 sm:p-5 xl:mt-6 xl:p-8">
                <p className="font-display text-base leading-[1.55] text-forest italic sm:text-lg xl:text-2xl">
                  &ldquo;
                  {t('community.quote')}
                  &rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-coconut/15 pt-3">
                  <div>
                    <p className="text-sm font-semibold text-forest sm:text-base">
                      {communityStories[0]?.name || "Ibu Siti Rohmah"}
                    </p>
                    <p className="text-xs text-coconut">
                      {t('community.role')}{" "}
                      ·{" "}
                      {t('community.location')}
                    </p>
                  </div>
                  <span className="hidden shrink-0 rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest sm:inline-flex">
                    {t('community.collective')}
                  </span>
                </div>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base xl:mt-6">
                {t('community.description')}
              </p>

              <div className="mt-5 sm:mt-6 xl:mt-8">
                <Link
                  href={{
                    pathname: "/journal/[slug]",
                    params: { slug: "hands-in-the-journey" },
                  }}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-hover"
                >
                  <span className="border-b border-forest/30 pb-0.5 group-hover:border-forest">
                    {t('community.link')}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 07: Partnership */}
      <PartnershipCTA localized />
    </>
  );
}
