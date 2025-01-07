// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install your project",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use your application?",
    name: "usage",
  },
  {
    type: "list",
    message: "Select the license",
    name: "license",
    choices: ["MIT", "mozilla", "apache"],
  },
  {
    type: "input",
    message: "How to contribute",
    name: "contributing",
  },
  {
    type: "input",
    message: "How to test the application",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email",
    name: "email",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// fs.writeFile("README.md", data)
// }

// TODO: Create a function to initialize app (main function)
function init() {
  inquirer.prompt(questions).then((answers) => {
    const template = generateMarkdown(answers);
    console.log(template);

    fs.writeFile("README.md", template, (err) => {
      err ? console.log("error") : console.log("Success");
    });
  });
}

// Function call to initialize app
init();
