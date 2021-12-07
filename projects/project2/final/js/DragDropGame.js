//Game: Drag and drop the shapes into the square frame.

//Calling all properties to perform the game.
//Extends: includes progress bar and timer.
class DragDropGame extends GameState {
  constructor() {
    super();
    //The task field/ square frame.
    this.field = {
      x: width / 2,
      y: height / 2 + 50,
      size: 500,
    };
    //property that tracks the randomized shape.
    this.taskShape = undefined;
    //Array to store all possible shapes.
    this.shapes = [];
    //Identify the game as a string to be called in the array of the main script.
    this.gameName = `dragDropGame`;
    this.taskReset();
  }

  //resets all shapes to their initial positions when function is called.
  taskReset() {
    this.shapes[0] = new Shape(this.field.x + this.field.size / 2 + 100, height / 2 - 140, color(255, 0, 0), `circle`, `ruby infinite-sided polygon`);

    this.shapes[1] = new Shape(this.field.x + this.field.size / 2 + 100, height / 2 - 10, color(0, 255, 0), `circle`, `lime infinite-sided polygon`);

    this.shapes[2] = new Shape(this.field.x + this.field.size / 2 + 100, height / 2 + 120, color(255, 0, 0), `square`, `vermillion four-sided polygon`);

    this.shapes[3] = new Shape(this.field.x + this.field.size / 2 + 100, height / 2 + 250, color(0, 255, 0), `square`, `jade four-sided polygon`);

    //Generate a taskShape.
    this.taskShape = random(this.shapes);
  }

  //perform the program.
  draw() {
    //display the timer and progress bar from GameState
    super.draw();
    //Check when to proceed to next game.
    this.checkPass();
    //display the task field and task.
    this.displayField();
    this.displayTask();

    //For every shape in the array,
    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];
      //display the shape.
      shape.draw();
      //Shape is draggable.
      shape.drag();
    }
  }

  //Check when task is completed = proceed to next game.
  checkPass() {
    // if progressBar fills to max height,
    if (this.fillProgressBar.height >= this.progressBar.height) {
      //then game switches to next game.
      nextGame();
    }
  }

  //Display the task field.
  displayField() {
    push();
    strokeWeight(5);
    stroke(212);
    noFill();
    rectMode(CENTER);
    rect(this.field.x, this.field.y, this.field.size);
    pop();
  }

  //Display the task.
  displayTask() {
    push();
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text(`Place the ${this.taskShape.name} in the box.`, width / 2, this.field.y - this.field.size / 2 - 30);
    pop();
  }

  //Drag shape once mouse is pressed.
  mousePressed() {
    //For every shape in the array,
    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];
      //if the cursor is inside the shape, then the shape is draggable.
      if (shape.mouseInsideObject()) {
        shape.isBeingDragged = true;
      }
    }
  }

  //Shapes do not follow the mouse once it's released.
  mouseReleased() {
    //for every shape in the array,
    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];
      //Shapes don't follow cursor anymore once released.
      if (shape.isBeingDragged) {
        shape.isBeingDragged = false;
      }
      //If the shape is released inside the task field,
      if (shape.x < this.field.x + this.field.size / 2 &&
        shape.x > this.field.x - this.field.size / 2 &&
        shape.y < this.field.y + this.field.size / 2 &&
        shape.y > this.field.y - this.field.size / 2) {
        //-and if that same shape matches the one that was asked for,
        if (this.taskShape === shape) {
          //then the progressBar fills.
          this.fillProgressBar.height += 45;
          //Sound plays for the click and progress bar fill.
          selectSFX.play();
          progressSFX.play();
          //The shapes return to their initial positions.
          this.taskReset();
        }
      }
    }
  }
}
