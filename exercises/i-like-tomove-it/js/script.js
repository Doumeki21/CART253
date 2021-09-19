"use strict";

/**************************************************
Activity 03: Moving Pictures
Olenka Yuen

Perform/ draw an abstract animation.

PLAN:
. Decide the variables.
. Set canvas
. Set a background color that changes over time.
. Draw a left circle entering the screen, pause, and grow.
. Draw a right circle doing the same.
**************************************************/

//Variable list.
//Js objects
let bg = {
  r: 0,
  g: 0,
  b: 0,
}

let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  speed: 2,
  growthRate: 2,
  fill: 255,
  alpha: 200,
}

let circle2 = {
  x: 500,
  y: 250,
  size: 75,
  speed: -2,
  sizeRatio: 0.75,
  fill: 255,
  alpha: 200,
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
  noStroke();

}

// draw()
//
// Description of draw() goes here.
function draw() {
  //background
  background(bg.r, bg.g, bg.b);
  bg.r = map(circle1.size, 100, width, 0, 255); //map(variable, area range, value range)
  // (auto alternative) bg.r = bg.r + 1;

//left circle.
circle1.x = circle1.x + circle1.speed; //Speed
circle1.x = constrain(circle1.x, 0, width/2); //Stop center
circle1.size = circle1.size + circle1.growthRate; //Growth
circle1.size = constrain(circle1.size, 0, width); //Growth limit
fill(circle1.fill, circle1.alpha); //Color and transparency
ellipse(circle1.x, circle1.y, circle1.size); //Draw left circle.

//Right circle.
circle2.x = circle2.x + circle2.speed;
circle2.x = constrain(circle2.x, width/2, width);
circle2.size = circle1.size * circle2.sizeRatio; // circle2 grows relative to circle1
fill(circle2.fill, circle2.alpha);
ellipse(circle2.x, circle2.y, circle2.size);
}
