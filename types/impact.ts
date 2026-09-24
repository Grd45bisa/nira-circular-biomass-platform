export type ImpactCategory = "Environmental" | "Social" | "Economic";

export type ImpactMetric = {
  id: string;
  category: ImpactCategory;
  metricName: string;
  value: number | null;
  unit: string | null;
  description: string;
  year: number | null;
};
