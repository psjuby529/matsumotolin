import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import type { CoreCapability } from "@/types/content";

export function CoreCapabilitiesSection({
  items,
  heading,
  brandValue,
}: {
  items: CoreCapability[];
  heading: string;
  brandValue: { heading: string; body1: string; body2: string };
}) {
  return (
    <section
      className="border-t border-white/5 py-24 sm:py-32"
      aria-labelledby="core-capabilities-heading"
    >
      <Container>
        <div className="max-w-xl">
          <SectionHeading
            eyebrow="Core"
            id="core-capabilities-heading"
            title={heading}
            description={`${brandValue.heading} ${brandValue.body1} ${brandValue.body2}`}
          />
        </div>
        <ul className="mt-10 grid gap-7 md:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={item.id}
              className="group rounded-xl border border-white/10 bg-ml-navy-900/25 p-7 transition-colors hover:border-ml-gold-400/25"
            >
              <span className="font-display text-xs tracking-[0.12em] text-ml-gold-400/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[15px] font-medium tracking-wide text-ml-ivory">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ml-ivory/62">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
