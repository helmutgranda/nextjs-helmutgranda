---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "RubyOnRails Controllers"
date: "2007-01-07"
categories: 
  - "ror"
---

when creating a new controller the file name of the controller has to be the same as the controller itself and it can be either xxxxx\_controller or just xxxxxx

For example

mytest\_controller.rb - ok

mytest.rb - ok

mytest\_co.rb - not ok

also make sure you add ::BASE after the class name definition or you will get a horrifying error... well not horrifying but at least not the result you are expecting.

As always, this applies to WINXP - LAMP - ROR installation
