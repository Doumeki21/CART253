/**
P1: Indecision
Olenka Yuen

Objectives
  -Handling different forms of user input
  -Organizing code with functions
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
  fill: 255,

  angle: 0,
};

//Any screen: title, gameplay...
let state = `title`;

//Key controls for top paddle.
const keyA = 65;
const keyD = 68;

//Load assets.
// function preload() {
//   sfx = loadSound('assets/sounds/hit.mp3');
//   bgMusic = loadSound('assets/sounds/Hit01-leshylabs.mp3');
// }

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  //Position the paddles.
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

  //Simulation title.
  if (state === `title`) {
    title();
  }
  //Simulation.
  else if (state === `simulation`) {
    simulation();
  }
}

//Display title of the simulation.
function title() {
  push();
  textSize(100);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`INDECISION`, width / 2, height / 2);
  pop();

  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`USE 'A' AND 'D' TO CONTROL THE UPPER PADDLE.\n USE THE MOUSE TO CONTROL THE LOWER PADDLE.`, width / 2, height / 2 + 150);
  pop();
}

//Evrything that happens in the simulation.
function simulation() {
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
}

function displayScore() {
  textSize(30);
  push();
  fill(66, 255, 151);
  //Top paddle score
  text(`DO IT: ${rectTop.scoreCount}`, 50, 80);
  pop();
  //Bottom paddle score.
  push();
  fill(255, 95, 66);
  text(`DON'T \nDO IT: ${rectBottom.scoreCount}`, width - 150, height - 80);
}

function drawBall() {
  if (rectTop.scoreCount > rectBottom.scoreCount) {
    ball1.fill = fill(66, 255, 151);
  } else {
    ball1.fill = fill(255, 95, 66);
  }
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

function mouseClicked() {
  if (state === `title`) {
    state = `simulation`;
  }
}
