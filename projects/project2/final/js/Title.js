class Title extends State{
  constructor() {
    super();

    this.titleString = `UNDER PRESSURE`;
    this.subtitleString = `CLICK ANYWHERE TO CONTINUE`;
  }

  draw() {
    super.draw();

    background(58, 12, 163);
    this.displayTitle();
  }

  displayTitle() {
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


    currentState = new StressGame();
  }
}
