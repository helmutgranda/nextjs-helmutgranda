---
layout: post
image: img/writing.jpg
author: [Helmut]
excerpt: Work In Progress Migration
title: "YourPay some common errors and solutions"
date: "2009-11-23"
categories: 
  - "as-burst"
tags: 
  - "php"
  - "solutions"
  - "yourpay"
---

When working with YourPay service there some small issues you might run into and so I can remember in the future I am listing them here.

### Fraud issue

If hit the server several times for testing you might be tempted to hit it with the same amount but remember that even though for you they are different hits, the store is receiving the same "client" hit so they will reject you request by marking it as a fraud.

### Fraud Solution

Hit the server with different totals, even a minimum of 1 cent in difference between transactions is enough for you to get successful transactions with the store.

### Store not able to process orders

One common issue is that when you hit the server from a page that is not registered with the application, YourPay will not recognize your store request and thus reject your request and it will break the whole experience.

### Store not able to process orders solution

Always remember to change the location where YourPay is expecting your request, this could be easily forgotten when you are testing from different points on your servers or you are testing from Dev and then move everything to production.
