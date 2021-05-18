---
id: Copy-SharePoint-Online-Site-with-List-Data
title: Copy SharePoint Online Site with List data
description: This is a guide on how to create a copy of one Site Collection to another. This is for SharePoint Online Only, for On premise have a look at the restore-spsite cmdlets on the SharePoint Server.
---

## Introduction

This is a guide on how to create a copy of one Site Collection to another. This is for SharePoint Online Only, for On premise have a look at the restore-spsite cmdlets on the SharePoint Server.

Before you start if this guide
The user running the scripts, must have the following permissions,

- The User must be a Term Store Administrator.
- The User must be a SharePoint Administrator with access to the Admin Center.
- The User must be a Site Collection Administrator in both the source and destination sites.
- Custom Scripting must be enabled on both source and destination sites.

## Enable the Custom Scripting

With the latest SharePoint modern experience, Microsoft had decided to turn off some features, and one among them was Custom Scripting. Unfortunately, to do the SharePoint provisioning, we will have to enable the Custom Scripting.

According to Microsoft, below are the features which will not be available until you manually enable the custom scripting.

1. Save Site as Template
2. Save document library as template
3. Solution Gallery
4. Theme Gallery
5. Help Settings
6. HTML Field Security
7. Sandbox solutions
8. SharePoint Designer
9. Uploading files that potentially include script

To allow custom script on other SharePoint site collections, you will have to download the download the latest SharePoint Online Management Shell. Once you are done you can perform the below commands.

```powershell
Connect-SPOService -Url https://<tenant>-admin.sharepoint.com -credential user123@company.co.za
Set-SPOSite https://<tenant>.sharepoint.com/sites/youradminsitename -DenyAddAndCustomizePages 0
```

## Set the User as a Term Store Admin

Once we have enabled the custom scripting it is time to add you as the Term Store Admin, again you can always reach out to your Tenant admin to add you as a Term Store Admin. You can ask your Tenant admin to perform the preceding steps.

1. Sign in to Office 365 as a global admin or SharePoint admin.
2. Click on the app launch icon( 9 dots) and then click on Admin to open the Microsoft 365 admin center.
3. Select Admin centers and then click on SharePoint.
4. Now, you should see an option as Term Store and click on it.
5. He/She can add your mail id in the text box near to the heading Term Store Administrators
   Once it is done you can always go to your Site Settings > Term Store Management > Term Store Administrators.

## Connect your source site

The first thing to do is, to connect the source SharePoint site, you can do that by using the preceding command. Make sure you have the PNP PowerShell installed...

```powershell
# First connect the the source site
Connect-PnPOnline https://<tenant>.sharepoint.com/sites/yoursourcesitename
​
# This is the location where you want to export the configuration to.
Get-PnPProvisioningTemplate -Out c:\DMS.xml
​
# If you would like to include list data, you can add it like this by telling it which lists data to export
Add-PnPDataRowsToProvisioningTemplate -Path C:\DMS.xml -List 'Locations' -Query '<view></view>'
```

## Apply configuration to your destination site

Now we have an XML file which has everything we need to move. Connect your destination site by following the command below.

```powershell
# Now you need to connect to the destination site
Connect-PnPOnline https://<tenant>.sharepoint.com/sites/yourdestinationsitename
​
# Then apply the template configuration from the exported xml to the destination site.
Apply-PnPProvisioningTemplate -Path C:\DMS.xml
```

## Conclusion

Congratulation, we have successfully moved all of our data and almost everything from one SharePoint site to other.
