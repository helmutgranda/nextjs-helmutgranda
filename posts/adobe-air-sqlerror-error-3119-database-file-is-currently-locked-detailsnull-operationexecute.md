---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Adobe Air SQLError: 'Error #3119: Database file is currently locked.', details:'null', operation:'execute'"
date: "2008-05-07"
categories: 
  - "air"
  - "programming"
---

For the longest time I was having issues with this Adobe Air Error and its description, the main issue is that the "details" for this error are "null". We do get the description that the database is locked but no details on file name where the error occur or line number.

If you do a search in the [Adobe documentation](http://livedocs.adobe.com/air/1/jslr/runtimeErrors.html) you will get a pretty blank line after the error:

3119 Database file is currently locked.

To solve the issue once and for all what the error means is that you have a connection open to make changes to the database and you have opened a new connection to make more changes to the database. So there are 2 solutions

1\. Use the first connection to make your second updates 2. Close the first connection and then you can use the new connection

Main entry continued
