---
id: Add-User-To-Local-Administrators-Group
title: Add User To Local Administrators Group
description: Handy script for adding a user to multiple windows servers at the same time remotely.
---

## Why?

It's a handy script for adding a user to multiple windows servers at the same time remotely.

```powershell
$Servers =
"server1",
"server2",
"server3"

$domain = "HO"
$username = "someuser"

foreach($server in $Servers)
{
    $Server
    $AdminGroup = [ADSI]"WinNT://$Server/Administrators,group"
    $User = [ADSI]"WinNT://$domain/$username,user"
    $AdminGroup.Add($User.Path)
}
```
