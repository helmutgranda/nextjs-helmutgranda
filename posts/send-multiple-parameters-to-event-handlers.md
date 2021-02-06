---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Send multiple parameters to event handlers"
date: "2009-10-01"
categories: 
  - "as-burst"
---

At one point or another during the time you write applications with ActionScript 3 you will have to send parameters from to an event handler. By default you can't send information unless you use the DataEvent, but that only allows you to send a string. That is OK if that is all you need to send but how about multiple parameters? How about an object or references?

In the example below we create a square on the stage that then will dispatch a custom event with 3 parameters (two strings and one number).

\[as\]package {

import flash.display.Sprite; import event.CustomEvent; import flash.events.Event; import flash.events.MouseEvent;

public class App extends Sprite {

var square : Sprite ;

public function App() { init ( ) ; }

private function init ( ) : void {

//add the event listener to the Document class.

this.addEventListener( CustomEvent.MOUSE\_CLICK, customEventHandler ) ;

// Draw a square on stage and add a mouseEvent // that then will dispatch a custom event

square = drawSquare(); square.buttonMode = true; square.addEventListener ( MouseEvent.CLICK,dispatchCustomEvent ) ;

addChild(square);

}

private function dispatchCustomEvent ( e : Event ) : void { dispatchEvent ( new CustomEvent ( CustomEvent.MOUSE\_CLICK , "myParam1", "myParam2", 3 ) ) ; }

private function customEventHandler ( e :CustomEvent ) { trace( "Param 1: " + e.param1 ) ; trace( "Param 1: " + e.param2 ) ; trace( "Param 1: " + e.param3 ) ; }

private function drawSquare ( ) : Sprite {

var square:Sprite = new Sprite();

square.graphics.beginFill(0x000000); square.graphics.drawRect(100, 100, 100, 100); square.graphics.endFill(); return square as Sprite; }

}

}\[/as\]

### Custom Class

\[as\]package event {

import flash.events.Event;

public class CustomEvent extends Event {

public static const MOUSE\_CLICK : String = "mouseClick";

public var param1 : String ; public var param2 : String ; public var param3 : int ;

public function CustomEvent( type : String, param1 : String, param2 : String, param3 : int, bubbles:Boolean = false, cancelable:Boolean = false ) {

super ( type, bubbles, cancelable ) ;

this.param1 = param1; this.param2 = param2; this.param3 = param3;

}

override public function clone( ): Event { return new CustomEvent( type, param1, param2, param3, bubbles, cancelable ); } } }\[/as\]
