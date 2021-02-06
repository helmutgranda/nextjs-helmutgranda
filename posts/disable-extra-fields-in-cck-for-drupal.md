---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Disable extra fields in CCK for Drupal"
date: "2009-05-09"
categories: 
  - "articles"
  - "drupal"
---

There are times when you want to allow the Super Admin to edit those extra fields but not the editors/contributors of your site so this is one way to do it:

\[PHP\]< ?php /\*\* \* Change the node form \*/ function phptemplate\_node\_form($form) { // echo "

"; dprint\_r ($form); echo ''; // Hide 'Log message' text area $form\['log'\]\['#access'\] = FALSE; // Hide the author collapsable box $form\['author'\]\['#access'\] = FALSE; // Hide the publishing options collapsable box $form\['options'\]\['#access'\] = FALSE; // Open the file attachments collapsible block in a full state $form\['attachments'\]\['#collapsed'\] = FALSE; return drupal\_render($form); } ?>\[/PHP\]
