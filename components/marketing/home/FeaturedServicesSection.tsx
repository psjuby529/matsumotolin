import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import type { ServiceTeaser } from "@/types/content";

export function FeaturedServicesSection({
  items,
  heading,
  footer,
}: {
  items: ServiceTeaser[];
  heading: string;
  footer: string;
}) {
  return (
    <section
      className="border-t border-white/5 py-24 sm:py-32"
      aria-labelledby="featured-services-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Services"
          id="featured-services-heading"
          title={heading}
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col rounded-xl border border-white/10 bg-ml-navy-900/25 p-7 transition-colors hover:border-ml-gold-400/25"
            >
              <h3 className="text-[15px] font-medium text-ml-ivory">{item.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ml-ivory/62">
                {item.summary}
              </p>
              <Link
                href={item.href}
                className="mt-6 inline-flex text-xs tracking-[0.2em] text-ml-gold-300/75 hover:text-ml-gold-200"
              >
                了解細節 →
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm leading-relaxed text-ml-ivory/62">{footer}</p>
      </Container>
    </section>
  );
}
