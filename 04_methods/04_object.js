// Method                                  | Description

// Object.keys(obj)                        | Returns an array of keys
// Object.values(obj)                      | Returns an array of values
// Object.entries(obj)                     | Returns array of [key, value] pairs
// Object.fromEntries(arr)                 | Converts [key, value] pairs back into an object   - we can filter object using this 
// Object.assign()                         | Copies properties from one or more objects
// Object.hasOwnProperty()                 | Checks if object has specific key
// Object.freeze()                         | Freezes the object (no changes allowed)
// Object.seal()                           | Seals object (no new keys, but existing values can change)


// ✅ 
const user = { name: "Pranav", role: "Designer", age: 28 };

console.log(Object.keys(user));                                  // ['name', 'role', 'age']

console.log(Object.values(user));                                // ['Pranav', 'Designer', 28]

console.log(Object.entries(user));                               // [['name', 'Pranav'], ['role', 'Designer'], ['age', 28]]

// ✅ Filter an Object by value
// 💥💥💥💥💥💥💥💥💥💥💥💥💥
const obj = { a: 1, b: 2, c: 3 };
const filtered = Object.fromEntries(
  Object.entries(obj).filter(([key, value]) => value > 1)
);
console.log(filtered);                                           // { b: 2, c: 3 }

// ✅ Map over Object values
// 💥💥💥💥💥💥💥💥💥💥💥💥💥
const prices = { apple: 100, banana: 80 };
const updatedPrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 1.1])
);
console.log(updatedPrices);                                      // { apple: 110, banana: 88 }


// merge
const obj1 = { name: "Pranav", age: 28 };
const obj2 = { city: "Pune", age: 30 };
// You want to merge obj1 and obj2. Here’s how:

// 🔹 1. Using Object.assign():

const merged1 = Object.assign({}, obj1, obj2);
console.log(merged); 
// Output: { name: 'Pranav', age: 30, city: 'Pune' }
// It copies properties from obj1 and obj2 into a new object.

// If keys conflict (age), later values override earlier ones.

// 🔹 2. Using Spread Operator ... (ES6):

const merged2 = { ...obj1, ...obj2 };
console.log(merged);
// Output: { name: 'Pranav', age: 30, city: 'Pune' }
// This is the most modern and readable way.

// Again, properties from obj2 override obj1 in case of conflicts.



