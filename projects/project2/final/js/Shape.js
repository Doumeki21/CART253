//OOP class used to draw all 4 shapes for the DragDropGame.

//Calling all properties to perform the shapes.
class Shape {
  //constructor values indicated in taskReset() of DragDropGame.
  constructor(x, y, shapeColor, shapeType, shapeName) {
    this.x = x;
    this.y = y;
    this.size = 80;
    this.color = shapeColor;
    this.shapeType = shapeType;
    this.isBeingDragged = false;
    this.name = shapeName;
  }

  //Check if mouse is inside object.
  mouseInsideObject() {
    //Get dist between the mouse and object.
    let d = dist(mouseX, mouseY, this.x, this.y);
    //If the distance between mouse and object is less than half the object's size,
    if (d < this.size / 2) {
      //then it's true
      return true;
    } else {
      //if not, then false.
      return false;
    }
  }

  //Check if the object is inside the task field.
  objectInsideField(field) {
    //Get dist between object and field.
    let d = dist(this.x, this.y, field.x, field.y);
    //if the distance between object and field is less than half the field's size,
    if (d < field.size / 2) {
      //then it's true
      return true;
    } else {
      //else, it's false.
      return false;
    }
  }

  //The mouse drags an object.
  drag() {
    // If the object is being dragged,
    if (this.isBeingDragged) {
      //Object should be offset directly under the mouse.
      this.x = mouseX + this.offsetX;
      this.x = constrain(mouseX, 0, width);
      this.y = mouseY + this.offsetY;
      this.y = constrain(mouseY, 0, height);
    }
  }

  //Display desired objects once called.
  draw() {
    push();
    fill(this.color);
    stroke(255);
    //If the object is a `circle`, draw an ellipse.
    if (this.shapeType === `circle`) {
      ellipse(this.x, this.y, this.size);
      //Else if the object is a `square`, draw a rectangle.
    } else if (this.shapeType === `square`) {
      rectMode(CENTER);
      rect(this.x, this.y, this.size, this.size);
    }
    pop();
  }
}
