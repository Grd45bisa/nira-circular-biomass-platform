"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export type HeroSlideNote = { strong: string; text: string };
export type HeroSlideImage = {
  src: string;
  alt: string;
  badge: string;
  parts: string;
};
/**
 * Readability scrim for the full-bleed mobile / tablet portrait backdrop.
 * - `none`   no scrim at all
 * - `tablet` scrim from the `sm` breakpoint up (tablet portrait only)
 * - `all`    scrim at every portrait width (mobile + tablet portrait)
 */
export type HeroSlideScrim = "none" | "tablet" | "all";

export type HeroSlideBackdrop = {
  src: string;
  alt: string;
  scrim?: HeroSlideScrim;
};

export type HeroSlide = {
  id: string;
  /** Short label used for the pagination dots and their accessible name. */
  label: string;
  eyebrow: string;
  tagline?: string;
  titleFirst: string;
  titleSecond: string;
  callout?: string;
  description: string;
  note?: HeroSlideNote;
  image: HeroSlideImage;
  /** Full-bleed mobile / tablet portrait backdrop. */
  backdrop: HeroSlideBackdrop;
  mobilePillars: string;
};

export type HeroSectionProps = {
  slides: HeroSlide[];
  actions?: ReactNode;
  carouselLabel: string;
  prevLabel: string;
  nextLabel: string;
};

const AUTO_PLAY_MS = 6500;
const SWIPE_THRESHOLD_PX = 48;

const SCRIM_CLASS: Record<HeroSlideScrim, string> = {
  none: "opacity-0",
  tablet: "opacity-0 sm:opacity-100",
  all: "opacity-100",
};

export function HeroSection({
  slides,
  actions,
  carouselLabel,
  prevLabel,
  nextLabel,
}: HeroSectionProps) {
  const total = slides.length;
  const [active, setActive] = useState(0);
  const [navigated, setNavigated] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setNavigated(true);
      setActive(((index % total) + total) % total);
    },
    [total],
  );

  const stepBy = useCallback(
    (direction: 1 | -1) => {
      setNavigated(true);
      setActive((current) => (current + direction + total) % total);
    },
    [total],
  );

  const advance = useCallback(() => {
    setNavigated(true);
    setActive((current) => (current + 1) % total);
  }, [total]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const sync = () => setPageVisible(!document.hidden);
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  useEffect(() => {
    if (total < 2 || hovered || reducedMotion || !pageVisible) {
      return;
    }
    const timer = window.setInterval(advance, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [active, advance, hovered, pageVisible, reducedMotion, total]);

  // Before the first navigation only the active slide is mounted, so a
  // three-slide hero never downloads the whole set up front. Afterwards the
  // outgoing slide stays mounted for the duration of the crossfade.
  const visibleSlides =
    total < 2 || !navigated ? [active] : [active, (active - 1 + total) % total];

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
        return;
      }
      event.preventDefault();
      stepBy(event.key === "ArrowRight" ? 1 : -1);
    },
    [stepBy],
  );

  const onTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const start = touchStartX.current;
    const end = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (start === null || end === undefined) {
      return;
    }
    const distance = end - start;
    if (Math.abs(distance) < SWIPE_THRESHOLD_PX) {
      return;
    }
    stepBy(distance < 0 ? 1 : -1);
  };

  const activeSlide = slides[active] ?? slides[0];

  const isFocusWithin = (event: React.FocusEvent<HTMLElement>) => {
    const next = event.relatedTarget as Node | null;
    return next ? event.currentTarget.contains(next) : true;
  };

  const renderCopy = (slide: HeroSlide) => (
    <div className="nira-main-hero-slide flex flex-col">
      {/* Eyebrow & Tagline */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-bold tracking-[0.14em] uppercase text-forest">
        <span className="nira-main-hero-eyebrow">{slide.eyebrow}</span>
        {slide.tagline ? (
          <>
            <span
              className="nira-main-hero-divider inline-block h-3 w-px bg-coconut/40"
              aria-hidden="true"
            />
            <span className="nira-main-hero-tagline text-coconut">
              {slide.tagline}
            </span>
          </>
        ) : null}
      </div>

      {/* Display Title */}
      <h1 className="nira-main-hero-title mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-forest text-balance leading-[1.12]">
        {slide.titleFirst} <br className="hidden sm:inline" />
        <span className="nira-main-hero-emphasis font-serif italic font-normal text-coconut">
          {slide.titleSecond}
        </span>
      </h1>

      {/* Subtitle Callout with Vertical Bar */}
      {slide.callout ? (
        <div className="nira-main-hero-callout mt-3.5 border-l-2 border-coconut pl-3 text-xs sm:text-sm font-semibold tracking-wide text-coconut">
          {slide.callout}
        </div>
      ) : null}

      {/* Lead Description */}
      <p className="nira-main-hero-description mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-ink-muted font-normal">
        {slide.description}
      </p>
    </div>
  );

  const renderNote = (slide: HeroSlide) => {
    if (!slide.note) {
      return null;
    }
    return (
      <div className="nira-main-hero-note mt-3 flex max-w-xl items-start gap-2.5 text-xs leading-relaxed text-ink-muted">
        <span className="nira-main-hero-note-icon flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-forest/20 bg-forest/10 text-[0.6875rem] font-bold text-forest">
          ✓
        </span>
        <p>
          <strong className="nira-main-hero-note-strong font-semibold text-forest">
            {slide.note.strong}
          </strong>{" "}
          {slide.note.text}
        </p>
      </div>
    );
  };

  const renderBackdrop = (
    slide: HeroSlide,
    index: number,
    isActive: boolean,
  ) => (
    <div
      className={cn(
        "absolute inset-0 transition-opacity duration-[900ms] ease-out motion-reduce:transition-none",
        isActive ? "opacity-100" : "opacity-0",
      )}
    >
      <Image
        src={slide.backdrop.src}
        alt={isActive ? slide.backdrop.alt : ""}
        fill
        priority={index === 0}
        sizes="100vw"
        className={cn(
          "object-cover",
          slide.backdrop.scrim ? "object-center" : "object-bottom",
        )}
      />
    </div>
  );

  const renderMediaFrame = (
    slide: HeroSlide,
    index: number,
    isActive: boolean,
  ) => (
    <div
      key={slide.id}
      className={cn(
        "absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none",
        isActive ? "opacity-100" : "opacity-0",
      )}
    >
      <Image
        src={slide.image.src}
        alt={isActive ? slide.image.alt : ""}
        fill
        priority={index === 0}
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-102 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  );

  const renderDots = (variant: "light" | "dark") => (
    <div
      className={cn(
        "flex items-center gap-1.5",
        variant === "dark" ? "justify-end" : "justify-center",
      )}
    >
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          type="button"
          onClick={() => goTo(index)}
          aria-current={index === active ? "true" : undefined}
          aria-label={slide.label}
          className={cn(
            "h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none",
            variant === "dark"
              ? index === active
                ? "w-6 bg-cream"
                : "w-1.5 bg-cream/45 hover:bg-cream/75"
              : index === active
                ? "w-6 bg-forest"
                : "w-1.5 bg-forest/25 hover:bg-forest/50",
          )}
        />
      ))}
    </div>
  );

  const renderNavButtons = () => (
    <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100">
      <button
        type="button"
        onClick={() => stepBy(-1)}
        aria-label={prevLabel}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cream/90 text-forest shadow-xs backdrop-blur-xs transition-colors hover:bg-cream"
      >
        <ChevronLeft size={16} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => stepBy(1)}
        aria-label={nextLabel}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cream/90 text-forest shadow-xs backdrop-blur-xs transition-colors hover:bg-cream"
      >
        <ChevronRight size={16} aria-hidden="true" />
      </button>
    </div>
  );

  if (!activeSlide) {
    return null;
  }

  return (
    <>
      {/* =========================================================================
          MOBILE & TABLET PORTRAIT HERO (< 1024px / lg:hidden)
          Full-bleed backdrop + overlay stack, copy rotates with the carousel
          ========================================================================= */}
      <section
        className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden lg:hidden"
        data-surface="light"
        role="group"
        aria-roledescription="carousel"
        aria-label={carouselLabel}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Layer 1: Dedicated Background Image (rotates per slide) */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {visibleSlides.map((index) =>
            renderBackdrop(slides[index], index, index === active),
          )}
        </div>

        {/* Layer 1b: Legibility scrim for photography-led backdrops */}
        <div
          className={cn(
            "nira-main-hero-backdrop-scrim pointer-events-none absolute inset-0 z-[1] transition-opacity duration-[900ms] ease-out motion-reduce:transition-none",
            SCRIM_CLASS[activeSlide.backdrop.scrim ?? "none"],
          )}
          aria-hidden="true"
        />

        {/* Layer 2: Penutup Sudut Daun Kiri Atas (HANYA tampil pada Slide 1 Mobile & Tablet) */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700 ease-out motion-reduce:transition-none",
            active === 0 ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src="/images/Background_hero/hero-wall-overlay.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
            aria-hidden="true"
          />
        </div>

        {/* Layer 2b: Pendaran Sinar Cahaya Terang Sudut Kiri Atas (HANYA tampil pada Slide 1 Mobile & Tablet) */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-[2] transition-opacity duration-700 ease-out motion-reduce:transition-none",
            active === 0 ? "opacity-100" : "opacity-0",
          )}
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 8% 6%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 48%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        {/* Layer 2c: Dark Gradient Scrim (HANYA tampil pada Slide 2 & 3 di Mobile & Tablet) */}
        <div
          className={cn(
            "nira-hero-dark-scrim pointer-events-none absolute inset-0 z-[2] transition-opacity duration-700 ease-out motion-reduce:transition-none",
            active !== 0 ? "opacity-100" : "opacity-0",
          )}
          aria-hidden="true"
        />

        {/* Layer 3: Text content ("textnya di depan keduanya" - z-10) */}
        <div
          className={cn(
            "relative z-10 w-full px-5 pt-8 pb-6 sm:px-8 sm:pt-10 md:px-12 md:pt-12",
            active !== 0 ? "hero-dark-active" : "",
          )}
        >
          <div
            key={activeSlide.id}
            className="nira-main-hero-copy nira-hero-slide-enter flex max-w-xl flex-col justify-center"
            aria-live="polite"
          >
            {renderCopy(activeSlide)}
          </div>

          {/* Actions */}
          {actions ? (
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5 sm:gap-6">
              {actions}
            </div>
          ) : null}
        </div>

        {/* Bottom Bar: Overlaid on the cocofiber foreground */}
        <div className="relative z-10 flex items-center justify-between gap-3 px-5 sm:px-8 md:px-12 pb-5 pt-3">
          <span
            key={`${activeSlide.id}-pillars`}
            className="nira-hero-slide-enter text-[0.625rem] sm:text-xs font-semibold tracking-[0.16em] uppercase text-cream/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
          >
            {activeSlide.mobilePillars}
          </span>
          <div className="flex shrink-0 items-center gap-3">
            {total > 1 ? renderDots("dark") : null}
            <ArrowRight
              size={16}
              className="shrink-0 text-cream/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          DESKTOP & TABLET LANDSCAPE HERO (>= 1024px / hidden lg:flex)
          Clean 2-column B2B industrial layout, copy + image rotate together
          ========================================================================= */}
      <section
        className="nira-main-hero relative hidden lg:flex flex-col justify-center overflow-hidden bg-cream text-ink py-12 lg:py-16 border-b border-coconut/15"
        data-surface="light"
        role="group"
        aria-roledescription="carousel"
        aria-label={carouselLabel}
        tabIndex={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={(event) => {
          if (isFocusWithin(event)) setHovered(true);
        }}
        onBlur={(event) => {
          if (isFocusWithin(event)) setHovered(false);
        }}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Container className="relative z-10 w-full">
          <div className="nira-main-hero-grid grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Main Hero Copy */}
            <div className="nira-main-hero-copy flex flex-col justify-center lg:col-span-7">
              <div
                key={activeSlide.id}
                className="nira-hero-slide-enter"
                aria-live="polite"
              >
                {renderCopy(activeSlide)}
              </div>

              {/* Actions */}
              {actions ? (
                <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5 sm:gap-6">
                  {actions}
                </div>
              ) : null}

              {/* Bottom Highlights (e.g. Checkmark badge) */}
              {activeSlide.note ? (
                <div
                  key={`${activeSlide.id}-note`}
                  className="nira-main-hero-highlights nira-hero-slide-enter mt-6 border-t border-sand-dark/40 pt-4"
                >
                  {renderNote(activeSlide)}
                </div>
              ) : null}
            </div>

            {/* Media side - Shown on Desktop */}
            <div className="nira-main-hero-media relative mt-6 block lg:mt-0 lg:col-span-5">
              <div className="group relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] overflow-hidden rounded-card border border-coconut/20 bg-sand/40 shadow-elevated">
                {visibleSlides.map((index) =>
                  renderMediaFrame(slides[index], index, index === active),
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {total > 1 ? renderNavButtons() : null}

                <div className="absolute right-3.5 bottom-3.5 left-3.5 sm:right-4 sm:bottom-4 sm:left-4 flex items-center justify-between gap-3">
                  <span
                    key={`${activeSlide.id}-badge`}
                    className="nira-hero-slide-enter rounded-full bg-cream/95 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.6875rem] sm:text-xs font-semibold tracking-wide text-forest uppercase backdrop-blur-xs shadow-xs"
                  >
                    {activeSlide.image.badge}
                  </span>
                  <span
                    key={`${activeSlide.id}-parts`}
                    className="nira-hero-slide-enter text-right text-[0.625rem] sm:text-[0.6875rem] font-medium text-cream/90 tracking-wider"
                  >
                    {activeSlide.image.parts}
                  </span>
                </div>
              </div>

              {total > 1 ? (
                <div className="nira-main-hero-dots mt-3 flex items-center justify-center gap-1.5">
                  {renderDots("light")}
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
