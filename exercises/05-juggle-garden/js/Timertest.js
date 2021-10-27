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

function setup() {
    createCanvas(windowWidth, windowHeight);

    reset();
}

function reset() {


  //The timer counts down for ~4 seconds at every start of the game.
  timer.numCircles = 5;
  timer.alpha = 255;
}

function draw() {
  background(0);

  checkTimeUp();
  displayTimer();

}

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
