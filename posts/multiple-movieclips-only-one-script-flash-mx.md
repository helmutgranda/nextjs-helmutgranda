---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Multiple MovieClips only One Script (Flash MX)"
date: "2003-07-27"
categories: 
  - "tutorials"
---

**Tutorial details:  
****Written by:** Helmut Granda , Flash MX**  
Time:** 15 minutes**  
Difficulty Level:** Intermediate**  
Requirements:** Flash MX**  
Topics Covered:** How to avoid writing code inside every single MovieClip.**  
Assumed knowledge:** Variables, Functions, MovieClips, Buttons

S J Mangold Asked at [flashnewbie mailing list](http://chattyfig.figleaf.com/) the following question:

> I could use some help with the next step in my programming education. I have a set of buttons that typically are enabled/disabled at the same time. Currently, I write code for each button. There's got to be a way that I can handle this more simply but don't have a clue as to what it would be. Any help would be greatly appreciated.
> 
> Thanks! Sue

There are many ways of solving this problem, you can do it with a function, using the call command or creating a prototype. We will cover the **prototype** solution.

Lets pretend we have 50 Buttons on our stage, each button contains the following script:

`on (rollOver){ gotoAndPlay(2); }

on (rollOut){ gotoAndStop(1); }

on (release){ gotoAndStop(1); MainMovie.gotoAndPlay(2); }`

Using the method above will take us a long time to finish our project, and if we are required any changes it will be difficult, specially if we are required to change the name MainMovie from our target. We would have to go to each button and change the script.

Here it is where we introduce the word **prototype**, in this case we will only use it with our **MovieClips**. The perfect match, or so I believe!

Now, I am not here to give you a detail information in **prototype**, class, inheritance and such. I am here to give you an answer and help you find new ways of coding.

The code is as follows:

`MovieClip.prototype.RollOver = function() { this.gotoAndPlay(2); }; MovieClip.prototype.Release = function() { this.gotoAndStop(1); MainMovie.gotoAndStop(2); }; MovieClip.prototype.RollOut = function() { this.gotoAndStop(1); ndStop(1); };`

If you take a close look to the 2 pieces of code from above you will find there is no much difference between both of them. Now you may ask How do I attach the second piece of code to each one of my **Movie Clips**?

First of all lets finish our code part and then i show you how to attach the code to your **Movie Clips**.

`MovieClip.prototype.Allfunctions = function(){ this.onRollOver = RollOver; this.onRollOut = RollOut; this.onRelease = Release; }`

That is all you need! Looking at the code above we can see how this.onRollOver is equal to Rollover which is the first prototype we defined. Then this.onRollOut = RollOut and so on. That was easy uh?

Now it gets better. This is how we attach our script to each one of our **MovieClips**.

`MovieClip1.Allfunctions(); MovieClip2.Allfunctions(); MovieClip3.Allfunctions(); //....and so on to 50`

Now you might say, I don't want to write MovieClip1.Allfunctions(), all the way to 50, well we can write another small piece of code that will do that for us.

`for (var i = 1; i <51;i++){ this["MovieClip"+i].Allfunctions() }`

Now lets put all our code together:

`//initialize your prototypes MovieClip.prototype.RollOver = function() { this.gotoAndPlay(2); }; MovieClip.prototype.Release = function() { this.gotoAndStop(1); MainMovie.gotoAndStop(2); }; MovieClip.prototype.RollOut = function() { this.gotoAndStop(1); };

//assign the prototypes to the Masta! MovieClip.prototype.Allfunctions = function(){ this.onRollOver = RollOver; this.onRollOut = RollOut; this.onRelease = Release; };

//Assign the Masta! code to each one of your Movie Clips for (var i = 1; i <51;i++){ this["MC"+i].Allfunctions() };

`

Wow!, that was easy, in just a few lines of code we created all of our actions, Now we can spend more time making our buttons beautiful rather than programming each one of them.

To finish let me tell you, now that we have placed all of our code in one place if later on we decided to change the name of our MainMovie all we have to do is change it in one place and we are done.

That is it!

I hope you enjoyed it, The next tutorial will cover how to load dynamic content with this same approach.

...helmut
