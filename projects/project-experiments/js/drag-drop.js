"use strict";

let field = {
  x: undefined,
  y: undefined,
  size: 500,
};

let taskShape = undefined;
let shapes = [];
// let countTask = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  reset();
}

function reset() {

  //Field is at the center, under the title
  field.x = width / 2;
  field.y = height / 2 + 50;

  shapes[0] = new Shape(field.x + field.size / 2 + 100, height / 2 - 140, color(255, 0, 0), `circle`, `ruby infinite-sided polygon`);

  shapes[1] = new Shape(field.x + field.size / 2 + 100, height / 2 - 10, color(0, 255, 0), `circle`, `lime infinite-sided polygon`);

  shapes[2] = new Shape(field.x + field.size / 2 + 100, height / 2 + 120, color(255, 0, 0), `square`, `vermillion four-sided polygon`);

  shapes[3] = new Shape(field.x + field.size / 2 + 100, height / 2 + 250, color(0, 255, 0), `square`, `jade four-sided polygon`);

  //Generate taskShape
  taskShape = random(shapes);
}

function draw() {
  background(0);

  //TITLE
  // push();
  // textSize(60);
  // fill(255);
  // textAlign(CENTER, CENTER);
  // text(`TASK`, width / 2, 70);
  // pop();

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

  //Display task
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(`Place the ${taskShape.name} in the box.`, width / 2, field.y - field.size / 2 - 30);
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

    if (shape.x < field.x + field.size / 2 &&
      shape.x > field.x - field.size / 2 &&
      shape.y < field.y + field.size / 2 &&
      shape.y > field.y - field.size / 2) {

      if (taskShape === shape) {
        reset();
      }
    }
  }
}
