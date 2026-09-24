'use client';

import {useLocale, useTranslations} from 'next-intl';
import {useParams} from 'next/navigation';
import {useTransition} from 'react';

import {usePathname, useRouter} from '@/i18n/navigation';

export function LanguageSwitcher({light = false}: {light?: boolean}) {
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
        router.replace(pathname, {locale: nextLocale});
      }
    });
  }

  return (
    <div role="group" aria-label={t('language')} className={`inline-flex items-center rounded-pill border p-0.5 text-xs font-bold tracking-wider ${light ? 'border-coconut/25 bg-sand/50 text-forest' : 'border-cream/30 bg-cream/10 text-cream'}`}>
      {(['id', 'en'] as const).map((option) => (
        <button
          key={option}
          type="button"
          disabled={pending}
          aria-pressed={locale === option}
          aria-label={option === 'id' ? 'Bahasa Indonesia' : 'English'}
          onClick={() => changeLocale(option)}
          className={`min-h-8 min-w-9 rounded-pill px-2 transition-colors ${locale === option ? (light ? 'bg-forest text-cream' : 'bg-cream text-forest') : (light ? 'hover:bg-coconut/10' : 'hover:bg-cream/15')}`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
