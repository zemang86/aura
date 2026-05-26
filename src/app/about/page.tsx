import type { Metadata } from "next";
import Link from "next/link";
import { SubmitAppForm } from "@/components/submit-app-form";
import { Roadmap } from "@/components/marketing/roadmap";

export const metadata: Metadata = {
  title: "About Aura FHE | Built by Mochi Labs",
  description:
    "Aura FHE is the encrypted compute layer for the Solana Virtual Machine, built by Mochi Labs on more than a decade of cryptographic research to end the Glass House era of on-chain transparency.",
  alternates: { canonical: "/about" },
};

const HERO_KPIS = [
  { value: "12+", label: "Years of cryptographic research" },
  { value: "20+", label: "Dedicated engineering experts" },
  { value: "9", label: "Patents protect the protocol" },
  { value: "1", label: "Singapore HQ, globally distributed" },
];

const PRINCIPLES = [
  {
    title: "Math, not policy.",
    body: "Privacy comes from cryptographic proofs, not access controls or institutional promises.",
  },
  {
    title: "Privacy by default.",
    body: "Confidentiality is the baseline state of every computation, not an opt-in feature.",
  },
  {
    title: "Verifiable by design.",
    body: "Every encrypted operation produces a proof of correctness verifiable on-chain.",
  },
  {
    title: "Solana-native speed.",
    body: "FHE that runs at the 400ms block target, not at the minute.",
  },
];

const NEXT_STEPS = [
  {
    meta: "Technology",
    title: "How LUT-FHE works.",
    body: "Discover how LUT-FHE delivers encrypted computation at Solana speed.",
    href: "/technology",
  },
  {
    meta: "Ecosystem",
    title: "Applications shipping today.",
    body: "See what is already running on the encrypted compute layer.",
    href: "/ecosystem",
  },
];

const SOCIALS: Array<{ label: string; href: string; icon: React.ReactNode }> = [
  {
    label: "X",
    href: "https://x.com/AfheLabs",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/aura-fhe/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M4.98 3.5c0 1.38-1.11 2.5-2.49 2.5S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM.22 8.41h4.51V24H.22V8.41zM8.5 8.41h4.32v2.13h.06c.6-1.14 2.07-2.34 4.25-2.34 4.55 0 5.39 3 5.39 6.89V24h-4.5v-7.92c0-1.89-.03-4.32-2.63-4.32-2.64 0-3.04 2.06-3.04 4.18V24H8.5V8.41z"
        />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/afhe",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.07.07 0 0 0-.074.035c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.074-.035A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.246.197.373.291a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.226 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.956 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419z"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/aurafhe",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.15v3.18c0 .31.21.67.8.55A11.52 11.52 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-meta">About · Mochi Labs</div>
          <h1>
            Who we are and what <em>we&rsquo;re building.</em>
          </h1>
          <p className="page-hero-deck">
            Built by Mochi Labs on more than a decade of cryptographic
            research. Singapore-headquartered, globally distributed, deeply
            technical.
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
            <h2>
              The <em>Glass House</em> era is over.
            </h2>
            <div className="right">
              <div className="frost-card">
                <p>
                  Aura FHE is the culmination of more than a decade of intensive
                  cryptographic research. The public nature of blockchain
                  ledgers has become the structural ceiling for global financial
                  adoption.{" "}
                  <strong>
                    Our mission is to permanently end the Glass House era.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          <div className="m-prose">
            <p>
              Solana is the world&rsquo;s most performant blockchain — but its
              inherent transparency is a structural ceiling that prevents the
              next order of magnitude of on-chain capital from entering the
              market. Aura FHE is the encrypted compute layer built specifically
              for the Solana Virtual Machine, designed to bridge the gap between
              high-speed finance and absolute confidentiality.
            </p>
            <p className="pull">
              We deliver a production-ready ecosystem where transactions are
              private by default and verifiable by design.
            </p>
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>What we believe.</h2>
            <div className="right">
              <div className="frost-card">
                <p>
                  Four commitments that shape every line of the protocol.{" "}
                  <strong>None of them are negotiable.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="principle-grid">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="principle">
                <div className="principle-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>
              Architects of the <em>encrypted</em> future.
            </h2>
            <div className="right">
              <div className="frost-card">
                <p>
                  A collective of cryptographers, protocol engineers, builders
                  and DeFi natives.{" "}
                  <strong>
                    12+ years of research in fully homomorphic encryption.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          <div className="m-prose">
            <p>
              Aura FHE is developed by Mochi Labs, headquartered in Singapore,
              featuring a rapidly scaling engineering organization of over
              twenty dedicated experts. Our foundational cryptographic work and
              protocol direction are carried out by Expert Geeks who believe
              that privacy should be as fast as a Solana block.
            </p>
            <p className="pull">
              We are deploying the encrypted compute layer for the next
              generation of global finance.
            </p>
          </div>
        </div>
      </section>

      <Roadmap />

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>Join the community.</h2>
            <div className="right">
              <div className="frost-card">
                <p>
                  <strong>The fastest path in is Discord.</strong> For
                  long-form, follow us on X. For partnerships and press, mail{" "}
                  <a className="m-link-inline" href="mailto:hello@afhe.io">
                    hello@afhe.io
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="soc-row">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="soc-ring"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>
              Submit your <em>app.</em>
            </h2>
            <div className="right">
              <div className="frost-card">
                <p>
                  Tell us what you&rsquo;re building. We&rsquo;ll get back with{" "}
                  <strong>
                    integration support, technical resources, and ecosystem
                    opportunities.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: 880 }}>
            <SubmitAppForm />
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>Where to next.</h2>
            <div className="right">
              <div className="frost-card">
                <p>
                  Two paths in: the math, or the apps.{" "}
                  <strong>Both lead to the same place.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="next-row">
            {NEXT_STEPS.map((n) => (
              <Link key={n.href} href={n.href}>
                <span className="meta">{n.meta}</span>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
                <span className="arr-row">
                  Read more <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
