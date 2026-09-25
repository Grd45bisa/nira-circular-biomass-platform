import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  showPreparationNote?: boolean;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  showPreparationNote = true,
}: PageIntroProps) {
  return (
    <section className="nira-section">
      <Container>
        <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-coconut uppercase md:mb-6">
          {eyebrow}
        </p>
        <h1 className="type-page-title max-w-[15ch] text-forest">{title}</h1>
        <p className="type-lead mt-6 max-w-[65ch] text-ink-muted">
          {description}
        </p>
        {showPreparationNote ? (
          <p className="type-small mt-8 max-w-[65ch] text-coconut">
            This chapter is being prepared with verified PANDA COCO content.
          </p>
        ) : null}
        <ButtonLink href="/" variant="text" className="mt-8">
          Return to PANDA COCO
        </ButtonLink>
      </Container>
    </section>
  );
}
