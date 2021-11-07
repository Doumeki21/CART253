/**
Project 2: prototype
Olenka Yuen

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let meter = {
  x: 300,
  y: 300,
  size: 300,
}

let fillMeter = {
  x: 300,
  y: 300,
  width: 300,
  height: 300,
}

let target = {
  size: 50,
  angle: undefined,
};

/**
Description of setup
*/
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  //or random(0, TWO_PI);
    target.angle = random(0, 360);
}


/**
Description of draw()
*/
function draw() {
  background(0, 0, 70);

//White stroke
strokeWeight(20);
stroke(255);
noFill()
ellipse(meter.x, meter.y, meter.size);

//red stroke/ fillMeter
push();
strokeWeight(10);
stroke(255, 0, 43);
let mouseEnd = map(mouseX, 0, width, 0, 360);
arc(fillMeter.x, fillMeter.y, fillMeter.width, fillMeter.height, 0, mouseEnd);
pop();

//target
push();
fill(255, 0, 43, 155);
noStroke();

//translate the initital point to the center of the meter.
  translate(meter.x, meter.y);
  //rotate function goes around a default/ origin (which s usually top left corner or 0,0) point.
  rotate(target.angle);
  //target draws on the radius of the meter.
  ellipse(meter.size / 2, 0, target.size);
  pop();

  if (mouseEnd > target.angle - 10 && mouseEnd < target.angle + 10) {
    target.angle = random(0, 360);
  }
}
