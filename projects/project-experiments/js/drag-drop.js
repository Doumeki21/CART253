"use strict";

let field = {
  x: undefined,
  y: undefined,
  size: 500,
};

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


  // //Place the shapes in a column
  // redCircle.x = field.x + field.size / 2 + 100;
  // redCircle.y = height / 2 - 140;
  //
  // greenCircle.y = height / 2 - 10;
  // redSquare.y = height / 2 + 120;
  // greenSquare.y = height / 2 + 250;
}

function draw() {
  background(0);

  // // And then when you're selecting them
  // let firstTask = random(tasks);
  // currentTasks.push(firstTask); // Choose one random task
  // let secondTask = random(tasks); // Choose a second random task
  // // Check if the second task is the same as the first and re-choose until it's not
  // while (secondTask === firstTask) {
  //   secondTask = random(tasks); // Choose a different random task
  // }
  // curentTasks.push(secondTask);
  // // Now you have an array called currentTasks with two different random tasks in it

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
    //
    // console.log(shape);
  }

  // //redCircle
  // push();
  // stroke(255);
  // fill(redCircle.fill.r, redCircle.fill.g, redCircle.fill.b);
  // ellipse(redCircle.x, redCircle.y, redCircle.size);
  // pop();
  //
  // //greenCircle
  // push();
  // stroke(255);
  // fill(greenCircle.fill.r, greenCircle.fill.g, greenCircle.fill.b);
  // ellipse(field.x + field.size / 2 + 100, greenCircle.y, greenCircle.size);
  // pop();
  //
  // //redSquare
  // push();
  // stroke(255);
  // rectMode(CENTER);
  // fill(redSquare.fill.r, redSquare.fill.g, redSquare.fill.b);
  // rect(field.x + field.size / 2 + 100, redSquare.y, redSquare.size);
  // pop();
  //
  // //greenSquare
  // push();
  // stroke(255);
  // rectMode(CENTER);
  // fill(greenSquare.fill.r, greenSquare.fill.g, greenSquare.fill.b);
  // rect(field.x + field.size / 2 + 100, greenSquare.y, greenSquare.size);
  // pop();
}

// function mouseInsideObject() {
//   //Get dist b/w mouse and shape
//   let d = dist(mouseX, mouseY, redCircle.x, redCircle.y);
//   if (d < redCircle.size / 2) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// function objectInsideField() {
//   //Get dist b/w object and field
//   let d = dist(redCircle.x, redCircle.y, field.x, field.y);
//   if (d < field.size / 2) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// function drag() {
//   if (redCircle.isBeingDragged) {
//     //Drag object
//     redCircle.x = mouseX + redCircle.offsetX;
//     redCircle.x = constrain(mouseX, 0, width);
//     redCircle.y = mouseY + redCircle.offsetY;
//     redCircle.y = constrain(mouseY, 0, height);
//   }
// }

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
