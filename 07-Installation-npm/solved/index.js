import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username",
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password",
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm",
    },
  ])

  .then((response) =>
    response.confirm === response.password
      ? console.log("Success!")
      : console.log("You forget your password already?!")
  );
