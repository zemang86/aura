import Link from "next/link";
import type { ReactNode } from "react";

const CASE_ART: Record<string, ReactNode> = {
  dex: (
    <svg className="art-svg art-dex" viewBox="0 0 200 100">
      <g stroke="rgba(232,226,212,.32)" strokeWidth="1" fill="none">
        <line x1="20" y1="50" x2="180" y2="50" />
        <line x1="20" y1="30" x2="180" y2="30" strokeDasharray="2 4" />
        <line x1="20" y1="70" x2="180" y2="70" strokeDasharray="2 4" />
      </g>
      <g fill="#FF6B3D">
        {[
          [30, 40, 20],
          [40, 34, 32],
          [50, 46, 14],
          [60, 30, 40],
          [70, 42, 22],
          [80, 38, 28],
        ].map(([x, y, h], i) => (
          <rect key={i} x={x} y={y} width="3" height={h} />
        ))}
      </g>
      <g fill="#2DD49A">
        {[
          [110, 44, 18],
          [120, 36, 32],
          [130, 40, 22],
          [140, 32, 38],
          [150, 46, 14],
          [160, 38, 26],
        ].map(([x, y, h], i) => (
          <rect key={i} x={x} y={y} width="3" height={h} />
        ))}
      </g>
      <text
        x="100"
        y="92"
        fill="rgba(232,226,212,.5)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        ENCRYPTED ORDER FLOW
      </text>
    </svg>
  ),
  amm: (
    <svg className="art-svg art-amm" viewBox="0 0 200 100">
      <g fill="none" stroke="rgba(232,226,212,.3)" strokeWidth="1">
        <path d="M 20 80 Q 100 20 180 80" />
        <path d="M 20 80 Q 100 40 180 80" strokeDasharray="3 3" />
      </g>
      <circle cx="100" cy="50" r="3" fill="#FF6B3D" className="amm-core" />
      <circle
        cx="100"
        cy="50"
        r="14"
        fill="none"
        stroke="#FF6B3D"
        strokeWidth="1"
        opacity=".6"
        className="amm-ring amm-ring-1"
      />
      <circle
        cx="100"
        cy="50"
        r="26"
        fill="none"
        stroke="#FF6B3D"
        strokeWidth=".6"
        opacity=".3"
        className="amm-ring amm-ring-2"
      />
      <g
        fill="rgba(232,226,212,.6)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        letterSpacing="1"
      >
        <text x="22" y="76">
          x
        </text>
        <text x="174" y="76">
          y
        </text>
        <text x="100" y="92" textAnchor="middle" letterSpacing="1.5">
          ENCRYPTED ROUTING
        </text>
      </g>
    </svg>
  ),
  lending: (
    <svg className="art-svg art-lending" viewBox="0 0 200 100">
      <g fill="none" stroke="rgba(232,226,212,.3)" strokeWidth="1">
        <rect x="40" y="32" width="56" height="44" />
        <rect x="104" y="32" width="56" height="44" />
      </g>
      <rect
        x="44"
        y="62"
        width="48"
        height="10"
        fill="#FF6B3D"
        opacity=".85"
        className="col-l"
      />
      <rect
        x="108"
        y="60"
        width="48"
        height="12"
        fill="#2DD49A"
        opacity=".85"
        className="col-r"
      />
      <text
        x="68"
        y="50"
        fill="rgba(232,226,212,.6)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        textAnchor="middle"
        letterSpacing="1"
      >
        COLLATERAL
      </text>
      <text
        x="132"
        y="50"
        fill="rgba(232,226,212,.6)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        textAnchor="middle"
        letterSpacing="1"
      >
        BORROW
      </text>
      <text
        x="100"
        y="92"
        fill="rgba(232,226,212,.5)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        VALUED, NOT DOXXED
      </text>
    </svg>
  ),
  gov: (
    <svg className="art-svg art-gov" viewBox="0 0 200 100">
      <g fill="rgba(232,226,212,.3)" className="gov-tallies">
        {[
          [32, 36, 40],
          [52, 44, 32],
          [72, 30, 46],
          [92, 48, 28],
          [112, 40, 36],
          [132, 34, 42],
          [152, 46, 30],
        ].map(([x, y, h], i) => (
          <rect key={i} x={x} y={y} width="8" height={h} />
        ))}
      </g>
      <rect
        x="72"
        y="30"
        width="8"
        height="46"
        fill="#FF6B3D"
        className="gov-winner"
      />
      <text
        x="100"
        y="92"
        fill="rgba(232,226,212,.5)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        SEALED UNTIL TALLY
      </text>
    </svg>
  ),
  bridge: (
    <svg className="art-svg art-bridge" viewBox="0 0 200 100">
      <g fill="none" stroke="rgba(232,226,212,.3)" strokeWidth="1">
        <circle cx="40" cy="50" r="14" className="bridge-node bridge-a" />
        <circle cx="160" cy="50" r="14" className="bridge-node bridge-b" />
        <path
          d="M 54 50 L 146 50"
          stroke="#FF6B3D"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="bridge-flow"
        />
      </g>
      <text
        x="40"
        y="54"
        fill="rgba(232,226,212,.7)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        textAnchor="middle"
        letterSpacing="1"
      >
        A
      </text>
      <text
        x="160"
        y="54"
        fill="rgba(232,226,212,.7)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        textAnchor="middle"
        letterSpacing="1"
      >
        B
      </text>
      <text
        x="100"
        y="44"
        fill="#FF6B3D"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        enc(value)
      </text>
      <text
        x="100"
        y="92"
        fill="rgba(232,226,212,.5)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        SILENT VALUE TRANSFER
      </text>
    </svg>
  ),
  ai: (
    <svg className="art-svg art-ai" viewBox="0 0 200 100">
      <g fill="none" stroke="rgba(232,226,212,.3)" strokeWidth="1">
        <circle cx="40" cy="50" r="4" />
        <circle cx="40" cy="30" r="4" />
        <circle cx="40" cy="70" r="4" />
        <circle cx="100" cy="40" r="4" />
        <circle cx="100" cy="60" r="4" />
        <circle cx="160" cy="50" r="4" />
        <line x1="44" y1="30" x2="96" y2="40" />
        <line x1="44" y1="50" x2="96" y2="40" />
        <line x1="44" y1="50" x2="96" y2="60" />
        <line x1="44" y1="70" x2="96" y2="60" />
        <line x1="104" y1="40" x2="156" y2="50" />
        <line x1="104" y1="60" x2="156" y2="50" />
      </g>
      <circle cx="40" cy="50" r="4" fill="#FF6B3D" />
      <circle cx="160" cy="50" r="4" fill="#2DD49A" />
      <text
        x="100"
        y="92"
        fill="rgba(232,226,212,.5)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        PROMPT NEVER SEEN
      </text>
    </svg>
  ),
};

const CASES = [
  {
    id: "dex",
    tags: ["DEX", "Order book"],
    title: "Private DEXs",
    body: "Encrypted order books. Match trades without leaking size, side, or intent to the mempool.",
  },
  {
    id: "amm",
    tags: ["AMM", "MEV-resistant"],
    title: "MEV-resistant AMMs",
    body: "Swap routes computed on ciphertext. Sandwiches and front-runs starve — nothing to see.",
  },
  {
    id: "lending",
    tags: ["Lending", "Collateral"],
    title: "Confidential Lending",
    body: "Borrow against collateral the protocol can value, but no liquidator can dox.",
  },
  {
    id: "gov",
    tags: ["DAO", "Sealed bid"],
    title: "Private Governance",
    body: "Sealed-bid votes and quadratic funding rounds where ballots stay secret until the tally is done.",
  },
  {
    id: "bridge",
    tags: ["Bridge", "Cross-chain"],
    title: "Private Bridges",
    body: "Move value across chains without broadcasting amount or origin to either side.",
  },
  {
    id: "ai",
    tags: ["AI", "Inference"],
    title: "Confidential AI Inference",
    body: "Run a model on an encrypted prompt. The operator returns an answer it could never read.",
  },
];

export function CaseGrid() {
  return (
    <section className="cases">
      <div className="cases-head">
        <h2>
          Selected <em>use cases</em>
        </h2>
        <div className="right">
          <b>06 / Built on Aura</b>
          Real reference implementations —{" "}
          <Link href="/docs">documentation</Link>{" "}
          ·{" "}
          <a
            href="https://github.com/aurafhe"
            target="_blank"
            rel="noreferrer noopener"
          >
            github.com/AfheLabs
          </a>
        </div>
      </div>
      <div className="case-grid">
        {CASES.map((c) => (
          <article key={c.id} className="case">
            <div className="case-tags">
              {c.tags.map((t) => (
                <span key={t} className="case-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="case-art">{CASE_ART[c.id]}</div>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <a className="case-cta" href="/ecosystem">
              View brief <span className="arr">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
