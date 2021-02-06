---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Setting up Drupal in Rackspace Centos 5.5 in 3 minutes or less"
date: "2011-05-27"
categories: 
  - "as-burst"
---

The boring part:

Log in to Rackspace and spin a new server with Centos 5.5 and most basic settings.

We will be doing this with root so this setup will be for testing only and no production.

The fun part:

$ yum install httpd php php-mysql mysql-server unzip nano php-xml php-gd

(NOTE: php-xml and php-gd are required by Drupal dom/gd respectively) $ service httpd start $ service mysqld start $ msyql > create database drupal > quit() $ cd /var/www/html $ wget http://ftp.drupal.org/files/projects/drupal-7.2.zip $ unzip drupal-7.2.zip $ mv drupal-7.2/\* . $ rm -rf drupal-7.2 $ mkdir files $ chmod 777 files $ cp default.settings.php settings.php

open the IP address on your browser and follow the installation instructions
