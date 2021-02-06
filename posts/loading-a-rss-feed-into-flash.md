---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Loading a RSS feed into Flash"
date: "2005-05-15"
categories: 
  - "actionscript"
  - "programming"
  - "tutorials"
---

\[as\]// create a new XML object var sports:XML = new XML();

// set the ignoreWhite property to true (default value is false) sports.ignoreWhite = true;

// After loading is complete, trace the XML object sports.onLoad = function(success) { trace(sports); };

// load the XML into the sports object sports.load("http://rss.news.yahoo.com/rss/sports");\[/as\]
