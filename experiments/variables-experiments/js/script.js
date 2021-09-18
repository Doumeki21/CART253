"use strict";

/**************************************************
Experimenting Variables
Olenka Yuen

Here is a description of this template p5 project.

Plan:
1. Declare a variable > "let"
**************************************************/

//List varibales at the top of the code for organization!
let bgShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 200;
let circleSpeed = 2;

//OR make special variable like this for a same unique object (like circle in this case). 
let circle = {
  x: 0,
  y: 250,
  size: 200,
  speed: 2
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);

}

// draw()
//
// Draw a circle in motion.
function draw() {
background(bgShade);
circle.x += circle.speed;
ellipse(circle.x, circle.y, circle.size);

//Nice to print everything in console.log so it's easier to debug and connect to the orgins of errors!
console.log(`circle.x: ${circle.x}, circle.y: ${circle.y}`);
//alternative-
//console.log("circleX: " + circleX);
}
