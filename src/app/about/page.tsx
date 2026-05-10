import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "关于",
  description: `关于 ${site.title}`
};

export default function AboutPage() {
  return (
    <article className="container-prose py-20">
      <header className="mb-12">
        <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-fg-subtle)]">
          About
        </p>
        <h1 className="text-[34px] font-semibold leading-tight tracking-tight">
          你好，我是 doublewater
        </h1>
      </header>

      <div className="prose-dw">
        <p>
          我是一个正在做独立产品的人。做过 Web、iOS、Apple Watch 上的小东西，
          也在学着把产品推到海外市场。写代码这件事我一直都在做，但真正开始「独立地做产品」是近两年的事。
        </p>

        <p>
          我把自己定义成<strong>一个 AI 浪潮里的追赶者</strong>——不是发明家，
          也不是旁观者，而是手里一直有工具、一直在打磨的那类人。
        </p>

        <h2>我在关心什么</h2>
        <ul>
          <li>如何把 AI 真正用进产品里，而不是当噱头。</li>
          <li>独立开发者怎么做出海：从选题、投放到留存。</li>
          <li>小而美的产品形态——Apple Watch / 浏览器插件 / 桌面小工具。</li>
          <li>克制的设计与快速的迭代如何共存。</li>
        </ul>

        <h2>我在哪里</h2>
        <p>
          常出没于{" "}
          <a href={site.social.twitter} target="_blank" rel="noreferrer">
            X / Twitter
          </a>{" "}
          和{" "}
          <a href={site.social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          ， 也可以通过 <a href={site.social.email}>邮件</a> 联系我。合作、交流、甚至只是打个招呼，都欢迎。
        </p>

        <hr />

        <p className="text-[color:var(--color-fg-muted)]">
          这个站是我给自己的档案室，也是给后来人的路标。希望对你有用。
        </p>
      </div>
    </article>
  );
}
