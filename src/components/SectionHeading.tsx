import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium text-clay-dark">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
        {heading}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate">
          {description}
        </p>
      )}
    </div>
  );
}
