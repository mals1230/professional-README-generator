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
        validate: userTitle => {
            if (userTitle) {
                return true;
            } else {
                console.log('Please enter a title to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of your project:',
        validate: userDescription => {
            if (userDescription) {
                return true;
            } else {
                console.log('Enter your description to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
        validate: userInstallation => {
            if (userInstallation) {
                return true;
            } else {
                console.log('Enter your installation instructions to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: userUsage => {
            if (userUsage) {
                return true;
            } else {
                console.log('Include usage directions to continue.');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['Apache 2.0', 'GNU General Public v3.0', 'MIT', 'BSD 2-Clause "Simplified"', 'BSD 3-Clause "New" or "Revised"', 'Boost Software 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public 2.0', 'GNU Affero General Public v3.0', 'GNU General Public v2.0', 'GNU Lesser General Public v2.1', 'Mozilla Public 2.0', 'The Unlicense'],
        validate: userLicense => {
            if (userLicense) {
                return true;
            } else {
                console.log('Select a license to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Contribution guidelines:',
        validate: userContribute => {
            if (userContribute) {
                return true;
            } else {
                console.log('Enter a title to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter testing instructions:',
        validate: userTest => {
            if (userTest) {
                return true;
            } else {
                console.log('Enter a title to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gh',
        message: 'Enter your GitHub username:',
        validate: userGH => {
            if (userGH) {
                return true;
            } else {
                console.log('Enter your email address to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address for additional questions:',
        validate: userEmail => {
            if (userEmail) {
                return true;
            } else {
                console.log('Enter your email address to continue.');
                return false;
            }
        }
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
