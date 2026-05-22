import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { allSchemas } from "@/lib/seo/structured-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFallback = Instrument_Serif({
  variable: "--font-display-fallback",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "AFHE",
  description:
    "A foundation for human evolution — porting AFHE from Framer to Next.js.",
  metadataBase: new URL("https://www.afhe.io"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${displayFallback.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {allSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
