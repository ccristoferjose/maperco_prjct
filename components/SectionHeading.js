/**
 * Encabezado de sección reutilizable.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignment = align === "left" ? "text-left" : "text-center mx-auto";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={`mt-3 text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-lg leading-8 ${
            light ? "text-white/70" : "text-ink/65"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
