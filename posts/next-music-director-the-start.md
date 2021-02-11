---
layout: post
author: [Helmut]
tags:
  - Analytics
  - Tools
title: "Next Music Director"
date: "2021-02-11"
image: 'music-director-start.jpg'
image_credit: mjessier
---

NextMusicDirector came from the need of having a location where my daughter could practice playing the flute. As much as I was enjoying helping my daughter figure out what each note was I had the desire to automate this process for her and also maybe somewhere out there a kid would have the need to have someone help them identify each note and walk them through playing them.

This is a rough draft of the goals

- Easy to use
- Be able to see the call out notes (ABCDEFG)
- Be able to hide the call out notes (ABCDEFG)
- Be able to create your own note routine
- Playable on the browser
- Playable on a mobile device
- Looks decent

With that in mind the first thing I had to figure out how to play sounds on the browser, luckily someone had written a component just for that named [MIDI Sounds React](https://surikov.github.io/midi-sounds-react/), this was perfect as I wanted to write React, so just with that component I started to add sounds to a browser. 

## Playing a sound:

The code to use the component was relative easy.

```jsx
this.midiSounds.playChordAt(1, 3, [60], 2.5);
```

The parameters for the item above are as follows

1 = Time when the note is to be played

3 = what instrument

[60] = pitch

2.5 = duration of play

## Adding component to the browser

The way you would add the component to your view was realtive easy as well

```jsx
//Import library
import MIDISounds from 'midi-sounds-react';

// use library
<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />
```

This gave me the perfect structure I needed in order to play different notes on the browser. One of the benefits that came with this component is the ability to use a wide range of instruments and I just had to find the flute which is 765.

## Displaying the notes

I could draw each note but instead I did a quick search and found multiple OS fonts that I could use to draw the notes on the browser. After trying a few I ended up using [MusiQwik](https://www.fontpalace.com/font-download/MusiQwik/) as it met my needs and with their font map I was able to quickly figure out what letter to use for which note.

## Making it look decent

I now had all the components I needed to play sound and display notes on the browser, I could just throw all on the browser and do is thing but I wanted to make sure it look decent at the start and scale as I would add features to it. With that in mind I went ahead and decided to use [Carbon Design System](https://www.carbondesignsystem.com/) to get some of the out of the box components and get some of the basics out of the way such as buttons and modals.

Can we see it?

Here is a screengrab of the site, you can also visit the site with the domain below.

![Next Music Director Screen Grab](/images/music-director-start-screen.png)

[https://nextmusicdirector.com/](https://nextmusicdirector.com/)