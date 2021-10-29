/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let cars = [];
let numCars = 10;

let motorcycles = [];
let numMotorcycles = 10;

function setup() {
  createCanvas(600, 600);

  //create cars in the array.
  for(let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    cars.push(car);
  }

  //create motorcycle in the array.
  for(let i = 0; i < numMotorcycles; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y);
    motorcycles.push(motorcycle);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < cars.length; i++) {
    //give me the current car in the index.
    let car = cars[i];
    car.move();
    car.wrap();
    car.display();
  }

  for (let i = 0; i < motorcycles.length; i++) {
    //give me the current motorcycle in the index.
    let motorcycle = motorcycles[i];
    motorcycle.move();
    motorcycle.wrap();
    motorcycle.display();
  }
}
