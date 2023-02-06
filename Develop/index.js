// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select from one of the following licenses ',
        choices: [
            'MIT',
            'Apache',
            'Mozilla' 
        ]
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the intended uses of your project '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any test results '
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter the guidelines for contribution '
    },
    {
        type: 'input',
        name: 'user',
        message: 'Enter your github username '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email '
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
