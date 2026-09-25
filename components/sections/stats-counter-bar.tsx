import { Container } from "@/components/layout/container";
import { Zap, Layers, Users, TreePine } from "lucide-react";
import { useTranslations } from "next-intl";

export function StatsCounterBar() {
  const t = useTranslations("home.statsBar");

  const stats = [
    {
      id: "biomass",
      value: t("biomass.value"),
      unit: t("biomass.unit"),
      label: t("biomass.label"),
      description: t("biomass.desc"),
      icon: Layers,
    },
    {
      id: "women",
      value: t("women.value"),
      unit: t("women.unit"),
      label: t("women.label"),
      description: t("women.desc"),
      icon: Users,
    },
    {
      id: "farmers",
      value: t("farmers.value"),
      unit: t("farmers.unit"),
      label: t("farmers.label"),
      description: t("farmers.desc"),
      icon: TreePine,
    },
    {
      id: "electric",
      value: t("electric.value"),
      unit: t("electric.unit"),
      label: t("electric.label"),
      description: t("electric.desc"),
      icon: Zap,
    },
  ];

  return (
    <section className="relative z-10 border-y border-coconut/20 bg-forest-active py-8 text-cream sm:py-10 lg:py-12">
      <Container>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-coconut/20 bg-coconut/20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex min-w-0 flex-col justify-between bg-forest-active p-5 sm:p-6 lg:min-h-56 lg:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="max-w-[24ch] text-[0.625rem] font-bold leading-snug tracking-[0.14em] text-amber-accent uppercase sm:text-[0.6875rem]">
                      {stat.label}
                    </span>
                    <Icon className="h-4 w-4 shrink-0 text-cream/40" aria-hidden="true" />
                  </div>

                  <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:mt-5">
                    <span className="font-display text-4xl font-semibold leading-none tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium leading-tight text-cream/75 sm:text-sm">
                      {stat.unit}
                    </span>
                  </div>

                  <p className="mt-3 max-w-[28ch] text-xs leading-relaxed text-cream/65 sm:mt-4">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
