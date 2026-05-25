"use client";

import { useEffect, useState } from "react";
import { CipherStream } from "./cipher-stream";

const SOL_BASE = 146.84;

const thinSep = (n: number) =>
  n.toLocaleString("en-US").replace(/,/g, " ");

export function Hero() {
  const [sol, setSol] = useState(148.42);
  const [solPct, setSolPct] = useState(1.08);
  const [ops, setOps] = useState(1284);
  const [lat, setLat] = useState(812);
  const [blk, setBlk] = useState(312481902);

  useEffect(() => {
    const id = setInterval(() => {
      setSol((s) => {
        const next = s + (Math.random() - 0.5) * 0.18;
        setSolPct(((next - SOL_BASE) / SOL_BASE) * 100);
        return next;
      });
      setOps((o) =>
        Math.max(900, Math.min(1800, o + (((Math.random() - 0.5) * 40) | 0))),
      );
      setLat((l) =>
        Math.max(680, Math.min(940, l + (((Math.random() - 0.5) * 14) | 0))),
      );
      setBlk((b) => b + (Math.random() < 0.8 ? 1 : 0));
    }, 1100);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="cover">
      <div className="spacer" />

      <div className="cover-tagline">
        <div className="kicker">
          <span>
            <b style={{ color: "var(--bone)" }}>Live</b>
            &nbsp;·&nbsp; Solana mainnet &nbsp;·&nbsp; block {thinSep(blk)}
          </span>
        </div>
        Aura runs Solana programs on data while it stays sealed.{" "}
        <em>Privacy as a mathematical guarantee</em>, not a policy.
      </div>

      <CipherStream rows={14} />

      <div className="cipher-label" aria-hidden="true">
        <span className="dot" />
        <span>
          <b>Encrypted operations</b> &nbsp;·&nbsp; live transaction stream
        </span>
      </div>

      <div className="cover-bottom">
        <div className="tickers">
          <span>
            <span className="t-sym">SOL</span>
            <span className="t-num">{sol.toFixed(2)}</span> &nbsp;
            <span className={solPct >= 0 ? "t-up" : "t-dn"}>
              {(solPct >= 0 ? "+" : "") + solPct.toFixed(2)}%
            </span>
          </span>
          <span>
            <span className="t-sym">ENC OPS / SEC</span>
            <span className="t-num">{thinSep(ops)}</span>
          </span>
          <span>
            <span className="t-sym">LATENCY P50</span>
            <span className="t-num">{lat}</span>
            <span style={{ color: "var(--bone-faint)", marginLeft: 4 }}>ms</span>
          </span>
          <span>
            <span className="t-sym">vs LEGACY FHE</span>
            <span className="t-up">~500×</span>
          </span>
        </div>
        <div className="hud-meta-line">
          <b>SOLANA · MAINNET</b>
        </div>
      </div>
    </section>
  );
}
