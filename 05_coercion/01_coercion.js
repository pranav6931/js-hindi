// concat
console.log("5" - true);            // 4
console.log("5" + true);            // 5true
console.log("5" + 1);               // 51
console.log("5" - 1);               // 4

console.log(20+"20"+"20");          // 202020
console.log(20+ +"20"+"20");        // 4020
console.log("20"+20+20);            // 202020
console.log("20"+20+"20");          // 202020
console.log(20+20+"20");            // 4020

console.log([1,2] + [3,4])          // "1,23,4"
console.log('2' > '12');            // true
console.log(true + true + false);   // 2

console.log([] + []);               // "" (empty string)
console.log({} + []);               // [object Object]

// compare
console.log(false == 0);            // true
console.log(false === 0);           // false
console.log(false == '0');          // true

// null
console.log(typeof null);           // object
console.log(null == undefined);     // true
console.log(null === undefined);    // false

console.log(null == 0);             // false

console.log(null);                  // null 
console.log(!null);                 // true 
console.log(!!null);                // false
console.log(null + 1);              // 1     // null coerced to 0
console.log(null + 'pranav');       // 'nullpranav' 


// undefined
console.log(typeof undefined);      // undefined
console.log(1 + undefined);         // NaN
console.log('pranav' + undefined);  // 'pranavundefined'


// NaN
console.log(typeof NaN);            // number
console.log(isNaN(NaN));            // true
console.log(isNaN(123));            // false
console.log(isNaN("hello"));        // true (because "hello" becomes NaN)
console.log(isNaN("123"));          // false (coerced to number 123)
console.log(isNaN(true));           // false (true becomes 1)
console.log(isNaN(undefined));      // true (becomes NaN)
console.log("abc" - 5);             // NaN
console.log(5 - "abc");             // NaN
console.log(NaN === NaN);           // false
console.log(NaN == NaN);            // false


console.log(typeof ("abc" - 5));     // number   ( because NaN type is number )
console.log(1<2<3)                  // true
console.log(3>2>1)                  // false