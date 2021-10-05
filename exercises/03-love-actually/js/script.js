/**
Exercise 03: Love, actually
Olenka Yuen

GOAL: Bring the mother to the baby! Move the purple circle using the keyboard arrows. Beware of the time and hidden danger zones!

PLAN:
.title screen.
.2 circles.
.Reach the child using the keyboard arrows!
*Once the circles touch- new random position for each circle.
*Add a score count?

REQUIREMENTS:
.Own if statemetnts
*working with loops for drawing.
.User control circle.
.Non-user circle move differently.
.extra function
.extra ending.
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
  size: 30,
  vx: 0,
  vy: 0,
  speed: 20,
};

let dangerZone = {
  fill: 0,
  x: 250,
  y: 250,
  size: 100,
}

let timer = {
  x: 100,
  y: 150,
  size: 20,
  fill: 255,

  //start at full alpha.
  alpha: 255,
  fadeAmount: 20,
}
//changes over time.
let numCircles = 5;

let state = `title`;

function setup() {
  createCanvas(windowWidth, windowHeight);

  reset();
}

function reset() {
  //Circle position sperated from one another.
    child.x = width/2;
    child.y = 0;
    user.x = width/2;
    user.y = height;

    dangerZone.x = random (0, width);
    dangerZone.y = random (0, height);

    numCircles = 5;
    timer.alpha = 255;
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
    reset();
  }
  else if (state === `ouch`) {
    ouch();
    reset();
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
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`USE ARROW KEYS TO REACH THE BABY.`, width/2, height/2 + 100);
  pop();

  push();
  textSize(15);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text(`BEWARE OF DANGER ZONES!`, width/2, height/2 + 120);
  pop();

  push();
  textSize(15);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`CLICK TO CONTINUE`, width/2, height/2 + 160);
  pop();
}

function simulation() {
  handleInput();
  move();
  checkOverlap();
  checkDangerZone();
  countDown();
  display();
}

function checkmate() {
  push();
  textSize(64);
  fill(147, 214, 219);
  textAlign(CENTER, CENTER);
  text(`YOU SAVED THE DAY!`, width/2, height/2);
  pop();
}

function ouch() {
  push();
  textSize(64);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text(`OUCH!`, width/2, height/2);
  pop();

  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`YOU TRIPPED OVER BOOKS AND BROKE YOUR ANKLE.`, width/2, height/2 +100);
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

function checkDangerZone() {
//Check if user and danger zone overlap.
let d = dist(user.x, user.y, dangerZone.x, dangerZone.y)
if (d < user.size/2 + dangerZone.size/2) {
  //BAD ENDING.
  state = `ouch`;
  }
}

function countDown() {
  noStroke();

let x = timer.x;
for (let i = numCircles; i >= 0; i--) {
  //Alpha will be calculated separatley. Fading alpha used for last circle.

  //Default is full.
  let alpha = 255;
  //If current circle is the last one--
  if (i === 0) {
    //then use timer.alpha (which is reducing to 0.)
    alpha = timer.alpha;
  }

  push();
  fill(255, alpha);
  ellipse(x, timer.y, timer.size);
  pop();
  x += 40;
}

  //outisde the forloop since it's only fading one circle (at a time).
  timer.alpha -= timer.fadeAmount;
  //subtract alpha to fade out
  //if current alpha reaches 0-
  if (timer.alpha <= 0) {
    //then remove a circle completely.
    numCircles--;
    //and reset alpha to 255 so next one fades.
    timer.alpha = 255;
  }
  if (numCircles === 0) {
    state = `ouch`;
  }
}

function display() {
  //Display circles.
  //Display user.
  push();
  fill(user.fill.r, user.fill.r, user.fill.b);
  ellipse(user.x, user.y, user.size);
  //Display child.
  fill(child.fill.r, child.fill.g, child.fill.b);
  ellipse(child.x, child.y, child.size);
  pop();
  //Display danger zone.
  fill(dangerZone.fill);
  ellipse(dangerZone.x, dangerZone.y, dangerZone.size);
}

function keyPressed() {
  if (keyCode === 32) {
    if (state === `title`) {
      state = `simulation`;
    }
    else if (state === `checkmate`) {
      state = `title`;
    }
    else if (state === `ouch`) {
      state = `title`;
    }
  }

}
