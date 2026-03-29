import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { LeadForm } from "@/components/marketing/forms/LeadForm";

export function CtaFormSection() {
  return (
    <section
      id="lead-form"
      className="border-t border-white/5 py-20 sm:py-28"
      aria-labelledby="cta-form-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          id="cta-form-heading"
          title="與顧問對齊需求"
          description="留下結構化需求，讓顧問能精準與您對齊下一步與時程。"
        />
        <div className="mx-auto max-w-2xl border border-white/10 bg-ml-navy-900/35 p-6 sm:p-8">
          <LeadForm id="home-lead-form" formName="home_lead" />
        </div>
      </Container>
    </section>
  );
}
