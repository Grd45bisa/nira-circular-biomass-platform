"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Layers,
  CheckCircle2,
  Scale,
  ArrowUpRight,
  Info,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Link } from "@/i18n/navigation";

export type GalleryItemKey =
  | "cocopeatBlockDisplay"
  | "cocopeatBlockPackaged"
  | "cocochip"
  | "cocofiber"
  | "cocobristleProduct"
  | "cocobristleExport"
  | "prosesPengikatan";

interface GalleryItemDef {
  key: GalleryItemKey;
  image: string;
  category: "cocopeat" | "cocofiber" | "cocobristle" | "cocochip" | "process";
  tag: string;
}

const GALLERY_ITEMS: GalleryItemDef[] = [
  {
    key: "cocopeatBlockDisplay",
    image: "/images/gallery/cocopeat-block-display.jpg",
    category: "cocopeat",
    tag: "COCOPEAT BLOCK",
  },
  {
    key: "cocopeatBlockPackaged",
    image: "/images/gallery/cocopeat-block-packaged.png",
    category: "cocopeat",
    tag: "DISTRIBUSI EKSPOR",
  },
  {
    key: "cocochip",
    image: "/images/gallery/cocochip-bulk.jpg",
    category: "cocochip",
    tag: "COCOCHIP ORGANIK",
  },
  {
    key: "cocofiber",
    image: "/images/gallery/cocofiber-golden.jpg",
    category: "cocofiber",
    tag: "COCOFIBER EMAS",
  },
  {
    key: "cocobristleProduct",
    image: "/images/gallery/cocobristle-product.png",
    category: "cocobristle",
    tag: "SERAT COCOBRISTLE",
  },
  {
    key: "cocobristleExport",
    image: "/images/gallery/cocobristle-export-ready.png",
    category: "cocobristle",
    tag: "IKATAN SIAP EKSPOR",
  },
  {
    key: "prosesPengikatan",
    image: "/images/gallery/proses-pengikatan-cocobristle.png",
    category: "process",
    tag: "PROSES OPERASIONAL",
  },
];

export function ProcessedOutputsGallery({
  className = "",
  id = "processed-outputs",
}: {
  className?: string;
  id?: string;
}) {
  const t = useTranslations("processedOutputs");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const activeItem =
    activeModalIndex !== null ? filteredItems[activeModalIndex] : null;

  const handleNext = useCallback(() => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  }, [activeModalIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeModalIndex !== null) {
      setActiveModalIndex(
        (prev) => (prev! - 1 + filteredItems.length) % filteredItems.length
      );
    }
  }, [activeModalIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") setActiveModalIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeModalIndex, handleNext, handlePrev]);

  // Lock background scroll
  useEffect(() => {
    if (activeModalIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalIndex]);

  return (
    <section
      className={`nira-section bg-cream py-16 sm:py-20 lg:py-24 ${className}`}
      id={id}
    >
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

        {/* Conversion Efficiency Telemetry */}
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
              <span className="block text-lg font-display text-forest font-bold">
                24 Ton
              </span>
              <span className="text-[0.6875rem] text-coconut uppercase tracking-wide">
                Kapasitas / Tahun
              </span>
            </div>
            <div className="h-7 w-px bg-coconut/20" />
            <div>
              <span className="block text-lg font-display text-forest font-bold">
                60 Mitra
              </span>
              <span className="text-[0.6875rem] text-coconut uppercase tracking-wide">
                Petani Keboncau
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: t("galleryFilterAll") },
            { id: "cocopeat", label: t("galleryFilterCocopeat") },
            { id: "cocofiber", label: t("galleryFilterFiber") },
            { id: "cocobristle", label: t("galleryFilterBristle") },
            { id: "cocochip", label: t("galleryFilterChip") },
            { id: "process", label: t("galleryFilterProcess") },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id);
                  setActiveModalIndex(null);
                }}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-forest text-cream shadow-xs"
                    : "bg-cream text-forest hover:bg-sand/60 border border-coconut/20"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid — 2 col mobile/portrait, 3 col landscape, 4 col xl */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, index) => {
            const title = t(`items.${item.key}.title`);
            const badge = t(`items.${item.key}.badge`);
            const desc = t(`items.${item.key}.desc`);
            const specs = t(`items.${item.key}.specs`);

            return (
              <article
                key={item.key}
                onClick={() => setActiveModalIndex(index)}
                className="group flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden border border-coconut/20 bg-cream shadow-xs transition-all duration-300 hover:border-coconut/40 hover:shadow-elevated hover:-translate-y-1 cursor-pointer"
              >
                {/* Media Container */}
                <div className="relative h-44 sm:h-52 md:h-56 w-full overflow-hidden bg-sand/60">
                  <Image
                    src={item.image}
                    alt={title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="rounded-full bg-forest/90 backdrop-blur-md px-2 py-0.5 text-[0.5rem] sm:text-[0.5625rem] font-bold tracking-wider text-cream uppercase shadow-xs">
                      {item.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-cream/90 backdrop-blur-md p-1 sm:p-1.5 text-forest group-hover:bg-forest group-hover:text-cream transition-colors shadow-xs">
                      <Maximize2 size={11} />
                    </span>
                  </div>

                  {/* Bottom Image Title */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="rounded-full bg-amber-accent/90 text-forest px-1.5 py-0.5 text-[0.5rem] sm:text-[0.5625rem] font-bold tracking-wide uppercase inline-block mb-1">
                      {badge}
                    </span>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-cream tracking-tight drop-shadow-sm leading-snug line-clamp-2">
                      {title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between gap-2.5">
                  <p className="text-[0.625rem] sm:text-xs text-ink-muted leading-relaxed line-clamp-2">
                    {desc}
                  </p>

                  {/* Quick Specs */}
                  <div className="rounded-xl bg-sand/50 px-2.5 py-2 border border-coconut/15">
                    <p className="text-[0.5625rem] sm:text-[0.625rem] font-semibold text-forest flex items-center gap-1">
                      <CheckCircle2 size={10} className="text-forest shrink-0" />
                      <span className="truncate">{specs}</span>
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-coconut/15 pt-2 flex items-center justify-between text-[0.5625rem] sm:text-xs font-semibold text-forest">
                    <span className="flex items-center gap-1">
                      <span>{t("viewDetail")}</span>
                      <Maximize2 size={10} className="text-amber-accent" />
                    </span>
                    <span className="text-[0.5rem] sm:text-[0.5625rem] text-coconut/70 font-normal">
                      PANDA COCO QC
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>

      {/* ── Lightbox Modal ── */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            onClick={() => setActiveModalIndex(null)}
          />

          <div className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-hidden rounded-3xl bg-cream border border-coconut/20 shadow-2xl flex flex-col md:flex-row">
            {/* Close */}
            <button
              onClick={() => setActiveModalIndex(null)}
              className="absolute top-3 right-3 z-20 h-8 w-8 rounded-full bg-black/60 text-cream hover:bg-black/90 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup pratinjau"
            >
              <X size={16} />
            </button>

            {/* Image Section */}
            <div className="relative w-full md:w-[55%] h-60 sm:h-80 md:h-auto min-h-[240px] bg-sand/80 shrink-0">
              <Image
                src={activeItem.image}
                alt={t(`items.${activeItem.key}.title`)}
                fill
                className="object-contain p-2"
                sizes="(min-width: 768px) 55vw, 100vw"
              />

              {/* Prev / Next */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-cream/90 text-forest hover:bg-cream flex items-center justify-center shadow-elevated transition-transform hover:scale-105 cursor-pointer"
                    aria-label="Foto sebelumnya"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-cream/90 text-forest hover:bg-cream flex items-center justify-center shadow-elevated transition-transform hover:scale-105 cursor-pointer"
                    aria-label="Foto berikutnya"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Counter */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-2.5 py-0.5 text-[0.5625rem] font-semibold text-cream/90 backdrop-blur-sm">
                {activeModalIndex! + 1} / {filteredItems.length}
              </div>
            </div>

            {/* ── Detail Panel — Compact ── */}
            <div className="w-full md:w-[45%] p-5 sm:p-6 flex flex-col gap-3 overflow-y-auto">
              {/* Badges — nowrap so they don't break weirdly */}
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-forest text-cream px-2.5 py-1 text-[0.5625rem] font-bold uppercase tracking-wider whitespace-nowrap">
                  {activeItem.tag}
                </span>
                <span className="rounded-full bg-amber-accent/20 text-forest border border-amber-accent/30 px-2.5 py-1 text-[0.5625rem] font-bold uppercase tracking-wide whitespace-nowrap">
                  {t(`items.${activeItem.key}.badge`)}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-forest tracking-tight leading-snug">
                {t(`items.${activeItem.key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {t(`items.${activeItem.key}.desc`)}
              </p>

              {/* Specs + Application — compact single box */}
              <div className="rounded-xl bg-sand/40 border border-coconut/15 divide-y divide-coconut/10 overflow-hidden">
                <div className="p-3">
                  <p className="text-[0.625rem] font-bold uppercase tracking-wider text-forest flex items-center gap-1.5 mb-1.5">
                    <Info size={11} className="text-forest shrink-0" />
                    <span>{t("specLabel")}</span>
                  </p>
                  <p className="text-xs text-forest/90 leading-relaxed font-medium">
                    {t(`items.${activeItem.key}.specs`)}
                  </p>
                </div>
                <div className="p-3">
                  <p className="text-[0.625rem] font-bold uppercase tracking-wider text-forest flex items-center gap-1.5 mb-1.5">
                    <Sparkles size={11} className="text-amber-accent shrink-0" />
                    <span>{t("appLabel")}</span>
                  </p>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {t(`items.${activeItem.key}.application`)}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto pt-3 border-t border-coconut/15 flex flex-col gap-2">
                <Link
                  href="/partnership"
                  onClick={() => setActiveModalIndex(null)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest hover:bg-forest-light text-cream px-5 py-2.5 text-xs font-semibold shadow-xs transition-colors"
                >
                  <span>{t("inquireSupply")}</span>
                  <ArrowUpRight size={13} className="text-amber-accent" />
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveModalIndex(null)}
                  className="w-full text-center text-xs font-medium text-coconut hover:text-forest transition-colors py-1 cursor-pointer"
                >
                  Tutup Pratinjau
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
