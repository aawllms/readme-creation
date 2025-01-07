// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![alt text](https://img.shields.io/badge/LICENSE-${license}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `[MIT License](https://mit-license.org/)`;
  } else if (license == "Apache") {
    return `[Apache License](https://www.apache.org/licenses/)`;
  } else if (license == "Mozilla") {
    return `[Mozilla License](https://www.mozilla.org/en-US/MPL/)`;
  } else {
    return "[]";
  }

  return `link to the license`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  ${license}
  ${renderLicenseLink(license)}
  
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `

  # ${answers.title}

  ${renderLicenseBadge(answers.license)}
  
  ## Description
  ${answers.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}

  ${renderLicenseSection(answers.license)}
  

  ## Contribute
  ${answers.contribute}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  ${answers.github}

  ${answers.email}
  
    `;
}

export default generateMarkdown;
