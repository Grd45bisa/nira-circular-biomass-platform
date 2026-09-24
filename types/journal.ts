export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnailUrl: string | null;
  thumbnailAlt: string | null;
  category: string;
  publishedAt: string | null;
};
