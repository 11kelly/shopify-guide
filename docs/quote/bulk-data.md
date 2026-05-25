# 成员和权限使用说明

如果您的店铺有多位员工一起处理报价单，可使用 **Members & Permissions** 功能，为不同成员分配各自的后台访问权限。

## 1. 功能入口

进入应用后台左侧菜单：

- **Members & Permissions**

![member](/quote/images/member/index.png)

在这里您可以：

- 查看当前成员列表
- 新增成员
- 编辑成员资料
- 设置角色与状态
- 配置可访问页面与可执行操作
- 删除成员

## 2. 成员列表能看到什么

在成员列表页，您可以看到每位成员的：

- 姓名
- 邮箱
- 角色
- 已分配的报价数量
- 当前状态

这适合用于快速确认团队成员是否已开通、是否还在使用，以及谁手上有多少报价任务。

## 3. 如何新增成员

### 操作步骤
1. 进入 **Members & Permissions**
2. 点击 **Add Member**

![member](/quote/images/member/add.png)
   
1. 填写：
   - **Name**
   - **Email**
   - **Role**
   - **Status**

![member](/quote/images/member/add1.png) 

1. 如果角色不是 Admin，再继续勾选对应权限
2. 保存

## 4. 角色说明

当前系统支持两种角色：

### Admin
- 自动拥有全部权限
- 不需要逐项勾选权限
- 适合店铺负责人或核心管理人员

## 5. 状态说明

每个成员都可以设置状态：

- **Active**：成员可以正常使用分配给他的权限
- **Inactive**：成员保留资料，但不再作为正常活跃成员使用

适用场景：

- 员工离职但您暂时不想删除记录
- 临时停用某位成员的后台操作权限

## 6. Quote 权限说明

当角色为 **Member** 时，您可以单独勾选报价相关权限。

### Quote 权限包括

- **View Quote Detail**
  可以查看报价详情页

- **Create Quote**
  可以在后台创建报价

- **Update Quote Items**
  可以修改报价中的商品、数量、价格等内容

- **Update Quote Message**
  可以在报价时间线中回复或更新消息

- **Set Discount**
  可以设置折扣

- **Set Shipping**
  可以设置运费

- **Send Quote Invoice**
  可以发送报价 invoice

- **Export Quotes Excel**
  可以导出报价列表

- **Download Quote PDF**
  可以下载报价 PDF

- **Cancel / Decline Quote**
  可以拒绝或取消报价

- **Delete Quotes**
  可以删除报价

- **Assign Quote Owners**
  可以给报价分配负责人

## 7. Navigation 权限说明

除了报价操作权限，还可以控制成员是否能进入某些后台菜单页面。

### Navigation 权限包括

- **Members Manage**
  可以进入成员管理页面

- **Tiered Pricing Manage**
  可以进入阶梯定价页面

- **Form Fields Manage**
  可以进入前台表单字段设置页面

- **Appearance Manage**
  可以进入前台样式设置页面

- **Settings Manage**
  可以进入系统设置页面

## 8. 编辑成员

如果成员已经创建，您可以进入该成员详情页继续修改：

- 姓名
- 邮箱
- 角色
- 状态
- Quote 权限
- Navigation 权限

### 注意

- 如果把角色改为 **Admin**，系统会自动赋予全部权限

## 9. 删除成员

在成员列表页中，您可以删除成员。

如果只是暂时停用，通常更建议先改为 **Inactive**，而不是直接删除。

## 10. 报价分配与成员协作

成员功能通常和报价分配一起使用。

在报价列表或报价详情中，如果您具备 **Assign Member** 权限，就可以把报价分配给某位成员。

这适合用于：

- 销售团队按客户分单
- 客服团队按区域或品牌分单
- 多人协作处理不同报价任务

![member](/quote/images/member/assign.png)

## 注意事项

- Admin 会自动拥有全部权限
- 如果成员看不到某个页面，先检查是否分配了对应的 Navigation 权限
- 如果成员能进入页面但无法执行操作，先检查是否分配了对应的 Quote 权限
