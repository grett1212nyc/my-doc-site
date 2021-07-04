---
id: Delete-Version-History-For-Each-File-in-List
title: PowerShell - Delete version history for each file in a SharePoint list ( Onprem )
description: Delete version history for each file in a list without affecting server performance
---

---

I recently had a requirement to delete the version history of all the files in a large list. The version history also grew out of control, the files became very large.

This script deletes all the non-active version for each file in a very effective and performant way.

```powershell
Add-PSSnapin Microsoft.SharePoint.PowerShell -erroraction SilentlyContinue

$SPweb = Get-SPWeb "SITE NAME HERE"
$limit = (Get-Date).AddMonths(-2)
$SPlist = $SPweb.Lists["Library name here"]

foreach ($SPitem in $SPlist.Items)
{
    $currentVersionsCount= $SPItem.Versions.count

    for($i=$currentVersionsCount-1;$i -ge 0;$i--)
    {
        if($SPitem.Versions[$i].IsCurrentVersion){
            Write-Host "Current version: " $i
        }
        else{
            if($limit -gt $SPitem.Versions[$i].Created)
            {
                $SPitem.Versions[$i].delete();
                Write-Host "File " $SPitem.Name ", Version " $i " deleted"
            }
        }
    }
}
```

Thank you.
