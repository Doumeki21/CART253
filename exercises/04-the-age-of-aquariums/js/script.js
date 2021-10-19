/**
Exercise 04: The Age of Aquariums
Olenka Yuen

Objectives:
1. Working with arrays and for-loops
2. Working with arrays and random selection

Brief:
- User controlled with mouse/  keyboard.
- User interact with object (Make them run away.)
* Change the fish creation (
    Include more parameters so that the fish (or whatever) can be more varied (color? speed? size?)
    Add at least one new property to the fish (or whatever) that changes their behaviour
)
* At least 2 endings. (Timeout with frameCount, "success! you collected all the sheeps in the pen before nightfall")
*/

"use strict";

// The user moved with the mouse.
let user = {
  x: 250,
  y: 250,
  vx: 4,
  vy: 4,
  size: 50,
  positionBeforeX: 0,
  positionBeforeY: 0,
};

//Sheep.
let sheep1;
let sheep2;
let sheep3;
let sheep4;
let sheep5;
let sheep6;

let amountInRedPen = 0;

//Square sheep pen
let redPen = {
  x: 250,
  y: 250,
  size: 100,
  currentFill: {
    r: 0,
    g: 0,
    b: 0,
  },
  begFill: {
    r: 255,
    g: 232,
    b: 230,
  },
  startFill: {
    r: 255,
    g: 188,
    b: 181,
  },
  midFill: {
    r: 255,
    g: 119,
    b: 105,
  },
  endFill: {
    r: 255,
    g: 0,
    b: 0,
  },
};

function setup() {
  createCanvas(700, 700);

  reset();
}

function reset() {
  //Sheep at random location
  sheep1 = createSheep(random(0, 500), random(0, 500), 200, 50, 50);
  sheep2 = createSheep(random(0, 500), random(0, 500), 200, 50, 50);
  sheep3 = createSheep(random(0, 500), random(0, 500), 200, 50, 50);


  //Sheep pen at random location.
  redPen.x = random(0, 500);
  redPen.y = random(0, 500);
}

function createSheep(x, y, r, g, b) {
  let sheep = {
    x: x,
    y: y,
    size: 50,
    fill: {
      r: r,
      g: g,
      b: b,
    },
    vx: 5,
    vy: 5,
    speed: 0.5,
    isInPen: false,
  };
  return sheep;
}

function draw() {
  //Green bg
  background(0);

  moveUser();

  moveRedSheep(sheep1);
  moveRedSheep(sheep2);
  moveRedSheep(sheep3);

  checkPush(sheep1);
  checkPush(sheep2);
  checkPush(sheep3);

  checkInRedPen(sheep1);
  checkInRedPen(sheep2);
  checkInRedPen(sheep3);

  displayRedPen();

  displayRedSheep(sheep1);
  displayRedSheep(sheep2);
  displayRedSheep(sheep3);

  displayUser();
}

function moveUser() {
  user.positionBeforeX = user.x;
  user.positionBeforeY = user.y;

  user.x = mouseX;
  user.y = mouseY;
}

function moveRedSheep(sheep) {
  sheep.vx = random(-5, 5) * sheep.speed;
  sheep.vy = random(-5, 5) * sheep.speed;

  sheep.x = constrain(sheep.x, 0, 500);
  sheep.y = constrain(sheep.y, 0, 500);

  sheep.x += sheep.vx;
  sheep.y += sheep.vy;
}

function checkPush(sheep) {
  if (sheep.x + sheep.size / 2 > user.x - user.size / 2 && sheep.x - sheep.size / 2 < user.x + user.size / 2 && sheep.y + sheep1.size / 2 > user.y - user.size / 2 && sheep.y - sheep.size / 2 < user.y + user.size / 2) {
    let distUserX = user.x - user.positionBeforeX;
    let distUserY = user.y - user.positionBeforeY;

    sheep.x += distUserX;
    sheep.y += distUserY;
  }
}

function checkInRedPen(sheep) {

  if (sheep.x + sheep.size / 2 > redPen.x - redPen.size / 2 && sheep.x - sheep.size / 2 < redPen.x + redPen.size / 2 && sheep.y + sheep.size / 2 > redPen.y - redPen.size / 2 && sheep.y - sheep.size / 2 < redPen.y + redPen.size / 2) {
    if (sheep.isInPen === false) {
      sheep.isInPen = true;
      amountInRedPen++;
    }
  } else {
    if (sheep.isInPen === true) {
      sheep.isInPen = false;
      amountInRedPen--;
    }
  }

  if (amountInRedPen < 1) {
    redPen.currentFill.r = redPen.begFill.r;
    redPen.currentFill.g = redPen.begFill.g;
    redPen.currentFill.b = redPen.begFill.b;
  } else if (amountInRedPen === 1) {
    redPen.currentFill.r = redPen.startFill.r;
    redPen.currentFill.g = redPen.startFill.g;
    redPen.currentFill.b = redPen.startFill.b;
  } else if (amountInRedPen === 2) {
    redPen.currentFill.r = redPen.midFill.r;
    redPen.currentFill.g = redPen.midFill.g;
    redPen.currentFill.b = redPen.midFill.b;
  } else if (amountInRedPen === 3) {
    redPen.currentFill.r = redPen.endFill.r;
    redPen.currentFill.g = redPen.endFill.g;
    redPen.currentFill.b = redPen.endFill.b;
  }
}

function displayUser() {
  fill(255);
  noStroke();
  ellipse(user.x, user.y, user.size);
}

function displayRedSheep(sheep) {
  fill(sheep.fill.r, sheep.fill.g, sheep.fill.b);
  noStroke();
  ellipse(sheep.x, sheep.y, sheep.size);
}

function displayRedPen() {
  fill(redPen.currentFill.r, redPen.currentFill.g, redPen.currentFill.b);
  noStroke();
  rectMode(CORNER);
  rect(redPen.x, redPen.y, redPen.size);
  console.log(redPen.x);
}
