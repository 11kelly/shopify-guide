---
layout: home

hero:
  name: "Apps Documentation"
  text: "One-stop guides and support documentation"
  tagline: Empowering your Shopify and HubSpot business growth with clear, detailed application instructions.
  actions:
    - theme: brand
      text: View Shopify Apps
      link: "#shopify-apps"
    - theme: alt
      text: View HubSpot Apps
      link: "#hubspot-apps"

features:
  - title: 🛍️ Shopify Platform
    details: Professional Shopify plugins covering quote management, store locator, sales automation, and more.
    link: "#shopify-apps"
  - title: "<img src='/hubspot/kuaidi100/images/hubspot-logo.svg' style='width: 20px; height: 20px; display: inline-block; vertical-align: middle; margin-right: 8px;' /> HubSpot Platform"
    details: Integration tools built for HubSpot users to optimize CRM workflows and boost data sync efficiency.
    link: "#hubspot-apps"
---

<style>
.platform-section {
  margin: 40px 0;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}
.platform-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--vp-c-brand);
  padding-bottom: 10px;
}
.platform-logo {
  width: 28px;
  height: 28px;
}
.app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.app-card {
  border: 1px solid var(--vp-c-divider);
  padding: 16px;
  border-radius: 8px;
  transition: border-color 0.25s;
}
.app-card:hover {
  border-color: var(--vp-c-brand);
}
.app-card h3 {
  margin-top: 0;
}
</style>

## Select an App to View Documentation

We currently provide deep-customized applications for two major platforms:

<div id="shopify-apps" class="platform-section">
  <h2 class="platform-title">🛍️ Shopify Applications</h2>
  <div class="app-grid">
    <div class="app-card">
      <h3>🛒 Quote App</h3>
      <p>A quote management system designed for B2B merchants to handle inquiries and pricing.</p>
      <ul>
        <li><a href="./quote/getting-started">Getting Started</a></li>
        <li><a href="./quote/quote-management">Quote Management</a></li>
      </ul>
    </div>
    <div class="app-card">
      <h3>📍 Store Locator</h3>
      <p>Professional-grade store locator, making it easy for customers to find your physical stores.</p>
      <ul>
        <li><a href="./store-locator/guide/getting-started">Getting Started</a></li>
        <li><a href="./store-locator/guide/publish-locator">Publishing Guide</a></li>
      </ul>
    </div>
  </div>
</div>

<div id="hubspot-apps" class="platform-section">
  <h2 class="platform-title">
    <img src="/hubspot/kuaidi100/images/hubspot-logo.svg" class="platform-logo" alt="HubSpot Logo" />
    HubSpot Applications
  </h2>
  <div class="app-grid">
    <div class="app-card">
      <h3>🚀 HubSpot Getting Started</h3>
      <p>Learn how to seamlessly integrate our apps with your HubSpot CRM.</p>
      <ul>
        <li><a href="./hubspot/getting-started">View General Guide</a></li>
      </ul>
    </div>
    <div class="app-card">
      <h3>📦 Kuaidi100 Shipping Tracker</h3>
      <p>Track shipment progress in real-time directly within HubSpot records, supporting hundreds of domestic and international carriers.</p>
      <ul>
        <li><a href="./hubspot/kuaidi100/getting-started">Getting Started</a></li>
        <li><a href="./hubspot/kuaidi100/usage">User Guide</a></li>
      </ul>
    </div>
  </div>
</div>
