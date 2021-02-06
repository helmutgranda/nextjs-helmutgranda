---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Multiple MovieClips only One Script Advanced (Flash MX)"
date: "2003-07-28"
categories: 
  - "tutorials"
---

**Tutorial details:  
****Written by:** Helmut Granda , MX**  
Time:** 15 minutes**  
Difficulty Level:** Intermediate**  
Requirements:** Flash MX, [READ THIS TREAD](http://www.humanletter.com/blog/archives/000116.html)**  
Topics Covered:** How to avoid writing code inside every single MovieClip and load dynamic content.**  
Assumed knowledge:** Variables, Functions, MovieClips, Buttons

In our [previews](http://www.humanletter.com/blog/archives/000116.html) tutorial we learned how we can place our code in one place and assign actions to severan Movie Clips at once rather than one by one.

and here it is the code to do that:

`//initialize your prototypes MovieClip.prototype.RollOver = function() { this.gotoAndPlay(2); }; MovieClip.prototype.Release = function() { this.gotoAndStop(1); MainMovie.gotoAndPlay(2); }; MovieClip.prototype.RollOut = function() { this.gotoAndStop(1); ndStop(1); }; //assign the prototypes to the Masta! MovieClip.prototype.Allfunctions = function(){ this.onRollOver = RollOver; this.onRollOut = RollOut; this.onRelease = Release; } //Assign the Masta! code to each one of your Movie Clips for (var i = 1; i <51;i++){ this["MC"+i].Allfunctions() }

`

Now, how about loading dynamic content? In this case I am going to show you how to load txt files, then you can modify the code to load swf, jpgs or what ever other information you need in your movie.

The only piece of code we are going to modify is the folowing:

`MovieClip.prototype.Release = function() { this.gotoAndStop(1); MainMovie.gotoAndPlay(2); //this are the 2 lines that we will add to our code var finalpath = ("text/" + this._name + ".txt").toLowerCase(); loadVariables(finalpath,textHolder); };`

Let me tell you what is going on in the code above with the 2 new lines we added.

First of all we declare a new variable called finalpath. We assign the values "**text/**" that means that all our files will be stored in the folder named text. After that we attach the name of the **MovieClip** by using "**this.\_name**" the benefit of fetching the name automaticly is to save us coding time. And finally we add the extension "**.txt**" to our variable.

You might be wondering what is the "**.toLowerCase()**" doing there. Well that is just to ensure that the files we are looking for are in lower case. In case we named our **MovieClips** some thing like **MywEIrdNameMovieClip**, it will be changed to **myweirdnamemovieclip**. That will make it easier for us in naming our files and folders.

That is it!. Here it is a preview of how the code works like.

  

[Download the files self-extract](../tutorials/0001/hl0001.exe)
