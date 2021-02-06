---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Flash ActionScript Inheritance"
date: "2006-08-18"
categories: 
  - "flashmx"
---

So I am trying to figure out the following piece of code:

\[as\]

in Application.as
import Log;
class Application
{
private var \_log:Log; // force mtasc to compile Log.as

function Application(createdBy)
{
// Re-assigment of \_root to Application instance
createdBy.\_\_proto\_\_ = this.\_\_proto\_\_;
createdBy.\_\_constructor\_\_ = Application;
this = createdBy;

setup();
}
public function setup()
{
TRACE("hello world");
}
public static function main(createdBy:MovieClip)
{
var app = new Application(createdBy);
}
}; // end of class

\[/as\]

found here:

[http://www.osflash.org/pipermail/osflash\_osflash.org/2005-August/002165.html](http://www.osflash.org/pipermail/osflash_osflash.org/2005-August/002165.html "Code Link")

So far I have been recommended to read the following article:

[http://www.quantumwave.com/flash/inheritance.html](http://www.quantumwave.com/flash/inheritance.html)

The article well covers the subject of inheritance in Flash 5 and MX. My only concern is that as the article points out using inheritance in this way it will be only an overload to the application. ..to be continued
