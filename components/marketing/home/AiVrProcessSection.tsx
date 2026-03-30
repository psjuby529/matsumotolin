import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import type { ProcessStep } from "@/types/content";

export function AiVrProcessSection({
  steps,
  heading,
  subtitle,
}: {
  steps: ProcessStep[];
  heading: string;
  subtitle: string;
}) {
  return (
    <section
      className="border-t border-white/5 bg-ml-navy-900/20 py-24 sm:py-32"
      aria-labelledby="ai-vr-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="AI · VR"
          id="ai-vr-heading"
          title={heading}
          description={subtitle}
        />
        <ol className="mt-10 grid gap-3 sm:gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className="flex gap-4 rounded-xl border border-white/10 bg-ml-navy-950/35 p-4 transition-colors hover:border-ml-gold-400/20 sm:p-5"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ml-gold-400/25 bg-ml-gold-400/8 font-display text-[12px] text-ml-gold-200"
                aria-hidden
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-[13px] font-medium tracking-wide text-ml-ivory">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ml-ivory/62">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
