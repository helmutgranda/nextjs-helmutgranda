---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "SQL general error 1005 and errno 150"
date: "2013-02-25"
categories: 
  - "programming"
  - "sql"
---

SQLSTATE\[HY000\]: General error: 1005 Can't create table 'mydatabase.#sql-c7c\_81e' (errno: 150)

My issue was that the Foreign Key didn't match the type of field I was trying to use as reference.

id (source) = int(10) - unsigned

foreign = int(11)

Foreign here needs to be unsigned as well to avoid this type of errors.

id (source) = int(10) - unsigned

foreign = int(10) - unsigned
