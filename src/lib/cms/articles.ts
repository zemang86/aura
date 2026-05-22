import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Article = {
  slug: string;
  title: string;
  date: string;
  image: string | null;
  html: string;
  description: string;
};

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function deriveDescription(html: string, explicit?: string): string {
  if (explicit) return explicit;
  const firstParagraph = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] ?? "";
  const text = firstParagraph
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= 160) return text;
  return text.slice(0, 157).trimEnd() + "…";
}

async function readArticleFile(filename: string): Promise<Article> {
  const slug = filename.replace(/\.md$/, "");
  const raw = await fs.readFile(path.join(ARTICLES_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const html = content.trim();
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    image: data.image ? String(data.image) : null,
    html,
    description: deriveDescription(html, data.description ? String(data.description) : undefined),
  };
}

export async function getAllArticles(): Promise<Article[]> {
  const files = await fs.readdir(ARTICLES_DIR);
  const articles = await Promise.all(
    files.filter((f) => f.endsWith(".md")).map(readArticleFile),
  );
  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    return await readArticleFile(`${slug}.md`);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const files = await fs.readdir(ARTICLES_DIR);
  return files.filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}
