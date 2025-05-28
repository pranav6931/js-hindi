
// callback

// A callback is a function passed as an argument to another function and is executed after the completion of that function.

// Callbacks are commonly used to handle asynchronous operations (like API calls, file reading, etc.) or 
// simply to customize the behavior of a function.

// 
function teacher(name,callback){
    console.log(`teacher name : ${name}`);
    callback()
}

function student(){
    console.log('student')
}

teacher('pranav', student);

// pass parameter to callback
function teacher1(name,callback){
    console.log(`teacher name : ${name}`);
    callback('main hu don')
}

function student1(msg){
    console.log(`student said : ${msg}`)
}

teacher1('pranav', student1);