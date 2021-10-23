/**
Activity 08: Object Oriented Programming Activity.
Olenka Yuen

plan
1. defined a paddle class
2. Set up main Programm.
3.  define a ball class.
4. Add balls to main program.
5. Make balls bounce on paddle.
*/

"use strict";

let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 20;

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300, 20);

  for (let i=0; i < numBalls; i++) {
    let x =random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    //put ball into the balls array
    balls.push(ball);
  }
}

function draw() {
  background(0);

  paddle.move();
  paddle.display();

  for (let i=0; i<balls.length; i++) {
    let ball = balls[i];
    ball.gravity(gravityForce);
    ball.move();
    ball.bounce();
    ball.display();
  }
}
