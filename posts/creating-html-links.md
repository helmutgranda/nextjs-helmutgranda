---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Creating HTML Links"
date: "2003-10-04"
categories: 
  - "html"
---

This Tutorial goes to GlowintheDark, his question was:

**_u know like on a web site how can i link another website so when they click it automaticaly takes them there?_**

Ok, this is really easy all you have to use is the <a> </a> tag. Let me give you an example so you can understand it better.

<a href="http://www.google.com"> Click Here to go to Google </a>

Ok, lets go step by step:

a href="YOURLINKGOESHERE"

what ever is inside the quotes will be the link you want to go to

<a>TITLE OF YOUR LINK</a>

What ever you put between the <a></a> tags is what is going to be visible to the user. So if we place the sample above as code this is what it would look like:

[Click Here to go to Google](http://www.google.com)

One more recomendation. You want to add the "target" parameter inside your links. that way you will ensure the person links inside your page or goes outside your page.

You have 4 choises

\_blank = this will make sure your link opens in a new browser window (great when you want the user to go to a link but your website will remain in the background)  
\_parent = this will make sure your link opens in the parent window  
\_self = this will make sure your link opens in the same page you are at (once the user clicks on the link if it does not belong to your site they are gone)  
\_top= this will make sure your link opens in the top window (great when you are inside frames)

it looks like this:

<a href="http://www.google.com" target="\_blank" > Click Here to go to Google </a>

Questions or comments leave a message or email me

...helmut
