import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Layers, Sparkles, Scale } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/layout/container";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Link } from "@/i18n/navigation";

type ProcessedItem = {
  key: "cocopeatBlock" | "cocofiberBale" | "cocochip" | "greenPanel" | "bioBriket";
  image: string;
  badgeCode: string;
  yieldRatio: string;
  productHref: string;
};

const PROCESSED_ITEMS: ProcessedItem[] = [
  {
    key: "cocopeatBlock",
    image: "/images/products/hasil-cocopeat-block.jpg",
    badgeCode: "01 / COCOPEAT BLOCK",
    yieldRatio: "1.000–1.200 kg / bln",
    productHref: "/products#grow",
  },
  {
    key: "cocofiberBale",
    image: "/images/coir-fiber.jpg",
    badgeCode: "02 / COCOFIBER BAL",
    yieldRatio: "~600 kg / bln",
    productHref: "/products#living",
  },
  {
    key: "cocochip",
    image: "/images/machines/mesin-cocochip.webp",
    badgeCode: "03 / COCOCHIP",
    yieldRatio: "Partisi Ukuran 1,5–2 cm",
    productHref: "/products#grow",
  },
  {
    key: "greenPanel",
    image: "/images/craft-concept.webp",
    badgeCode: "04 / GREEN PANEL",
    yieldRatio: "Biokomposit Arsitektur",
    productHref: "/products#craft",
  },
  {
    key: "bioBriket",
    image: "/images/energy-concept.webp",
    badgeCode: "05 / BIO-BRIKET",
    yieldRatio: "~900 kg Batok / bln",
    productHref: "/products#energy",
  },
];

export async function ProcessedOutputsSection({
  className = "",
  id = "processed-outputs",
}: {
  className?: string;
  id?: string;
}) {
  const t = await getTranslations("processedOutputs");

  return (
    <section className={`nira-section bg-cream py-16 sm:py-20 lg:py-24 ${className}`} id={id}>
      <Container>
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-6 border-b border-coconut/15">
          <div className="max-w-2xl">
            <EyebrowBadge className="mb-3.5 flex items-center gap-1.5 w-fit">
              <Layers size={13} className="text-amber-accent" />
              <span>{t("eyebrow")}</span>
            </EyebrowBadge>
            <h2 className="type-section-title text-forest text-balance">
              {t("title")}
            </h2>
            <p className="type-lead mt-3.5 text-ink-muted leading-relaxed">
              {t("lead")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-xs sm:text-sm font-semibold text-cream hover:bg-forest-light transition-all shadow-xs"
            >
              <span>{t("exploreProducts")}</span>
              <ArrowUpRight size={14} className="text-amber-accent" />
            </Link>
          </div>
        </div>

        {/* Conversion Efficiency Banner */}
        <div className="mt-8 rounded-2xl border border-coconut/20 bg-sand/40 p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-full bg-forest text-cream flex items-center justify-center shrink-0 shadow-xs">
              <Scale size={20} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-forest">
                {t("ratioTitle")}
              </p>
              <p className="text-xs sm:text-sm text-ink-muted mt-0.5 font-medium">
                {t("ratioDesc")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-forest border-t md:border-t-0 md:border-l border-coconut/20 pt-3 md:pt-0 md:pl-5">
            <div>
              <span className="block text-lg font-display text-forest font-bold">24 Ton</span>
              <span className="text-[0.6875rem] text-coconut uppercase tracking-wide">Kapasitas / Tahun</span>
            </div>
            <div className="h-7 w-px bg-coconut/20" />
            <div>
              <span className="block text-lg font-display text-forest font-bold">60 Mitra</span>
              <span className="text-[0.6875rem] text-coconut uppercase tracking-wide">Petani Keboncau</span>
            </div>
          </div>
        </div>

        {/* Processed Items Cards Grid */}
        <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESSED_ITEMS.map((item, index) => {
            const data = t.raw(`items.${item.key}` as any) as {
              title: string;
              badge: string;
              desc: string;
              spec1: string;
              spec2: string;
              spec3: string;
              spec4: string;
              application: string;
            };

            return (
              <article
                key={item.key}
                className="group flex flex-col rounded-3xl overflow-hidden border border-coconut/20 bg-cream shadow-xs transition-all duration-300 hover:border-coconut/40 hover:shadow-elevated hover:-translate-y-1"
              >
                {/* Media Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-sand/60">
                  <Image
                    src={item.image}
                    alt={data.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="rounded-full bg-forest/90 backdrop-blur-md px-2.5 py-1 text-[0.625rem] font-bold tracking-wider text-cream uppercase shadow-xs">
                      {item.badgeCode}
                    </span>
                    <span className="rounded-full bg-cream/95 backdrop-blur-md px-2.5 py-1 text-[0.625rem] font-semibold text-forest shadow-xs">
                      {item.yieldRatio}
                    </span>
                  </div>

                  {/* Bottom Title on Image */}
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <span className="rounded-full bg-amber-accent/90 text-forest px-2 py-0.5 text-[0.625rem] font-bold tracking-wide uppercase inline-block mb-1">
                      {data.badge}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-cream tracking-tight drop-shadow-sm">
                      {data.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {data.desc}
                    </p>

                    {/* Spec Grid */}
                    <div className="mt-4 grid grid-cols-2 gap-2 text-[0.6875rem] text-forest">
                      <div className="rounded-lg bg-sand/50 p-2 border border-coconut/15 flex items-start gap-1.5">
                        <CheckCircle2 size={12} className="text-forest shrink-0 mt-0.5" />
                        <span className="font-medium">{data.spec1}</span>
                      </div>
                      <div className="rounded-lg bg-sand/50 p-2 border border-coconut/15 flex items-start gap-1.5">
                        <CheckCircle2 size={12} className="text-forest shrink-0 mt-0.5" />
                        <span className="font-medium">{data.spec2}</span>
                      </div>
                      <div className="rounded-lg bg-sand/50 p-2 border border-coconut/15 flex items-start gap-1.5">
                        <CheckCircle2 size={12} className="text-forest shrink-0 mt-0.5" />
                        <span className="font-medium">{data.spec3}</span>
                      </div>
                      <div className="rounded-lg bg-sand/50 p-2 border border-coconut/15 flex items-start gap-1.5">
                        <CheckCircle2 size={12} className="text-forest shrink-0 mt-0.5" />
                        <span className="font-medium">{data.spec4}</span>
                      </div>
                    </div>

                    {/* Industrial Application */}
                    <div className="mt-3.5 rounded-xl bg-forest/5 p-3 border border-forest/10">
                      <p className="text-[0.625rem] font-bold uppercase tracking-wider text-forest flex items-center gap-1">
                        <Sparkles size={11} className="text-amber-accent" />
                        <span>Aplikasi Industri & Pasar:</span>
                      </p>
                      <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                        {data.application}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="border-t border-coconut/15 pt-3.5 flex items-center justify-between">
                    <Link
                      href={item.productHref as any}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-forest hover:text-forest-hover transition-colors"
                    >
                      <span>Spesifikasi Lengkap</span>
                      <ArrowUpRight size={13} className="text-amber-accent" />
                    </Link>
                    <Link
                      href="/partnership"
                      className="text-[0.6875rem] font-medium text-coconut hover:text-forest underline underline-offset-2 transition-colors"
                    >
                      Minta Sampel
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
