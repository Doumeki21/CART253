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
  size: 200,
  speed: 1,
  fill: 255,
  alpha: 200,

  currentSize: 200,
  minSize: 200,
  maxSize: 400,

  sizeChange: undefined,
  sizeGrowSpeed: 4,
  sizeShrinkSpeed: -2,
}

let circle2 = {
  x: 0,
  y: 250,
  size: 200,
  speed: 4,
  fill: 255,
  alpha: 200,

  currentSize: 200,
  minSize: 200,
  maxSize: 400,

  sizeChange: undefined,
  sizeGrowSpeed: 4,
}

let circle3 = {
  x: 0,
  y: 250,
  size: 50,
  speed: 5,
  r: 0,
  g: 0,
  b: 0,
  fill: undefined,
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

  //Size change bg color.
  bg.r = map(circle1.currentSize, 100, width, 0, 13);
  bg.g = map(circle1.currentSize, 100, width, 0, 255);
  bg.b = map(circle1.currentSize, 100, width, 0, 231);




//**CIRCLE 1**
//circle color.
circle1.fill = map(circle1.x, 0, width, 0, 255);
fill(circle1.fill, circle1.alpha);

//At circle's max size-
if (circle1.currentSize >= circle1.maxSize){
  //Shrink!!
  circle1.sizeChange = circle1.sizeShrinkSpeed;
}
//At circle's min size-
else if (circle1.currentSize <= circle1.minSize){
  //Grow!!
  circle1.sizeChange = circle1.sizeGrowSpeed;
}

//Circle's auto size.
circle1.currentSize += circle1.sizeChange;

//Draw circle
circle1.x = circle1.x + circle1.speed;
circle1.x = constrain(circle1.x, 0, width);
circle1.x = map(mouseX, 0, width, 0, width);
circle1.y = map(mouseY, 0, width, 0, width);
ellipse(circle1.x, circle1.y, circle1.currentSize);


// (Cursor echo) CIRCLE2**
//circle color.
circle2.fill = map(circle2.maxSize, 0, width, 0, 255);
fill(circle2.fill, circle2.alpha);

//At circle's max size-
if (circle2.currentSize >= circle2.maxSize){
  //Shrink!!
  circle2.sizeChange = circle2.shrinkSpeed;
}
//At circle's min size-
else if (circle2.currentSize <= circle2.minSize){
  //Grow!!
  circle2.sizeChange = circle2.sizeGrowSpeed;
}

//Circle's auto size.
circle2.currentSize += circle2.sizeChange;

//Draw circle
circle2.x = circle2.x + circle2.speed;
circle2.x = constrain(circle2.x, 0, width);
circle2.x = map(mouseX, 0, width, 0, width);
circle2.y = map(mouseY, 0, width, 0, width);
ellipse(circle2.x, circle2.y, circle2.currentSize);



//(random horizontal) CIRCLE 3**
//Circle color.
circle3.r = map(circle3.x, 100, width, 0, 176);
circle3.g = map(circle3.x, 0, width, 0, 48);
circle3.b = map(circle3.x, 0, width, 0, 255);

//Circle bounce.
//circle3.x = random(mouseY, 0, width);

//Draw circle.
circle3.x = circle3.x + circle3.speed;
ellipse(circle3.x, circle3.y, circle3.size);

//Rectangle!!

// UGH HOW DO I MOVE THIS-
if (circle3.x === width){
  circle3.x = 0;
}
else if (circle3.x === 0){
  circle3.x = width;
}


rect(CENTER);
fill(176, 48, 255);
rect(0, height/2, 50, 50);

}
