/*
 * JSON-LD structured data — Organization, WebSite, SoftwareApplication, FAQ.
 * Ported from Framer's SEOStructuredData component (Uk9BtmS) but rewritten as
 * server-rendered builders, injected at the layout level via
 * <script type="application/ld+json">.
 */

const SITE_URL = "https://afhe.io";
const SITE_NAME = "AFHE";
const DESCRIPTION =
  "Privacy Infrastructure for the Post-Quantum Era. AFHE enables computation on encrypted data without decryption, 100x faster than existing FHE solutions.";
const LOGO_URL = "https://afhe.io/logo.png";
const TWITTER_HANDLE = "AuraFHE";
const LINKEDIN_URL = "https://www.linkedin.com/company/aura-fhe";
const DISCORD_URL = "https://discord.gg/QJEQ8BUuRP";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "Aura Fully Homomorphic Encryption",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  description: DESCRIPTION,
  foundingDate: "2024",
  sameAs: [`https://x.com/${TWITTER_HANDLE}`, LINKEDIN_URL, DISCORD_URL],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${SITE_URL}/contact`,
  },
  knowsAbout: [
    "Fully Homomorphic Encryption",
    "Post-Quantum Cryptography",
    "Privacy-Preserving Computation",
    "Blockchain Privacy",
    "Encrypted AI Inference",
    "Zero-Knowledge Proofs",
    "Cryptographic Security",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: "AFHE (Aura Fully Homomorphic Encryption)",
  applicationCategory: "SecurityApplication",
  applicationSubCategory: "Cryptography",
  operatingSystem: "Cross-platform",
  description:
    "Privacy infrastructure enabling computation on encrypted data without decryption. 100x faster than existing FHE solutions with post-quantum security through MQ-hardness.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/ComingSoon",
  },
  featureList: [
    "100x faster than existing FHE implementations",
    "~0.1 second verification time",
    "50 tokens/second encrypted LLM inference on consumer hardware",
    "Post-quantum security via MQ-hardness (proven NP-hard)",
    "Blockchain-agnostic coprocessor model",
    "Consumer-grade hardware support (no enterprise GPU required)",
    "13,500x speedup vs Microsoft CKKS for CNN inference",
    "84,500x speedup vs Zama TFHE for CNN inference",
    "True end-to-end encryption without threshold network dependencies",
  ],
  provider: { "@id": `${SITE_URL}/#organization` },
  releaseNotes: "Mainnet planned for Q1-Q2 2026",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Aura FHE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aura FHE is a protocol that enables computation on encrypted data without ever decrypting it. It's a privacy-preserving computation protocol that enables data to be processed while remaining fully encrypted — end to end, at all times.",
      },
    },
    {
      "@type": "Question",
      name: "What is Fully Homomorphic Encryption (FHE)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fully Homomorphic Encryption (FHE) is a revolutionary form of encryption that allows computations to be performed on encrypted data without decrypting it first. The result of the computation remains encrypted and can only be decrypted by the data owner. This enables truly privacy-preserving computation where sensitive data never needs to be exposed, even during processing.",
      },
    },
    {
      "@type": "Question",
      name: "How is Aura FHE different from zero-knowledge proofs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zero-knowledge proofs (ZK) prove that a computation happened correctly without revealing the underlying data. Aura FHE is fundamentally different — it performs the computation directly on encrypted data. ZK verifies correctness; FHE enables private computation. They solve different problems and can be complementary technologies.",
      },
    },
    {
      "@type": "Question",
      name: "How fast is AFHE compared to other FHE solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AFHE is 100x faster than existing FHE implementations. While competitors like Zama's TFHE take 'seconds to minutes' per operation, AFHE achieves approximately 0.1 second verification time. In benchmark tests, AFHE achieves 13,500x speedup vs Microsoft CKKS and 84,500x speedup vs Zama TFHE for CNN model inference. AFHE can also perform encrypted LLM inference at 50 tokens per second on consumer-grade hardware.",
      },
    },
    {
      "@type": "Question",
      name: "Does Aura FHE require a new blockchain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Aura FHE operates as a coprocessor and integrates with existing L1s and L2s at the wallet and SDK level. There's no need for chains to migrate or redesign their core architecture. Aura FHE is blockchain-agnostic by design.",
      },
    },
    {
      "@type": "Question",
      name: "Can Aura FHE support enterprise use cases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Aura FHE is designed for regulated, compliance-sensitive environments. It enables institutions to operate securely without exposing sensitive data, making it suitable for financial services, healthcare AI, legal applications, and any enterprise requiring privacy-preserving computation.",
      },
    },
    {
      "@type": "Question",
      name: "Is AFHE quantum-resistant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, AFHE uses MQ-hardness (Multivariate Quadratic problems) which is mathematically proven to be NP-hard. This security model has withstood over 40 years of cryptanalysis with no practical attacks discovered. AFHE provides 128-bit security against both classical and quantum computers, making it immune to Shor's algorithm and other quantum attacks that threaten traditional encryption.",
      },
    },
    {
      "@type": "Question",
      name: "What can AFHE be used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AFHE enables entirely new categories of applications: Private DeFi (encrypted trading without MEV, dark pools, private lending without liquidation hunting), Private AI (medical AI with encrypted health data, legal AI preserving attorney-client privilege, financial AI without exposing trading strategies), and any blockchain application requiring computation on sensitive data without exposure. Over $100 trillion in institutional capital is currently blocked from DeFi due to transparency concerns — AFHE solves this.",
      },
    },
    {
      "@type": "Question",
      name: "What is the AFHE token used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AFHE token has four main utilities: (1) Staking to secure the coprocessor network, (2) Governance voting on protocol parameters via veAFHE (vote-escrowed tokens with up to 4x multiplier for 4-year locks), (3) Paying fees for encrypted computation, and (4) Earning rewards for providing compute resources. Total supply is 10 billion tokens with 50% distributed via fair Proof-of-Work mining with Bitcoin-style halving every ~2 years.",
      },
    },
    {
      "@type": "Question",
      name: "When will AFHE mainnet launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AFHE mainnet is planned for Q1-Q2 2026. The roadmap includes: Phase 1 (Q1 2026) — Token launch and veAURA staking; Phase 2 (Q2 2026) — Mining network launch; Phase 3 (Q2 2026) — Wallet beta with SDK integrations; Phase 4 (Q3 2026) — Mainnet with DEX integration; Phase 5 (Q4 2026) — AURA DEX beta with encrypted orderbook; and a native L1 blockchain planned for 2027+.",
      },
    },
    {
      "@type": "Question",
      name: "How does AFHE compare to Zama?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AFHE offers significant advantages over Zama: 100x faster performance (~0.1s vs seconds-to-minutes), better security model (MQ-hardness proven NP-hard vs LWE which is only believed hard), wallet-level integration (no chain migration required), consumer hardware support (vs enterprise GPU/ASIC requirements), and true end-to-end encryption (vs threshold network dependencies).",
      },
    },
    {
      "@type": "Question",
      name: "What makes AFHE's technology different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AFHE's core innovation is ZFHE (ZionFHE), built on 12+ years of cryptographic research. Key technical advantages include: LUT-based acceleration using pre-computed lookup tables that replace expensive polynomial arithmetic, achieving 100x faster boolean operations and bootstrapping; MQ-hardness security model that's mathematically proven NP-hard; and a coprocessor architecture that's blockchain-agnostic, requiring no trusted execution environments.",
      },
    },
  ],
};

export const allSchemas = [
  organizationSchema,
  websiteSchema,
  softwareSchema,
  faqSchema,
];
