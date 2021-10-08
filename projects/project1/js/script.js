/**
P1: Indecision
Olenka Yuen

Objectives
  -Handling different forms of user input
  *Organizing code with functions
  *Making things interesting with conditionals and variables
  *Combining aesthetics, interaction and concept

Brief
  -(Personal) Metaphorical simulation. // Mental health??

Requirements
  -At least two moving elements
  -Interactivity
  *Aesthetic, conceptual, and procedural harmony (visual, sound, and user-input should work harmoniously!)
  *Beginning, middle, and end!

Advice
  *START SMALL
  *ATOM BEAUTIFY
*/

"use strict";

//Bottom paddle.
let rectBottom = {
  x: 0,
  y: 0,
  width: 300,
  height: 20,
  scoreCount: 0,
};

//Top paddle.
let rectTop = {
  x: 0,
  y: 0,
  width: 300,
  height: 20,
  speedX: 20,
  scoreCount: 0,
};

//Bouncing ball.
let ball1 = {
  x: 250,
  y: 250,
  size: 50,

  vx: undefined,
  vy: undefined,
  speedX: 15,
  speedY: 10,
};

const keyA = 65;
const keyD = 68;
/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth/2, windowHeight);

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

  movement();
  checkEdge();
  checkPoints();
  checkCollision();
  displayScore();
  drawBall();
  drawPaddle();
}

function movement() {
  //Bottom paddle.
  //Bottom paddle control.
  rectBottom.x = constrain(mouseX, 0, width);
  //Top paddle control.
  //handleInput()
  if (keyIsDown (keyA)) {
    rectTop.vx = -rectTop.speedX;
  } else if (keyIsDown (keyD)) {
    rectTop.vx = rectTop.speedX;
  } else {
    rectTop.vx = 0;
  }

  rectTop.x += rectTop.vx;
  rectTop.x = constrain(rectTop.x, 0, width);

  //Move ball1
  ball1.x += ball1.vx;
  ball1.y += ball1.vy;
}

function checkEdge() {
  //Ball to wall contact (needs to be put before constrain!)
  //Ball bounce.
  if (ball1.x > width || ball1.x < 0) {
    ball1.vx *= -1;
    //ball1 constrain in window.
    ball1.x = constrain(ball1.x, 0, width);
    // ball1.y = constrain(ball1.y, 0, height);
  }
}

function checkPoints() {
  //If ball hits the top or bottom edge of canvas.
  if (ball1.y > height) {
    //Points for top paddle.
      reset();
      rectTop.scoreCount++;
    }
  if (ball1.y < 0) {
    //Points for bottom paddle.
      reset();
      rectBottom.scoreCount++;
  }
}

//Once ball hits bottom user.
function checkCollision() {
  //Bottom paddle collision.
  if (ball1.x + ball1.size/2 > rectBottom.x - rectBottom.width/2 && ball1.x - ball1.size/2 < rectBottom.x + rectBottom.width/2 && ball1.y + ball1.size/2 > rectBottom.y - rectBottom.height/2 && ball1.y - ball1.size/2 < rectBottom.y + rectBottom.height/2) {
    ball1.vx *= -1;
    ball1.vy *= -1;
  }
  //Top paddle collision.
  else if (ball1.x + ball1.size/2 > rectTop.x - rectTop.width/2 && ball1.x - ball1.size/2 < rectTop.x + rectTop.width/2 && ball1.y + ball1.size/2 > rectTop.y - rectTop.height/2 && ball1.y - ball1.size/2 < rectTop.y + rectTop.height/2) {
    ball1.vx *= -1;
    ball1.vy *= -1;
  }
  console.log()
}

function displayScore() {
  fill(255);
  //Score
  text(`DO IT: ${rectTop.scoreCount}`, 100, 100);
}

function drawBall() {
  //Draw ball1.
  push();
  noStroke();
  ellipse(ball1.x, ball1.y, ball1.size);
  pop();
}

function drawPaddle() {
  //Display bottom paddle.
  fill(255);
  rectMode(CENTER);
  rect(rectBottom.x, rectBottom.y, rectBottom.width, rectBottom.height);
  //Display top paddle.
  rectMode(CENTER);
  rect(rectTop.x, rectTop.y, rectTop.width, rectTop.height);
}
