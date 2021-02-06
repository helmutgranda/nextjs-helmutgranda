---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Stop sound of loaded SWFs in AS3"
date: "2008-02-11"
categories: 
  - "actionscript"
  - "programming"
---

Until now I didn't have any issue when removing an item from the display list until the item had sound in it. This has to do with an application I am working on which loads several SWFs and they have to be turned "on" and "off". When the SWF has to be turned off the sound has to go with it. So having the item be removed from the DisplayList was the first "answer", but of course if every listener has to be removed from any item that is being removed from the DisplayList the sound object is not an exception. But how do you do that? Again the first logic was to add a new Sound object to the loaded SWF and then control the sound in that way but that didn't fly. Looking in the docs with more detail we find the SoundTransform and here is a description _"The SoundTransform class contains properties for volume and panning. The following objects contain a soundTransform property, the value of which is a SoundTransform object: Microphone, NetStream, SimpleButton, SoundChannel, SoundMixer, and Sprite"_

So with that knowledge in mind now we can control the sound of the loaded SWF's and here is a sample of what I was working with.

\[as\] package { import flash.display.MovieClip; import flash.display.Sprite; import flash.events.\*; import flash.net.\*; import flash.display.Loader; import flash.utils.Timer; import flash.media.SoundTransform; public class SoundStopTest extends Sprite { var loader1:Loader; var loader2:Loader; var mc1 : MovieClip; var mc2 : MovieClip; var holder:Sprite; var mySoundTransform:SoundTransform public function SoundStopTest() { holder = new Sprite; var url1:URLRequest=new URLRequest("scene6\_portofino.swf"); var url2:URLRequest = new URLRequest("scene6\_royalpacific.swf"); loader1=new Loader(); loader1.contentLoaderInfo.addEventListener(Event.COMPLETE, completeHandler); loader1.contentLoaderInfo.addEventListener(IOErrorEvent.IO\_ERROR, ioErrorHandler); loader1.load(url1); loader2 = new Loader(); loader2.contentLoaderInfo.addEventListener(Event.COMPLETE, completeHandler2); loader2.contentLoaderInfo.addEventListener(IOErrorEvent.IO\_ERROR, ioErrorHandler); loader2.load(url2); holder.addChild(loader1); holder.addChild(loader2); addChild(holder); var myTimer = new Timer(2500, 1) myTimer.addEventListener("timer", theEvent) myTimer.start(); var myTimer2 = new Timer(2500, 1) myTimer2.addEventListener("timer", theEvent2) myTimer2.start(); }

private function completeHandler (e:Event ) { mc1 = MovieClip(loader1.content); mc1.gotoAndPlay(2); } private function completeHandler2 (e:Event ) { mc2 = MovieClip(loader2.content); mc2.gotoAndPlay(2); } private function theEvent(e:TimerEvent) { mySoundTransform = new SoundTransform(); mute(); } private function theEvent2(e:TimerEvent) { // holder.removeChild(loader1); Uncomment if you want control of one item instead of all // holder.removeChild(loader2); Uncomment if you want control of one item instead of all removeChild(holder); } function mute():void { mySoundTransform.volume = 0; // mc1.soundTransform = mySoundTransform; Uncomment if you want control of one item instead of all // mc2.soundTransform = mySoundTransform; Uncomment if you want control of one item instead of all holder.soundTransform = mySoundTransform; } private function ioErrorHandler(event:IOErrorEvent):void { }

} }

\[/as\]

One thing that you will notice is that I muted two movies at once by adding two movies into one item and then controlling the volume of that single item. The reason why am I doing it this way is because I need control of one movie at the time as also control of all movies together.

Another thing you will notice is a Timer Event, that was just added to enhance my testing but doesn't have to be used in this way.

Main entry continued
