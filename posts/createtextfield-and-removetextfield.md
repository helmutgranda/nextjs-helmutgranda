---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "createTextField and removeTextField"
date: "2005-05-16"
categories: 
  - "actionscript"
  - "programming"
---

\[as\]createTextFieldOnce = function(){ trace("---> Text Field Created"); \_root.createTextField("cMagnitude",this.getNextHighestDepth(),0,0,100,30); cMagnitude.text = "Hello World"; };

deleteTextField = function(){ trace("----> Text Field Deleted"); \_root.cMagnitude.removeTextField(); }; createTextFieldOnce(); setInterval(deleteTextField,1000);\[/as\]
