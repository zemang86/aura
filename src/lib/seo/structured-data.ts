/*
 * JSON-LD structured data — Organization, WebSite, SoftwareApplication, FAQ.
 * Ported from Framer's SEOStructuredData component (Uk9BtmS) but rewritten as
 * server-rendered builders, injected at the layout level via
 * <script type="application/ld+json">.
 */

const SITE_URL = "https://afhe.io";
const SITE_NAME = "Aura FHE";
const DESCRIPTION =
  "Aura FHE is the encrypted compute layer for the Solana Virtual Machine. Bootstrap-free fully homomorphic encryption, ~1000× faster than existing FHE schemes, post-quantum secure via MQ-hardness.";
const LOGO_URL = "https://afhe.io/logo.png";
const TWITTER_HANDLE = "AfheLabs";
const LINKEDIN_URL = "https://www.linkedin.com/company/aura-fhe";
const DISCORD_URL = "https://discord.gg/afhe";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["AFHE", "Aura Fully Homomorphic Encryption", "AURA FHE"],
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
  name: "Aura FHE",
  applicationCategory: "SecurityApplication",
  applicationSubCategory: "Cryptography",
  operatingSystem: "Cross-platform",
  description:
    "Encrypted compute layer for the Solana Virtual Machine. Bootstrap-free fully homomorphic encryption built on a novel LUT-FHE scheme over Multivariate Quadratic structure — post-quantum secure, chain-speed performant, and verifiable on-chain.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/ComingSoon",
  },
  featureList: [
    "~1000× speedup over TFHE-based schemes on typical arithmetic workloads",
    "Integer addition in ~0.04μs (vs Zama's ~50ms gate evaluation)",
    "~0.1 second verification time",
    "Bootstrap-free architecture — no noise accumulation, no ciphertext refresh",
    "Post-quantum security via MQ-hardness (Garey & Johnson 1979, proven NP-hard)",
    "Coprocessor architecture — chain-agnostic by design, ships first on Solana",
    "3.7 MB WASM runtime",
    "AURA SDK v5 in production — three-line integration for any Solana program",
    "Verifiable correctness proof on every coprocessor output",
  ],
  provider: { "@id": `${SITE_URL}/#organization` },
  releaseNotes:
    "AURA SDK v5 in production. AuraPoly live on Solana. Token Generation Event (TGE) targeted for Q3 2026; coprocessor mining network launches Q4 2026.",
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
        text: "Aura FHE is the encrypted compute layer for the Solana Virtual Machine. It runs Solana programs on data that stays sealed end-to-end using a novel LUT-FHE scheme over Multivariate Quadratic structure. The protocol delivers privacy as a mathematical guarantee — not a policy, access control, or trusted enclave.",
      },
    },
    {
      "@type": "Question",
      name: "What is Fully Homomorphic Encryption (FHE)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fully Homomorphic Encryption (FHE) is a form of encryption that allows computations to be performed directly on encrypted data without decrypting it first. The result of the computation remains encrypted and can only be opened by the data owner. This enables truly privacy-preserving computation where sensitive data is never exposed — not at rest, not in transit, and not during processing.",
      },
    },
    {
      "@type": "Question",
      name: "How is Aura FHE different from zero-knowledge proofs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zero-knowledge proofs (ZK) prove that a computation happened correctly without revealing the underlying inputs. Aura FHE performs the computation directly on encrypted data and returns an encrypted result. ZK verifies correctness; FHE enables private computation. They solve different problems and are often complementary — every Aura coprocessor output ships with a cryptographic correctness proof that validators verify without decrypting.",
      },
    },
    {
      "@type": "Question",
      name: "How fast is Aura FHE compared to other FHE solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aura FHE delivers approximately 1000× speedup over TFHE-based alternatives across typical arithmetic workloads. Integer addition executes in roughly 0.04 microseconds, compared with Zama's ~50ms gate evaluation. Verification time is approximately 0.1 seconds. The architecture is bootstrap-free — the scheme is structurally noise-free, so it never needs the expensive ciphertext refresh that defines other production FHE schemes. Independent benchmark verification is in progress.",
      },
    },
    {
      "@type": "Question",
      name: "Does Aura FHE require a new blockchain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Aura FHE operates as a coprocessor and integrates with existing chains at the SDK and wallet level. A Solana program submits an encrypted compute request to the Aura coprocessor network, receives a verifiable ciphertext result, and proceeds with on-chain settlement. The architecture is chain-agnostic by design; Aura ships first on Solana, with cross-chain expansion planned from Q1 2027.",
      },
    },
    {
      "@type": "Question",
      name: "Can Aura FHE support enterprise use cases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The same coprocessor that serves a Solana DEX can serve a hospital, hedge fund, government agency, or AI inference pipeline. The cryptography does not care whether a request originates from a smart contract or a REST API. This makes Aura suitable for regulated, compliance-sensitive environments — financial services, healthcare AI, legal applications, defense, and any enterprise requiring privacy-preserving computation.",
      },
    },
    {
      "@type": "Question",
      name: "Is Aura FHE quantum-resistant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Security reduces to the Multivariate Quadratic (MQ) problem, proven NP-hard by Garey and Johnson in 1979. Unlike lattice-based FHE schemes whose hardness rests on conjectured assumptions about Learning With Errors (LWE), MQ-hardness has a stronger theoretical foundation and no known efficient quantum attack. Post-quantum security is a structural property of the scheme, not a future upgrade path.",
      },
    },
    {
      "@type": "Question",
      name: "What can Aura FHE be used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aura FHE unlocks application categories that are impossible on transparent blockchains: sealed-bid prediction markets (AuraPoly is live and clearing real flow), encrypted DEXes and dark pools, confidential AI inference on medical, legal, and financial data, private real-world asset tokenization, encrypted DAO governance with sealed voting, and autonomous AI agents with private wallets and encrypted memory. More than $100 trillion in institutional capital is currently blocked from on-chain markets because state is fully visible — Aura is the encryption layer that removes that ceiling.",
      },
    },
    {
      "@type": "Question",
      name: "What is the AURA token used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AURA is the unit of account for every encrypted computation processed by the network. It has four primary utilities: (1) per-transaction compute fees for FHE workloads called through the SDK, (2) staking by coprocessor miners and validators, (3) wallet balances held by end users to pay for their own encrypted operations, and (4) governance over protocol parameters. Total supply is fixed at 1,000,000,000 AURA with no protocol-level inflation beyond the published mining emission schedule.",
      },
    },
    {
      "@type": "Question",
      name: "When will Aura FHE launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AURA SDK v5 is already in production, and AuraPoly is clearing real flow on the encrypted compute layer today. The Token Generation Event (TGE) is targeted for Q3 2026, coordinated with the AuraPoly token integration and broader dApp launches. The Proof of Encrypted Work mining protocol launches publicly in Q4 2026 with genesis emissions beginning against real workload mix. Chain-agnostic expansion onto a second chain begins Q1 2027. Each milestone is a demoable, announceable event rather than a promise.",
      },
    },
    {
      "@type": "Question",
      name: "How does Aura FHE compare to Zama?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zama has established itself as Ethereum's encryption layer, validated by $130M+ raised and ERC-7984 ratification. Aura FHE targets Solana, where Zama's CPU-based approach (20+ TPS, GPU acceleration targeting 'hundreds of TPS per chain' by Q3 2026) cannot match Solana's 400ms block time. Aura's bootstrap-free LUT-FHE is fundamentally different mathematics designed for chain-speed finance — integer addition in ~0.04μs versus Zama's ~50ms gate evaluation, with a 3.7MB WASM runtime. The two protocols are optimized for different chain regimes rather than directly competing.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Aura FHE's technology different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aura FHE's core innovation is LUT-FHE — a fully homomorphic encryption scheme built on precomputed lookup tables defined over Multivariate Quadratic structure rather than ring-based ciphertext arithmetic. Two structural advantages follow. First, the scheme is bootstrap-free: the algebraic structure does not accumulate noise, so there is no need for the expensive ciphertext refresh that bottlenecks every lattice-based FHE scheme. Second, security reduces to MQ-hardness, proven NP-hard and post-quantum secure. The construction is the product of more than 12 years of cryptographic research and is protected by 9 patents.",
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

export type ArticleSchemaInput = {
  slug: string;
  title: string;
  date: string;
  image: string | null;
  description: string;
};

export function buildArticleSchema(article: ArticleSchemaInput) {
  const url = `${SITE_URL}/blog/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    image: article.image ? [article.image] : [LOGO_URL],
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_URL}/blog#blog` },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildBlogSchema(
  articles: { slug: string; title: string; date: string; description: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: `${SITE_NAME} Blog`,
    description:
      "Engineering notes on fully homomorphic encryption, private DeFi, and the cryptography behind Aura.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/${article.slug}#article`,
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      url: `${SITE_URL}/blog/${article.slug}`,
    })),
  };
}

export { SITE_URL, SITE_NAME };
