// forEach
// The forEach() method executes a function once for each array element — just like a for loop.
// It’s mostly used when you want to iterate through the array and perform side effects like logging, updating UI, etc
// It does not return anything (always returns undefined), so you can’t chain it like map, filter, or reduce.

// ✅ When to use forEach()?
// When you're not returning a new array
// When you want to perform actions (log, DOM updates, push into external array)
// Avoid it when you need transformation → use map, filter, reduce

// Syntax
// array.forEach((element, index, array) => {
//     // do something with item
//   });


// S1 : print all elements
const arr1 = ['pranav', 'riya', 'tina'];
const printEle = arr1.forEach((ele,index) =>{
    console.log(`index is ${ele} is : ${index}`)           
})

// S2 : add numbers
const arr2 = [1,2,3,4,5,6];
let sum = 0;

arr2.forEach(ele =>{
    sum += ele
})
console.log(sum);                                            // o/p : 21



// Compare with map();

const arr3 = [1,2,3,4,5,6,7];
const mapModify = arr3.map(ele =>{
    return ele*2;                                            //  [2,  4,  6, 8, 10, 12, 14]
});
console.log(mapModify);

// now using forEach     --  it will not return anything
const forEachModify = [];
arr3.forEach(ele =>{
    forEachModify.push(ele*2);
});
console.log(forEachModify);                                   //  [2,  4,  6, 8, 10, 12, 14]


// ⚠️ Common mistake:
// it does not return new array so how can we store it in a variable n, we can't ❌
const result = [1, 2, 3].forEach(x => x * 2);
console.log(result);                                         // undefined ❌

