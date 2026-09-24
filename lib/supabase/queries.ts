import { cache } from "react";

import type { Database } from "@/types/database";
import type { CommunityStory } from "@/types/community";
import type { ImpactMetric } from "@/types/impact";
import type { Article } from "@/types/journal";
import type { Partner } from "@/types/partner";
import type { Material, Product } from "@/types/product";

import {
  FALLBACK_ARTICLES,
  FALLBACK_COMMUNITY_STORIES,
  FALLBACK_IMPACT_METRICS,
  FALLBACK_MATERIALS,
  FALLBACK_PARTNERS,
  FALLBACK_PRODUCTS,
} from "@/lib/data/fallback";

import { createClient } from "./server";

type ProductRow = Database["public"]["Tables"]["products"]["Row"];
type MaterialRow = Database["public"]["Tables"]["materials"]["Row"];
type ImpactMetricRow = Database["public"]["Tables"]["impact_metrics"]["Row"];
type CommunityRow = Database["public"]["Tables"]["community"]["Row"];
type JournalRow = Database["public"]["Tables"]["journal"]["Row"];
type PartnerRow = Database["public"]["Tables"]["partners"]["Row"];

function toProduct(row: ProductRow): Product {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    category: row.category,
    description: row.description,
    materialSource: row.material_source,
    process: row.process,
    sustainabilityValue: row.sustainability_value,
    imageUrl: row.image_url,
    imageAlt: row.image_alt,
    imageNote: row.image_note,
  };
}

function toMaterial(row: MaterialRow): Material {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description,
    sourcePart: row.source_part,
    transformationProcess: row.transformation_process,
    outputProduct: row.output_product,
    imageUrl: row.image_url,
    imageAlt: row.image_alt,
  };
}

function toImpactMetric(row: ImpactMetricRow): ImpactMetric {
  return {
    id: row.id,
    category: row.category,
    metricName: row.metric_name,
    value: row.value,
    unit: row.unit,
    description: row.description,
    year: row.year,
  };
}

function toCommunityStory(row: CommunityRow): CommunityStory {
  return {
    id: row.id,
    name: row.name,
    location: row.location,
    role: row.role,
    story: row.story,
    impactDescription: row.impact_description,
    imageUrl: row.image_url,
    imageAlt: row.image_alt,
  };
}

function toArticle(row: JournalRow): Article {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content: row.content,
    thumbnailUrl: row.thumbnail_url,
    thumbnailAlt: row.thumbnail_alt,
    category: row.category,
    publishedAt: row.published_at,
  };
}

function toPartner(row: PartnerRow): Partner {
  return {
    id: row.id,
    name: row.name,
    organization: row.organization,
    category: row.category,
    logoUrl: row.logo_url,
    logoAlt: row.logo_alt,
    description: row.description,
  };
}

/**
 * All reads below fail soft with graceful fallback to curated data:
 * If Supabase is unconfigured, unreachable, or returns an empty table,
 * the site displays the rich, verified fallback content rather than
 * broken or empty states.
 */

export const getProducts = cache(async (): Promise<Product[]> => {
  const supabase = createClient();
  if (!supabase) return FALLBACK_PRODUCTS;

  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("is_published", true)
      .order("display_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return FALLBACK_PRODUCTS;
    }
    return data.map(toProduct);
  } catch (err) {
    console.error("getProducts failed, using fallback:", err);
    return FALLBACK_PRODUCTS;
  }
});

export const getProductBySlug = cache(
  async (slug: string): Promise<Product | null> => {
    const products = await getProducts();
    return products.find((p) => p.slug === slug) ?? null;
  },
);

export const getMaterials = cache(async (): Promise<Material[]> => {
  const supabase = createClient();
  if (!supabase) return FALLBACK_MATERIALS;

  try {
    const { data, error } = await supabase
      .from("materials")
      .select("*")
      .eq("is_published", true)
      .order("display_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return FALLBACK_MATERIALS;
    }
    return data.map(toMaterial);
  } catch (err) {
    console.error("getMaterials failed, using fallback:", err);
    return FALLBACK_MATERIALS;
  }
});

export const getImpactMetrics = cache(async (): Promise<ImpactMetric[]> => {
  const supabase = createClient();
  if (!supabase) return FALLBACK_IMPACT_METRICS;

  try {
    const { data, error } = await supabase
      .from("impact_metrics")
      .select("*")
      .eq("is_published", true)
      .order("year", { ascending: false });

    if (error || !data || data.length === 0) {
      return FALLBACK_IMPACT_METRICS;
    }
    return data.map(toImpactMetric);
  } catch (err) {
    console.error("getImpactMetrics failed, using fallback:", err);
    return FALLBACK_IMPACT_METRICS;
  }
});

export const getCommunityStories = cache(
  async (): Promise<CommunityStory[]> => {
    const supabase = createClient();
    if (!supabase) return FALLBACK_COMMUNITY_STORIES;

    try {
      const { data, error } = await supabase
        .from("community")
        .select("*")
        .eq("is_published", true)
        .order("display_order", { ascending: true });

      if (error || !data || data.length === 0) {
        return FALLBACK_COMMUNITY_STORIES;
      }
      return data.map(toCommunityStory);
    } catch (err) {
      console.error("getCommunityStories failed, using fallback:", err);
      return FALLBACK_COMMUNITY_STORIES;
    }
  },
);

export const getArticles = cache(async (): Promise<Article[]> => {
  const supabase = createClient();
  if (!supabase) return FALLBACK_ARTICLES;

  try {
    const { data, error } = await supabase
      .from("journal")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false });

    if (error || !data || data.length === 0) {
      return FALLBACK_ARTICLES;
    }
    return data.map(toArticle);
  } catch (err) {
    console.error("getArticles failed, using fallback:", err);
    return FALLBACK_ARTICLES;
  }
});

export const getArticleBySlug = cache(
  async (slug: string): Promise<Article | null> => {
    const articles = await getArticles();
    return articles.find((a) => a.slug === slug) ?? null;
  },
);

export const getPartners = cache(async (): Promise<Partner[]> => {
  const supabase = createClient();
  if (!supabase) return FALLBACK_PARTNERS;

  try {
    const { data, error } = await supabase
      .from("partners")
      .select("*")
      .eq("is_published", true)
      .order("display_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return FALLBACK_PARTNERS;
    }
    return data.map(toPartner);
  } catch (err) {
    console.error("getPartners failed, using fallback:", err);
    return FALLBACK_PARTNERS;
  }
});
