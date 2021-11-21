class GameOver extends State {
  constructor() {
    super();

    this.titleString = `GAME OVER`;
    this.subtitleString = `YOU JUST DIDN'T MAKE IT ON TIME.`;
  }

  draw() {
    super.draw();

    background(63, 55, 201);
    this.displayGameOver();
  }

  displayGameOver() {
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

    currentState = new Title();
  }
}
