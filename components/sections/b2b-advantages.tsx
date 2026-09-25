import { Container } from "@/components/layout/container";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { CheckCircle2, ShieldCheck, Leaf, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export function B2BAdvantages() {
  const t = useTranslations("home.advantages");

  const cards = [
    {
      key: "sourcing",
      icon: CheckCircle2,
      badge: "Traceability",
      accent: "from-amber-500/20 to-transparent",
    },
    {
      key: "quality",
      icon: ShieldCheck,
      badge: "Quality Control",
      accent: "from-emerald-500/20 to-transparent",
    },
    {
      key: "decarbonization",
      icon: Leaf,
      badge: "ESG & Scope 3",
      accent: "from-cyan-500/20 to-transparent",
    },
    {
      key: "empowerment",
      icon: Users,
      badge: "Social Impact",
      accent: "from-rose-500/20 to-transparent",
    },
  ];

  return (
    <section className="nira-section bg-sand/30 border-y border-coconut/10">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <EyebrowBadge tone="light" className="mb-3">
              {t("eyebrow")}
            </EyebrowBadge>
            <h2 className="type-section-title text-forest max-w-[20ch]">
              {t("title")}
            </h2>
          </div>
          <p className="type-lead max-w-xl text-ink-muted">
            {t("description")}
          </p>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ key, icon: Icon, badge, accent }) => (
            <div
              key={key}
              className="group relative flex flex-col justify-between rounded-card border border-coconut/15 bg-cream/90 p-5 sm:p-6 lg:p-7 shadow-xs transition-all duration-300 hover:border-coconut/40 hover:shadow-elevated hover:-translate-y-1 overflow-hidden"
            >
              <div
                className={`pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${accent} blur-2xl transition-opacity duration-300 opacity-60 group-hover:opacity-100`}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest/5 text-forest group-hover:bg-forest group-hover:text-cream transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-sand/60 px-2.5 py-0.5 text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-wider text-coconut uppercase">
                    {badge}
                  </span>
                </div>

                <h3 className="mt-5 text-base sm:text-lg font-bold text-forest leading-snug">
                  {t(`items.${key}.title` as any)}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {t(`items.${key}.desc` as any)}
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-3 border-t border-coconut/10 flex items-center gap-1.5 text-xs font-semibold text-coconut group-hover:text-forest transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-accent" />
                <span>PANDA COCO Certified</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
