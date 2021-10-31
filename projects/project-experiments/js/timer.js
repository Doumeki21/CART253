
"use strict";

let counter = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  if(counter <= 0) {
    //Change state in project.
    counter = 0;
  }

  //count in seconds.
    counter -= 1/60;
    push();
    fill(255);
    textSize(60);
    textAlign(CENTER, CENTER);
    text(round(counter), 200, 200);
    pop();


}
