import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { PartnershipCTA } from "@/components/sections/partnership-cta";
import { EmptyState } from "@/components/ui/empty-state";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { getProducts } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "Products · Regenerative Biomass Families",
  alternates: { canonical: "/products" },
  description:
    "Explore NIRA Living (coir pots), NIRA Grow (cocopeat medium), NIRA Energy (bio-briquettes), and NIRA Craft (heirloom homeware). 100% natural, plastic-free coconut materials.",
  keywords: [
    "coconut products",
    "cocopeat",
    "coir fiber pots",
    "coconut charcoal briquettes",
    "circular homeware",
  ],
  openGraph: {
    title: "NIRA Products · Value Beyond Waste",
    description:
      "Four circular material paths, four regenerative product directions.",
    images: ["/images/coir-pot.jpg"],
  },
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero
        eyebrow="Regenerative Product Families"
        title="Made from what nature leaves us."
        description="NIRA Living, Grow, Energy, and Craft represent four deliberate ways to reveal deep functional value beyond the first culinary use of a coconut."
        image="/images/craft-concept.webp"
        imageAlt="Artisan handcrafted coconut shell bowls and spoon on natural linen"
      />

      {/* Quick Jump Bar */}
      <section className="sticky top-18 z-40 border-b border-coconut/15 bg-sand/90 backdrop-blur-md py-3.5">
        <Container className="flex items-center gap-3 sm:gap-4">
          <span className="text-xs font-bold tracking-widest text-coconut uppercase shrink-0">
            Product Lines:
          </span>
          <div className="nira-scrollbar-hide -mr-6 flex items-center gap-2 overflow-x-auto pr-6 sm:gap-3">
            {products.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="shrink-0 rounded-full border border-coconut/20 bg-cream/70 px-3.5 py-1 text-xs font-medium text-forest hover:bg-forest hover:text-cream transition-colors"
              >
                {p.name}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Editorial Disclaimer / Quality Guarantee */}
      <section className="bg-cream py-8 border-b border-coconut/10">
        <Container>
          <div className="rounded-card border border-coconut/15 bg-sand/30 p-5 md:p-6 text-xs text-ink-muted leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="max-w-3xl">
              <strong className="text-forest font-semibold">
                Regenerative Standards:
              </strong>{" "}
              Every NIRA product family is engineered without petroleum-based
              polymers, synthetic adhesives, or synthetic colorants. Sourced
              directly through verified agricultural cooperatives.
            </p>
            <span className="shrink-0 rounded-full bg-forest/10 px-3 py-1 font-semibold text-forest">
              100% Bio-Circular
            </span>
          </div>
        </Container>
      </section>

      {products.length === 0 ? (
        <section className="nira-section bg-cream">
          <Container>
            <EmptyState message="Product information will be available soon." />
          </Container>
        </section>
      ) : (
        products.map((product, index) => (
          <section
            id={product.slug}
            key={product.slug}
            className={
              index % 2 === 0
                ? "nira-section scroll-mt-28 bg-sand/40"
                : "nira-section scroll-mt-28 bg-cream"
            }
          >
            <Container className="nira-two-column nira-product-detail-grid grid items-center gap-6 sm:gap-8">
              <figure
                className={index % 2 === 1 ? "nira-reverse-image" : undefined}
              >
                <div className="group relative aspect-[4/3] overflow-hidden rounded-card border border-coconut/15 bg-sand/30 shadow-natural">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt ?? product.name}
                      fill
                      sizes="(min-width: 1366px) 45vw, (min-width: 1024px) and (orientation: landscape) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                  ) : null}
                  <span className="absolute top-3 left-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-forest uppercase tracking-wider backdrop-blur-xs">
                    {product.category}
                  </span>
                </div>
                {product.imageNote ? (
                  <figcaption className="type-caption mt-3 text-coconut/80 italic">
                    {product.imageNote}
                  </figcaption>
                ) : null}
              </figure>

              <div
                className={index % 2 === 1 ? "nira-reverse-copy" : undefined}
              >
                <EyebrowBadge tone="light" className="mb-4 bg-sand/50">
                  0{index + 1} · Derived from {product.materialSource}
                </EyebrowBadge>

                <h2 className="type-section-title mt-2 text-forest">
                  {product.name}
                </h2>

                <p className="type-lead mt-4 text-ink-muted leading-relaxed">
                  {product.description}
                </p>

                <dl className="mt-8 divide-y divide-coconut/15 border-y border-coconut/15">
                  <div className="grid gap-2 py-4 sm:grid-cols-[11rem_1fr] text-sm">
                    <dt className="font-semibold text-forest">
                      Material Source
                    </dt>
                    <dd className="text-ink-muted">{product.materialSource}</dd>
                  </div>
                  <div className="grid gap-2 py-4 sm:grid-cols-[11rem_1fr] text-sm">
                    <dt className="font-semibold text-forest">
                      Refining Process
                    </dt>
                    <dd className="text-ink-muted">{product.process}</dd>
                  </div>
                  <div className="grid gap-2 py-4 sm:grid-cols-[11rem_1fr] text-sm">
                    <dt className="font-semibold text-forest">
                      Sustainability Value
                    </dt>
                    <dd className="text-forest font-medium flex items-start gap-1.5">
                      <CheckCircle2
                        size={16}
                        className="text-forest mt-0.5 shrink-0"
                      />
                      <span>{product.sustainabilityValue}</span>
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href={`/partnership?inquiry=${product.slug}`}
                    className="group inline-flex items-center gap-2 rounded-pill bg-forest px-5 py-2.5 text-xs font-semibold text-cream hover:bg-forest-hover transition-colors shadow-xs"
                  >
                    <span>Request Specifications / Samples</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                  <Link
                    href="/transformation"
                    className="text-xs font-medium text-forest hover:underline"
                  >
                    View process lifecycle →
                  </Link>
                </div>
              </div>
            </Container>
          </section>
        ))
      )}

      <PartnershipCTA />
    </>
  );
}
