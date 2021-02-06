---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "NPM errors and common cures"
date: "2014-04-08"
categories: 
  - "programming"
---

"npm ERR! error rolling back socket.io@0.9.16"

remove ~/.node-gyp and clean npm cache by `npm cache clean`, then try again.

[source](https://github.com/NetEase/pomelo/issues/356)
