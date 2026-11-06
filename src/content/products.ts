export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights?: string[];
  /** 没有公开地址的产品（比如内部工具）不填 */
  url?: string;
  platform?: string;
  year: string;
  status: "live" | "building" | "archived";
};

export const products: Product[] = [
  {
    slug: "spitnova",
    name: "Spitnova",
    tagline: "上传一张照片，生成你自己的说唱表演视频。",
    description:
      "面向海外社媒创作者的 AI 说唱视频工具。选一个正在流行的说唱场景，上传照片，就能生成单人或双人的表演视频，不用写提示词。",
    highlights: [
      "接入 ByteDance Seedance 2.0 / 2.5 模型，异步生成，失败自动退还积分",
      "支持英、中、意、西、葡、法、德 7 种语言",
      "Stripe 订阅加积分包两种付费方式"
    ],
    url: "https://spitnova.com",
    platform: "Web",
    year: "2026",
    status: "live"
  },
  {
    slug: "vidlantern",
    name: "Vidlantern",
    tagline: "给照片选一个场景，让它动起来。",
    description:
      "用照片生成原创 AI 视频。奇幻、时尚、宠物、飞行汽车、双人说唱等场景任选，上传后先确认图片和价格再生成，不需要提示词。",
    url: "https://vidlantern.com",
    platform: "Web",
    year: "2026",
    status: "live"
  },
  {
    slug: "beforeshow",
    name: "开场前 BeforeShow",
    tagline: "给下一场演唱会留一个安静的倒数。",
    description:
      "为演唱会、音乐节和 Livehouse 做的倒计时 App。记下下一场，开场前收提醒、预习歌单，散场后留下评分和记忆碎片。",
    highlights: [
      "实时活动与灵动岛，锁屏就能看到倒计时和谁在台上",
      "音乐节时刻表：多个舞台同屏对照，撞档一眼看清",
      "海报、链接或截图三步记下一场现场",
      "按年订阅或一次买断解锁无限现场"
    ],
    url: "https://apps.apple.com/app/id6780078298",
    platform: "iOS",
    year: "2026",
    status: "live"
  },
  {
    slug: "launchkit",
    name: "LaunchKit",
    tagline: "我自己的出海建站底座，一条命令开一个新站。",
    description:
      "Spitnova、Vidlantern、TurnImageIntoVideo 都跑在这套底座上。基于 Cloudflare Workers、D1、R2 和 Stripe，登录、支付、积分、AI 生成、后台和 SEO 都是现成的，新站只需要写配置和页面。",
    highlights: [
      "新站基建自动配置：DNS、数据库、存储、人机验证、发信、收信、GSC / GA4",
      "AI 生成引擎：积分预扣、失败退还、供应商回调加定时兜底",
      "每日备份、每周恢复演练、5 分钟可用性巡检、飞书告警和日报",
      "每个页面的关键词、搜索意图和外链都有记录，不完整就不允许发布"
    ],
    platform: "内部工具",
    year: "2026",
    status: "live"
  },
  {
    slug: "turnimageintovideo",
    name: "TurnImageIntoVideo",
    tagline: "把图片变成视频，无水印下载 MP4。",
    description:
      "上传 JPG、PNG 或 WEBP 图片，用 AI 生成视频并下载 MP4。按积分付费，没有水印。",
    url: "https://turnimageintovideo.com",
    platform: "Web",
    year: "2026",
    status: "live"
  },
  {
    slug: "pagepilot",
    name: "PagePilot",
    tagline: "用 Apple Watch 翻页的电子书阅读器。",
    description:
      "适用于 iPhone、iPad 和 Mac 的阅读器。抬起手腕，点一下手表或转动数码表冠就能翻页，躺着、做饭、跑步机上看书都不用碰屏幕。",
    highlights: [
      "WatchConnectivity 双端通信，翻页几乎没有延迟",
      "多格式电子书解析、分页排版和阅读进度同步"
    ],
    url: "https://apps.apple.com/app/id6760964443",
    platform: "iOS · iPadOS · macOS · watchOS",
    year: "2026",
    status: "live"
  },
  {
    slug: "pocket-mole-watch",
    name: "Pocket Mole: Watch Game",
    tagline: "手表上的打地鼠小游戏，通勤路上也能玩一局。",
    description:
      "一款为 Apple Watch 设计的极简打地鼠游戏。专注单手操作、短时长的沉浸体验，利用 Digital Crown 和 Haptic 反馈，让 30 秒也能成为一次放松。",
    url: "https://apps.apple.com/app/pocket-mole-watch/id6766255492",
    platform: "Apple Watch · iOS",
    year: "2026",
    status: "live"
  },
  {
    slug: "stock-average-calculators",
    name: "Stock Average Calculators",
    tagline: "一站式股票成本均价与盈亏计算工具集。",
    description:
      "面向散户与长期投资者的在线计算器合集：摊薄成本、止盈止损、复利计划、汇率换算等。不需要注册，打开就算。",
    url: "https://www.stockaveragecalculators.com/",
    platform: "Web",
    year: "2026",
    status: "live"
  }
];
