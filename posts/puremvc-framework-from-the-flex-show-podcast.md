---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "PureMVC Framework from The Flex Show podcast"
date: "2009-09-30"
categories: 
  - "actionscript"
  - "programming"
  - "puremvc"
---

_These are notes that I took while listening to the podcast, by no means the information should be taken as final.  
Feel free to listen to the podcast and let me know if you notice any discrepancies from what it was said on the podcast and what was written here._

## Notes from PureMVC Framework - The Flex Show

### Intro

Cliff Hall - Architect of the PureMVC project Cliff stared doing Assembly language for Commodore 64 in 1982 ( one analogy Cliff used was that programming in Assembly is like building a skyscraper out of molecules you are constantly evaluating the number of bytes that the arguments and instructions are taking, you are constantly just looking at things on a microscopic level, and it is awesome because you really make it do what you want it to do, but it is difficult to make really large applications. Higher level languages that are more English like allows to express our thoughts in a much more natural way to us)

Newer OOP languages allows you to use Design Patterns to assemble "teams" to fix issues just as you would assemble teams to fix business issues.

### Problem that needs to be solved

Flex is a big framework and in some ways it is a toolkit. Tools that you can take and assemble, but the important thing is how you assemble those items together properly. All different applications people build break down to basic small problems Once you use PureMVC all you have to worry about is problem domain and concentrate only on this Assuming I am new to Flex and PureMVC how would you explain it to me?

### Understanding the scope of what the framework is trying to do for you

PureMVC separates the issues in 3 piles MODEL : Data VIEW : Representation of Data CONTROLLER : Bridges the two ( model + view ) and it is where the hefty logic in the application happens (update view and model)

Using MVC allows you to use views components and transfer them to a different system since it is not tied specifically to one application. Similar happens with Model, you can take it and use it in a different environment.

By making this separation you can move your Views to a different area and in a similar way you can move your Models since they do know about the existence of each other.

The Logic is not spread across the whole application but contained in their own area. You can also scale easier.

### The business logic often goes into the controller?

Into the controller region, usually it is embodied in commands that are executed by the controller.

PureMVC has been ported to different languages. The issue is not if MVC is the wrong solution is the implementation that needs to be studied.

Proxies are objects that represent the Data.

### Expanding on the Mediator Pattern

Move the data from the Model, for instance the Command A command start up the application and instantiate the Proxies that will represent the Model and model will insatiate that will wrap around the view components

The application will build itself first and then tells PureMVC to start up. then builds proxies and mediators, Proxies might go and request data right away or when it is required

Say the proxies ask data that is needed to populate the application. Once the information is back into the Proxy, the proxy will send a notification.

In the view component you will use an event (like clicking on a button) and sends an event "add user".

The Mediator will be listening for that event and the will send a notification that might be picked up by a command that will tell a proxy "Go get me a user".

The Mediator when they are registered with the View Component they list all the notifications they are interested in. When the notification comes back from Proxy then it acts upon it, and that is how data gets from the Model to the view without binding.

The components expose an API and knows nothing about the API apparatus at all. events it will emit and properties that can be set. And the Mediator knows properties it can edit and events it can listen to.

### Compare PureMVC to Cairngorm

The viewHelper and how they are implemented. You access through the components, you bind items directly and tie up to the system. Have worked with it and it is good but a lot of people didn't get it, saw some some prototypes ready to be turn into an app scrapped and started from scratch because the people didn't know much about design patterns, Flex or Cairngorm. So it seemed like Cairngorm set a high bar just to get started.

### Other ports

There was a talk about some ports during the recording of this podcast but by now there has been almost 10 ports.
