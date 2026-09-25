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
    <section className="relative z-10 border-y border-coconut/20 bg-forest-active py-4 text-cream sm:py-5 lg:py-7">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-coconut/20 bg-coconut/20 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex min-w-0 flex-col bg-forest-active p-3.5 sm:p-4 lg:min-h-48 lg:p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="max-w-[18ch] text-[0.5625rem] font-bold leading-[1.35] tracking-[0.12em] text-amber-accent uppercase sm:text-[0.625rem]">
                      {stat.label}
                    </span>
                    <Icon className="h-3.5 w-3.5 shrink-0 text-cream/40" aria-hidden="true" />
                  </div>

                  <div className="mt-2.5 flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 sm:mt-3">
                    <span className="font-display text-[1.75rem] font-semibold leading-none tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                      {stat.value}
                    </span>
                    <span className="text-[0.6875rem] font-medium leading-tight text-cream/75 sm:text-xs">
                      {stat.unit}
                    </span>
                  </div>

                  <p className="mt-1.5 max-w-[26ch] text-[0.625rem] font-medium leading-[1.45] text-cream/70 sm:mt-2 sm:text-[0.6875rem] lg:mt-2.5 lg:text-xs">
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
