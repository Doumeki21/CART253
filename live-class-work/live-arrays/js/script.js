
/**************************************************
live: arrays
Olenka Yuen



**************************************************/

"use strict";

let user = {
  x: undefined,
  y: undefined,
  size: 100,
};

function setup() {
  createCanvas(500 ,500);
  noCursor();


}

function draw() {
  background(0);

  handleInput();
  displayUser();
}

function handleInput() {
  user.x = mouseX;
  user.y = mouseY;
}

function displayUser() {
  push();
  noFill()
  stroke(255, 100, 0);
  ellipse(user.x, user.y, user.size);
  pop();
}
