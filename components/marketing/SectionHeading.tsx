export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="text-[10px] uppercase tracking-[0.35em] text-ml-gold-400/80">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-3 font-display text-3xl font-normal tracking-tight text-ml-ivory sm:text-[2rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-ml-ivory/60">{description}</p>
      ) : null}
    </div>
  );
}
