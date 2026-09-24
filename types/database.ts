export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          name: string;
          slug: string;
          category: "Energy" | "Grow" | "Living" | "Craft";
          description: string;
          material_source: string;
          process: string;
          sustainability_value: string;
          image_url: string | null;
          image_alt: string | null;
          image_note: string | null;
          display_order: number;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
      };
      materials: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string;
          source_part: string;
          transformation_process: string;
          output_product: string;
          image_url: string | null;
          image_alt: string | null;
          display_order: number;
          is_published: boolean;
          created_at: string;
        };
      };
      impact_metrics: {
        Row: {
          id: string;
          category: "Environmental" | "Social" | "Economic";
          metric_name: string;
          value: number | null;
          unit: string | null;
          description: string;
          year: number | null;
          is_published: boolean;
          created_at: string;
        };
      };
      community: {
        Row: {
          id: string;
          name: string;
          location: string | null;
          role: string | null;
          story: string;
          impact_description: string | null;
          image_url: string | null;
          image_alt: string | null;
          display_order: number;
          is_published: boolean;
          created_at: string;
        };
      };
      journal: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          thumbnail_url: string | null;
          thumbnail_alt: string | null;
          category: string;
          published_at: string | null;
          is_published: boolean;
          created_at: string;
        };
      };
      partners: {
        Row: {
          id: string;
          name: string;
          organization: string | null;
          category: string;
          logo_url: string | null;
          logo_alt: string | null;
          description: string;
          display_order: number;
          is_published: boolean;
          created_at: string;
        };
      };
      inquiries: {
        Row: {
          id: string;
          name: string;
          organization: string | null;
          email: string;
          message: string;
          status: "new" | "in_review" | "closed";
          created_at: string;
        };
        Insert: {
          name: string;
          organization?: string | null;
          email: string;
          message: string;
        };
      };
    };
  };
};
