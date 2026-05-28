# 高级设置 (Advanced Settings)

在 **Settings > Advanced Settings** 菜单中，您可以配置定位器的高级功能。
*注：高级设置包含部分高级功能，可能需要 Pro 以上套餐支持。*

## 1. Storefront Access (前端访问路径)

这里显示了 Store Locator 的公共代理路径（通常为 `/apps/store-finder`）以及您专属的 **Public map URL**（如 `/pages/store-locator`）。
您可以点击 **Copy** 直接复制页面链接，方便在您的网站导航或底部链接中进行配置。

## 2. Customer Location (客户位置与距离计算)
![高级设置](/store-locator/images/customer-location.png)

开启 **Enable customer location and distance** 可以大幅提升用户体验：
- **自动定位功能**：允许在前端显示“定位我”按钮。用户点击后，只要授权了浏览器的定位权限，地图就能以用户为中心。
- **距离计算**：启用后，系统会调用 Google Geocoding API 自动计算出从用户位置到周围每家门店的实际距离，并在门店列表中显示。

**Appearance Styling (外观自定义)**
开启上述功能后，您还可以精细化调整相关 UI 的颜色：
- **Location Pin Color**：自定义代表“用户当前位置”的大头针图标颜色。
- **Distance Labels**：自定义距离标签的背景色 (Background)、边框色 (Border) 以及文本颜色 (Text)。

## 3. Map Behaviors (地图动态交互)
![高级设置](/store-locator/images/map-behaviors.png)

开启 **Filter stores by map area (按地图区域过滤门店)**。
这是一个非常实用的高级交互功能：当用户在地图上进行拖拽 (Pan) 或缩放 (Zoom) 时，**左侧的门店列表会自动刷新**，仅仅显示当前可视地图区域内的门店。这在门店数量众多时，可以极大地提升查找效率和前端性能。

## 4. System Info (系统状态)

在右下角的卡片中，您可以随时查看应用的当前运行状态：
- **Version**：当前应用的构建版本号。
- **Database**：D1 云端数据库连接状态。
- **Shop**：您当前绑定的 Shopify 店铺域名。