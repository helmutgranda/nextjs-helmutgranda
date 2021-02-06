---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Drag and Drop"
date: "2003-06-23"
categories: 
  - "flashmx"
---

`//Drag Function MovieClip.prototype.Press = function() { this.startDrag(); };

//Release Function MovieClip.prototype.Release = function() { this.stopDrag(); if(eval(this._droptarget) == landingArea) { this.enabled = false counter = counter + 1; trace(counter); if (counter == 4) { trace("You Got Them All!") }; }; };

MovieClip.prototype.Actions = function() { this.onPress = Press; this.onRelease = Release; };

mc_One.Actions(); mc_Two.Actions(); mc_Three.Actions(); mc_Four.Actions();

/* Usage: Create 4 MC give instance names or  
mc_One, mc_Two, mc_Three, mc_Four  
Crate one more and give instance name  
of landingArea.  
Place script on frame 1 and drag and drop  
mc_One - Four  
To landingArea. Once all of them have landed  
the counter will Start  
and the dragging functions will be disabled so the user  
Cant move them. Hope this helps */`

  
  
You can find a sample here

  
[Drag and Drop Samplehttp://www.humanletter.com/tutorials/draganddrop.html](http://www.humanletter.com/tutorials/draganddrop.html)
