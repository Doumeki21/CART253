/**
Activity 04: Dodging Covid-19
Olenka Yuen

A Covid-19 simulation!

PLAN:
.A COVID circle moves across the screen, starting at random y.
.The COVID circle moves back to the left once it touches the right side.
.User circle at mouse location.
. If the 2 circles overlap, program stops.
."Display random static in the background for a visual flourish."
."Hide the mouse cursor."
*/

"use strict";


let covid19 = {
  x: 0,
  y: 250,
  size: 100,

  vx: 0,
  vy: 0,
  speed: 5,

  fill: {
    r: 255,
    g: 0,
    b: 0,
  }
};


/**
Canvas setup.
*/
function setup() {
  createCanvas(windowWidth, windoHeight);

  covid19.y = random(0, height);
  covid19.vx = covid19.speed;

}


/**
Description of draw()
*/
function draw() {

}
