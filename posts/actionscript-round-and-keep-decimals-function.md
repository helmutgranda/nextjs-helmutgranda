---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Actionscript Round and keep decimals function"
date: "2007-03-07"
categories: 
  - "actionscript"
  - "math"
  - "programming"
---

\[as\]function formatDecimals2 (num, digits) {

if (num < 0 ) { num = 0; }

if (digits <= 0) { return Math.round(num); }

var tenToPower = Math.pow(10, digits); var cropped = String(Math.round(num \* tenToPower) / tenToPower);

trace("digits:" + digits + " - " + cropped);

}

formatDecimals2( 35435.234234, 2); formatDecimals2( 35435.234234, 3); formatDecimals2( 35435.234234, 4);\[/as\]
