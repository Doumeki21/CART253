/**
live-project-week
Author Name

- working in 3d
- parallax effect
*/

"use strict";

let planet = {
  x: 0,
  y: 0,
  size: 100,
  angle: 0,
};

let moon = {
  x: 100,
  y: 0,
  size: 25,
  angle: 0,
  orbitAngle: 0,
};

function preload() {

}

function setup() {
  createCanvas(500, 500, WEBGL);
  //in WEBGL, coordinates 0,0 start at center of canvas!


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
