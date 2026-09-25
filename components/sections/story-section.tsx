import Image from "next/image";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";

type StorySectionProps = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  image: string;
  imageAlt: string;
  imageNote?: string;
  link?: { href: ComponentProps<typeof Link>["href"]; label: string };
  reverse?: boolean;
};

export function StorySection({
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt,
  imageNote,
  link,
  reverse = false,
}: StorySectionProps) {
  return (
    <section className="nira-section bg-cream">
      <Container className="nira-two-column nira-story-grid grid items-center gap-6 sm:gap-8">
        <figure className={reverse ? "nira-reverse-image" : undefined}>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-card border border-coconut/15 bg-sand/30 shadow-natural lg:aspect-[4/3]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1366px) 45vw, (min-width: 1024px) and (orientation: landscape) 45vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            />
            <div className="pointer-events-none absolute inset-0 rounded-card ring-1 ring-inset ring-black/5" />
          </div>
          {imageNote ? (
            <figcaption className="type-caption mt-3 text-coconut/80 italic">
              {imageNote}
            </figcaption>
          ) : null}
        </figure>

        <div className={reverse ? "nira-reverse-copy" : undefined}>
          <EyebrowBadge tone="light" className="mb-4">
            {eyebrow}
          </EyebrowBadge>

          <h2 className="type-section-title mt-2 max-w-xl text-forest text-balance">
            {title}
          </h2>

          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="type-body text-ink-muted max-w-[56ch] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {link ? (
            <div className="mt-8">
              <Link
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-forest transition-colors hover:text-forest-hover"
              >
                <span className="border-b border-forest/30 pb-0.5 group-hover:border-forest">
                  {link.label}
                </span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
