//The parent class for all states: Title, GameOver, Drawing, End, Quote...

//Calling all properties which all States and events have.
class State {
  constructor() {

  }

  draw() {

  }

  //Make a sound on every click.
  mouseClicked() {
    selectSFX.play();
  }

  //Add the following last 2 functions to prevent error msgs.
  //mainly used in DragDropGame and Drawing
  mousePressed() {

  }

  //Mainly called in DragDropGame.
  mouseReleased() {

  }
}
