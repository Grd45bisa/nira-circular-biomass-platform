"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  Zap,
  ShieldCheck,
  Cog,
  Gauge,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";

type MachineKey =
  | "integrated"
  | "finishing"
  | "decorticator"
  | "sifter"
  | "cocochip";

type MachineItem = {
  key: MachineKey;
  image: string;
  badgeCode: string;
};

const MACHINES: MachineItem[] = [
  {
    key: "integrated",
    image: "/images/machines/paket-mesin-otomatis-ayakan.png",
    badgeCode: "01 / PRIMARY LINE",
  },
  {
    key: "decorticator",
    image: "/images/machines/mesin-decorticator-cb-g19.webp",
    badgeCode: "02 / DECORTICATOR",
  },
  {
    key: "sifter",
    image: "/images/machines/mesin-ayakan-rotary.webp",
    badgeCode: "03 / ROTARY SIFTER",
  },
  {
    key: "finishing",
    image: "/images/machines/mesin-finishing.webp",
    badgeCode: "04 / FIBER CLEANER",
  },
  {
    key: "cocochip",
    image: "/images/machines/mesin-cocochip.webp",
    badgeCode: "05 / CHIP CUTTER",
  },
];

export function MachineryFleetSection({
  className = "",
  id = "machinery",
}: {
  className?: string;
  id?: string;
}) {
  const t = useTranslations("machineryFleet");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (activeIndex !== null)
      setActiveIndex((prev) => ((prev! + 1) % MACHINES.length));
  }, [activeIndex]);

  const handlePrev = useCallback(() => {
    if (activeIndex !== null)
      setActiveIndex(
        (prev) => ((prev! - 1 + MACHINES.length) % MACHINES.length)
      );
  }, [activeIndex]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, handleNext, handlePrev]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const activeMachine = activeIndex !== null ? MACHINES[activeIndex] : null;

  return (
    <section
      className={`nira-section bg-sand/40 py-16 sm:py-20 lg:py-24 ${className}`}
      id={id}
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-4 border-b border-coconut/15">
          <div className="max-w-2xl">
            <EyebrowBadge className="mb-3.5 flex items-center gap-1.5 w-fit">
              <Zap size={13} className="text-amber-accent" />
              <span>{t("eyebrow")}</span>
            </EyebrowBadge>
            <h2 className="type-section-title text-forest text-balance">
              {t("title")}
            </h2>
            <p className="type-lead mt-3.5 text-ink-muted leading-relaxed">
              {t("lead")}
            </p>
          </div>

          {/* Operational Guarantees */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-forest font-medium">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-3.5 py-1.5 border border-forest/15">
              <Zap size={13} className="text-amber-accent" />
              <span>{t("badgeElectric")}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-coconut/10 px-3.5 py-1.5 border border-coconut/20">
              <Gauge size={13} className="text-forest" />
              <span>{t("badgeCapacity")}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3.5 py-1.5 border border-coconut/20 shadow-2xs">
              <ShieldCheck size={13} className="text-forest" />
              <span>{t("badgeWomen")}</span>
            </span>
          </div>
        </div>

        {/* Compact Machine Photo Grid — click to open detail */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {MACHINES.map((machine, index) => {
            const m = t.raw(`machines.${machine.key}` as any) as {
              title: string;
              category: string;
              desc: string;
              specs: string;
              role: string;
            };
            return (
              <button
                key={machine.key}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-coconut/20 bg-sand/60 shadow-xs hover:border-coconut/50 hover:shadow-elevated transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                aria-label={`Lihat detail ${m.title}`}
              >
                <Image
                  src={machine.image}
                  alt={m.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Badge top-left */}
                <div className="absolute top-2 left-2">
                  <span className="rounded-full bg-forest/90 backdrop-blur-sm px-2 py-0.5 text-[0.5rem] sm:text-[0.5625rem] font-bold tracking-wider text-cream uppercase shadow-xs">
                    {machine.badgeCode}
                  </span>
                </div>

                {/* Electric badge top-right */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-cream/90 backdrop-blur-sm px-1.5 py-0.5 text-[0.5rem] font-semibold text-forest shadow-xs">
                    <Zap size={9} className="text-amber-accent" />
                    PLN
                  </span>
                </div>

                {/* Title bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <p className="text-[0.5625rem] sm:text-[0.625rem] font-bold text-cream leading-tight line-clamp-2 drop-shadow">
                    {m.title}
                  </p>
                  <p className="mt-0.5 text-[0.5rem] sm:text-[0.5625rem] text-amber-accent/90 font-semibold uppercase tracking-wide line-clamp-1">
                    {m.category}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-[0.6875rem] text-coconut/70 text-center font-medium">
          Ketuk foto mesin untuk melihat spesifikasi teknis lengkap
        </p>
      </Container>

      {/* ── Machine Detail Modal ── */}
      {activeMachine &&
        (() => {
          const m = t.raw(`machines.${activeMachine.key}` as any) as {
            title: string;
            category: string;
            desc: string;
            specs: string;
            role: string;
          };
          return (
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`Detail mesin: ${m.title}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0"
                onClick={() => setActiveIndex(null)}
              />

              <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-cream border border-coconut/20 shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[88vh]">
                {/* Close */}
                <button
                  onClick={() => setActiveIndex(null)}
                  className="absolute top-3 right-3 z-20 h-8 w-8 rounded-full bg-black/60 text-cream hover:bg-black/90 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Tutup pratinjau"
                >
                  <X size={16} />
                </button>

                {/* ── Image Panel ── */}
                <div className="relative w-full md:w-1/2 h-56 sm:h-72 md:h-auto min-h-[220px] bg-sand/80 shrink-0">
                  <Image
                    src={activeMachine.image}
                    alt={m.title}
                    fill
                    className="object-contain p-3"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  {/* Prev / Next */}
                  {MACHINES.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrev();
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-cream/90 text-forest hover:bg-cream flex items-center justify-center shadow-elevated transition-transform hover:scale-105 cursor-pointer"
                        aria-label="Mesin sebelumnya"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNext();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-cream/90 text-forest hover:bg-cream flex items-center justify-center shadow-elevated transition-transform hover:scale-105 cursor-pointer"
                        aria-label="Mesin berikutnya"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}

                  {/* Counter */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-2.5 py-0.5 text-[0.5625rem] font-semibold text-cream/90 backdrop-blur-sm">
                    {activeIndex! + 1} / {MACHINES.length}
                  </div>
                </div>

                {/* ── Detail Panel ── */}
                <div className="w-full md:w-1/2 p-5 sm:p-6 flex flex-col gap-3.5 overflow-y-auto">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-forest text-cream px-2.5 py-1 text-[0.5625rem] font-bold uppercase tracking-wider whitespace-nowrap">
                      {activeMachine.badgeCode}
                    </span>
                    <span className="rounded-full bg-amber-accent/20 text-forest border border-amber-accent/30 px-2.5 py-1 text-[0.5625rem] font-bold uppercase tracking-wide whitespace-nowrap">
                      {m.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-forest leading-snug">
                    {m.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {m.desc}
                  </p>

                  {/* Specs + Role in one compact box */}
                  <div className="rounded-xl bg-sand/50 border border-coconut/15 divide-y divide-coconut/10 overflow-hidden">
                    <div className="p-3">
                      <p className="text-[0.625rem] font-bold uppercase tracking-wider text-forest flex items-center gap-1.5 mb-1.5">
                        <Cog size={11} className="text-coconut shrink-0" />
                        <span>Peran di Hub</span>
                      </p>
                      <p className="text-xs text-ink-muted leading-snug">
                        {m.role}
                      </p>
                    </div>
                    <div className="p-3">
                      <p className="text-[0.625rem] font-bold uppercase tracking-wider text-forest flex items-center gap-1.5 mb-1.5">
                        <Sparkles
                          size={11}
                          className="text-amber-accent shrink-0"
                        />
                        <span>Spesifikasi Teknis</span>
                      </p>
                      <p className="text-xs text-forest/90 font-medium leading-snug">
                        {m.specs}
                      </p>
                    </div>
                  </div>

                  {/* Close */}
                  <div className="mt-auto pt-3 border-t border-coconut/15">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(null)}
                      className="w-full text-center text-xs font-medium text-coconut hover:text-forest transition-colors py-1.5 cursor-pointer"
                    >
                      Tutup Pratinjau
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
    </section>
  );
}
