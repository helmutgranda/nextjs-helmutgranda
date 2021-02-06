---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "GoDaddy and MySQL access"
date: "2006-10-11"
categories: 
  - "tutorials"
---

If you are a developer and you do some sort of backend work there is a chance one of your clients might ask you to install an application in GoDaddy servers.

So if you are trying to connect to a dabase within your application what GoDaddy recommends is to use mysql.secureserver.net as your hostname. Maybe this could have worked while back but [that information](http://help.godaddy.com/article.php?article_id=249&topic_id=&& "GoDaddy Help Menu") is not true for all servers.

If you are having problems all you have to do is login to your GoDaddy control panel and look what server has GoDaddy assigned for you, at least that is how it worked out for me.
