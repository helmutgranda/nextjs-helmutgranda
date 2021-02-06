---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Running Django in a Rackspace cloud"
date: "2010-12-07"
categories: 
  - "as-burst"
---

### Problem

Run Django in a Rackspace server and be able to restart the services if necesary.

### Solution

It is rather easy to have a copy of Django running on the cloud if you follow the steps to the letter in the tutorial [here](http://code.djangoproject.com/wiki/DjangoAndNginx). One of the problems that I personally encountered was to kill the Python service and then bring it back to continue development.

You need to find the ID that the service is using in order to "kill" it. One effective way that I found to display all the services that are running is by running the following command:

$ ps ux

Once you get a list of all the services running you can find the ID of those running under Python. In my case mine was ID 4193. So all I have to do is the following:

$ kill -9 4193

Do any changes I need that need to be made which were necessary to stop the service and run it again

$ python /projects/sample\_project/manage.py runfcgi host=127.0.0.1 port=8080 --settings=settings

### Extras

As an extra feature I added couple of aliases to help me to run commands faster:

alias start='/etc/init.d/nginx start' alias stop='/etc/init.d/nginx stop' alias restart='/etc/init.d/nginx restart' alias py='python /projects/sample\_project/manage.py runfcgi host=127.0.0.1 port=8080 --settings=settings'
