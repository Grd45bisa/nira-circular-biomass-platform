import { Container } from "@/components/layout/container";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import {useTranslations} from 'next-intl';

export const journeySteps = [
  {
    step: "01",
    title: "Collect",
    subtitle: "Ethical Sourcing",
    shortSubtitle: "Ethical Sourcing",
    summary: "Collect unused husks and shells with local farmers.",
    text: "Partnering directly with smallholder farming communities to collect post-harvest husks and shells that were previously discarded or burned.",
    focus: "Raw Biomass Valorization",
  },
  {
    step: "02",
    title: "Process",
    subtitle: "Zero-Chemical Refining",
    shortSubtitle: "Clean Refining",
    summary: "Separate fiber and pith with natural methods.",
    text: "Separating long tensile fibers from spongy peat pith using rainwater washing, sun-curing, and mechanical decortication.",
    focus: "Mechanical Separation",
  },
  {
    step: "03",
    title: "Create",
    subtitle: "Artisan Formulation",
    shortSubtitle: "Artisan Making",
    summary: "Shape fibers, cocopeat, and shells into useful products.",
    text: "Molding breathable coir vessels, screening nutrient-holding cocopeat, and carbonizing dense shells into clean burning briquettes.",
    focus: "Regenerative Output",
  },
  {
    step: "04",
    title: "Empower",
    subtitle: "Circular Prosperity",
    shortSubtitle: "Shared Prosperity",
    summary: "Support village workshops and future research.",
    text: "Reinvesting revenue directly into village processing hubs, safe artisanal workshops, and continuous regenerative research.",
    focus: "Community Sovereignty",
  },
] as const;

const stepKeys = ['collect', 'process', 'create', 'empower'] as const;

export function JourneySteps({ compact = false, localized = false }: { compact?: boolean; localized?: boolean }) {
  const t = useTranslations('home');
  return (
    <ol className="nira-journey-grid grid grid-cols-2 gap-2.5 sm:gap-4">
      {journeySteps.map((step, index) => {
        const key = stepKeys[index];
        const title = localized ? t(`steps.${key}.title`) : step.title;
        return (
        <li
          key={step.title}
          className="group relative flex min-w-0 flex-col justify-between rounded-card border border-cream/15 bg-forest-light/60 p-3 sm:p-4 md:p-5 xl:p-8 backdrop-blur-xs transition-all duration-300 hover:border-cream/35 hover:bg-forest-light"
        >
          <div>
            <div className="flex items-start justify-between gap-2">
              <span className="font-display text-2xl font-light text-amber-accent/80 sm:text-3xl xl:text-4xl">
                {step.step}
              </span>
              <span className="nira-journey-desktop hidden rounded-full bg-cream/10 px-2.5 py-0.5 text-[0.6875rem] font-semibold tracking-wider text-cream/75 uppercase">
                {localized ? t(`steps.${key}.subtitle`) : step.subtitle}
              </span>
            </div>

            <h3 className="mt-2 font-display text-base font-medium text-cream sm:mt-2.5 sm:text-lg xl:text-xl">
              {title}
            </h3>

            <p className="nira-journey-mobile mt-1 text-[0.625rem] font-semibold tracking-wider text-amber-accent uppercase sm:text-[0.6875rem]">
              {localized ? t(`steps.${key}.short`) : step.shortSubtitle}
            </p>

            {!compact ? (
              <>
                <p className="nira-journey-mobile mt-2 text-xs leading-snug text-cream/75 sm:text-sm">
                  {localized ? t(`steps.${key}.summary`) : step.summary}
                </p>
                <p className="nira-journey-desktop mt-3 hidden text-sm leading-relaxed text-cream/75">
                  {localized ? t(`steps.${key}.text`) : step.text}
                </p>
              </>
            ) : null}
          </div>

          <div className="nira-journey-desktop mt-6 hidden border-t border-cream/10 pt-4">
            <span className="text-xs font-medium text-amber-accent flex items-center gap-1.5">
              <span>→</span>
              <span>{localized ? t(`steps.${key}.focus`) : step.focus}</span>
            </span>
          </div>
        </li>
      );})}
    </ol>
  );
}

export function JourneySection() {
  const t = useTranslations('home');
  return (
    <section
      className="nira-section bg-forest text-cream relative overflow-hidden"
      data-surface="dark"
    >


      <Container className="relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <EyebrowBadge className="mb-3">
              {t('journey.eyebrow')}
            </EyebrowBadge>
            <h2 className="type-section-title max-w-xl text-cream text-balance">
              {t('journey.title')}
            </h2>
          </div>
          <p className="max-w-md text-sm text-cream/75 leading-relaxed">
            {t('journey.description')}
          </p>
        </div>

        <div className="mt-8 sm:mt-10 xl:mt-12">
          <JourneySteps localized />
        </div>
      </Container>
    </section>
  );
}
