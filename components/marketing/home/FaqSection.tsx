import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import type { FaqItem } from "@/types/content";

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section
      className="border-t border-white/5 py-20 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          id="faq-heading"
          title="常見問題"
        />
        <div className="divide-y divide-white/8 border border-white/8">
          {items.map((item) => (
            <details
              key={item.id}
              className="group bg-ml-navy-900/20 px-5 py-4 open:bg-ml-navy-900/35"
            >
              <summary className="cursor-pointer list-none text-sm font-medium tracking-wide text-ml-ivory [&::-webkit-details-marker]:hidden">
                {item.question}
              </summary>
              <p className="mt-3 pb-1 text-sm leading-relaxed text-ml-ivory/58">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
