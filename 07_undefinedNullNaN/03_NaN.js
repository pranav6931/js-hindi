//🔹 What is NaN?
// In JavaScript, NaN is a special value that indicates something is not a valid number, even though the type is still number.

typeof NaN; // "number"
// Yes, that's weird — NaN is technically a number, but it's an invalid one.

// 🔹 When do we get NaN?
// You get NaN when a mathematical operation fails or tries to convert a non-numeric string:

console.log(0 / 0);            // NaN
console.log(Math.sqrt(-1));    // NaN
console.log("abc" - 5);        // NaN
console.log(parseInt("xyz")); // NaN

// 🔹 Key Things to Know About NaN
// 1. ❌ NaN === NaN is false
console.log(NaN === NaN); // false
// Weird but true — NaN is the only value that is not equal to itself.

// To check for it, use:

isNaN(NaN);              // true ✅
Number.isNaN(NaN);       // true ✅ (preferred way)


// 2. 🧠 isNaN() vs Number.isNaN()

isNaN("hello");                 // true ❌ (coerces the value)
Number.isNaN("hello");          // false ✅ (checks properly)


// 🔍 Why does NaN exist?
// To represent an invalid or failed number operation without crashing your program. 
// It’s like a way for JS to say: "I tried, but this isn’t a real number."

console.log("hello" - 1);    // NaN

console.log("5" - "2");      // 3
// 🧠 Explanation: Both strings are coerced to numbers → 5 - 2 = 3.

console.log(NaN === NaN);  // false

// 🧠 Explanation: NaN is never equal to NaN. Use Number.isNaN() instead.


console.log(isNaN("abc"));         //true
// 🧠 Explanation: "abc" is coerced to a number (NaN), so isNaN returns true.

console.log(Number.isNaN("abc")); // false 
// This is the better way because it doesn’t do coercion.

let x = NaN;
console.log(typeof x);            // "number"
// 🧠 Explanation: Even though it’s “Not-a-Number”, the type is still "number" 🤯.