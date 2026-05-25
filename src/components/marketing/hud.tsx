"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LOGO_SRC =
  "https://framerusercontent.com/images/9Uc0b3fcfEfYksvwXiMW6L94EBI.png";

const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: "Technology", href: "/technology" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

type HUDProps = {
  variant?: "home" | "inner";
};

export function HUD({ variant }: HUDProps = {}) {
  const pathname = usePathname();
  const isHome = variant ? variant === "home" : pathname === "/";
  const [scrollPct, setScrollPct] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState("0.0");
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const sp = max > 0 ? h.scrollTop / max : 0;
      setScrollY(h.scrollTop | 0);
      setScrollPct(Math.round(sp * 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (!isHome) {
      return () => window.removeEventListener("scroll", onScroll);
    }

    const onMove = (e: MouseEvent) =>
      setCursor({ x: e.clientX | 0, y: e.clientY | 0 });
    window.addEventListener("mousemove", onMove, { passive: true });
    const t0 = performance.now();
    let raf = 0;
    const tick = () => {
      setTime(((performance.now() - t0) / 1000).toFixed(1));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [isHome]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrolled = scrollY > 8;

  return (
    <>
      <div className={`hud-bar ${scrolled ? "scrolled" : ""}`} aria-hidden="true" />
      <div className="hud hud-tl">
        <Link href="/" aria-label="Aura FHE home" className="hud-logo">
          <Image
            src={LOGO_SRC}
            alt="Aura FHE"
            width={168}
            height={67}
            priority
            unoptimized
          />
        </Link>
        <span
          style={{
            fontFamily: "var(--m-mono)",
            fontVariantNumeric: "tabular-nums",
            fontSize: 11,
            color: "var(--bone-dim)",
            minWidth: 32,
          }}
        >
          {scrollPct}%
        </span>
      </div>

      <nav
        className="hud hud-tr"
        style={{
          fontFamily: "var(--m-mono)",
          fontSize: 10.5,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="nav-link nav-only-md">
            {l.label}
          </Link>
        ))}
        <a
          className="m-btn-outline"
          href="https://docs.afhe.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          Read Docs <span className="arr">→</span>
        </a>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="hud-burger"
        >
          <span className={`hud-burger-bar top ${menuOpen ? "x" : ""}`} />
          <span className={`hud-burger-bar mid ${menuOpen ? "x" : ""}`} />
          <span className={`hud-burger-bar bot ${menuOpen ? "x" : ""}`} />
        </button>
      </nav>

      {isHome && (
        <>
          <div className="hud hud-bl">
            <div className="hud-meta-line">
              <b>Cursor X:</b> {cursor.x}
            </div>
            <div className="hud-meta-line">
              <b>Cursor Y:</b> {cursor.y}
            </div>
            <div className="hud-meta-line">
              <b>Scroll:</b> {scrollY}
            </div>
            <div className="hud-meta-line">
              <b>Time:</b> {time}s
            </div>
          </div>

          <div className="hud hud-br">
            <span>Scroll&nbsp;down</span>
            <span className="scroll-cue" aria-hidden="true" />
          </div>
        </>
      )}

      <div
        className="hud-menu"
        data-open={menuOpen}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <div className="hud-menu-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="hud-menu-close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="hud-menu-meta">Navigate</div>
            <ul className="hud-menu-list">
              <li>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="hud-menu-link"
                >
                  Home
                  <span className="arr">→</span>
                </Link>
              </li>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="hud-menu-link"
                  >
                    {l.label}
                    <span className="arr">→</span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://docs.afhe.io"
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setMenuOpen(false)}
                  className="hud-menu-link"
                >
                  Documentation
                  <span className="arr">→</span>
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="hud-menu-link"
                >
                  Contact
                  <span className="arr">→</span>
                </Link>
              </li>
            </ul>
            <div className="hud-menu-social">
              <a
                href="https://github.com/aurafhe"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
              <a
                href="https://x.com/AfheLabs"
                target="_blank"
                rel="noreferrer noopener"
              >
                X
              </a>
              <a
                href="https://discord.gg/afhe"
                target="_blank"
                rel="noreferrer noopener"
              >
                Discord
              </a>
              <a href="mailto:hello@afhe.io">Mail</a>
            </div>
          </div>
        </div>
    </>
  );
}
