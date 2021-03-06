/**
Project 2: prototype
Olenka Yuen

An anthology of games that serves as a life lesson for individuals who overwork themselves.
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

//White rectangle
let user = {
  x: undefined,
  y: undefined,
  width: 50,
  initialHeight: 30,
  currentHeight: undefined,
}

//Falling balls
let ball = {
  x: undefined,
  y: 0,
  vy: 8,
  size: 50,
  active: true,
}

//Pass the line!
let goal = {
  x: 0,
  y: 50,
}

let state = `title`;

function setup() {
  createCanvas(windowWidth, windowHeight);

  reset();
}

function reset() {
  timer = 10;
  fillProgressBar.height = 10;

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

  //White rectangle at bottom of screen.
  user.x = width / 2;
  user.y = height;
  user.currentHeight = user.initialHeight;
}

function draw() {
  background(58, 12, 163);

  if (state === `title`) {
    title();
  } else if (state === `stressGame`) {
    stressGame();
  } else if (state === `finalGame`) {
    finalGame();
  } else if (state === `end`) {
    end();
  } else if (state === `quote`) {
    quote();
    reset();
  } else if (state === `gameOver`) {
    gameOver()
    reset();
  }
}

function title() {
  push()
  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text(`UNDER PRESSURE`, width / 2, height / 2);
  pop();

  push()
  noStroke();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(`CLICK ANYWHERE TO CONTINUE`, width / 2, height / 2 + 100);
  pop();
}

//Add another screen. "In honor of thyself." / "In honor of the self."

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

  //count in seconds
  timer -= 1 / 60;
  //If timer hits 0 = Game ends.
  if (timer <= 0) {
    timer = 0;
    state = `gameOver`;
  }
  //Else if progressBar fills to max height,
  else if (fillProgressBar.height >= progressBar.height) {
    //then game switches to next game.
    state = `finalGame`;
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

//NOTE: for the final, insert bg sound (rain, ambulance siren, heart beat machine) and dialogue/ narration here!

function finalGame() {
  //Target goes down
  ball.y += ball.vy;
  //user is moved with mouse.
  user.x = mouseX;

  //Check if Target touches the user
  if (ball.x + ball.size / 2 > user.x - user.width / 2 && ball.x - ball.size / 2 < user.x + user.width && ball.y + ball.size / 2 > user.y - user.currentHeight / 2 && ball.y - ball.size / 2 < user.y + user.currentHeight / 2) {
    //user grows taller
    user.currentHeight += ball.size * 3;
    ball.active = false;
  }

  //Target disappears when it goes over the bottom edge.
  if (ball.y > height) {
    ball.active = false;
  }
  //Target regenerates at top of screen after it disappears.
  if (!ball.active) {
    resetBall();
  }
  //When user touches goal line,
  if (user.y - user.currentHeight / 2 < goal.y) {
    //Game ends
    state = `end`;
  }

  //Draw target
  push();
  fill(64, 123, 167);
  noStroke();
  ellipse(ball.x, ball.y, ball.size);
  pop();

  //Draw user
  push();
  fill(253, 255, 255);
  noStroke();
  rectMode(CENTER);
  rect(user.x, user.y, user.width, user.currentHeight);
  pop();

  //Draw goal
  stroke(255);
  strokeWeight(2);
  line(goal.x, goal.y, width, goal.y);
}

function resetBall() {
  ball.x = random(5, width - 30);
  ball.y = 0;
  ball.active = true;
}

function end() {
  push()
  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text(`END`, width / 2, height / 2);
  pop();

  push()
  noStroke();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(`Life is more than being successful. \n Take your time.\n Find your happiness.`, width / 2, height / 2 + 100);
  pop();

  //Make an on-click dialogue// message here for the final!
}

function quote() {
  push()
  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text(`"Success is not final, failure is not fatal." \n -Winston Churchill`, width / 2, height / 2);
  pop();
}

function gameOver() {
  background(63, 55, 201);

  push()
  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text(`GAME OVER`, width / 2, height / 2);
  pop();

  push()
  noStroke();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(`YOU JUST DIDN'T MAKE IT ON TIME.`, width / 2, height / 2 + 100);
  pop();
}

function mouseClicked() {
  if (state === `title`) {
    state = `stressGame`;
  } else if (state === `end`) {
    state = `quote`;
  } else if (state === `quote`) {
    state = `title`;
  } else if (state === `gameOver`) {
    state = `title`;
  }
}
