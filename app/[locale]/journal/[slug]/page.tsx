import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PartnershipCTA } from "@/components/sections/partnership-cta";
import { getArticleBySlug, getArticles } from "@/lib/supabase/queries";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} · PANDA COCO Journal`,
    alternates: { canonical: `/journal/${slug}` },
    description: article.excerpt,
    keywords: [
      "PANDA COCO",
      article.category.toLowerCase(),
      "circular agro-biomass",
      "biocomposites",
    ],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.thumbnailUrl ? [article.thumbnailUrl] : [],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <article>
        <header
          className="nira-article-hero relative overflow-hidden bg-forest text-cream"
          data-surface="dark"
        >
          <div className="nira-article-hero-mobile-bg pointer-events-none absolute inset-0">
            <Image
              src={article.thumbnailUrl ?? "/images/hero-bg.webp"}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          </div>

          <div
            className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cream/5 blur-3xl"
            aria-hidden="true"
          />

          <Container className="relative z-10">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cream/75 hover:text-cream uppercase transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to all dispatches</span>
            </Link>

            <div className="mt-8 flex items-center gap-3">
              <span className="rounded-full bg-cream/15 px-3 py-1 text-xs font-semibold text-cream uppercase tracking-wider">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-cream/70">
                <Clock size={13} />
                <span>5 min read</span>
              </span>
            </div>

            <h1 className="nira-page-hero-title mt-4 max-w-2xl lg:max-w-3xl font-display font-medium tracking-tight text-cream text-balance">
              {article.title}
            </h1>

            <p className="nira-page-hero-description mt-5 max-w-2xl text-cream/90">
              {article.excerpt}
            </p>
          </Container>
        </header>

        <Container className="nira-article-body">
          {article.thumbnailUrl ? (
            <figure className="mx-auto max-w-4xl">
              <div className="group relative aspect-[3/2] overflow-hidden rounded-card border border-coconut/15 bg-sand/30 shadow-natural">
                <Image
                  src={article.thumbnailUrl}
                  alt={article.thumbnailAlt ?? article.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1000px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  priority
                />
              </div>
              <figcaption className="type-caption mt-3 text-center text-coconut/80 italic">
                Visual documentation for &ldquo;{article.title}&rdquo;.
              </figcaption>
            </figure>
          ) : null}

          <div className="mx-auto mt-8 max-w-2xl space-y-6 text-ink/90 leading-relaxed sm:mt-10 md:space-y-7 xl:mt-16">
            {article.content.split(/\n\s*\n/).map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "type-lead text-forest font-serif italic border-l-2 border-amber-accent pl-5 my-6"
                    : "type-body text-base md:text-lg leading-relaxed text-ink-muted"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl border-t border-coconut/15 pt-6 flex items-center justify-between sm:mt-12 xl:mt-14 xl:pt-8">
            <Link
              href="/journal"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-forest uppercase hover:underline"
            >
              <ArrowLeft size={14} />
              <span>Return to Journal Index</span>
            </Link>
            <span className="text-xs text-coconut italic">
              PANDA COCO Editorial Dispatch
            </span>
          </div>
        </Container>
      </article>

      <PartnershipCTA />
    </>
  );
}
