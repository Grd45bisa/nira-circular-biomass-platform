import type { MetadataRoute } from "next";

import { getArticles } from "@/lib/supabase/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.SITE_URL?.trim();
  if (!siteUrl) return [];
  const articles = await getArticles();
  const routes = [
    "",
    "/about",
    "/transformation",
    "/products",
    "/impact",
    "/journal",
    "/partnership",
    ...articles.map(({ slug }) => `/journal/${slug}`),
  ];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly" as const,
  }));
}
