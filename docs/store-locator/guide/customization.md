# 外观定制

Jika Store Locator 提供广泛的定制选项，确保定位器完美契合您的品牌身份。

## 布局选项 (Layout Options)

根据您选择的发布模式（Mode），您可以使用的布局引擎有所不同：

**Mode 1: Managed Page (自动页面)** 支持以下 2 种布局：
- **Classic (经典)**：传统的左侧列表、右侧地图布局。
- **Stacked (堆叠)**：地图在上，列表在下。非常适合移动端体验。

**Mode 2: Theme Section (主题区块) & Mode 3: Widget (挂件)** 支持全量 9 种布局，可在主题编辑器中切换：
- **Classic (经典)**：传统的左侧列表、右侧地图布局。
![样式自定义](/store-locator/images/classic.png)
- **Stacked (堆叠)**：地图在上，列表在下。
![样式自定义](/store-locator/images/stecked.png)
- **Floating (悬浮)**：磨砂半透明质感，现代感十足。
![样式自定义](/store-locator/images/floating.png)
- **Modern (现代)**：带有浮动搜索面板的全屏界面。
![样式自定义](/store-locator/images/modern.png)
- **Minimal (极简)**：以搜索为中心的简洁布局，适合嵌入窄小区域。
![样式自定义](/store-locator/images/minimal.png)
- **Overlay (覆盖)**：侧边栏浮动在地图上，可随时折叠。
![样式自定义](/store-locator/images/overlay.png)
- **Grid (网格)**：地图下方以横向卡片形式展示门店。
![样式自定义](/store-locator/images/grid.png)
- **Compact (紧凑)**：专门为小空间设计的气泡式 UI。
![样式自定义](/store-locator/images/compact.png)
- **Split Search (分栏搜索)**：搜索框与地图并排的左右分栏布局。
![样式自定义](/store-locator/images/split-search.png)

## 外观设置 (Appearance Settings)

导航到 **Settings > Appearance**，您可以自定义几乎所有视觉元素：
![样式自定义](/store-locator/images/custome-color.png)

- **主色调 (Primary Color)**：用于按钮、激活状态。
- **背景颜色**：可分别控制应用整体背景和商店列表背景。
- **文字与次要颜色**：确保品牌调性的同时兼顾易读性。
- **商店卡片**：自定义圆角大小、垂直间距和字体大小。
- **Marker Studio (标记设置)**：
  - **Marker Mode (标记模式)**：可选择预设颜色 (Preset Colors) 或自定义十六进制颜色 (Custom Color)。
  - **Marker Size (标记尺寸)**：调整大头针大小以获得最佳可见度。
  - **自定义图标 (Custom Marker Image URL)**：输入您自己的图片（SVG 或 PNG）URL 作为地图标记。只要填写了此链接，地图标记就会自动使用该图片，并覆盖标记颜色设置。


## 地图主题
![地图样式](/store-locator/images/map-style.png)
从多种预配置的地图风格中选择，适配不同的品牌氛围：
- **Default (默认)**：标准 Google Maps 外观。
- **Autumn Echo (秋日回响)**：温馨的秋季色调。
- **Dusty Rose (灰粉物语)**：优雅的干枯玫瑰色。
- **Macaron Mint (马卡龙薄荷)**：清新的浅绿色。
- **Muted Sage (暗色鼠尾草)**：低饱和度的自然绿色。
- **Nordic Night (北欧之夜)**：冷调深蓝主题。
- **Titanium Industrial (钛金工业)**：硬朗的金属灰风格。
- **Neon Ash (霓虹灰)**：高对比度黑色主题。

## 自定义 CSS

针对高级用户，我们提供了 **Custom CSS** 字段。您可以编写自己的 CSS 规则来覆盖定位器的任何样式。
以及定制专属地图样式。
![地图样式](/store-locator/images/custom-css.png)
示例：
```css
#jika-store-finder-app .jika-item {
  border: 2px solid #ff0000 !important;
}
```
