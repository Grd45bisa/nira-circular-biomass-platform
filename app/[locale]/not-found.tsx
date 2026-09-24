import { PageIntro } from "@/components/layout/page-intro";

export default function NotFound() {
  return (
    <PageIntro
      eyebrow="Page not found"
      title="The path is not here"
      description="Return to NIRA to continue exploring the story."
      showPreparationNote={false}
    />
  );
}
