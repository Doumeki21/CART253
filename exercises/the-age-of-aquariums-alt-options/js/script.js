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
let redSheeps = [];
let numRedSheep = 3;
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

let state = `title`;

function setup() {
  createCanvas(700, 700);

  reset();
}

function reset() {
  //Sheep at random location
  for (let i = 0; i < numRedSheep; i++) {
    let redSheep = createSheep(random(0, width), random(0, height), 200, 50, 50);
    redSheeps.push(redSheep);
  }


  //Sheep pen at random location.
  redPen.x = random(0, width - redPen.size);
  redPen.y = random(0, height - redPen.size);
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
    //Change speed for different sheeps
    speed: 0.5,
    isInPen: false,
  };
  return sheep;
}

function draw() {
  //Green bg
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `game`) {
    game();
  }
}

function title() {
  push();
  textSize(100);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`SHEEPS`, width / 2, height / 2);
  pop();

  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`CLICK TO CONTINUE`, width / 2, height / 2 + 200);
  pop();
}

function game() {
  moveUser();

  displayRedPen();

//sheep.length is total of (6) sheeps.
//redhseeps.length = number of
for (let i = 0; i < redSheeps.length; i++) {
  moveSheep(redSheeps[i]);
  checkPush(redSheeps[i]);
  checkInRedPen(redSheeps[i]);
  displaySheep(redSheeps[i]);
}

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

  sheep.x = constrain(sheep.x, 0, width);
  sheep.y = constrain(sheep.y, 0, height);

  sheep.x += sheep.vx;
  sheep.y += sheep.vy;
}

function checkPush(sheep) {
  if (sheep.x + sheep.size / 2 > user.x - user.size / 2 && sheep.x - sheep.size / 2 < user.x + user.size / 2 && sheep.y + sheep.size / 2 > user.y - user.size / 2 && sheep.y - sheep.size / 2 < user.y + user.size / 2) {
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

redPen.currentFill.r = map(amountInRedPen, 0, 3, 100, 255);

  // if (amountInRedPen < 1) {
  //   redPen.currentFill.r = redPen.begFill.r;
  //   redPen.currentFill.g = redPen.begFill.g;
  //   redPen.currentFill.b = redPen.begFill.b;
  // } else if (amountInRedPen === 1) {
  //   redPen.currentFill.r = redPen.startFill.r;
  //   redPen.currentFill.g = redPen.startFill.g;
  //   redPen.currentFill.b = redPen.startFill.b;
  // } else if (amountInRedPen === 2) {
  //   redPen.currentFill.r = redPen.midFill.r;
  //   redPen.currentFill.g = redPen.midFill.g;
  //   redPen.currentFill.b = redPen.midFill.b;
  // } else if (amountInRedPen === 3) {
  //   redPen.currentFill.r = redPen.endFill.r;
  //   redPen.currentFill.g = redPen.endFill.g;
  //   redPen.currentFill.b = redPen.endFill.b;
  // }
}

function displayUser() {
  fill(255);
  noStroke();
  ellipse(user.x, user.y, user.size);
}

function displaySheep(sheep) {
  push();
  fill(sheep.fill.r, sheep.fill.g, sheep.fill.b);
  noStroke();
  ellipse(sheep.x, sheep.y, sheep.size);
  pop();
}

function displayRedPen() {
  fill(redPen.currentFill.r, redPen.currentFill.g, redPen.currentFill.b);
  noStroke();
  rectMode(CORNER);
  rect(redPen.x, redPen.y, redPen.size);
  console.log(redPen.x);
}

function mouseClicked() {
  if (state === `title`) {
    state = `game`;
  }
}
