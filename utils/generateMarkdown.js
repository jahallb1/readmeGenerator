// function to generate markdown for README
function badge(license) {
  if (license === 'MIT') {
     return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else if (license === 'BSD') {
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else { 
      return ' ';
  }
}
function generateMarkdown({name, description, installation, usage, contribution,license, githubName, emailAddress}) {
  return `# ${name}
  ${badge(license)}
  ## Table of Contents
  <ol>
    <li>[${description}](#description)</li>
    <li>[${installation}](#installation)</li>
    <li>[${usage}](#usage)</li>
    <li>[${contribution}](#contribution)</li>
    <li>[${license}](#license)</li>
    <li>[${questions}](#questions)</li>
  ## Description
  ${description}
  <br />
  ## Installation
  ${installation}
  <br />
  ## Usage
  ${usage}
  <br />
  ## Contribution
  ${contribution}
  <br />
  ## License
  ${license}
  <br />
  ## Questions
  <p>For more prjoects and to see what I am working on visit my Github page.<a href="https://github.com/${githubName}</a></p>
  <p>For more information about this project please email me at ${emailAddress}</p>
  <br />

  ${new Date().getFullYear()}

`;
}

module.exports = generateMarkdown;
