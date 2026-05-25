# 报价单后台管理

在本章节中，您将学习如何高效地处理来自客户的报价申请，以及如何手动为客户创建报价单。

## 1. 报价单列表与详情

登录应用后台，点击 **报价单 (Quotes)** 菜单。

### 列表页可以做什么

进入 **Quote Management** 后，您会先看到报价单列表页面。这里是日常处理报价的主工作区，大部分操作都会先从这里开始。

![报价单列表](/quote/images/quote/list.png)

列表页会显示每一笔报价的关键信息，包括：

- **Quote ID**：报价单编号，便于内部沟通和排查。
- **Draft order**：对应的 Shopify 草稿订单编号；如果还没有生成，会显示为空。
- **Quote name**：报价名称。
- **Customer name / Email**：客户名称与邮箱。
- **Expected total**：客户提交时预期的金额。
- **Total**：当前报价单中实际配置的金额。
- **Date**：报价提交时间。
- **Expires**：报价过期时间；如果尚未发送 invoice，通常会显示为空。
- **Status**：当前报价状态。
- **Assigned to**：当前分配给哪位成员跟进。

### 列表页常用操作

在列表页，您可以直接完成以下操作：

- **搜索报价单**：可按报价单编号、客户名称、邮箱或关键词搜索。
- **按状态筛选**：例如只看 `Pending`、`Sent`、`Accepted`、`Expired` 等状态。
- **按日期筛选**：通过开始时间和结束时间缩小查询范围。
- **导出 Excel**：导出当前筛选结果，方便交接、归档或二次分析。
- **打开详情页**：点击每一行右侧的 **Open**，进入该报价单详情。
- **删除报价单**：如确认该记录无效，可在列表页直接删除。

### 批量操作

如果您需要同时处理多笔报价，可以先勾选列表左侧复选框，再执行批量操作。根据当前账号权限，列表页可能支持：

- **Assign Member**：批量分配负责人。

![批量分配成员](/quote/images/quote/assign_member.png)  

- **Set Discount**：批量设置折扣。

![批量设置优惠](/quote/images/quote/set_discount.png) 

- **Set Shipping**：批量设置运费。

![批量设置运费](/quote/images/quote/set_shipping.png) 

- **Delete Selected**：批量删除已选报价单。
  

如果您没有看到这些按钮，通常表示当前成员账号没有对应权限。

### 状态说明
- **待处理 (Pending)**: 客户刚提交申请，等待商家审核。
- **已审阅 (Reviewd)**: 商家更新了报价单。
- **已发送 (Sent)**: 商家已修改价格并向客户发送了报价方案。
- **已批准 (Approved)**: 客户已接受报价。
- **已拒绝 (Rejected)**: 报价未达成一致。
- **已过期 (Expired)**: 超过了设定的有效期。

### 详情页操作
在报价单详情页，您可以：
- **修改价格**: 针对每一个产品行修改单价或数量
  
![配置quote价格](/quote/images/quote/item.png)

- **添加优惠**: 针对整个报价单添加优惠。
  
![配置discount](/quote/images/quote/discount.png) 

- **添加运费**: 针对整个报价单添加运费，运费可以自定义也可使用默认的

![配置shipping](/quote/images/quote/shipping1.png) 

![配置shipping](/quote/images/quote/shipping2.png) 

- **留言并且可查看操作记录**: 追踪该报价单从创建到成交的所有操作记录。
![timeline](/quote/images/quote/timeline.png) 

## 2. 处理流程：从申请到订单

1. **审核与调整**: 收到申请后，您可以根据实际情况调整价格、数量、运费或优惠。
2. **同意报价**: 点击“send invoice”，系统会通过邮件通知客户,并且一键将报价单转换为 Shopify 的 **草稿订单 (Draft Order)** 并发送正式发票。
3. **结账**: 客户支付发票后，该报价单将自动标记为已完成。

## 3. 手动创建报价单

如果您在电话或线下与客户达成了初步意向，也可以点击 **“新建报价单”**：
- 搜索并选择现有的客户。
- 搜索并添加产品。
- 设置报价单的有效期。

![创建报价单](/quote/images/quote/create_quote.png) 

![](/quote/images/quote/create_quote1.png) 
---

## 技巧
善用 **“状态进度条”**，可以直观地查看当前报价单处于哪个阶段。
