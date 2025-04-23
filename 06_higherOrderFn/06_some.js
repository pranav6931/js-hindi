// some()
// The some() method tests whether at least one element in the array passes the provided test function.
// It returns a boolean — true or false.

////////////////Think of it like asking: “Does 😎some item in this list match this condition?” /////////////

// Syntax
// array.some((item, index, array) => {
//     // return true/false
//   });

// ✅ When to use some()?
// To check if at least one item passes a condition

// Great for validations, feature flags, permissions, etc.


const nums = [1, 3, 5, 8];
const hasEven = nums.some(num => num % 2 === 0);
console.log('Has even number?', hasEven);                       // true