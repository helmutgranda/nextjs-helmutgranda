---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "ReaditLaterList + Bit.ly + Tweeter"
date: "2011-01-09"
categories: 
  - "weekendproject"
---

Thanks to the great APIs from each of three different services (Readitlaterlist, bitly and tweeter) I was able to create a mashup that allows me to view the ReaditLaterList items on the browser. There are times when I want to share the links with others in tweeter but I need to open a new browser and create the bit.ly link, after that I need to create a new tweet using the title of the page I was looking at.

![](images/mashup.gif "mashup")

I could have used different browser shorcuts but I figured that it was a good opportunity to use some JQuery to create a simple web app and the app does the following:

1\. Load list from ReaditLaterList 2. Create "tweet" and "load" options for each item listed 3. The "Load" option loads the site on an iframe 4. The "tweet" option tweets the link but before doing so the link is pushed to bit.ly from where we get a short url and then automatically posted to tweeter.

![](images/feature-item2.jpg "ReaditLaterList + Bit.ly + Tweeter")

This is a lot faster and allows me to keep up with my reading list as well as being able to share the content with just one click. Not only that but I am able to keep all my links organized on my bit. This allows me to keep everything organized under each one of my personal accounts.
