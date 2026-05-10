import { getAllThoughts } from "@/lib/thoughts";
import { site } from "@/lib/site";

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const thoughts = getAllThoughts();
  const items = thoughts
    .map(
      (t) => `
    <item>
      <title>${escape(t.title)}</title>
      <link>${site.url}/thoughts/${t.slug}</link>
      <guid>${site.url}/thoughts/${t.slug}</guid>
      <pubDate>${new Date(t.date).toUTCString()}</pubDate>
      <description>${escape(t.summary)}</description>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(site.title)}</title>
    <link>${site.url}</link>
    <description>${escape(site.description)}</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
