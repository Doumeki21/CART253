/**
p5-sound
Olenka Yuen

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let synth;
let notes = [`F4`, `G4`, `Ab4`, `C4`, `Db4`, `Eb4`, `F5`];
let currentNote = 0;

function setup() {
  createCanvas(600, 600);

  synth = new p5.PolySynth();

  userStartAudio();
}

function draw() {
  background(0);
}

function keyPressed() {
  //500 ms
  setInterval(playRandomNote, 200);
}

function playRandomNote() {
  let note = notes[currentNote]
  //NOTE, VELOCITY, NO DELAY, SUSAIN 1 SEC
  synth.play(note, 1, 0, 0.25);

  currentNote ++;

  if (currentNote === notes.length) {
    currentNote =0;
  }
}
