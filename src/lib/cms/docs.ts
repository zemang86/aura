import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const DOCS_DIR = path.join(process.cwd(), "content", "docs");

type DocFrontmatter = {
  title?: string;
  description?: string;
  order?: number;
  group?: string;
  group_order?: number;
};

export type DocMeta = {
  slug: string;
  segments: string[];
  title: string;
  description?: string;
  order: number;
  group: string;
  groupOrder: number;
};

export type Doc = DocMeta & { html: string };

export type DocGroup = {
  title: string;
  order: number;
  items: DocMeta[];
};

async function walk(dir: string, root = dir): Promise<string[]> {
  const out: string[] = [];
  let entries: import("node:fs").Dirent[] = [];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return out;
    throw err;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full, root)));
    else if (e.name.endsWith(".md")) out.push(path.relative(root, full));
  }
  return out;
}

function relToSlug(rel: string): { slug: string; segments: string[] } {
  const noExt = rel.replace(/\\/g, "/").replace(/\.md$/, "");
  if (noExt === "index") return { slug: "", segments: [] };
  if (noExt.endsWith("/index")) {
    const trimmed = noExt.slice(0, -"/index".length);
    return { slug: trimmed, segments: trimmed.split("/") };
  }
  return { slug: noExt, segments: noExt.split("/") };
}

async function readDocFile(rel: string): Promise<Doc> {
  const raw = await fs.readFile(path.join(DOCS_DIR, rel), "utf8");
  const { data, content } = matter(raw);
  const fm = data as DocFrontmatter;
  const { slug, segments } = relToSlug(rel);
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);
  const html = String(processed);
  return {
    slug,
    segments,
    title: fm.title ?? slug.split("/").pop() ?? "Untitled",
    description: fm.description,
    order: fm.order ?? 999,
    group: fm.group ?? "Docs",
    groupOrder: fm.group_order ?? 999,
    html,
  };
}

export async function getAllDocs(): Promise<Doc[]> {
  const files = await walk(DOCS_DIR);
  return Promise.all(files.map(readDocFile));
}

export async function getDocBySlug(slug: string): Promise<Doc | null> {
  const candidates = slug ? [`${slug}.md`, `${slug}/index.md`] : ["index.md"];
  for (const c of candidates) {
    try {
      return await readDocFile(c);
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
    }
  }
  return null;
}

export async function getAllDocSlugs(): Promise<string[][]> {
  const docs = await getAllDocs();
  return docs.filter((d) => d.segments.length > 0).map((d) => d.segments);
}

export async function getDocGroups(): Promise<DocGroup[]> {
  const docs = await getAllDocs();
  const map = new Map<string, DocGroup>();
  for (const d of docs) {
    if (d.segments.length === 0) continue;
    const existing = map.get(d.group);
    const g: DocGroup = existing ?? {
      title: d.group,
      order: d.groupOrder,
      items: [],
    };
    g.items.push({
      slug: d.slug,
      segments: d.segments,
      title: d.title,
      description: d.description,
      order: d.order,
      group: d.group,
      groupOrder: d.groupOrder,
    });
    g.order = Math.min(g.order, d.groupOrder);
    map.set(d.group, g);
  }
  for (const g of map.values()) {
    g.items.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
  }
  return [...map.values()].sort(
    (a, b) => a.order - b.order || a.title.localeCompare(b.title),
  );
}

export async function getDocsLanding(): Promise<Doc | null> {
  return getDocBySlug("");
}
