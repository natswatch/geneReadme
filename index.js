const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');

// title of my project and sections entitled Description, Table of Contents, 
//Installation, Usage, License, Contributing, Tests, and Questions

//ections of the README entitled Description, Installation, Usage, 
//Contributing, and Tests

//choose a license for my application from a list of options
//a badge for that license is added near the top of the README 
//explains which license the application is covered under

//I enter my GitHub username
//added to the section of the README entitled Questions, 
//with a link to my GitHub profile

//my email address
// added to the section of the README entitled Questions, 
//with instructions on how to reach me with additional 
//questions

// WHEN I click on the links in the Table of Contents
//taken to the corresponding section of the README

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Include a description (required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information:'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Which license(s) is this application covered under (Check all that apply)',
            choices: ['MIT','ISC', 'GNU GPL v2', 'Apache License 2.0']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide info on ways to contribute:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests for this project:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username? (required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please provide your Github username')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide your email address');
                    return false;
                }
            }
        }
        
    ]);

};

// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, error => {
            if (error) {
                console.log(error);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// function to initialize program
function init() {
    promptUser()
        .then(data => {
            return generatePage(data);
        })
        .then(pageMarkdown => {
            return writeFile(pageMarkdown);
            console.log(pageMarkdown);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
};

// function call to initialize program
init();

