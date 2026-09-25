import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Link } from "@/i18n/navigation";

type HeroSectionProps = {
  eyebrow?: string;
  tagline?: string;
  title: ReactNode;
  subtitleCallout?: string;
  description: string;
  actions?: ReactNode;
  media?: ReactNode;
  highlights?: ReactNode;

  // Mobile & tablet portrait specific props matching mockup
  mobileEyebrow?: string;
  mobileDescription?: string;
  mobileActionLabel?: string;
  mobileAboutLabel?: string;
  mobileStats?: Array<{ value: string; label: string }>;
  mobilePillars?: string;
};

export function HeroSection({
  eyebrow = "PANDA COCO · AGRO-BIOMASSA SIRKULAR",
  tagline,
  title,
  subtitleCallout = "MEMBUKA NILAI TERTINGGI DI SETIAP SERAT KELAPA.",
  description,
  actions,
  media,
  highlights,
  mobileEyebrow = "AGRO-BIOMASSA SIRKULAR",
  mobileDescription = "Mengolah kelapa Pandeglang menjadi material dan energi bernilai tinggi.",
  mobileActionLabel = "Lihat Produk",
  mobileAboutLabel = "Tentang Kami",
  mobileStats = [
    { value: "23.900 ton", label: "POTENSI KELAPA PANDEGLANG" },
    { value: "24 ton", label: "BIOMASSA / TAHUN" },
    { value: "60", label: "PETANI MITRA" },
  ],
  mobilePillars = "COCOFIBER · COCOPEAT · GREEN PANEL",
}: HeroSectionProps) {
  return (
    <>
      {/* =========================================================================
          MOBILE & TABLET PORTRAIT HERO (< 1024px / lg:hidden)
          Matches exact design mockup with Background.png + shadow overlay
          ========================================================================= */}
      <section
        className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden lg:hidden"
        data-surface="light"
      >
        {/* Layer 1: Dedicated Background Image */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/Background_hero/Background.png"
            alt="PANDA COCO Pandeglang Agroforestry & Biomass"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>

        {/* Layer 2: Penutup Sudut Daun Kiri Atas (Menjadikan dinding bersih & bayangan lebar tetap tampil) */}
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <Image
            src="/images/Background_hero/hero-wall-overlay.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
            aria-hidden="true"
          />
        </div>

        {/* Layer 2b: Pendaran Sinar Cahaya Terang dari Sudut Kiri Atas (Sunlight Beam) */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 8% 6%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 48%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        {/* Layer 3: Text content ("textnya di depan keduanya" - z-10) */}
        <div className="relative z-10 w-full px-5 pt-8 pb-6 sm:px-8 sm:pt-10 md:px-12 md:pt-12">
          <div className="nira-main-hero-copy flex flex-col justify-center max-w-xl">
            {/* Eyebrow & Tagline */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-bold tracking-[0.14em] uppercase text-forest">
              <span className="nira-main-hero-eyebrow">{eyebrow}</span>
              {tagline ? (
                <>
                  <span
                    className="nira-main-hero-divider inline-block h-3 w-px bg-coconut/40"
                    aria-hidden="true"
                  />
                  <span className="nira-main-hero-tagline text-coconut">
                    {tagline}
                  </span>
                </>
              ) : null}
            </div>

            {/* Display Title */}
            <h1 className="nira-main-hero-title mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-forest text-balance leading-[1.12]">
              {title}
            </h1>

            {/* Subtitle Callout with Vertical Bar */}
            {subtitleCallout ? (
              <div className="nira-main-hero-callout mt-3.5 border-l-2 border-coconut pl-3 text-xs sm:text-sm font-semibold tracking-wide text-coconut">
                {subtitleCallout}
              </div>
            ) : null}

            {/* Lead Description */}
            <p className="nira-main-hero-description mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-ink-muted font-normal">
              {description}
            </p>

            {/* Actions */}
            {actions ? (
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5 sm:gap-6">
                {actions}
              </div>
            ) : null}

            {/* Note: highlights (Kapasitas Terukur) sengaja di-hide di mobile & tablet portrait agar tidak menabrak kelapa & pot tunas */}
          </div>
        </div>

        {/* Bottom Bar: Overlaid on the cocofiber foreground */}
        <div className="relative z-10 flex items-center justify-between px-5 sm:px-8 md:px-12 pb-5 pt-3">
          <span className="text-[0.625rem] sm:text-xs font-semibold tracking-[0.16em] uppercase text-cream/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
            {mobilePillars}
          </span>
          <ArrowRight
            size={16}
            className="shrink-0 text-cream/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* =========================================================================
          DESKTOP & TABLET LANDSCAPE HERO (>= 1024px / hidden lg:flex)
          Retains the clean 2-column B2B industrial layout
          ========================================================================= */}
      <section
        className="nira-main-hero relative hidden lg:flex flex-col justify-center overflow-hidden bg-cream text-ink py-12 lg:py-16 border-b border-coconut/15"
        data-surface="light"
      >
        <Container className="relative z-10 w-full">
          <div
            className={
              media ? "nira-main-hero-grid grid items-center gap-8 lg:grid-cols-12 lg:gap-12" : "max-w-3xl"
            }
          >
            {/* Main Hero Copy */}
            <div
              className={
                media ? "nira-main-hero-copy flex flex-col justify-center lg:col-span-7" : ""
              }
            >
              {/* Eyebrow & Tagline */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-bold tracking-[0.14em] uppercase text-forest">
                <span className="nira-main-hero-eyebrow">{eyebrow}</span>
                {tagline ? (
                  <>
                    <span
                      className="nira-main-hero-divider inline-block h-3 w-px bg-coconut/40"
                      aria-hidden="true"
                    />
                    <span className="nira-main-hero-tagline text-coconut">
                      {tagline}
                    </span>
                  </>
                ) : null}
              </div>

              {/* Display Title */}
              <h1 className="nira-main-hero-title mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-forest text-balance leading-[1.12]">
                {title}
              </h1>

              {/* Subtitle Callout with Vertical Bar */}
              {subtitleCallout ? (
                <div className="nira-main-hero-callout mt-3.5 border-l-2 border-coconut pl-3 text-xs sm:text-sm font-semibold tracking-wide text-coconut">
                  {subtitleCallout}
                </div>
              ) : null}

              {/* Lead Description */}
              <p className="nira-main-hero-description mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-ink-muted font-normal">
                {description}
              </p>

              {/* Actions */}
              {actions ? (
                <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5 sm:gap-6">
                  {actions}
                </div>
              ) : null}

              {/* Bottom Highlights (e.g. Checkmark badge) */}
              {highlights ? (
                <div className="nira-main-hero-highlights mt-6 border-t border-sand-dark/40 pt-4">
                  {highlights}
                </div>
              ) : null}
            </div>

            {/* Media side - Shown on Desktop */}
            {media ? (
              <div className="nira-main-hero-media relative mt-6 block lg:mt-0 lg:col-span-5">
                {media}
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    </>
  );
}
