---
id: Python-ignoreSSL
title: Python - pip install SSL certificate error
description: Ignoring SSL Certificate error when installing packages
date: 2020-02-05
---

## How to ignore the SSL Certificate errors

When you see an error like this, it's most likely that you are behind a proxy server (or something else).

```batch
Could not fetch URL https://pypi.org/simple/pip/:
There was a problem confirming the ssl certificate: HTTPSConnectionPool(host='pypi.org', port=443):
Max retries exceeded with url:
/simple/pip/ (Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED]
certificate verify failed: self signed certificate in certificate chain (_ssl.c:1108)'))) - skipping
```

Add the **_--trusted-host pypi.org_** and **_--trusted-host files.pythonhosted.org_** to the pip install command.

```batch
pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org <package_name>
```
