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

let sheepInPen = 0;

//Square sheep pen
let pen = {
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
  pen.x = random(0, 500);
  pen.y = random(0, 500);
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

  moveSheep(sheep1);
  moveSheep(sheep2);
  moveSheep(sheep3);

  checkPush(sheep1);
  checkPush(sheep2);
  checkPush(sheep3);

  checkInRedPen(sheep1);
  checkInRedPen(sheep2);
  checkInRedPen(sheep3);

  displayPen();

  displaySheep(sheep1);
  displaySheep(sheep2);
  displaySheep(sheep3);

  displayUser();
}

function moveUser() {
  user.positionBeforeX = user.x;
  user.positionBeforeY = user.y;

  user.x = mouseX;
  user.y = mouseY;
}

function moveSheep(sheep) {
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

  if (sheep.x + sheep.size / 2 > pen.x - pen.size / 2 && sheep.x - sheep.size / 2 < pen.x + pen.size / 2 && sheep.y + sheep.size / 2 > pen.y - pen.size / 2 && sheep.y - sheep.size / 2 < pen.y + pen.size / 2) {
    if (sheep.isInPen === false) {
      sheep.isInPen = true;
      sheepInPen++;
    }
  } else {
    if (sheep.isInPen === true) {
      sheep.isInPen = false;
      sheepInPen--;
    }
  }

  if (sheepInPen < 1) {
    pen.currentFill.r = pen.begFill.r;
    pen.currentFill.g = pen.begFill.g;
    pen.currentFill.b = pen.begFill.b;
  } else if (sheepInPen === 1) {
    pen.currentFill.r = pen.startFill.r;
    pen.currentFill.g = pen.startFill.g;
    pen.currentFill.b = pen.startFill.b;
  } else if (sheepInPen === 2) {
    pen.currentFill.r = pen.midFill.r;
    pen.currentFill.g = pen.midFill.g;
    pen.currentFill.b = pen.midFill.b;
  } else if (sheepInPen === 3) {
    pen.currentFill.r = pen.endFill.r;
    pen.currentFill.g = pen.endFill.g;
    pen.currentFill.b = pen.endFill.b;
  }
}

function displayUser() {
  fill(255);
  noStroke();
  ellipse(user.x, user.y, user.size);
}

function displaySheep(sheep) {
  fill(sheep.fill.r, sheep.fill.g, sheep.fill.b);
  noStroke();
  ellipse(sheep.x, sheep.y, sheep.size);
}

function displayPen() {
  fill(pen.currentFill.r, pen.currentFill.g, pen.currentFill.b);
  noStroke();
  rectMode(CORNER);
  rect(pen.x, pen.y, pen.size);
  console.log(pen.x);
}
