---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "HTTP API « WordPress Codex"
date: "2011-11-03"
categories: 
  - "as-burst"
---

> ### HTTP API
> 
> <table><tbody><tr><td><div><h3>Contents</h3><span>[<a href="http://codex.wordpress.org/HTTP_API#">hide</a>]</span></div><ul><li><a href="http://codex.wordpress.org/HTTP_API#HTTP_API"><span>1</span> <span>HTTP API</span></a></li><li><a href="http://codex.wordpress.org/HTTP_API#Helper_Functions"><span>2</span> <span>Helper Functions</span></a></li><li><a href="http://codex.wordpress.org/HTTP_API#Other_Arguments"><span>3</span> <span>Other Arguments</span></a></li><li><a href="http://codex.wordpress.org/HTTP_API#External_References"><span>4</span> <span>External References</span></a></li></ul></td></tr></tbody></table>
> 
> ### HTTP API
> 
> Within PHP, there are five different ways to send an HTTP request. For simplicity, the five different ways are called '**transports'** and will be used from now on. The purpose for the HTTP API is to support all of them with an API that is simple and standard for each of the transports.
> 
> The problem is that web hosting servers support different transports and some might support none. The solution then is to support as many as possible to allow for those who have hosts that disable one or two to still access the web through one of the other transports that might still be enabled or supported.
> 
> The other problem was that there wasn't any API for plugins and WordPress core to standardize on. Therefore, there used to be several different implementations in WordPress and many still in Plugins. The problem is even worse for plugins, because the author had to write the implementation themselves and support it afterwards. Given how many workarounds were required for the HTTP API in WordPress, that would be extremely difficult to support. It would also had to be reimplemented in each plugin that wanted to support as many as possible, which many just choose to support one or two if the plugin author was feeling generous.
> 
> The HTTP API was also an attempt to standardize on a single API that handled everything as simply as possible. The actual implementation is object-oriented, but there are utility functions, which can be used to abstract the API usage.
> 
> The HTTP API was added in [WordPress 2.7](http://codex.wordpress.org/HTTP_API# "Version 2.7") and extend further in [WordPress 2.8](http://codex.wordpress.org/HTTP_API# "Version 2.8"). You may want to maintain backwards compatibility with previous versions, so you should wrap the function calls in function\_exists() and provide an alternative, if possible.
> 
> In [WordPress 2.7](http://codex.wordpress.org/HTTP_API# "Version 2.7"), the basics of header, body and response support was started. In the next version, [WordPress 2.8](http://codex.wordpress.org/HTTP_API# "Version 2.8"), compression, cookie support and proxy support were added. Some of the features are passive, meaning that you don't have to set any option or do anything in order to use the feature. If you use an option that is in a later version, it won't give you an error, but may not work correctly.
> 
> While most of the features can be set using the options or using filters, the proxy implementation relies on constants and thus will need to be set manually in the wp-config.php. Of course, there could be and might already be a plugin that will allow you to configure it in the WordPress administration panels.
> 
> ### Helper Functions
> 
> The helper functions utilize the HTTP API classes to simplify the process as much as possible. You could use the classes and could use some of the methods to help process the code. The classes assume that you know what you are doing and can use the classes.
> 
> **You must use the helper functions if you are modifying the core code of WordPress.** It is one of the reasons for the helper API, to reduce the amount of error checking and prevent having to edit multiple places when bugs are found.
> 
> The functions below are the ones you will use to retrieve an URL. Please be aware that these functions will return a WordPress WP\_Error class on failure. You will have to check for that after using these functions.
> 
> \* wp\_remote\_get() - Retrieves a URL using the GET HTTP method. \* wp\_remote\_post() - Retrieves a URL using the POST HTTP method. \* wp\_remote\_head() - Retrieves a URL using the HEAD HTTP method. \* wp\_remote\_request() - Retrieves a URL using either the default GET or a custom HTTP method (should be caps) that you specify.
> 
> The other helper functions deal with retrieving different parts of the response and does the testing for WP\_Error for you. It should be noted that using these functions adds a small amount of overhead (<1-2 milliseconds), because of the function calls and checks made in the functions. If speed is important, then learn the array structure and access the array instead.
> 
> \* wp\_remote\_retrieve\_body() - Retrieves just the body from the response. \* wp\_remote\_retrieve\_header() - Gives you a single HTTP header based on name from the response. \* wp\_remote\_retrieve\_headers() - Returns all of the HTTP headers in an array for processing. \* wp\_remote\_retrieve\_response\_code() - Gives you the number for the HTTP response. This should be 200, but could be 4xx or even 3xx on failure. \* wp\_remote\_retrieve\_response\_message() - Returns the response message based on the response code.
> 
> You should first check that the response is not a !WordPress error.
> 
> $response = wp\_remote\_get('http://wordpress.org');  if( is\_wp\_error( $response ) ) // Handle error here.
> 
> As you can see in the example below, the API also handles redirection.
> 
> $theBody = wp\_remote\_retrieve\_body( wp\_remote\_get('http://www.wordpress.org') );
> 
> ### Other Arguments
> 
> The argument '**method'** is the HTTP method, such as POST, GET, HEAD, PUT, etc that you want to use. The safest methods to use for server support are POST, GET, and HEAD, all others, you may meet with various degrees of success. The default for this value is 'GET'.
> 
> The argument '**timeout'** allows for setting the time in seconds, before the connection is dropped and an error is returned. The default for this value is 5 seconds and it also has a filter named, 'http\_request\_timeout', in case you want to write a plugin that sets it for every request.
> 
> The '**redirection'** argument is the amount of times to follow a redirect before giving up. The default is 5 and there is a filter for the value. The filter name is 'http\_request\_redirection\_count' and only passes the redirection default value.
> 
> The '**user-agent'** argument allows you to set the user-agent. The default of which is, "WordPress/2.7; [http://www.example.com](http://www.example.com "http://www.example.com")" where 2.7 is the WordPress version number and [www.example.com](http://www.example.com) is the blog URL. There is a filter for changing this value as well, which is 'http\_headers\_useragent'.
> 
> The '**blocking'** argument allows you to trigger a non-blocking request. The default is true; setting it to false will generally allow PHP to continue execution while the transport is working. The key is that when you set blocking to false, then it will just send the request and won't bother you with the details. This is useful for sending a POST request, where you aren't concerned with whether it succeeded or not, or if you don't want to slow down the processing time of the page.
> 
> The argument '**compress'**, available with [Version 2.8](http://codex.wordpress.org/HTTP_API# "Version 2.8"), allows you to send the request body as compressed.
> 
> The '**decompress'** argument by default will decompress any compressed content that comes in. If you do leave this as true, then the headers will be set to tell the server that compressed data is accepted and it will be decompressed in the response. If you sent it to false, then the header will be sent that tells servers that compressed content is not accepted. If the content is still compressed, because of incorrect implementation or you sent the headers for it, then you will need to decompress the content. This is also a 2.8 argument.
> 
> The '**sslverify'** argument was added in [Version 2.8](http://codex.wordpress.org/HTTP_API# "Version 2.8") and will check to see if the SSL certificate is valid (not self-signed, actually for the site in the request) and will deny the response if it isn't. If you are requesting HTTPS and and know that the site is self-signed or is invalided and are reasonably sure that it can be trusted, then set to false.
> 
> ### External References
> 
> - [How to make HTTP requests with WordPress](http://planetozh.com/blog/2009/08/how-to-make-http-requests-with-wordpress/ "http://planetozh.com/blog/2009/08/how-to-make-http-requests-with-wordpress/") by Ozh
> - [Basic Authentication with the WordPress HTTP API](http://lud.icro.us/wordpress-http-api-basicauth/ "http://lud.icro.us/wordpress-http-api-basicauth/") by johnbillion
> 
> Retrieved from "[http://codex.wordpress.org/HTTP\_API](http://codex.wordpress.org/HTTP_API)"
> 
> [Categories](http://codex.wordpress.org/HTTP_API# "Special:Categories"): [Advanced Topics](http://codex.wordpress.org/HTTP_API# "Category:Advanced Topics") | [WordPress Development](http://codex.wordpress.org/HTTP_API# "Category:WordPress Development") | [API](http://codex.wordpress.org/HTTP_API# "Category:API") | [New page created](http://codex.wordpress.org/HTTP_API# "Category:New page created")

via [codex.wordpress.org](http://codex.wordpress.org/HTTP_API)
