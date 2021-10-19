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

//Red sheep.
let redSheeps = [];
let numRedSheep = 3;
let amountInRedPen = 0;

//Blue sheep.
let blueSheeps = [];
let numBlueSheep = 3;
let amountInBluePen = 0;

//Red sheep pen
let redPen = {
  x: 250,
  y: 250,
  size: 100,
  currentFill: {
    r: 0,
    g: 0,
    b: 0,
  },
};

//Blue sheep pen
let bluePen = {
  x: 250,
  y: 250,
  size: 100,
  currentFill: {
    r: 0,
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
  for (let i = 0; i < numRedSheep; i++) {
    //red sheeps at random locations.
    let redSheep = createSheep(random(0, width), random(0, height), 0.5, 255, 188, 181);
    //crete red sheep (variable introduced above code) in redSheeps array!
    redSheeps.push(redSheep);
  }

  for (let i = 0; i < numBlueSheep; i++) {
    //Blue sheeps at random locations.
    let blueSheep = createSheep(random(0, width), random(0, height), 0.8, 188, 181, 255);
    //crete blue sheep (variable introduced above code) in blueSheeps array!
    blueSheeps.push(blueSheep);
  }

  //Sheep pen at random location.
  redPen.x = random(0, width - redPen.size);
  redPen.y = random(0, height - redPen.size);
}

function createSheep(x, y, speed, r, g, b) {
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
    speed: speed,
    isInPen: false,
  };
  return sheep;
}

function draw() {
  //Green bg
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `game`) {
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
