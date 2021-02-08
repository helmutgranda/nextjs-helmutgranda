---
layout: post
image: 'moving-from.jpg'
author: [Helmut]
tags:
  - NextJS
exc: Work In Progress Migration
title: "How I converted my site to NextJS"
date: "2021-02-08"
categories: 
  - "improvement"
draft: false
---

It is always challenging to decide what technology to use for your site; in the end, it is your "baby", and as such, you want the best for it. I knew deep in me that I wanted to use React for this personal project, so I used Gatsby for the last version converting from WordPress. After that version was live, I decided to take it a step further and investigate NextJS. Luckily I had just taken a course by [Colby Fayock](https://egghead.io/q/resources-by-colby-fayock) titled [Create an eCommerce Store with Next.js and Stripe Checkout](https://egghead.io/playlists/create-an-ecommerce-store-with-next-js-and-stripe-checkout-562c) It was great and opened my eyes to how much potential Next.js has. By the way, I live-streamed taking the course on [YouTube](https://youtube.com/helmutgranda); if you would like to watch it, here are the links: 

[Part 1](https://www.youtube.com/watch?v=_nQC2krty2Y)
[![Part 1](http://i3.ytimg.com/vi/_nQC2krty2Y/maxresdefault.jpg)](https://www.youtube.com/watch?v=_nQC2krty2Y)

[Part 2](https://www.youtube.com/watch?v=d-qwS0dMuqs) 
<a href="https://www.youtube.com/watch?v=_nQC2krty2Y" rel="noopener" target="_blank">![Part 2](http://i3.ytimg.com/vi/_nQC2krty2Y/maxresdefault.jpg)</a>

> I had to break it into two parts because after about 40 minutes I lost my internet connection.

You can also find my version after taking the course here:

[Space Jelly Shop](https://nextjs-vercel-eosin.vercel.app/)

With the exposure to NextJS, I took it upon myself to change my site's layout, using NextJS, and it was a great ride! It took about 16 hours to transform. Two of the most fun things to learn was when to use useEffect and useLayoutEffect in hooks.

Creating an account and using [Vercel](https://vercel.com/) was a breeze; it took minutes to get it up and running with Vercel, and after connecting it with [GitHub](https://github.com), my builds were automatic and perfect for quick modification and UI tests.