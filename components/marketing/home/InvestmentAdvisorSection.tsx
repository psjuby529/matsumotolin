import { Container } from "@/components/ui/Container";
import Link from "next/link";
import type { InvestmentModuleContent } from "@/types/content";

export function InvestmentAdvisorSection({
  data,
}: {
  data: InvestmentModuleContent;
}) {
  return (
    <section
      className="border-t border-white/5 bg-gradient-to-b from-ml-navy-900/25 to-ml-navy-950 py-24 sm:py-32"
      aria-labelledby="investment-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-ml-gold-400/80">
              {data.eyebrow}
            </p>
            <h2
              id="investment-heading"
              className="mt-4 font-display text-3xl font-normal tracking-tight text-ml-ivory sm:text-[2.15rem]"
            >
              {data.title}
            </h2>
            <div className="mt-7 space-y-4 text-sm leading-relaxed text-ml-ivory/60">
              {data.body.map((p, i) => (
                <p key={`inv-body-${i}`}>{p}</p>
              ))}
            </div>
            <Link
              href={data.cta.href}
              className="mt-8 inline-flex rounded-sm border border-white/15 bg-transparent px-5 py-2 text-xs tracking-[0.18em] text-ml-gold-300/75 transition-colors hover:border-ml-gold-400/35 hover:text-ml-gold-200"
            >
              {data.cta.label}
            </Link>
          </div>
          <ul className="space-y-4">
            {data.highlights.map((h) => (
              <li
                key={h.title}
                className="rounded-xl border border-white/10 bg-ml-navy-950/45 p-6"
              >
                <h3 className="text-[13px] font-medium text-ml-gold-200/90">
                  {h.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ml-ivory/62">
                  {h.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
