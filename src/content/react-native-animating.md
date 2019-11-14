---
layout: post
title: React Native Animations Through Example
date: '2019-01-30'
spoiler: Learning Mobile Animations By Imitation
draft: true
tags:
  - React
---

As someone who started with React on the web, I had to accept that I've been spoiled by its [documentation](https://github.com/reactjs/reactjs.org).

And that's to be expected. The two top contributors are [Brian Vaughn](https://github.com/bvaughn) and [Dan Abramov](https://github.com/gaearon), two of the core contributors to React itself who both particularly good at [explaining](https://youtu.be/ByBPyMBTzM0?t=2003) [complex ideas](https://overreacted.io/how-does-react-tell-a-class-from-a-function/).

So when I started tinkering with React Native, I was inevitably going to be let down by the documentation.

And this in no way an attempt to put down the work of the React Native documentation contributors. For example, the React Native documentation has a lot fewer examples for all of its APIs, which can be unintuitive for those who don't come from a mobile development background. That's perfectly valid, though, since it's much tougher to embed examples for mobile than for the web.

All that's to say: I've had to learn a lot of React Native APIs the hard way. And in an attempt to alleviate those pain points, I wanted to provide examples for APIs that don't have the clearest documentation. Starting with Animation.

---

## Animation

On mobile apps especially, little animations have a huge effect on how your app "feels" and can make it seem much more fluid. Since users are interacting directly with their finger on a screen, they expect consistent feedback when touching things that are interactive.

The good news is that the built-in React Native Animation API is robust and highly configurable. The bad news is that the documentation for it only includes two simple examples, including a "fade in" animation and an animation of a square gradually getting bigger.

While they're helpful at explaining the concepts, these examples aren't exactly practical.

So we're going to recreate an animation that caught my eye in the Apple App Store:

<!-- ADD GIF HERE -->

We have a good amount going on here:
- A card list scroll view
- Tapping on a card decreases the size slightly
- Releasing causes the card to smoothly become the entire view, with the rest of the content fading in


