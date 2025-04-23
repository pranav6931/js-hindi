// Immediately Invoked function expression (IIFE)

// function FunName() {
// console.log("DB connection");
// }

// FunName();

// ()()   
(function FunName() {
    console.log("DB connection");
})();                                      // ye ; bhot im hian ise close krna hi pdta hain

// using arrow function
(()=>{console.log("db connection");
})();

// parameter argument
((name)=>{console.log(`db connection ${name}`);
})('pranav')