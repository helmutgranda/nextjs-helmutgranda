---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Combo Box Fails to Load in Parent Movie"
date: "2006-02-28"
categories: 
  - "flashmx"
---

So I am here struggling for hours (at least it looked like it was hours!) trying to figure out why my combo box wasnt working.

The Basic scenario is that I created a CB in a child movie for later being loaded to a parent movie.

\->Parent -->Child < -with Combo Box

Well, when you load the Child movie into the Parent movie you expect it to work whitout a problem right?... WRONG! some kind of bug or problem or whatever for some reason the Combo Box wont work, why? who knows.

Doing a light search I found out that in order for the Combo box to work on the Parent Movie you need to have a copy of the Combo Box component in the Parent movie even though you are not going to use it directly within the parent.

That's a lie! you might think (or at least that is what I thought) but in reallity it works.. now this is my set up:

\-> Parent < -copy of Combo Box Component not being used --> Child < with Combo Box used

Weird.. but it works, just in case someone is looking for the answer :)
