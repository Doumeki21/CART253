/**
Title of Project
Author Name

7.1 intermediate functions
7.2 Introducing arrays
*/

"use strict";

let circleX;
let circleY;
let circleSize;

function setup() {
  createCanvas(500, 500);

  circleX = width / 2;
  circleY = height / 2;
}

function draw() {
  background(0);

  drawCircle(circleX, circleY, circleSize);
}

function drawCircle(x, y, size) {
  console.log(`drawCircle(${x},${y},${size})`);
  ellipse(x, y, size);
}
