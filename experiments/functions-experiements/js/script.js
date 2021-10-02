/**
Functions
Olenka Yuen

Vid 5.1 Functions
*/

"use strict";

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy: 0,
};

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

  move();
  wrap();
  display();
}

function move() {
  circle.x += circle.vx;
  circle.y += circle.vy;
}

function wrap() {
  if (circle.x > width) {
    reset();
  }
}

function display() {
  fill(255, 0, 0);
  ellipse(circle.x, circle.y, circle.size);
}

function reset() {
  circle.x = 0;
  circle.vx += 2;
  circle.vy -= 0.25
  circle.size += 5;
}

function mousePressed() {
  reset();
}
