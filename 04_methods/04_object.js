// Method                                  | Description

// Object.keys(obj)                        | Returns an array of keys
// Object.values(obj)                      | Returns an array of values
// Object.entries(obj)                     | Returns array of [key, value] pairs
// Object.fromEntries(arr)                 | Converts [key, value] pairs back into an object
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
const obj = { a: 1, b: 2, c: 3 };
const filtered = Object.fromEntries(
  Object.entries(obj).filter(([key, value]) => value > 1)
);
console.log(filtered);                                           // { b: 2, c: 3 }

// ✅ Map over Object values
const prices = { apple: 100, banana: 80 };
const updatedPrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 1.1])
);
console.log(updatedPrices);                                      // { apple: 110, banana: 88 }




