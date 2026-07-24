const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
    validate: (input) => {
      if (input.length === 0) {
        return "Please enter at least one character.";
      }
      if (input.length > 3) {
        return "Text must be 1-3 characters.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a text color (keyword or hex):",
    validate: (input) => (input.trim() === "" ? "Please enter a color." : true),
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a shape color (keyword or hex):",
    validate: (input) => (input.trim() === "" ? "Please enter a color." : true),
  },
];

function generateSvg({ text, textColor, shape, shapeColor }) {
  let shapeInstance;

  switch (shape) {
    case "circle":
      shapeInstance = new Circle();
      break;
    case "triangle":
      shapeInstance = new Triangle();
      break;
    case "square":
      shapeInstance = new Square();
      break;
    default:
      throw new Error("Invalid shape type");
  }

  shapeInstance.setColor(shapeColor);

  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n  ${shapeInstance.render()}\n  <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}" dominant-baseline="middle">${text}</text>\n</svg>`;
}

function writeSvgFile(filename, data) {
  fs.writeFileSync(filename, data);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const svg = generateSvg(answers);
    const outPath = "Assets/logo.svg";
    writeSvgFile(outPath, svg);
    console.log(`Generated ${outPath}`);
  });
}

if (require.main === module) {
  init();
}

module.exports = { generateSvg, writeSvgFile };