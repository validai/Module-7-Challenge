const fs = require('fs'); // File system module
const inquirer = require('inquirer').default; // Import inquirer with .default for v9.x and later

// Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What license does your project use?',
    },
  ])
  .then((answers) => {
    // Generate README content
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## License
This project is licensed under the ${answers.license} license.
    `;

    // Write the README.md file
    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md has been successfully generated!');
  })
  .catch((error) => {
    console.error('Error generating README:', error);
  });
