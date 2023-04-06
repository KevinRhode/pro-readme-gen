// TODO: Include packages needed for this application
// include the file system
const fs = require('fs/promises');
// include the exported js generatemarkdown located in the utils folder
const generateMarkDown = require('./utils/generateMarkdown.js');
// include the inquirer module
const inquirer = require('inquirer');
// TODO: Create Class for question
class question {
  constructor(type,name,message,choices)  {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;    
    //choices === undefined ? '' : choices;
  }
}
// TODO: Create an array of questions for user input
const questions = [

  new question('input','title','What is Title of this README?'),
  new question('input','description','What is the description of this README?'),
  new question('input','installation','What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'),
  new question('input','usage','Provide instructions and examples for use. Include screenshots as needed.'),
  new question('input','contributing','Enter Contributing guidelines for users'),
  new question('input','tests','Enter Guidelines for testing'),
  new question('list','license','What license will this project be covered by?',['GNU GPLv3', 'Apache License 2.0', 'MIT License']),
  new question('input','questions.userName','Enter GitHub username:'),
  new question('input','questions.email','Enter email to be reached at:')
  
];
// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
//create log file name based of location
const logFilename = process.argv[1].substring(0,process.argv[1].lastIndexOf("\\") + 1) + 'logs.txt';
//append the log file to contain data used during program run
fs.appendFile(logFilename,JSON.stringify(data));
//write file to create a new generated readme based on the information input
fs.writeFile(fileName,generateMarkDown(data));
}
// TODO: load json into readme
async function loadjson(filename,data){
  fs.writeFile(filename,generateMarkDown(data));
}
// TODO: Create a function to initialize app
async function init() {
  //set filename for the generated readme
  const filename = process.argv[1].substring(0,process.argv[1].lastIndexOf("\\") + 1) + 'generatedREADME.md';
  // const filenamejson = process.argv[1].substring(0,process.argv[1].lastIndexOf("\\") + 1) + 'readMeData.json';  
  // check if someone added arguments when calling index.js
  if (process.argv.length > 2) {
    //test on key, see what they added
    switch (process.argv[2]) {
        //future implmentation
        case 'obj':
            //add: commands after - load json
            await inquirer.prompt([new question('input','data','Enter json string')]).then(async (response)=>{
              const {data} = response;              
              const jObj = JSON.parse(data);
              console.log(jObj);
              loadjson(filename,jObj);
            });
            
            break;
        case 'LL':
            //add: TODO: Load last json
            
            break;       
    
        default:
            break;
    }

  } else {
    //a sync function to await all questions before response, then async to make sure await, along with fs import (fs/promises)
    await inquirer.prompt(questions).then(async (response) =>{
        //log the response for testing
        console.log(response);
        //call write to file function to handle fs implementation
        writeToFile(filename,response);        
    });       
  }
}
// Function call to initialize app
init();
