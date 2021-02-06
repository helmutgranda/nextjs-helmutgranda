---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Error in supported CSS properties in Flash"
date: "2006-10-31"
categories: 
  - "actionscript"
  - "programming"
---

So actually there is not an error in the way the CSS properties are handled within Flash, if you area always in the run trying to get things done you will notice that the first column in the Flash Help file for the CSS properties has (for example) text-align. You might right away try to use the properti as such but if you look closer there is a column next to the CSS properties called ActionScript property and in there you have the defenition of how the CSS property must be handled. In the case of text-align it must be textAlign.

If it is well explained in the Docs then why did I name this Post "Error in supported CSS properties in Flash"? Good question, I was about to report this as an error until I realized it was my mistake and it was not the Docs, I just scan throu the document without paying too close attention.

With that said I believe it could be a good idea to have the compiler check for small items like that, I mean really how hard would it be to check for "text-align" in your code and prompt a warning like "Hey! you are using text-align" in your code, did you mean to use textAlign?.

heh just an idea :)
