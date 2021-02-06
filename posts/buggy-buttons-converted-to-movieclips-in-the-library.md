---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Buggy Buttons converted to MovieClips in the Library"
date: "2006-11-10"
categories: 
  - "tutorials"
---

So I was running in to the following problem:  
  
\*\*Warning\*\* The linkage identifier 'RewindBtn' was already assigned to the symbol 'FLVPlayer\_assets/Buttons/Rewind', and cannot be assigned to the symbol 'FLVPlayer\_assets/Buttons/Rewind', since linkage identifiers must be unique.  
  
But in reallity I only had 1 button called Rewind with the Link ID of RewindBtn and nothing else. I even created a blank FLA and pasted the simbol by itself in the blank FLA but I still were getting the same warning.  
  
Well after doing a search online and trinkering with flash I figured out that originally I had created the Symbol as button and then transformed the Button to a MovieClip within the Library but never changed the  Button to a MovieClip within the Properties panel in Flash.  
  
Go figure! the warning has gone away.
