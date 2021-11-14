/**
Activity 10: Musical toy
Olenka Yuen

A program that plays music based on primitive physics.

PLAN:
    - Write a basic Ball class
    - Integrate the class into the main script
    - Add an oscillator to the Ball class
    - Add a synthesizer to the Ball class
*/

"use strict";

let balls = [];

//F-minor
let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`];

// Draw the canvas.
function setup() {
  createCanvas(600, 600);

  userStartAudio();
}

//
function draw() {
  background(0);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

function mousePressed() {
  createBall(mouseX, mouseY);
}

function createBall(x, y) {
  let note = random(notes)
  let ball = new Ball(x, y, note);
  balls.push(ball);
}
