// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ## Table of Contents
  <ol>
    <li>Description</li>
    <li>Installation</li>
    <li>Usage</li>
    <li>Contribution</li>
    <li>License</li>
    <li>Questions</li>
  ## Description
  ${data.description}
  <br />
  ## Installation
  ${data.installation}
  <br />
  ## Usage
  ${data.usage}
  <br />
  ## Contribution
  ${data.contribution}
  <br />
  ## License
  ${data.license}
  <br />
  ## Questions
  <p>For more prjoects and to see what I am working on visit my Github page.<a href="https://github.com/${githubName}</a></p>
  <p>For more information about this project please email me at ${emailAddress}</p>
  <br />

  ${new Date().getFullYear}

`;
}

module.exports = generateMarkdown;
