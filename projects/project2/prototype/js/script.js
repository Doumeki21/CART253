/**
Project 2: prototype
Olenka Yuen

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//white stroke
let meter = {
  x: undefined,
  y: undefined,
  size: 300,
}
//Red stroke
let fillMeter = {
  x: undefined,
  y: undefined,
  width: 300,
  height: 300,
}
//reappearing blue cirlce on the white stroke.
let target = {
  size: 50,
  angle: undefined,
};

//The base of the progress bar.
let progressBar = {
  x: undefined,
  y: undefined,
  width: 40,
  height: 200,
}
//Progress bar fill.
let fillProgressBar = {
  x: undefined,
  y: undefined,
  width: 30,
  height: 10,
}

//Timer starts at 10 seconds.
let timer = 10;

let state = `title`;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Placing the meter at the center of the window.
  meter.x = width / 2;
  meter.y = height / 2;
  fillMeter.x = width / 2;
  fillMeter.y = height / 2;

  //Target appears anywhere on the white stroke.
  angleMode(DEGREES);
  target.angle = random(0, 360);

  progressBar.x = width - 30;
  progressBar.y = height - 50;

  fillProgressBar.x = width - 30;
  fillProgressBar.y = height - 50;
}

function draw() {
  background(58, 12, 163);

  if (state === `title`) {
    title();
  } else if (state === `stressGame`) {
    stressGame();
  }
  else if (state === `gameOver`) {
    gameOver()
  }
}

function title() {

  push()
  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text(`UNDER PRESSURE`, width / 2, height/2);
  pop();

  push()
  noStroke();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(`CLICK ANYWHERE TO CONTINUE`, width / 2, height/2 + 100);
  pop();
}

function stressGame() {
  //Draw white stroke
  strokeWeight(20);
  stroke(255);
  noFill()
  ellipse(meter.x, meter.y, meter.size);

  //Draw red stroke
  push();
  strokeWeight(10);
  stroke(247, 37, 133);
  //Red stroke follows by moving the mouse side-to-side.
  let mouseEnd = map(mouseX, 0, width, 0, 360);
  arc(fillMeter.x, fillMeter.y, fillMeter.width, fillMeter.height, 0, mouseEnd);
  pop();

  //Draw target
  push();
  fill(76, 201, 240, 155);
  noStroke();
  //translate the default point to the center of the meter.
  translate(meter.x, meter.y);
  //rotate function goes around a default/ origin (which is usually top left corner or 0,0) point.
  rotate(target.angle);
  //target draws on the radius of the meter.
  ellipse(meter.size / 2, 0, target.size);
  pop();

  //If the red meter touches the target,
  if (mouseEnd > target.angle - 10 && mouseEnd < target.angle + 10) {
    // target changes position
    target.angle = random(0, 360);
    //progressBar fills.
    fillProgressBar.height += 15;
  }

  //If progressBar fills to max height, then bar restarts.
  if (fillProgressBar.height >= progressBar.height) {
    fillProgressBar.height = 10;
  }

  //count in seconds
  timer -= 1 / 60;
  //When timer hits 0, timer stays at 0.
  if (timer <= 0) {
    timer = 0;
    state = `gameOver`;
  }

  //instructions text
  push()
  noStroke();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(`<< MOVE >>`, width / 2, height - 30);
  pop();

  //Draw progressBar
  push();
  noStroke();
  fill(128, 0, 22);
  rectMode(CENTER);
  //Dividing to offset it away from the edge.
  rect(progressBar.x, progressBar.y - progressBar.height / 2, progressBar.width, progressBar.height);
  pop();

  //Draw fillProgressBar
  push();
  noStroke();
  fill(255, 0, 43);
  rectMode(CENTER);
  rect(fillProgressBar.x, fillProgressBar.y - fillProgressBar.height / 2, fillProgressBar.width, fillProgressBar.height);
  pop();

  //Draw timer.
  push();
  noStroke();
  fill(255);
  textSize(60);
  textAlign(CENTER, CENTER);
  //Round timer to nearest whole number.
  text(round(timer), 200, 200);
  pop();
}

function gameOver() {
  push()
  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text(`GAME OVER`, width / 2, height/2);
  pop();

  push()
  noStroke();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(`YOU JUST DIDN'T MAKE IT ON TIME!`, width / 2, height/2 + 100);
  pop();
}

function mouseClicked() {
  if (state === `title`) {
    state = `stressGame`;
  } else if (state === `gameOver`) {
    state = `title`;
  }
}
