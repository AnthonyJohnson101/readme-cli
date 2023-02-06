//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project (motivation, why, what is solved, what did you learn?) '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the intended uses of your project '
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter the github/linkedin link of contributors '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select from one of the following licenses ',
        choices: [
            'MIT',
            'Apache',
            'Mozilla',
            'None' 
        ]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any test results '
    },
    {
        type: 'input',
        name: 'user',
        message: 'Enter your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email '
    }
];

//function to write README file
function writeToFile(readmeCon) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./newReadme.md', readmeCon, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Success!'
            });
        });
    });
};

//function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data){
            console.log(data);
        let readmeCon = generateMarkdown(data);

        writeToFile(readmeCon);
        });
}

// Function call to initialize app
init();
