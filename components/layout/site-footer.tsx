import {getTranslations} from 'next-intl/server';
import Image from "next/image";
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
      className="border-t border-coconut/20 bg-forest-active text-cream"
      data-surface="dark"
    >
      <Container>
        <div className="flex flex-col items-center gap-10 py-10 sm:py-14 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:pt-16 lg:pb-12">
          {/* Brand */}
          <div className="flex flex-col items-center text-center max-w-md lg:items-start lg:text-left">
            <div className="flex items-center justify-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full overflow-hidden border border-cream/25 shadow-xs shrink-0">
                <Image
                  src="/images/nira-logo-mark.webp"
                  alt="NIRA logo mark"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-display text-2xl font-medium tracking-[0.03em] text-cream">
                NIRA
              </span>
            </div>
            <p className="mt-4 font-display text-lg italic text-cream/90">
              &ldquo;{t('tagline')}&rdquo;
            </p>
            <p className="mt-2 text-xs text-cream/65">
              Nature Into Renewable Assets · {t('brandDescription')}
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label={t('explore')}
            className="flex flex-col items-center gap-5 lg:items-end"
          >
            <h2 className="text-[0.6875rem] font-bold tracking-[0.2em] text-amber-accent uppercase">
              {t('explore')}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream/85 lg:justify-end">
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
            <Link
              href="/partnership"
              className="inline-flex items-center gap-1.5 rounded-pill bg-cream/15 px-4 py-2 text-xs font-semibold text-cream hover:bg-cream/25 transition-colors"
            >
              <span>{t('inquire')}</span>
              <ArrowUpRight size={13} className="text-amber-accent" />
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-cream/15 py-6 text-xs text-cream/65 sm:flex-row sm:justify-between">
          <LanguageSwitcher />
          <p className="text-center text-[0.6875rem] text-cream/50 sm:text-xs sm:text-cream/65">
            © {new Date().getFullYear()} NIRA (Nature Into Renewable Assets). {t('copyright')}
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
      </Container>
    </footer>
  );
}