---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Find files in Linux that exceed specific file size."
date: "2012-09-19"
categories: 
  - "as-burst"
  - "programming"
---

sudo find / -type f -size +(fileSize) -exec ls -lh {} \\; | awk '{ print $9 ": " $5 }'

Example:

sudo find / -type f -size +20000k -exec ls -lh {} \\; | awk '{ print $9 ": " $5 }'
