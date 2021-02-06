---
layout: post
image: img/spread-operator.jpg
author: [Helmut]
tags:
  - Migration
excerpt: 5 Uses for the Spread Operator
title: "Five users for the Spread Operator in JavaScript"
date: "2019-07-11"
---

[5 Uses for the Spread Operator](https://dev.to/laurieontech/5-uses-for-the-spread-operator-b9i "5 users for the spread operator")

## Copy array

```
let arr = [1,2,3,4]
let copy = [...arr]
// copy is [ 1, 2, 3, 4 ]
```

## Concatenate arrays

```
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let concat = [...arr1, ...arr2]
// concat is [ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

## Pass arguments as arrays

```
function dev(x, y, z) { }
var args = [0, 1, 2]
dev(...args) // call function
```

## Copy Object

```
let obj = {a: 1, b: 2, c: 3}
let copy = {...obj}
// obj is {a: 1, b: 2, c: 3}
```

## Merge Object

```
let obj1 = {a: 1, b: 2, c: 3}
let obj1 = {d: 4, e: 5, f: 6}
let merge = {...obj1, ...obj2}
// merge is {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
```

Find more details on the source link above, thanks to @laurie for putting this list together [https://dev.to/laurieontech](https://dev.to/laurieontech)
