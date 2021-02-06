---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "How to use Read More in Custom Type pages"
date: "2010-10-10"
categories: 
  - "articles"
---

The same rule applies for Custom Types as regular pages:

\[php\]< ?php global $more; $more = 0; ?> //The code must be inserted ahead of the call to the content

< ?php the\_content('Continue Reading'); ?>\[/php\]

From the WordPress docs:

> Please remember that the "Read More" tag is used only on the Home page which shows the latest posts. It does not work in "Pages". If you want to turn it on in Pages too for showing a set of partial posts, use the following code inside the loop for the dynamic content:

More info in the [documentation](http://codex.wordpress.org/Customizing_the_Read_More#How_to_use_Read_More_in_Pages)
