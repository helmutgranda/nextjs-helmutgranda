---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "WordPress Custom Type loop"
date: "2010-04-08"
categories: 
  - "wordpress"
---

With the upcoming version of WordPress 3 (available in beta as of today) here is a tip of how to pull the custom types in the loop once you have created them.

\[php\]

### Recent News

< ?php $recentPosts = new WP\_Query(); $recentPosts->query($query\_string . '&post\_type=news'); ?> < ?php while ($recentPosts->have\_posts()) : $recentPosts->the\_post(); ?>- [< ?php the\_title(); ?>](<?php the_permalink() ?>)
< ?php endwhile; ?>

\[/php\]

In the example above I have created a "News" custom type and now I am adding them to the page with a custom loop.
