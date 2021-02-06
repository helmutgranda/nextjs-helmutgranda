---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
excerpt: Work In Progress Migration
title: "ActionScript Email Validation"
date: "2006-10-06"
categories: 
  - "actionscript"
  - "programming"
---

Sooner or later you will face with the small quest of validating an email address for your flash application. The following script is a basic script and should not be used for websites that relay heavily on the email address is being requested (shopping carts, credit card transactions and so forth)

\[as\]function isValidEmail(e) { if (e.indexOf("@") != -1 && ( e.indexOf(".") > e.indexOf("@") ) ){ trace("success"); }else{ trace("error"); } }

//Test isValidEmail("test@test.com"); \[/as\]
