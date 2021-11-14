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
  edgeHeight: undefined,
  currentHeight: undefined,
};

let meter = {
  x: undefined,
  y: undefined,
  width: 20,
  height: 200,
};

let scoreCanChange = false;

function preload() {
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

  progressBar.edgeHeight = 0;
  progressBar.currentHeight = progressBar.minHeight;
}

function draw() {
  background(255, 200, 200);
  let newRate = map(progressBar.currentHeight, progressBar.minHeight, progressBar.maxHeight, 1, 8);
  barkSFX.rate(newRate);

  ball.x = mouseX;
  ball.y = mouseY;

  //Check ball inside hoop
  if (ball.x + ball.size / 2 > hoop.x &&
    ball.x - ball.size / 2 < hoop.x &&
    ball.y + ball.size / 2 > hoop.y &&
    ball.y - ball.size / 2 < hoop.y) {
    //score point!
    if (scoreCanChange === true) {
      progressBar.currentHeight += 20;
      barkSFX.play();
      scoreCanChange = false;
    }
  }
  else {
    scoreCanChange = true;
  }

//Check bar increase.
  if (progressBar.currentHeight >= progressBar.maxHeight) {
    push();
    fill(64, 123, 167);
    strokeWeight(30);
    textSize(30);
    text(`YOU DID IT!`, 100, 100);
    pop();
  }
  else if (progressBar.y - progressBar.currentHeight/2 <= 0) {
    push();
    fill(64, 123, 167);
    strokeWeight(30);
    textSize(30);
    text(`OUT OF THIS WORLD!`, 100, 100);
    pop();
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
