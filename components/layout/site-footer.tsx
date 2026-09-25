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
        <div className="flex flex-col items-center gap-6 py-6 sm:py-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center text-center max-w-sm lg:items-start lg:text-left">
            <div className="flex items-center justify-center gap-2">
              <div className="relative flex h-6 w-6 items-center justify-center rounded-full overflow-hidden border border-cream/25 shadow-xs shrink-0">
                <Image
                  src="/images/nira-logo-mark.webp"
                  alt="PANDA COCO logo mark"
                  width={24}
                  height={24}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-display text-base font-semibold tracking-wide text-cream">
                PANDA COCO
              </span>
            </div>
            <p className="mt-2 text-xs italic text-cream/75">
              &ldquo;{t('tagline')}&rdquo;
            </p>
            <p className="mt-0.5 text-[0.6875rem] text-cream/50">
              PANdeglang Domestic Agro COCOnut · {t('brandDescription')}
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label={t('explore')}
            className="flex flex-col items-center gap-2.5 lg:items-end"
          >
            <h2 className="text-[0.625rem] font-bold tracking-[0.18em] text-amber-accent uppercase">
              {t('explore')}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-cream/80 lg:justify-end">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-0.5 hover:text-cream transition-colors"
                >
                  {nav(item.key)}
                </Link>
              ))}
            </div>
            <Link
              href="/partnership"
              className="inline-flex items-center gap-1.5 rounded-full bg-cream/15 px-3 py-1 text-xs font-semibold text-cream hover:bg-cream/25 transition-colors mt-0.5"
            >
              <span>{t('inquire')}</span>
              <ArrowUpRight size={12} className="text-amber-accent" />
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 border-t border-cream/10 py-4 text-[0.6875rem] text-cream/50 sm:flex-row sm:justify-between">
          <LanguageSwitcher />
          <p className="text-center text-[0.6875rem] text-cream/50 sm:text-xs">
            © {new Date().getFullYear()} PANDA COCO (PANdeglang Domestic Agro COCOnut). {t('copyright')}
          </p>
          <div className="flex items-center gap-5 text-xs">
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