/**
Exercise 05: Juggle Garden
Olenka Yuen

Brief:
1. Add another form of user control (keyboard controlled side-paddle)
2. Add a new class and objects. (don't touch square?)
3.  at least 2 endings. (1. timeup = good ed, 2. ball touches outside canvas gameover.)
*/

"use strict";

let ballGravityForce = 0.0025;

let paddleBottom;
let paddleTop;

let balls = [];
let numBalls = 15;

let squareEmerge = false;

let state = `title`;

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  reset();
}

function reset() {
  paddleBottom = new PaddleVertical(300, 20, height - 30);
  paddleTop = new PaddleVertical(300, 20, 30)

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    //put ball into the balls array
    balls.push(ball);
  }
}

function draw() {
  background(0);

  //Screen title.
  if (state === `title`) {
    title();
  }
  //Instructions
  else if (state === `instructions`) {
    instructions();
  }
  //game
  else if (state === `game`) {
    game();
  }
}

function title() {
  //title
  push();
  textSize(100);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`CONTAIN`, width / 2, height / 2);
  pop();

  //Next step
  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`CLICK TO CONTINUE`, width / 2, height - 100);
  pop();
}

function instructions() {
  push();
  textSize(30);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`STAY ON TASK WITH YOUR WORK BY`, width / 2, height / 2);
  pop();

  push();
  textSize(30);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`MOVING THE TOP/ BOTTOM PADDLES WITH YOUR MOUSE AND\n PRESSING "W" AND "S" TO MOVE THE SIDE PADDLES.`, width / 2, height / 2 + 60);
  pop();

  push();
  textSize(30);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`CAREFUL NOT TO GET DISTRACTED!`, width / 2, height / 2 + 200);
  pop();

  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`CLICK TO CONTINUE`, width / 2, height - 100);
  pop();
}

function game() {
  paddleTop.move();
  paddleTop.display();

  paddleBottom.move();
  paddleBottom.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(ballGravityForce);
      ball.move();
      ball.bounce(paddleTop);
      ball.bounce(paddleBottom);
      ball.display();
    }
  }
}

function mouseClicked() {
  if (state === `title`) {
    state = `instructions`;
  } else if (state === `instructions`) {
    state = `game`;
  }
}
