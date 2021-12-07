//Simulation: A relaxing and reflective drawing simulation. (Take a screenshot and share with your friends!)

//Calling all properties to perform the simuation.
//Extends: includes mousePressed and mouseReleased functions to work.
class Drawing extends State {
  constructor() {
    super();
    //The D key to clear canvas.
    this.keyD = 68;
    //The button to proceed in the program.
    this.textbox = {
      x: width - 200,
      y: height - 200,
      width: 310,
      height: 120,
    }
    //Lighter magenta background color than the previous event.
    background(99, 28, 156);
  }

  //perform the drawing simulation.
  //The draw function is referenced from The Coding Train video (link in README.md)//
  draw() {
    //Once mouse is pressed,
    if (mouseIsPressed) {
      //Draw a line.
      push();
      stroke(255);
      strokeWeight(2);
      line(pmouseX, pmouseY, mouseX, mouseY);
      pop();
    }
    //Once the D key is pressed,
    if (keyIsDown(this.keyD)) {
      //Canvas is cleared.
      clear();
      background(99, 28, 156);
    }
    //All text (ex. instructions) are displayed.
    this.displayText();
  }

  //Recall this function from the State class to stop sound every mouse click.
  mouseClicked() {
    super.mouseClicked();
    selectSFX.stop();
  }

  //Display all the text shown on screen.
  displayText() {
    //instruction 1 (All left-aligned at the top left corner.)
    push();
    noStroke();
    textSize(50);
    fill(255);
    text(`Draw what you love`, 100, 200);
    pop();
    //instruction 2
    push();
    noStroke();
    textSize(30);
    fill(255);
    text(`Press D to clear canvas.`, 100, 250);
    pop();
    //Tip.
    push();
    noStroke();
    textSize(20);
    fill(255);
    text(`Share the drawing with your friends!`, 100, 300);
    pop();

    //TEXTbOX (button is located at the lower right corner.)
    push();
    rectMode(CENTER);
    fill(212);
    rect(this.textbox.x, this.textbox.y, this.textbox.width, this.textbox.height);
    pop();
    //button text
    push();
    textSize(30);
    textAlign(CENTER);
    text(`Click here once \nYou're done!`, width - 200, height - 200);
    pop();
  }

  //Check if program proceeds to the next event.
  mousePressed() {
    //If mouse is clicked inside the lower right button,
    if (mouseX > this.textbox.x - this.textbox.width / 2 &&
      mouseX < this.textbox.x + this.textbox.width / 2 &&
      mouseY > this.textbox.y - this.textbox.height / 2 &&
      mouseY < this.textbox.y + this.textbox.height / 2) {
      //Program moves onto the next event.
      currentState = new Quote;
    }
  }
}
