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

let coins = [];
let numCoins = 10;

function setup() {
  createCanvas(500, 500);
  noCursor();

  //For loop creates 10 coins in the array.
  for (let i = 0; i < numCoins; i++) {
    let newCoin = createCoin();
    //adding newCoin into the coins array!
    coins.push(newCoin);
  }
}

function createCoin() {
  let newCoin = {
    x: random(0, width),
    y: random(0, height),
    size: 50,
    stroke: color(255, 255, 0),
    collected: false,
  };
  return newCoin;
}

function draw() {
  background(0);

  handleInput();

  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    collect(user, coin[i]);
  }

  displayUser(user);

  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    displayCoin(coin);
  }
}

function handleInput() {
  user.x = mouseX;
  user.y = mouseY;
}

function collect(user, coin) {
  if (!coin.collected) {
    let d = dist(user.x, user.y, coin.x, coin.y);
    if (d < user.size / 2 + coin.size / 2) {
      coin.collected = true;
    }
  }
}

function displayUser(user) {
  push();
  noFill()
  stroke(255, 100, 0);
  ellipse(user.x, user.y, user.size);
  pop();
}

function displayCoin(coin) {
  if (!coin.collected) {
    push();
    noFill();
    stroke(coin.stroke);
    ellipse(coin.x, coin.y, coin.size);
    pop();
  }
}
