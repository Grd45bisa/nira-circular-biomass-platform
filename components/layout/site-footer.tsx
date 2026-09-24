import {getTranslations} from 'next-intl/server';
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import {LanguageSwitcher} from '@/components/layout/language-switcher';
import {Link} from '@/i18n/navigation';
import { navigationItems } from "@/lib/navigation";

export async function SiteFooter() {
  const t = await getTranslations('footer');
  const nav = await getTranslations('nav');
  return (
    <footer
      className="border-t border-coconut/20 bg-forest-active text-cream py-10 sm:py-12 lg:pt-16 lg:pb-12"
      data-surface="dark"
    >
      <Container>
        {/* Mobile & Tablet Portrait View (< lg): Streamlined, centered, and pleasant */}
        <div className="flex flex-col items-center text-center gap-7 sm:gap-8 lg:hidden">
          {/* Logo & Ethos */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 text-cream">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-accent"
                  aria-hidden="true"
                >
                  <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                  <path d="M12 12 2.1 12a10 10 0 0 0 17 5.9" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <span className="font-display text-2xl font-medium tracking-[0.03em] text-cream">
                NIRA
              </span>
            </div>
            <p className="mt-3 font-display text-base italic text-cream/90 max-w-sm">
              &ldquo;{t('tagline')}&rdquo;
            </p>
            <p className="mt-1.5 text-xs text-cream/70 max-w-sm">
              Nature Into Renewable Assets · {t('brandDescription')}
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[0.6875rem] text-cream/65">
            <span className="rounded-full border border-cream/20 bg-cream/5 px-2.5 py-1">
              {t('badgeOne')}
            </span>
            <span className="rounded-full border border-cream/20 bg-cream/5 px-2.5 py-1">
              {t('badgeTwo')}
            </span>
            <span className="rounded-full border border-cream/20 bg-cream/5 px-2.5 py-1">
              {t('badgeThree')}
            </span>
          </div>

          <div className="w-12 h-px bg-cream/15" />

          {/* Platform Navigation */}
          <div className="w-full max-w-md">
            <h2 className="text-[0.6875rem] font-bold tracking-[0.2em] text-amber-accent uppercase">
              {t('explore')}
            </h2>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-cream/85">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-1 hover:text-cream transition-colors"
                >
                  {nav(item.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* {t('families')} */}
          <div className="w-full max-w-md">
            <h2 className="text-[0.6875rem] font-bold tracking-[0.2em] text-amber-accent uppercase">
              {t('families')}
            </h2>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
              <Link
                href="/products#living"
                className="rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-cream/80 hover:text-cream hover:border-cream/40 transition-colors"
              >
                Living <span className="text-cream/50">({t('coirPots')})</span>
              </Link>
              <Link
                href="/products#grow"
                className="rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-cream/80 hover:text-cream hover:border-cream/40 transition-colors"
              >
                Grow <span className="text-cream/50">({t('cocopeat')})</span>
              </Link>
              <Link
                href="/products#energy"
                className="rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-cream/80 hover:text-cream hover:border-cream/40 transition-colors"
              >
                Energy <span className="text-cream/50">({t('biocharcoal')})</span>
              </Link>
              <Link
                href="/products#craft"
                className="rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-cream/80 hover:text-cream hover:border-cream/40 transition-colors"
              >
                Craft <span className="text-cream/50">({t('homeware')})</span>
              </Link>
            </div>
          </div>

          {/* Collaboration CTA */}
          <div className="flex flex-col items-center gap-2.5 max-w-xs">
            <p className="text-xs text-cream/70 leading-relaxed">
              {t('collaborationShort')}
            </p>
            <Link
              href="/partnership"
              className="inline-flex items-center gap-1.5 rounded-pill bg-cream/15 px-4 py-2 text-xs font-semibold text-cream hover:bg-cream/25 transition-colors"
            >
              <span>{t('inquire')}</span>
              <ArrowUpRight size={13} className="text-amber-accent" />
            </Link>
          </div>

          {/* Bottom Copyright & Credits */}
          <div className="w-full border-t border-cream/15 pt-6 flex flex-col items-center gap-2.5 text-xs text-cream/65">
            <LanguageSwitcher />
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/image-credits"
                className="underline underline-offset-4 hover:text-cream transition-colors"
              >
                {t('credits')}
              </Link>
              <span>·</span>
              <Link
                href="/about"
                className="hover:text-cream transition-colors"
              >
                {t('ethos')}
              </Link>
            </div>
            <p className="text-[0.6875rem] text-cream/50">
              © {new Date().getFullYear()} NIRA (Nature Into Renewable Assets).
              {t('copyright')}
            </p>
          </div>
        </div>

        {/* Desktop View (lg+): Expanded multi-column directory structure */}
        <div className="hidden lg:grid nira-footer-grid gap-12">
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 text-cream">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-accent"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                    <path d="M12 12 2.1 12a10 10 0 0 0 17 5.9" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>
                <span className="font-display text-3xl font-medium tracking-[0.03em] text-cream">
                  NIRA
                </span>
              </div>
              <p className="mt-4 max-w-sm font-display text-lg italic text-cream/90">
                &ldquo;{t('tagline')}&rdquo;
              </p>
              <p className="mt-3 max-w-sm text-sm text-cream/70 leading-relaxed">
                Nature Into Renewable Assets · {t('brandDescription')}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-cream/60">
              <span className="rounded-full border border-cream/20 px-3 py-1">
                {t('badgeOne')}
              </span>
              <span className="rounded-full border border-cream/20 px-3 py-1">
                {t('badgeTwo')}
              </span>
              <span className="rounded-full border border-cream/20 px-3 py-1">
                {t('badgeThree')}
              </span>
            </div>
          </div>

          <div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <h2 className="text-xs font-bold tracking-[0.16em] text-amber-accent uppercase">
                  {t('explore')}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-1 text-sm text-cream/80 transition-colors hover:text-cream"
                      >
                        <span>{nav(item.key)}</span>
                        <ArrowUpRight
                          size={13}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-bold tracking-[0.16em] text-amber-accent uppercase">
                  {t('families')}
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
                  <li>
                    <Link href="/products#living" className="hover:text-cream">
                      NIRA Living{" "}
                      <span className="text-xs text-cream/50">({t('coirPots')})</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products#grow" className="hover:text-cream">
                      NIRA Grow{" "}
                      <span className="text-xs text-cream/50">
                        ({t('cocopeat')})
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products#energy" className="hover:text-cream">
                      NIRA Energy{" "}
                      <span className="text-xs text-cream/50">
                        ({t('biocharcoal')})
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products#craft" className="hover:text-cream">
                      NIRA Craft{" "}
                      <span className="text-xs text-cream/50">
                        ({t('homeware')})
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-bold tracking-[0.16em] text-amber-accent uppercase">
                  {t('collaboration')}
                </h2>
                <p className="mt-4 text-xs text-cream/70 leading-relaxed">
                  {t('collaborationLong')}
                </p>
                <Link
                  href="/partnership"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-pill bg-cream/10 px-4 py-2 text-xs font-semibold text-cream hover:bg-cream/20 transition-colors"
                >
                  {t('inquire')} ↗
                </Link>
              </div>
            </div>
          </div>

          <div className="nira-footer-bottom flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 pt-6 text-xs text-cream/65">
            <LanguageSwitcher />
            <p>
              © {new Date().getFullYear()} NIRA (Nature Into Renewable Assets).
              {t('copyright')}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/image-credits"
                className="underline underline-offset-4 hover:text-cream transition-colors"
              >
                {t('credits')}
              </Link>
              <Link
                href="/about"
                className="hover:text-cream transition-colors"
              >
                {t('ethos')}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
