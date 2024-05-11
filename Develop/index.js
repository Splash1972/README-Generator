// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the project.",
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a URL where a user can access your deployed application."
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "features",
    message: "Unique features this project has in it.",
  },
  {
    type: "input",
    name: "language",
    message: "State the languages or dependencies used in this project.",
  },
  {
    type: "input",
    name: "contributors",
    message: "List the contributors on this project.",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
];

// TODO: Create a function to write README file

const writeToFile = (data) => {
    fs.writeFile('README.md', data, (err) => {
        err ? console.error(err) : console.log('added to README.md')
    })
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating README.md file...");
    writeToFile(generateMarkdown({ ...responses}));
  });
}
// Function call to initialize app
init();