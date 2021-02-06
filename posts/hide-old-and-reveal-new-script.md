---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Hide Old and Reveal New Script"
date: "2007-09-21"
categories: 
  - "actionscript"
  - "programming"
---

\[kml\_flashembed movie="/labs/swf/reveal.swf" height="150" width="450" /\]

I was talking the other day with a friend about a small challenge, having 2 images on stage with 2 ideas. 1- have the experience being user driven (in this case the mouse reveals one image while hiding the other) 2- Use XML for easy update. So we fired flash and the above is the visual and the code below...

\[as\]var xmlLoader:XML = new XML(); var firstItem:String; var secondItem:String;

xmlLoader.ignoreWhite = true; xmlLoader.onLoad = function ( success )

{ var base = xmlLoader.firstChild; firstItem = base.firstChild.firstChild.firstChild secondItem = base.firstChild.firstChild.nextSibling.firstChild firstItem = "images/" + firstItem.toString(); secondItem = "images/" + secondItem.toString(); setImages();

}

xmlLoader.load("xml/revealer.xml");

Mouse.addListener(this);

onMouseMove = function()

{

mask1\_mc.\_x = \_root.\_xmouse;

}

function setImages()

{

var mcl1:MovieClipLoader = new MovieClipLoader(); mcl1.addListener(this); mcl1.loadClip(firstItem, image1\_mc); var mcl2:MovieClipLoader = new MovieClipLoader(); mcl2.addListener(this); mcl2.loadClip(secondItem, image2\_mc);

}

mask1\_mc.\_x = 212;\[/as\]
