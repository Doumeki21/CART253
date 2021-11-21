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
  }

  draw() {
    super.draw();

    this.checkPass();
    this.checkHitTarget();

    this.displayMeter();
    this.displayTarget();
    this.displayInstructions();
  }

  checkPass() {
    // if progressBar fills to max height,
    if (fillProgressBar.height >= progressBar.height) {
      //then game switches to next game.
      currentState = new FinalGame;
    }
  }

  checkHitTarget() {
    let mouseEnd = map(mouseX, 0, width, 0, 360);
    //If the red meter touches the target,
    if (mouseEnd > target.angle - 10 && mouseEnd < target.angle + 10) {
      // target changes position
      target.angle = random(0, 360);
      //progressBar fills.
      fillProgressBar.height += 15;
    }
  }

  displayMeter() {
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
    arc(fillMeter.x, fillMeter.y, fillMeter.width, fillMeter.height, 0, mouseEnd);
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
