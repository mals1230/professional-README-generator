// TODO: Create a function that returns a license badge based on which license is passed in
// const { default: List}

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Description] (#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Contribution] (#contribution)
  - [Testing] (#testing)
  - [Questions]
  
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.testing}
  ## Questions or Comments:
  - GitHub: [${data.gh}](https://github.com/${data.gh})
  - Email: [${data.email}](malto:${data.email})
`;
}

module.exports = generateMarkdown;
