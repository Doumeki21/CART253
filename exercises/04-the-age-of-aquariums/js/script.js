/**
Exercise 04: The Age of Aquariums
Olenka Yuen

Objectives:
1. Working with arrays and for-loops
2. Working with arrays and random selection

Brief:
* User controlled with mouse/  keyboard.
* User interact with object (Make them run away.)
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

//Square sheep pen
let pen = {
  x: 250,
  y: 250,
  size: 100,
};

function setup() {
  createCanvas(700, 700);

  reset();
}

function reset() {
  sheep1 = createSheep();

  //Sheep at random location
  sheep1.x = random(0, 500);
  sheep1.y = random(0, 500);

  //Sheep pen at random location.
  pen.x = random(0, 500);
  pen.y = random(0, 500);
}

function createSheep() {
  let sheep = {
    x: 250,
    y: 250,
    size: 50,
    vx: 5,
    vy: 5,
    speed: 0.5,
    inPen: false,
  };
  return sheep;
}


function draw() {
  //Green bg
  background(0);

  moveUser();
  moveSheep();
  checkPush();

  displayPen();
  displaySheep();
  displayUser();
}

function moveUser() {
  user.positionBeforeX = user.x;
  user.positionBeforeY = user.y;

  user.x = mouseX;
  user.y = mouseY;
}

function moveSheep() {
  sheep1.vx = random(-5, 5) * sheep1.speed;
  sheep1.vy = random(-5, 5) * sheep1.speed;


  sheep1.x = constrain(sheep1.x, 0, 500);
  sheep1.y = constrain(sheep1.y, 0, 500);

  sheep1.x += sheep1.vx;
  sheep1.y += sheep1.vy;
}

function checkPush() {
  if (sheep1.x + sheep1.size / 2 > user.x - user.size / 2 && sheep1.x - sheep1.size / 2 < user.x + user.size / 2 && sheep1.y + sheep1.size / 2 > user.y - user.size / 2 && sheep1.y - sheep1.size / 2 < user.y + user.size / 2) {
      let distUserX = user.x - user.positionBeforeX;
      let distUserY = user.y - user.positionBeforeY;

    sheep1.x += distUserX;
    sheep1.y += distUserY;
  }
}

function displayUser() {
  fill(255);
  noStroke();
  ellipse(user.x, user.y, user.size);
}

function displaySheep() {
  fill(200, 50, 50);
  noStroke();
  ellipse(sheep1.x, sheep1.y, sheep1.size);
}

function displayPen() {
  fill(255, 0, 0);
  noStroke();
  rectMode(CORNER);
  rect(pen.x, pen.y, pen.size);
}
