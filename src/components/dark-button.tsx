import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "main" | "secondary";

type DarkButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2.5 text-button transition-colors px-5 py-4";

const variants: Record<Variant, string> = {
  main: "bg-dark text-dark-text hover:opacity-80",
  secondary:
    "bg-transparent text-dark border border-dark/20 hover:bg-dark hover:text-dark-text hover:border-dark",
};

export function DarkButton({
  children,
  href,
  variant = "main",
  external,
  className = "",
}: DarkButtonProps) {
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
