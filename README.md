# Team_profile_generator
  
  [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)

## Description
This project required building a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Tests were written for each part of the code using Jest to ensure that it passes all of them.

When prompted for team members and their information, then an HTML is generated that displays a nicely formatted team roster based on user input.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Technology Used](#technology-used)
- [Questions](#questions)

## Installation

To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command ```npm init```  into the terminal. Inquirer must then be installed by entering ```npm i inquirer@8.2.4```. Finally, the program can then be run by entering ```node index.js``` into the command line, and answering each question appropriately.

```JavaScript
npm install inquirer

var inquirer = require('inquirer');
  inquirer
    .prompt([
      /* Pass your questions in here */
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
```
 
## Usage
Inquirer is easiest to use when installed with npm:  ``` npm i inquirer@8.2.4 ```. Then you can load the module into your code with a require call: ``` const inquirer = require(‘inquirer’); ```
1. Enter management information
2. You will be redirected to a menu, where you can choose to add an engineer, add an intern, or end the application
3. If you choose to add an engineer or an intern, you will be reprompted to the menu until you choose to end the application
4. Once you end the application, your software team will be generated in an HTML file

## Credits
  
Daniel A.

## Tests
![GitHub license](https://img.shields.io/badge/test-100%25-success)

## Technology Used
- HTML
- CSS
- JavaScript
- Node.js
- Inquirer
- Path
- Jest

## Questions
My Github username is dannyyyspam, which can be accessed here https://github.com/dannyyyspam.

The Github page for this project can be accessed using the following link: https://github.com/dannyyyspam/Team-Profile-Generator.

  
Below is link to my demo video:
- [Link to Demo Video](https://youtu.be/DUA3nhskSJY)