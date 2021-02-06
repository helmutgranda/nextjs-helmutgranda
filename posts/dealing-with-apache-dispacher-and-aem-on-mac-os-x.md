---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Dealing with Apache, Dispacher, and AEM on Mac OS X"
date: "2015-01-15"
categories: 
  - "as-burst"
---

I am working with our team to have AEM (Adobe Enterprise Manager) and their Dispatcher (AEM caching and/or load balancing tool) running along with Apache running on our local installations. AEM is rather easy to "install" but here are some of the commands that help me during the installation.

#display Apache version installed on your system along with other useful details $ apachectl -V

Server version: Apache/2.4.9 (Unix)
Server built:   Sep  9 2014 14:48:20
Server's Module Magic Number: 20120211:31
Server loaded:  APR 1.4.8, APR-UTIL 1.5.2
Compiled using: APR 1.4.8, APR-UTIL 1.5.2
Architecture:   64-bit
Server MPM:     prefork
  threaded:     no
    forked:     yes (variable process count)

#test your configuration settings $ sudo /usr/sbin/apachectl configtest

You will get information about the modules installed and also if there any syntax errors in your httpd.conf

AH00526: Syntax error on line 606 of /private/etc/apache2/httpd.conf:

If your httppd.conf file is error free you will only get an OK.

Syntax OK
