class End extends State {
  constructor() {
    super();

    this.continue = `Click`;

    this.endString = [
      `END`,
      `Life is more than being successful.`,
      `Take your time.`,
      `Find your happiness.`
    ];

    this.currentIndex = 0;
  }

  draw() {
    super.draw();

    background(99, 28, 156);
    this.displayClick();
    this.displayEnd();
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
      currentState = new Quote();
    }
  }
}
