/**
Title of Project
Author Name

7.1 intermediate functions
7.2 Introducing arrays
*/

"use strict";

// let circle = {
//   x: 0,
//   y: 0,
//   size: 100,
//   trail: [],
//   trailSize: 20,
// };
//
// function setup() {
//   createCanvas(600, 600);
// }
//
// function draw() {
//   background(0);
//
//   circle.x = mouseX;
//   circle.y = mouseY;
//
//   for (let i = 0; i < circle.trail.length; i++) {
//     let position = circle.trail[i];
//     ellipse(position.x, position.y, circle.size);
//   }
//
//   ellipse(circle.x, circle.y, circle.size);
//
//   let newTrailPosition = {
//     x: circle.x,
//     y: circle.y,
//   };
//   circle.trail.push(newTrailPosition);
//
//   if (circle.trail.length > circle.trailSize) {
//     circle.trail.shift();
//   }
// }

let images = [];
let numImages = 2
let displayImage;

function preload() {

  for (let i = 0; i < numImages; i++) {
    let selfieImage = loadImage(`assets/images/selfie-${i}.jpg`);
    images.push(selfieImage);
  }
}

function setup() {
  createCanvas(600, 600);

  displayImage = random(images);
}

function draw() {
  background(0);

  push();
  imageMode(CENTER);
  image(displayImage, width / 2, height / 2);
  pop();
}
