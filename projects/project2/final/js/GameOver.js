//Event: Player couldn't finish the specific game on time. When this state is triggered, the player needs to replay the program from the start.

//Calling all properties to perform this event.
//Extends: includes sound effect of mouse clicked from the State class.
class GameOver extends State {
  constructor() {
    super();
    //A string of phrases.
    this.titleString = `GAME OVER`;
    this.subtitleString = `YOU JUST DIDN'T MAKE IT ON TIME.`;
  }

  //Perform the program
  draw() {
    super.draw();
    //Background color is a slight bluer color.
    background(63, 55, 201);
    //Display the text.
    this.displayGameOver();
  }

  //Display the text
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

  //Proceed to the next event on mouse click.
  mouseClicked() {
    super.mouseClicked();
    //All elements of the program resets to their initial positions.
    reset();
    //Player returns back to the title screen.
    currentState = new Title();
  }
}
