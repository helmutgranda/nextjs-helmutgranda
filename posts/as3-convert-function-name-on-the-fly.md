---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "AS3 Convert function name on the fly"
date: "2010-07-15"
categories: 
  - "as-burst"
---

Why would you want to do this? Not sure but a sample here:

\[as\]var \_x = 100;

function a() : void { trace("\\t\\tCalled from A = \_x" + \_x + "\\n"); }

var b = function (): void { trace("\\t\\tCalled from B \\n"); }

trace("Do a regular B call\\n"); b();

trace("Convert B to A\\n"); b = a;

trace("B Converted\\n"); b(); trace("Do a regular A call\\n"); a();\[/as\]

Result

\[as\]Do a regular B call

Called from B

Convert B to A

B Converted

Called from A = \_x100

Do a regular A call

Called from A = \_x100\[/as\]
