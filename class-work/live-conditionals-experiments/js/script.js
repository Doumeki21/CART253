
"use strict";


/**
PLAN:
* Multiple images (happy/ scared face)
*FOR-LOOPS (discomfor-with, why are they instant?)
*delaying code
*push(), pop().
*/


let numCircle = 0;


/**
Description of preload
*/
function preload() {

}

/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);
  frameRate(10);
}


/**
Description of draw()
*/
function draw() {
  background(0);

  push();
  rectMode(CENTER);
  fill(255, 0, 0);
  stroke(0, 255, 0);
  rect(width/3, height/2, 100, 100);
  pop(); //doesn't apply to the next drawn image!!

  push();
  rectMode(CENTER);
  fill(255);
  rect(2 * width/3, height/2, 100, 100);
  pop();


function keyPressed() {
  numCircles += 1;
}

}
