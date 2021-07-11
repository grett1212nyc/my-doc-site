---
id: DNS-Query-Fails-During-CRC-Start
title: DNS query fails during crc start, Failed public DNS query
description: When starting the cluster with crc start you get the warning, WARN Failed public DNS query from the cluster.
---

When you run OpenShift with with Codeready Containers on your laptop you might get the below error when starting the cluster.


```text
WARN Failed public DNS query from the cluster: ssh command error:
command : host -R 3 quay.io
err     : exit status 1
output  : ;; connection timed out; no servers could be reached
```

I resolved this error by running the command like this, taking the DNS address from my wifi router.
```powershell
crc config set nameserver 192.168.0.1  #YOUR IP MIGHT\WILL BE DIFFERENT
crc start
```

Also, make sure that the Virtual Switch have access to the internet.


