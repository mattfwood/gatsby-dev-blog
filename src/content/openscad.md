---
layout: post
title: 3D Modeling With Code
date: '2019-11-13'
spoiler: Printing in 3D For The UI-challenged
draft: true
tags:
  - Programming
---




But any time I would try to model something in any sort of 3D modeling "CAD" (computer-aided design) software, I would immediately get lost in the UI.

When I was looking through some models on [Thingiverse](http://thingiverse.com/), I was curious about some models that could be "customized" with given parameters.

After some brief searching, I saw that this was mainly done with [OpenSCAD](https://www.openscad.org/). This tool allows you to use _code_ to define the objects you're designing, and let's you use loops, conditions, parameters and functions to create models. You create customizable models by defining variables that can be altered by the user.

For example, I customized a [headphone holder](https://www.thingiverse.com/thing:3888771) for my desk at work. I just had to measure the height of my desk and provide it to the [Customizer](https://www.thingiverse.com/apps/customizer).

This made perfect sense: When you define a 3D model as a function, any user input is just a parameter that you can use to alter it.

Here are the basics that I learned to model a few simple things like a marker holder and a [board game piece holder](https://www.thingiverse.com/thing:3955665) for [Pandemic Legacy](https://www.zmangames.com/en/products/pandemic-legacy-season-1/) (they also have a great [cheatsheet](https://www.openscad.org/cheatsheet/index.html) of their own, but it doesn't come with examples).

## Basic Concepts

OpenSCAD uses its own language, but if you've used any C-like languages (including Javascript, Java or any flavor of C) it should look mostly familiar.

## 2D / 3D Functions
### Cube

We'll start with a simple one. The `cube` function can accept either one `integer` or an array of three integers which will be used in order for `[width, depth, height]` (all units are in millimeters).

```js
cube(3); // => this will create a 3x3x3mm cube
```

### Text

```js
cube([50, 14, 1]);

translate([0, 1, 1]) {
    text("Hello World", font="Futura:style=Condensed Medium");
}
```


## Functions / Operations

There are several common functions that can be used to manipulate shapes into the different models you might try to create.

### Translate

Translate is mostly self-explanatory: It will move your object between the X, Y and Z axis in the 3D "space".

```js
// move the contents of this function 3 mm "forward" along the X axis
translate([3, 0, 0]) {
  cube(3)
}
```

### Difference

Let's say you wanted to create a small model to hold things in a box. To create the "opening", you can use the `difference()` function.

`difference()` takes the first "shape" that's passed to it and "removes" all the subsequent items.

So if you had a 10x10x10mm cube, you could make a smaller box inside of it to

```js
difference() {
  cube(10); // this is the initial shape
  // all items following are "removed" from the initial one

  // so let's make a slightly smaller cube and translate it slightly to be inside the other cube
  translate([1, 1, 2]) {
    cube(8)
  }
}
```
