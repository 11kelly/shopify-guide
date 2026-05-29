import { defineConfig } from "vitepress";

const quoteAppSidebar = [
  {
    text: "Quote App 使用手册",
    items: [
      { text: "快速入门", link: "/quote/getting-started" },
      { text: "报价单管理", link: "/quote/quote-management" },
      { text: "前台报价单管理", link: "/quote/storefront-quote-management" },
      { text: "定价与规则", link: "/quote/pricing-rules" },
      { text: "邮件与通知", link: "/quote/emails-notifications" },
      { text: "批量操作与数据", link: "/quote/bulk-data" },
      { text: "系统设置", link: "/quote/settings-permissions" },
    ],
  },
];

export default defineConfig({
  lang: "zh-CN",
  title: "Quote App 文档",
  description: "Quote App 使用说明手册 - 专业的 Shopify B2B 报价单系统",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "使用手册", link: "/quote/getting-started", activeMatch: "^/quote/" },
    ],
    sidebar: {
      "/quote/": quoteAppSidebar,
    },
    socialLinks: [],
  },
});
