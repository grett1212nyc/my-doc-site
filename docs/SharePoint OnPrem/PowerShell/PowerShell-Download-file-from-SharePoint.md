---
id: PowerShell-Download-files-from-SharePoint-On-Premises
title: PowerShell - Download files from SharePoint On-Premises
description: Practical guide on how to download files from SharePoint On-Promises using PowerShell
---

---

I recently had a requirement to download excel files from SharePoint and extract the data from the spreadsheet programmatically.
This is the script that helped me get the job done.

Steps

1.  You have to log onto the SharePoint server.

2.  Open the PowerShell ISE or you can use VScode with the PowerShell extentions.

3.  Import the SharePoint module.

```powershell
#####  Import Modules ####
Add-PSSnapin Microsoft.SharePoint.PowerShell -ErrorAction SilentlyContinue
###################################################################################

$fromsite = "YOUR SITE URL"

$fromfile = "LIBRARY NAME/FILENAME.xlsx"
$tofile   = "D:\OUTPUTDIR\FILENAME.xlsx"

$web = Get-SPWeb $fromsite
$file = $web.GetFile($fromfile)
$filebytes = $file.OpenBinary()

$filestream = New-Object System.IO.FileStream($tofile, "Create")
$binarywriter = New-Object System.IO.BinaryWriter($filestream)
$binarywriter.write($filebytes)
$binarywriter.Close()
```

To extract the data I used the module Import-Excel, but that is for another post.

Thank you.
