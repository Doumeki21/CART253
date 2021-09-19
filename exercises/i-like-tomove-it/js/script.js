"use strict";

/**************************************************
Exercise: I Like to Move it!
Olenka Yuen

Perform/ draw an abstract animation.

PLAN (should at least have):
. 3 shapes.
. Movement.
. Size changes.
. Color changes.
. map() and constrain()
. Respond to mouse position using mouseX and mouseY.
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
  fill: 100,
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

let rectangle = {
  x: 50,
  y: 50,
  fill: 0,
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
  bg.r = map(circle1.size, 100, width, 0, 13);
  bg.g = map(circle1.size, 100, width, 0, 255);
  bg.b = map(circle1.size, 100, width, 0, 231); //map(variable, area range, value range)
  // (auto alternative) bg.r = bg.r + 1;

//Mobile circle.
circle1.x = map(mouseX, 0, width, 0, 500 );
circle.size = map(mouseY, 0, height, 50, 500);
circle1.y = random(mouseX, 0, height);
circle1.size = circle1.size + circle1.growthRate; //Growth
circle1.size = constrain(circle1.size, 0, width); //Growth limit
fill(circle1.fill, circle1.alpha); //Color and transparency
ellipse(circle1.x, circle1.y, circle1.size); //Draw left circle.

//Right circle.
circle2.x = circle2.x + circle2.speed; //Speed
circle2.x = constrain(circle2.x, width/2, width);
circle2.size = circle1.size * circle2.sizeRatio; // circle2 grows relative to circle1
fill(circle2.fill, circle2.alpha); // color + trans
circle2.fill = map(mouseX, 0, width, 0, 255);
ellipse(circle2.x, circle2.y, circle2.size); // draw circle

//Mobile rectangle.
rectMode(CENTER);
rectangle.x = random(mouseX, 0, height);
rect(mouseX, mouseY, rectangle.x, rectangle.y);


}
