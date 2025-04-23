// Higher Order Fuinction 
// is a function that takes - 1) another function as argument
//                          - 2)  return a function as result


// 1) another function as argument
function greet(name) {
    return `Hello ${name}`;
}

function higherOrderFunction1(callback) {
    // ab jab function ko argumrnt ke taur pe liya hi hain to use bhi krna pdega n, to hum use return kr dete hain ok 
    // ya to kis variable me assign krke retun kro ya direct
    // const result = callback('pranav');
    // return result;
    return callback('pranav')      // callback function is called here

}
console.log(higherOrderFunction1(greet));

// 1.0 - scenario
function greet10(name) {
    return `Hello ${name}`;
}
function higherOrderFunction10(str, callback) {
    const greetValue = callback('sukti');              // callback function is called here
    return str + greetValue;
}
console.log(higherOrderFunction10('Oh my friend ', greet10));



// 2)  return a function as result

function higherOrderFunction2() {
    return function (name) {
        return `Hello ${name}`;
    }
}
console.log(higherOrderFunction2()('pranali'));

// 2.0 - scenario

function higherOrderFunction20(num) {
    return function (name) {
        return `Hello ${name} : give me ${num} rupees`;
    }
}
console.log(higherOrderFunction20(20)('ram'));



// 🔗 Relationship:
// A callback is a function used as an argument.
// A higher-order function is the one that uses the callback (or returns a function).

// So, a higher-order function uses a callback, but they are not the same.