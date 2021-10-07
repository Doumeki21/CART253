/**
Title of Project
Olenka Yuen

Objectives
  *Handling different forms of user input
  *Organizing code with functions
  *Making things interesting with conditionals and variables
  *Combining aesthetics, interaction and concept

Brief
  *(Personal) Metaphorical simulation. // Mental health??

Requirements
  *At least two moving elements
  *Interactivity
  *Aesthetic, conceptual, and procedural harmony (visual, sound, and user-input should work harmoniously!)
  *Beginning, middle, and end!

Advice
  *START SMALL
  *ATOM BEAUTIFY
*/

"use strict";

let rectBottom = {
  x: 0,
  y: 0,
  width: 200,
  height: 20,
}

let rectTop = {
  x: 0,
  y: 0,
  width: 200,
  height: 20,
  speedX: 30,
}

let ball1 = {
  x: 250,
  y: 250,
  size: 50,

  vx: undefined,
  vy: undefined,
  speedX: 15,
  speedY: 10,
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  rectTop.x = width / 2;
  rectTop.y = 30;
  rectBottom.x = width / 2;
  rectBottom.y = height - 30;

  reset();
}

//Ball resets position every score.
function reset() {
  ball1.vx = random(-ball1.speedX, ball1.speedX);
  ball1.vy = ball1.speedY;

  ball1.x = width / 2;
  ball1.y = height / 2;
}

/**
Description of draw()
*/
function draw() {
  background(0);
  //Bottom user.
  //Bottom user control.
  rectBottom.x = constrain(mouseX, 0, width);
  //Top user control.
  //handleInput()
  if (keyIsDown(LEFT_ARROW)) {
    rectTop.vx = -rectTop.speedX;
  } else if (keyIsDown(RIGHT_ARROW)) {
    rectTop.vx = rectTop.speedX;
  } else {
    rectTop.vx = 0;
  }

  rectTop.x += rectTop.vx;
  rectTop.x = constrain(rectTop.x, 0, width);

  //Move ball1
  ball1.x += ball1.vx;
  ball1.y += ball1.vy;

  //Ball to wall contact (needs to be put before constrain!)
  //edges();
  //Ball bounce.
  if (ball1.x > width || ball1.x < 0) {
    ball1.vx *= -1;
    //ball1 constrain in window.
    ball1.x = constrain(ball1.x, 0, width);
    // ball1.y = constrain(ball1.y, 0, height);
  }

  //Points.
  if (ball1.y > height) {
    reset();
  }
  if (ball1.y < 0) {
    reset();
  }

  checkCollision();
  drawBall();
  drawPaddle();
}

function checkCollision() {

}

function drawBall() {
  //Draw ball1.
  ellipse(ball1.x, ball1.y, ball1.size);
}

function drawPaddle() {
  //Display bottom user.
  fill(255);
  rectMode(CENTER);
  rect(rectBottom.x, rectBottom.y, rectBottom.width, rectBottom.height);
  //Display top user.
  rectMode(CENTER);
  rect(rectTop.x, rectTop.y, rectTop.width, rectTop.height);
}
