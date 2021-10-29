/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let vehicles = [];
let numCars = 10;
// let motorcycles = [];
let numMotorcycles = 10;
let numSportsCar = 5;

function setup() {
  createCanvas(600, 600);

  //create cars in the (vehicles) array.
  for(let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    vehicles.push(car);
  }

  //create motorcycle in the (vehicles) array.
  for(let i = 0; i < numMotorcycles; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y);
    vehicles.push(motorcycle);
  }

  //create SportsCar in the (vehicles) array.
  for(let i = 0; i < numSportsCar; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let sportsCar = new SportsCar(x, y);
    vehicles.push(sportsCar);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < vehicles.length; i++) {
    //give me the current vehicle in the index.
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();
  }
}
