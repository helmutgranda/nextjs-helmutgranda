---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "WordPress Vs Drupal Installation"
date: "2009-04-29"
categories: 
  - "articles"
---

Download and installation for both was a breeze. Granted Drupal gave me a little bit more of problem since I had to create new directories and set the right permissions to the newly created directory and a settings file.

On the other side I also had to create a file in WordPress directory. Here are the steps on more detail

### WordPress Installation

![Wordpress_271](images/3486130955_eff95f8c7c.jpg)

1. Download Wordpress
2. Upload to server with FTP program
3. Duplicate/Rename wp-config.php file (you can also let WP do this for you)
4. Update settings in the file such as Database/Login credentials
5. Add new Authentication Unique Keys\*
6. Enter Blog Title and your email
7. Receive your Username and Random password.

![WordPress Success Page](images/3486239495_9536eed8d8.jpg)

\*It was nice that WordPress has a site dedicated in creating those unique keys and no way around it, once you hit the site you get the set of key numbers you need and continue working.

### Drupal Installation

![Drupal_610](images/3486911936_264c955a68.jpg)

1. Download Drupal
2. Upload to server with FTP program
3. Create 2 files and set permissions to them (settings.php & /files)
4. Enter database information on online form
5. Submit Username and Password for admin and set some other basic settings such as site name

![Drupal Success Page](images/3487049390_10afaa56c9.jpg)

Here you have it, the installation in a few number of steps for more advanced users. Granted, for some one that has never installed any package maybe you will have to browse around and find answers to basic questions but in the end you should be able to acomplish the same task in this few steps.

Continue to [WordPress VS Drupal Creating Content](http://www.helmutgranda.com/2009/04/29/wordpress-vs-drupal-creating-content/)
