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

const myArrSlice = [9,8,7,4,5,6,3,2,1]
console.log('A  ' + myArrSlice);
console.log(myArrSlice.slice(2,5));      // [ 7, 4, 5 ] // 1st index no. ko pkdega aur 2nd index no. ke phle wale tak pkdega
console.log(myArrSlice.slice(3,8));      // [ 4, 5, 6, 3, 2 ]

console.log('After slice array is same  ' + myArrSlice);

//  Splice

const myArrSplice = [9,8,7,4,5,6,3,2,1]
console.log('B  ' + myArrSplice);
console.log(myArrSplice.splice(1,3));    // 1st index no. ko lena aur 2nd index no. tak ko kha lega
console.log(myArrSplice.splice(2,5));    // [ 6, 3, 2, 1 ]

console.log('After splice array is modified  ' + myArrSplice);

// 🎤 Interview-Ready Answer:
// slice() is non-destructive — it returns a new array with selected elements.
// splice() is destructive — it changes the original array by removing or adding elements at a specific index.
// Use slice() for copying, and splice() for modifying.


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