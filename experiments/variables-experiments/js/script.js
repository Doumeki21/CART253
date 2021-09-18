"use strict";

/**************************************************
Experimenting Variables
Olenka Yuen

Here is a description of this template p5 project.

Plan:
1. Declare a variable > "let"
**************************************************/

let bgShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 200;
let circleAccelerate = 0.50;
let circleSpeed = 2;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);

}

// draw()
//
// Description of draw() goes here.
function draw() {
background(bgShade);
circleX += circleSpeed;
circleSpeed += circleAccelerate;
ellipse(circleX, circleY, circleSize);

}
