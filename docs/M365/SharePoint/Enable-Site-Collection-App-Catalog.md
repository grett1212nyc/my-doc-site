---
id: Enable-Site-Collection-App-Catalog
title: Enable a Site Collection App Catalog
description: Enable Site Collection App Catalog
---

## Why do we need a Site Collection App Catalog?

There are times and cases when we, as a developer, have to build a solution which is very much specific to a particular project or application. This solution demands a very determined approach to solving a specific problem which is not required for other site collections of your tenant. Below are some of the reasons why we need a site collection app catalog.

- Provide isolated and focused solution/web part for a particular project.
- Tenant level App/Add-in is visible to all site collection under a tenant. Risk of installing the app in other site collections is nullified for which solution is not required.
- Provides controls to Site collection admins to manage solutions specific on site collection.
- No need to provide access to site collection admins to deploy the app on the tenant.
- Saves times and faster deployment methodology.

## How to enable site collection app catalog?

- Enabling site collection app catalog for the particular site requires tenant level administrator access.
- This is a one-time activity to be done by tenant admins.

```powershell
# Download and install, if not already, SharePoint Online Management Shell
# Once installed, open SharePoint Online Management Shell.
# Connect to the Tenant.
​
Connect-SPOService -Url https://<tentant>-admin.sharepoint.com -credential user123@company.co.za
​
# get a reference to the site collection where the site collection app catalog should be created
$site = Get-SPOSite https://<tentant>.sharepoint.com/sites/yoursitename

# create site collection app catalog
Add-SPOSiteCollectionAppCatalog -Site $site
```

Once you go to the site collection, you will see the app for SharePoint library which can be used to deploy the app.
