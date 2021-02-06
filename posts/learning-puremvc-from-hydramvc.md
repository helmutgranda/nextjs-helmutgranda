---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "Learning PureMVC from HydraMVC"
date: "2009-10-02"
categories: 
  - "as-burst"
---

### Intro

This post is not specifically on how to learn everything about PureMVC with HydraMVC but mainly points out their notification workflow document that they have on their site and some other statements they make on their site.

Keep in mind that HydraMVC is a complete rewrite from PureMVC, made specifically for the Flex framework.

### HydraMVC Notification Workflow

Beautiful (technically speaking) document that allows you to follow their notification system from beginning to end (tip: start from the view component and follow along).

Screenshot:

![](images/hydramvc_notification_workflow.jpg)

[Direct link to original PDF file in HydraMVC website (full resolution).](http://hydraframework.com/files/HydraFrameworkWorkflow.pdf)

### Briefly about HydraMVC

If you are using PureMVC keep in mind the following.

> PureMVC intends to be language-agnostic where HydraMVC is a compromise by design

Meaning that the team at HydraMVC took the time to make the framework beautiful to fit their needs within Flex framework while PureMVC has kept it open so that you can extend to other languages such as PHP, Javascript, Objective C, Ruby and more. This gives PureMVC the room to breath without having to be tied up to a specific language.

But in the end that doesn't mean that we can't learn from HydraMVC if you are working on PureMVC, specially since Hydra is based (and complete rewrite) from PureMVC.

### Hydra Events and Implementation

> In addition to using Events vs. an independent Observer pattern, HydraMVC also streamlines implementation, encapsulating much of the initialization code that needed to be written when implementing PureMVC.

I am familiar with Flex and have written couple test applications with the framework but I haven't used HydraMVC with Flex but I am curios on their initialization code which for the sound of their statements you have to write less code while still keeping the same functionality.

Here are some useful links: [PureMVC](http://www.puremvc.org) [HydraMVC](http://www.hydramvc)
