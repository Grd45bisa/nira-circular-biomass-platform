import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";

export type ArticleCardProps = {
  href: string;
  imageSrc: string | null;
  imageAlt: string;
  category: string;
  title: string;
  dateTime?: string;
  dateLabel?: string;
  excerpt?: string;
};

export function ArticleCard({
  href,
  imageSrc,
  imageAlt,
  category,
  title,
  dateTime,
  dateLabel,
  excerpt,
}: ArticleCardProps) {
  return (
    <Card className="group flex flex-col justify-between overflow-hidden p-0 border-coconut/15 bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <div>
        <div className="relative aspect-[3/2] overflow-hidden bg-sand/40">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : null}
          <span className="absolute top-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-[0.6875rem] font-bold tracking-[0.14em] text-forest uppercase backdrop-blur-xs shadow-xs">
            {category}
          </span>
        </div>

        <div className="p-6 md:p-7">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold tracking-wider text-coconut uppercase">
              Field Dispatch
            </span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sand/60 text-forest transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-forest group-hover:text-cream">
              <ArrowUpRight size={13} />
            </span>
          </div>

          <h3 className="type-card-title mt-3 text-forest transition-colors group-hover:text-forest-hover">
            <Link href={href} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {title}
            </Link>
          </h3>

          {excerpt ? (
            <p className="type-body text-ink-muted mt-3 text-sm line-clamp-3 leading-relaxed">
              {excerpt}
            </p>
          ) : null}
        </div>
      </div>

      <div className="px-6 pb-6 md:px-7 md:pb-7">
        <div className="border-t border-coconut/15 pt-3.5 flex items-center justify-between text-xs text-coconut">
          <span>Read Dispatch →</span>
          {dateTime && dateLabel ? (
            <time dateTime={dateTime}>{dateLabel}</time>
          ) : (
            <span>5 min read</span>
          )}
        </div>
      </div>
    </Card>
  );
}
