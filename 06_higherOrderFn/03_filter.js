// filter() - Array Method
// it filters elements based on condition and return only those that meet the criteria.
// it return new array with fewer elements

//   array.filter((item, index, array) => {
//     return condition; // should return true or false // after that it return array
//   });


// S1 : Filter numbers greater than 10
const arr1 = [5, 12, 8, 130, 44];
const gratherThen10 = arr1.filter(ele => {
    return ele > 10;                                 // o/p : [ 12, 130, 44 ]
})
console.log(gratherThen10);

// S2 : Filter even numbers
const arr2 = [1, 2, 3, 4, 5, 6];
const evenNumber = arr2.filter(ele => {
    return ele % 2 === 0;                           // o/p : [ 2, 4, 6 ]
})
console.log(evenNumber);

// S3 : Filter strings by length
const arr3 = ['hi', 'hello', 'hey', 'namaste'];
const strLength = arr3.filter(ele => {
    return ele.length < 5;
})
console.log(strLength);                           // o/p : [ 'hi', 'hey' ]


// S4 :  Filter based on object property
const users = [
    { name: 'Pranav', active: true },
    { name: 'Aman', active: false },
    { name: 'Riya', active: true }
];

const activeUsers = users.filter(ele => {
    return ele.active == true;                      // o/p : [ { name: 'Pranav', active: true }, { name: 'Riya', active: true } ]
})
console.log(activeUsers);


// S5 :  Filter numbers in a range
const arr4 = [20, 45, 60, 80, 90];
const passed = arr4.filter(ele => {
    return ele >= 50 && ele <= 90
});
console.log('Passed:', passed);                      // o/p : [60, 80, 90]


// S6 :  Filter array of objects by string match
const products = [
    { name: 'iPhone', category: 'mobile' },
    { name: 'MacBook', category: 'laptop' },
    { name: 'Galaxy', category: 'mobile' }
];

const mobiles = products.filter(ele => {
    return ele.category === 'mobile';
});
console.log('Mobiles:', mobiles);                     // o/p : // [{ name: 'iPhone', category: 'mobile' }, { name: 'Galaxy', category: 'mobile' }]


// S7 : Filter with index
const arr5 = ['a', 'b', 'c', 'd'];
const evenIndex = arr5.filter((_, i) => {
    return i % 2 === 0;
});
console.log('Even Index:', evenIndex);                 // o/p : ['a', 'c']

// S-8 : combine filter and map
const employees = [
    { name: 'Pranav', salary: 50000 },
    { name: 'Riya', salary: 75000 },
    { name: 'Aman', salary: 30000 }
];

const printHigherSal = employees.filter(ele => {
    return ele.salary > 40000;
}).map(emp => {
    return emp.name;
});
console.log(printHigherSal);
