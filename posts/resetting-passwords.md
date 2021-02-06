---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Resetting Passwords"
date: "2015-09-23"
categories: 
  - "programming"
---

I bought an application a few years ago and I have always been able to login without any issues, however with this particular application I didn't use a password manager to save the string needed in order to get back in. It is a paid application and the "forgot password" functionality didn't work.

I could have contacted the original creators of the application, however being that my version was behind it would probably have taken days to get me back on line so I went ahead and did what most developers would do. Open the application and figure out the encryption function, cryptographic hash function, login signature in order to create a new password that then could be added to the database, at this moment the only thing I had was the encrypted password and the salt value.

Here is the end of the function that would encrypt the password to compare to what is in the database:

\[php\] return  $salt . substr(sha1($salt . $password), 0, -$this->salt\_length); \[/php\]

With this information I was able to remove the salt valuable temporarily in order to access the application and update the password directly in the database. After accessing the application the password could be updated directly within the system.

Are you locked out of your application? Look at the database and find the login methods to figure out how you can update your database directly and maybe be able to get back in.

_As always since you are dealing with the system directly ensure you have a back up of your data in the event that you need to revert the application completely._

_photo credit: [Yuri](https://www.flickr.com/photos/yusamoilov/13334048894/in/photolist-mjhubJ-4uwyQL-82yEZ1-snToFS-fEtokK-CJhVy-fEKF3W-fEKF4m-8Tqysh-8Tnr1n-8TqwwL-fEt6aR-fEKF3J-fEt6bg-fEt6bi-fEt6aK-fEKF2J-cXXqXy-8Tnk1g-4usG5p-cvNwF3-iuSuaX-y5gJrA-io1t3T-sgqPsk-dxdmTX-dH4Kzp-4Ubsk3-aXWvtK-8Tqqum-2bQuE-cFhFbE-nzUL62-8TnkqM-7xBBNQ-aXWzY4-s8ADzx-7ULkET-fLiRtR-h9ji2Z-dpu5tk-jG3PyA-pqw5J4-nLZ4io-fw1RkU-2Ee1bP-mw1Q3Z-2bPmZ-fTgHH-7RcG9z) | [cc](http://creativecommons.org/licenses/by-nc-sa/2.0/)_
