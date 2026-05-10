# doublewater.me

个人站 — 出海，AI 追赶浪潮的人。

## 技术栈

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** — 原子化样式
- **MDX** — 博客正文，文件即内容
- **next-themes** — 深浅色切换（带 View Transitions）
- **Vercel** — 部署

## 目录结构

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # 关于页
│   ├── products/          # 产品列表 + 详情
│   ├── thoughts/          # 想法列表 + 文章
│   ├── rss.xml/           # RSS feed
│   ├── sitemap.ts         # 站点地图
│   ├── robots.ts          # 爬虫规则
│   ├── not-found.tsx      # 404 页
│   ├── layout.tsx         # 根布局（导航 + 页脚 + 主题）
│   ├── page.tsx           # 首页
│   └── globals.css        # 设计系统 + Tailwind
├── components/            # 共享组件（Nav / Footer / ThemeToggle ...）
├── content/
│   ├── products.ts        # 产品数据
│   └── thoughts/*.mdx     # 文章（MDX）
└── lib/
    ├── site.ts            # 站点配置
    └── thoughts.ts        # MDX 读取 + 工具函数
```

## 本地开发

```bash
pnpm install         # 或 npm install / yarn
pnpm dev             # http://localhost:3000
pnpm build           # 构建
pnpm start           # 运行生产构建
```

## 写一篇新想法

在 `src/content/thoughts/` 下新建一个 `.mdx` 文件：

```md
---
title: 你的标题
date: 2026-05-10
summary: 一句话摘要
tags: ["AI", "随笔"]
---

正文用 Markdown 写，支持 GFM、代码块、引用。
```

保存后自动出现在 `/thoughts` 列表与首页最近想法中。

## 加一个产品

编辑 `src/content/products.ts`，追加一项：

```ts
{
  slug: "your-product",
  name: "Product Name",
  tagline: "一句话介绍",
  description: "详细描述……",
  url: "https://...",
  platform: "Web",
  year: "2026",
  status: "live" // 或 "building" / "archived"
}
```

## 部署到 Vercel

1. Push 到 GitHub
2. 登录 Vercel → Import Project → 选择此仓库
3. 框架自动识别为 Next.js，直接 Deploy
4. （可选）在 Vercel 项目设置里绑定你的自定义域名 `doublewater.me`

## License

MIT © doublewater
