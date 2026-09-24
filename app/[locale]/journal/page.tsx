import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { ArticleCard } from "@/components/journal/article-card";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { PartnershipCTA } from "@/components/sections/partnership-cta";
import { EmptyState } from "@/components/ui/empty-state";
import { Link } from "@/i18n/navigation";
import { getArticles } from "@/lib/supabase/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "journalPage" });
  return {
    title: { absolute: t("metaTitle") },
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "id" ? "/jurnal" : "/en/journal",
      languages: {
        "id-ID": "/jurnal",
        en: "/en/journal",
        "x-default": "/jurnal",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/images/coir-fiber.jpg"],
    },
  };
}

export default async function JournalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "journalPage" });
  const articles = await getArticles();
  const featuredArticle = articles[0];
  const restArticles = articles.slice(1);

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        image="/images/coir-fiber.jpg"
        imageAlt={t("hero.imageAlt")}
      />

      <section className="nira-section bg-cream">
        <Container>
          {/* Featured Article Card */}
          {featuredArticle ? (
            <div className="mb-16">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-coconut uppercase">
                <span>{t("featuredLabel")}</span>
              </div>
              <div className="group grid gap-8 overflow-hidden rounded-card border border-coconut/15 bg-sand/30 shadow-natural transition-all duration-300 hover:shadow-elevated lg:grid-cols-12 lg:items-center">
                <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7">
                  {featuredArticle.thumbnailUrl ? (
                    <Image
                      src={featuredArticle.thumbnailUrl}
                      alt={
                        featuredArticle.thumbnailAlt ?? featuredArticle.title
                      }
                      fill
                      sizes="(max-width: 1023px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      priority
                    />
                  ) : null}
                  <span className="absolute top-4 left-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-forest uppercase tracking-wider backdrop-blur-xs">
                    {featuredArticle.category}
                  </span>
                </div>

                <div className="flex flex-col justify-between p-6 md:p-10 lg:col-span-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-coconut">
                      <Clock size={13} />
                      <span>{t("readTime")}</span>
                    </div>

                    <h2 className="font-display mt-3 text-2xl md:text-3xl text-forest font-medium">
                      <Link
                        href={{
                          pathname: "/journal/[slug]",
                          params: { slug: featuredArticle.slug },
                        }}
                        className="hover:underline"
                      >
                        {featuredArticle.title}
                      </Link>
                    </h2>

                    <p className="type-body text-ink-muted mt-4 text-sm md:text-base leading-relaxed line-clamp-4">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-coconut/15">
                    <Link
                      href={{
                        pathname: "/journal/[slug]",
                        params: { slug: featuredArticle.slug },
                      }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-forest group-hover:text-forest-hover"
                    >
                      <span>{t("readMore")}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-coconut/15 pt-12">
            <div>
              <p className="eyebrow text-coconut">{t("allDispatches")}</p>
              <h2 className="type-section-title mt-2 text-forest text-2xl md:text-3xl">
                {t("allTitle")}
              </h2>
            </div>
            <p className="text-xs text-coconut max-w-sm">
              {t("allDescription")}
            </p>
          </div>

          {articles.length === 0 ? (
            <div className="mt-12">
              <EmptyState message={t("empty")} />
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {restArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  href={`/journal/${article.slug}`}
                  imageSrc={article.thumbnailUrl}
                  imageAlt={article.thumbnailAlt ?? article.title}
                  category={article.category}
                  title={article.title}
                  excerpt={article.excerpt}
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      <PartnershipCTA />
    </>
  );
}