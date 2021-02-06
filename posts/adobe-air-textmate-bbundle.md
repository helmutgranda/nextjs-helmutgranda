---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Adobe Air Textmate Bundle"
date: "2008-04-30"
categories: 
  - "as-burst"
---

I started creating an Adobe Air application with Adobe DreamWeaver and it works great, but I am so used to doing development with TextMate that I ended up using DreamWeaver just for previewing and compiling the application and TextMate for development. Fortunatelly for us [Matthew Reed](http://www.towerkraut.com/) has created a Bundle to test and compile your Adobe Air Applications in just 3 steps:

\- Download [_Source in Matthew Reed's site_](http://www.towerkraut.com/files/Air.tmbundle.zip) - Install _Into Textmate_ - Use it! _Control + Return_

Thanks for this bundle!

Source: [Adobe Airâ„¢ TextMate Bundle](http://www.towerkraut.com/adobe-air-textmate-bundle/)

Note: He recommends to install (or have) the SDK inside "Applications/AdobeAir" and the bundle works as expected. But if you would like to change the location where the Bundle makes reference to you can do so by looking under:

Bundles>Bundle Editor>Show Bundle Editor

Tab to:

Air> Package Preview Air> Package Self-signed

and you will find the following lines:

export PATH=$PATH:/Applications/AdobeAir/bin export CLASSPATH=/Applications/AdobeAir/lib/adt.jar adl "$TM\_PROJECT\_DIRECTORY/application.xml"

Change /Applications/AdobeAir/ to the location of your SDK.
