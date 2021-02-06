---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Papervision AS2 reflected bitmap"
date: "2008-08-12"
categories: 
  - "actionscript"
  - "programming"
---

I have been working on a paper vision in AS2, as you know the AS2 version was dropped as soon as AS3 was out so many of the PPV2 features were never applied to the first version. Anyways, if you ever wanted to portrait a bitmap on one side reflected directly from the library, this should help you:

\[as\]private function simpleSkin (source : BitmapData ) : MaterialObject3D {

var tbmp = tar.createEmptyMovieClip("tbmp", tar.getNextHighestDepth() ); tbmp.attachBitmap(source, tbmp.getNextHighestDepth(), "auto", true); var tw : Number = tbmp.\_width ; var th : Number = tbmp.\_height ; tbmp.\_x = -100; tbmp.\_y = -100;

var myM : Matrix = new Matrix(); myM.a = -1; myM.tx = tw;

var myBitmapData:BitmapData = new BitmapData(tw, th) myBitmapData.draw(tbmp, myM);

tbmp.removeMovieClip();

var mat = new MaterialObject3D(); mat.bitmap = myBitmapData; mat.oneSide = true; mat.smooth = true;

return mat }\[/as\]
