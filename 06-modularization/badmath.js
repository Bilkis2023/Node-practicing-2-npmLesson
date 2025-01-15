const pie = 'apple';

const predictable = () => 1;

// module.exports is an object, we use to store variables or methods.
//In this export object we are using property value shorthand

// Property value shorthand:
// #If we want to define a property in an object, 
// and that key name already exists as a variable with in the 
// object's scope, we don't have to explicitly assign a value. 

module.exports = {
    pie,
    predictable,
};