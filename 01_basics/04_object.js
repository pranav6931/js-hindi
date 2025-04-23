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
 console.log(myObj['location']);       // why we need this syntax to print 
//  console.log(myObj.full name);         // bcz this type of key U can't access using dot(.) bcz key has on empthy space
 console.log(myObj["full name"]);       // U have to use [ ] for this.

// to change value
myObj.age = 28;
console.log(myObj.age);

// how to freez an object, so that no one can change the value
Object.freeze(myObj);
myObj.age = 26;
console.log(myObj);                 // age is 28 -- not modified

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

 // how to add key as a function
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
console.log(Object.keys(mobileUser));
console.log(Object.values(mobileUser));
console.log(Object.entries(mobileUser));

// agar humne kuch property search karna ho toh 
console.log(mobileUser.hasOwnProperty('sim'));           // true
console.log(mobileUser.hasOwnProperty('islogged'));      // false




