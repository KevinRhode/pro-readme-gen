// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

// TODO: 
function renderQuestions({userName,email}) {
  return `[${userName}](https://github.com/${userName})\n  \n${email}`;
}

// TODO: 
function renderContributing(contributing) {}

// // TODO: 
// function changethis(setorremovve) {}

// // TODO: 
// function changethis(setorremovve) {}

// // TODO: 
// function changethis(setorremovve) {}

// // TODO: 
// function changethis(setorremovve) {}

// // TODO: 
// function changethis(setorremovve) {}

// // TODO: 
// function changethis(setorremovve) {}

// // TODO: 
// function changethis(setorremovve) {}

// AC: TODO
//  title of my project 
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

  return `# ${title}\nBADGE\n## Description\n${description}\n## Table of Contents\n${renderTableOfContents(data)}\n## Installation\n${installation}\n## Usage\n${usage}\n## Contributing\n${contributing}\n## Tests\n${tests}\n## License\n${license}\n## Questions\n${renderQuestions(questions)}`;
}

module.exports = generateMarkdown;
