---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Adding serveral unversioned files to an existing repository"
date: "2010-12-07"
categories: 
  - "as-burst"
---

### Problem

You have already added a directory to SVN and you need to add several new files to SVN. As you may know the default way to add new files to an existing repository is by doing the following:

$ svn add filename1.ext $ svn add filename2.ext

or one line

$ svn add filename1.ext filename2.ext

this works well when you have a few file names but how about several files that need to be added at once and with complex names?

### Solution

You can add the --force option when re-adding a directory

$ svn add directorycontainingfiles --force

If you want to take it a step further you can clean up your directories from those extra hidden files:

$ find . -name '\*.DS\_Store' -type f -delete
