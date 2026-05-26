import Link from "next/link";
import { DocsSidebar } from "@/components/docs/sidebar";
import { getDocGroups, getDocsLanding } from "@/lib/cms/docs";
import { SITE_URL } from "@/lib/seo/structured-data";

const DOCS_DESCRIPTION =
  "Build encrypted, private DeFi on Solana with the Aura FHE SDK.";

export const metadata = {
  title: "Documentation · AFHE",
  description: DOCS_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/docs` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/docs`,
    title: "AFHE Documentation",
    description: DOCS_DESCRIPTION,
    siteName: "AFHE",
  },
};

export default async function DocsIndexPage() {
  const [groups, landing] = await Promise.all([
    getDocGroups(),
    getDocsLanding(),
  ]);

  return (
    <div className="docs-shell">
      <DocsSidebar groups={groups} />
      <main className="docs-main">
        <div className="docs-header">
          <div className="crumbs">/docs</div>
          <h1>{landing?.title ?? "Documentation"}</h1>
          {landing?.description && (
            <p className="deck">{landing.description}</p>
          )}
        </div>

        {landing?.html && (
          <article
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: landing.html }}
          />
        )}

        <div className="docs-grid">
          {groups.map((g) => (
            <div key={g.title} className="docs-grid-card">
              <div className="docs-grid-title">{g.title}</div>
              <ul>
                {g.items.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/docs/${item.slug}`}>
                      <span>{item.title}</span>
                      <span className="arr">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
