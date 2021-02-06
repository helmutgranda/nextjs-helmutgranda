---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Adobe Air CreateDirectory common error"
date: "2008-05-01"
categories: 
  - "air"
  - "programming"
---

If you need to create a directory from Air and you dont know how, mostlikely you will use the Adobe Air Documentation and use something as the following:

\[js\] var directory = air.File.documentsDirectory; directory = directory.resolvePath("AIR Test");

air.File.createDirectory(directory); air.trace(directory.exists); // true \[/js\]

it all looks nice and makes sense but in the real world it wont work, you would get an error like this:

Type Error : Value undefined ( result of expression air.File.createDirectory ) is not object. # of your code error.

The problem with this approach is that the createDirectory method doesnt take any parameters, if you try to pass values directly to the method you will get this error:

Argument Error : Error #1063: Argument count mismatch on flash.filesystem::File/createDirectory(). Expected 0, got 1.

Once i was able to get this error I realized that the docs were wrong, or at least on this specific section. So looking at a different sample I figured out this works:

\[js\] var directory = air.File.documentsDirectory; directory = directory.resolvePath("Air Test"); directory.createDirectory();//no parameters necessary, Air knows where we need the new directory. \[/js/\]

By first "asking" Air if the directory exists then Air knows where to create the new Directory rather than passing the property directly to the method. _This applies to Adobe Air SDK 3.0 and using Javascript_

Tags: [Air](http://technorati.com/tag/Air), [Adobe](http://technorati.com/tag/Adobe), [Javascript](http://technorati.com/tag/%20Javascript), [SDK](http://technorati.com/tag/%20SDK)
