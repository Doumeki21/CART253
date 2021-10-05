/**
Exercise 03: Love, actually
Olenka Yuen

GOAL: Bring the mother to the baby! Move the purple circle using the keyboard arrows. Beware of the time and hidden danger zones!

PLAN:
.title screen.
.2 circles.
.Reach the child using the keyboard arrows!
*Add a score count?

REQUIREMENTS:
.Own if statemetnts
.working with loops for drawing. (TIMER)
.User control circle.
.Non-user circle move differently.
.extra function
.extra ending.
*/

"use strict";

//You control this purple circle.
let user = {
  fill: {
    r: 201,
    g: 189,
    b: 255,
  },
  x: 250,
  y: 250,
  size: 40,
  vx: 0,
  vy: 0,
  speed: 5,
};

//You chase this blue circle.
let child = {
  fill: {
    r: 69,
    g: 238,
    b: 255,
  },
  x: 250,
  y: 250,
  size: 30,
  vx: 0,
  vy: 0,
  speed: 10,
};

//You cannot touch this hidden area.
let dangerZone = {
  fill: 0,
  x: 250,
  y: 250,
  size: 100,
}

//5 white circles representing the timer.
let timer = {
  x: 100,
  y: 150,
  size: 20,
  fill: 255,
  //start at full alpha.
  alpha: 255,
  fadeAmount: 4,
  //changes over time.
  numCircles: 5,
}

//Any screen: title, win, or game over screens.
let state = `title`;

function setup() {
  createCanvas(windowWidth, windowHeight);

  reset();
}

//Game characters and timer resets position after every try.
function reset() {
  //Circle position sperated from one another.
  child.x = width / 2;
  child.y = 0;
  user.x = width / 2;
  user.y = height;
  //Danger zone can be located anywhere.
  dangerZone.x = random(0, width);
  dangerZone.y = random(0, height);
  //The timer counts down for ~4 seconds at every start of the game.
  timer.numCircles = 5;
  timer.alpha = 255;
}

//What shows plays on screen.
function draw() {
  background(0);

  //Screen title.
  if (state === `title`) {
    title();
  }
  //Gameplay.
  else if (state === `simulation`) {
    simulation();
  }
  //Victory!
  else if (state === `safe`) {
    safe();
    reset();
  }
  //Bad end 1: You touched the danger zone.
  else if (state === `ouch`) {
    ouch();
    reset();
  }
  //Bad end 2: you ran out of time.
  else if (state === `timeUp`) {
    timeUp();
    reset();
  }
}

//Display title of the game.
function title() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`TANTRUM`, width / 2, height / 2);
  pop();

  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`USE ARROW KEYS TO REACH THE BABY.`, width / 2, height / 2 + 100);
  pop();

  push();
  textSize(15);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text(`BEWARE OF DANGER ZONES!`, width / 2, height / 2 + 120);
  pop();

  push();
  textSize(15);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`PRESS THE SPACE BAR TO CONTINUE`, width / 2, height / 2 + 160);
  pop();
}

//Display simulation.
function simulation() {
  handleInput();
  move();
  checkOverlap();
  checkDangerZone();
  checkTimeUp()
  displayTimer();
  display();
}

//Display win situation of the game.
function safe() {
  push();
  textSize(64);
  fill(147, 214, 219);
  textAlign(CENTER, CENTER);
  text(`YOU SAVED THE DAY!`, width / 2, height / 2);
  pop();
}

//Display Game over 1: touching the hidden danger zone.
function ouch() {
  push();
  textSize(64);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text(`OUCH!`, width / 2, height / 2);
  pop();

  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`YOU TRIPPED OVER BOOKS AND BROKE YOUR ANKLE.`, width / 2, height / 2 + 100);
  pop();
}

//Display Game over 2: running out of time.
function timeUp() {
  push();
  textSize(64);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text(`TIME UP!`, width / 2, height / 2);
  pop();

  push();
  textSize(20);
  fill(212, 212, 212);
  textAlign(CENTER, CENTER);
  text(`YOUR SPOUSE CAME BACK AND SAW A MESSY HOUSE!`, width / 2, height / 2 + 100);
  pop();
}

//User control.
function handleInput() {
  //User control horizontol axis.
  if (keyIsDown(LEFT_ARROW)) {
    user.vx = -user.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    user.vx = user.speed;
  }
  //Else user doesn't move.
  else {
    user.vx = 0;
  }
  //User control vertical axis.
  if (keyIsDown(UP_ARROW)) {
    user.vy = -user.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    user.vy = user.speed;
  }
  //Else user doesn't move.
  else {
    user.vy = 0;
  }
}

//Character movements.
function move() {
  //User movement.
  user.x += user.vx;
  user.y += user.vy;

  //Blue circle constrains only within the canvas size.
  //Blue circle moving at random positions.
  child.x += child.vx;
  child.x = constrain(child.x, 0, width);
  child.y += child.vy;
  child.y = constrain(child.y, 0, height);
  //child jitter: moving at random speeds.
  let change = random();
  if (change < 0.1) {
    child.vx = random(-child.speed, child.speed);
    child.vy = random(-child.speed, child.speed);
  }
}

//Check if circles overlap.
function checkOverlap() {
  let d = dist(user.x, user.y, child.x, child.y)
  if (d < user.size / 2 + child.size / 2) {
    //GOOD ENDING.
    state = `safe`;
  }
}

//Check if user and danger zone overlap.
function checkDangerZone() {
  let d = dist(user.x, user.y, dangerZone.x, dangerZone.y)
  if (d < user.size / 2 + dangerZone.size / 2) {
    //BAD ENDING 1.
    state = `ouch`;
  }
}

//Check if time runs out.
function checkTimeUp() {

  //Alpha will be calculated separatley. Fading alpha used for last circle.
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

function display() {
  //Display circles.
  //Display user.
  push();
  fill(user.fill.r, user.fill.r, user.fill.b);
  ellipse(user.x, user.y, user.size);
  //Display child.
  fill(child.fill.r, child.fill.g, child.fill.b);
  ellipse(child.x, child.y, child.size);
  pop();
  //Display danger zone.
  fill(dangerZone.fill);
  ellipse(dangerZone.x, dangerZone.y, dangerZone.size);
}

//Display the timer.
function displayTimer() {
  let x = timer.x;
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
    ellipse(x, timer.y, timer.size);
    pop();
    x += 40;
  }
}

//Press the space bar to proceed to next screen.
function keyPressed() {
  if (keyCode === 32) {
    if (state === `title`) {
      state = `simulation`;
    } else if (state === `safe`) {
      state = `title`;
    } else if (state === `ouch`) {
      state = `title`;
    } else if (state === `timeUp`) {
      state = `title`;
    }
  }
}
