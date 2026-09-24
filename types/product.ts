export type ProductCategory = "Energy" | "Grow" | "Living" | "Craft";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  description: string;
  materialSource: string;
  process: string;
  sustainabilityValue: string;
  imageUrl: string | null;
  imageAlt: string | null;
  imageNote: string | null;
};

export type Material = {
  id: string;
  name: string;
  slug: string;
  description: string;
  sourcePart: string;
  transformationProcess: string;
  outputProduct: string;
  imageUrl: string | null;
  imageAlt: string | null;
};
