---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Password protected flash site Class"
date: "2007-01-22"
categories: 
  - "news"
---

After seeing so many people requesting help with the easy Username and Password method for Flash I decided to write a small class.

Granted UserName and Password verification shouldn't be taken slightly, but many times you just want to make a section of your site "Pass Protected with flash", and in reality this is a very simple verification that should be used against the average joe, not the average geek-joe who knows about flash-deconstruction and such.

So have your Password-Protected flash site in 3 steps;

1\. Download the class from here:

2\. unzip the files in the directory where you are building your flash movie, so the file structure should look like this:

\-root directory --com ---helmutgranda ----PasswordProtect.as 3. on the root timeline of your flash movie write the following:

\[as\] import com.helmutgranda.PasswordProtect; //(timeline, depth, x position, y position, username, password, gotoAndPlay what? # or label) PasswordProtect.main(this, 10, 25, 25, "helmut", "granda", 5);

\[/as\]

Please do not write telling me geek-joe was able to break into my site! because this is not a bullet proof password verification, this is just a quick way of keeping the average joe from looking into any "secure" section of your site. I might write a more robust version with some PHP/mySQL/flash combo but for now this will do.
