import Link from "next/link";
import { HeroBanner } from "@/components/hero-banner";
import { TextBlock } from "@/components/text-block";

const PRODUCTS: Array<{ title: string; href?: string }> = [
  { title: "Aura Shield", href: "https://shield.afhe.io/" },
  { title: "Aura Coprocessor" },
  {
    title: "Aura SDK",
    href: "https://github.com/aurafhe/shield-sdk/tree/shield_sdk",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroBanner title="Who we are and what we're building" />

      <TextBlock preHeading="The Glass House Era is Over">
        Aura FHE is the culmination of more than a decade of intensive
        cryptographic research. We recognized early that the public nature of
        blockchain ledgers would eventually become the ultimate bottleneck for
        global financial adoption. Our mission is to permanently end the Glass
        House era by providing the definitive encryption layer for the
        world&rsquo;s compute. Solana is the world&rsquo;s most performant
        blockchain, but its inherent transparency acts as a structural ceiling
        that prevents the next order of magnitude of on-chain capital from
        entering the market. Aura FHE is the encrypted compute layer built
        specifically for the Solana Virtual Machine, designed to bridge the
        gap between high-speed finance and absolute confidentiality. We are
        delivering a production-ready ecosystem where transactions are private
        by default and verifiable by design.
      </TextBlock>

      <section className="w-full bg-white py-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-11 px-9">
          <h2 className="text-h3-36 max-w-[1128px] text-center text-dark">
            Architects of the Encrypted Future
          </h2>
          <p className="text-p16 max-w-[1128px] text-center text-dark/70">
            Aura FHE is developed by Mochi Labs, headquartered in Singapore,
            featuring a rapidly scaling engineering organization of over twenty
            dedicated experts. Our foundational cryptographic work and protocol
            direction have been meticulously carried out by a collective of
            Expert Geeks: cryptographers, protocol engineers, builders and
            DeFi natives with 12+ years of research in fully homomorphic
            encryption who believe that privacy should be as fast as a Solana
            block. We are deploying the encrypted compute layer for the next
            generation of global finance.
          </p>
          <ul className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
            {PRODUCTS.map((p) => {
              const inner = (
                <div className="flex h-full min-h-[200px] flex-col justify-end gap-3 border border-border-token bg-elevated p-8 transition-colors hover:bg-dark">
                  <h3 className="text-h3-24 text-dark-text">{p.title}</h3>
                  {p.href && (
                    <span className="text-p14 text-accent-1">Visit →</span>
                  )}
                </div>
              );
              return (
                <li key={p.title} className="min-w-[320px]">
                  {p.href ? (
                    <Link
                      href={p.href}
                      target={p.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        p.href.startsWith("http")
                          ? "noreferrer noopener"
                          : undefined
                      }
                      className="block"
                    >
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
