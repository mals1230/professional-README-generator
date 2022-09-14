// TODO: Include packages needed for this application
const inquirer =require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require('.utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: user_Input => {
            if (user_Input) {
                return true;
            } else {
                console.log('Enter a title to continue.');
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'title',
        message: 'Describe your project.',
        validate: user_Input => {
            if (user_Input) {
                return true;
            } else {
                console.log('Enter a title to continue.');
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'title',
        message: 'Table of Contents',
        validate: user_Input => {
            if (user_Input) {
                return true;
            } else {
                console.log('Enter a title to continue.');
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'title',
        message: 'Installation',
        validate: user_Input => {
            if (user_Input) {
                return true;
            } else {
                console.log('Enter a title to continue.');
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'title',
        message: 'Usage',
        validate: user_Input => {
            if (user_Input) {
                return true;
            } else {
                console.log('Enter a title to continue.');
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'title',
        message: 'License',
        validate: user_Input => {
            if (user_Input) {
                return true;
            } else {
                console.log('Enter a title to continue.');
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'title',
        message: 'Contributors',
        validate: user_Input => {
            if (user_Input) {
                return true;
            } else {
                console.log('Enter a title to continue.');
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'title',
        message: 'Tests',
        validate: user_Input => {
            if (user_Input) {
                return true;
            } else {
                console.log('Enter a title to continue.');
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'title',
        message: 'Questions?',
        validate: user_Input => {
            if (user_Input) {
                return true;
            } else {
                console.log('Enter a title to continue.');
                return false;
            }
        }
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
};

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
