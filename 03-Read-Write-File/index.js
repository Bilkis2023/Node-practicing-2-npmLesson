// fs is a Node standard library package for reading and writing files

const fs = require('fs');

// Retrun the contents of 'data.csv' as a string in the variable "data"
//"utf8" encode the raw buffer data in human-readable formet

fs.readFile('data.csv', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);

//print:
// $ node index.js "Hello Css"
// 5.6879E+13
// "35,435,435,676,676,700,000,000"



// This function to write to the file with Anything can pass by in as process.argv[2]
fs.writeFile('log.txt', process.argv[2], (err)=>
 err ? console.error(err) : console.log('Success!')
 );

 //print:
//  node index.js "Hello Css"
//  Success!