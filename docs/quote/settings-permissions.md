# 设置

本页专门说明 **设置** 页面的各项设置用途。  
如果您想知道某个开关会影响哪里、应该在什么场景下开启，可以从这里查看。

## 1. 设置页面包含哪些分区

当前 **Settings** 页面主要包含这些标签：

- **General**
- **Notifications**
- **Translate**
- **Quote Limits**
- **Quote File**
- **SmartFlow**
- **SMTP**
- **Email integrations**

下面按标签逐项说明。

## 2. General

### 2.1 Display settings

这部分控制前台报价入口、价格显示方式和基础交互行为。

![display](/quote/images/setting/display.png) 

#### Hide price
作用：

- 隐藏前台客户看到的商品价格、行项目价格和报价总价

适用场景：

- 您不希望客户直接看到价格，希望客户先提交询价
- 您的报价依赖业务员人工审核后再给出最终价格

注意：

- 开启后，还需要在主题编辑器中启用对应的 App Embed，前台隐藏价格才会完整生效

#### Login to view price
作用：

- 只有登录客户才可以查看价格

适用场景：

- 只向已注册客户显示价格
- 希望先收集客户身份，再让其查看报价相关价格

#### Hide 'Add to Cart' button
作用：

- 在商品页和集合页隐藏原本的加入购物车按钮，引导客户优先走报价流程

适用场景：

- 您的业务主要以询价为主，而不是直接零售下单

#### Convert cart to quote
作用：

- 在购物车页面或 mini-cart 中显示 “Convert Cart to Quote” 按钮
- 让客户可以把购物车内容直接转换成报价请求

适用场景：

- 客户先像普通购物一样加购，再统一转成询价单

#### Show 'Add to Quote' on product pages
作用：

- 在商品详情页显示 `Add to Quote` 按钮

#### Show 'Quick Quote' on product pages
作用：

- 在商品详情页显示 `Quick Quote` 按钮

适用场景：

- 希望客户快速提交单个商品的询价

#### Show 'Add to Quote' on collection pages
作用：

- 在集合页、产品列表、商品卡片中显示报价按钮

适用场景：

- 希望客户在分类页就能直接发起报价

#### Button placement
作用：

- 控制集合页报价按钮显示在商品价格后面，还是显示在 Add to Cart 后面

#### Quote item quantity
作用：

- 允许客户在 quote cart 中直接修改商品数量

适用场景：

- 客户在提交报价前，经常需要自己调整数量

#### Allow Re-Quote (Clone)
作用：

- 允许客户基于旧报价重新发起一张新的报价单
- 前台会显示 `Re-Quote` 按钮

适用场景：

- 客户经常重复采购相似商品
- 需要让客户快速复用旧报价内容

#### Enable tiered pricing
作用：

- 启用阶梯定价能力
- 报价时可根据数量自动匹配不同单价

适用场景：

- 大宗采购价格需要随数量变化

#### Enable UTM source tracking
作用：

- 记录客户提交报价时 URL 中的 UTM 参数

适用场景：

- 想知道报价线索来自哪个广告、渠道或活动

### 2.2 Quote validity period

这部分控制报价单多久失效。

![validity](/quote/images/setting/validity.png)

#### Enable quote validity period
作用：

- 开启报价有效期控制

#### Validity (days)
作用：

- 设置报价单在发送或生效后有效多少天

适用场景：

- 价格、库存、优惠仅在一段时间内有效

### 2.3 Inventory Settings

#### Enable inventory reservation
作用：

- 当报价发送后，自动在 Shopify 中为该报价预留库存，直到报价过期

![inventory](/quote/images/setting/inventory.png)

适用场景：

- 库存紧张
- 希望客户在有效期内优先锁定库存

### 2.4 Google reCAPTCHA

用于保护前台报价表单，减少机器人和垃圾提交。

![google](/quote/images/setting/google.png)

#### reCAPTCHA Type
支持：

- `v2 Checkbox`
- `v3 Invisible`

作用区别：

- **v2 Checkbox**：客户需要手动勾选“我不是机器人”
- **v3 Invisible**：后台根据行为评分判断是否可疑，客户通常无感知

#### Quote Cart Page
作用：

- 在 Quote Cart 页面启用 reCAPTCHA

#### Quick Quote Modal
作用：

- 在 Quick Quote 弹窗中启用 reCAPTCHA

#### Site Key
作用：

- Google reCAPTCHA 前端识别 key

#### Secret Key
作用：

- Google reCAPTCHA 服务端验证 key

## 3. Notifications

这部分用于控制通知邮件模板和通知事件是否启用。

![notify](/quote/images/setting/notify.png)

#### Enable notification
作用：

- 控制当前选中的通知事件是否启用

#### Event
支持的通知事件包括：

- `Quote created`
- `Quote updated`
- `Quote declined`
- `Quote expiry reminder`

#### Subject
作用：

- 设置该类通知邮件的标题

#### Body
作用：

- 设置该类通知邮件正文内容

#### Send reminder before expiry
作用：

- 仅用于 `Quote expiry reminder`
- 设置在报价过期前多少天或多少小时发送提醒

## 4. Translate

这部分用于修改前台客户可见文案。

![Translate](/quote/images/setting/translate.png)

#### Language
作用：

- 选择当前要编辑的语言

#### Add language
作用：

- 新增一个语言代码，用于维护该语言的前台文案

#### 各字段翻译输入框
作用：

- 覆盖系统默认文案
- 只填写需要修改的字段，未填写内容会自动回退到默认文案

适用场景：

- 多语言店铺
- 需要自定义按钮、提示语、前台文案

## 5. Quote Limits

这部分用于控制报价数量限制、最小报价金额，以及变体级数量限制的批量导入。

这部分的详细说明已经整理到单独文档中，请直接查看：

- [定价与规则策略](./pricing-rules.md)

在该文档中可以看到：

- 阶梯定价的配置方式
- `By product` 与 `By product variants` 的区别
- `Minimum quantity` / `Maximum quantity` 的含义
- `Minimum subtotal` 的限制逻辑
- CSV 批量导入变体数量限制的字段与使用方式

## 6. Quote File

这部分主要控制导出、打印和附件上传。

### 6.1 Print & Export

#### Print PDF
作用：

- 允许生成并下载报价单 PDF

#### Export Excel
作用：

- 允许导出报价列表为 Excel

### 6.2 Upload

#### Enable Quote Attachments
作用：

- 允许商家或客户在报价消息中上传附件

适用场景：

- 客户上传图纸、需求文件、参考图片
- 商家回传报价附件或补充资料

#### Customer upload limits
作用：

- 控制客户前台上传附件的大小、数量和类型

常见内容包括：

- 单个文件大小限制
- 单次上传文件数量限制
- 允许上传的文件类型

## 7. SmartFlow

这部分主要控制沟通流程、状态流和自动审批相关能力。

### 7.1 Communication Settings

![communication](/quote/images/smart/communication.png)



#### Customer reply enabled

作用：

- 允许客户在前台给商家发送消息

适用场景：

- 商家和客户需要围绕报价反复沟通
  
![customer_reply](/quote/images/smart/customer-reply.png)

#### Pro workflow progress bar
作用：

- 在报价流程中显示更完整的状态进度

![flow](/quote/images/smart/flow.png)

#### Customer accept
作用：

- 允许客户在前台正式接受报价

![flow](/quote/images/smart/accept.png)

#### Activity log
作用：

- 显示报价流程中的系统活动记录

![log](/quote/images/smart/log.png)

### 7.2 Auto Approval

这部分用于自动审批报价，并控制符合条件的报价在什么时间自动处理。

![auto-approval](/quote/images/smart/auto-approval.png)

#### Enable auto approval
作用：

- 启用后，符合条件的报价可以自动审批

#### Minimum amount / Maximum amount
作用：

- 设置自动审批的金额区间

#### Max discount percent
作用：

- 设置允许自动审批的最大折扣比例（目录价格的总折扣不超过此百分比时自动审批）

#### SLA & Processing Schedule
作用：

- 控制符合自动审批条件的报价，是立即处理，还是按指定时间窗口排队处理

适用场景：

- 白天上班时间内才希望自动审批
- 想把夜间提交的报价延后到下一个工作日处理
- 希望自动审批前保留固定的缓冲时间

#### Processing Mode
支持：

- **Immediate**：符合条件后立即自动审批，不等待
- 
  ![processing-mode1](/quote/images/smart/processing-mode1.png)

- **Next Business Day**：进入队列，在下一个有效工作日的指定时间自动处理
  
  ![processing-mode2](/quote/images/smart/processing-mode2.png)

- **Custom Window**：只在指定工作时段内处理，也可以额外设置延迟时间

  ![processing-mode3](/quote/images/smart/processing-mode3.png)

#### Delay Buffer (Hours)
作用：

- 仅在 `Custom Window` 模式下显示
- 设置自动审批前需要额外等待多少个工作小时

说明：

- 系统只会在有效工作日和工作时间内累计这个等待时长

#### Shop Timezone
作用：

- 设置自动审批时间规则所使用的时区

说明：

- 工作日、开始时间、结束时间，都会按这里选择的时区计算

#### Active Days
作用：

- 选择哪些星期几允许自动审批运行

适用场景：

- 只在周一到周五处理报价
- 周末暂停自动审批

#### Start Time (HH:MM)
作用：

- 设置自动审批开始处理的时间

说明：

- 在 `Next Business Day` 模式下，系统会在下一个有效工作日的这个时间开始处理
- 在 `Custom Window` 模式下，这是可自动处理的起始时间

#### End Time (HH:MM)
作用：

- 仅在 `Custom Window` 模式下显示
- 设置每天自动审批停止处理的时间

说明：

- 超出这个时间后，新报价会继续排队，等到下一个有效时间窗口再处理

## 8. SMTP

这部分用于配置邮件发件服务器，以及让报价通知邮件能够真正发送给客户。

SMTP 的详细说明已经整理到单独文档中，请直接查看：

- [邮件与通知](./emails-notifications.md)

在该文档中可以看到：

- SMTP 每个配置项的作用
- 常见主机、端口和加密方式的说明
- 如何测试 SMTP 连接
- 如何发送测试邮件验证实际送达

## 9. Email integrations

这部分用于接入第三方邮件营销平台，例如 Klaviyo 和 Mailchimp。

Email integrations 的详细说明已经整理到单独文档中，请直接查看：

- [邮件与通知](./emails-notifications.md)

在该文档中可以看到：

- Klaviyo 与 Mailchimp 的用途说明
- 每个配置项的含义
- 每个字段的获取方式
- 如何验证连接是否成功
- 它们与 SMTP 的关系和区别

## 10. 使用建议

如果您刚开始配置 Settings，建议按这个顺序进行：

1. 先完成 **General** 的前台显示设置
2. 再设置 **Quote validity period**
3. 如需限制报价规则，再配置 **Quote Limits**
4. 如需邮件通知，再配置 **SMTP** 和 **Notifications**
5. 如需更复杂自动化，再启用 **SmartFlow**
6. 如需营销平台同步，再设置 **Email integrations**

## 注意事项

- 某些设置需要对应订阅计划才可用
- 某些前台显示项除了后台开启外，还需要 Theme App Embed 配合生效
- SMTP 配置正确后，还需要在 Notifications 中启用对应通知事件，邮件才会真正发送
- 第三方集成不会自动替代 SMTP 通知，它们主要用于同步数据和营销自动化
