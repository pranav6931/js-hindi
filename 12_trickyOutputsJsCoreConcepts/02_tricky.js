

// 🔥 1. Destructuring with default values + function call

function getDefault() {
  console.log("getDefault called");
  return 10;
}

const [a1 = getDefault()] = [5];
console.log(a1);                               // output: 5 (default not triggered)


// 🔥 2. Object keys coercion

const a2 = {};
const b2 = { key: "b2" };
const c2 = { key: "c2" };

a2[b2] = 123;
a2[c2] = 456;

console.log(a2[b2]);                            // output: 456 (b and c both become "[object Object]")


// 🔥 3. typeof null quirk + NaN truthiness

console.log(typeof null);                     // output: "object"
console.log(null instanceof Object);                  // output: false

console.log(!!NaN);                           // output: false
console.log(NaN == NaN);                      // output: false

//see what's this 
////  object instanceof Constructor
function Person() {}
const p = new Person();

console.log(p instanceof Person); // true
console.log(p instanceof Object); // true


// 🔥 4. this in setTimeout

let obj = {
  count: 0,
  increment: function () {
    setTimeout(function () {
      this.count++;
      console.log(this.count);
    }, 100);
  }
};

obj.increment();                              // output: NaN (because `this` is window/global, not `obj`)

// direct inside function use this
let obj1 = {
  count: 0,
  increment: function () {
      this.count++;
      console.log(this.count);
  }
};

obj1.increment();                              // 1


// in arrow fun
let obj2 = {
  count: 0,
  increment: function () {
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 100);
  }
};

obj2.increment();                                 // 1


// 🔥 5. Implicit coercion trap with ==

console.log([] == ![]);                       // output: true
// Explanation:
// [] == false -> true


// 🔥 6. typeof weirdness
 
console.log(typeof typeof 1);                 // output: "string"        ==> typeof "number"  ==> string



// 🔥 8. Function parameter + default + hoisting

let x1 = 21;

var foo = function () {
  console.log(x1);                               // output: undefined
  var x1 = 20;
};

foo();


// 🔥 9. Short-circuit evaluation tricks

const val = null || undefined || "Hello";
console.log(val);                                // output: "Hello"   == > The || (logical OR) operator returns the first truthy value it finds, or the last value if all are falsy.


// 🔥 10. Optional chaining and nullish coalescing

const user = {
  profile: {
    name: "Pranav"
  }
};

console.log(user?.profile?.name ?? "No Name");                  // output: "Pranav"
console.log(user?.address?.city ?? "No City");                  // output: "No City"


// 🔥 11. Deep reference mutation

let x3 = { a: 1 };
let y3 = x3;
y3.a = 2;
console.log(x3.a);                                                // output: 2


// 🔥 13. Function scope vs block scope shadowing

var x4 = 10;
function test() {
  console.log(x4);                                               // output: undefined
  var x4 = 20;
}
test();


// 🔥 14. Chained assignments + reference

let a = { x: 1 };
let b = a;
let c = b;
c.x = 5;
console.log(a.x);                                                    // output: 5


// see how to tell number is immutable  ( string also do the same)
let x = 5;
let y = x;
y = y + 2;

console.log(x); // 5
console.log(y); // 7