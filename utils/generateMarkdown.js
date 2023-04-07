// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
      
    switch (license) {
      case 'GNU GPLv3':      
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      case 'Apache License 2.0':      
      return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      case 'MIT License':      
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';  
      default:
        return '';
    }
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU GPLv3':      
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    case 'Apache License 2.0':      
    return 'https://choosealicense.com/licenses/apache-2.0/';
    case 'MIT License':      
    return 'https://choosealicense.com/licenses/mit/';  
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// unused
function renderLicenseSection(license) {
  if (license === '') {
    return '';
  } else {
    return `## License\n${license} - ${renderLicenseLink(license)}`;
  }
}

// TODO: Create the Table of Contents
function renderTableOfContents(data) {

  let tOC = '';
  //for in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
    for (const property in data) {      
      //take the property and make a copy to manipulate for style
      let tOCR = property;      
      //go through the entire string
      for (let i = 0; i < tOCR.length;) {
        const element = tOCR[i];        
        //check if each char is a capital - if so add space and continue
        if (element.match(/[A-Z]/) != null) {          
          tOCR = `${tOCR.slice(0,i)} ${tOCR.slice(i,tOCR.length)}`;
          //when adding space increase i so not stuck in endless loop
          i++;
        }
        i++;
      }    
      //styleing for table of contents property
      //capitalize the first letter
      let char = tOCR[0].toUpperCase();
      tOCR = char + tOCR.slice(1,tOCR.length);      
      //check if property is empty, or if labeled title
      `${data[property]}` === ''  ? console.log('Nope'): `${property}` === 'title'  ? null : tOC +=`- \[${tOCR}\](#${tOCR.toLowerCase().replace(' ','-')})\n`;      
    }
    return tOC;
}

// TODO: Create the link and email for Questions
function renderQuestions({userName,email}) {
  return `[${userName}](https://github.com/${userName})\n  \n${email}`;
}

function handleDoubleSpacing(data){
  let pretty = '';
  const splitData = data.split('  ');
  console.log("splitData:",splitData);
  for (const newLine of splitData) {
    pretty += `${newLine}  \n`
  }
  return pretty;
}

// TODO: 
// function renderContributing(contributing) {}

// TODO: 
// function changethis(setorremovve) {}

// AC: TODO
// title of my project 
// and sections entitled Description, 
// Table of Contents, 
// Installation, 
// Usage, 
// License, 
// Contributing, 
// Tests, 
// and Questions

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title,description,installation,usage,contributing,tests,license,questions} = data;

  return `# ${title}\n[${renderLicenseBadge(license)}](${renderLicenseLink(license)})\n## Description\n${description}\n## Table of Contents\n${renderTableOfContents(data)}\n## Installation\n${handleDoubleSpacing(installation)}\n## Usage\n${handleDoubleSpacing(usage)}\n## Contributing\n${contributing}\n## Tests\n${tests}\n${renderLicenseSection(license)}\n## Questions\n${renderQuestions(questions)}`;
}

module.exports = generateMarkdown;
