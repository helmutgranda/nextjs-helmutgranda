---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Chmod Cheats"
date: "2011-12-05"
categories: 
  - "as-burst"
---

> prompt> chmod 0755 script.sh prompt> chmod 755 script.sh prompt> chmod u=rwx,g=rx,o=rx script.sh prompt> chmod u=rwx,go=rx script.sh prompt> chmod u+rwx,g+rx,g-w,o+rx,o-w script.sh prompt> chmod u+rwx,go+rx,go-w script.sh

via [zzee.com](http://www.zzee.com/solutions/chmod-help.shtml)
