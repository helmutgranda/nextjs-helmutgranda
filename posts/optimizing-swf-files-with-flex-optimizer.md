---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Optimizing SWF files with Flex Optimizer"
date: "2009-12-01"
categories: 
  - "actionscript"
  - "articles"
---

I found a reference to optimizing SWC files with Flex Optimizer and I figured I would run some tests through SWF files and see what effects it had in it.

To my surprise the Optimizer tool did optimize the SWF files but just by a few bytes:

Test 1: ...\_concept1\_v1\_alt.swf (56569 bytes) ...\_concept1\_v1\_alt\_optimized.swf (56456 bytes)

Test 2: ...600\_Flash\_v1.swf (38164 bytes) ...600\_Flash\_v1\_optimized.swf (38127 bytes)

I also ran a test against a custom SWF file inside a SWC file and this is the result:

...DropDown/library.swf (14810 bytes) ...DropDown/library\_optimized.swf (11723 bytes)

So the SWC files are bloated with extra information no needed and can be compressed quite a bit but SWF file no love. And it does make sense since the SWF files that I was testing contain a lot of graphics but I still gave it a go.

[Here you can ind more information about Optimizing RSL SWF Files.](http://livedocs.adobe.com/flex/3/html/help.html?content=rsl_07.html)
