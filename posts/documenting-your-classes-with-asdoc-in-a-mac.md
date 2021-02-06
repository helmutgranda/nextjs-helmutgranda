---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Documenting your classes with ASDoc in a MAC"
date: "2008-02-14"
categories: 
  - "actionscript"
  - "programming"
---

After following different tutorials of how to run ASDoc on your computer and failing I finally was able to figure out a way to have it running with almost no issues at all, so I thought I would share my steps here for those of you still struggling with he situation.

1\. First and most important install [ANT](http://ant.apache.org/) on your computer. (a) Download ANT and you can follow the command line instructions if you have Admin rights on your computer but if you don't have admin rights then you can follow these steps. (i) After you download ANT and you have UNZIP the files open /user/local/ with a text editor that allows you to browse hidden or locked files (I used TextMate by creating a new project). (ii) After you open the folder with your text editor, if you have the choice do a file.open source (in my case with TextMate I just right click the folder and did a "Reveal in Finder"). (iii) Dump your Unzipped files in the /user/local/ folder and now you should have something like /user/local/apache-ant. (iv) Set a Permanent aliases for ant (another tutorial for those who do not know how to do this) 2. Download the [Free Flex SDK ( At the time of this writing I used Flex3SDK Beta)](http://labs.adobe.com/technologies/flex/sdk/flex3sdk.html). 3. Place the FLEX SDK anywhere in your machine (in my case I used Applications/FLEX). 4. This step is option since you can set a permanent alias for FLEX or in my case since for some reason my aliases didn't work properly for FLEX so I just declared where the asdoc was located in my build.xml

Thats it, now to test this just run a build.xml and if everything is installed properly you should be able to have beautiful documents created by ASDoc.

Here is a Build.xml sample:

\[php\] < ?xml version="1.0" encoding="utf-8"?>\[/php\]

Main entry continued
