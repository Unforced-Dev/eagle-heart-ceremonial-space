
interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center" | "right";
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  alignment = "center",
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}>
      {subtitle && (
        <p className="text-eagle-gold-600 font-medium uppercase tracking-wider text-sm mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-eagle-blue-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-eagle-blue-700 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
