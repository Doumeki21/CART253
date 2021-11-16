"use strict";

let redCircle = {
  x: undefined,
  y: undefined,
  isBeingDragged: false,
  size: 80,
  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
};

let greenCircle = {
  x: undefined,
  y: undefined,
  isBeingDragged: false,
  size: 80,
  fill: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let redSquare = {
  x: undefined,
  y: undefined,
  isBeingDragged: false,
  size: 80,
  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
};

let greenSquare = {
  x: undefined,
  y: undefined,
  isBeingDragged: false,
  size: 80,
  fill: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let field = {
  x: undefined,
  y: undefined,
  size: 500,
};

let tasks = [`redCircle`, `redSquare`, `greenCircle`, `greenSquare`];
let maxTask = 2;
let yourTask = `Your task`;

// At the top somewhere
let currentTasks = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

  reset();
}

function reset() {
  //reset array.
  let tasks = [];

//Field is at the center, under the title
  field.x = width / 2;
  field.y = height / 2 + 50;

//Place the shapes in a column
  redCircle.y = height / 2 - 140;
  greenCircle.y = height / 2 - 10;
  redSquare.y = height / 2 + 120;
  greenSquare.y = height / 2 + 250;
}

function draw() {
  background(0);

  // for (let i = 0; i < maxTask; i++) {
  //   yourTask = random(tasks)
  // }

  // And then when you're selecting them
  let firstTask = random(tasks);
  currentTasks.push(firstTask); // Choose one random task
  let secondTask = random(tasks); // Choose a second random task
  // Check if the second task is the same as the first and re-choose until it's not
  while (secondTask === firstTask) {
    secondTask = random(tasks); // Choose a different random task
  }
  curentTasks.push(secondTask);
  // Now you have an array called currentTasks with two different random tasks in it


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

  //shapes
  //redCircle
  push();
  noStroke();
  fill(redCircle.fill.r, redCircle.fill.g, redCircle.fill.b);
  ellipse(field.x + field.size / 2 + 100, redCircle.y, redCircle.size);
  pop();

  //greenCircle
  push();
  noStroke();
  fill(greenCircle.fill.r, greenCircle.fill.g, greenCircle.fill.b);
  ellipse(field.x + field.size / 2 + 100, greenCircle.y, greenCircle.size);
  pop();

  //redSquare
  push();
  noStroke();
  rectMode(CENTER);
  fill(redSquare.fill.r, redSquare.fill.g, redSquare.fill.b);
  rect(field.x + field.size / 2 + 100, redSquare.y, redSquare.size);
  pop();

  //greenSquare
  push();
  noStroke();
  rectMode(CENTER);
  fill(greenSquare.fill.r, greenSquare.fill.g, greenSquare.fill.b);
  rect(field.x + field.size / 2 + 100, greenSquare.y, greenSquare.size);
  pop();
}
