import Image from "next/image";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  children,
}: PageHeroProps) {
  return (
    <section
      className="nira-page-hero relative overflow-hidden bg-forest text-cream"
      data-surface="dark"
    >
      <div className="nira-page-hero-mobile-bg pointer-events-none absolute inset-0">
        <Image
          src={image ?? "/images/hero-bg.webp"}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      </div>

      {/* Subtle organic ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cream/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="nira-page-hero-columns relative z-10 grid items-center gap-8 sm:gap-10">
        <div>
          <EyebrowBadge className="mb-4">{eyebrow}</EyebrowBadge>

          <h1 className="nira-page-hero-title mt-3 max-w-[15ch] font-display font-medium tracking-tight text-cream">
            {title}
          </h1>

          <p className="nira-page-hero-description mt-4 max-w-[54ch] text-cream/90">
            {description}
          </p>

          {children ? <div className="mt-6 sm:mt-8">{children}</div> : null}
        </div>

        {image ? (
          <div className="nira-page-hero-media group relative aspect-[4/3] overflow-hidden rounded-card border border-cream/20 bg-wood/40 shadow-elevated">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1366px) 45vw, (min-width: 1024px) and (orientation: landscape) 45vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              priority
            />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="nira-page-hero-decoration relative hidden aspect-square items-center justify-center"
          >
            <div className="absolute inset-[8%] rounded-full border border-cream/20" />
            <div className="absolute inset-[22%] rounded-full border border-cream/25" />
            <div className="absolute inset-[36%] rounded-full border border-cream/30" />
            <div className="absolute inset-[50%] rounded-full bg-amber-accent/20 backdrop-blur-xs" />
          </div>
        )}
      </Container>
    </section>
  );
}
