---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Covert mov files to flv with ffmpeg"
date: "2009-02-05"
categories: 
  - "shell"
---

The shell script below will take files from the folder you are running it from and convert all "mov" files to "flv". The script can be updated to use the same file name as flv name. Since this is not for production but only for testing the name for the flv that I am using is flvMovie0.flv, flvMovie1.flv.. and so on.

#!/bin/bash # Convert all mov files into flv counter=0 mov=flvMovie currmov=$mov$counter ext=.flv for file in \*.mov; do let counter=counter+1 currmov=$mov$counter$ext ffmpeg -i $file -ar 22050 -f flv -ab 56 -aspect 4:3 -b 200 -r 12 -s 320x240 -ac 1 $currmov done
