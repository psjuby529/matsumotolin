import { Container } from "@/components/ui/Container";
import type { InvestmentModuleContent } from "@/types/content";

export function InvestmentAdvisorSection({
  data,
}: {
  data: InvestmentModuleContent;
}) {
  return (
    <section
      className="border-t border-white/5 bg-gradient-to-b from-ml-navy-900/40 to-ml-navy-950 py-20 sm:py-28"
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
              className="mt-3 font-display text-3xl font-normal tracking-tight text-ml-ivory sm:text-[2rem]"
            >
              {data.title}
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ml-ivory/60">
              {data.body.map((p, i) => (
                <p key={`inv-body-${i}`}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="space-y-4">
            {data.highlights.map((h) => (
              <li
                key={h.title}
                className="border border-white/8 bg-ml-navy-950/60 p-5"
              >
                <h3 className="text-sm font-medium text-ml-gold-200/90">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ml-ivory/55">
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
