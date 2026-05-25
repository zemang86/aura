import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Aura FHE",
  description:
    "Get in touch with Aura FHE for partnerships, press inquiries, or technical integration support.",
};

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

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-meta">Contact · Direct line</div>
          <h1>
            Get in <em>touch.</em>
          </h1>
          <p className="page-hero-deck">
            Reach out for partnerships, press, or integration questions. For
            real-time questions, Discord is the fastest path in.
          </p>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>Send us a message.</h2>
            <div className="right">
              We typically respond within two business days. For urgent
              partnership conversations, mention &ldquo;urgent&rdquo; in the
              topic.
            </div>
          </div>

          <div style={{ maxWidth: 880 }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <div className="m-section-head">
            <h2>Find us in the wild.</h2>
            <div className="right">
              For real-time questions and ecosystem updates, our community
              channels are the fastest path in.
            </div>
          </div>

          <div className="soc-row">
            {SOCIALS.map((s) => {
              const external = !s.href.startsWith("/");
              if (external) {
                return (
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
                );
              }
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="soc-ring"
                >
                  {s.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
