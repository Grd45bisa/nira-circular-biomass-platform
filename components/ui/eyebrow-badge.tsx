import { cn } from "@/lib/utils";

type EyebrowBadgeTone = "dark" | "light";

type EyebrowBadgeProps = {
  children: React.ReactNode;
  tone?: EyebrowBadgeTone;
  className?: string;
};

const tones: Record<EyebrowBadgeTone, string> = {
  dark: "border-cream/20 bg-cream/10 text-cream",
  light: "border-coconut/20 bg-sand/40 text-coconut",
};

const dotTones: Record<EyebrowBadgeTone, string> = {
  dark: "bg-amber-accent",
  light: "bg-forest",
};

export function EyebrowBadge({
  children,
  tone = "dark",
  className,
}: EyebrowBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold tracking-[0.14em] uppercase",
        tones[tone],
        className,
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", dotTones[tone])}
        aria-hidden="true"
      />
      <span>{children}</span>
    </div>
  );
}
