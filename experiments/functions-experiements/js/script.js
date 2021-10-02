/**
Functions
Olenka Yuen

Vid 5.1 FUNCTIONS
vid 5.2 w parameters
vid 5.3 w return values
*/

"use strict";


/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);

  let hotCelsius = toCelsius(100);
  console.log(`100 degrees Fahrenheit is ${hotCelsius} degrees Celsius.`);

  let coldCelsius = toCelsius(10);
  console.log(`10 degrees Fahrenheit is ${coldCelsius} degrees Celsius.`);
}


/**
Description of draw()
*/
function draw() {
  background(0);

}

function toCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}
