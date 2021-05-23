---
id: Adding-proxy-settings-to-your-git-config
title: Adding proxy settings to your git config
description: When you are behind a proxy server you might have to configure your proxy settings in .gitconfig
---

---

On windows this can be located in %userprofile%.  
Add the following to the file.

```
[http]
    proxy = http://my.proxy.net:8080
[https]
    proxy = http://my.proxy.net:8443
[http "http://no-proxy-server"]
    proxy = ""
```
