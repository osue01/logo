const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./design.js");
const { type } = require("os");

// class and constructor to render SVG image
//Using a class instead of a function in JavaScript allows you to create more structured and organized code, especially when dealing with complex objects or components that have multiple properties and methods.
//Classes have a built-in constructor function that is automatically called when you create a new instance of the class. This allows you to initialize object properties and set up the object's initial state.
//using a class Svg makes sense because you are creating a structured representation of an SVG image with text and shapes. The class encapsulates the logic for rendering the SVG image and provides methods to set the text and shape elements. This approach allows for better organization and management of the SVG rendering functionality.

class Svg {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.textEl = "";
    this.shapeEl = "";
  }

  setTextEl(text, color) {
    this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShapeEl(shape) {
    this.shapeEl = shape.render();
  }
}

const newSvg = new Svg(300, 400);

//Question Array

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters for your logo",
  },
  {
    type: "input",
    name: "text-color",
    message: "Enter a color (or hexadecimal number) for your logo's text",
  },
  {
    type: "input",
    name: "shape-color",
    message: "Enter a color (or hexadecimal number) for your logo's shape",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose the shape of your logo",
    choices: ["Circle", "Square", "Triangle"],
  },
];

//Prompt
function runPrompt() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log("Answers:", answers);
      console.log("Creating your logo");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

runPrompt();

//Function to write data to file
