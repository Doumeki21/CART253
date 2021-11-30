//

class End extends State {
  constructor() {
    super();

    this.endString = [
      `Life is more than being successful.`,
      `Take your time.`,
      `Find your happiness.`
    ];

    this.continue = `Click`;
    this.currentIndex = 0;

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
    super.draw();

    background(99, 28, 156);
    this.displayClick();
    this.displayEnd();

    this.cover.alpha -= this.cover.fadeAmount;

    //subtract alpha to fade out.
    //if current alpha reaches 0-
    let volume = map(this.cover.alpha, 0, 255, 0, 1);
    heartbeatSound.setVolume(volume);
    sirenSound.setVolume(volume);

    if (this.cover.alpha <= 0) {
      heartbeatSound.stop();
      sirenSound.stop();
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

  displayClick() {
    push()
    noStroke();
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text(this.continue, width - 300, height - 200);
    pop();
  }

  displayEnd() {

    push()
    noStroke();
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text(this.endString[this.currentIndex], width / 2, height / 2);
    pop();
  }

  mouseClicked() {
    super.mouseClicked();

    if (this.currentIndex < this.endString.length) {
      this.currentIndex ++;
    }
    else if (this.currentIndex === this.endString.length) {
      currentState = new Drawing();
      heartbeatSound.stop();
      sirenSound.stop();
    }
  }
}
