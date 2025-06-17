// ways to define objects

 // 1) Object Lateral  2) object constructor (isse singleton bnta hain object.create)

 // 1) Object Lateral

 const myObj = {
    'name' : 'Pranav',
    'age' : 30,
    'location' : 'Nagpur',
    'isLoggedIn' : true,
    'loggedInDays' : ['Mon','Tue','Fri'],
    'full name' : 'Pranav Hiwse'
 }

 console.log(myObj.age);
 //  console.log(myObj[location]);         // this will not work

 console.log(myObj['location']);           // why we need this syntax to print if we can access using dot ( check below )
//  console.log(myObj.full name);          // bcz this type of key U can't access using dot(.) bcz key has on empthy space
 console.log(myObj["full name"]);          // U have to use [ ] for this.

// to change value
myObj.age = 28;
console.log(myObj.age);

// how to freeze an object, so that no one can add, modify, delete
Object.freeze(myObj);
myObj.age = 26;
console.log(myObj.age);                               // age is 28 -- not modified
myObj.newProperty = "new property value";    
console.log(myObj.newProperty);                       // undefined -- not added new property 
delete myObj.age  
console.log(myObj.age);                               //  age is 28 -- not deleted

// how to seal an object, so that no one can add and delete but can modify
// Object.seal(myObj)

// | Feature                         | `Object.freeze()`  | `Object.seal()` |
// | ------------------------------- | -----------------  | --------------- |
// | Add new properties              | ❌ No              | ❌ No            |
// | Delete properties               | ❌ No              | ❌ No            |
// | Modify existing property values | ❌ No              | ✅ Yes           |
// | Modify property descriptors     | ❌ No              | ❌ No            |
// | Object is immutable             | ✅ Fully           | 🚫 Partially    |

// Mutable vs Immutable
// mutable (modifies orignal) vs Immutable (not-modifies orignal)

// Mutable  - Object, Array, Function
let object1 = { name: "Alice" };
let object2 = object1;              // object2 references the same object as obj1
object2.name = "Bob";

console.log(object1.name);          // "Bob"
console.log(object2.name);          // "Bob"

// Immutable  - string, number, boolean, null, undefined, Symbol, BigInt
let a = 20;
let b = a;                          // b gets a *copy* of the value in a
b = 30;                             // changing b doesn't affect a
console.log(a);                     // 20
console.log(b);                     // 30


// | Concept      | Mutable                           | Immutable                         |
// | ------------ | --------------------------------- | --------------------------------- |
// | What happens | Modifies the original object      | Creates a new object              |
// | Risk         | Can cause bugs and side effects   | Safer, more predictable           |
// | Angular use  | Can cause missed change detection | Works well with `OnPush` strategy |



// how to add symbol as key in Object 

 const mySym = Symbol("key1");

 const myObj1 = {
    [mySym] : "myKey1",
    'name' : 'Pranav',
    'age' : 30,
    'location' : 'Nagpur',
    'isLoggedIn' : true,
    'full name' : 'Pranav Hiwse'
 }

 console.log(myObj1[mySym]);
 console.log(myObj1);

 // how to assign function in key
 myObj1.jsUserFun = function() {
    console.log('I am function');
 }

 console.log(myObj1.jsUserFun());

 // how to use object value inside Obj function

 myObj1.jsUserFun1 = function() {
    console.log(`my age is ${this.age}`);
 }
console.log(myObj1.jsUserFun1());

// //////////////////////////////////////
// antother way to write object

const tinderUser = new Object();
console.log(tinderUser);

// concat multiple object 
const obj1 = {1:'raw', 2:'bean', 3:'chipma'};
const obj2 = {4:'cave', 11:'lion', 15:'shimpi'};

const concatObj = {...obj1, ...obj2};
console.log(concatObj);

//////////////
// print keys and values and entries

const mobileUser = {
   id : 165468,
   name : 'pranav',
   location : 'nagpur',
   sim : 2
}
console.log(Object.keys(mobileUser));    // [ 'id', 'name', 'location', 'sim' ]
console.log(Object.values(mobileUser));   // [ 165468, 'pranav', 'nagpur', 2 ]
console.log(Object.entries(mobileUser));   // [ [ 'id', 165468 ], [ 'name', 'pranav' ], [ 'location', 'nagpur' ], [ 'sim', 2 ] ]

// agar humne kuch property search karna ho toh 
console.log(mobileUser.hasOwnProperty('sim'));           // true
console.log(mobileUser.hasOwnProperty('islogged'));      // false




