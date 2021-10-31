"use strict";

let circles = [];

function setup() {
  createCanvas(800, 800);

//introduce array?
  for (let i = 0; i < 50; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      size: 50,
    }

    //CHECK OVERLAPPING CIRCLES.
    let overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      let other = circles[j];
      let d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.size + other.size) {
        //they overlap!!
        overlapping = true;
      }
    }
    //Continue with the array if not overlapping
    if (!overlapping) {
      circles.push(circle);
    }
  }

//Draw circle in array
  for (let i = 0; i < circles.length; i++) {
    fill(200, 50, 50, 200);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].size);
  }
}


function draw() {}
