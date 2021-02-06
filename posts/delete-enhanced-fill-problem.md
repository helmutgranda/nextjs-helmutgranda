---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Delete enhanced fill problem"
date: "2007-01-29"
categories: 
  - "flash-bits"
---

Thats it! I am tired of getting the "Enhanced fill not supported in current player version" problem when I import fills from AI/FH/FW and you need to export to V7 or under, so once and for all I am putting a stop to it.

Here are 3 simple steps to get rid of this problem (of course this will be applied after you have imported a vector image with gradients to your stage).

1\. Change your export settings to V8. 2. Pull the "Color Mixer" Palette. 3. Under Overflow select "Extend", take off the check mark from Linear RGB

That is it now you can change your export settings back to V7 or V6 or under and you should be fine. That is all you have to do and all your problems should go away, no more warnings no more asking you to fix your gradients.

Ah! but sometimes the gradient or Flash will be stubborn and still make fuss about the Fills. Well these are some things you can do..

If under the "Color Mixer" Palette your Overflow was selected as "Extend" and the Linear RGB was unselected, well just select Overflow again and check and uncheck the Linear RGB option. That will fix the stubbornness 99.9999999% of the time.

If you still have troubles after you have completed the steps above feel free to ask.
