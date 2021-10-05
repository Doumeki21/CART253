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
  width: 200,
  height: 20,
}

let ball1 = {
  x: 250,
  y: 0,
  size: 50,

  vx: 0,
  vy: 0,
  speed: 3,
}


/**
Description of setup
*/
function setup() {
  createCanvas (windowWidth, windowHeight);

  setupShapes();
}

function setupShapes() {
  ball1.vx = random(-ball1.speed, ball1.speed);
  ball1.vy = random(-ball1.speed, ball1.speed);
}

/**
Description of draw()
*/
function draw() {
  background(0);
//Move ball1
ball1.x += ball1.vx;
ball1.y += ball1.vy;
//ball1 constrain in window.
ball1.x = constrain(ball1.x, 0, width);
ball1.y = constrain(ball1.y, 0, height);
//Draw ball1.
ellipse(ball1.x, ball1.y, ball1.size);

//Check user-ball contact.

//Bottom user.
//Bottom user control.
  rectBottom.x = mouseX;
//Display bottom user.
  noStroke();
  rectMode(CENTER);
  rect(rectBottom.x, rectBottom.y, rectBottom.width, rectBottom.height);
}
