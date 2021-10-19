
/**************************************************
Wow, the Mona Lisa!
Olenka Yuen

A program that attempts to reproduce the Mona Lisa.

Plan/
x Create a reasonable sized canvas.
x Fill the background with Lisa's background color.
. Add detail to the background.
.Block out the basic shapes (face, body, hair, moutains, water)
**************************************************/

"use strict";

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(240, 350);
}


// draw()
//
// Description of draw() goes here.
function draw() {

  //The background.
  background(144, 191, 122);

  //Mona's hair
  fill(10, 20, 10);
  ellipse(110, 87.5, 100, 120);

  //Mona's face.
  fill(222, 182, 93);
  noStroke();
  ellipse(120, 87.5, 60, 80);

//Smile
stroke(0);
line(110, 100, 120, 105);
line(120, 105, 140, 100);

}
