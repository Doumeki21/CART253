/**
Project 2: prototype
Olenka Yuen

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//white stroke
let meter = {
  x: 300,
  y: 300,
  size: 300,
}

//Red stroke
let fillMeter = {
  x: 300,
  y: 300,
  width: 300,
  height: 300,
}

//reappearing cirlce on the white stroke.
let target = {
  size: 50,
  angle: undefined,
};


function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  //Target appears anywhere on the white stroke.
  target.angle = random(0, 360);
}

function draw() {
  background(58, 12, 163);

  //Draw white stroke
  strokeWeight(20);
  stroke(255);
  noFill()
  ellipse(meter.x, meter.y, meter.size);

  //Draw red stroke/ the fillMeter
  push();
  strokeWeight(10);
  stroke(247, 37, 133);
  //Followed by moving the mouse side-to-side.
  let mouseEnd = map(mouseX, 0, width, 0, 360);
  arc(fillMeter.x, fillMeter.y, fillMeter.width, fillMeter.height, 0, mouseEnd);
  pop();

  //target
  push();
  fill(76, 201, 240, 155);
  noStroke();

  //translate the initital point to the center of the meter.
  translate(meter.x, meter.y);
  //rotate function goes around a default/ origin (which s usually top left corner or 0,0) point.
  rotate(target.angle);
  //target draws on the radius of the meter.
  ellipse(meter.size / 2, 0, target.size);
  pop();
  //If mouse touches the target, target changes position.
  if (mouseEnd > target.angle - 10 && mouseEnd < target.angle + 10) {
    target.angle = random(0, 360);
  }

  //instructions text
  push()
  noStroke();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(`<< MOVE >>`, width / 2, height - 30);
  pop();
}
