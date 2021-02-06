---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "WebkitErrorDomain error 203"
date: "2008-04-15"
categories: 
  - "programming"
---

This error is produced in Safari for MAC and you can't view it unless you are looking at the Activity window AND you are trying to load the same file at the same time.

For example note the following:

\[as\] loadFile1(); loadFile1();

function loadFile1() { load("file1.swf") } \[/as\]

I know this is too ovious to go un noticed, but if you have a large project you are working on there might be the possibility that you might be trying to load the same file twice and thus Safari tries to load the file twice and the error is produced.

This is what "i think" its going through Safari's little mind.

Load file1.swf ...loading Load file1.swf ...loading .... Wait?! its the same file STOP loading the file and trow and error! Throw Error WebkitErrorDomain error 203 Load file1.swf
