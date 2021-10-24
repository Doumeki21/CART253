/**
Exercise 05: Juggle Garden
Olenka Yuen

Brief:
1. Add another form of user control (keyboard controlled side-paddle)
2. Add a new class and objects. (don't touch square?)
3.  at least 2 endings. (1. timeup = good ed, 2. ball touches outside canvas gameover.)
*/

"use strict";

let gravityForce = 0.00025;

let paddleBottom;
let paddleTop;

let balls = [];
let numBalls = 15;

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddleBottom = new PaddleVertical(300, 20, height - 30);
  paddleTop = new PaddleVertical(300, 20, 30)

  for (let i=0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    //put ball into the balls array
    balls.push(ball);
  }
}

function draw() {
  background(0);

  paddleTop.move();
  paddleTop.display();

  paddleBottom.move();
  paddleBottom.display();

  for (let i=0; i<balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddleTop);
      ball.bounce(paddleBottom);
      ball.display();
    }
  }
}
