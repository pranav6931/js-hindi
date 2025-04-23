// map() - Array Method
// map() transform each element of an array and return a new array of same length 

// Syntax 
// orignalArray.map((element,index,array)=>{
//     return // return transform array 
// })


// S-1  : multiply each no. by 2 
const arr1 = [1,2,3,4,5,6,7];
const multiplyBy2 = arr1.map((num)=>{
    return num*2;
})
console.log(multiplyBy2);   // [2,4,6,8,10,12,14]

// S-2 : use index also
const addIndex = arr1.map((ele,index)=>{
    return `${ele} : ${index}`;
});
console.log(addIndex); 

// S-3 : convert string to uppercase
const str1 = ['ab', 'bas', 'kyo', 'hain', 'yaha', 'pe'];
const toUpperCase =  str1.map((ele)=>{
    return ele.toUpperCase();
})
console.log(toUpperCase); 

// S-4 : Return objects with transformation ( will add 1 in age )
const user = [
    {name:'pranav', age:20},
    {name:'frog', age:2},
];

const userAgeIncrease = user.map(ele =>{                     // here ele comes as single object 
    return {name:ele.name, age:ele.age+1};                   // it's horrible, right? every time we have to written whole object, 
} );
console.log(userAgeIncrease);

// to resolve aboue issue we can use spread operator

const userAgeIncrease1 = user.map(ele =>{
    return {...ele, age: ele.age+1}                         // so here using ... is spread all data of object , 
                                                            // and then we override the age property            
})                                                          // khatrnakk 
console.log(userAgeIncrease1);                       // o/p : [ { name: 'pranav', age: 21 }, { name: 'frog', age: 3 } ]


// S-5 : Extract only one property 
const extractSingleProperty = user.map(ele=>{
    return ele.name;
})
console.log(extractSingleProperty);            // o/p : [ 'pranav', 'frog' ]


// S-6 : Map with condition (ternary operator)
const arr2  = [40,50,60,20];
const arrCondition = arr2.map(ele =>{
    return ele<=30? 'fail' : 'true'
})
console.log(arrCondition);                      // o/p :  [ 'true', 'true', 'true', 'fail' ]

// S-7 : Map with Math functions
const arr3 = [4, 9, 16];
const squareRoots = arr3.map(Math.sqrt);
console.log('Square Roots:', squareRoots);      // [2, 3, 4]


