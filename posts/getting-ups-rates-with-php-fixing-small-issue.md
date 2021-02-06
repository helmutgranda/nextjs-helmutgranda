---
layout: post
image: img/writing.jpg
author: [Helmut]
excerpt: Work In Progress Migration
title: "Getting UPS Rates with PHP fixing small issue"
date: "2009-11-22"
categories: 
  - "as-burst"
tags: 
  - "php-solutions"
---

There is an great class in [Google Code](http://code.google.com/p/ups-php/) written in PHP that works as a wrapper to the UPS API, I started using it about a year ago and never had issues with it since I was using it with Flash/AMFPHP/PHP, but now that I am working with a new shopping cart where I need this functionality but the front end is PHP only, I noticed that I was starting to get the following error:

\[php\]Parse error: syntax error, unexpected $end in path.../UPSRate.php(131) : eval()'d code on line 1\[php\]

After investigating the issue further I was able to fix the issue by only using eval on those elements where 'value' wasn't undefined.

\[php\]if (isset($xml\_elem\['value'\])) { $php\_stmt .= '\[$xml\_elem\[\\'tag\\'\]\] = $xml\_elem\[\\'value\\'\];'; eval($php\_stmt); }\[/php\]

Notice that these parse errors do not break the application and that is why they weren't raising a flag in Flash but working on PHP alone we have to squash all these kind of warnings.
