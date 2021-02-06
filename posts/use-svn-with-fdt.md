---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Use SVN with FDT"
date: "2010-01-27"
categories: 
  - "as-burst"
---

Quick way to set up a SVN Repositroy in FDT.

> ### Instructions
> 
> 1. Open the _SVN Repository Exploring_ Perspective
> 2. Add an new SVN Repository
> 3. Return to the FDT Perspective
> 4. Select the Project within the Flash Explorer that you wish to link to the new Repository
> 5. Scroll down to Team and Select _Share Project_
> 6. Choose _SVN_ from the Share Project dialog box
> 7. Choose the Repository from the supplied list
> 8. Enter the project name you want, and Finish
> 9. Tidy up those files with ? marks that you do not want committed, by adding to svn:ignore
> 10. Commit the project
> 11. You should see each folder with a little ‘database’ symbol, without any white stars which means that that everything is perfectly synchronized
> 
> - The top of my project has a white star, usually a commit and update sorts this out, but not always! (A topic for a new Blog!)

source:  [http://factornine.wordpress.com](http://factornine.wordpress.com/2009/06/11/setting-up-svn-for-an-existing-fdt-project/)
