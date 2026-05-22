"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LightButton } from "./light-button";

const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: "Technology", href: "/technology" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "About", href: "/about" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between px-5 py-[18px] md:px-9 md:py-[26px]">
        <Link
          href="/"
          aria-label="AFHE home"
          className="shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="https://framerusercontent.com/images/9Uc0b3fcfEfYksvwXiMW6L94EBI.png"
            alt="AFHE"
            width={168}
            height={67}
            priority
            unoptimized
            className="h-[44px] w-auto md:h-[67px]"
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

        <div className="hidden md:block">
          <LightButton href="https://docs.afhe.io" variant="secondary" external>
            Read Docs
          </LightButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-dark-text md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-6 -translate-y-1/2 bg-current transition-transform duration-200 ${
                open ? "rotate-45" : "-translate-y-[7px]"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-6 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-6 -translate-y-1/2 bg-current transition-transform duration-200 ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-dark md:hidden">
          <ul className="flex flex-col px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-[18px] font-medium tracking-tight text-dark-text/90 transition-colors hover:text-dark-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <LightButton
                href="https://docs.afhe.io"
                variant="secondary"
                external
              >
                Read Docs
              </LightButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
