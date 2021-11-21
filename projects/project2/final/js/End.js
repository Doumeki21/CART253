class End extends State {
  constructor() {
    super();
    
    this.titleString = `END`;
    this.subtitleString = `Life is more than being successful. \n Take your time.\n Find your happiness.`;
  }

  draw() {
    super.draw();

    background(58, 12, 163);
    this.displayEnd();
  }

  displayEnd() {
    push()
    noStroke();
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text(this.titleString, width / 2, height / 2);
    pop();

    push()
    noStroke();
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text(this.subtitleString, width / 2, height / 2 + 100);
    pop();
  }

  mouseClicked() {
    super.mouseClicked();

    currentState = new Quote();
  }
}
