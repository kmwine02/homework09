// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions asked for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a short description of your project:"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "repoContributions",
        message: "What does the user need to know about contributing to the repo?"
    }
];

// Writes to README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
      if (err) {
      throw err;
      }
  })  
}

// Function to initialize the app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(`README.md`, generateMarkdown(answers))
    })
}

// Initializes app
init();
