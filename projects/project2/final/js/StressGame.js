class StressGame extends GameState {
  constructor() {
    super();

    //white stroke
    this.meter = {
      x: undefined,
      y: undefined,
      size: 300,
    };
    //Red stroke
    this.fillMeter = {
      x: undefined,
      y: undefined,
      width: 300,
      height: 300,
    };
    //reappearing blue cirlce on the white stroke.
    this.target = {
      size: 50,
      angle: undefined,
    };
    this.initialize = false;
  }


  targetReset() {
    this.target.angle = random(0, 360);
  }

  draw() {
    if (!this.initialize) {
      // Initialize the angle
      this.targetReset();
      this.initialize = true;
    }

    super.draw();
    this.checkPass();
    this.checkHitTarget();

    this.displayMeter();
    this.displayTarget();
    this.displayInstructions();
  }

  checkPass() {
    // if progressBar fills to max height,
    if (this.fillProgressBar.height >= this.progressBar.height) {
      //then game switches to next game.
      currentState = new FinalGame();
    }
  }

  checkHitTarget() {
    //Target appears anywhere on the white stroke.
    angleMode(DEGREES);

    let mouseEnd = map(mouseX, 0, width, 0, 360);
    //If the red meter touches the target,
    if (mouseEnd > this.target.angle - 10 && mouseEnd < this.target.angle + 10) {
      // target changes position
      this.target.angle = random(0, 360);
      //progressBar fills.
      this.fillProgressBar.height += 15;
      this.targetReset();
    }
  }

  displayMeter() {

    // this.fillProgressBar.height = 10;

    //Placing the meter at the center of the window.
    this.meter.x = width / 2;
    this.meter.y = height / 2;
    this.fillMeter.x = width / 2;
    this.fillMeter.y = height / 2;

    //Draw white stroke
    strokeWeight(20);
    stroke(255);
    noFill()
    ellipse(this.meter.x, this.meter.y, this.meter.size);

    //Draw red stroke
    push();
    strokeWeight(10);
    stroke(247, 37, 133);
    //Red stroke follows by moving the mouse side-to-side.
    let mouseEnd = map(mouseX, 0, width, 0, 360);
    arc(this.fillMeter.x, this.fillMeter.y, this.fillMeter.width, this.fillMeter.height, 0, mouseEnd);
    pop();
  }

  displayTarget() {
    //Draw target
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

  displayInstructions() {
    //instructions text
    push()
    noStroke();
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text(`<< MOVE >>`, width / 2, height - 30);
    pop();
  }
}
