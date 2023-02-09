const fs = require('fs');
const inquirer = require('inquirer');
const indexFile = require('../index');

//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license == 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license == 'Apache'){
    badge = '[![License: Apache](https://img.shields.io/badge/License-Apache-yellow.svg)'
  } else if (license == 'Mozilla'){
    badge = '[![License: Mozilla](https://img.shields.io/badge/License-Mozilla-yellow.svg)'
  } else{
    badge = ""
  }
  return badge;
}

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT'){
    licenseLink = 'https://choosealicense.com/licenses/mit'
  }else if (license === 'Apache'){
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'Mozilla'){
    licenseLink = 'https://www.mozilla.org/en-US/MPL/2.0/'
  } else {
    licenseLink = ""
  }
  return licenseLink;
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'None'){
    licenseSection = ''
  } else {
    licenseSection = `${license}`
  }
  return licenseSection;  
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  ###  [Installation](#installation)
  ###  [Usage](#usage)
  ###  [Contributors](#contributors)
  ###  [Tests](#tests)
  ###  [License](#license)
  ###  [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## License
  ## ${renderLicenseSection(data.license)}
  ## ${renderLicenseLink(data.license)}

  ## Questions
  ### If you have any questions, reach out here:
  Github: ${data.user}
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
