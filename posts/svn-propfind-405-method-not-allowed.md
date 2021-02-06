---
layout: post
image: img/writing.jpg
author: [Helmut]
excerpt: Work In Progress Migration
title: "SVN PROPFIND 405 Method Not Allowed"
date: "2009-10-04"
categories: 
  - "as-burst"
tags: 
  - "error"
  - "svn"
---

### Problem

I was getting the following error after trying to update a SVN repository.

\[php\]PROPFIND of '/': 405 Method Not Allowed\[/php\]

And had no idea what it meant. I read on the internet that could be from trying to checkout a file that is none existent. The interesting thing is that I was just doing an update (svn update).

### Solution:

\[php\]svn cleanup\[/php\]

That solved my problem immediately. After running the cleanup command I was able to make my update.
