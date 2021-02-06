---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Create Text Fields FlashMX 105 (with Borders)"
date: "2004-01-18"
categories: 
  - "flash-bits"
---

`hDistance = 20 vDistance = 0 buttonsInfo = new Array("About Us", "Contact Us", "Gallery One", "Gallery Two", "Gallery Three", "Visual", "Guest", "Clients", "Account", "Search" ) for (i =0;i<10;i++){ this.createTextField("textHolder"+i, i, 120+(i*vDistance),120+(i*hDistance),100,19); this["textHolder"+i].text = buttonsInfo[i]; this["textHolder"+i].border = true; }`
