
"use strict";


/**
PLAN:
* Scrolling an audio on interaction
*Masking an image with an ellipse
*what is JS like without p5
*Pixel data from an image.
*/

let bark;

function preload() {
  bark = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(500, 500);
}

function draw() {

}

function mouseWheel() {
  bark.play();
}

// let clown;
//
// function preload() {
//   clown = loadImage(`assets/images/clown.png`);
// }
//
// function setup() {
//   createCanvas(clown,width, clown.height);
// }
//
// function draw() {
//   background(0);
//
//   clown.loadPixels();
//
//   for (let x = 0; x < clown.width; x++) {
//     for (let y = 0; y < clown.height; y++)
//     clow.pixels[i] += random(-10, 10);
//   }
//
//   clown.updatePixels();
//
//   image(clown, 100, 100);
// }
