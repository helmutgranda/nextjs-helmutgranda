---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Error SVN Checksum missmatch while updating"
date: "2010-11-12"
categories: 
  - "as-burst"
---

### Error

svn: Checksum mismatch while updating 'thenameofyourfile.ext'; expected: 'e0585e8a5e638c6d5490ab2feb9b4267', actual: 'd41d8cd98f00b204e9800998ecf8427e'

### Solution

open the "entries" file that lives inside the ".svn" folder in a text editor. I use TextMate Do a "find" and look for the expected checksum. In the example above is "e0585e8a5e638c6d5490ab2feb9b4267" Replace with the actual checksum. In the example above is "d41d8cd98f00b204e9800998ecf8427e" Done. Now you can commit your changes.

### Possible roadblocks

The entries file needs to be writable.
