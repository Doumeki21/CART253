class Blackout extends State {
  constructor() {
    super();

    this.cover = {
      x: 0,
      y: 0,
      width: width,
      height: height,
      alpha:255,
      fadeAmount: 0.5,
    }
    heartbeatSound.play();
    sirenSound.play();
  }

  draw() {
    background()

    this.cover.alpha -= this.cover.fadeAmount;

    //subtract alpha to fade out.
    //if current alpha reaches 0-
    if (this.cover.alpha <= 0) {
      heartbeatSound.stop();
      sirenSound.stop();
      currentState = new End();
    }
    // //When time runs out = Game over.
    // if (this.numCircles === 0) {
    //   state = `timeUp`;
    // }

    push();
    fill(0, this.cover.alpha);
    rect(this.cover.x, this.cover.y, this.cover.width, this.cover.height);
    pop();
  }
}
