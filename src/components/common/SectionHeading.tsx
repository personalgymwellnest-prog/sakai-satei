interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs sm:text-sm font-bold tracking-widest ${
            light ? "text-accent-100" : "text-accent-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl font-bold ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-sm sm:text-base leading-relaxed ${
            light ? "text-navy-100" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
