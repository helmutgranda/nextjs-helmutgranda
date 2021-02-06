---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Flash Volume Controler ActionScript 2"
date: "2007-07-25"
categories: 
  - "actionscript"
  - "programming"
---

\[kml\_flashembed movie="/labs/swf/volumeExperiment.swf" height="150" width="450" /\]

I had a good friend ask me if I knew of a resource for a volume controler, and I didn't know of any tutorial or code of the top of my head so I went ahead and wrote it for AS2 so I hope this can help some others out there.

\[as\]import mx.utils.Delegate;

//Set Variables var mySnd :Sound; var levelSpeed :Number; var musicOn :Boolean;

//SetUp Items

mySnd = new Sound(); mySnd.attachSound("soundLoop"); levelSpeed = 5; volLevel\_txt.text = 100; volSpeed\_txt.text = levelSpeed; musicOn = false;

//Buttons volumeOn\_mc.onRelease = Delegate.create ( this, volOn); volumeOff\_mc.onRelease = Delegate.create ( this, volOff); control\_mc.onRelease = Delegate.create ( this, controls);

//Functioins \*\* DANGER :) function volOn() : Void {

var volLev = getVolume();

onEnterFrame = function() {

var volLev = getVolume(); var levelSpeed = getSpeed();

if (volLev < 100 ) {

setVolume( volLev + levelSpeed); }else{

setVolume(100); delete onEnterFrame; trace("sound on"); } }

};

function volOff() : Void {

onEnterFrame = function() {

var volLev = getVolume(); var levelSpeed = getSpeed();

if (volLev > 0 ) {

setVolume( volLev - levelSpeed); }else{

setVolume(0); delete onEnterFrame; trace("sound off"); } } };

function getSpeed():Number { return (volSpeed\_txt.text > 100 ? (100,setSpeed(100)) : Number(volSpeed\_txt.text) ); }

function setSpeed(val) { volSpeed\_txt.text = val

} function getVolume():Number {

return mySnd.getVolume(); }

function setVolume(val) :Void {

mySnd.setVolume(val); volLevel\_txt.text = val; }

function controls() {

if (musicOn == false) { control\_mc.gotoAndStop("on"); mySnd.start(0,999); musicOn = true; }else { control\_mc.gotoAndStop("off"); mySnd.stop(); musicOn = false; } } \[/as\]
