# 快速入门

本章节面向首次安装 Quote App 的商家。首次上线时，您只需要先完成前 3 步必要配置，让前台报价入口先正常显示；从第 4 步开始的内容都属于按需配置，可根据您的业务场景决定是否继续设置。

## 开始前先确认

开始前，请先准备以下条件：

- 您已经在 Shopify 商店中安装了 Quote App。
- 您有店铺主题的编辑权限，可以进入 Shopify Theme Editor。
- 您可以访问应用后台左侧菜单中的 **Storefront**、**Quotes**、**Settings**。

## 先完成这 3 步必要配置

如果您当前的目标只是先把报价功能跑通，请先完成下面 3 步：

1. 打开应用后台，确认可以正常进入 Quote App。
2. 启用 Theme App Embed，让前台具备显示报价按钮的能力。
3. 打开前台显示开关，决定按钮显示在哪些页面。

完成这 3 步后，建议直接跳到第 8 步做一次前台提交测试，先确认基础流程已经打通。

## 1. 打开应用后台

安装完成后，在 Shopify 后台打开 Quote App。

进入应用后，您会看到以下主菜单：

- **Quotes**
- **Storefront**
- **Tiered Pricing**
- **Pricing Plans**
- **Settings**
- **Analytics**

如果您是团队成员账号，还可能看到 **Members & Permissions**。

## 2. 先启用 Theme App Embed

这是最重要的一步。如果没有启用 Theme App Embed，前台通常不会显示报价按钮。

### 操作位置

要让报价按钮在店铺前台显示，您**必须**在主题中开启应用嵌入开关（同时请确保在第 5 步提到的“前台显示开关”也已打开）。

1. 在 Shopify 商家后台，点击左侧菜单的 **Online Store** > **Themes**。
2. 找到当前启用的主题，点击右侧的 **Customize** 按钮进入编辑器。
3. 在左侧边栏中，点击 **App embeds** 开启**Quote Embed**。

![开启embed](/quote/images/embed.png)
### 需要启用的项目

在 Theme Editor 的 **App embeds** 中，至少启用：

- **Quote Embed**

如果您后续要使用“隐藏价格”或“未登录才显示价格”等功能，还需要同时启用：

- **Quote hide price head**

### 完成后要做什么

1. 点击右上角 **Save**。
2. 返回店铺前台任意产品页，准备后续测试按钮是否出现。

## 3. 打开前台显示开关

启用 Embed 以后，还需要在应用设置里决定按钮显示在哪些页面。

### 操作位置

1. 打开 **Settings**。
2. 保持在 **General** 标签页。
3. 找到 **Display settings** 区块。

![基础开关配置](/quote/images/setting.png)
### 常用开关说明

根据您的使用场景，按需开启以下选项：

- **Show 'Add to Quote' on product pages**
  说明：在商品详情页显示 `Add to Quote` 按钮。

- **Show 'Quick Quote' on product pages**
  说明：在商品详情页显示 `Quick Quote` 按钮。

- **Show 'Add to Quote' on collection pages**
  说明：在分类页商品卡片中显示报价按钮。

- **Convert cart to quote**
  说明： 一键将购物车产品转报价单。

- **Hide 'Add to Cart' button**
  说明：隐藏原本的加购按钮，让顾客优先走报价流程。

- **Hide price**
  说明：隐藏产品价格、行项目价格和总价。使用此功能时，请确认 **Quote hide price head** 也已在 Theme Editor 中启用。

- **Login to view price**
  说明：只有登录客户才可查看价格；未登录用户会看到登录提示按钮。


## 后续步骤按需配置

下面的步骤都不是首次上线的必需项。您可以在基础流程跑通之后，再按需要逐项配置。

## 4. 设置报价有效期与基础规则 

完成前台入口后，如果您希望控制报价的可用时效，建议再设置报价有效期。

### 操作位置

1. 进入 **Settings**。
2. 在 **General** 标签页中找到 **Quote validity period**。

![配置quote过期时间](/quote/images/quote_validity.png)

>quote过期时间是从发票发送之后开始计算时间。

## 5. 如需邮件通知，再配置 SMTP

如果您希望客户和商家收到更稳定、可品牌化的邮件通知，建议配置 SMTP。

### 建议做法

SMTP 的详细配置、测试邮件、提醒邮件与模板说明，已整理到专门文档：

- [邮件与通知](./emails-notifications.md)

如果只是先测试前台报价流程，SMTP 可以稍后配置，不会影响按钮显示和提交报价。

## 6. 如需自定义收集信息，再配置前台表单字段

前台客户提交报价时使用的字段，需要在 **Storefront** 中设置。

### 操作位置

1. 在应用左侧点击 **Storefront**。
2. 默认会进入 **Form Fields** 标签页。
 
![配置fields](/quote/images/form_fields.png)

### 这里能做什么

在 **Form Fields** 页面，您可以配置客户提交报价时要填写的附加字段。系统基础字段会保留，常见基础字段包括：

- Full name
- Phone
- Quote name
- Delivery address
- Notes / requirements

您可以新增自己的字段，例如：

- Company name
- VAT number
- Preferred delivery date
- Internal reference

### 推荐操作顺序

1. 点击新增字段按钮，添加一个自定义字段。
2. 填写 **Label**。
3. 选择 **Type**。
4. 如有需要，填写 **Placeholder**。
5. 勾选 **Required field** 表示必填。
6. 选择字段插入位置，点击上下箭头可调整位置
   
   ![fields顺序](/quote/images/field_limit.png)
7. 保存。


## 7. 如需匹配店铺风格，再配置按钮样式

如果您希望前台按钮和店铺主题风格一致，请继续设置外观。

### 操作位置

1. 在 **Storefront** 页面顶部切换到 **Appearance** 标签页。

![appearance设置](/quote/images/appearance.png)
### 可设置的内容

页面包含两个标签：

- **Add to Quote Button**
- **Quick Quote Button**

您可以分别调整：

- Background Colour
- Text Colour
- Border Radius
- Vertical Padding
- Horizontal Padding
- 是否显示图标

### 建议

- `Add to Quote` 按钮建议使用店铺主色。
- `Quick Quote` 按钮建议与主购买按钮区分，避免客户误点。
- 修改后及时保存，再到产品页刷新查看效果。

## 8. 到店铺前台做一次完整测试

无论您是否继续完成第 4 步到第 7 步，都建议至少先做一次完整测试，确认前 3 步必要配置已经生效。

前台测试建议按照下面顺序执行。

### 测试 1：产品页按钮是否出现

1. 打开店铺前台任意产品页。
2. 检查是否看到：
   - `Add to Quote`
   - 或 `Quick Quote`
  ![appearance设置](/quote/images/front_button.png)  
3. 如果没有看到，优先检查：
   - **Quote Embed** 是否已启用
   - **Settings > General > Display settings** 中对应开关是否已打开
   - 当前查看的是否是已应用该主题的前台页面

### 测试 2：提交一个报价

1. 点击 **Add to Quote** 或 **Quick Quote**。
2. 填写客户信息。
  
![当前报价单](/quote/images/current_quote.png)   

1. 填写您刚刚配置的自定义字段。
2. 提交报价。

### 测试 3：后台是否收到

1. 回到应用后台。
2. 打开 **Quotes**。
3. 在 **Quote Management** 列表中确认是否出现新的报价记录。
   
![quote列表设置](/quote/images/quote/list.png)

如果能在这里看到记录，说明前 3 步必要配置已经完成，安装、前台入口、表单提交和后台接收已经全部打通。后续您再按需补充 SMTP、表单字段、样式等设置即可。

## 9. 处理第一笔报价

当第一笔测试报价进入后台后，建议继续验证商家处理流程。

### 操作位置

1. 打开 **Quotes**。
2. 点击刚提交的那笔报价。

![quote详情](/quote/images/quote/detail1.png)
![quote详情](/quote/images/quote/detail2.png)
### 建议检查的内容

- 报价名称是否正确
- 客户姓名、邮箱、电话是否完整
- 自定义字段是否保存成功
- 商品和数量是否正确
- 状态是否进入待处理流程

确认无误后，您的基础上线流程就完成了。

## 10. 下一步建议

完成快速开始后，建议继续阅读以下章节：

- [报价单管理](./quote-management.md)：学习如何查看、修改、发送和跟进报价
- [前台报价单管理](./storefront-quote-management.md)：了解客户如何在店铺前台查看、接受、留言和再次发起报价
- [定价与规则](./pricing-rules.md)：配置阶梯定价和数量规则
- [邮件与通知](./emails-notifications.md)：完善 SMTP、提醒邮件和第三方集成
- [设置](./settings-permissions.md)：查看每个设置项的作用与适用场景

## 快速排查

### 产品页没有报价按钮

请按顺序检查：

1. **Quote Embed** 是否已在 Theme Editor 的 **App embeds** 中启用。
2. **Settings > General > Display settings** 中的产品页按钮开关是否已开启。
3. 您查看的前台主题是否就是当前启用或预览的主题。

### 隐藏价格没有生效

请确认两件事都完成：

1. **Settings > General > Display settings > Hide price** 已开启。
2. Theme Editor 中的 **Quote hide price head** 已启用。

### 提交后后台没有看到报价

请检查：

1. 前台提交时是否真的出现成功提示。
2. 是否在后台 **Quotes** 列表页查看。
3. 是否有必填字段未填导致提交失败。
