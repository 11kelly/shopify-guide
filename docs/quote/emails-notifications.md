# 邮件与通知

及时的沟通是报价成交的重要环节。Quote App 的邮件能力不只是 SMTP 发件配置，还包括：

- 报价单提交后的通知邮件
- 报价状态更新后的通知邮件
- 报价被拒绝后的通知邮件
- 报价即将过期前的提醒邮件
- 第三方邮件营销平台集成

## 1. 自定义发件人 (SMTP 设置)

默认情况下，系统使用应用代发邮件。为了提高品牌信任度，建议配置您自己的 SMTP。

### 配置路径
**Settings -> SMTP**

![SMTP 配置](/quote/images/smtp.png)

### 配置步骤
1. 进入 **Settings**。
2. 切换到 **SMTP** 标签页。
3. 勾选 **Use SMTP**。
4. 填写以下字段：
   - **SMTP server**
   - **Encryption**
   - **Port**
   - **Username / Email address**
   - **Password**
   - **Send mail from email**
   - **Send mail from name**
5. 先点击 **Connect** 测试连接。
6. 连接成功后再保存。

![SMTP 测试](/quote/images/test_smtp.png)

### 常见端口示例
- TLS 常用端口：`587`
- SSL 常用端口：`465`

### 说明
- 如果您只是先测试前台报价流程，SMTP 可以稍后配置，不会影响按钮显示和提交报价。
- 但如果您希望客户真正收到通知邮件、提醒邮件或品牌化发件人，建议尽早完成 SMTP 设置。
- 通知邮件是否能发出，除了 SMTP 要正确以外，对应通知事件也必须处于启用状态。

## 2. 报价单通知邮件

Quote App 支持多种报价相关邮件，每一种都可以单独开启、关闭，并单独编辑主题与正文模板。

### 配置路径
**Settings -> Notifications**

在该页面中，您可以选择不同的通知事件，并分别配置：

- 是否启用该通知
- 邮件主题（Subject）
- 邮件正文（Body）

### 支持的通知事件

#### Quote created
发送时机：

- 客户在前台成功提交一笔新的报价请求时

适用用途：

- 告知客户系统已收到报价
- 作为自动确认邮件

#### Quote updated
发送时机：

- 商家在后台回复客户
- 商家更新报价内容，例如商品、价格、运费等

适用用途：

- 告知客户报价已被商家处理
- 提醒客户重新查看最新报价内容

#### Quote declined
发送时机：

- 商家在后台将报价单标记为拒绝 / declined 时

适用用途：

- 正式通知客户该报价未通过
- 引导客户联系商家或重新提交需求

#### Quote expiry reminder
发送时机：

- 报价单即将到期前，按照您设置的时间自动发送

适用用途：

- 提醒客户尽快接受或完成结账
- 提高报价转化率

## 3. 通知开关与状态更新说明

这部分是最容易被忽略的。

邮件不是“只要配置 SMTP 就一定会自动发送”，而是需要同时满足：

1. SMTP 已正确配置并启用
2. 对应通知事件本身已启用

例如：

- 您配置好了 SMTP，但 **Quote updated** 没有启用，那么商家更新报价后客户不会收到邮件
- 您启用了 **Quote declined**，那么当报价状态被改成 `declined` 时，客户才会收到拒绝通知
- 您启用了 **Quote expiry reminder**，并设置了到期前提醒时间，系统才会在到期前自动发送提醒邮件

### 建议启用方式

如果您想让客户完整接收到报价流程中的关键通知，通常建议至少启用：

- **Quote created**
- **Quote updated**
- **Quote declined**
- **Quote expiry reminder**

## 4. 邮件模板编辑

在 **Settings -> Notifications** 中，您可以针对每一种通知事件单独编辑模板。

可编辑内容包括：

- **Subject**：邮件标题
- **Body**：邮件正文（HTML）

### 模板用途

您可以用它来实现：

- 品牌化语气
- 多语言内容
- 更明确的购买引导
- 售前或售后说明
- 客服联系方式展示

## 6. 自动化提醒 (Quote Expiry Reminder)

您可以开启 **报价单过期提醒**，在报价单即将失效前自动发邮件给客户。

![过期提醒](/quote/images/expiry.png)

### 可配置内容
- 是否启用提醒
- 到期前多久发送
- 使用哪一份提醒邮件模板

### 适用场景
- 商家已经send invioce，但客户还没有结账
- 商家希望在报价过期前再次提醒客户
- 需要提升报价转化率

## 7. 第三方集成

除了直接发邮件外，您还可以把报价事件同步到第三方营销平台。

### Klaviyo
- 同步报价单相关数据到 Klaviyo
- 可用于构建更复杂的自动化营销流程
  
![klaviyo](/quote/images/email/klaviyo.png)

#### 配置项说明

- **Public Key (Site ID)**
  作用：用于标识您的 Klaviyo 账户。

- **Private API Key**
  作用：用于授权 Quote App 调用 Klaviyo API，写入客户资料和报价事件。

#### 怎么获取

- **Public Key (Site ID)**
  获取位置：Klaviyo 后台 **Settings -> API Keys**
  说明：在本应用中，这个字段也显示为 **Site ID**。

- **Private API Key**
  获取位置：Klaviyo 后台 **Settings -> API Keys**
  获取步骤：
  1. 进入 **Settings**
  2. 打开 **API Keys**
  3. 点击创建新的 **Private API Key**
  4. 创建完成后复制该 key 并保存

#### 补充说明

- Private API Key 通常只会在创建时完整显示一次，建议立即保存。
- 启用后，系统会把报价流程中的关键事件同步到 Klaviyo，例如提交报价、更新报价、发送 invoice、完成报价、拒绝报价、过期报价等。
- 您可以在应用后台点击 **Verify Keys** 测试配置是否有效。

### Mailchimp
- 将提交报价的客户加入邮件列表
- 便于后续营销与客户跟进

![mailchimp](/quote/images/email/mailchimp.png)

#### 配置项说明

- **API Key**
  作用：用于授权 Quote App 访问您的 Mailchimp 账户。

- **Audience ID (List ID)**
  作用：指定要同步到哪一个 Audience，也就是哪个联系人列表。

- **Server Prefix**
  作用：指定 Mailchimp API 所在的数据中心前缀，例如 `us1`、`us20`。

#### 怎么获取

- **API Key**
  获取位置：Mailchimp 后台 **Profile -> Extras -> API keys**
  获取步骤：
  1. 点击右上角个人头像
  2. 进入 **Profile**
  3. 打开 **Extras -> API keys**
  4. 点击创建或生成新的 API Key
  5. 复制生成后的 key 并保存

- **Audience ID (List ID)**
  获取位置：Mailchimp 后台 **Audience -> More options -> Audience settings**
  说明：Audience ID 也常被称为 **List ID**。

- **Server Prefix**
  获取方法：
  直接查看 Mailchimp API Key 最后的后缀部分。

  例如：
  - API Key 为 `xxxxxx-us1`，则 Server Prefix 为 `us1`
  - API Key 为 `xxxxxx-us20`，则 Server Prefix 为 `us20`

#### 补充说明

- Audience ID 必须对应您希望接收客户数据的目标 Audience。
- API Key、Audience ID、Server Prefix 三者都需要正确，Mailchimp 才能成功同步。
- 配置完成后，建议在应用后台测试连接，确认配置无误。

## 注意事项

- SMTP 连接成功不代表所有通知事件都会发送，还需要单独启用对应事件
- 报价状态更新类邮件是否发送，取决于商家的实际操作是否触发了对应事件
- 建议至少测试一次：提交报价、更新报价、拒绝报价、到期提醒，确认邮件链路完整
- 修改模板后，建议先发送测试邮件或做真实流程测试，确认变量与版式显示正常
