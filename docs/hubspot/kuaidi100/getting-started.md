# Getting Started with Kuaidi100 Shipping Tracker

Kuaidi100 Shipping Tracker is an application that seamlessly connects **HubSpot** and **Kuaidi100**.

Users simply enter a tracking number on the HubSpot Deal or Order screen to automatically identify the carrier and view real-time tracking progress and delivery status—efficiently following up on customer orders without leaving the CRM.

## Application Overview

For cross-border e-commerce or domestic trading companies using HubSpot for sales and order management, switching back and forth between the CRM system and third-party tracking websites is a time-consuming and inefficient challenge.

**Kuaidi100 Shipping Tracker** allows you to track package status with one click directly from the HubSpot screen. Deeply integrated with the official Kuaidi100 API, it supports automatic identification and tracking for hundreds of major carriers. It creates a closed-loop environment for centralized management of order logistics, exception alerts, and customer delivery status without leaving HubSpot.

![App Card](/hubspot/kuaidi100/images/card.png)

## Key Features

*   **Real-time Logistics Tracking**: Get and view real-time tracking progress directly from HubSpot Deal or Order record screens.
*   **Intelligent Carrier Identification**: Automatically identifies the carrier upon entering the tracking number.
*   **Privacy Query Support**: Supports carriers with special requirements (e.g., SF Express, ZTO) by allowing input of the last four digits of the recipient's phone number for precise tracking.
*   **Flexible Card Configuration**: Seamlessly add the app card to your CRM record pages and sales workspaces.
*   **API Usage Monitoring**: Dedicated settings panel to monitor total API queries and remaining quota in real-time.

## Data Sharing Description

Kuaidi100 Shipping Tracker helps HubSpot users track shipments directly from Deal and Order records. During installation, the application automatically creates a custom property called **Logistics Tracking Data** (`logistics_trackings`) on Deal and Order records.

The tracking number entered in the app card is stored in this HubSpot property. When a user clicks "Track", the app reads the stored number, sends a request to the official Kuaidi100 API via the backend, and displays real-time updates in the card.

**Note**: Logistics status, events, and delivery details are displayed in real-time in the card only and are **not** stored in HubSpot properties.

| Data Source | Sync Direction | In HubSpot |
| :--- | :---: | :--- |
| Shipment Tracking Number | ⇄ | Deals |
| Shipment Tracking Number | ⇄ | Orders |

## More Info About Shared Data

*   **Automated Property Creation**: The `logistics_trackings` property generated during installation is used for persistent storage of tracking numbers.
*   **Real-time Interaction**: Each tracking request is a real-time API call, ensuring data consistency and accuracy.
*   **Privacy & Performance**: Stores only necessary tracking numbers, avoiding redundant logistics node data in HubSpot.
