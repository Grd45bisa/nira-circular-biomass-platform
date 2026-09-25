import type {Metadata} from 'next';
import {Inter, Playfair_Display} from 'next/font/google';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import type {ReactNode} from 'react';

import {SiteFooter} from '@/components/layout/site-footer';
import {SiteHeader} from '@/components/layout/site-header';
import {StructuredData} from '@/components/seo/structured-data';
import {routing} from '@/i18n/routing';
import {getSiteUrl, siteConfig} from '@/lib/site-config';

import '../globals.css';

const inter = Inter({subsets: ['latin'], display: 'swap', variable: '--font-inter'});
const playfair = Playfair_Display({subsets: ['latin'], display: 'swap', variable: '--font-playfair'});

type Props = {children: ReactNode; params: Promise<{locale: string}>};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({locale, namespace: 'home'});
  const siteUrl = getSiteUrl();

  const isId = locale === 'id';
  const title = isId ? 'PANDA COCO | Membuka Nilai Tertinggi di Setiap Serat Kelapa' : 'PANDA COCO | Unlocking High-Performance Value from Coconut Fiber';
  const description = t('metaDescription');

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: '%s | PANDA COCO',
    },
    description,
    applicationName: siteConfig.name,
    authors: [{ name: 'PANDA COCO Team', url: siteUrl }],
    generator: 'Next.js',
    keywords: isId
      ? [
          'PANDA COCO',
          'PANdeglang Domestic Agro COCOnut',
          'biomassa kelapa Pandeglang',
          'Cocofiber mutu ekspor',
          'Cocopeat Low-EC Banten',
          'Green Panel akustik',
          'Bio-Briket 7200 kkal',
          'ekonomi sirkular Banten',
          'Electrifying Agriculture PLN',
          'OPTIMALKAN IBU',
          'agro-industri kelapa Indonesia',
          'Kampung Keboncau Pandeglang'
        ]
      : [
          'PANDA COCO',
          'PANdeglang Domestic Agro COCOnut',
          'circular coconut biomass Indonesia',
          'high-tensile coir fiber exporter',
          'Low-EC cocopeat manufacturer',
          'Green Panel natural acoustic panel',
          'coconut shell bio-briquettes',
          'Electrifying Agriculture clean tech',
          'Pandeglang Banten agro-hub',
          'sustainable coir biomaterials'
        ],
    creator: 'PANDA COCO',
    publisher: 'PANDA COCO',
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      title,
      description,
      url: isId ? siteUrl : `${siteUrl}/en`,
      locale: isId ? 'id_ID' : 'en_US',
      alternateLocale: isId ? ['en_US'] : ['id_ID'],
      images: [
        {
          url: `${siteUrl}/images/coir-fiber.jpg`,
          width: 1200,
          height: 630,
          alt: 'PANDA COCO - Industrial Circular Coconut Biomass Processing',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/images/coir-fiber.jpg`],
    },
    alternates: {
      canonical: isId ? '/' : '/en',
      languages: {
        'id-ID': '/',
        'en-US': '/en',
        'x-default': '/',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      // Geographic / Local SEO Meta Tags
      'geo.region': siteConfig.geo.region,
      'geo.placename': siteConfig.geo.placename,
      'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      'ICBM': siteConfig.geo.icbm,
      // Generative Engine Optimization (AI Crawlers)
      'llms-txt': `${siteUrl}/llms.txt`,
    },
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
      <head>
        <link rel="help" type="text/plain" href="/llms.txt" title="LLM Agent Briefing" />
      </head>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a href="#main-content" className="sr-only fixed top-3 left-3 z-50 rounded-field bg-cream px-4 py-2 text-forest focus:not-sr-only">
            {t('skip')}
          </a>
          <StructuredData locale={locale} type="home" />
          <SiteHeader />
          <main id="main-content" className="flex-1">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
