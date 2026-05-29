# System Settings & API Configuration

Before using Kuaidi100 Shipping Tracker, you need to complete the API credential configuration. This chapter will guide you through obtaining credentials and setting them up in HubSpot.

## 1. Obtain Kuaidi100 Credentials

You must have a "Kuaidi100 Enterprise" account to obtain API authorization information.

1.  Log in to the [Kuaidi100 Enterprise Console](https://api.kuaidi100.com/login).
2.  Select **"Enterprise Info"** from the left menu bar.
3.  You will find your credentials on the page:
    *   **Authorization Key**
    *   **customer**

<img src="/hubspot/kuaidi100/images/企业信息页.png" style="width: 80%; border: 1px solid var(--vp-c-divider); border-radius: 8px; margin: 20px 0;" alt="Obtain Credentials" />

## 2. Configure Credentials in HubSpot

管理员需将获取到的凭证填入 HubSpot 应用设置中：

1.  进入 HubSpot **Settings** -> **Integrations** -> **Connected Apps**.
2.  找到 **Kuaidi100 Shipping Tracker** 并点击进入设置页面.
3.  Under the **Settings -> General** tab:
    *   Enter your **API Key** in the `Kuaidi100 API Key` field.
    *   Enter your **Customer ID** in the `Kuaidi100 Customer ID` field.
4.  Click **Save Settings** to save the configuration.

<img src="/hubspot/kuaidi100/images/settings-1.png" style="width: 90%; margin: 20px 0; border: 1px solid var(--vp-c-divider); border-radius: 8px;" alt="HubSpot Configuration Interface" />

## 3. Monitor API Usage

您可以直接在 HubSpot 的应用设置页面实时监控 API 的使用情况。请注意，物流查询的剩余次数受到以下两个方面的因素限制：

1.  **Application Quota Limit**：本应用对每个 HubSpot 门户设置了每月 **100 次** 的免费查询额度。
2.  **Kuaidi100 API Balance**：取决于您在快递100企业版账户中的 API 剩余查询次数。

在设置页面的 **Usage & Billing Preview** 部分，您可以直观查看：
*   **Total tracking queries**: 累计查询总数。
*   **Remaining queries**: 综合评估后的剩余可查询次数。

<img src="/hubspot/kuaidi100/images/settings-1.png" style="width: 90%; margin: 20px 0; border: 1px solid var(--vp-c-divider); border-radius: 8px;" alt="Usage Monitoring" />

> **Tips**：
> * 如果 **Application Quota** 耗尽，您需要等待下个月额度重置。
> * 如果 **Kuaidi100 API Balance** 不足，请及时前往快递100企业版后台进行充值，以确保物流查询服务不中断。

## 4. Card Assignment

您可以点击 **App cards** 标签页，将查询卡片分配给特定的 Deal（交易）或 Order（订单）记录页面。

<img src="/hubspot/kuaidi100/images/settings-3.png" style="width: 90%; margin: 20px 0; border: 1px solid var(--vp-c-divider); border-radius: 8px;" alt="Card Assignment" />

<img src="/hubspot/kuaidi100/images/settings-4.png" style="width: 90%; margin: 20px 0; border: 1px solid var(--vp-c-divider); border-radius: 8px;" alt="View Configuration" />
