import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[color:var(--color-border)]">
      <div className="container-wide flex flex-col gap-3 py-10 text-[13px] text-[color:var(--color-fg-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear()} doublewater · 出海，AI 追赶浪潮的人。
        </p>
        <div className="flex items-center gap-5">
          <Link href="/rss.xml" className="link-underline hover:text-[color:var(--color-fg)]">
            RSS
          </Link>
          <a
            href={site.social.twitter}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-[color:var(--color-fg)]"
          >
            X / Twitter
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-[color:var(--color-fg)]"
          >
            GitHub
          </a>
          <a href={site.social.email} className="link-underline hover:text-[color:var(--color-fg)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
