---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Create Text Field FlashMX 106 (lets have fun!)"
date: "2004-01-19"
categories: 
  - "flash-bits"
---

\[as\] hDistance = 20; vDistance = 0; buttonsInfo = new Array("About Us", "Contact Us", "Gallery One", "Gallery Two", "Gallery Three", "Visual", "Guest", "Clients", "Account", "Search"); textDesign = new TextFormat(); textDesign.font = "Arial"; textDesign.size = 15; textDesign.bullet = false; textDesign.underline = true; textDesign.url = "http://www.helmutgranda.com/"; for (i =0;i<10;i++){ this.createTextField("textHolder"+i, i, 120+(i\*vDistance),120+(i\*hDistance),100,19); this\["textHolder"+i\].text = buttonsInfo\[i\]; this\["textHolder"+i\].border = true; this\["textHolder"+i\].borderColor = "0xaa"+i/2+i/2+i/2+i; this\["textHolder"+i\].html = true; this\["textHolder"+i\].selectable = false; this\["textHolder"+i\].textColor = "0xaa"+i\*2+i\*2+i\*2+i; this\["textHolder"+i\].setTextFormat(textDesign); }

\[/as\]
