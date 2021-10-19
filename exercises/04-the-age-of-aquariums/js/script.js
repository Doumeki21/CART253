/**
Exercise 04: The Age of Aquariums
Olenka Yuen

Objectives:
1. Working with arrays and for-loops
2. Working with arrays and random selection

Brief:
- User controlled with mouse/  keyboard.
- User interact with object (Make them run away.// Move them)
- Change the fish creation (
    Include more parameters so that the fish (or whatever) can be more varied (color? speed? size?)
    Add at least one new property to the fish (or whatever) that changes their behaviour
)
- At least 2 endings. (Timeout with frameCount, "success! you collected all the sheeps in the pen before nightfall")
*/

"use strict";

// The user moved with the mouse.
let user = {
  x: 250,
  y: 250,
  vx: 4,
  vy: 4,
  size: 50,
  positionBeforeX: 0,
  positionBeforeY: 0,
};

//Red sheep.
let redSheeps = [];
let numRedSheep = 3;
let amountInRedPen = 0;

//Green sheep.
let greenSheeps = [];
let numGreenSheep = 3;
let amountIngreenPen = 0;

//Red sheep pen
let redPen = {
  x: 250,
  y: 250,
  size: 100,
  currentFill: {
    r: 0,
    g: 0,
    b: 0,
  },
};

//Green sheep pen
let greenPen = {
  x: 250,
  y: 250,
  size: 100,
  currentFill: {
    r: 0,
    g: 0,
    b: 0,
  },
};

//20 white circles representing the timer.
let timer = {
  x: 100,
  y: 150,
  size: 20,
  fill: 255,
  //start at full alpha.
  alpha: 255,
  fadeAmount: 4,
  //changes over time.
  numCircles: 20,
}

//Different screens: title, game, good/ bad endings.
let state = `title`;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numRedSheep; i++) {
    //red sheeps at random locations.
    let redSheep = createSheep(random(0, width), random(0, height), 0.5, 255, 188, 181);
    //crete red sheep (variable introduced above code) in redSheeps array!
    redSheeps.push(redSheep);
  }

  for (let i = 0; i < numGreenSheep; i++) {
    //Blue sheeps at random locations.
    let greenSheep = createSheep(random(0, width), random(0, height), 0.8, 188, 255, 181);
    //crete blue sheep (variable introduced above code) in greenSheeps array!
    greenSheeps.push(greenSheep);
  }

  reset();
}

function reset() {


  //Red sheep pen at random location.
  redPen.x = random(0, width - redPen.size);
  redPen.y = random(0, height - redPen.size);

  //Blue sheep pen at random location.
  greenPen.x = random(0, width - greenPen.size);
  greenPen.y = random(0, height - greenPen.size);

  timer.numCircles = 20;
}

function createSheep(x, y, speed, r, g, b) {
  let sheep = {
    x: x,
    y: y,
    size: 50,
    fill: {
      r: r,
      g: g,
      b: b,
    },
    vx: 5,
    vy: 5,
    //Change speed for different sheeps
    speed: speed,
    isInPen: false,
  };
  return sheep;
}

function draw() {
  background(10);

  if (state === `title`) {
    title();
  } else if (state === `game`) {
    game();
  } else if (state === `safe`) {
    safe();
    reset();
  } else if (state === `timeUp`) {
    timeUp();
    reset();
  }
}

function title() {
  push();
  textSize(100);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`SHEEPS`, width / 2, height / 2);
  pop();

  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`CLICK TO CONTINUE`, width / 2, height / 2 + 200);
  pop();
}

function game() {
  moveUser();
  displayRedPen();
  displaygreenPen();

  //sheep.length is total of (6) sheeps.
  //redhseeps.length = numRedSheep in array
  for (let i = 0; i < redSheeps.length; i++) {
    moveSheep(redSheeps[i]);
    checkPush(redSheeps[i]);
    checkInRedPen(redSheeps[i]);
    displaySheep(redSheeps[i]);
  }

  //greenSheeps.length = numGreenSheep in array
  for (let i = 0; i < greenSheeps.length; i++) {
    moveSheep(greenSheeps[i]);
    checkPush(greenSheeps[i]);
    checkIngreenPen(greenSheeps[i]);
    displaySheep(greenSheeps[i]);
  }

  checkSafe();
  checkTimeUp();
  displayTimer();
  displayUser();
}

function safe() {
  push();
  textSize(100);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text(`GOOD JOB!`, width / 2, height / 2);
  pop();

  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`THE SHEEPS ARE SAFE INSIDE THEIR PENS`, width / 2, height / 2 + 100);
  pop();
}

function timeUp() {
  push();
  textSize(100);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text(`OH NO!`, width / 2, height / 2);
  pop();

  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`YOU DIDN'T COLLECT ALL THE SHEEPS IN THEIR PENS BEFORE NIGHTFALL.`, width / 2, height / 2 + 100);
  pop();
}

function moveUser() {
  user.positionBeforeX = user.x;
  user.positionBeforeY = user.y;

  user.x = mouseX;
  user.y = mouseY;
}

function displayRedPen() {
  fill(redPen.currentFill.r, redPen.currentFill.g, redPen.currentFill.b);
  noStroke();
  rectMode(CORNER);
  rect(redPen.x, redPen.y, redPen.size);
}

function displaygreenPen() {
  fill(greenPen.currentFill.r, greenPen.currentFill.g, greenPen.currentFill.b);
  noStroke();
  rectMode(CORNER);
  rect(greenPen.x, greenPen.y, greenPen.size);
}

function moveSheep(sheep) {
  sheep.vx = random(-5, 5) * sheep.speed;
  sheep.vy = random(-5, 5) * sheep.speed;

  sheep.x = constrain(sheep.x, 0, width);
  sheep.y = constrain(sheep.y, 0, height);

  sheep.x += sheep.vx;
  sheep.y += sheep.vy;
}

function checkPush(sheep) {
  if (sheep.x + sheep.size / 2 > user.x - user.size / 2 && sheep.x - sheep.size / 2 < user.x + user.size / 2 && sheep.y + sheep.size / 2 > user.y - user.size / 2 && sheep.y - sheep.size / 2 < user.y + user.size / 2) {
    let distUserX = user.x - user.positionBeforeX;
    let distUserY = user.y - user.positionBeforeY;

    sheep.x += distUserX;
    sheep.y += distUserY;
  }
}

function checkInRedPen(sheep) {
  //If sheep touches inside on any side of the red pen,
  if (sheep.x + sheep.size / 2 > redPen.x - redPen.size / 2 && sheep.x - sheep.size / 2 < redPen.x + redPen.size / 2 && sheep.y + sheep.size / 2 > redPen.y - redPen.size / 2 && sheep.y - sheep.size / 2 < redPen.y + redPen.size / 2) {
    if (!sheep.isInPen) {
      //-then sheep is confirmed to be in pen and counts up by 1.
      sheep.isInPen = true;
      amountInRedPen++;
    }
  } else {
    //else if sheep is outside the red pen,
    if (sheep.isInPen === true) {
      sheep.isInPen = false;
      //then red sheeps counts down by 1.
      amountInRedPen--;
    }
  }
  //Red pen fills to a color of bright red as more sheeps (max 3) fills the pen.
  redPen.currentFill.r = map(amountInRedPen, 0, 3, 100, 255);

}

function checkIngreenPen(sheep) {
  //If sheep touches inside on any side of the green pen,
  if (sheep.x + sheep.size / 2 > greenPen.x - greenPen.size / 2 && sheep.x - sheep.size / 2 < greenPen.x + greenPen.size / 2 && sheep.y + sheep.size / 2 > greenPen.y - greenPen.size / 2 && sheep.y - sheep.size / 2 < greenPen.y + greenPen.size / 2) {
    if (!sheep.isInPen) {
      //-then sheep is confirmed to be in green pen and counts up by 1.
      sheep.isInPen = true;
      amountIngreenPen++;
    }
  } else {
    //else if sheep is outside the green pen,
    if (sheep.isInPen === true) {
      sheep.isInPen = false;
      //then green sheeps counts down by 1.
      amountIngreenPen--;
    }
  }
  //Green pen fills to a color of bright green as more sheeps (max 3) fills the pen.
  greenPen.currentFill.g = map(amountIngreenPen, 0, 3, 100, 255);
}

function displaySheep(sheep) {
  push();
  fill(sheep.fill.r, sheep.fill.g, sheep.fill.b);
  noStroke();
  ellipse(sheep.x, sheep.y, sheep.size);
  pop();
}

function checkSafe() {
  if (amountInRedPen === 3 && amountIngreenPen === 3) {
    state = `safe`;
  }
}

function checkTimeUp() {
  //Check if time runs out.
  //outisde the forloop since it's only fading one circle (at a time).
  timer.alpha -= timer.fadeAmount;
  //subtract alpha to fade out.
  //if current alpha reaches 0-
  if (timer.alpha <= 0) {
    //then remove a circle completely.
    timer.numCircles--;
    //and reset alpha to 255 so next one fades.
    timer.alpha = 255;
  }
  //When time runs out = Game over.
  if (timer.numCircles === 0) {
    state = `timeUp`;
  }
}

function displayTimer() {
  let y = timer.y;
  for (let i = timer.numCircles; i > 0; i--) {
    //Default is full color.
    let alpha = 255;
    //If current circle is the last one--
    if (i === 1) {
      //then use timer.alpha (which is reducing to 0.)
      alpha = timer.alpha;
    }

    push();
    noStroke();
    fill(255, alpha);
    ellipse(timer.x, y, timer.size);
    pop();
    y += 40;
  }
}

function displayUser() {
  fill(255);
  noStroke();
  ellipse(user.x, user.y, user.size);
}

function mouseClicked() {
  if (state === `title`) {
    state = `game`;
  } else if (state === `safe`) {
    state = `title`;
  } else if (state === `timeUp`) {
    state = `title`;
  }
}
