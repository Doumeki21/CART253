"use strict";

let shape = {
  x: undefined,
  y: undefined,
  size: 200,

};

let x = 10;

function setup() {
  createCanvas(700, 300);
  shape.x = width / 4;
  shape.y = height / 2;
}

function draw() {
  background(0);


   drawShpae();

}


function drawShpae() {
  push();
  // Select the fill based on mouseover
  if (isMouseInside()) {
    fill(255, 0, 0);
  } else {
    fill(255, 255, 0);
  }
  ellipse(shape.x, shape.y, shape.size);
  pop();
}

function isMouseInside() {
  let d = dist(mouseX, mouseY, shape.x, shape.y);
  if (d < shape.size/2) {
    return true;
  } else {
    return false;
  }
}

function drawBoundary() {
  push();
  stroke(255);
  line(width/2, 0, width/2, height);
  pop();
}
