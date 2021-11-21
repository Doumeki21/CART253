"use strict";

let keyD = 68;

let textbox = {
  x: undefined,
  y: undefined,
  width: 300,
  height: 150,
}

let state = `drawing`;

function setup() {
  createCanvas(windowWidth, windowHeight);

  textbox.x = width - 300;
  textbox.y = height - 200;
}

function draw() {

  // push();
  // textSize(30);
  // textAlign(CENTER);
  // fill(0);
  // text(`Shift + win + S to save on PC.`, width/2, 250);
  // pop();

  // push();
  // textSize(30);
  // textAlign(CENTER);
  // fill(0);
  // text(`Cmd + shift + 4 to save on Mac.`, width/2, 280);
  // pop();

  if (state === `drawing`) {
    drawing();
  } else if (state === `final`) {
    final();
  }
}

function drawing() {

  //HANDLEINPUT FUNCTION
  //Draw a line
  if (mouseIsPressed) {
    push();
    strokeWeight(2);
    // stroke(212, 50, 50);
    line(pmouseX, pmouseY, mouseX, mouseY)
    pop();
  }
  //Clear canvas
  if (keyIsDown(keyD)) {
    clear();
  }

  //instructions
  push();
  textSize(50);
  textAlign(CENTER);
  fill(0);
  text(`Draw what you love`, width / 2, 200);
  pop();

  push();
  textSize(30);
  textAlign(CENTER);
  fill(0);
  text(`Press D to clear canvas.`, width / 2, 250);
  pop();

  //TEXTbOX
  push();
  rectMode(CENTER);
  fill(212);
  rect(textbox.x, textbox.y, textbox.width, textbox.height);
  pop();

  //proceed text
  push();
  textSize(30);
  textAlign(CENTER);
  text(`Click here once \nYou're done!`, width - 300, height - 200);
  pop();
}

function final() {
  background(212);
}

function mousePressed() {
  if (mouseX > textbox.x - textbox.width / 2 &&
    mouseX < textbox.x + textbox.width / 2 &&
    mouseY > textbox.y - textbox.height / 2 &&
    mouseY < textbox.y + textbox.height / 2) {
    state = `final`;
  }
}
