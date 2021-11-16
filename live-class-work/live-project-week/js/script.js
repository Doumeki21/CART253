/**
live-project-week
Author Name

- working in 3d
- parallax effect
*/

"use strict";

let planet = {
  x:-100,
  y:-100,
  size: 100,
  angle: 0,
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

  planet.angle += 1;
}
