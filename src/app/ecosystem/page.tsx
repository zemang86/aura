import type { Metadata } from "next";
import { faqSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Private DeFi & AI on Solana | Aura FHE Ecosystem",
  description:
    "Explore the applications powered by Aura FHE. From AuraPoly's sealed-bid prediction markets to confidential AI inference and private real-world assets.",
};

const HERO_KPIS = [
  { value: "$100T+", label: "Institutional capital blocked from DeFi" },
  { value: "65M+", label: "Solana daily txns exposed" },
  { value: "4", label: "Application categories unlocked" },
  { value: "3", label: "SDK primitives to integrate" },
];

const USE_CASES = [
  "Encrypted swaps",
  "Sealed-bid auctions",
  "Dark pools",
  "Private lending",
  "Encrypted order books",
  "MEV protection",
  "Encrypted LLM inference",
  "Medical AI",
  "Legal AI",
  "Financial advisory",
  "RWA tokenization",
  "Compliant settlement",
  "Wholesale execution",
  "Confidential balances",
  "Private credit scoring",
  "Sealed prediction markets",
];

type Status = "live" | "buildable" | "dev";

const STATUS_LABEL: Record<Status, string> = {
  live: "Live today",
  buildable: "Immediately buildable",
  dev: "In development",
};

const STATUS_CLASS: Record<Status, string> = {
  live: "status-chip live",
  buildable: "status-chip coral",
  dev: "status-chip",
};

type Section = {
  number: string;
  status: Status;
  title: string;
  body: string;
  hero?: { value: string; label: string };
  metrics?: Array<{ label: string; value: string }>;
  cta?: { label: string; href: string };
};

const SECTIONS: Section[] = [
  {
    number: "01",
    status: "live",
    title: "Sealed-bid prediction markets.",
    body: "AuraPoly is our flagship production application — live and clearing real flow on the Aura encrypted compute layer. It runs as a sealed-bid market where a half-million-dollar fill stays completely invisible until the moment it settles on-chain. FHE delivers zero information leakage between participants, solving the structural problem of large fills moving the price before execution.",
    metrics: [
      { label: "TVL", value: "—" },
      { label: "Markets", value: "—" },
      { label: "Resolved volume", value: "—" },
    ],
    cta: { label: "Launch AuraPoly", href: "https://aurapoly.com/" },
  },
  {
    number: "02",
    status: "buildable",
    title: "Confidential AI inference.",
    body: "The Aura coprocessor supports FHE-based inference. Models run on encrypted prompts without decrypting the input and return outputs only the specific user can read. This enables medical diagnostic AI on patient records, legal AI on privileged documents, and financial advisory tools on private portfolios.",
    hero: { value: "50 tps", label: "Encrypted LLM on consumer hardware" },
  },
  {
    number: "03",
    status: "dev",
    title: "Institutional real-world assets.",
    body: "Tokenized RWAs represent a multi-trillion-dollar market that cannot operate on transparent rails — counterparty positions and settlement amounts are commercially sensitive. Aura provides the encryption layer that makes regulated RWA tokenization viable on Solana. Our primitives also enable encrypted order books for DEXs and dark pools, letting wholesale capital execute without leaking positions to MEV bots watching the mempool.",
    hero: { value: "$100T+", label: "Institutional capital unlocked" },
  },
  {
    number: "04",
    status: "live",
    title: "Three lines to total privacy.",
    body: "AURA SDK v5 is live in production. Three highly optimized primitives — encrypt, compute, decrypt — let a Solana developer take any transparent program, modify three lines of code, and ship a confidential version in under an hour. The interface instantly unlocks higher-level constructs: encrypted swaps, sealed-bid auctions, confidential balances.",
    hero: { value: "< 1 hr", label: "To ship a confidential Solana app" },
    cta: {
      label: "Browse the SDK",
      href: "https://github.com/aurafhe/shield-sdk/tree/shield_sdk",
    },
  },
];

const FAQS = faqSchema.mainEntity.map((q) => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}));

export default function EcosystemPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-meta">Ecosystem · Live on Solana</div>
          <h1>
            Building the <em>encrypted</em> economy.
          </h1>
          <p className="page-hero-deck">
            Live applications, institutional partnerships, and developer
            primitives — shipping the encrypted economy on Solana today.
          </p>
        </div>
      </section>

      <div className="kpi-row">
        {HERO_KPIS.map((k) => (
          <div key={k.label} className="kpi">
            <div className="kpi-num">{k.value}</div>
            <div className="kpi-label">{k.label}</div>
          </div>
        ))}
      </div>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>What you can build.</h2>
            <div className="right">
              Aura FHE primitives unlock entire categories of applications that
              were fundamentally impossible on transparent rails. Here&rsquo;s
              the landscape that becomes possible when computation is truly
              private.
            </div>
          </div>

          <div className="tag-grid">
            {USE_CASES.map((label) => (
              <div key={label} className="tag">
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>
              Four <em>shipping</em> applications.
            </h2>
            <div className="right">
              Everything in our ecosystem is either live today, in active
              development with institutional partners, or immediately buildable
              using the current SDK.
            </div>
          </div>

          <div style={{ display: "grid", gap: 24 }}>
            {SECTIONS.map((s) => (
              <article key={s.number} className="feature-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    flexWrap: "wrap",
                  }}
                >
                  <span className="status-chip">{s.number}</span>
                  <span className={STATUS_CLASS[s.status]}>
                    <span className="dot" />
                    {STATUS_LABEL[s.status]}
                  </span>
                </div>
                <h3>{s.title}</h3>
                <p className="lede">{s.body}</p>

                {s.hero && (
                  <div className="hero-stat">
                    <span className="v">{s.hero.value}</span>
                    <span className="l">{s.hero.label}</span>
                  </div>
                )}

                {s.metrics && (
                  <div className="metrics">
                    {s.metrics.map((m) => (
                      <div key={m.label}>
                        <span className="l">{m.label}</span>
                        <span className="v">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {s.cta && (
                  <div>
                    <a
                      className="m-btn-outline"
                      href={s.cta.href}
                      target={s.cta.href.startsWith("/") ? undefined : "_blank"}
                      rel={
                        s.cta.href.startsWith("/")
                          ? undefined
                          : "noreferrer noopener"
                      }
                    >
                      {s.cta.label} <span className="arr">→</span>
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>Common questions.</h2>
            <div className="right">
              If you&rsquo;re evaluating Aura for an integration and have
              something specific that isn&rsquo;t covered here, mail{" "}
              <a className="m-link-inline" href="mailto:hello@afhe.io">
                hello@afhe.io
              </a>
              .
            </div>
          </div>

          <div className="faq-list">
            {FAQS.map((faq) => (
              <details key={faq.question} className="faq-row">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block-inner">
          <h2>
            What will you <em>build?</em>
          </h2>
          <p>
            Three primitives. Three lines of code. Ship a fully confidential
            Solana app this week.
          </p>
          <div className="row">
            <a
              className="m-btn-primary"
              href="https://docs.afhe.io"
              target="_blank"
              rel="noreferrer noopener"
            >
              Read the docs <span className="arr">→</span>
            </a>
            <a
              className="m-btn-outline"
              href="https://discord.gg/afhe"
              target="_blank"
              rel="noreferrer noopener"
            >
              Join Discord <span className="arr">→</span>
            </a>
            <a className="m-btn-outline" href="/about">
              Submit your app <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
