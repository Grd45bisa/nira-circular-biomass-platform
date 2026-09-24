import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";

export type ProductCardProps = {
  href: string;
  imageAlt: string;
  imageSrc: string | null;
  family: string;
  name: string;
  materialSource: string;
  description: string;
  sustainabilityValue: string;
};

export function ProductCard({
  href,
  imageAlt,
  imageSrc,
  family,
  name,
  materialSource,
  description,
  sustainabilityValue,
}: ProductCardProps) {
  return (
    <Card className="nira-product-card group relative flex flex-col justify-between overflow-hidden border-coconut/15 bg-cream p-0 transition-all duration-300 hover:shadow-elevated md:p-0">
      <div>
        <div className="nira-product-media relative aspect-square lg:aspect-[4/3] overflow-hidden bg-sand/40">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 85vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-sand text-coconut/50 text-xs uppercase tracking-wider">
              Asset in production
            </div>
          )}
          <span className="absolute top-2.5 left-2.5 rounded-full bg-cream/90 px-2.5 py-0.5 text-[0.625rem] font-bold tracking-[0.14em] text-forest uppercase backdrop-blur-xs shadow-xs lg:top-3 lg:left-3 lg:px-3 lg:py-1 lg:text-[0.6875rem]">
            {family}
          </span>
        </div>

        <div className="p-4 md:p-5 xl:p-6">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-medium text-coconut tracking-wide">
              {materialSource}
            </span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sand/60 text-forest transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-forest group-hover:text-cream">
              <ArrowUpRight size={13} />
            </span>
          </div>

          <h3 className="nira-product-title type-card-title mt-1.5 text-forest transition-colors group-hover:text-forest-hover lg:mt-2">
            <Link href={href} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {name}
            </Link>
          </h3>

          <p className="nira-product-description mt-2 text-xs leading-relaxed text-ink-muted lg:mt-3 lg:text-sm">
            {description}
          </p>
        </div>
      </div>

      <div className="nira-product-impact hidden px-5 pb-5 md:px-6 md:pb-6">
        <div className="border-t border-coconut/15 pt-3.5">
          <p className="text-xs font-medium text-forest flex items-start gap-1.5">
            <span className="text-amber-accent mt-0.5">✦</span>
            <span>{sustainabilityValue}</span>
          </p>
        </div>
      </div>
    </Card>
  );
}
