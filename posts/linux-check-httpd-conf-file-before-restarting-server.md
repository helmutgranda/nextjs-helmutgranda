---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Linux: Check httpd.conf file before restarting server"
date: "2012-01-11"
categories: 
  - "as-burst"
---

### Code

\[code\] /usr/sbin/apachectl configtest \[/code\]

If you have made changes to the httpd.conf file do not restart your server right away but rather run the configtest command that will provide valuable information on what errors there may be in your configuration of any.
