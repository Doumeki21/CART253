/**
Title of Project
Olenka Yuen

Objectives
  *Handling different forms of user input
  *Organizing code with functions
  *Making things interesting with conditionals and variables
  *Combining aesthetics, interaction and concept

Brief
  *(Personal) Metaphorical simulation. // Mental health??

Requirements
  *At least two moving elements
  *Interactivity
  *Aesthetic, conceptual, and procedural harmony (visual, sound, and user-input should work harmoniously!)
  *Beginning, middle, and end!

Advice
  *START SMALL
  *ATOM BEAUTIFY
*/

"use strict";

let rectBottom = {
  x: 250,
  y: 550,
  width: 100,
  height: 40,
}

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas (windowWidth, windowHeight);
}


/**
Description of draw()
*/
function draw() {
  background(0);

  rectBottom.x = mouseX;

  rectMode(CENTER);
  rect(rectBottom.x, rectBottom.y, rectBottom.width, rectBottom.height);
}
