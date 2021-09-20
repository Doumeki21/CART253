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
let bgShade = 0;

let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1,
  fill: 255,

  currentSize: 100,
  minSize: 50,
  maxSize: 100,

  sizeChange: undefined,
  sizeGrowSpeed: 2,
  sizeShrinkSpeed: -2,
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
  background(bgShade);


//Control circle movement.
//circle.size = map(mouseY, 0, height, 50, 500);

//Control circle color.
circle.fill = map(circle.x, 0, width, 0, 255);
fill(circle.fill);

//Draw circle
circle.x = circle.x + circle.speed;
circle.x = constrain(circle.x, 0, width);
ellipse(circle.x, circle.y, circle.size);

//At circle's max size-
if (circle.currentSize >= circle.maxSize){
  //Shrink!!
  circle.sizeChange = circle.sizeShrinkSpeed;
}

//At circle's min size-
else if (circle.currentSize <= circle.minSize){
  //Grow!!
  circle.sizeChange = circle.sizeGrowSpeed;
}

//Circle's auto size.
circle.currentSize += circle.sizeChange;

}
