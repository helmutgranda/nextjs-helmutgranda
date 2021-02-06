---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "The TRUTH about PHP/mySQL security Part II"
date: "2006-03-02"
categories: 
  - "php"
---

[..continued from The TRUTH about PHP/mySQL security Part I](http://www.helmutgranda.com/2006/02/23/the-truth-about-phpmysql-security-part-i/)

So here we are on "The TRUTH about PHP/mySQL security Part deux", So after reading lots of websites/blogs and reviewing nearly 100 OS PHP/mySQL scripts I have found that everyone has a similar structure

Main Page
  |- imgs
     |-someimage.jpg
     |-someimage.jpg
  |- inc
     |- dbconnection.php
     |- extra\_file.php
     |- extra\_file.php
     |- extra\_file.php

What we want to look for is the dbconnection.php file. So lets take a look at a simple dbconnection.php file

\[php\]< ? include "../config.php"; function db\_connect() { $result = @mysql\_pconnect($server, $db\_user, $db\_pass) or die ("Database CONNECT Error (db\_fns line 7)"); if (!$result) return false; if (!@mysql\_select\_db($database)) return false;

return $result; }

?> \[/php\]

But now we see there is an include config.php, lets take a look into that file

\[php\]< ? $domain = "www.yourdomain.com"; // Your domain name (include www. if used BUT NOT http://) $server = "localhost"; // Your MySQL server address (usually 'localhost') $db\_user = "username"; // Your MySQL database username $db\_pass = "password"; // Your MySQL database password $database = "database"; // Your MySQL database name $currency = "UK Pounds"; // The currency that your affiliates will be paid in $emailinfo = "test@email.com"; // Your email address $yoursitename = "Your Site Name"; // Your sites name ?> \[/php\]

Is all this information sensitive? Of course it is! imagine some one getting a hold of your $db\_user or $db\_pass variable, they could easily create scripts that will log into your DB and either edit the information or destroy it. But I'm not going to go into detail about that, what I am after is to learn how secure it is to leave your php scripts out in the open and from what I have learned so far it is pretty safe do that, but I want to continue to search for what other kind of security is offered by PHP.

...to be continued
