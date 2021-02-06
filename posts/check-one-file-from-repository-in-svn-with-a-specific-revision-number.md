---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Check one file from repository in SVN with a specific revision number"
date: "2010-08-05"
categories: 
  - "as-burst"
---

### Problem

You have to edit one file from a repository but there are hundreds of files in that repository with possible hundreds of MB or GB worth of information. Not only that but you might need the file on a specific revision number.

You have tried

\[php\]svn checkout http://svn.source/directory/file.fil\[/php\]

But this doesn't work.

### Solution

You need to check out an empty directory from repository and then apply an update to the file you need.

\[php\]svn checkout --depth=empty htt://svn.source/directory\[php\]

Now you submit the update command for the file you need checked out

\[php\]svn update file.fil\[/php\]

note, before running the svn update make sure you "cd" to the directory that you just checked out from svn "cd /directory".

finally if you want the file to a specific revision number all you have to do is run an update again with the revision number.

\[php\]svn update -r### file.fil\[/php\]
