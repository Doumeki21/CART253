class Drawing extends State {
  constructor() {
    super();
    
    this.keyD = 68;
    this.textbox = {
      x: width - 300,
      y: height - 200,
      width: 300,
      height: 150,
    }
  }

  draw() {
    //Draw a line
    if (mouseIsPressed) {
      push();
      stroke(255);
      strokeWeight(2);
      // stroke(212, 50, 50);
      line(pmouseX, pmouseY, mouseX, mouseY)
      pop();
    }
    //Clear canvas
    if (keyIsDown(this.keyD)) {
      clear();
      background(99, 28, 156);
    }

    this.displayText();
  }

  displayText() {
    //instructions
    push();
    textSize(50);
    textAlign(CENTER);
    fill(0);
    text(`Draw what you love`, width / 2, 200);
    pop();

    push();
    textSize(30);
    textAlign(CENTER);
    fill(0);
    text(`Press D to clear canvas.`, width / 2, 250);
    pop();

    //TEXTbOX
    push();
    rectMode(CENTER);
    fill(212);
    rect(this.textbox.x, this.textbox.y, this.textbox.width, this.textbox.height);
    pop();

    //proceed text
    push();
    textSize(30);
    textAlign(CENTER);
    text(`Click here once \nYou're done!`, width - 300, height - 200);
    pop();
  }

  mousePressed() {
    if (mouseX > this.textbox.x - this.textbox.width / 2 &&
      mouseX < this.textbox.x + this.textbox.width / 2 &&
      mouseY > this.textbox.y - this.textbox.height / 2 &&
      mouseY < this.textbox.y + this.textbox.height / 2) {
      currentState = new Quote;
    }
  }
}
