// flat()

// super useful when dealing with nested arrays.

// ✅ flat() — Syntax
// array.flat(depth);
// depth (optional): how deep to flatten the array. Default is 1.


// 🧪 Example 1: Basic
const arr1 = [1, 2, [3, 4]];

const flatArr = arr1.flat();
console.log(flatArr);                                               // [1, 2, 3, 4]

// 🧪 Example 2: Deeper Nesting
const arr2 = [1, [2, [3, [4]]]];

console.log(arr2.flat());                                          // [1, 2, [3, [4]]]
console.log(arr2.flat(2));                                         // [1, 2, 3, [4]]
console.log(arr2.flat(3));                                         // [1, 2, 3, 4]


// 🧪 Example 3: With Infinity depth
const arr3 = [1, [2, [3, [4, [5]]]]];

console.log(arr3.flat(Infinity));                                  // [1, 2, 3, 4, 5]


//🧪 Example 4: Removing Empty Slots (sparse arrays)
const arr = [1, 2, , 4];

console.log(arr);                                                  // [1, 2, <1 empty item>, 4]
console.log(arr.flat());                                           // [1, 2, 4]



// ⚠️ Note:
// flat() only works on arrays, not objects.

// It does not mutate the original array — it returns a new one.