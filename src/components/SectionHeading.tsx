type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.2em] text-sky-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
      {subtitle && (
        <p className="text-base text-slate-600 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

