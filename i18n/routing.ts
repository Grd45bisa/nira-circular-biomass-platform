import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['id', 'en'],
  defaultLocale: 'id',
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/about': {id: '/tentang', en: '/about'},
    '/transformation': {id: '/proses', en: '/transformation'},
    '/products': {id: '/produk', en: '/products'},
    '/impact': {id: '/dampak', en: '/impact'},
    '/journal': {id: '/jurnal', en: '/journal'},
    '/journal/[slug]': {id: '/jurnal/[slug]', en: '/journal/[slug]'},
    '/partnership': {id: '/kemitraan', en: '/partnership'},
    '/image-credits': {id: '/kredit-gambar', en: '/image-credits'}
  }
});
