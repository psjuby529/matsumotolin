import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import type { CaseTeaser } from "@/types/content";

export function FeaturedCasesSection({
  items,
  heading,
  subtitle,
}: {
  items: CaseTeaser[];
  heading: string;
  subtitle: string;
}) {
  return (
    <section
      className="border-t border-white/5 py-24 sm:py-32"
      aria-labelledby="featured-cases-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Cases"
          id="featured-cases-heading"
          title={heading}
          description={subtitle}
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {items.map((c) => (
            <li
              key={c.id}
              className="overflow-hidden rounded-xl border border-white/10 bg-ml-navy-900/25 transition-colors hover:border-ml-gold-400/20"
            >
              <div className="relative aspect-[4/3] bg-ml-navy-800">
                {c.coverImageUrl ? (
                  <Image
                    src={c.coverImageUrl}
                    alt={c.coverAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                ) : (
                  <div
                    className="absolute inset-0 ml-leather-bg opacity-70"
                    aria-hidden
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ml-navy-950/90 to-transparent" />
                <p className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.25em] text-ml-gold-300/80">
                  {c.location}
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-[15px] font-medium tracking-wide text-ml-ivory">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ml-ivory/45">
                  {c.areaLabel}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
