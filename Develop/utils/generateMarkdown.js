// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `![Licence Link](https://www.npmjs.com/search?q=${license})`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (typeof license !== 'string' || license === 'none') {
    return '';
  }
  return `# License

${license}

[README.md#${license}](README.md#${license})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
# Description
${data.description}
# Deployed Application URL
${data.link}
# Table of Contents

* [Features](#features)
* [Languages & Dependencies](#languages-and-dependencies)
* [Contributors](#contributors)
* [Questions](#questions)

# Features
${data.features}
# Languages And Dependencies
${data.language}
# Contributors
${data.contributors}
# Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
