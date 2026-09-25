import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { PartnershipCTA } from "@/components/sections/partnership-cta";
import { EmptyState } from "@/components/ui/empty-state";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Link } from "@/i18n/navigation";
import { getProducts } from "@/lib/supabase/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "productsPage" });
  return {
    title: { absolute: t("metaTitle") },
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "id" ? "/produk" : "/en/products",
      languages: {
        "id-ID": "/produk",
        en: "/en/products",
        "x-default": "/produk",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/images/coir-pot.jpg"],
    },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "productsPage" });
  const products = await getProducts();

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        image="/images/craft-concept.webp"
        imageAlt={t("hero.imageAlt")}
      />

      {/* Quick Jump Bar */}
      <section className="sticky top-18 z-40 border-b border-coconut/15 bg-sand/90 backdrop-blur-md py-3.5">
        <Container className="flex items-center gap-3 sm:gap-4">
          <span className="text-xs font-bold tracking-widest text-coconut uppercase shrink-0">
            {t("quickJump")}
          </span>
          <div className="nira-scrollbar-hide -mr-6 flex items-center gap-2 overflow-x-auto pr-6 sm:gap-3">
            {products.map((p) => {
              const name = t.has(`items.${p.slug}.name` as any)
                ? t(`items.${p.slug}.name` as any)
                : p.name;
              return (
                <a
                  key={p.slug}
                  href={`#${p.slug}`}
                  className="shrink-0 rounded-full border border-coconut/20 bg-cream/70 px-3.5 py-1 text-xs font-medium text-forest hover:bg-forest hover:text-cream transition-colors"
                >
                  {name}
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Editorial Disclaimer / Quality Guarantee */}
      <section className="bg-cream py-8 border-b border-coconut/10">
        <Container>
          <div className="rounded-card border border-coconut/15 bg-sand/30 p-5 md:p-6 text-xs text-ink-muted leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="max-w-3xl">
              <strong className="text-forest font-semibold">
                {t("standards.title")}
              </strong>{" "}
              {t("standards.text")}
            </p>
            <span className="shrink-0 rounded-full bg-forest/10 px-3 py-1 font-semibold text-forest">
              {t("standards.badge")}
            </span>
          </div>
        </Container>
      </section>

      {products.length === 0 ? (
        <section className="nira-section bg-cream">
          <Container>
            <EmptyState message={t("empty")} />
          </Container>
        </section>
      ) : (
        products.map((product, index) => {
          const name = t.has(`items.${product.slug}.name` as any)
            ? t(`items.${product.slug}.name` as any)
            : product.name;
          const description = t.has(`items.${product.slug}.description` as any)
            ? t(`items.${product.slug}.description` as any)
            : product.description;
          const materialSource = t.has(`items.${product.slug}.materialSource` as any)
            ? t(`items.${product.slug}.materialSource` as any)
            : product.materialSource;
          const process = t.has(`items.${product.slug}.process` as any)
            ? t(`items.${product.slug}.process` as any)
            : product.process;
          const sustainabilityValue = t.has(`items.${product.slug}.sustainabilityValue` as any)
            ? t(`items.${product.slug}.sustainabilityValue` as any)
            : product.sustainabilityValue;
          const imageAlt = (t.has(`items.${product.slug}.imageAlt` as any)
            ? t(`items.${product.slug}.imageAlt` as any)
            : product.imageAlt) ?? name;
          const imageNote = t.has(`items.${product.slug}.imageNote` as any)
            ? t(`items.${product.slug}.imageNote` as any)
            : product.imageNote;

          return (
            <section
              id={product.slug}
              key={product.slug}
              className={
                index % 2 === 0
                  ? "nira-section scroll-mt-28 bg-sand/40"
                  : "nira-section scroll-mt-28 bg-cream"
              }
            >
              <Container className="nira-product-detail-grid grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-16">
                <figure
                  className={`w-full ${
                    index % 2 === 1 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="group relative aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] overflow-hidden rounded-card border border-coconut/15 bg-sand/30 shadow-natural">
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={imageAlt}
                        fill
                        sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, (max-width: 640px) 100vw, 512px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      />
                    ) : null}
                    <span className="absolute top-3 left-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-forest uppercase tracking-wider backdrop-blur-xs">
                      {product.category}
                    </span>
                  </div>
                  {imageNote ? (
                    <figcaption className="type-caption mt-2.5 text-coconut/80 italic text-xs sm:text-sm">
                      {imageNote}
                    </figcaption>
                  ) : null}
                </figure>

                <div
                  className={`flex flex-col justify-center ${
                    index % 2 === 1 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <EyebrowBadge tone="light" className="mb-4 bg-sand/50">
                    {t("derivedFrom", {
                      index: index + 1,
                      source: materialSource,
                    })}
                  </EyebrowBadge>

                  <h2 className="type-section-title mt-2 text-forest text-balance">
                    {name}
                  </h2>

                  <p className="type-lead mt-4 text-ink-muted leading-relaxed">
                    {description}
                  </p>

                  <dl className="mt-8 divide-y divide-coconut/15 border-y border-coconut/15">
                    <div className="grid gap-1.5 py-3.5 sm:grid-cols-[10rem_1fr] md:grid-cols-1 lg:grid-cols-[10.5rem_1fr] text-sm">
                      <dt className="font-semibold text-forest">
                        {t("materialSource")}
                      </dt>
                      <dd className="text-ink-muted">{materialSource}</dd>
                    </div>
                    <div className="grid gap-1.5 py-3.5 sm:grid-cols-[10rem_1fr] md:grid-cols-1 lg:grid-cols-[10.5rem_1fr] text-sm">
                      <dt className="font-semibold text-forest">
                        {t("refiningProcess")}
                      </dt>
                      <dd className="text-ink-muted">{process}</dd>
                    </div>
                    <div className="grid gap-1.5 py-3.5 sm:grid-cols-[10rem_1fr] md:grid-cols-1 lg:grid-cols-[10.5rem_1fr] text-sm">
                      <dt className="font-semibold text-forest">
                        {t("sustainabilityValue")}
                      </dt>
                      <dd className="text-forest font-medium flex items-start gap-1.5">
                        <CheckCircle2
                          size={16}
                          className="text-forest mt-0.5 shrink-0"
                        />
                        <span>{sustainabilityValue}</span>
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/partnership?inquiry=${product.slug}` as any}
                      className="group inline-flex items-center gap-2 rounded-pill bg-forest px-5 py-2.5 text-xs font-semibold text-cream hover:bg-forest-hover transition-colors shadow-xs"
                    >
                      <span>{t("ctaSample")}</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                    <Link
                      href="/transformation"
                      className="text-xs font-medium text-forest hover:underline"
                    >
                      {t("viewLifecycle")}
                    </Link>
                  </div>
                </div>
              </Container>
            </section>
          );
        })
      )}

      <PartnershipCTA localized />
    </>
  );
}
