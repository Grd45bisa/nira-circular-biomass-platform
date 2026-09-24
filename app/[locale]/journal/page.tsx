import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import { ArticleCard } from "@/components/journal/article-card";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { PartnershipCTA } from "@/components/sections/partnership-cta";
import { EmptyState } from "@/components/ui/empty-state";
import { getArticles } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "Journal · Field Notes & Circular Essays",
  alternates: { canonical: "/journal" },
  description:
    "Read NIRA's editorial publications: deep explorations on coconut bio-composites, agroforestry livelihoods, and circular design philosophy.",
  keywords: [
    "NIRA journal",
    "coconut sustainability",
    "circular essays",
    "community craftsmanship",
  ],
  openGraph: {
    title: "NIRA Journal · Stories from Material to Meaning",
    description:
      "Stories, technical field notes, and community perspectives from the coconut belt.",
    images: ["/images/coir-fiber.jpg"],
  },
};

export default async function JournalPage() {
  const articles = await getArticles();
  const featuredArticle = articles[0];
  const restArticles = articles.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Editorial Dispatches"
        title="Notes from a changing material story."
        description="Essays, technical insights, and community perspectives investigating how overlooked natural resources can reshape design, agriculture, and human livelihoods."
        image="/images/coir-fiber.jpg"
        imageAlt="Close up of artisan hands carefully handling and separating long golden-brown coconut coir fibers"
      />

      <section className="nira-section bg-cream">
        <Container>
          {/* Featured Article Card */}
          {featuredArticle ? (
            <div className="mb-16">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-coconut uppercase">
                <span>Featured Dispatch</span>
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
                      <span>5 min read · Editorial</span>
                    </div>

                    <h2 className="font-display mt-3 text-2xl md:text-3xl text-forest font-medium">
                      <Link
                        href={`/journal/${featuredArticle.slug}`}
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
                      href={`/journal/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-forest group-hover:text-forest-hover"
                    >
                      <span>Read Complete Dispatch</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-coconut/15 pt-12">
            <div>
              <p className="eyebrow text-coconut">All Dispatches</p>
              <h2 className="type-section-title mt-2 text-forest text-2xl md:text-3xl">
                Field notes on circularity & craft.
              </h2>
            </div>
            <p className="text-xs text-coconut max-w-sm">
              Documenting the evolution of our regenerative supply chains and
              village workshop insights.
            </p>
          </div>

          {articles.length === 0 ? (
            <div className="mt-12">
              <EmptyState message="Journal articles will be available soon." />
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
