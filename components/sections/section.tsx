import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  surface?: "light" | "forest" | "wood";
  className?: string;
};

const surfaceClasses = {
  light: "bg-cream text-ink",
  forest: "bg-forest text-cream",
  wood: "bg-wood text-cream",
} as const;

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  surface = "light",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("nira-section", surfaceClasses[surface], className)}
      data-surface={surface === "light" ? undefined : "dark"}
    >
      <Container>
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold tracking-[0.15em] uppercase md:mb-6">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="type-section-title max-w-[15ch]">{title}</h2>
        {description ? (
          <p
            className={cn(
              "type-lead mt-4 max-w-[65ch] md:mt-6",
              surface === "light" ? "text-ink-muted" : "text-cream/85",
            )}
          >
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8 md:mt-12">{children}</div> : null}
      </Container>
    </section>
  );
}
