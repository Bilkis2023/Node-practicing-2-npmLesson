// const inquirer = require("inquirer");
import inquirer from 'inquirer';

import fs from 'fs';

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },

    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "stack",
      choices: ["HTML, CSS, JavaScript"],
    },

    {
      type: "list",
      message: "What is preferred method of communication?",
      name: "contact",
      choices: ["email", "phaone", "telekinesis"],
    },
  ])

  .then((data) => {
    const filename = `${data.name.toLowerCase().split("").join("")}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

// ---------------------------------------
  //npm init -y
  //npm i inquirer --save
  //npm install