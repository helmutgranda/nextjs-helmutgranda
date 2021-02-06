---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Make Permanent Aliases on MAC OS X"
date: "2010-03-09"
categories: 
  - "quote-bits"
---

command line:

open ~/.bash\_profile

add as follows

alias name=path

example:

alias zf=/usr/local/ZendFrameworkCli/bin/zf.sh

if you need to pass a parameter where you need to escape characters or spaces wrap the path in quotes as follows:

alias projects="cd /Applications/xampp/xamppfiles/htdocs"
