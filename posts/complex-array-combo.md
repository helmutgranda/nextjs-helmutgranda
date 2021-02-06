---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Complex Array combo"
date: "2007-01-23"
categories: 
  - "news"
---

I haven't tested this kind of array usage against the processor so I am not sure how intensive it is but it definitely helps in case you want to keep your arrays very descriptive and you don't want to do a search on the array every-time you need a certain node.

So the regular way of using arrays is:

var myArray:Array = new Array(); myArray.push ("this", "this one", "this two"); myArray.push ("that", "that one", "that two");

so lets say you do a simple trace

trace( myArray);

you get a nice long list with all the items you have pushed into the array ("this,this one,this two,that,that one,that two"). So you want to organize the arrays in a way that you want to access "this one", well you can certainly do

trace(myArray\[1\]);

now lets try to get "that one"...

trace (myArray\[4\]);

That is because we know that the position of "that one" is the 4th position in the array. But all of the sudden you are running down your scripts trying to figure out the best way to access the information in your array without having to memorize the position of each of them. So then what do you do? You can create an array for each one of the items you need. like this:

var thisA:Array = new Array(); thisA = \["this one", "this two"\];

var thatA:Array = new Array(); thatB = \["that one", "that two"\];

Now lets say we need "this one" we can access that value by doing the following:

trace(thisA\[0\])

That is an easier way to know what we want and now we can refer to each array by their name. But lets pause for a second and think that maybe... MAYBE 3000 lines down your code you find yourself stranded trying to figure out if thisA\[0\] was "that one" or if it was thisA\[1\]... so what if we could name each one of those arrays with a specific name that we could remember later....

Hummmm... now we are talking.

lets do the following

var thisA:Array = new Array(); thisA = \[{positionone: "this one", positiontwo: "this two"}\];

eh?... lets taste it...

trace(thisA\[0\]\["positionone"\]);

and it works! So do I mean that if I want to access position two all i have to do is remember the name of the array "thisA" and the name of the value I am trying to access? of course... lets try the secnd one

trace(thisA\[0\]\["positiontwo"\]);

Sweet! there you have it, go wild! go crazy in the mean time I will find out how much processor we are eating with this approach.

Main entry continued
