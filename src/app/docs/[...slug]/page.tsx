import Link from "next/link";
import { notFound } from "next/navigation";
import { DocsSidebar } from "@/components/docs/sidebar";
import {
  getAllDocSlugs,
  getDocBySlug,
  getDocGroups,
} from "@/lib/cms/docs";
import { SITE_URL } from "@/lib/seo/structured-data";

export async function generateStaticParams() {
  const slugs = await getAllDocSlugs();
  return slugs.map((segments) => ({ slug: segments }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const joined = slug.join("/");
  const doc = await getDocBySlug(joined);
  if (!doc) return {};
  const url = `${SITE_URL}/docs/${joined}`;
  return {
    title: `${doc.title} · AFHE Docs`,
    description: doc.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: doc.title,
      description: doc.description,
      siteName: "AFHE",
    },
  };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const joined = slug.join("/");
  const [doc, groups] = await Promise.all([
    getDocBySlug(joined),
    getDocGroups(),
  ]);
  if (!doc) notFound();

  const flat = groups.flatMap((g) => g.items);
  const idx = flat.findIndex((d) => d.slug === doc.slug);
  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;

  return (
    <div className="docs-shell">
      <DocsSidebar groups={groups} />
      <main className="docs-main">
        <div className="docs-header">
          <div className="crumbs">
            <Link href="/docs">/docs</Link>
            <span> / </span>
            <span>{doc.group}</span>
          </div>
          <h1>{doc.title}</h1>
          {doc.description && <p className="deck">{doc.description}</p>}
        </div>

        <article
          className="prose-article"
          dangerouslySetInnerHTML={{ __html: doc.html }}
        />

        {(prev || next) && (
          <nav className="docs-pager">
            {prev ? (
              <Link href={`/docs/${prev.slug}`} className="docs-pager-link prev">
                <span className="docs-pager-dir">← Previous</span>
                <span className="docs-pager-title">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/docs/${next.slug}`} className="docs-pager-link next">
                <span className="docs-pager-dir">Next →</span>
                <span className="docs-pager-title">{next.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}
      </main>
    </div>
  );
}
