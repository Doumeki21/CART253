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

let paddle;

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300, 20);
}

function draw() {
  background(0);

  paddle.move();
  paddle.display();
}
