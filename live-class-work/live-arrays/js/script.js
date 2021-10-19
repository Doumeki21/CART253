
/**************************************************
live: arrays
Olenka Yuen



**************************************************/

"use strict";

let user = {
  x: undefined,
  y: undefined,
  size: 100,
};

let coin = undefined;

function setup() {
  createCanvas(500 ,500);
  noCursor();
  coin = createCoin();
}

function createCoin() {
  let newCoin = {
    x: random(0, width),
    y: random(0, height),
    size: 50,
    stroke: color(255, 255, 0),
  };
  return newCoin;
}

function draw() {
  background(0);

  handleInput();
  displayUser(user);
  displayCoin(coin);
}

function handleInput() {
  user.x = mouseX;
  user.y = mouseY;
}

function displayUser(user) {
  push();
  noFill()
  stroke(255, 100, 0);
  ellipse(user.x, user.y, user.size);
  pop();
}

function displayCoin(coin) {
  push();
  noFill();
  stroke(coin.stroke);
  ellipse(coin.x, coin.y, coin.size);
  pop();
}
