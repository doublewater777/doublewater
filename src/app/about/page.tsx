import type { Metadata } from "next";
import Link from "next/link";
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
          你好，我是潘洋（doublewater）
        </h1>
      </header>

      <div className="prose-dw">
        <p>
          我是一名全栈工程师，现在全职做独立产品，人在杭州。2023 年从杭州电子科技大学信息安全专业毕业后，在同花顺做了三年前端和 AI 应用研发，做过期货通 App 的配置化首页、金融组件插件化，也给团队写了一个 MCP Server，让 AI 生成的业务代码能直接用。
        </p>

        <p>
          2026 年 7 月我离开公司，开始一个人做产品。我把自己定义成<strong>一个 AI 浪潮里的追赶者</strong>——不是发明家，也不是旁观者，而是手里一直有工具、一直在打磨的那类人。
        </p>

        <h2>我在做什么</h2>
        <ul>
          <li>
            <strong>海外 AI 视频站</strong>：<Link href="/products/spitnova">Spitnova</Link>、
            <Link href="/products/vidlantern">Vidlantern</Link>、
            <Link href="/products/turnimageintovideo">TurnImageIntoVideo</Link>，从选词、做页面到 Stripe 收款都自己来。
          </li>
          <li>
            <strong>建站底座</strong>：这些站都跑在我自己搭的{" "}
            <Link href="/products/launchkit">LaunchKit</Link> 上，开一个新站只需要一条命令。
          </li>
          <li>
            <strong>Apple 生态小 App</strong>：演唱会倒计时{" "}
            <Link href="/products/beforeshow">开场前</Link>、用手表翻页的{" "}
            <Link href="/products/pagepilot">PagePilot</Link>、手表打地鼠{" "}
            <Link href="/products/pocket-mole-watch">Pocket Mole</Link>。
          </li>
        </ul>

        <h2>我在关心什么</h2>
        <ul>
          <li>如何把 AI 真正用进产品里，而不是当噱头。</li>
          <li>独立开发者怎么做出海：选词、SEO、外链、付费转化。</li>
          <li>怎么让多个 AI Agent 并行干活，一个人也能维护好几个产品。</li>
          <li>克制的设计与快速的迭代如何共存。</li>
        </ul>

        <h2>找到我</h2>
        <p>
          常出没于{" "}
          <a href={site.social.twitter} target="_blank" rel="noreferrer">
            X / Twitter
          </a>{" "}
          和{" "}
          <a href={site.social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          ，也可以发邮件到 <a href={site.social.email}>{site.author.email}</a>。合作、交流、工作机会，或者只是打个招呼，都欢迎。
        </p>

        <hr />

        <p className="text-[color:var(--color-fg-muted)]">
          这个站是我给自己的档案室，也是给后来人的路标。希望对你有用。
        </p>
      </div>
    </article>
  );
}
