/**
Exercise 03: Love, actually
Olenka Yuen

GOAL: bring the 2 circles together!

PLAN:
.title screen.
.2 circles.
.Reach the child using the keyboard arrows!
*Once the circles touch- new random position for each circle.
*Add a score count?

REQUIREMENTS:
*Own if statemetnts
*working with loops for drawing.
.User control circle.
.Non-user circle move differently.
*extra function
*extra ending.
*/

"use strict";


let timer = {
  x: 100,
  y: 150,
  size: 20,

  alpha: 0,
  fadeAmount: 0.5,
}


function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(0);
  noStroke();
  fill(255, timer.alpha);



  let x = timer.x;
  let numCircles = 5;
  let circlesDrawn = 0;

  for (let i = numCircles; i >= 0; i--) {
    if (timer.alpha < 0) timer.fadeAmount = 1;
    if (timer.alpha > 255) timer.fadeAmount = -1;

    timer.alpha += timer.fadeAmount;

    ellipse(x, timer.y, timer.size);
    circlesDrawn += 1;
    x += 40;
  }
}
