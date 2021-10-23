/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let garden = {
  flowers: [],
  numFlowers: 20,
  grassColor: {
    r: 120,
    g: 180,
    b: 120,
  }
}

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < garden.numFlowers; i++) {
    //create a new flower
    let flower = new Flower();
    //add the flower to the array of flowers.
    garden.flowers.push(flower);
  }
}

function draw() {
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    flower.display();
  }
}
