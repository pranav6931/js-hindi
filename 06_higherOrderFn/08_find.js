// find()
// ✅ What is find()?
// The .find() method returns the first element in an array that satisfies a provided condition.
// If no match is found, it returns undefined.

////////////////////// Think of it as: "Give me the 😎first thing that matches."

// 🧠 Real-world use cases
// Find a specific product in a list
// Get a user by email/ID
// Get first form input with an error
// Locate first failed API response

//📌 Syntax:

// array.find((item, index, array) => {
//   // return true for the item you want
// });


// 1️⃣ Find the first even number

const numbers = [1, 3, 4, 7, 8];

const firstEven = numbers.find(num => num % 2 === 0);
console.log('First even number:', firstEven);                               // o/p : 4


// 2️⃣ Find the user with role "Developer"
const users = [
  { name: 'Pranav', role: 'Designer' },
  { name: 'Riya', role: 'Developer' },
  { name: 'Aman', role: 'Tester' }
];

const devUser = users.find(user => user.role === 'Developer');
console.log('First Developer:', devUser);                                    // { name: 'Riya', role: 'Developer' }



// ⚠️ find() vs filter()
// Method               |                Returns                     |       Finds one or many?

// find()               |    First matching element or undefined     |            🔍 One
// filter()             |      Array of all matching elements        |            🔎 Many