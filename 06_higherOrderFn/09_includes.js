// ✅ What is includes()?
// .includes() checks if a certain value exists in an array or string.
// It returns a boolean — true if found, false otherwise.

/////////////////////// Think of it as: “Does this list 😎contain this item?”

// 📌 Syntax:
// array.includes(valueToFind [, fromIndex])
// string.includes(searchString [, position])


//1️⃣ Basic number check
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3)); // true
console.log(numbers.includes(9)); // false


// 2️⃣ String check

const fruits = ['apple', 'banana', 'mango'];

console.log(fruits.includes('banana'));                     // true
console.log(fruits.includes('grapes'));                     // false


// 3️⃣ Case-sensitive check
const names = ['Pranav', 'Riya'];

console.log(names.includes('pranav'));                      // false ❌ (case-sensitive)
console.log(names.includes('Pranav'));                      // true ✅


// 4️⃣ Using fromIndex
const items = ['a', 'b', 'c', 'a'];

console.log(items.includes('a', 2));                        // true (finds 'a' at index 3)
console.log(items.includes('a', 4));                        // false

// 🎯 Examples with Strings:
const sentence = 'Learning JavaScript is fun!';

console.log(sentence.includes('JavaScript'));               // true
console.log(sentence.includes('python'));                   // false


// ❌ .includes() with objects

const users = [{ name: 'Pranav' }, { name: 'Riya' }];
console.log(users.includes({ name: 'Pranav' }));            // false ❌

const target = users[0];
console.log(users.includes(target));                        // true ✅ (same reference)