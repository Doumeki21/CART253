"use strict";

let redCircle = {
  x: undefined,
  y: undefined,
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
  size: 80,
  fill: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let field = {
  x:undefined,
  y:undefined,
  size: 500,
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  reset();
}

function reset() {
  field.x = width/2;
  field.y = height/2 + 50;

  redCircle.y = height/2 - 140;

  greenCircle.y = height/2 - 10;

  redSquare.y = height/2 + 120;

  greenSquare.y = height/2 + 250;
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

  //shapes
  push();
  noStroke();
  fill(redCircle.fill.r, redCircle.fill.g, redCircle.fill.b);
  ellipse(field.x + field.size/2 + 100, redCircle.y, redCircle.size);
  pop();

  push();
  noStroke();
  fill(greenCircle.fill.r, greenCircle.fill.g, greenCircle.fill.b);
  ellipse(field.x + field.size/2 + 100, greenCircle.y, greenCircle.size);
  pop();

  push();
  noStroke();
  rectMode(CENTER);
  fill(redSquare.fill.r, redSquare.fill.g, redSquare.fill.b);
  rect(field.x + field.size/2 + 100, redSquare.y, redSquare.size);
  pop();

  push();
  noStroke();
  rectMode(CENTER);
  fill(greenSquare.fill.r, greenSquare.fill.g, greenSquare.fill.b);
  rect(field.x + field.size/2 + 100, greenSquare.y, greenSquare.size);
  pop();

}
