---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Silverlight error AG_E_RUNTIME_METHOD 2207"
date: "2008-05-20"
categories: 
  - "programming"
  - "silverlight"
---

I am doing some testing with Silverlight (I know right!) and I kept getting error #2207 without really getting a detailed description. Well the issue -in MY case- was hat i was trying to download a file cross-domains, and with most plugins it was a no-no. So I just needed to change the source to local file.

\[js\] Good: downloader.open("GET", "image-4.jpg"); Bad downloader.open("GET", "http://www.helmutgranda.com/images/image-4.jpg"); \[/js\]
