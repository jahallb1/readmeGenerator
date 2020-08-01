// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [ 
    {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project? (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter the name of your project!');
            return false;
        }
    }
},
//rest of questions
{
    type: 'input',
    name: 'description',
    message: 'Give a description of your project'
},
{
    type: 'input',
    name: 'installation',
    message: 'Give installation instructions for your project'
},
{
    type: 'input',
    name: 'usage',
    message: 'Give usage instructions for your project'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Give contribution instructions for your project'
},
{
    type: 'input',
    name: 'tests',
    message: 'Please give any tests for your project'
},
{
    type: 'checkbox',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ['MIT', 'BSD', 'UNKNOWN']
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then ((responses) => {
            console.log(responses);
            let text = generateMarkdown(responses);
            let fileName = './' + responses.name.replace(' ', '-') + ".md";
            console.log(text);
            writeToFile();
        })

}

// function call to initialize program
init();
