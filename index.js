//variables
const fs = require('fs');
const inquirer = require('inquirer');
const generatereadme = require('./generateMarkdown')
// array of questions for user input
const questions = [
    {
        type: 'input',
        message:"What is your github username?",
        name:'github',
    },
    {
        type: 'input',
        message:"What is your email address?",
        name:'email',
    },
    {
        type: 'input',
        message:"What is your project name?",
        name:'project_name',
    },
    {
        type: 'input',
        message:"Please write a short description about your project.",
        name:'description',
    },
    {
        type: 'list',
        message:"What license would you like your project to have?",
        choices: [
            "MIT",
            "MPL 2.0",
            "Apache 2.0",
            "Unlicense",
        ],
        name:'license',
    },
    {
        type: 'input',
        message:"What command should be run to run tests?",
        name:'test',
    },
    {
        type: 'input',
        message:"What command should be run to install dependencies",
        name:'dependencies',
    },
    {
        type: 'input',
        message:"What does the user need to know about using the repo?",
        name:'Use',
    },
    {
        type: 'input',
        message:"What does the user need to know about contributing to the repo?",
        name:'contribute',
    },
];

function response(){
inquirer.prompt(questions).then((response) => {
    console.log(response)
    fs.writeFile('readme.md', generatereadme(response),() =>
    console.log('Resonse recorded to readme file.'));
});
}
response();