/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let garden = {
  //Array that stores each flower.
  flowers: [],
  //How many flowers in garden
  numFlowers: 25,
  //Array of bees.
  bees: [],
  //How many bees in garden
  numBees: 7,
  //The green grass in the bg.
  grassColor: {
    r: 120,
    g: 180,
    b: 120,
  }
}

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < garden.numFlowers; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255),
    };
    //create a new flower
    let flower = new Flower(x, y, size, stemLength, petalColor);
    //add the flower to the array of flowers.
    garden.flowers.push(flower);
  }

  //Create bees.
  for (let i = 0; i < garden.numBees; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let bee = new Bee (x, y);
    garden.bees.push(bee);
  }
}

function draw() {
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    if (flower.alive) {
      flower.shrink();
      flower.display();
    }
  }

  for (let i = 0; i < garden.bees.length; i++) {
    let bee = garden.bees[i];
    if (bee.alive) {
      bee.shrink();
      bee.move();
      bee.display();
    }
  }
}

// function mousePressed() {
//   for (let i = 0; i < garden.flowers.length; i++) {
//     let flower = garden.flowers[i];
//     flower.mousePressed();
//   }
// }
