import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Leaf, Users, Coins } from "lucide-react";

type ImpactBase = {
  label: string;
  description: string;
  iconName?: "leaf" | "users" | "coins";
  pillarLabel?: string;
  evidenceLabel?: string;
  className?: string;
};

type VerifiedMetric = ImpactBase & {
  kind: "metric";
  value: string;
  unit: string;
  period?: string;
  source?: string;
};

type QualitativeEvidence = ImpactBase & {
  kind: "narrative";
};

export type ImpactCardProps = VerifiedMetric | QualitativeEvidence;

export function ImpactCard(props: ImpactCardProps) {
  const getIcon = () => {
    const l = props.label.toLowerCase();
    const iconClass = "h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 text-forest";
    if (props.iconName === "leaf" || l.includes("environment") || l.includes("lingkungan")) {
      return <Leaf className={iconClass} />;
    }
    if (props.iconName === "users" || l.includes("social") || l.includes("sosial")) {
      return <Users className={iconClass} />;
    }
    return <Coins className={iconClass} />;
  };

  return (
    <Card
      className={cn(
        "p-4 sm:p-5 md:p-6 flex flex-col justify-between border-coconut/15 bg-cream/90 transition-all duration-300 hover:shadow-elevated hover:-translate-y-0.5",
        props.className,
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-sand/80">
            {getIcon()}
          </div>
          <span className="rounded-full bg-sand/60 px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1 text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-wider text-coconut uppercase">
            {props.pillarLabel ?? "Pillar"}
          </span>
        </div>

        {props.kind === "metric" ? (
          <div className="mt-3 sm:mt-4 md:mt-5 flex items-baseline">
            <span className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-forest leading-none">
              {props.value}
            </span>
            {props.unit ? (
              <span
                className={cn(
                  "font-display font-medium text-coconut",
                  props.unit === "+"
                    ? "ml-0.5 text-2xl sm:text-3xl md:text-4xl text-amber-accent"
                    : "ml-1.5 text-sm sm:text-base md:text-lg"
                )}
              >
                {props.unit}
              </span>
            ) : null}
          </div>
        ) : null}

        <h3 className="type-card-title mt-2 sm:mt-3 md:mt-4 text-forest font-medium text-sm sm:text-base md:text-lg leading-snug">
          {props.label}
        </h3>

        <p className="type-body mt-1.5 sm:mt-2 md:mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
          {props.description}
        </p>
      </div>

      {props.kind === "metric" && (props.period || props.source) ? (
        <div className="mt-4 sm:mt-5 md:mt-6 border-t border-coconut/15 pt-2.5 sm:pt-3 md:pt-3.5 text-[0.6875rem] sm:text-xs text-coconut">
          {props.period ? <span>{props.period} · </span> : null}
          {props.source ? <span>{props.evidenceLabel ? `${props.evidenceLabel}: ` : "Evidence: "}{props.source}</span> : null}
        </div>
      ) : null}
    </Card>
  );
}
