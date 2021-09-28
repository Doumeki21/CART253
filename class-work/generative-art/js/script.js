"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let rectangle = {
  x: 1,
  y: 250,
  speed: .1,
  size: 5,
  yAngle: 2,
}

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500, 500);
background(0); //If bg is here, bg is only generated one time !
}

// draw()
//
// Description of draw() goes here.
function draw() {
//Generate every 60 frames!

//rectangle.x = rectangle.x + rectangle.speed;
//rectangle.size += 0.25;


noFill();
stroke(255);
rectMode(CENTER);
rect(rectangle.x, rectangle.y, rectangle.size, rectangle.size);

rectangle.x = rectangle.x + rectangle.speed;

let yChange = sin(rectangle.yAngle) * 1;
rectangle.y = rectangle.y + yChange;
rectangle.yAngle = rectangle.yAngle + 0.01;


}
