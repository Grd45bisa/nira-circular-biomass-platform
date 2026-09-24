import { ArrowUpRight } from "lucide-react";
import {useTranslations} from 'next-intl';
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";

export function PartnershipCTA({localized = false}: {localized?: boolean}) {
  const t = useTranslations('home');
  return (
    <section
      className="nira-section relative overflow-hidden border-t border-amber-accent/30 bg-forest text-cream"
      data-surface="dark"
    >
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-cream/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <Container className="nira-cta-columns relative z-10 grid items-end gap-6 md:gap-8 xl:gap-10">
        <div>
          <EyebrowBadge className="mb-4 border-cream/35">
            {localized ? t('cta.eyebrow') : 'Open Ecosystem'}
          </EyebrowBadge>

          <h2 className="type-section-title max-w-[18ch] text-cream">
            {localized ? t('cta.title') : 'What could we reveal together?'}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg xl:mt-5 xl:text-xl">
            {localized ? t('cta.description') : 'Whether you are a horticultural brand seeking peat-free circular substrates, an architectural studio exploring bio-composites, or a sustainability advocate — we welcome thoughtful collaborations that keep nature and community at the center.'}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-cream/90 sm:gap-3 xl:mt-8">
            <span className="rounded-full border border-cream/30 bg-cream/10 px-3 py-1.5">
              {localized ? t('cta.tagOne') : 'Retail & Homeware Distribution'}
            </span>
            <span className="rounded-full border border-cream/30 bg-cream/10 px-3 py-1.5">
              {localized ? t('cta.tagTwo') : 'Commercial Nursery Substrates'}
            </span>
            <span className="rounded-full border border-cream/30 bg-cream/10 px-3 py-1.5">
              {localized ? t('cta.tagThree') : 'Bio-Composite R&D'}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <ButtonLink
            href="/partnership"
            className="w-full bg-cream text-forest shadow-md transition-all hover:bg-sand hover:shadow-lg sm:w-fit"
          >
            <span>{localized ? t('cta.action') : 'Start a Conversation'}</span>
            <ArrowUpRight size={18} className="text-coconut" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
