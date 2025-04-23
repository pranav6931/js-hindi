// Number method

// String to Number
const num1 = "123.987";
console.log(Number(num1));                       // 123.987
console.log(parseInt(num1));                     // 123    - convert in integer
console.log(parseFloat(num1));                   // 123.987    - convert in integer

// Number to String 
const num2 = 335.768;
console.log(num2.toFixed(2));                    // "335.77"
console.log(num2.toExponential(2));              // "3.36e+2"
console.log(num2.toPrecision(4));                // "335.8"

//Check
console.log(isNaN("main"))                       // true
console.log(isNaN(50))                           // false
console.log(isFinite(10))                        // true
console.log(isFinite(Infinity))                  // false

// Math
console.log(Math.round(4.8));                    // 5
console.log(Math.floor(4.8));                    // 4
console.log(Math.ceil(4.4));                     // 5
console.log(Math.random());                      // 0.786469 ( any random value 0.,,,,)
console.log(Math.max(1,2,3));                    // 3
console.log(Math.min(1,2,3));                    // 1


// note : integer means without decimal
// Float means with decimal



