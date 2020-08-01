// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## License
  ${data.license}

  ${new Date().getFullYear}

`;
}

module.exports = generateMarkdown;
