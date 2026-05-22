import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllArticleSlugs,
  getArticleBySlug,
} from "@/lib/cms/articles";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  SITE_URL,
} from "@/lib/seo/structured-data";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  const url = `${SITE_URL}/blog/${article.slug}`;
  const images = article.image ? [article.image] : [];
  return {
    title: `${article.title} · AFHE`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      modifiedTime: article.date,
      images,
      siteName: "AFHE",
    },
    twitter: {
      card: images.length ? "summary_large_image" : "summary",
      title: article.title,
      description: article.description,
      images,
      site: "@AfheLabs",
      creator: "@AfheLabs",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const articleSchema = buildArticleSchema(article);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: article.title, url: `${SITE_URL}/blog/${article.slug}` },
  ]);

  return (
    <main className="flex-1 px-6 py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-p14 text-muted-text hover:text-accent-1 transition-colors"
        >
          ← Back to blog
        </Link>

        <header className="mt-8 mb-12 space-y-6">
          <p className="text-p14 text-muted-text">
            {article.date
              ? dateFormatter.format(new Date(article.date))
              : ""}
          </p>
          <h1 className="text-h2 text-dark-text text-left">{article.title}</h1>
        </header>

        {article.image && (
          <div className="relative aspect-[16/10] mb-12 overflow-hidden rounded-2xl bg-[var(--color-elevated)] ring-1 ring-[var(--color-border-token)]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        )}

        <article
          className="prose-article"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </div>
    </main>
  );
}
