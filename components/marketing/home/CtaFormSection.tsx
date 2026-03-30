import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { LeadForm } from "@/components/marketing/forms/LeadForm";
import Link from "next/link";

export function CtaFormSection({
  heading,
  body,
  primaryCta,
  secondaryCta,
}: {
  heading: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
}) {
  return (
    <section
      id="lead-form"
      className="border-t border-white/5 bg-ml-navy-900/10 py-24 sm:py-32"
      aria-labelledby="cta-form-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          id="cta-form-heading"
          title={heading}
          description={body}
        />
        <div className="mb-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact#lead-form"
            className="inline-flex items-center justify-center rounded-sm border border-ml-gold-400/40 bg-ml-gold-400/8 px-8 py-3 text-xs tracking-[0.2em] text-ml-gold-200 transition-colors hover:bg-ml-gold-400/12 hover:border-ml-gold-400/55"
          >
            {primaryCta}
          </Link>
          <Link
            href="/contact#upload"
            className="inline-flex items-center justify-center rounded-sm border border-white/14 bg-transparent px-8 py-3 text-xs tracking-[0.2em] text-ml-ivory/78 transition-colors hover:border-ml-gold-400/30 hover:bg-white/0"
          >
            {secondaryCta}
          </Link>
        </div>
        <div className="mx-auto max-w-2xl rounded-xl border border-white/10 bg-ml-navy-900/30 p-6 sm:p-8">
          <LeadForm id="home-lead-form" formName="home_lead" />
        </div>
      </Container>
    </section>
  );
}
