class Shape {
  constructor(x, y, shapeColor, shapeType, shapeName) {
    this.x = x;
    this.y = y;
    this.size = 80;
    this.color = shapeColor;
    this.shapeType = shapeType;
    this.isBeingDragged = false;
    this.name = shapeName;
  }

  mouseInsideObject() {
    //Get dist b/w mouse and shape
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.size / 2) {
      return true;
    } else {
      return false;
    }
  }

  objectInsideField() {
    //Get dist b/w object and field
    let d = dist(this.x, this.y, field.x, field.y);
    if (d < field.size / 2) {
      return true;
    } else {
      return false;
    }
  }

  drag() {
    if (this.isBeingDragged) {
      //Drag object
      this.x = mouseX + this.offsetX;
      this.x = constrain(mouseX, 0, width);
      this.y = mouseY + this.offsetY;
      this.y = constrain(mouseY, 0, height);
    }
  }

  display() {
    push();
    fill(this.color);
    stroke(255);
    if (this.shapeType === `circle`) {
      ellipse(this.x, this.y, this.size);
    } else if (this.shapeType === `square`) {
      rectMode(CENTER);
      rect(this.x, this.y, this.size, this.size);
    }
    pop();
  }
}
