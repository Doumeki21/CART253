"use strict";

/**************************************************
Exercise 06: Make Some Noise
Olenka Yuen

Producing a prototype for the sound aspect of the final project.

Goal:

**************************************************/

let barkSFX;

let ball = {
  x: undefined,
  y: undefined,
  size: 75,
};

let hoop = {
  x: undefined,
  y: undefined,
  width: 110,
  height: 50,
};

let progressBar = {
  x: undefined,
  y: undefined,
  width: 10,
  minHeight: 20,
  maxHeight: 200,
  currentHeight: undefined,
};

let meter = {
  x: undefined,
  y: undefined,
  width: 20,
  height: 200,
};

function preLoad() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(600, 600);
  userStartAudio();
  angleMode(DEGREES);

  hoop.x = width - 100;
  hoop.y = height / 2 - 100;

  meter.x = 30;
  meter.y = height - 50;

  progressBar.x = 30;
  progressBar.y = height - 50;

  progressBar.currentHeight = progressBar.minHeight;
}

function draw() {
  background(255, 200, 200);
  // let newRate = map(progressBar.currentHeight, progressBar.minHeight, progressBar.maxHeight, 1, 10);
  // barkSFX.rate(newRate);

  ball.x = mouseX;
  ball.y = mouseY;

  //Check ball inside hoop
  if (ball.x + ball.size / 2 > hoop.x -   hoop.width / 2 &&
    ball.x - ball.width / 2 < hoop.x + hoop.width / 2 &&
    ball.y + ball.size / 2 > hoop.y - hoop.height / 2 &&
    ball.y - ball.size / 2 > hoop.y + hoop.height / 2) {
    //score point
    console.log(progressBar.currentHeight);
    progressBar.currentHeight += 20;
    // barkSFX.play();
  }

  //ball
  push();
  fill(64, 123, 167);
  noStroke();
  ellipse(ball.x, ball.y, ball.size);
  pop();

  //hoop
  push();
  noFill();
  strokeWeight(5);
  stroke(255, 200);
  arc(hoop.x, hoop.y, hoop.width, hoop.height, 0, 360);
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
  fill(224, 100, 100);
  rectMode(CENTER);
  rect(progressBar.x, progressBar.y - progressBar.currentHeight / 2, progressBar.width, progressBar.currentHeight);
  pop();
}
