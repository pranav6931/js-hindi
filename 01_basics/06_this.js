
// ✅ Definition:
// this refers to the object that is executing the current function.
// Its value depends on how the function is called, not where it is written.

// 1. Global Context (Browser)
console.log(this);     // 👉 refers to the window object

const user = {
    username : "pranav",
    price : 500,

    welcomMsg : function() {
        console.log(`${this.username} , welcome to this website`);
        console.log(this);
    }
}

user.welcomMsg();



// 16✅ How to Explain “this” 
// “In JavaScript, the this keyword refers to the object that is executing the current function. 
// The value of this depends on how the function is called, not where it is defined. 
// It can point to different things in different contexts:

// In a regular function, this refers to the global object (window in the browser), or undefined in strict mode.
// In an object method, this refers to the object itself.
// In a class method, this refers to the class instance, unless it's detached.
// In an arrow function, this doesn’t have its own binding — it inherits this from its lexical (parent) scope.


const user2 = {
  name: "Pranav",
  greet() {
    console.log("Hello " + this.name);
  }
};
user2.greet();                                   // Output: Hello Pranav


// ✅ 1. In a regular function
// In a regular function, this refers to the global object (window in the browser), or undefined in strict mode.
function regularFunction() {
  console.log(this);               // In browser: window; In strict mode: undefined
}

regularFunction();

// 🌐 In the Browser:
// The global object is called window.
// window object - type this above code you will see window object (ex - window.alert)

// 🖥️ In Node.js:
// The global object is called global, not window.


// ✅ 2. In an object method
// In an object method, this refers to the object itself.
const person = {
  name: "Pranav",
  greet() {
    console.log(`Hello, I am ${this.name}`);       // this → person object
  }
};

person.greet();           // Hello, I am Pranav

// ✅ 3. In a class method
// In a class method, this refers to the class instance, unless it's detached.
class User1 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const user22 = new User1("Kartik");
user.greet();                       // Hi, I'm Kartik

// Detached call
const greetFn = user22.greet;
greetFn();                        // ❌ undefined or global object depending on context

// ✅ Solution (bind):
const boundGreet = user22.greet.bind(user22);
boundGreet(); // ✅ Hi, I'm Kartik



// ✅ 4. In an arrow function
// In an arrow function, this doesn’t have its own binding — it inherits this from its lexical (parent) scope.
const obj = {
  name: "Pranav",
  greet: () => {
    console.log(this.name);     // ❌ undefined (because this = global object)
  }
};

obj.greet();

// ✅ Correct way using regular function:
const obj22 = {
  name: "Pranav",
  greet() {
    const arrow = () => {
      console.log(this.name); // ✅ Pranav (inherited from object method)
    };
    arrow();
  }
};

obj22.greet();

// 🎤 Final Interview Summary:

// | Context                   | `this` refers to                            |
// | ----------------          | ------------------------------------------- |
// | Regular Function          | Global object (or undefined in strict mode) |
// | Object Method             | The object calling the method               |
// | Class Method              | The class instance                          |
// | Arrow Function            | Inherits from surrounding lexical scope     |



// Why this keyword introduced
// 🎤 Interview Summary (One-liner):
// The this keyword was introduced to make code dynamic, reusable, and context-aware — 
// allowing functions and methods to operate based on how they’re called, not where they’re defined.

