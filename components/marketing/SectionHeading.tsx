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
    <div className="mb-12 max-w-2xl sm:mb-14">
      {eyebrow ? (
        <p className="text-[10px] uppercase tracking-[0.35em] text-ml-gold-400/75">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-4 font-display text-[2.25rem] font-normal tracking-tight text-ml-ivory sm:text-[2.5rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-[13px] leading-relaxed text-ml-ivory/62">
          {description}
        </p>
      ) : null}
    </div>
  );
}
