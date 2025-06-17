const myArray = [1,2,3,4,5];

console.log(myArray[3]);                // indexing start with 0   - o/p : 4

// using new keyword to define array
const myArrayNew = new Array(7,8,9,10);
console.log(myArrayNew[0]);

// myArray.push(20);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.unshift(45);
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

// let arrInc = myArray.includes(2);
let arrInc = myArray.indexOf(3);                  // checking index of 3 
console.log(arrInc);

// to convert in string ( bind and string )
let arrJoin = myArray.join();
console.log(arrJoin);                            // 1,2,3,4,5   it's typeOf is string 


//  Slice

const arr = [1, 2, 3, 4, 5];
const result = arr.slice(1, 4); // from index 1 to 3 (4 is excluded)

console.log(result); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5]       (✅ original unchanged)


//  Splice

const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 2); // remove 2 elements starting at index 1

console.log(removed); // [2, 3]
console.log(arr);     // [1, 4, 5] (❗ original modified)

// ➕ Bonus: Add using splice()
const arr = [1, 4, 5];
arr.splice(1, 0, 2, 3); // at index 1, remove 0, insert 2, 3

console.log(arr); // [1, 2, 3, 4, 5]

// 🎤 Interview-Ready Answer:
// The slice() method returns a shallow copy of a portion of an array, without modifying the original array — it's non-destructive.
// On the other hand, splice() modifies the original array by adding, removing, or replacing elements — it's destructive.
// slice is great for copying or extracting, while splice is used for updates or deletions within the array.


// concat 2 arrays

const firstArray = ['ram', 'shyam', 'geeta'];
const secondArray = ['babita', 'jetha', 'tappu'];
   // 1st way
const concatArray = firstArray.concat(secondArray);
console.log(concatArray);
   // 2nd way
const spreadArray = [...firstArray, ...secondArray];
console.log(spreadArray);

//////////////////////////// when lots of array inside array //////////////////////////////////
const anotherArray = [5,5,8,9,[5,5,8,6,8], 8,89,3,6,7, [87,6,9,[87,8,9,5],85]];
const realArray = anotherArray.flat(Infinity);
console.log(realArray);

// check array
console.log(Array.isArray("pranav"));              // false
// convert array
console.log(Array.from("pranav"));                 // [ 'p', 'r', 'a', 'n', 'a', 'v' ]
// we have string method too for the same
console.log(("pranav").split(""));                 // [ 'p', 'r', 'a', 'n', 'a', 'v' ]


// convert string to array
const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));       // [ 100, 200, 300 ]