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
let vehicles = [];
let numCars = 5;
let numTrucks = 2;
let numMotorcycles = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    vehicles.push(car);
  }

  for (let i = 0; i < numTrucks; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let truck = new Truck(x, y);
    vehicles.push(truck);
  }

  for (let i = 0; i < numMotorcycles; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y);
    vehicles.push(motorcycle);
  }

  //Set vehicles at 50% random directions
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    let r = random(0, 1);
    if (r < 0.5) {
      //Go left.
      vehicle.vx = -vehicle.speed;
    }
    else {
      //Go right.
      vehicle.vx = vehicle.speed;
    }
  }

  reset();
}

function reset() {
  let x = width / 2;
  let y = height;
  pedestrian = new Pedestrian(x, y);
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `success`) {
    success();
    reset();
  }
  else if (state === `dead`) {
    dead();
    reset();
  }
}

function title() {
  displayText(`PEDESTRIAN PALAVER!`);
}

function simulation() {
  //User actions
  pedestrian.handleInput();
  pedestrian.move();
  pedestrian.display();

  //All vehicles actions
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();

    pedestrian.checkHit(vehicle);
  }

  if (!pedestrian.alive) {
    state = `dead`;
  }

  if (pedestrian.y < 0) {
    state = `success`;
  }
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
  text(string, width / 2, height / 2);
  pop();
}

function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
  }
  else if (state === `dead`) {
    state = `title`;
  }
  else if (state === `success`) {
    sate = `title`;
  }
}
