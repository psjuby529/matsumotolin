import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import type { ProcessStep } from "@/types/content";

export function AiVrProcessSection({ steps }: { steps: ProcessStep[] }) {
  return (
    <section
      className="border-t border-white/5 bg-ml-navy-900/25 py-20 sm:py-28"
      aria-labelledby="ai-vr-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="AI · VR"
          id="ai-vr-heading"
          title="AI 與 VR 流程簡介"
          description="以結構化輸入與可漫步模型，讓決策可被校準、被記錄、被延續。"
        />
        <ol className="grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className="flex gap-4 border border-white/6 bg-ml-navy-950/50 p-5"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ml-gold-400/25 text-xs text-ml-gold-300"
                aria-hidden
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-sm font-medium tracking-wide text-ml-ivory">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ml-ivory/58">
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
