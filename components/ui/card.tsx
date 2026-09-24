import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn(
        "rounded-card border border-coconut/25 bg-cream p-5 shadow-natural md:p-6",
        className,
      )}
      {...props}
    />
  );
}
