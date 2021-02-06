---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Get a URL Google+ Count Via PHP"
date: "2011-11-01"
categories: 
  - "as-burst"
---

> `<?php  
> $ch = curl_init();`
> 
> $encUrl = "https://plusone.google.com/u/0/\_/+1/fastbutton?url=".urlencode($url)."&count=true";
> 
> $options = array(  
> CURLOPT\_RETURNTRANSFER => true, // return web page  
> CURLOPT\_HEADER => false, // don't return headers  
> CURLOPT\_FOLLOWLOCATION => true, // follow redirects  
> CURLOPT\_ENCODING => "", // handle all encodings  
> CURLOPT\_USERAGENT => 'spider', // who am i  
> CURLOPT\_AUTOREFERER => true, // set referer on redirect  
> CURLOPT\_CONNECTTIMEOUT => 5, // timeout on connect  
> CURLOPT\_TIMEOUT => 10, // timeout on response  
> CURLOPT\_MAXREDIRS => 3, // stop after 10 redirects  
> CURLOPT\_URL => $encUrl,  
> CURLOPT\_SSL\_VERIFYHOST => 0,  
> CURLOPT\_SSL\_VERIFYPEER => false,  
> );
> 
> curl\_setopt\_array($ch, $options);
> 
> $content = curl\_exec($ch);  
> $err = curl\_errno($ch);  
> $errmsg = curl\_error($ch);
> 
> curl\_close($ch);
> 
> if ($errmsg != '' || $err != '') {  
> print\_r($errmsg);  
> print\_r($errmsg);  
> }  
> else {  
> $dom = new DOMDocument;  
> $dom->preserveWhiteSpace = false;  
> @$dom->loadHTML($content);  
> $domxpath = new DOMXPath($dom);  
> $newDom = new DOMDocument;  
> $newDom->formatOutput = true;
> 
> `$filtered = $domxpath->query("//div[@id='aggregateCount']");  
> return $filtered->item(0)->nodeValue;  
> }  
> ?>`

via [strategyinternetmarketing.co.uk](http://www.strategyinternetmarketing.co.uk/get-a-url-google-count-via-php/)
