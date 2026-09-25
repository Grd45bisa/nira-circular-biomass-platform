/**
 * Centralized Site, SEO, and Geographic Configuration for PANDA COCO
 * Provides reliable canonical URLs, Geo coordinates, and Brand metadata.
 */

export function getSiteUrl(): string {
  if (process.env.SITE_URL && process.env.SITE_URL.trim() !== '') {
    return process.env.SITE_URL.trim().replace(/\/+$/, '');
  }
  if (process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.trim() !== '') {
    return process.env.NEXT_PUBLIC_SITE_URL.trim().replace(/\/+$/, '');
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Production default fallback
  return 'https://nira-nature.vercel.app';
}

export const siteConfig = {
  name: 'PANDA COCO',
  legalName: 'PANDA COCO (PANdeglang Domestic Agro COCOnut)',
  tagline: 'Membuka Nilai Tertinggi di Setiap Serat Kelapa · Unlocking High-Performance Value from Every Coconut Fiber',
  description: 'Circular Agro-Biomass Platform & Clean Technology Processing Hub unlocking high-performance biomaterials from coconut fiber in Pandeglang, Banten, Indonesia.',
  url: getSiteUrl(),
  logo: '/images/panda-logo-badge.png',
  ogImage: '/images/coir-fiber.jpg',
  geo: {
    region: 'ID-BT',
    placename: 'Pandeglang, Banten, Indonesia',
    latitude: -6.3088,
    longitude: 106.1066,
    icbm: '-6.3088, 106.1066',
    address: {
      streetAddress: 'Kampung Keboncau',
      addressLocality: 'Kelurahan Pandeglang, Kabupaten Pandeglang',
      addressRegion: 'Banten',
      postalCode: '42211',
      addressCountry: 'ID'
    }
  },
  contact: {
    email: 'partnership@pandacoco.id',
    phone: '+62-812-8888-0000',
    areaServed: ['Indonesia', 'ASEAN', 'Global Export Markets']
  },
  social: {
    instagram: 'https://instagram.com/pandacoco.id',
    linkedin: 'https://linkedin.com/company/panda-coco'
  }
};
