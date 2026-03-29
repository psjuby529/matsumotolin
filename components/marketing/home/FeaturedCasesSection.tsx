import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import type { CaseTeaser } from "@/types/content";

export function FeaturedCasesSection({ items }: { items: CaseTeaser[] }) {
  return (
    <section
      className="border-t border-white/5 py-20 sm:py-28"
      aria-labelledby="featured-cases-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Cases"
          id="featured-cases-heading"
          title="精選案例"
          description="以下為示意條目，圖片與詳情將由後台與媒體庫接入。"
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {items.map((c) => (
            <li
              key={c.id}
              className="overflow-hidden border border-white/8 bg-ml-navy-900/30"
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
                    className="absolute inset-0 ml-leather-bg opacity-80"
                    aria-hidden
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ml-navy-950/90 to-transparent" />
                <p className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.25em] text-ml-gold-300/80">
                  {c.location}
                </p>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-medium tracking-wide text-ml-ivory">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs text-ml-ivory/45">{c.areaLabel}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
