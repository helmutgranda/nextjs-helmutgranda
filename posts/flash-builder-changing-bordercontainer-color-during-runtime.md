---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Flash Builder: Changing BorderContainer color during runtime."
date: "2010-04-29"
categories: 
  - "as-burst"
---

I got myself in a mess trying to change the background color of the component during runtime and after different trial and error finally I figured out that it had to do with this declaration:

\[as\] \[/as\]

Once removed I was able to use

\[as\]this.setStyle("backgroundColor",0x00afe1);\[/as\]

I don't really understand why having the backgroundFill declaration within the body of the component, it would affect the behavior to the point that I wasn't able to change the color of the object but when I find the explanation I will for sure post it here.
