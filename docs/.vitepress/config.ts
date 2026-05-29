import { defineConfig } from "vitepress";

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
  title: "Store Locator 文档",
  description: "Store Locator 使用说明手册 - 专业级 Shopify 门店定位器",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "使用手册", link: "/store-locator/guide/getting-started", activeMatch: "^/store-locator/" },
    ],
    sidebar: {
      "/store-locator/": storeLocatorSidebar,
    },
    socialLinks: [],
  },
});
