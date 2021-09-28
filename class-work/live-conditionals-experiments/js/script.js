
"use strict";


/**
PLAN:
* Multiple images (happy/ scared face)
*FOR-LOOPS (discomfor-with, why are they instant?)
*delaying code
*push(), pop().
*/

let goodFace = undefined;

/**
Description of preload
*/
function preload() {
  goodFace = loadImage('assets/images/chibi-yuji.png');
  badFace = loadImage('assets/images/chibi-suk.png');
}


/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);

}


/**
Description of draw()
*/
function draw() {
background(0);

imageMode(CENTER);

translate(width/2, height/2);
if (mouseX < width/2){
  image(goodFace, 0, 0, 400, 400);
} else {
  image(badFace, width/2, height/2, 400, 400);
}
}
