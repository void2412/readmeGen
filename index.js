// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = ['Github Username', 'Email', 'Project title: ', 'Description: ', 'License: ', 'Installation Instructions: ', 'Usage Info: ', 'Test Instructions: ', 'Contribution Guideline:'];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt([
		{
			type: 'input',
			name: 'userName',
			message: questions[0]
		},
		{
			type: 'input',
			name: 'userEmail',
			message: questions[1]
		},
		{
			type: 'input',
			name: 'projectTitle',
			message: questions[2]
		},
		{
			type: 'input',
			name: 'projectDescription',
			message: questions[3]
		},
		{
			type: 'list',
			name: 'projectLicense',
			message: questions[4],
			choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
		},
		{
			type: 'input',
			name: 'installation',
			message: questions[5],
			default: 'npm i'
		},
		{
			type: 'input',
			name: 'projectUsage',
			message: questions[6] ,
		},
		{
			type: 'input',
			name: 'projectTests',
			message: questions[7],
			default: 'npm test'
		},
		{
			type: 'input',
			name: 'projectContributing',
			message: questions[8]
		}
	]).then((data) => {
		console.log('Generating README ...')
		markdownData = generateMarkdown()
		console.log(`Successfully generate markdown data.
		Generating README file ...`)
		
	})
}

// Function call to initialize app
init();
