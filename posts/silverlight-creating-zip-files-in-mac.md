---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Silverlight creating ZIP files in MAC"
date: "2008-05-20"
categories: 
  - "programming"
  - "silverlight"
---

If you are creating a Silverlight document in a MAC be aware that if you create a ZIP file from the Finder context menu "Create Archive of..." every time you try to access the files inside the ZIP file with Silverlight it will fail. Why? Not sure but I would assume something to do with the way MACs compress files compared of how PCs do. One way to get around this issue is by creating your ZIP files with "DropZip", you might be able to create ZIP files with a different program that will run fine with Silverlight.
