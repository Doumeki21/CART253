/**
Functions
Olenka Yuen

Vid 5.1 FUNCTIONS
vid 5.2 w parameters
vid 5.3 w return values
vid 5.4 text
*/

"use strict";

let hello = {
  string: `Hello, world!`,
  x: 250,
  y: 0,
  vx: 1,
  vy: 4,
  size: 40,
};

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(0);

  //hello.x += hello.vx;
  hello.y += hello.vy

  hello.size ++;

  textAlign(CENTER,CENTER);
  textStyle(BOLD);
  textSize(hello.size);

  fill(200, 50, 50);
  stroke(255);
  strokeWeight(4);

  text(hello.string, hello.x, hello.y);
}
