import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "main" | "secondary";

type LightButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2.5 text-button transition-colors";

const variants: Record<Variant, string> = {
  main: "bg-white text-dark px-[18px] py-[14px] hover:bg-white/80",
  secondary:
    "bg-white/[0.04] text-dark-text px-[18px] py-[14px] hover:bg-white/[0.12]",
};

export function LightButton({
  children,
  href,
  variant = "secondary",
  external,
  className = "",
}: LightButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (!href) {
    return <button className={classes}>{children}</button>;
  }

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
