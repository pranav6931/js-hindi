// sort()

// ✅ What is sort()?
// The .sort() method sorts elements of an array in-place and returns the sorted array.

// ⚠️ By default, it sorts everything as strings, which can cause unexpected results with numbers.

//
// array.sort((a, b) => {
//     // comparison logic
//     return a - b;
//   });


// 1️⃣ Default sort (Strings)
const fruits = ['banana', 'apple', 'mango', 'cherry'];

console.log(fruits.sort());                                           // [ 'apple', 'banana', 'cherry', 'mango' ]

// 2️⃣ Default sort (Numbers – ⚠️ Wrong result)
const numbers1 = [20, 3, 100, 50];                                     
console.log(numbers1.sort());                                         // [100, 20, 3, 50] – ❌ because it's sorting as strings

// 3️⃣ Sorting numbers correctly (with compare function)
const numbers2 = [20, 3, 100, 50];
console.log(numbers2.sort((a, b) => a - b)); // Ascending               // [3, 20, 50, 100]

console.log(numbers2.sort((a, b) => b - a)); // Descending              // [100, 50, 20, 3]


// 4️⃣ Sort objects by a property
const users = [
  { name: 'Riya', age: 25 },
  { name: 'Pranav', age: 30 },
  { name: 'Aman', age: 22 }
];

const sortedByAge = users.sort((a, b) => a.age - b.age);  // Sort by age (ascending)
console.log(sortedByAge);

// [
//   { name: 'Aman', age: 22 },
//   { name: 'Riya', age: 25 },
//   { name: 'Pranav', age: 30 }
// ]


// 5️⃣ Sort by name (alphabetically)
const users1 = [
  { name: 'Riya' },
  { name: 'Pranav' },
  { name: 'Aman' }
];

const sortedByName = users1.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);

// [
//   { name: 'Aman' },
//   { name: 'Pranav' },
//   { name: 'Riya' }
// ]