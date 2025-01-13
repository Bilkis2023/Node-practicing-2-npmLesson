const maths = require('./maths');

const operation = process.argv[2]

const numOne =parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);

switch(operation){
case 'sum':
console.log(maths.sum(numOne, numTwo));
break;
case 'difference':
console.log(maths.difference(numOne, numTwo));
break;
case 'product':
console.log(maths.product(numOne, numTwo));
break;
case 'quotient':
console.log(maths.quotient(numOne, numTwo));
break;
default:
    console.log('Check your maths!');
}

//Prints:
// node index.js
// Check your maths!

//Prints:
//node index.js sum 5 3
// 8

//Prints:
//node index.js difference 5 3
// 2

//Prints:
// node index.js quotient  5 3
// 1.6666666666666667