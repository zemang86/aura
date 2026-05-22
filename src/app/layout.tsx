import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { allSchemas } from "@/lib/seo/structured-data";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "AFHE — Privacy Infrastructure for the Post-Quantum Era",
    template: "%s · AFHE",
  },
  description:
    "AFHE enables computation on encrypted data without decryption. 100x faster than existing FHE solutions, post-quantum secure, and built for private DeFi on Solana.",
  metadataBase: new URL("https://afhe.io"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "AFHE",
    url: "https://afhe.io",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AfheLabs",
    creator: "@AfheLabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {allSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
