// fs is a Node standard library package for reading and writing files

const fs = require('fs');

fs.readFile('data.csv', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);

//print:
// $ node index.js "Hello Css"
// 5.6879E+13
// "35,435,435,676,676,700,000,000"

fs.writeFile('log.txt', process.argv[2], (err)=>
 err ? console.error(err) : console.log('Success!')
 );

 //print:
//  node index.js "Hello Css"
//  Success!