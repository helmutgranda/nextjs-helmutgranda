---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "The benefit of always cleaning after yourself (AS Analogy)"
date: "2008-03-20"
categories: 
  - "actionscript"
  - "programming"
---

When we were kids we had the pleasure of having mom, dad or an older sibling cleaning after ourselves. So if we left any dirty clothes on the floor or any dirty dishes on the table after eating any older mature adult would come up and clean up the mess.

As we grew old hopefully we were thought to clean after ourselves and also we were thought the benefits of doing so. Such as having a nice clean apartment to show off to your friends, or being able to find a wife because girls like to come to your place since it is always clean rather than knowing that if they visit you they wont know where to sit wether on top of pizza boxes or your dirty laundry on the couch. And some other benefits that your parents through rationale or fear put in your head and you have in there until today.

Now you entered the world of Actionscript programming either by choice of by accident, if you entered this magnificent world of Actionscript by choice and your teachers thought you well you were probably thought to clean after yourself just as you did at home, now if you arrived to Actionscript programming by accident you might have not known the benefits of doing a little bit of clean up after you were done working with certain items (properties). Specially if the project you are working on is small.

Not only that but if you have been working with AS1 (Actionscript 1) or AS2 (Actionscript 2) you would have flash doing all the cleaning for you. Take a look at the following example in AS2

\[as\] // AS2 var myShirt = this.attachMovie ("Shirt", "myShirt", this.getNextHighestDepth() ); myShirt.\_x = 100 ; trace(myShirt.\_x); // 100 myShirt.removeMovieClip(); trace(myShirt.\_x); // undefined var myShirt = this.attachMovie ("Shirt", "myShirt", this.getNextHighestDepth() ); trace(myShirt.\_x); // 0 \[/as\]

What a beauty! if I remove my object from the stage the \_x property of the object returns as expected "undefined". So by now we have once again being spoiled by our wonderful programming parent Actionscript. Who does the cleaning for us after removing an item from the stage. Now eventually Actionscript grew up and became more like an adult that wants you to be responsible for your items and not having to clean up after yourself all the time. This is not only good but it helps you to keep track of what you are doing and how to handle different items.

Going back to the home-parent analogy we can think of this as when we were kids we didn't know neither cared of how our shirts and pants were cleaned. All we knew is that we were able to walk in our closet and find a new clean shirt or pants if we needed. Now with Actionscript you were able to do the same in AS1 and AS2. if you used an object and deleted it from the stage it would magically get washed, ironed and back into our closed for a later use.

Now lets see what happens with AS3, so lets try a very similar sample as the one above:

\[as\] // AS3 var myShirt : Sprite ; myShirt = new Shirt; myShirt.x = 100 ; addChild(myShirt); trace(myShirt.x ); // 100 removeChild(myShirt); trace(myShirt.x); // 100 \[/as\]

So when I remove an item from the stage (Display List), the it stays in memory and Flash still knows its there, as you can tell on our second trace statement we were able to get the "x" property from our object even though we removed it with removeChild. So how do we "clean" after ourselves in AS3? Well we tell flash that we wont use the objects anymore by setting them to null or undefined, it just depends of what kind of object or property you are working with.

So to fix our issue we do the following:

\[as\] var myShirt : Sprite ; myShirt = new Shirt; myShirt.x = 100 ; addChild(myShirt); trace(myShirt.x ); // 100 removeChild(myShirt); trace(myShirt.x); // 100 myShirt = null ; trace(myShirt.x); // see below // we would get a beautiful error as follows in the third trace: //TypeError: Error #1009: Cannot access a property or method of a null object reference. // at \_\_\_fla::MainTimeline/frame1() \[/as\]

Success we were able to remove the object from the stage and also cleaned up after yourself. You might be thinking, how lame! I dont need to keep track of my objects since there are only 3 of them. That is fine but when you are writing an application and you have 1000 objects or better yet you add Sprites, MovieClips, Sound and Video to your application (or swf movie ) then you would be glad you learned early in the game to clean up. Remember AS3 is maturing and is not going away so this is the new standard and you must adapt to what daddy Flash is telling you to do ( or is it mommy Flash? )

_Disclaimer: I have been meaning to post something about "cleaning up after yourself" for quite a while and finally decided to push this analogy live. But by no means is the perfect analogy and specially for those programmers with 100 years of experience but it is mainly to explain the basics of adding and deleting objects from the stage for those who have difficulty understanding the concept._

\[as\] // This is a long class that I was planing to use for the analogy but decided not to.. package

{ public class OlderPersonCleanAfterChild { // The child who you have to clean after private var child : String ; // Boolean property if kid left a mess private var kidLeftAMess : Boolean ; // List of items that have been messed private var messedItems : Array ; public function OlderPersonCleanAfterChild ( theChild : String = "you", hasMess : Boolean = false ) { child = theChild kidLeftAMess = hasMess ; if ( child == true && kidLeftAMess == true ) { this.cleanMess(); } } private function cleanMess ( ) : void { for ( var i : int = 0 ; i < messedItems.length ; i ++ ) { cleanItem ( messedItems \[ i \] ) ; } } private function cleanItem ( theItem : Object ) : void { var typeOfItem = theItem.typeOf; switch ( typeOfItem ) { case : kitchenItem ; //kitchenChore ( theItem ) ; break; case : bedroomItem ; //bedroomCore ( theItem ) ; break case : livingroomItem ; //livingroomChore ( theItem ) ; break ; } } } } \[/as\]
