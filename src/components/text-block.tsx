import type { ReactNode } from "react";

type TextBlockProps = {
  preHeading?: string;
  children: ReactNode;
  align?: "center" | "start";
  className?: string;
};

export function TextBlock({
  preHeading,
  children,
  align = "center",
  className = "",
}: TextBlockProps) {
  const alignClass = align === "center" ? "items-center" : "items-start";
  const textAlignClass = align === "center" ? "text-center" : "text-left";

  return (
    <section className={`w-full bg-white py-[60px] ${className}`}>
      <div
        className={`mx-auto flex max-w-[1400px] flex-col gap-6 px-5 md:px-9 ${alignClass}`}
      >
        {preHeading && (
          <p className="text-pre-heading-16 text-accent-1">{preHeading}</p>
        )}
        <div
          className={`text-p16 max-w-[1128px] text-dark/80 ${textAlignClass}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
