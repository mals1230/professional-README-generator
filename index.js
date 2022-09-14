// TODO: Include packages needed for this application - bringing in inquirer, file system and the generateMarkdown.js file provided.
const inquirer =require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input 
// (questions - title, description, table of contents, installtion, usage, license, contributing, tests, GitHub, and questions)
console.log("Answer the following prompts to quickly create a professional READM for new projects")

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['Apache 2.0', 'GNU General Public v3.0', 'MIT', 'None'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines:',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter testing instructions:',
    },
    {
        type: 'input',
        name: 'gh',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log ("Your README has been created!");
    });
 
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
 
}

// Function call to initialize app
init();
