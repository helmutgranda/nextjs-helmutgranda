---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "How to make sure your banners play only for a certain period of time"
date: "2008-11-07"
categories: 
  - "as-burst"
---

It is almost a standard to allow banners to play for only 15 seconds after they have been loaded into the browser. If you are creating your animations on the timeline you can very well know how long the banner is by looking at the frames you are using for a specific banner. But if you are creating a banner through code there are 2 ways to ensure that your banners last 15 seconds from creation.

The long way to ensure that your banners last 15 seconds is by using the Date object, and the short and easy way is to use the getTimer global function.

\[code=as\]trace("\*\*\*\*\*BANNER LENGTH IN SECONDS = " + getTimer ( ) / 1000 ) ;\[/code\]

The code above will produce something similar to :

\[code=as\]\*\*\*\*\*BANNER LENGTH IN SECONDS = 15.00\[/code\]
