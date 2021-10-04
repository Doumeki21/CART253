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

// How many circles in a line to draw?
// Start with 0 because we'll increase over time
// for an animation!
let numCircles = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Use a for loop to draw out circles up to the number of
  // circles currently set in numCircles
  for (let i = 0; i < numCircles; i--) {
    // Draw a circle, use i to control where on the canvas
    // we draw it so that we can draw them in a row
    ellipse(i * 20, height/2, 20);
  }

  // Increase the number of circles to draw next time
  // By using a fractional number we can change the animation
  // speed a bit (one circle every ten frames in this case)
  numCircles -= 0.01;
}
