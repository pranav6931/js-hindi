
// ✅ Definition:
// this refers to the object that is executing the current function.
// Its value depends on how the function is called, not where it is written.

// 1. Global Context (Browser)
console.log(this); // 👉 refers to the window object

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
