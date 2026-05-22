/*
 * JSON-LD structured data — Organization, WebSite, SoftwareApplication, FAQ.
 * Ported from Framer's SEOStructuredData component but rewritten as plain
 * builders so they can be injected at the layout level (server-rendered) via
 * <script type="application/ld+json">, no useEffect needed.
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
  sameAs: [
    `https://x.com/${TWITTER_HANDLE}`,
    LINKEDIN_URL,
    DISCORD_URL,
  ],
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
    "Privacy infrastructure enabling computation on encrypted data without decryption. 100x faster than existing FHE solutions with post-quantum security.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/ComingSoon",
  },
  featureList: [
    "100x faster than existing FHE implementations",
    "~0.1 second verification time",
    "50 tokens/second encrypted LLM inference",
    "Post-quantum security (MQ-hardness)",
    "Blockchain-agnostic coprocessor model",
    "Consumer-grade hardware support",
  ],
  provider: { "@id": `${SITE_URL}/#organization` },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Fully Homomorphic Encryption (FHE)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fully Homomorphic Encryption (FHE) is a form of encryption that allows computations to be performed on encrypted data without decrypting it first. The result of the computation remains encrypted and can only be decrypted by the data owner. This enables privacy-preserving computation for sensitive data.",
      },
    },
    {
      "@type": "Question",
      name: "How fast is AFHE compared to other FHE solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AFHE is 100x faster than existing FHE implementations. While competitors like Zama's TFHE take seconds to minutes per operation, AFHE achieves ~0.1 second verification time. For CNN model inference, AFHE achieves 13,500x speedup vs Microsoft CKKS and 84,500x speedup vs Zama TFHE.",
      },
    },
    {
      "@type": "Question",
      name: "Is AFHE quantum-resistant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, AFHE uses MQ-hardness (Multivariate Quadratic problems) which is proven NP-hard and has withstood 40+ years of cryptanalysis with no practical attacks. It provides 128-bit security against both classical and quantum computers, making it immune to Shor's algorithm.",
      },
    },
    {
      "@type": "Question",
      name: "What can AFHE be used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AFHE enables Private DeFi (encrypted trading, dark pools, private lending), Private AI (medical AI with encrypted health data, legal AI preserving attorney-client privilege, financial AI without exposing strategies), and any application requiring computation on sensitive data without exposing it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the AFHE token used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AFHE token has four main utilities: (1) Staking to secure the coprocessor network, (2) Governance voting on protocol parameters via veAFHE, (3) Paying fees for encrypted computation, and (4) Earning rewards for providing compute resources. Total supply is 10 billion with 50% distributed via fair PoW mining.",
      },
    },
    {
      "@type": "Question",
      name: "When will AFHE mainnet launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AFHE mainnet is planned for Q1-Q2 2026, following the public testnet phase in Q3-Q4 2025. The roadmap includes SDK releases for JavaScript, Python, and Rust, with a native L1 blockchain planned for 2027+.",
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
