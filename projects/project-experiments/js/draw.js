"use strict";

let keyD = 68;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  push();
  textSize(50);
  textAlign(CENTER);
  fill(0);
  text(`Draw what you love`, width/2, 200);
  pop();

  push();
  textSize(30);
  textAlign(CENTER);
  fill(0);
  text(`Press D to clear canvas.`, width/2, 250);
  pop();

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

  if (mouseIsPressed) {
    push();
    strokeWeight(2);
    // stroke(212, 50, 50);
    line(pmouseX, pmouseY, mouseX, mouseY)
    pop();
  }

  if (keyIsDown(keyD)) {
    clear();
  }
}
