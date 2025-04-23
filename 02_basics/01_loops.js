// 1) for - 
// 2) break and continue
// 3) while 
// 4) do while
// 5) for of -  arrays, strings, Maps, Sets
// 6) for in - Iterating over object properties
// 7) forEach : Executing a function on each element of an array without returning a new array
//              it's a higher order function, act as a call back function : it takes function as a parameter
//

// 1) for loop
// commonly used when number of iterations is known

for (let index = 1; index < 10; index++) {
    const element = index;
    console.log(element);
}

// 2) break  : it breakes that iteration

for (let index = 1; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log(`detected ${element}`);
        break;
    }
    console.log(element);
}

// continue   : it skip that iteration

for (let index = 1; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log(`detected ${element}`);
        continue;
    }
    console.log(element);
}

// 3) while loop : when number of iterations not known, it's continues to run as long as condition remains same.

index = 0
while (index <= 10) {
    console.log(`value of index ${index}`);
    index = index+2 
}

// with array
let myArr = ['batman', 'superman', 'tom'];
let arr = 0
while (arr < myArr.length) {
    console.log(`my Arr values ${myArr[arr]}`);
    arr = arr +1
}

// 4) do while : condition check hone phle ek bar to chlta hi hain ye 
let score = 11;
do {
    console.log(`score value : ${score}`);
    score = score + 1;
} while (score < 10);

// 5) for of loop : Iterating over values in arrays, strings, Maps, Sets  
//     array, string, map
  // - array
const myArray = [1,2,3,4,5,6];
for (const num of myArray) {
    console.log(num);
}

  // - string
const myString = "pranav hiwse"  
for (const char of myString) {
    console.log(char);
}

  // map   : ye duplicate key ko print nhi karta 
const map = new Map();
map.set('In', 'India');
map.set('US', 'United state of america');
map.set('Fr', 'France');
map.set('In', 'Indi');
   // console.log(map);

for (const key of map) {
    console.log(`${key}`);
}

for (const [key, value] of map) {
    console.log(`key - ${key}, value - ${value}`);
}

// ab jab map iterate ho rha hian to object bhi hoga , but nhi object ko hum for in se iterate karte hain.

// 6) for in  : 	Iterating over object properties
const carObject = {
    'name' : 'Punch',
    'model' : '2012',
    'color' : 'gray',
    'sunroof' : false,
    'tyre pressure' : '33psi'
}

for (const key in carObject) {
    // console.log(key);                   // output will be only keys
    console.log(`keys: ${key} and its value : ${carObject[key]}`);     // for value need to use this syntax
}

     // ab tumko lag rha hoga ki kya array ko bhi for in se iterate kar skte hian, ha kar toh sakte hian but index value milti hain usme 

const myArray2 = ['ram', 'shyam', 'geeta', 'raj'];
for (const key in myArray2) {
   // console.log(`${key}`);                     // 0 1 2 3
   console.log(`${myArray2[key]}`);              // see now 
}

// BAs itna hi difference hain for of and for in me.

// 7)  forEach : Executing a function on each element of an array without returning a new array

// it's a higher order function, act as a call back function : it takes function as a parameter

const myArray3 = ['don','pranav','hmt','dom','bom','shadowDom']
myArray3.forEach(element => {
    console.log( `element : ${element}`);
});

// if have function outside
function myFunction3(element) {
    console.log( `outside function : ${element}`);
};

myArray3.forEach(myFunction3);

// forEach has other parameters too   : value,index,array
// and forEach does not return any value
myArray3.forEach((value,index,array)=>{
    console.log( `value : ${value}, index : ${index}, whole array : ${array}`);
});

// now array object

const myArrayObject = [
    {
        languageName : 'javascript',
        fileNAme : 'js'
    },
    {
        languageName : 'html',
        fileNAme : 'html'
    },
    {
        languageName : 'text',
        fileNAme : 'txt'
    },{
        languageName : 'excel sheet',
        fileNAme : 'xlsx'
    }
];

myArrayObject.forEach(item => {
    console.log( `language name  : ${item.languageName}`);
});




