/**
Exercise 03: Love, actually
Olenka Yuen

GOAL: bring the 2 circles together!

PLAN:
*title screen. (Parellel Worlds: The fate that brings us together.)
*2 lost circles.
*Search for the lost one using the keyboard arrows!
*Once the circles touch- new random position for each cirlce.
*Add a score count?
*/

"use strict";

let user = {
  x: 250,
  y: 250,
  size:100,
  vx: 0,
  vy: 0,
  speed: 3,
}
let lover = {
  x: 250,
  y: 250,
  size:100,
  vx: 0,
  vy: 0,
  speed: 6,
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  lover.vx = random(-lover.speed, lover.speed);
  lover.vy = random(-lover.speed, lover.speed);

  lover.x += lover.vx;
  lover.y += lover.vy;

  ellipse(lover.x, lover.y, lover.size);

}
