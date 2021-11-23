class Blackout extends State {
  constructor() {
    super();

    this.cover = {
      x: 0,
      y: 0,
      width: width,
      height: height,
      alpha:255,
      fadeAmount: 100,
    }
  }

  draw() {
    this.cover.alpha -= this.cover.fadeAmount;

    //subtract alpha to fade out.
    //if current alpha reaches 0-
    if (this.alpha <= 0) {
      currentState = new End();
    }
    // //When time runs out = Game over.
    // if (this.numCircles === 0) {
    //   state = `timeUp`;
    // }
  }
}
