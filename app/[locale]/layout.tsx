import type {Metadata} from 'next';
import {Inter, Playfair_Display} from 'next/font/google';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import type {ReactNode} from 'react';

import {SiteFooter} from '@/components/layout/site-footer';
import {SiteHeader} from '@/components/layout/site-header';
import {routing} from '@/i18n/routing';

import '../globals.css';

const inter = Inter({subsets: ['latin'], display: 'swap', variable: '--font-inter'});
const playfair = Playfair_Display({subsets: ['latin'], display: 'swap', variable: '--font-playfair'});
const siteUrl = process.env.SITE_URL?.trim();

type Props = {children: ReactNode; params: Promise<{locale: string}>};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({locale, namespace: 'home'});

  return {
    metadataBase: new URL(siteUrl || 'http://localhost:3000'),
    title: {default: t('metaTitle'), template: '%s | PANDA COCO'},
    description: t('metaDescription'),
    openGraph: {
      type: 'website', siteName: 'PANDA COCO',
      title: t('metaTitle'), description: t('metaDescription'), locale: locale === 'id' ? 'id_ID' : 'en_US'
    },
    keywords: locale === 'id'
      ? ['PANDA COCO', 'biomassa kelapa Pandeglang', 'Cocofiber', 'Cocopeat Low-EC', 'Green Panel', 'Bio-Briket', 'ekonomi sirkular Banten', 'Electrifying Agriculture', 'OPTIMALKAN IBU']
      : ['PANDA COCO', 'circular coconut biomass', 'Cocofiber exporter', 'Low-EC Cocopeat', 'Green Panel biocomposite', 'Electrifying Agriculture', 'Indonesia circular agro-industry'],
    alternates: {
      canonical: locale === 'id' ? '/' : '/en',
      languages: {'id-ID': '/', en: '/en', 'x-default': '/'}
    },
    robots: {index: Boolean(siteUrl), follow: Boolean(siteUrl)}
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages({locale});
  const t = await getTranslations({locale, namespace: 'common'});

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a href="#main-content" className="sr-only fixed top-3 left-3 z-50 rounded-field bg-cream px-4 py-2 text-forest focus:not-sr-only">
            {t('skip')}
          </a>
          <SiteHeader />
          <main id="main-content" className="flex-1">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
