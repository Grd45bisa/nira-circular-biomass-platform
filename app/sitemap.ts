import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-config";
import { getArticles } from "@/lib/supabase/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const articles = await getArticles();

  const routes = [
    {
      idPath: "/",
      enPath: "/en",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      idPath: "/tentang",
      enPath: "/en/about",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      idPath: "/proses",
      enPath: "/en/transformation",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      idPath: "/produk",
      enPath: "/en/products",
      priority: 0.95,
      changeFrequency: "weekly" as const,
    },
    {
      idPath: "/dampak",
      enPath: "/en/impact",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      idPath: "/jurnal",
      enPath: "/en/journal",
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    {
      idPath: "/kemitraan",
      enPath: "/en/partnership",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Static routes (both id and en)
  for (const r of routes) {
    const idUrl = `${siteUrl}${r.idPath === "/" ? "" : r.idPath}`;
    const enUrl = `${siteUrl}${r.enPath}`;

    // Indonesian version
    entries.push({
      url: idUrl,
      lastModified: new Date(),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      alternates: {
        languages: {
          id: idUrl,
          en: enUrl,
          "x-default": idUrl,
        },
      },
    });

    // English version
    entries.push({
      url: enUrl,
      lastModified: new Date(),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      alternates: {
        languages: {
          id: idUrl,
          en: enUrl,
          "x-default": idUrl,
        },
      },
    });
  }

  // Dynamic journal articles
  for (const article of articles) {
    const idUrl = `${siteUrl}/jurnal/${article.slug}`;
    const enUrl = `${siteUrl}/en/journal/${article.slug}`;
    const lastMod = article.publishedAt ? new Date(article.publishedAt) : new Date();

    entries.push({
      url: idUrl,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          id: idUrl,
          en: enUrl,
          "x-default": idUrl,
        },
      },
    });

    entries.push({
      url: enUrl,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          id: idUrl,
          en: enUrl,
          "x-default": idUrl,
        },
      },
    });
  }

  return entries;
}
