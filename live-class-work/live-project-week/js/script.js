/**
live-project-week
Author Name

- working in 3d
- parallax effect
*/

"use strict";

let layerDeep = [];
let layerMiddle = [];
let layerNear = [];

function setup() {
  createCanvas(500, 500);
  //in WEBGL, coordinates 0,0 start at center of canvas!

  let x = 0;
  let y = 0;
  for (let i = 0; i <30; i++) {
    layerDeep.push(createBuidling(x, y, color(200)));
    layerMiddle.push(createBuidling(x, y, color(200)));
  }
}

function createBuidling(x, y, color) {
  let building = {
    x: x,
    y: y,
    width: 50,
    height: random(100, 200),
    color: color,
  };
  return building;
}

function draw() {
  background(0);

  push();
  translate(planet.x, planet.y);
  rotateY(radians(planet.angle));
  box(planet.size);
  pop();

  push();
  translate(planet.x, planet.y);
  rotateY(radians(moon.orbitAngle));
  noStroke();
  fill(100);
  translate(moon.x, moon.y);
  ellipse(moon.x, moon.y, moon.size);
  pop();

  planet.angle += 1;
  moon.angle += 3;
  moon.orbitAngleangle += 5;
}
