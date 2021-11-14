"use strict";

/**************************************************
Exercise 06: Make Some Noise
Olenka Yuen

Producing a prototype for the sound aspect of the final project.

Goal:

**************************************************/

let meter = {
  x: undefined,
  y: undefined,
  width: 20,
  height: 200,
}

let progressBar = {
  x: undefined,
  y: undefined,
  width: 10,
  height: 20,
}

let ball = {
  x: undefined,
  y: undefined,
  size: 75,
}

function setup() {
  createCanvas(600, 600);

  meter.x = 30;
  meter.y = height - 50;

  progressBar.x = 30;
  progressBar.y = height - 50;
}

function draw() {
  background(255, 200, 200);

  ball.x = mouseX;
  ball.y = mouseY;

  //ball
  push();
  fill(64, 123, 167);
  noStroke();
  ellipse(ball.x, ball.y, ball.size);
  pop();

  //meter
  push();
  noStroke();
  fill(255, 200);
  rectMode(CENTER);
  rect(meter.x, meter.y - meter.height / 2, meter.width, meter.height);
  pop();

  //progressBar
  push();
  noStroke();
  fill(255, 150, 150);
  rectMode(CENTER);
  rect(progressBar.x, progressBar.y - progressBar.height / 2, progressBar.width, progressBar.height);
  pop();
}
