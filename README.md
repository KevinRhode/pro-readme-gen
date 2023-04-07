# pro-readme-gen
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)
## Description
  To create a CLI application using Node.js. To speed up creating a professional readme for projects I work on. It helps me solve time management in quickly creating a README and allowing me to move onto other tasks. I learned Node.js, working with Inquirer, for in, for of
## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## User Story
AS A developer  
I WANT a README generator  
SO THAT I can quickly create a professional README for a new project  
## Acceptance Criteria
GIVEN a command-line application that accepts user input  
WHEN I am prompted for information about my application repository  
THEN a high-quality, professional README.md is generated with the title of my   project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
WHEN I enter my project title  
THEN this is displayed as the title of the README  
WHEN I enter a description, installation instructions, usage information,   contribution guidelines, and test instructions  
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests  
WHEN I choose a license for my application from a list of options  
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license   the application is covered under  
WHEN I enter my GitHub username  
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile  
WHEN I enter my email address  
THEN this is added to the section of the README entitled Questions, with   instructions on how to reach me with additional questions  
WHEN I click on the links in the Table of Contents  
THEN I am taken to the corresponding section of the README  

## Installation
  Clone - git clone git@github.com:KevinRhode/pro-readme-gen.git  
  Node.js - Verison 16.18.0  
  [DownloadLinks](https://nodejs.org/download/release/v16.18.0/)  
  Install Node.js, once done move onto next
  Navigate to index.js file location in terminal  
  npm - npm install  
  

## Usage
  Navigate to index.js file location in terminal  
  Node index.js  
  this will start the program, and begin asking for user inputs
  
  added arguments:
    'json' - will take user input and except and Obj.

    Example Obj:
      {
        "title":"",
        "description":"",
        "installation":"",
        "usage":"",
        "contributing":"",
        "tests":"",
        "license":"MIT License",
        "questions":{"userName":"","email":""}
      }


## Credits
 - [Starter](https://github.com/coding-boot-camp/potential-enigma)
 - [Badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
 - [Inquirer](https://github.com/SBoudrias/Inquirer.js)
 - [Felt Bloated so I restarted](https://github.com/KevinRhode/GenREADME)

## Tests
  None at this time.  

## License
MIT License - https://choosealicense.com/licenses/mit/

## Questions
[KevinRhode](https://github.com/KevinRhode)  
[Link to Repo](https://github.com/KevinRhode/pro-readme-gen)  
kevinrhode@hotmail.com













