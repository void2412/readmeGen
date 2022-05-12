// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license !== "None"){
		var urlParse = license.replace(/ /g, "%20")
		return `![License](https://img.shields.io/badge/license-${urlParse}-blue)`
	}
	else
		return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if(license !== 'None')
		return  `* [License](#license)`
	else
		return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license !== "None")
		return `## License
\`\`\`
This project is licensed under ${license} license.
\`\`\``
	else
		return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.projectLicense)}
  
  ## Description
  ${data.projectDescription}

  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  ${renderLicenseLink(data.projectLicense)}
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.projectUsage}

  ${renderLicenseSection(data.projectLicense)}
  
  ## Contributing
  ${data.projectContributing}

  ## Tests
  ${data.projectTests}

  ## Questions
  
  If you have any questions, email me at [${data.userEmail}](mailto:${data.userEmail}).

  You can find more of my work at [${data.userName}](https://github.com/${data.userName}).`
}

module.exports = generateMarkdown;
