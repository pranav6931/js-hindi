// setTimeout() 
// Built-in JavaScript function that allows you to delay the execution of a function.

// Syntax
// setTimeout(callback, delayInMilliseconds, arg1, arg2, ...)

// 1st way : outside funtion 
setTimeout(myFun,3000);
function myFun(){
    console.log("main hu don 1");
}

// 2nd way : inside arrow function
setTimeout(() =>{
    console.log("main hu don 2");
},2000)

// 3nd way : with argument
setTimeout(myFun1,4000,"pranav");
function myFun1(name){
    console.log(`my name is : ${name}`)
}


// ✅ Think of it like:
// You’re setting a reminder (via setTimeout), but then canceling it (via clearTimeout) before it rings.

// clearTimeout
const id = setTimeout(() => console.log("Will not run"), 3000);
clearTimeout(id); // Cancels the timeout


