---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "ZendFramework FollowSymLinks or SymLinksIfOwnerMatch error in XAMPP"
date: "2010-07-13"
categories: 
  - "as-burst"
---

**Problem:** You may be getting a 403 error and if you look at the logs you should find something similar to the following:

\[error\] \[client 127.0.0.1\] Options FollowSymLinks or SymLinksIfOwnerMatch is off which implies that RewriteRule directive is forbidden: /Applications/xampp/xamppfiles/htdocs/project/public/index.php

Solution:

In your .htaccess file add the following line to the begining of the file:

\[php\]Options +FollowSymLinks\[/php\] ZendFramework .htaccess ships with the following as default:

\[php\]RewriteEngine On RewriteCond %{REQUEST\_FILENAME} -s \[OR\] RewriteCond %{REQUEST\_FILENAME} -l \[OR\] RewriteCond %{REQUEST\_FILENAME} -d RewriteRule ^.\*$ - \[NC,L\] RewriteRule ^.\*$ index.php \[NC,L\]\[/php\]

Adding the two lines above fixes the problem. So the file should look like this: \[php\]Options +FollowSymLinks RewriteEngine On RewriteCond %{REQUEST\_FILENAME} -s \[OR\] RewriteCond %{REQUEST\_FILENAME} -l \[OR\] RewriteCond %{REQUEST\_FILENAME} -d RewriteRule ^.\*$ - \[NC,L\] RewriteRule ^.\*$ index.php \[NC,L\]\[/php\]
