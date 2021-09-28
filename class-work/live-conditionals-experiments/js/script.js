
"use strict";


/**
PLAN:
* Multiple images (happy/ scared face)
*FOR-LOOPS (discomfor-with, why are they instant?)
*delaying code
*push(), pop().
*/

let goodFace = undefined;
let badFace = undefined;
let normalFace = undefined;

let face = {
  x: 250,
  y: 250,
  terrorthreshold:200,
  image: undefined,
}

/**
Description of preload
*/
function preload() {
  goodFace = loadImage('assets/images/chibi-yuji.png');
  badFace = loadImage('assets/images/chibi-suk.png');
  normalFace = loadImage('assets/images/clown.png');
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

let x = 20;
let y = height/2;
let size = 40;
//Count from 0 to 10
for (let i=0; i < 10; i++){
  noFill();
  stroke(255);
  ellipse(x + i*size, y, size);
}

}
