---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Spaces on linkTrackVars"
date: "2014-05-27"
categories: 
  - "programming"
---

When you us the linkTrackVars make sure that when you provide multiple parameters they are only separated by a comma and that there is spaces between each of the elements.

BAD:

s.linkTrackVars='prop1, prop2, events';

GOOD:

s.linkTrackVars='prop1,prop2,events';

For some odd reason Adobe has made this implementation part of their best practices but they haven't highlighted the importance of having it all without spaces between each element.

[Best Practices Source](http://microsite.omniture.com/t2/help/en_US/sc/implement/link_variables.html "Omniture Best Pracices")
