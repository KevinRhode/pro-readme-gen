// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown.js');
const { default: inquirer } = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'name',
        message: "What is Title of this README?",
        title: "title" ,
        pre: '',
        
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the description of this README?",
        title: "description" ,
        pre: '',
        
    },
    {
        type: 'input',
        name: 'name',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        title: "installation",
        pre: '',
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'name', 
        title:'usage'     
      },
      {
        type:'input',
        message:'Enter description',
        name: 'name',
        prefix: `Enter info for contributer links, description first then link\n`,
        title:'contributingDesc'
      },
      {
        type:'input',
        message:'Enter Link',
        name: 'name',
        title:'contributingSrc'
      },
      {
        type: 'list',
        name: 'name',
        message: "Continue with another Contributer?",
        choices: ["No","Yes"],
        title: "continueContr",
      },
      {
        type:'input',
        message:'Enter Guidelines for testing',
        name: 'name',
        title:'tests'
      },
      {
        type: 'list',
        message: 'What license will this project be covered by?',
        name: 'name',
        choices: ['GNU GPLv3', 'Apache License 2.0', 'MIT License'],
        title:'license'
      },
      {
        type:'input',
        message:'Enter GitHub username:',
        name: 'name',
        title:'questions'
      },
      {
        type:'input',
        message:'Enter email to be reached at:',
        name: 'name',
        title:'questions'
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {


}

// TODO: Create a function to initialize app
function init() {

const filename = process.argv[1].substring(0,process.argv[1].lastIndexOf("\\") + 1) + 'generatedREADME.md';
// const filenamejson = process.argv[1].substring(0,process.argv[1].lastIndexOf("\\") + 1) + 'readMeData.json';
// const logFilename = process.argv[1].substring(0,process.argv[1].lastIndexOf("\\") + 1) + 'logs.txt';

    if (process.argv.length > 2) {

    }
    inquirer.prompt(...questions).then((response)=>{
        writeToFile(filename,generateMarkDown.generateMarkDown(response));
    });

}

// Function call to initialize app
init();
