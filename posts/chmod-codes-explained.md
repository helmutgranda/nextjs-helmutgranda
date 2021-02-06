---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Chmod codes explained"
date: "2010-12-09"
categories: 
  - "as-burst"
---

Codes below for quick reference:

All seven permissions are listed below, with their numeric values on the left. 1. --x 2. -w- 3. -wx 4. r-- 5. r-x 6. rw- 7. rwx

Common combinations in use on web servers are as follows:

644 = rw-r--r-- Usual permissions for reading an HTML web page or Read-only text files. 664 = rw-rw-r-- Used in most plain text hit-counter logs (writable = on) 666 = rw-rw-rw- Used in scripts that require World writable permission. 711 = rwx--x--x Used by Perl scripts to make them executable only upon access. 751 = rwxr-x--x Used by Perl scripts that must be written to and executed (hit counters). 755 = rwxr-xr-x Used by some Perl-scripts and binary database files. 775 = rwxrwxr-x Normal permission for your website's Root directory 777 = rwxrwxrwx The whole ball of wax. You better have tight security on any file marked with these permissions. 777 is usually only assigned to a CGI Directory, rather than to an individual file.

[source](http://www.wizcrafts.net/chmod.html)
