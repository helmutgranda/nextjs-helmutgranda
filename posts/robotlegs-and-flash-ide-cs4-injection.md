---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "RobotLegs and Flash IDE CS4 Injection"
date: "2009-12-02"
categories: 
  - "robotlegs"
---

**_“UPDATE: It has been discovered that Flash CS3/4 can be instructed to keep metadata after all: Simply select “Export SWC” in your publish settings. Doing so will keep all metadata in tact in your SWF!” - Thanks to shaun for this clarification._**

So you heard of the [RobotLegs](http://www.robotlegs.org) framework and downloade their demos so you could compile them on your own computer but the only thing that you have available is CS4, not a problem you can still use the framework and I'm going to update the ["Hello Flash" demo](http://github.com/robotlegs/robotlegs-demos-Bundle/tree/master/HelloFlash/) to show you how. After this article you should be able to update any other demo or create your own with CS4.

[![](images/rl-header-logo-310-253.png)](http://www.robotlegs.org target=)

Accordingly to the [Knowledge Base](http://knowledge.robotlegs.org/faqs/framework-core/is-robotlegs-compatible-with-the-flash-ide-cs3cs4) we get a good kick start by letting us know that we need the following:

\[as\]//Initializing the injector with XML is done by adding this line to your context's constructor, before the super() call:

injector = new SwiftSuspendersInjector(xmlConfiguration);

//Where xmlConfiguration is your XML object.\[/as\]

So in our HelloFlashContext file we are going to add our "xmlConfiguration" property that will be passed to the SwiftSuspendersInjector.

So I am going to borrow the XML\_CONFIG from the [SwiftSuspendersInjector](http://github.com/robotlegs/robotlegs-framework/blob/master/src/org/robotlegs/adapters/SwiftSuspendersInjector.as) and use it as a guide for my HelloFlashContext class.

\[as\]protected static const XML\_CONFIG:XML = ;

public function HelloFlashContext(contextView:DisplayObjectContainer) { injector = new SwiftSuspendersInjector(XML\_CONFIG); super(contextView); }\[/as\]

Now that we know how our XML has to be formed we can start adding our custom properties that will substitute the \[Inject\] annotations.

There are only two locations where the inject annotation is being used.

\[as\]org.robotlegs.demos.hellowflash.view.BallMediator org.robotlegs.demos.hellowflash.view.ReadoutMediator\[/as\]

and there are only 2 properties used in both instances

\[as\]view statsModel\[/as\]

So with that information we very easily update our XML\_CONFIG constant as follows:

\[as\] \[/as\]

And here you have the complete HellowFlashContext class updated:

\[as\]package org.robotlegs.demos.helloflash { import flash.display.DisplayObjectContainer; import org.robotlegs.base.ContextEvent; import org.robotlegs.demos.helloflash.controller.CreateBallCommand; import org.robotlegs.demos.helloflash.controller.HelloFlashEvent; import org.robotlegs.demos.helloflash.model.StatsModel; import org.robotlegs.demos.helloflash.view.Ball; import org.robotlegs.demos.helloflash.view.BallMediator; import org.robotlegs.demos.helloflash.view.Readout; import org.robotlegs.demos.helloflash.view.ReadoutMediator; import org.robotlegs.mvcs.Context;

import org.robotlegs.adapters.SwiftSuspendersInjector;

public class HelloFlashContext extends Context { protected static const XML\_CONFIG:XML = ; public function HelloFlashContext(contextView:DisplayObjectContainer) { injector = new SwiftSuspendersInjector(XML\_CONFIG); super(contextView); } override public function startup():void { // Map some Commands to Events commandMap.mapEvent(ContextEvent.STARTUP\_COMPLETE, CreateBallCommand, ContextEvent, true); commandMap.mapEvent(HelloFlashEvent.BALL\_CLICKED, CreateBallCommand, HelloFlashEvent ); // Create a rule for Dependency Injection injector.mapSingleton(StatsModel); // Here we bind Mediator Classes to View Classes: // Mediators will be created automatically when // view instances arrive on stage (anywhere inside the context view) mediatorMap.mapView(Ball, BallMediator); mediatorMap.mapView(Readout, ReadoutMediator); // Manually add something to stage contextView.addChild(new Readout()); // And we're done super.startup(); } } }\[/as\]

This way you should be able to update any demo and compile with the Flash IDE.

_Updated: Thanks to [Jos Yule](http://twitter.com/josyule) for pointing out that the XML will be concatenated on the existing XML so no need to recreate it all_
