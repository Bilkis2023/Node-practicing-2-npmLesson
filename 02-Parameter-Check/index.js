const a = process.argv[2];
const b = process.argv[3];
 
// using a conditional statement:
 if( a === b){
console.log(true);
 }else{
    console.log(false);
 }

//  Usinig a ternary operator:

console.log( a === b ? true : false)

// Compairing Variables
console.log( a === b);

// Comparing argument values directly
console.log(process.argv[2] === process.argv[3]);


// Printed:
//  node index.js 3 4
// false
// false
// false
// false


//Printed:
// node index.js 7 7
// true
// true
// true
// true