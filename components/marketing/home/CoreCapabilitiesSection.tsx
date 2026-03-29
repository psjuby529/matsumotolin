import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import type { CoreCapability } from "@/types/content";

export function CoreCapabilitiesSection({
  items,
}: {
  items: CoreCapability[];
}) {
  return (
    <section
      className="border-t border-white/5 py-20 sm:py-28"
      aria-labelledby="core-capabilities-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Core"
          id="core-capabilities-heading"
          title="三大核心能力"
          description="設計敘事、資料結構與專案治理，支撐可長期營運的品牌型交付。"
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={item.id}
              className="group border border-white/8 bg-ml-navy-900/40 p-6 transition-colors hover:border-ml-gold-400/20"
            >
              <span className="font-display text-sm text-ml-gold-400/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-medium tracking-wide text-ml-ivory">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ml-ivory/58">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
