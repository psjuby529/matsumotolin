import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import type { ServiceTeaser } from "@/types/content";

export function FeaturedServicesSection({
  items,
}: {
  items: ServiceTeaser[];
}) {
  return (
    <section
      className="border-t border-white/5 py-20 sm:py-28"
      aria-labelledby="featured-services-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Services"
          id="featured-services-heading"
          title="精選服務"
          description="依專案階段組合模組；完整服務線請見服務頁。"
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col border border-white/8 bg-gradient-to-b from-white/[0.03] to-transparent p-6"
            >
              <h3 className="text-base font-medium text-ml-ivory">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ml-ivory/58">
                {item.summary}
              </p>
              <Link
                href={item.href}
                className="mt-6 inline-flex text-xs tracking-[0.2em] text-ml-gold-300/90 hover:text-ml-gold-200"
              >
                了解細節 →
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
