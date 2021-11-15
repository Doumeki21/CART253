"use strict";

let redCircle = {
  x: undefined,
  y: undefined,
  size: 50,
  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
};

let greenCircle = {
  x: undefined,
  y: undefined,
  size: 50,
  fill: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let redSquare = {
  x: undefined,
  y: undefined,
  size: 50,
  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
};

let greenSquare = {
  x: undefined,
  y: undefined,
  size: 50,
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

  redCircle.x = width/2 + 100;
  redCircle.y = height/2 - 100;

  greenCircle.x = width/2 + 100;
  greenCircle.y = height/2 - 50;

  redSquare.x = width/2 + 100;
  redSquare.y = height/2 + 50;

  greenSquare.x = width/2 + 100;
  greenSquare.y = height/2 + 100;
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

}
