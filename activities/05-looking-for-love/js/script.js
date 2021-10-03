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
  x: undefined,
  y: 250,
  size:100,
  vx: 0,
  vy: 0,
  speed: 3,
}

let lover2 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
}

let state = `title`; // title, simulation, love, sadness.

function setup() {
  createCanvas(500, 500);

  setupCircles();
}

function setupCircles() {
  //Circle position sperated from one another.
    lover1.x = width/3;
    lover2.x = 2 * width/3;

    //Circles start moving in random directions
    lover1.vx = random(-lover1.speed, lover1.speed);
    lover1.vy = random(-lover1.speed, lover1.speed);
    lover2.vx = random(-lover2.speed, lover2.speed);
    lover2.vy = random(-lover2.speed, lover2.speed);
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `love`) {
    love();
  }
  else if (state === `sadness`) {
    sadness();
  }
}

function title() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`LOVE?`, width/2, height/2);
  pop();
}

function simulation() {
  move();
  checkOffScreen();
  checkOverlap();
  display();
}

function love() {
  push();
  textSize(64);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`LOVE!`, width/2, height/2);
  pop();
}

function sadness() {
  push();
  textSize(64);
  fill(150, 150, 255);
  textAlign(CENTER, CENTER);
  text(`(╥︣﹏᷅╥᷅)`, width/2, height/2);
  pop();
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
  //*METHID 1:
  if (lover1.x < 0 || lover1.x > width || lover1.y < 0 || lover1.y > height || lover2.x < 0 || lover2.x > width || lover2.y < 0 || lover2.y > height) {
    state = `sadness`;
  }
}

  /*METHOD 2
  if (isOffScreen(lover1) || isOffScreen(lover2)){
    // sad ending.

*/

/*Only use for shapes!!
function isOffScreen(circle) {
  if (lover.x < 0 || lover.x > width || lover.y < 0 || lover.y > height) {
    return true;
  }
  else {
    return false;
  }
}
*/

function checkOverlap() {
  //check if circles overlap.
  let d = dist(lover1.x, lover1.y, lover2.x, lover2.y)
  if (d < lover1.size/2 + lover2.size/2) {
    //LOVE ENDING.
    state = `love`;
  }
}

function display() {
  //Display circles.
  ellipse(lover1.x, lover1.y, lover1.size);
  ellipse(lover2.x, lover2.y, lover2.size);
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
  else if (state === `sadness`) {
    state = `title`;
  }
}
