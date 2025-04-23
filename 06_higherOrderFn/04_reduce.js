// reduce()
// it reduce Array to single string 
// it returns single value ( number, string, object etc)
//

// array.reduce((accumulator, currentValue, index, array) => {
//     return updatedAccumulator;
//   }, initialValue);

// initialValue could bw anything , 0, 1 , {}, [], '';


// S1 : sum of all numbers
const arr1 = [1, 2, 3, 4, 5, 6];
const sumNum = arr1.reduce((acc, curr) => {
    return acc + curr;
}, 0)
console.log(sumNum);

// S2 : multiply
const multiply = arr1.reduce((acc, curr) => {
    return acc * curr;
}, 1)
console.log(multiply);

// S4 : find lasgest value
const largest = arr1.reduce((acc, curr) => {
    if (acc < curr) {                                    // u can use ternary operator to 
        return curr;                                     // (acc < curr)? curr : acc
    } else {
        return acc
    }
});
console.log(largest);

// S5 : Count frequency of items
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const frequency = fruits.reduce((acc,curr) =>{
    acc[curr] = (acc[curr] || 0 )+ 1;
    return acc;
}, {});
console.log(frequency);


// S6 : Flatten an array

const arr2 = [[1, 2], [3, 4], [5]];
const flat = arr2.reduce((acc, curr) => {
   return  acc.concat(curr);
}, []);
console.log('Flattened:', flat);                                      // [1, 2, 3, 4, 5]


// S7 :  Build an object from array
const arr3 = ['a', 'b', 'c'];
const indexed = arr3.reduce((acc, curr, index) => {
  acc[index] = curr;
  return acc;
}, {});

console.log('Indexed Object:', indexed);                               // {0: 'a', 1: 'b', 2: 'c'}


// S8 : Reduce to string
const arr4 = ['P', 'R', 'A', 'N', 'A', 'V'];
const name = arr4.reduce((acc, curr) => acc + curr, '');
console.log('Name:', name); // 'PRANAV'


// S9 : Track min/max in one pass
const arr5 = [10, 22, 5, 8, 33];

const result = arr5.reduce((acc, curr) => {
    return {
      min: curr < acc.min ? curr : acc.min,
      max: curr > acc.max ? curr : acc.max
    };
  },
  { min: Infinity, max: -Infinity }
);

console.log('Min/Max:', result); // { min: 5, max: 33 }

