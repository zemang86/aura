import Image from "next/image";
import Link from "next/link";
import { LightButton } from "./light-button";

const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: "Technology", href: "/technology" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "About", href: "/about" },
];

export function Navigation() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between px-9 py-[26px]">
        <Link href="/" aria-label="AFHE home" className="shrink-0">
          <Image
            src="https://framerusercontent.com/images/9Uc0b3fcfEfYksvwXiMW6L94EBI.png"
            alt="AFHE"
            width={168}
            height={67}
            priority
            unoptimized
          />
        </Link>

        <ul className="hidden items-center gap-[39px] md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                className="font-display text-[16px] font-medium tracking-tight text-dark-text/90 transition-colors hover:text-dark-text"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <LightButton href="https://docs.afhe.io" variant="secondary" external>
          Read Docs
        </LightButton>
      </nav>
    </header>
  );
}
