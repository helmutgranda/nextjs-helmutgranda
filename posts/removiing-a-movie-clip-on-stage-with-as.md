---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Removiing a Movie Clip on Stage with AS"
date: "2005-05-14"
categories: 
  - "actionscript"
  - "programming"
---

\[as\]//A square with id = square //A simple button named mca that removes the attached MCs

this.attachMovie("square", "square1",1); this.attachMovie("square", "square2",2);

square2.\_x =100;

mca.onRelease = function() { square1.removeMovieClip(); square2.removeMovieClip(); }\[/as\]
