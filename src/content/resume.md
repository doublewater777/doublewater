# 潘洋
**全栈工程师 / AI 应用工程师（3 年经验）**

panyang20020203@gmail.com | doublewater.vercel.app | github.com/doublewater777 | 杭州
杭州电子科技大学 · 信息安全 本科（2019–2023）| CET-6 | 校级一等奖学金

---

## 核心优势

- **金融级前端架构**：同花顺 3 年核心业务研发，主导 Hummer 跨端配置化与插件化重构，迭代效率提升 **50%**，核心模块日活增长 **38%**。
- **AI 工程化与团队赋能**：自研企业级 MCP Server，把私有组件库和 API 规范结构化成 AI 上下文，AI 生成业务代码可用率从 **60% 提升到 85%**；推动团队 AI 编程工具深度使用率从 **20% 提升到 80%**。
- **0→1 全栈交付与海外商业化**：2026.07 起独立上线 AI 视频 SaaS Spitnova 和两款 iOS / watchOS 原生 App（BeforeShow、PagePilot），跑通 Stripe 和 App Store 内购收款；自研出海站群底座 LaunchKit，目前承载 **3** 个线上 AI 视频站。

---

## 技术栈

- **前端与全栈**：TypeScript / React / Next.js / TanStack Start / Vue / Tailwind CSS / Node.js / H5 / Hummer 跨端
- **出海基建**：Cloudflare Workers · D1 · R2 · Turnstile / Drizzle / Better Auth / Stripe 订阅与积分 / Resend / GitHub Actions
- **原生与跨设备**：Swift / SwiftUI / ActivityKit 灵动岛 / MusicKit / watchOS WatchConnectivity
- **工程化与架构**：组件库设计、动态配置协议、插件化架构、pnpm Monorepo、动态 i18n 治理、技术 SEO
- **AI 应用工程**：MCP Server 研发、LLM API 工程化、视频模型接入（Seedance、fal）、AI Spec 工作流、多 Agent 并行开发

---

## 工作与项目经历

### 独立开发者 · AI 出海产品 | 2026.07 – 至今
独立负责产品判断、全栈开发、上线、收款和增长。

**1. LaunchKit：出海 AI 站群底座（私有仓库 · 承载 3 个线上站）**
- **架构**：pnpm monorepo，分为共享底座（路由、登录、支付、积分、AI 引擎、后台、数据库迁移）、7 个 AI 业务模板（图像 / 视频 / 语音 Agent 等）和 CLI。每个站只保留自己的配置和 UI，底座修复一次，所有站点同步受益。
- **一条命令开站**：自动配置 DNS、D1/R2、Turnstile、Resend 发信域名、收信转发、GSC/GA4/Clarity 和 AI 供应商密钥；上线后自动自检。
- **AI 生成与计费**：积分预扣、失败自动退还，供应商回调加定时任务兜底；Stripe 订阅、积分包、客户门户，支付对账与退款全链路。
- **运维与 SEO 自动化**：GitHub Actions 逐站部署，D1 每日备份、每周恢复演练，5 分钟可用性巡检，飞书告警和日/周/月报表；每个页面的 SEO 档案（关键词、搜索意图、GSC、外链）缺项时禁止发布。
- 线上站点：spitnova.com · vidlantern.com · turnimageintovideo.com

**2. Spitnova（spitnova.com）：AI 说唱 / 音乐视频 SaaS**
- 用户上传照片，即可生成单人或双人说唱表演视频，面向海外社媒创作者。
- 接入 ByteDance Seedance 2.0 / 2.5 模型族，构建异步任务队列、状态轮询与失败恢复；高级模板按模型成本和每积分净收入核算定价。
- 支持 7 种语言，Stripe 订阅加积分包双轨收费；做了结构化数据、动态 Sitemap、长尾关键词着陆页和外链投放。

**3. 开场前 BeforeShow：现场演出记录 App（App Store 已上线 · 已有付费）**
- 独立完成暗色舞台风格的视觉设计和 Swift/SwiftUI 原生开发。
- Timetable 智能导入：结合 OCR 和结构化解析，把音乐节多舞台排期一键转成个人观演日程。
- ActivityKit 实时活动，在锁屏和灵动岛追踪演出进程；联动 Apple Music；跑通 App 内订阅和社媒冷启动。

**4. PagePilot：Apple Watch 控制的阅读器（iOS + watchOS 已上线 · 已有付费）**
- 基于 WatchConnectivity 实现双端低延迟通信，手表点击或数码表冠即可翻动手机上的页面。
- 实现多格式电子书解析、分页排版和跨设备阅读进度同步。

### 杭州星锐网讯科技有限公司（同花顺）| 前端 / AI 应用研发 | 2023.07 – 2026.07

**1. 期货通 App：KYC 个性化首页配置化重构**
- 把首页从硬编码重构为「原子组件 + 配置协议」驱动的动态渲染框架。
- 基于 Hummer 跨端抽象通用卡片模型，按用户认证状态和交易阶段千人千面下发。
- 新卡片上线周期从「跟随发版」缩短到分钟级下发，迭代效率提升 **50%**；组件点击率 **67%**（↑15%），次留 **75%**（↑67%），模块日活从 16 万增长到 **22 万**（↑38%）。

**2. 期货通 App：金融数据组件插件化 + 企业级 MCP Server**
- 主导金融组件插件化架构，在资讯流和营销页中跨场景复用。
- 行情、持仓等 **10+** 种金融表格改为数据驱动的通用渲染，每年减少约 **32** 人天重复开发。
- 设计插件 AI Spec 代码生成流程，自研公司级 MCP Server，把私有组件库、API 规范和业务规则结构化成 AI 上下文，业务代码可用率从 **60%** 提升到 **85%**。
- 插件业务日均曝光 **14.66 万**，日均点击 **6,819**，转化率 **3%–4%**。

**3. 多语言低代码 AI 平台**
- 独立负责前台画布和后台管理系统，支持 AI 辅助生成、可视化拖拽和多端自适应。
- 解决编辑态和线上渲染不一致的问题，所见即所得还原度达到 **95%+**；设计动态 i18n 治理方案，平台已上线并服务内部核心业务。

**4. 团队 AI 落地**
- 主办公司内部 Vibe Coding 编程比赛（**53** 人参与），沉淀团队 AI 开发规范，推动 Cursor 深度使用率从 **20%** 提升到 **80%**。
- 统一前端公共方法库和类型规范，让 AI 编程工具能更好地理解存量代码。

---

## 其他

- 哥飞出海 SEO 社群成员，长期跟踪海外关键词增长、GEO 和 AI 产品变现。
- 日常同时使用 Claude Code、Codex、Cursor 等多个 Agent 并行开发。
