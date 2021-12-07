//Dialogue: This state is triggered after the 6 random games. Player proceeds to the next line by clicking anywhere on the screen.

//Calling all properties to perform this event.
//Extends: includes sound effect of mouse clicked from the State class.
class End extends State {
  constructor() {
    super();
    //A string of dialogue stored in an array.
    this.endString = [
      `Stop chasing after time.`,
      `There are things better in life than “success”.`,
      `Find your happiness.`
    ];
    //the `click` indicator/ button.
    this.continue = `Click`;
    //A counter to keep track of which string we are on.
    this.currentIndex = 0;
    //A black rectangle that fills the screen to simulate a blackout.
    this.cover = {
      x: 0,
      y: 0,
      width: width,
      height: height,
      alpha: 255,
      fadeAmount: 0.5,
    }
    //Sounds that play in the background.
    heartbeatSound.play();
    sirenSound.play();
  }

  //perform the program.
  draw() {
    super.draw();
    //Background color is the same bright magenta color as in Drawing.
    background(99, 28, 156);
    //display the click indicator and string of dialogue.
    this.displayClick();
    this.displayEnd();
    //The black screen fades out at a speed of ~5 seconds. (alpha subtracted to fade out.)
    this.cover.alpha -= this.cover.fadeAmount;

    //The volume of the background sound is mapped to the alpha of the black screen.
    let volume = map(this.cover.alpha, 0, 255, 0, 1);
    heartbeatSound.setVolume(volume);
    sirenSound.setVolume(volume);
    //if the alpha reaches 0,
    if (this.cover.alpha <= 0) {
      //All background sounds fades out.
      heartbeatSound.stop();
      sirenSound.stop();
    }
    //Display the black screen.
    push();
    fill(0, this.cover.alpha);
    rect(this.cover.x, this.cover.y, this.cover.width, this.cover.height);
    pop();
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

  //Display the strings of dialogue.
  displayEnd() {
    push()
    noStroke();
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text(this.endString[this.currentIndex], width / 2, height / 2);
    pop();
  }

  //Click to proceed to the next string.
  mouseClicked() {
    super.mouseClicked();
    //If the current line of dialogue is not the last line,
    if (this.currentIndex < this.endString.length) {
      //then show the next line.
      this.currentIndex++;
      //Else if it's the last line,
    } else if (this.currentIndex === this.endString.length) {
      //then go to the next event in the program,
      currentState = new Drawing();
      //All sounds should stop.
      heartbeatSound.stop();
      sirenSound.stop();
    }
  }
}
