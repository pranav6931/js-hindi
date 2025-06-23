// Array methods

const myArr = [1,2,3,4];
myArr.push(40)
console.log(myArr);                             // [ 1, 2, 3, 4, 40 ]
myArr.pop(40)
console.log(myArr);                             // [ 1, 2, 3, 4 ]
myArr.unshift(70)
console.log(myArr);                             // [ 70, 1, 2, 3, 4 ]
myArr.shift()
console.log(myArr);                             // [ 1, 2, 3, 4 ]

// concat
const myArr1 = [1,2,3,4];
const myArr2 = [5,6,7];
const concatArr = myArr1.concat(myArr2);        // [1,2,3,4,5,6,7]
console.log(concatArr);

// Slice
const myArr3 = [1,2,3,4,5,6];
const mySlice = myArr3.slice(2,4)
console.log(mySlice);                                   // [3,4]

// Searching & Checking Elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
console.log(index);                                          // 2

let isIncludes = fruits.includes("Banana");
console.log(isIncludes)                                      // true

Array.isArray(fruits);                                      // true



// If you want to find min and max of any number array then u can first convert to string then u can use sring methods min and max
const numbers = [3, 8, 1, 6, 10, 2];

const minValue = Math.min(...numbers);             // Output: 1
const maxValue = Math.max(...numbers);             // Output: 10


const arr = [10,20,30,20,30]
// Removing duplicates: 
const unique = [...new Set(arr)];
console.log(unique);                               // [ 10, 20, 30 ]

// Flattening an array: 
const arr1 = [10,[20,30,20],30]
const flatArr = arr1.flat(Infinity); 
console.log(flatArr);                                // [ 10, 20, 30, 20, 30 ]

// Join an array: 
const arr2 = ['main', 'hu', 'don' ];
console.log(arr2.join(""));                        // mainhudon


// slice vs splice

//  Slice
const arr11 = [1, 2, 3, 4, 5];
const result = arr11.slice(1, 4); // from index 1 to 3 (4 is excluded)

console.log(result); // [2, 3, 4]
console.log(arr11);    // [1, 2, 3, 4, 5]       (✅ original unchanged)


//  Splice
const arr22 = [1, 2, 3, 4, 5];
const removed = arr22.splice(1, 2); // remove 2 elements starting at index 1

console.log(removed); // [2, 3]
console.log(arr2);     // [1, 4, 5] (❗ original modified)
