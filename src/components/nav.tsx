"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--color-border)]/60 bg-[color:var(--color-bg)]/80 backdrop-blur">
      <div className="container-wide flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-mono text-[15px] tracking-tight text-[color:var(--color-fg)] hover:text-[color:var(--color-accent)]"
        >
          doublewater
        </Link>
        <nav className="flex items-center gap-1 text-[14px]">
          {site.nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "rounded-md px-3 py-1.5 transition " +
                  (active
                    ? "text-[color:var(--color-fg)]"
                    : "text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)]")
                }
              >
                {item.label}
              </Link>
            );
          })}
          <span className="mx-1 h-4 w-px bg-[color:var(--color-border)]" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
