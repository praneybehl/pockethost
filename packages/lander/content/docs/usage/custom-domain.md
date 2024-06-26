---
title: Custom Domain (CNAME)
category: usage
description: You can use your own domain name with PocketHost
---

PocketHost instances can use a custom domain (CNAME) instead of `*.pockethost.io`.

We recommand Cloudflare because they support [CNAME flattening](https://developers.cloudflare.com/dns/cname-flattening/) which means you can use `mydomain.com` instead of `foo.mydomain.com`.

Once you have configured your CNAME, go to your PocketHost Dashboard and the Settings tab of your instance to add it (Pro feature only).

Example:

![View of Cloudflare CNAME configuration](/docs/custom-domain.png)
