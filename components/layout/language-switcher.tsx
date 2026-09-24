'use client';

import {useLocale, useTranslations} from 'next-intl';
import {useParams} from 'next/navigation';
import {useTransition} from 'react';

import {usePathname, useRouter} from '@/i18n/navigation';

import {cn} from '@/lib/utils';

export function LanguageSwitcher({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  const locale = useLocale();
  const t = useTranslations('common');
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [pending, startTransition] = useTransition();

  function changeLocale(nextLocale: 'id' | 'en') {
    if (nextLocale === locale) return;
    startTransition(() => {
      if (pathname === '/journal/[slug]') {
        router.replace({pathname, params: {slug: String(params.slug)}}, {locale: nextLocale});
      } else {
        router.replace(pathname as any, {locale: nextLocale});
      }
    });
  }

  return (
    <div
      role="group"
      aria-label={t('language')}
      className={cn(
        "inline-flex items-center rounded-full p-0.5 select-none transition-colors",
        light
          ? "border border-coconut/20 bg-sand/70 text-forest shadow-2xs"
          : "border border-cream/20 bg-cream/10 text-cream backdrop-blur-xs",
        className,
      )}
    >
      {(['id', 'en'] as const).map((option) => {
        const isActive = locale === option;
        return (
          <button
            key={option}
            type="button"
            disabled={pending}
            aria-pressed={isActive}
            aria-label={option === 'id' ? 'Bahasa Indonesia' : 'English'}
            onClick={() => changeLocale(option)}
            className={cn(
              "relative flex h-7 min-w-8 items-center justify-center rounded-full px-2.5 text-[0.6875rem] font-semibold tracking-wider uppercase transition-all duration-200",
              isActive
                ? light
                  ? "bg-forest text-cream font-bold shadow-xs"
                  : "bg-cream text-forest font-bold shadow-xs"
                : light
                  ? "text-forest/70 hover:text-forest hover:bg-coconut/10 active:scale-95"
                  : "text-cream/70 hover:text-white hover:bg-cream/15 active:scale-95",
              pending && "opacity-60 cursor-not-allowed",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
