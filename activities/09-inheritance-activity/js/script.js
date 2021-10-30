/**
Activity 9: inheritance Activity
Olenka Yuen

PLAN:

  -Write a main script with states
  -Create a basic Pedestrian class and integrate it into the main script
  -Create a Vehicle class
  -Create Car, Truck, and Motorcycle classes that extend the Vehicle class
  -Add cars, trucks, and motorcycles to the main script
  -Add success and failure conditions

*/

"use strict";

let state = `simulation`;

let pedestrian;

function setup() {
  createCanvas(windowWidth, windowHeight);

  let x = width/2;
  let y = height;
  pedestrian = new Pedestrian(x, y);
}

function draw() {
  background(0);

  if(state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `success`) {
    success();
  }
  else if (state === `dead`) {
    dead();
  }
}

function title() {
  displayText(`PEDESTRIAN PALAVER`);
}

function simulation() {
  pedestrian.handleInput();
  pedestrian.move();
  pedestrian.display();

}

function success() {
  displayText(`YOU MADE IT!`);
}

function dead() {
  displayText(`YOU DIED`);
}

function displayText(string) {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  text(string, width/2, height/2);
  pop();
}

function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
