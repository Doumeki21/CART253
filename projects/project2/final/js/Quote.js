//Event: this event is triggered after the Drawing simulation. Proceed by clicking.

//Calling all properties to perform this event.
//Extends: includes sound effect of mouse clicked from the State class.
class Quote extends State {
  constructor() {
    super();
    //A string of dialogue and quote stored in an array.
    this.quoteString = [
      ``,
      `Remember...`,
      `“Success is not final, failure is not fatal” \n -Winston Churchill`,
      `END`
    ];
    //the `click` indicator/ button.
    this.continue = `Click`;
    //A counter to keep track of which string we are on.
    this.currentIndex = 0;
  }

  //perform the program.
  draw() {
    super.draw();
    //Background color is the same bright magenta color as in Drawing.
    background(99, 28, 156);
    //display the click indicator and string of dialogue.
    this.displayClick();
    this.displayQuote();
  }

  //Display the click button.
  displayClick() {
    push()
    noStroke();
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text(this.continue, width - 300, height - 200);
    pop();
  }

  //Display the string of dialogue.
  displayQuote() {
    push()
    noStroke();
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text(this.quoteString[this.currentIndex], width / 2, height / 2);
    pop();
  }

  //Click to proceed.
  mouseClicked() {
    super.mouseClicked();
    // The string/ dialogue proceeds to the next line after every click,
    this.currentIndex++;
    //when it reaches the final line,
    if (this.currentIndex === this.quoteString.length) {
      //the program resets and return to title screen.
      reset();
      currentState = new Title();
    }
  }
}
