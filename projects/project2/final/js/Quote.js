class Quote extends State{
  constructor() {
    super();

    this.quoteString = [
      ``,
      `Remember...`,
      `"Success is not final, failure is not fatal." \n -Winston Churchill`,
      `END`
    ];
    this.continue = `Click`;
    this.currentIndex = 0;
  }

  draw() {
    super.draw();

    background(99, 28, 156);
    this.displayClick();
    this.displayQuote();
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

  displayQuote() {
    push()
    noStroke();
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text(this.quoteString[this.currentIndex], width / 2, height / 2);
    pop();

    // push()
    // noStroke();
    // fill(255);
    // textSize(30);
    // textAlign(CENTER);
    // text(this.subtitleString, width / 2, height / 2 + 100);
    // pop();
  }

  mouseClicked() {
    super.mouseClicked();

    // if (this.currentIndex < this.quoteString.length - 1) {
      this.currentIndex ++;
    // }
     if (this.currentIndex === this.quoteString.length) {
      currentState = new Title();
    }
  }
}
