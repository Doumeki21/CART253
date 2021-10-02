/**
Activity 05: Looking for Love!
Olenka Yuen

PLAN:
*title screen.
*2 circles in darkness.
*each move off in random direction.
*If they touch each other,
victory. if one runs off the edge, bad end.
*/

"use strict";

let lover1 = {
  x: 150,
  y: 250,
  size:100,
  vx: 0,
  vy: 0,
  speed: 3,
}

let lover2 = {
  x: 350,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
}


function setup() {
  createCanvas(500, 500);

  setupCircles();
}

function setupCircles() {
  //Circle position sperated from one another.
    lover1.x = width/3;
    lover2.x = 2*width/3;

    //Circles start moving in random directions
    lover1.vx = random(-lover1.speed, lover1.speed);
    lover1.vy = random(-lover1.speed, lover1.speed);
    lover2.vx = random(-lover2.speed, lover2.speed);
    lover2.vy = random(-lover2.speed, lover2.speed);
}

function draw() {
  background(0);

  move();
  checkOffScreen();
  checkOverlap();
  display();
}

function move() {
  //Move circles.
  lover1.x += lover1.vx;
  lover1.y += lover1.vy;

  lover2.x += lover2.vx;
  lover2.y += lover2.vy;
}

function checkOffScreen() {
  //Have the circles gone off screen?
  if (lover1.x < 0 || lover1.x > width || lover1.y < 0 || lover1.y > height || lover2.x < 0 || lover2.x > width || lover2.y < 0 || lover2.y > height) {
    // sad ending.
  }
}

function checkOverlap() {
  //check if circles overlap.
  let d = dist(lover1.x, lover1.y, lover2.y, lover2.y)
  if (d < lover1.size/2 + lover2.size/2) {
    //LOVE ENDING.
  }
}

function display() {
  //Display circles.
  ellipse(lover1.x, lover1.y, lover1.size);
  ellipse(lover2.x, lover2.y, lover2.size);
}
