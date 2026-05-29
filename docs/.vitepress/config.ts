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

const hubspotAppSidebar = [
  {
    text: "HubSpot App Manual",
    items: [
      { text: "Getting Started", link: "/hubspot/getting-started" },
    ],
  },
  {
    text: "Kuaidi100 Shipping Tracker",
    items: [
      { text: "Getting Started", link: "/hubspot/kuaidi100/getting-started" },
      { text: "System Settings", link: "/hubspot/kuaidi100/settings" },
      { text: "User Guide", link: "/hubspot/kuaidi100/usage" },
    ],
  },
];

export default defineConfig({
  lang: "zh-CN",
  title: "Apps Documentation Center",
  description: "Documentation for Shopify & HubSpot Apps",
  themeConfig: {
    // Top Navigation Bar
    nav: [
      { text: "Home", link: "/" },
      { 
        text: "Shopify Apps", 
        items: [
          { text: "Quote App", link: "/quote/getting-started" },
          { text: "Store Locator", link: "/store-locator/guide/getting-started" },
        ],
        activeMatch: "^/(quote|store-locator)/"
      },
      { 
        text: "HubSpot Apps", 
        items: [
          { text: "Getting Started", link: "/hubspot/getting-started" },
          { text: "Kuaidi100 Shipping Tracker", link: "/hubspot/kuaidi100/getting-started" },
        ],
        activeMatch: "^/hubspot/"
      },
    ],
    // 侧边栏配置
    sidebar: {
      "/quote/": quoteAppSidebar,
      "/store-locator/": storeLocatorSidebar,
      "/hubspot/": hubspotAppSidebar,
    },
    socialLinks: [],
  },
});
