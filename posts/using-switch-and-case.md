---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Using Switch and Case"
date: "2006-10-23"
categories: 
  - "actionscript"
  - "programming"
---

Following the samples from the Flash Docs you will have the following:

\[as\]switch (variable) { case 0: trace("Option0"); break; case 1: trace("Option1"); break; case 2: trace("Option2"); break; }\[/as\]

But if you are about to test against a string variable instead of a number variable your first instict (or at least i guess it would be your first instict) would be just to place the string inside the case statement

\[as\] case thevariable; \[/as\]

Once you run your code this is not going to work, granted the variable you are testing might be the exact variable you are expecting but in reallity flash won't know it is a string until you put it in quote marks.

\[as\] case "thevariable"; \[/as\]

I hope this little tip helps out some of you...
