/**
Exercise 03: Love, actually
Olenka Yuen

GOAL: bring the 2 circles together!

PLAN:
.title screen.
.2 circles.
.Reach the child using the keyboard arrows!
*Once the circles touch- new random position for each circle.
*Add a score count?

REQUIREMENTS:
*Own if statemetnts
*working with loops for drawing.
.User control circle.
.Non-user circle move differently.
*extra function
*extra ending.
*/

"use strict";


let timer = {
  x: 100,
  y: 150,
  size: 20,

  //Need to start at full alpha.
  alpha: 255,
  fadeAmount: 5,
}

//We need to change this over time.
let numCircles = 5;

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(0);
  noStroke();
  // fill(255, timer.alpha);

  let x = timer.x;

  for (let i = numCircles; i >= 0; i--) {
    //Alpha will be calculated separatley. Fading alpha used for last circle.

    //Default is full.
    let alpha = 255;
    //If current circle is the last one--
    if (i === 0) {
      //then use timer.alpha (which is reducing to 0.)
      alpha = timer.alpha;
    }
    push();
    fill(255, alpha);
    ellipse(x, timer.y, timer.size);
    pop();
    x += 40;
  }

    //outisde the forloop since it's only fading one circle (at a time).
    timer.alpha += timer.fadeAmount;
    //subtract alpha to fade out
    //if current alpha reaches 0-
    if (timer.alpha <= 0) {
      //then remove a circle completely.
      numCircles--;
      //and reset alpha to 255 so next one fades.
      timer.alpha = 255;
    }
}
