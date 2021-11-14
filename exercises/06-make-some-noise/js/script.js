"use strict";

/**************************************************
Exercise 06: Make Some Noise
Olenka Yuen

Producing a prototype for the sound aspect of the final project.

Goal:
Put the ball inside the hoop to increase the progress bar!
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

let scoreCanChange = false;

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

//set initial state of elements.
function setup() {
  createCanvas(600, 600);
  userStartAudio();
  angleMode(DEGREES);

  //Hoop placed near the right side of the canvas.
  hoop.x = width - 100;
  hoop.y = height / 2 - 100;

  //the base of the progressBar placed near the bottom left corner
  meter.x = 30;
  meter.y = height - 50;

  //the progressBar placed near the bottom left corner
  progressBar.x = 30;
  progressBar.y = height - 50;

  //progress bar begins at its minimum height.
  progressBar.currentHeight = progressBar.minHeight;
}

function draw() {
  //Pink background.
  background(255, 200, 200);

//Sound pitch raises as it fills the bar.
  let newRate = map(progressBar.currentHeight, progressBar.minHeight, progressBar.maxHeight, 1, 8);
  barkSFX.rate(newRate);

//mouse controls the ball.
  ball.x = mouseX;
  ball.y = mouseY;

  //Check if ball is inside hoop
  if (ball.x + ball.size / 2 > hoop.x &&
    ball.x - ball.size / 2 < hoop.x &&
    ball.y + ball.size / 2 > hoop.y &&
    ball.y - ball.size / 2 < hoop.y) {
    //if it is, scores point once.
    if (scoreCanChange === true) {
      progressBar.currentHeight += 20;
      barkSFX.play();
      scoreCanChange = false;
    }
  }
  //Once ball is outside the hoop, it can score again.
  else {
    scoreCanChange = true;
  }

  //Check bar fill amount.
  //If bar reaches maximum meter height,
  if (progressBar.currentHeight >= progressBar.maxHeight) {
    //print this text.
    push();
    fill(64, 123, 167);
    strokeWeight(30);
    textSize(30);
    text(`YOU DID IT!`, 100, 100);
    pop();
  }
  //If ball reaches canvas edge,
  if (progressBar.y - progressBar.currentHeight < 0) {
    //print this text.
    push();
    fill(64, 123, 167);
    strokeWeight(30);
    textSize(30);
    text(`OUT OF THIS WORLD!`, 100, 150);
    pop();
  }

  //Display ball
  push();
  fill(64, 123, 167);
  noStroke();
  ellipse(ball.x, ball.y, ball.size);
  pop();

  //Display hoop
  push();
  noFill();
  strokeWeight(5);
  stroke(255, 200);
  arc(hoop.x, hoop.y, hoop.width, hoop.height, 0, 360);
  pop();

  //Display meter
  push();
  noStroke();
  fill(255, 200);
  rectMode(CENTER);
  rect(meter.x, meter.y - meter.height / 2, meter.width, meter.height);
  pop();

  //Display progressBar
  push();
  noStroke();
  fill(224, 100, 100);
  rectMode(CENTER);
  rect(progressBar.x, progressBar.y - progressBar.currentHeight / 2, progressBar.width, progressBar.currentHeight);
  pop();
}
