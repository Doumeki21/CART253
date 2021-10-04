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

let user = {
  fill: {
    r: 201,
    g: 189,
    b: 255,
  },
  x: 250,
  y: 250,
  size: 40,
  vx: 0,
  vy: 0,
  speed: 5,
};

let child = {
  fill: {
    r: 69,
    g: 238,
    b: 255,
  },
  x: 250,
  y: 250,
  size: 20,
  vx: 0,
  vy: 0,
  speed: 20,
};

let state = `title`;

function setup() {
  createCanvas(windowWidth, windowHeight);

  setupCircles();
}

function setupCircles() {
  //Circle position sperated from one another.
    child.x = width/2;
    child.y = 0;
    user.x = width/2;
    user.y = height;

}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `checkmate`) {
    checkmate();
  }
}

function title() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`TANTRUM`, width/2, height/2);
  pop();

  push();
  textSize(20);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`USE ARROW KEYS TO REACH THE BABY.`, width/2, height/2 +100);
  pop();
}

function simulation() {
  handleInput();
  move();
  checkOverlap();
  display();
}

function checkmate() {
  push();
  textSize(64);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`YOU SAVED THE DAY!`, width/2, height/2);
  pop();
}


//Move user.
function handleInput() {
  //User control horizontol axis.
  if (keyIsDown(LEFT_ARROW)) {
    user.vx = -user.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    user.vx = user.speed;
  }
  else {
    user.vx = 0;
  }
  //User control vertical axis.
  if (keyIsDown(UP_ARROW)) {
    user.vy = -user.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    user.vy = user.speed;
  }
  else {
    user.vy = 0;
  }
}

function move() {
  //User movement.
  user.x += user.vx;
  user.y += user.vy;

  //child movement.
  child.x += child.vx;
  child.x = constrain(child.x, 0, width);
  child.y += child.vy;
  child.y = constrain(child.y, 0, height);
  //child jitter
  let change = random();
  if (change < 0.1) {
    child.vx = random(-child.speed, child.speed);
    child.vy = random(-child.speed, child.speed);
  }
}

function checkOverlap() {
//Check if circles overlap.
let d = dist(user.x, user.y, child.x, child.y)
if (d < user.size/2 + child.size/2) {
  //GOOD ENDING.
  state = `checkmate`;
  }
}



function display() {
  //Display circles.
  fill(user.fill.r, user.fill.r, user.fill.b);
  ellipse(user.x, user.y, user.size);
  fill(child.fill.r, child.fill.g, child.fill.b);
  ellipse(child.x, child.y, child.size);
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
