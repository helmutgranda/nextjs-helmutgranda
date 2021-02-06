---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "Flash PHP mySQL - Write to a Database with Flash and PHP"
date: "2007-08-15"
categories: 
  - "actionscript"
  - "php"
  - "programming"
---

\[kml\_flashembed movie="/labs/swf/phpwritetodb.swf" height="150" width="450" /\]

I have written a small script that will assist you into using communication between Flash and PHP to write to a mySQL database. The task is simple, verify the contents of the fields in flash and then send the information to PHP who then writes the information into the database.

\[as\]var submitListener:Object = new Object(); submitListener.click = function(evt:Object) { try { checkForm(); } catch(e) { result\_ta.text = e.toString(); return; } var result\_lv:LoadVars = new LoadVars(); result\_lv.onLoad = function(success:Boolean) { if (success) { trace("THE ERROR = " + result\_lv.error); trace(unescape(result\_lv.toString())); if (result\_lv.error != undefined) { result\_ta.text = result\_lv.error; }else{ result\_ta.text = "Wrote to DB: \\n"; result\_ta.text += "First Name = " + result\_lv.fname + "\\n"; result\_ta.text += "Last Name = " + result\_lv.lname + "\\n"; result\_ta.text += "Age Name = " + result\_lv.age + "\\n"; result\_ta.text += "Total Records = **" + result\_lv.nuRows + "**"; } } else { result\_ta.text = "Error connecting to server."; } } var send\_lv:LoadVars = new LoadVars(); send\_lv.fname = fn\_tfl.text; send\_lv.lname = ln\_tfl.text; send\_lv.age = age\_tfl.text; send\_lv.sendAndLoad("path/to/your/php/file.php", result\_lv, "POST"); }; submit\_btn.addEventListener("click", submitListener); function checkForm() { if (fn\_tfl.text == undefined || fn\_tfl.text.length < 1) { throw new Error("First name is required"); } if (ln\_tfl.text == undefined || ln\_tfl.text.length < 1) { throw new Error ( "Last name is required"); } if (age\_tfl.text == undefined || age\_tfl.text.length < 1) { throw new Error ( "Age is required"); } }\[/as\]

This is the script used to create the tables and fields:

\[php\]CREATE TABLE \`users\` (  
\`id\` INT( 6 ) NOT NULL AUTO\_INCREMENT PRIMARY KEY ,  
\`fname\` VARCHAR( 15 ) NOT NULL ,  
\`lname\` VARCHAR( 15 ) NOT NULL ,  
\`age\` INT( 3 ) NOT NULL  
) ENGINE = MYISAM ;\[/php\]

Make sure you check the mySQL version on your server in case you encounter any errors.
