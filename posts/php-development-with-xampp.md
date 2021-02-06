---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "PHP Development with XAMPP"
date: "2012-02-29"
categories: 
  - "as-burst"
  - "programming"
---

[Larry Ullman wrote a great post about his experience with MAMP](http://www.larryullman.com/2012/02/24/mamp-without-mamp/ "Larry Ullman"). Many years before I heard about MAMP I had been using XAMPP (http://www.apachefriends.org/en/xampp.html), it was in fact that a friend told me about the great piece of software he was using called MAMP which was only $39 (at the time, today you have to pay $59 for a new version and $29 for an upgrade). MAMP is able to let my friend have a LAMP stack up and running in no time in his MAC. I asked my friend why would he be paying $39 for MAMP while XAMPP was free! and he had two reasons. One, he could update the vhosts quickly, second he had been using the software for quite a while so he didn't have to learn a new piece of software. I believe there is a free version but you are not able to edit the vhosts which for what I undrestand is one of the main sell point for many.

My setup for PHP development on MAC and PC is the free XAMPP package. Since I use the MAC 99% of the time I have created an alias in my .bash\_script which opens two files in TextMate that allow me to create a vhost rather quickly. Lastly I open the XAMPP control panel, restart Apache, and I am set to go.

here is my .bash\_script alias: alias vhosts="mate /Applications/XAMPP/xamppfiles/etc/extra/httpd-vhosts.conf mate /etc/hosts"

There are other benefits with XAMPP (it may be very similar with MAMP but I have never used it) after you start mySQL from XAMPP control panel you can do all your database administration by visiting http://localhost/phpmyadmin. I have also set up a "dump" alias http://dump.localhost where I can drop any quick php tests without having to create a new virtual host.

http://dump.localhost/test\_a http://dump.localhost/test\_b http://dump.localhost/test\_c
