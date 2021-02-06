---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "IF statement in programming"
date: "2009-08-27"
categories: 
  - "as-burst"
---

I don't know about the programming language you are dealing with but I would say that most of them will handle the IF statement in the same way and it has always bothered me. Specially when there seems to be no way to avoid using it for a specific circumstance.

For example lets say you want to run a set of actions depending on the value of a variable:

\[as\]if (variable == true) { //then to all this }\[/as\]

I am trying to figure out a way to avoid this set up specially when you are re-using a set of functions but you always have to test for the value of a variable.

Another example would be a game, if for example you have 1000 units and all of them will have a state of "sit" or "standing" given their "position" property. Now you have a 1000 units that will be testing "if they are sitting or standing". I know this issue can be solved with the set up of the application rather than the IF statement but it is to give a clearer example of the issue.

Lastly I think it bothers me the most with Singletons. Most of the singletons you have to test for a property to define if you are going to create a new instance of the Singleton or if you just going to use the current instance.

How much overhead is this for the processor? Minimum? Nothing? I am assuming its almost nothing and that is why Singletons are so popular, althought we know some people believe that Singletons are \_root in ActionScript which make more damage than helping. But that is besides the point.

If you have some ideas on how to improve the use of the IF statement let me know.
