//Event: Player will first land on this state when starting the program.

//Calling all properties to perform this event.
//Extends: includes sound effect of mouse clicked from the State class.
class Title extends State {
  constructor() {
    super();
    //A string of phrases.
    this.titleString = `UNDER PRESSURE`;
    this.subtitleString = `CLICK ANYWHERE TO CONTINUE`;
  }

  //Perform the program
  draw() {
    super.draw();
    //Background color is a vibrant purple.
    background(58, 12, 163);
    //Display the title.
    this.displayTitle();
  }

  //Display the title.
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

  //Switch from the title screen to the stress game after clicking on the mouse.
  mouseClicked() {
    super.mouseClicked();
    currentState = new StressGame();
  }
}
