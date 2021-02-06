---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "JQuery and dynamic elements"
date: "2009-04-17"
categories: 
  - "jquery"
---

I have been working with JQuery on a couple of work and personal projects and I really like the library. One of my first challenges was to access elements dynamically and at the same time trigger custom events. This is specially necessary when working with elements where you don't know the source of the data in detail.

Here is a sample as a reference:

\[js\]$(document).ready(function() { var idTotal = 5; for ( var i = 1 ; i < idTotal ; i++) { var deleteMinutes = $("#deleteMinutes\_"+i); attachEvents ( deleteMinutes ) ; var updateMinutes = $("#updateMinutes\_"+i); attachEvents ( updateMinutes ) ; } }); var globalID; function attachEvents ( $item ) { $item.bind("click", clickHandler ); $item.bind("mouseenter", hoverHandler ); $item.bind("mouseleave", mouseleaveHandler ); $item.bind("mousedown", mousedownHandler ); $item.bind("mouseup", mouseupHandler ); } function clickHandler ( $event ) { var target = $event.target.id; var id = target.charAt(target.length-1); globalID = id; $('#dialog').dialog('open'); } function hoverHandler ( ) { $(this).addClass("ui-state-hover"); } function mouseleaveHandler ( ) { $(this).removeClass("ui-state-hover"); } function mousedownHandler ( ) { $(this).addClass("ui-state-active"); } function mouseupHandler ( ) { $(this).removeClass("ui-state-active"); } function deleteItemSelected ( ) { $("#minutes\_"+globalID).remove(); }\[/js\]
