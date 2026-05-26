"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DocGroup } from "@/lib/cms/docs";

export function DocsSidebar({ groups }: { groups: DocGroup[] }) {
  const pathname = usePathname();
  return (
    <aside className="docs-sidebar">
      <Link
        href="/docs"
        className={`docs-sidebar-home ${pathname === "/docs" ? "active" : ""}`}
      >
        Overview
      </Link>
      {groups.map((g) => (
        <div key={g.title} className="docs-sidebar-group">
          <div className="docs-sidebar-group-title">{g.title}</div>
          <ul>
            {g.items.map((item) => {
              const href = `/docs/${item.slug}`;
              const active = pathname === href;
              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    className={`docs-sidebar-link ${active ? "active" : ""}`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
