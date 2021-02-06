---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Small Fader Function Flash MX"
date: "2003-06-18"
categories: 
  - "flashmx"
---

`

this.createEmptyMovieClip ("fader",5);

fader.onEnterFrame = function() { if (myobject._alpha >= 0) { trace("fading:" + myobject._alpha); myobject._alpha -= 1; } else { trace("end of faiding") delete (this.onEnterFrame); } }

`
