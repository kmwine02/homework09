// TODO: Returns the license badge for the selected license
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === 'Apache 2.0') {
    return "(https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  } else if (license === 'GPL 3.0') {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else if (license === 'BSD 3') {
    return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
  } else (license === 'none')
    return '';
};

// TODO: Returns the link for the selected license
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "https://opensource.org/licenses/MIT";
} else if (license === 'Apache') {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === 'GPL 3.0') {
    return "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === 'BSD 3') {
    return "https://opensource.org/licenses/BSD-3-Clause";
} return ''
}

// TODO: Combines the badge and link for the readme
function renderLicenseSection(license) {
  return `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// TODO: Generates the markdown for the readme
function generateMarkdown(data) {
  return `# ${data.projectName} 
  ${renderLicenseSection(data.license)}
  
 

  ## Description 
  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  To install the necessary dependencies, run the following command:
  ${data.dependencies}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing 
  ${data.repoContributions}

  ## Tests 
  To run tests, run the following command:
  ${data.tests}

  ## Questions
  If you have any questions about the repo, reach out to me directly at ${data.email}. See more of my work at https://www.github.com/${data.username}

`;
}

module.exports = generateMarkdown;
