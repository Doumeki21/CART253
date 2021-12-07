//Game: Hover the mouse from left to right to hit the target using the meter.

//Calling all properties to perform the game.
//Extends: includes progress bar and timer.
class StressGame extends GameState {
  constructor() {
    super();
    //white stroke for the base of the meter.
    this.meter = {
      x: undefined,
      y: undefined,
      size: 300,
    };
    //Red stroke that the player controls.
    this.fillMeter = {
      x: undefined,
      y: undefined,
      width: 300,
      height: 300,
    };
    //Reappearing blue cirlce on the white stroke.
    this.target = {
      size: 50,
      angle: undefined,
    };
    //Used to check whether target should initialize new position.
    this.initialize = false;
    //Identify the game as a string to be called in the array of the main script.
    this.gameName = `stressGame`;
  }

  //Target resets at a random angle on the meter.
  targetReset() {
    this.target.angle = random(0, 360);
  }

  //Perform the game.
  draw() {
    super.draw();
    //If the target isn't initialized to a new position,
    if (!this.initialize) {
      // then Initialize a new angle
      this.targetReset();
      this.initialize = true;
    }

    //Check when to proceed to next game.
    this.checkPass();
    //Check when the player touches the target with the meter.
    this.checkHitTarget();
    //Display all visuals within this game.
    this.displayMeter();
    this.displayTarget();
    this.displayInstructions();
  }

  //Check when to proceed to next game.
  checkPass() {
    // if progressBar fills to max height,
    if (this.fillProgressBar.height >= this.progressBar.height) {
      //then game switches to next game.
      nextGame();
    }
  }

  //Check when the player touches the target with the meter.
  checkHitTarget() {
    angleMode(DEGREES);
    //Target appears anywhere on the white line.
    let mouseEnd = map(mouseX, 0, width, 0, 360);
    //If the red meter touches the target,
    if (mouseEnd > this.target.angle - 10 && mouseEnd < this.target.angle + 10) {
      // target changes position
      this.target.angle = random(0, 360);
      //progressBar fills.
      this.fillProgressBar.height += 15;
      //Play sound effects.
      selectSFX.play();
      progressSFX.play();
      //Target resets to a new location.
      this.targetReset();
    }
  }

  //Display the meter
  displayMeter() {
    //Placing the meter at the center of the window.
    this.meter.x = width / 2;
    this.meter.y = height / 2;
    this.fillMeter.x = width / 2;
    this.fillMeter.y = height / 2;

    //Draw white stroke
    push();
    strokeWeight(20);
    stroke(255);
    noFill()
    ellipse(this.meter.x, this.meter.y, this.meter.size);
    pop();

    //Draw red stroke
    push();
    strokeWeight(10);
    stroke(247, 37, 133);
    noFill();
    //Red stroke follows by moving the mouse side-to-side.
    let mouseEnd = map(mouseX, 0, width, 0, 360);
    arc(this.fillMeter.x, this.fillMeter.y, this.fillMeter.width, this.fillMeter.height, 0, mouseEnd);
    pop();
  }

  //Display target
  displayTarget() {
    push();
    fill(76, 201, 240, 155);
    noStroke();
    //translate the default point to the center of the meter.
    translate(this.meter.x, this.meter.y);
    //rotate function goes around a default/ origin (which is usually top left corner or 0,0) point.
    rotate(this.target.angle);
    //target draws on the radius of the meter.
    ellipse(this.meter.size / 2, 0, this.target.size);
    pop();
  }

  //Display instructions
  displayInstructions() {
    push()
    noStroke();
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text(`<< MOVE >>`, width / 2, height - 30);
    pop();
  }
}
