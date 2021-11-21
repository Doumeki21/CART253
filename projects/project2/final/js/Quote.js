class Quote extends State{
  constructor() {
    super();

    this.titleString = `"Success is not final, failure is not fatal." \n -Winston Churchill`;
  }

  draw() {
    super.draw();

    background(58, 12, 163);
    this.displayQuote();
  }

  displayQuote() {
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
