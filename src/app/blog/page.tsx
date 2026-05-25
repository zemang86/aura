import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/cms/articles";
import { buildBlogSchema, SITE_URL } from "@/lib/seo/structured-data";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const BLOG_DESCRIPTION =
  "Engineering notes on fully homomorphic encryption, private DeFi, and the cryptography behind Aura.";

export const metadata = {
  title: "Blog · AFHE",
  description: BLOG_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "AFHE Blog — Engineering notes on FHE and private DeFi",
    description: BLOG_DESCRIPTION,
    siteName: "AFHE",
  },
  twitter: {
    card: "summary",
    title: "AFHE Blog",
    description: BLOG_DESCRIPTION,
    site: "@AfheLabs",
  },
};

export default async function BlogPage() {
  const articles = await getAllArticles();
  const blogSchema = buildBlogSchema(articles);

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-meta">/blog · Engineering notes</div>
          <h1>
            Notes from the <em>encrypted</em> stack.
          </h1>
          <p className="page-hero-deck">
            Deep dives on fully homomorphic encryption, private DeFi, and the
            engineering behind Aura.
          </p>
        </div>
      </section>

      <section className="m-section">
        <div className="m-section-inner">
          <ul className="blog-list">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link href={`/blog/${article.slug}`} className="blog-card">
                  {article.image && (
                    <div className="img-wrap">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <span className="meta">
                    {article.date
                      ? dateFormatter.format(new Date(article.date))
                      : ""}
                  </span>
                  <h2>{article.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
