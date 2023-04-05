// TODO: Include packages needed for this application
const fs = require('fs/promises');
const generateMarkDown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: "What is Title of this README?",       
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the description of this README?",        
    },
    {
      type: 'input',
      name: 'installation',
      message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
      name: 'usage',     
    },
    {
      type:'input',
      message:'Enter description',
      name: `contributing.desc`,
      prefix: `Enter info for contributer links, description first then link\n  `,
      
    },    
    {
      type:'input',
      message:'Enter Link',
      name: `contributing.src`      
    },  
    {
      type:'input',
      message:'Enter Guidelines for testing',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'What license will this project be covered by?',
      name: 'license',
      choices: ['GNU GPLv3', 'Apache License 2.0', 'MIT License'],
    },
    {
      type:'input',
      message:'Enter GitHub username:',
      name: 'questions.userName',
    },
    {
      type:'input',
      message:'Enter email to be reached at:',
      name: 'questions.email',
    }
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {

fs.writeFile(fileName,generateMarkDown(data))

}

// TODO: Create a function to initialize app
async function init() {

  const filename = process.argv[1].substring(0,process.argv[1].lastIndexOf("\\") + 1) + 'generatedREADME.md';
  // const filenamejson = process.argv[1].substring(0,process.argv[1].lastIndexOf("\\") + 1) + 'readMeData.json';
  // const logFilename = process.argv[1].substring(0,process.argv[1].lastIndexOf("\\") + 1) + 'logs.txt';

  if (process.argv.length > 2) {
  
  } else {

    await inquirer.prompt(questions).then(async (response) =>{
        console.log(response);
        
        writeToFile(filename,response);        
    });   
    
  }
  

}

// Function call to initialize app
init();
