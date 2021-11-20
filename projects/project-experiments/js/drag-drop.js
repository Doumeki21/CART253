"use strict";

let field = {
  x: undefined,
  y: undefined,
  size: 500,
};

let taskShape = undefined;
let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  reset();
}

function reset() {

  //Field is at the center, under the title
  field.x = width / 2;
  field.y = height / 2 + 50;

  shapes[0] = new Shape(field.x + field.size / 2 + 100, height / 2 - 140, color(255, 0, 0), `circle`);

  shapes[1] = new Shape(field.x + field.size / 2 + 100, height / 2 - 10, color(0, 255, 0), `circle`);

  shapes[2] = new Shape(field.x + field.size / 2 + 100, height / 2 + 120, color(255, 0, 0), `square`);

  shapes[3] = new Shape(field.x + field.size / 2 + 100, height / 2 + 250, color(0, 255, 0), `square`);

}

function draw() {
  background(0);

  //TITLE
  push();
  textSize(100);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`TASK`, width / 2, 100);
  pop();

  //field
  push();
  strokeWeight(5);
  stroke(212);
  noFill();
  rectMode(CENTER);
  rect(field.x, field.y, field.size);
  pop();

  // Shapes
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.display();
    shape.mouseInsideObject();
    shape.drag();
    shape.objectInsideField();
  }
}

function mousePressed() {
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];

    if (shape.mouseInsideObject()) {
      shape.isBeingDragged = true;
    }
  }
}

function mouseReleased() {
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];

    if (shape.isBeingDragged) {
      shape.isBeingDragged = false;
    }
  }
}
