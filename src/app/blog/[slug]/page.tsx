import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllArticleSlugs,
  getArticleBySlug,
} from "@/lib/cms/articles";

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
  return {
    title: `${article.title} · AFHE`,
    openGraph: { images: article.image ? [article.image] : [] },
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

  return (
    <main className="flex-1 px-6 py-24 sm:py-32">
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
