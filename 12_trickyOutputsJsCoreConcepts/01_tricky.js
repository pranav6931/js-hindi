
// 🟠 1. var vs let vs const (Basic Differences)
var a = 10;
var a = 20;
console.log(a);           // output: 20

let b = 10;
// let b = 20;            // SyntaxError: Identifier 'b' has already been declared

const c = 30;
// c = 40;                // TypeError: Assignment to constant variable

// 🔵 2. Hoisting with var, let, const
console.log(x);           // output: undefined
var x = 5;

console.log(y);           // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z);           // ReferenceError: Cannot access 'z' before initialization
const z = 15;

// 🟢 3. Temporal Dead Zone (TDZ)
{
  // TDZ starts
  // console.log(a);      // ReferenceError
  let a = 10;
}

// 🟡 4. Block Scope vs Function Scope
{
  var a = 10;
  let b = 20;
}
console.log(a);           // output: 10
// console.log(b);        // ReferenceError: b is not defined

function test() {
  var x = 1;
}
console.log(typeof x);    // output: undefined


// 🟣 5. const with objects
const obj = { name: "Pranav" };
obj.name = "Rahul";
console.log(obj.name);    // output: Rahul

// obj = { name: "Someone" }  // TypeError: Assignment to constant variable


// 🔴 6. Shadowing
let a = 100;

{
  let a = 200;
  console.log(a);         // output: 200
}
console.log(a);           // output: 100


var b1 = 100;

{
  let b1 = 200;
  console.log(b);         // output: 200
}
console.log(b);   


// 🔵 7. var inside loop (not block scoped)
for (var i = 0; i < 3; i++) {}
console.log(i);           // output: 3

for (let j = 0; j < 3; j++) {}
// console.log(j);        // ReferenceError: j is not defined



// 🟠 8. Function declaration hoisting

hoisted();                // output: "Hoisted"
function hoisted() {
  console.log("Hoisted");
}
//

notHoisted();             // TypeError: notHoisted is not a function
var notHoisted = function () {
  console.log("Not hoisted");
};


// 🟢 9. this keyword behavior
const person = {
  name: "Pranav",
  getName: function () {
    return this.name;
  }
};
console.log(person.getName());  // output: "Pranav"

//
const person2 = {
  name: "Pranav",
  getName: () => {
    return this.name;
  }
};
console.log(person2.getName()); // output: undefined (arrow function doesn't bind its own this)


// 🟣 10. Closures in Loops (with var vs let)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// output: 3 3 3

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// output: 0 1 2


// 🔴 11. Redeclaration & Scope Conflicts
let a = 10;
// var a = 20;           // SyntaxError: Identifier 'a' has already been declared

var b2 = 10;
var b2 = 20;
console.log(b);           // output: 20


// 🟡 12. Function hoisting vs function expression

foo();                   // output: "Hello"

function foo() {
  console.log("Hello");
}

bar();                   // TypeError: bar is not a function
var bar = function () {
  console.log("Hi");
};


// 🟠 13. Default parameter values with var scope

var x = 1;
function demo(x = y, y = 2) {
  console.log(x, y);
}
// demo();               // ReferenceError: Cannot access 'y' before initialization
































