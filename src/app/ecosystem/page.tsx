import { HeroBanner } from "@/components/hero-banner";
import { TextBlock } from "@/components/text-block";
import { DarkButton } from "@/components/dark-button";

export default function EcosystemPage() {
  return (
    <>
      <HeroBanner title="Building the Encrypted Economy" />

      <TextBlock>
        The Aura FHE architecture only matters if developers can build
        paradigm-shifting applications with it. Our protocol unlocks entirely
        new categories of decentralized applications that were fundamentally
        impossible on transparent blockchains. Everything in our ecosystem is
        either live today, in active development with institutional partners,
        or immediately buildable using our current software development kit.
      </TextBlock>

      <section className="w-full bg-white py-[60px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-9">
          <p className="text-pre-heading-16 text-accent-1">
            Sealed-Bid Prediction Markets
          </p>
          <p className="text-p16 max-w-[1128px] text-left text-dark/80">
            AuraPoly serves as our flagship production application and is
            officially live, clearing real flow on the Aura encrypted compute
            layer. It operates as a sealed-bid prediction market where a
            half-million dollar fill stays completely invisible until the
            moment it settles on-chain. By utilizing FHE, we ensure zero
            information leakage between participants, solving the structural
            problem of large fills moving the price before execution. AURA FHE
            replaces ring-based ciphertext arithmetic with precomputed lookup
            tables, known as LUT-FHE, defined over a Multivariate Quadratic
            structure.
          </p>
          <a
            href="https://aurapoly.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-p16 text-accent-1 underline underline-offset-4 hover:text-accent-2"
          >
            https://aurapoly.com/
          </a>
          <DarkButton href="https://aurapoly.com/" variant="main" external>
            Aurapoly.com
          </DarkButton>
        </div>
      </section>

      <TextBlock preHeading="Confidential AI Inference">
        The Aura coprocessor also supports FHE-based Artificial Intelligence
        inference. This allows sophisticated models to run on encrypted
        prompts without ever decrypting the input, returning secure outputs
        that only the specific user can read. This technology enables
        high-stakes, privacy-critical workloads such as medical diagnostic AI
        on patient records, legal AI on privileged documents, and financial
        advisory tools on private portfolio positions.
      </TextBlock>

      <TextBlock preHeading="Institutional Real-World Assets and DeFi">
        Tokenized real-world assets represent a multi-trillion-dollar market
        that cannot operate on transparent rails due to commercially sensitive
        counterparty positions and settlement amounts. Aura FHE provides the
        critical encryption layer that makes regulated RWA tokenization viable
        on Solana&rsquo;s public infrastructure. Additionally, our primitives
        enable encrypted order books for decentralized exchanges and dark
        pools, allowing wholesale institutional capital to execute large
        trades without leaking their positions to MEV bots watching the
        mempool.
      </TextBlock>

      <section className="w-full bg-white py-[60px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-9">
          <p className="text-pre-heading-16 text-accent-1">
            Three Lines to Total Privacy
          </p>
          <p className="text-p16 max-w-[1128px] text-left text-dark/80">
            AURA SDK v5 is live in production, empowering developers to build
            the next generation of on-chain finance with privacy by default.
            Our SDK exposes three highly optimized core primitives: encrypt,
            compute, and decrypt. With this straightforward interface, a
            Solana developer can take any existing transparent program, modify
            just three lines of code, and ship a fully confidential version in
            under an hour. This seamless integration instantly unlocks a
            library of higher-level constructs for real-world applications,
            including encrypted swaps, sealed-bid auctions, and confidential
            balances.
          </p>
          <DarkButton
            href="https://github.com/aurafhe/shield-sdk/tree/shield_sdk"
            variant="main"
            external
          >
            SDK
          </DarkButton>
        </div>
      </section>
    </>
  );
}
