class Drawing {
  constructor() {
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
      strokeWeight(2);
      // stroke(212, 50, 50);
      line(pmouseX, pmouseY, mouseX, mouseY)
      pop();
    }
    //Clear canvas
    if (keyIsDown(keyD)) {
      clear();
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
    rect(textbox.x, textbox.y, textbox.width, textbox.height);
    pop();

    //proceed text
    push();
    textSize(30);
    textAlign(CENTER);
    text(`Click here once \nYou're done!`, width - 300, height - 200);
    pop();
  }

  mousePressed() {
    if (mouseX > textbox.x - textbox.width / 2 &&
      mouseX < textbox.x + textbox.width / 2 &&
      mouseY > textbox.y - textbox.height / 2 &&
      mouseY < textbox.y + textbox.height / 2) {
      state = `final`;
    }
  }
}
