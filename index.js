const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./lib/shapes')

const questions = [
  {
    type: 'input',
    name: 'text',
    message: "Please enter your logo's text. (Max three characters.)",
  },
  //TODO: add validation for the color code
  {
    type: 'input',
    name: 'color',
    message: 'Please choose a color for your text. Color Keyword or hexadecimal code.',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select a shape for your logo.',
    choices: ['Triangle', 'Square', 'Circle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color would you like the shape to be? Color keyword or hexadecimal code.',
  },
]

// found some code on stack overflow
function writeSvg(answers) {
  let svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  svgString += `<g>`;
  svgString += `${answers.shape}`;
  switch(answers.shape) {
    case 'Triangle':  
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
      break;
    case 'Square': 
      svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`
      break;
    case 'Circle':
      svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`
      break;    
  }
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.color}">${answers.text}</text>`;
  svgString += `</g>`;
  svgString += `</svg>`;

  fs.writeFile("logo.svg", svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg.");
  });
}
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    if (answers.text.length > 3) {
      console.log("Logo Text must be no longer then 3 characters.");
      init();
    } else {
      writeSvg(answers)
    }
  }); 
}
init();