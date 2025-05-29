
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