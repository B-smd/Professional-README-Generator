// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([

    {
        type: 'input',
        message: 'what is the project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'what is the description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'what are the table of content of your project? (Optional)',
        name: 'content',
    },

    {
        type: 'input',
        message: 'What are the steps required to install your project? (Optional)',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide demo Sreenshot or Screencastify.',
        name: 'demo',

    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their Github profiles.',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Choose your license for your project.',
        name: 'license',
        choices: [
            { value: 'MIT' },  //The MIT License
            { value: 'Apache' },   //Apache 2.0 License
            { value: 'BSD3' },  //BSD 3-Clause License
            { value: 'GNU' },  //GNU GPL 2.0
            { value: 'MPL' }, //Mozilla Public License 2.0
            { value: 'Artistic'}, //Artistic License
            { value: 'None' }, 
        ]
    },
    {
        type: 'input',
        message: 'If your project has a lot of features, list them here (Optional)',
        name: 'features'
    },
    {
        type: 'input',
        message: 'Explain how users can contribute to your project (Optional).',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Provide tests for project, and explain how to test (Optional).',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Do you have any question?(Optional).',
        name: 'questions',
    },
    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your email: ",
        name: "email",
    },
   ])
   .then((data) => {
       // TODO: Create a function to write README file
       const filename = data.title.replace(' ', "").toLowerCase()
       fs.writeFile(`${filename}.md`, generateMarkdown(data), (err) =>
       err ? console.error(err) : console.log('Successfully wrote to Readme.md'))
    })
    
    // TODO: Create a function to initialize app
    function init() { }

// Function call to initialize app
init();
   

   