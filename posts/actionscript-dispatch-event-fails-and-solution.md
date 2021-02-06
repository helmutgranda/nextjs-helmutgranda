---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Actionscript dispatch event fails and solution."
date: "2009-10-08"
categories: 
  - "as-burst"
---

### The Problem:

A event too close to the instantiation of an object is not being fired, I believe the speed of the code execution is too fast for the listener to be able to register for the event.

Lets take a look at the following class to understand the issue.

\[as\]package application.views {

import flash.display.Sprite; import flash.events.Event;

public class TestView extends Sprite { public static const NAME : String = "TestView"; public static const THE\_EVENT : String = NAME + "The\_Event"; private var holder : Sprite; public function TestView ( ) { init();

} private function init () : void { holder = new Sprite; holder.graphics.beginFill(0x000000) holder.graphics.drawRoundRect(0, 0, 100, 100, 0); holder.graphics.endFill(); addChild(holder); dispatchEvent ( new Event ( THE\_EVENT)) } } }\[/as\]

In the example above what we are doing is dispatching an event after the creation of a simple object. If you notice the call to the init function is right after the construction of this specific object, in this case the object that is listening for that specific event is never able to "hear" the event, although it has been fired.

Here is the construction of the TestView and the listening for the event:

\[as\]private var testView : TestView; testView = new TestView; testView.addEventListener ( TestView.THE\_EVENT, theEventHandler ) ;

private function theEventHandler ( event : Event ) : void { trace("Event Fired"); }\[/as\]

### The Solution

The solution is very simple, add a delay as low as 1/1000 before the code execution.

\[as\]package application.views {

import flash.display.Sprite; import flash.events.Event; import flash.utils.setTimeout;

public class TestView extends Sprite { public static const NAME : String = "TestView"; public static const THE\_EVENT : String = NAME + "The\_Event"; private var holder : Sprite; public function TestView ( ) { //delay the execution of init by 1/1000 setTimeout(init, 1); //init();

} private function init () : void { holder = new Sprite; holder.graphics.beginFill(0x000000) holder.graphics.drawRoundRect(0, 0, 100, 100, 0); holder.graphics.endFill(); addChild(holder); dispatchEvent ( new Event ( THE\_EVENT)) } } }\[/as\]

### Conclusion

There are ways to go around this issue, that is for certain but being able to find where your problem is located at is important to provide the right solution at the right time. I am going to do some more research in regards to why this specific problem happens at a lower level but for now it allows me to trust that the listener is going to be able to "listen" for a specific event.

Am I happy with this solution? NO. but for this specific application I am working on I need to make sure all the elements are in place before continuing the chain of events rather than just trusting that items are drawn or attached on the display list.
