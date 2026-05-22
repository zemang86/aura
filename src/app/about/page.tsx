import type { Metadata } from "next";
import Link from "next/link";
import { HeroBanner } from "@/components/hero-banner";
import { LightButton } from "@/components/light-button";
import { SubmitAppForm } from "@/components/submit-app-form";
import { AnimatedNumber } from "@/components/animated-number";

export const metadata: Metadata = {
  title: "About Aura FHE | Built by Mochi Labs",
  description:
    "Aura FHE is the encrypted compute layer for the Solana Virtual Machine, built by Mochi Labs on more than a decade of cryptographic research to end the Glass House era of on-chain transparency.",
};

const HERO_STATS = [
  {
    value: 12,
    suffix: "+",
    label: "Years of cryptographic research",
  },
  {
    value: 20,
    suffix: "+",
    label: "Dedicated engineering experts",
  },
  {
    value: 9,
    label: "Patents protect the protocol",
  },
];

const PRINCIPLES = [
  {
    title: "Math, not policy",
    body: "Privacy comes from cryptographic proofs, not access controls or institutional promises.",
  },
  {
    title: "Privacy by default",
    body: "Confidentiality is the baseline state of every computation, not an opt-in feature.",
  },
  {
    title: "Verifiable by design",
    body: "Every encrypted operation produces a proof of correctness verifiable on-chain.",
  },
  {
    title: "Solana-native speed",
    body: "FHE that runs at the 400ms block target, not at the minute.",
  },
];

const NEXT_STEPS = [
  {
    title: "Technology",
    body: "Discover how LUT-FHE delivers encrypted computation at Solana speed.",
    href: "/technology",
  },
  {
    title: "Ecosystem",
    body: "See the applications already shipping on the encrypted compute layer.",
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
    label: "Blog",
    href: "/blog",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M4 4h16v2H4V4zm0 5h16v2H4V9zm0 5h10v2H4v-2zm0 5h16v2H4v-2z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        title="Who we are and what we're building"
        description="Built by Mochi Labs and a decade of cryptographic research. Singapore-headquartered, globally distributed, deeply technical."
      />

      <section className="w-full border-t border-b border-white/10 bg-dark py-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-y-8 px-5 md:px-9 md:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="font-display text-[40px] font-semibold leading-none tracking-tight text-dark-text md:text-[48px]">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-p14 max-w-[260px] text-muted-text">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-white py-[48px] md:py-[80px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-9 px-5 md:px-9">
          <p className="text-pre-heading-16 text-accent-1">
            The Glass House Era is Over
          </p>
          <div className="flex max-w-[1128px] flex-col gap-6 text-p16 text-dark/80">
            <p>
              Aura FHE is the culmination of more than a decade of intensive
              cryptographic research. We recognized early that the public
              nature of blockchain ledgers would eventually become the ultimate
              bottleneck for global financial adoption. Our mission is to
              permanently end the Glass House era by providing the definitive
              encryption layer for the world&rsquo;s compute.
            </p>
            <p>
              Solana is the world&rsquo;s most performant blockchain, but its
              inherent transparency acts as a structural ceiling that prevents
              the next order of magnitude of on-chain capital from entering
              the market. Aura FHE is the encrypted compute layer built
              specifically for the Solana Virtual Machine, designed to bridge
              the gap between high-speed finance and absolute confidentiality.
              We are delivering a production-ready ecosystem where transactions
              are private by default and verifiable by design.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-dark py-[56px] md:py-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-9 px-5 md:px-9">
          <p className="text-pre-heading-16 text-accent-1">Principles</p>
          <h2 className="text-h2 max-w-[700px] text-left text-dark-text">
            What we believe
          </h2>
          <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <li
                key={p.title}
                className="flex flex-col gap-3 border border-white/10 bg-elevated p-6 md:p-8"
              >
                <span className="font-display text-[14px] font-medium tracking-[0.06em] text-accent-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-h4 text-dark-text">{p.title}</h3>
                <p className="text-p16 text-muted-text">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white py-[48px] md:py-[80px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-9 px-5 md:px-9">
          <p className="text-pre-heading-16 text-accent-1">
            Architects of the Encrypted Future
          </p>
          <p className="text-p16 max-w-[1128px] text-dark/80">
            Aura FHE is developed by Mochi Labs, headquartered in Singapore,
            featuring a rapidly scaling engineering organization of over twenty
            dedicated experts. Our foundational cryptographic work and protocol
            direction have been meticulously carried out by a collective of
            Expert Geeks: cryptographers, protocol engineers, builders and
            DeFi natives with 12+ years of research in fully homomorphic
            encryption who believe that privacy should be as fast as a Solana
            block.
          </p>
          <p className="text-h3-24 max-w-[1128px] text-dark">
            We are deploying the encrypted compute layer for the next
            generation of global finance.
          </p>
        </div>
      </section>

      <section className="w-full bg-dark py-[56px] md:py-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-11 px-5 md:px-9">
          <div className="flex flex-col items-center gap-6">
            <p className="text-pre-heading-16 text-accent-1">Community</p>
            <h2 className="text-h2 max-w-[700px] text-center text-dark-text">
              Join the AURA Community
            </h2>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-4">
            {SOCIALS.map((s) => {
              const external = !s.href.startsWith("/");
              const Anchor = external ? "a" : Link;
              const anchorProps = external
                ? {
                    href: s.href,
                    target: "_blank",
                    rel: "noreferrer noopener",
                  }
                : { href: s.href };
              return (
                <li key={s.label}>
                  <Anchor
                    {...(anchorProps as { href: string })}
                    aria-label={s.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border-token text-dark-text transition-colors hover:bg-elevated"
                  >
                    {s.icon}
                  </Anchor>
                </li>
              );
            })}
          </ul>

          <LightButton href="/contact" variant="secondary">
            Contact us
          </LightButton>
        </div>
      </section>

      <section className="w-full bg-white py-[56px] md:py-[100px]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-9 px-5 md:px-9">
          <div className="flex flex-col items-center gap-6">
            <p className="text-pre-heading-16 text-accent-1">
              Building on Aura?
            </p>
            <h2 className="text-h2 max-w-[700px] text-center text-dark">
              Submit your app
            </h2>
            <p className="text-p16 max-w-[626px] text-center text-dark/70">
              Tell us what you&rsquo;re building. We&rsquo;ll get back to you
              with integration support, technical resources, and ecosystem
              opportunities.
            </p>
          </div>

          <div className="w-full max-w-[900px] overflow-hidden rounded-3xl border border-dark/10 bg-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)]">
            <SubmitAppForm />
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-[56px] md:pb-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-9 px-5 md:px-9">
          <p className="text-pre-heading-16 text-accent-1">Keep exploring</p>
          <h2 className="text-h2 max-w-[700px] text-left text-dark">
            Where to next
          </h2>
          <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            {NEXT_STEPS.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-dark/10 bg-white p-10 transition-all hover:-translate-y-1 hover:border-dark/20 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.10)]"
                >
                  <h3 className="text-h3-36 text-dark transition-colors group-hover:text-accent-1">
                    {n.title}
                  </h3>
                  <p className="text-p16 text-dark/70">{n.body}</p>
                  <span className="text-pre-heading-16 text-accent-1">
                    Read more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
