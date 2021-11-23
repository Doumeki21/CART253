class DragDropGame extends GameState {
  constructor() {
    super();

    this.field = {
      x: width / 2,
      y: height / 2 + 50,
      size: 500,
    };
    this.taskShape = undefined;
    this.shapes = [];

    this.taskReset();
  }

  taskReset() {
    this.shapes[0] = new Shape(this.field.x + this.field.size / 2 + 100, height / 2 - 140, color(255, 0, 0), `circle`, `ruby infinite-sided polygon`);

    this.shapes[1] = new Shape(this.field.x + this.field.size / 2 + 100, height / 2 - 10, color(0, 255, 0), `circle`, `lime infinite-sided polygon`);

    this.shapes[2] = new Shape(this.field.x + this.field.size / 2 + 100, height / 2 + 120, color(255, 0, 0), `square`, `vermillion four-sided polygon`);

    this.shapes[3] = new Shape(this.field.x + this.field.size / 2 + 100, height / 2 + 250, color(0, 255, 0), `square`, `jade four-sided polygon`);

    //Generate taskShape
    this.taskShape = random(this.shapes);
  }

  draw() {
    super.draw();

    this.checkPass();
    this.displayField();
    this.displayTask();

    // Shapes
    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];

      shape.draw();
      shape.drag();
    }
  }

  checkPass() {
    // if progressBar fills to max height,
    if (this.fillProgressBar.height >= this.progressBar.height) {
      //then game switches to next game.
      currentState = new FinalGame();
    }
  }

  displayField() {
    //field
    push();
    strokeWeight(5);
    stroke(212);
    noFill();
    rectMode(CENTER);
    rect(this.field.x, this.field.y, this.field.size);
    pop();
  }

  displayTask() {
    //Display task
    push();
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text(`Place the ${this.taskShape.name} in the box.`, width / 2, this.field.y - this.field.size / 2 - 30);
    pop();
  }

  mousePressed() {
    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];

      if (shape.mouseInsideObject()) {
        shape.isBeingDragged = true;
      }
    }
  }

  mouseReleased() {
    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];

      if (shape.isBeingDragged) {
        shape.isBeingDragged = false;
      }

      if (shape.x < this.field.x + this.field.size / 2 &&
        shape.x > this.field.x - this.field.size / 2 &&
        shape.y < this.field.y + this.field.size / 2 &&
        shape.y > this.field.y - this.field.size / 2) {

        if (this.taskShape === shape) {
          //progressBar fills.
          this.fillProgressBar.height += 50;
          selectSFX.play();
          progressSFX.play();
          this.taskReset();
        }
      }
    }
  }
}
