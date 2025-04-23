// every()
// The every() method checks if all elements in an array pass a given condition.
// It returns a boolean — true if every element satisfies the condition, otherwise false.

////////////////////////////// It's like asking: “Does 😎every item meet the rule?”


// Syntax
// array.every((item, index, array) => {
//     // return true or false
//   });


const numbers = [10, 20, 30, 40];

const allPositive = numbers.every(num => num > 0);
console.log('All positive?', allPositive); // true