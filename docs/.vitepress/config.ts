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

const storeLocatorSidebar = [
  {
    text: "Store Locator 使用手册",
    items: [
      { text: "快速开始", link: "/store-locator/guide/getting-started" },
      { text: "发布定位器", link: "/store-locator/guide/publish-locator" },
      { text: "门店管理", link: "/store-locator/guide/managing-stores" },
      { text: "外观定制", link: "/store-locator/guide/customization" },
      { text: "数据分析", link: "/store-locator/guide/analytics" },
      { text: "高级设置", link: "/store-locator/guide/advanced-settings" },
    ],
  },
];

export default defineConfig({
  lang: "zh-CN",
  title: "Shopify Apps 文档", // 可以改成你公司的名称或者通用的文档标题
  description: "Shopify Apps 使用说明文档",
  themeConfig: {
    // 顶部导航栏，通过 tab 切换不同 App
    nav: [
      { text: "首页", link: "/" },
      // activeMatch 用于当处于该路径下时，高亮对应的 tab
      { text: "Quote App", link: "/quote/getting-started", activeMatch: "^/quote/" },
      { text: "Store Locator", link: "/store-locator/guide/getting-started", activeMatch: "^/store-locator/" },
    ],
    // 侧边栏配置，根据不同的路由路径显示不同的侧边栏
    sidebar: {
      "/quote/": quoteAppSidebar,
      "/store-locator/": storeLocatorSidebar,
    },
    socialLinks: [],
  },
});
