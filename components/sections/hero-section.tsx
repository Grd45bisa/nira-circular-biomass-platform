import Image from "next/image";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";

type HeroSectionProps = {
  eyebrow?: string;
  tagline?: string;
  title: ReactNode;
  subtitleCallout?: string;
  description: string;
  actions?: ReactNode;
  media?: ReactNode;
  highlights?: ReactNode;
  bgImageSrc?: string;
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
  bgImageSrc = "/images/hero-bg.webp",
}: HeroSectionProps) {
  return (
    <section
      className="nira-main-hero relative flex min-h-[100dvh] flex-col justify-start pt-9 pb-12 sm:pt-14 sm:pb-14 md:pt-20 md:pb-16 overflow-hidden bg-forest-active text-cream"
      data-surface="dark"
    >
      {/* Full-bleed image on mobile and portrait tablets */}
      <div className="nira-main-hero-bg pointer-events-none absolute inset-0 z-0">
        <Image
          src={bgImageSrc}
          alt="Lush tropical coconut agroforestry canopy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      </div>

      <Container className="relative z-10 w-full">
        <div
          className={
            media ? "nira-main-hero-grid grid items-center gap-8" : "max-w-3xl"
          }
        >
          {/* Main Hero Copy - Fits 100dvh on mobile, tablet portrait, and desktop */}
          <div
            className={
              media ? "nira-main-hero-copy flex flex-col justify-center" : ""
            }
          >
            {/* Eyebrow & Tagline */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-semibold tracking-[0.1em] uppercase">
              <span className="nira-main-hero-eyebrow text-white">
                {eyebrow}
              </span>
              {tagline ? (
                <>
                  <span
                    className="nira-main-hero-divider hidden h-3 w-px bg-white/30"
                    aria-hidden="true"
                  />
                  <span className="nira-main-hero-tagline text-white/80">
                    {tagline}
                  </span>
                </>
              ) : null}
            </div>

            {/* Display Title */}
            <h1 className="nira-main-hero-title mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white text-balance leading-[1.12]">
              {title}
            </h1>

            {/* Subtitle Callout with Vertical Bar */}
            {subtitleCallout ? (
              <div className="nira-main-hero-callout mt-3.5 border-l-2 border-white/40 pl-3 text-xs sm:text-sm font-medium tracking-wide text-white/90">
                {subtitleCallout}
              </div>
            ) : null}

            {/* Lead Description */}
            <p className="nira-main-hero-description mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/90 font-normal">
              {description}
            </p>

            {/* Actions */}
            {actions ? (
              <div className="mt-5 sm:mt-6 flex items-center gap-3.5 sm:gap-6">
                {actions}
              </div>
            ) : null}

            {/* Bottom Highlights (e.g. Checkmark badge) */}
            {highlights ? (
              <div className="nira-main-hero-highlights mt-6 border-t border-cream/20 pt-4">
                {highlights}
              </div>
            ) : null}
          </div>

          {/* Media side - Hidden on Mobile and Tablet Portrait, shown on Desktop */}
          {media ? (
            <div className="nira-main-hero-media relative hidden">{media}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
