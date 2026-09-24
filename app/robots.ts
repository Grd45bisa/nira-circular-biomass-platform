import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.SITE_URL?.trim();
  return {
    rules: siteUrl
      ? { userAgent: "*", allow: "/", disallow: "/image-credits" }
      : { userAgent: "*", disallow: "/" },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
