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
};

let circle1 = {
  x: 0,
  y: 250,
  fill: 255,
  alpha: 200,

  currentSize: 200,
  minSize: 200,
  maxSize: 400,

  sizeChange: undefined,
  sizeGrowSpeed: 4,
  sizeShrinkSpeed: -2,
};

let circle2 = {
  x: 0,
  y: 250,
  size: 50,
  speed: 5,
  r: 0,
  g: 0,
  b: 0,
  fill: undefined,
  alpha: 200,
};

let square = {
  x: 250,
  y: -1,
  currentFill: {
    r:0,
    g:0,
    b:0,
  },
  startFill: {
    r: 176,
    g: 48,
    b: 255,
  },
  endFill:{
    r: 245,
    g: 179,
    b: 66,
  },
  size: 50,
  speed: 5,
  changeY: undefined,
};



// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
  noStroke();

};

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

//Circle's growth speed.
circle1.currentSize += circle1.sizeChange;

//Draw circle.
circle1.x = mouseX;
circle1.y = mouseY;
circle1.x = constrain(circle1.x, 0, width);
ellipse(circle1.x, circle1.y, circle1.currentSize);


//CENTER CIRCLE 2**
// Center circle motion.
circle2.x = circle2.x + circle2.speed;

// Center circle repeat motion.
if (circle2.x === width){
  circle2.x = 0;
}
else if (circle2.x === 0){
  circle2.x = width;
}

//Draw center circle.
//Circle color.
circle2.r = map(circle2.x, 100, width, 0, 0);
circle2.g = map(circle2.x, 0, width, 0, 115);
circle2.b = map(circle2.x, 0, width, 0, 255);
fill(circle2.r, circle2.g, circle2.b);
ellipse(circle2.x, circle2.y, circle2.size);

//SQUARE.
//Square action.
if (square.y >= height){
  //Go up!
  square.changeY = -square.speed;
}//Go down!
else if (square.y <= 0){
  square.changeY = square.speed;
}
//Square motion.
square.y += square.changeY;

//Draw square.
rectMode(CENTER);
square.currentFill.r = map(square.y, 0, height, square.startFill.r, square.endFill.r);
square.currentFill.g = map(square.y, 0, height, square.startFill.g, square.endFill.g);
square.currentFill.b = map(square.y, 0, height, square.startFill.b, square.endFill.b);

fill(square.currentFill.r, square.currentFill.g, square.currentFill.b);
rect(square.x, square.y, square.size);

};
