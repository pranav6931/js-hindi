// 🔹 13. Function Overriding and Declaration Order

function test() {
  console.log("First");
}
function test() {
  console.log("Second");
}
test();                                      // Second
                                             // ✅ Reason: The second function test() overrides the first due to hoisting.

// 🔹 14. Implicit Global Variables

(function () {
  a = 10;
})();
console.log(a);                                // 10 (No `let` or `var` used — becomes global!)
                                               // ✅ Good catch for scope-awareness.

// 🔹 15. Delete Operator on Variables and Properties

let x = 10;
console.log(delete x);                         // false (cannot delete declared vars)

let obj1 = { a: 5 };
console.log(delete obj1.a);                      // true (can delete properties)


// 🔹 16. Comma Operator

let a1 = (1, 2, 3);
console.log(a1);                                 // 3 (last value of comma expression)



// 🔹 17. Labelled Statements + Loops

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(i, j);
  }
}
                                                  // Output: 0 0, 0 1, 0 2, 1 0


// 🔹 18. Rest & Spread Confusion

console.log([...123]);                            // TypeError: 123 is not iterable
console.log({...'abc'});                          // {0: 'a', 1: 'b', 2: 'c'}


// 🔹 19. Constructor Return Values

function User() {
  this.name = "Pranav";
  return { name: "Overridden" };
}
const u = new User();
console.log(u.name);                               // Overridden


//
function User2() {
  this.name = "Pranav";
  return 5;
}
const u2 = new User2();
console.log(u2.name);                              // Pranav
                                                   // ✅ If constructor returns object, it overrides this. If it returns primitive, it's ignored.


// 🔹 20. Object Keys Auto-Conversion

const obj = {};
const a = { key: "a" };
const b = { key: "b" };
obj[a] = 123;
obj[b] = 456;
console.log(obj);                                    // {[object Object]: 456}
console.log(obj[a]);                                 // 456
                                                      // ✅ All keys are converted to strings: "[object Object]".

                                                     // obj["[object Object]"] = 123;
                                                      // obj["[object Object]"] = 456; // Overwrites previous one


// 🔹 21. Array Holes vs undefined

let arr = [,,];
console.log(arr.length);                                 // 2
console.log(arr[0]);                                     // undefined
console.log(0 in arr);                                   // false (hole, not actual undefined)


// 🔹 22. Getter/Setter Trap

const user = {
  get name() {
    return "Pranav";
  },
  set name(val) {
    console.log("Setter called with:", val);
  }
};
user.name = "New";                                              // Setter called with : New
console.log(user.name);                                         // Pranav



// 🔹 23. Infinite Recursion in JSON

const obj = {};
obj.self = obj;
console.log(JSON.stringify(obj));                               // TypeError: Converting circular structure to JSON



// 🔹 24. Arguments Object

function demo(x) {
  arguments[0] = 10;
  console.log(x);                                                       // 10
}
demo(5);

//
function demo2(x) {
  'use strict';
  arguments[0] = 10;
  console.log(x);                                        // 5 (no sync in strict mode)
}
demo2(5);



// 🔹 25. Symbol Behavior

const sym = Symbol("id");
const obj = { [sym]: 123 };
console.log(obj[sym]);        // 123
console.log(JSON.stringify(obj));  // {} (symbols are ignored)