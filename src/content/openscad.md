---
layout: post
title: 3D Modeling With Code
date: '2018-11-13'
draft: false
tags:
  - Programming
---




But any time I would try to model something in any sort of 3D modeling "CAD" (computer-aided design) software, I would immediately get lost in the UI.

When I was looking through some models on [Thingiverse](http://thingiverse.com/), I was curious about some models that could be "customized" with given parameters.

After some brief searching, I saw that this was mainly done with [OpenSCAD](https://www.openscad.org/). This tool allows you to use _code_ to define the objects you're designing, and let's you use loops, conditions, parameters and functions to create models. You create customizable models by defining variables that can be altered by the user.

For example, I customized a [headphone holder](https://www.thingiverse.com/thing:3888771) for my desk at work. I just had to measure the height of my desk and provide it to the [Customizer](https://www.thingiverse.com/apps/customizer).

This made perfect sense: When you define a 3D model as a function, any user input is just a parameter that you can use to alter it.

Here are the basics that I learned to model a few simple things like a marker holder and a [board game piece holder](https://www.thingiverse.com/thing:3955665) for [Pandemic Legacy](https://www.zmangames.com/en/products/pandemic-legacy-season-1/) (they also have a great [cheatsheet](https://www.openscad.org/cheatsheet/index.html) of their own, but it doesn't come with examples).

### Basic Concepts

OpenSCAD uses its own language, but if you've used any C-like languages (including Javascript, Java or any flavor of C) it should look mostly familiar.

### Cube

We'll start with a simple one. The `cube` function can accept either one `integer` or an array of three integers which will be used in order for `[width, depth, height]` (don't worry, and I've mixed these up plenty).

```js
cube(3):
```