---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Command line productivity"
date: "2010-08-13"
categories: 
  - "programming"
---

There is nothing more rewarding than creating shortcuts for your daily work routines, and what better than when using the command line.

### Problem:

You have to create a directory and then cd to it after creation.

### Solution:

Open your blash\_profile for editing, in my case I will use nano

$ nano ~/bash\_profile

once open, now I can add the following function to it.

function mkcd() { mkdir -p $1 && eval cd $1 }

Almost there... now do control-x + enter + control-c, finally source blash\_profile

$ source ~/.bash\_profile

You are now set. next time you need to create a new directory and cd to it all you have to do is:

$ mkcd name\_of\_directory
