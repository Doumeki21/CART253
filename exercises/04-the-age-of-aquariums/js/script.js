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
  x: 0,
  y: 0,
  size: 100,
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
  x: 0,
  y: 0,
  size: 150,
};


function setup() {
  createCanvas(windowWidth, windowHeight);

  pen.x = random(0, width);
  pen.y = random(0, heigth);

  sheep1 = createSheep();
}

function createSheep() {
  let sheep = {
    x: ,
    y: ,
    size: 50,
    vx: 5,
    vy: 5,
    inPen: false,
  };
  return sheep;

  sheep1.x = random(sheep1.x, 0, width);
  sheep1.y = random(sheep1.y, 0, height);
}


function draw() {
  //Green bg
  background(0);

  moveUser();

  checkNearSheep(sheep1);

  checkSheepPen(sheep1);

  displayUser();

  displaySheep(sheep1);
}

function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

function checkNearSheep(sheep) {
  //disatnce b/w 2 objects.
  let d = dist(user.x, user.y, sheep1.x, sheep1.y);

  if (d < sheep1.size/2 + user.size/2 + 5) {
    sheep1.vx = -
  }
}
