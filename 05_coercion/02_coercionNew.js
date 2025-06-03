// Type Coercion
console.log('Type Coercion')
console.log('5' - true)                  // 4
console.log(true - '5')                  // -4
console.log('5' + true)                  // 5true
console.log('5' + 1)                     // 51
console.log('5' - 1)                     // 4
console.log(true +5)                     // 6
console.log(true - 5)                    // -4
console.log(5 + true)                    // 6
console.log('5' * '2')                   // 10
console.log(5 * '2')                     // 10
console.log('10'/'2')                    // 5
console.log('10'%'4')                    // 2
console.log('abc' + 5)                   // abc5
console.log(5 + 'abc')                   // 5abc
console.log('abc' - 5)                   // NaN
console.log(5 - 'abc')                   // NaN

console.log(1 + "2" + 3);                // "123"
console.log(1 + +"2" + 3);               // 6
console.log(1 + +"2" + "3");               // 33
console.log("10" - - "10");              // 20
console.log("10" - - 10);               // 20
console.log(10 - - '10');               // 20
//
console.log(12+ 12)                      // 24
console.log(12+ "12")                    //1212
console.log(12+ +"12")                    //24

console.log(12- 12)                    //0
console.log(12- "12")                    //0
console.log(12- -"12")                    //24

console.log(12+ -12)                    //0
console.log(12+ -"12")                    //0

console.log(12- +12)                    //0
console.log(12- +"12")                    //0
console.log('')

// Infinity and Edge Numbers
console.log(' Infinity and Edge Numbers')
console.log(1 / 0);                      // Infinity
console.log(-1 / 0);                     // -Infinity
console.log(Infinity + 1);               // Infinity
console.log(Infinity - Infinity);        // NaN
console.log(typeof Infinity);            // "number"

// null & undefined Behavior
console.log('null & undefined Behavior')
console.log(null + 1);                   // 1
console.log(null + 'abc');               // "nullabc"
console.log(undefined + 1);              // NaN
console.log('abc' + undefined);          // "abcundefined"

console.log(null + undefined);           // NaN
console.log(null * 5);                   // 0
console.log(undefined * 5);              // NaN

// Array and object behaviour
console.log('Array and object behaviour')
console.log( [] )                        // []
console.log( [] + [] )                   // ""
console.log( [] - [] )                   // 0
console.log([] + 1);                     // "1"

console.log( {} )                        // {}
console.log( {} + {} )                   // [object Object] [object Object]
console.log( {} - {} )                   // NaN
console.log({} + 1);                     // "[object Object]1"

console.log( [] + {} )                   // [object Object]
console.log( [] - {} )                   // NaN
console.log( {} + [] )                   // [object Object]
console.log( {} - [] )                   // NaN

console.log( [1,2] + [3,4] )             // [1,23,4]
console.log( [1,2] - [3,4] )             // NaN
console.log( [1] + 1 );                  // "11"
console.log([1,2] + 3);                  // "1,23"

console.log({x:1, y:4} + {y:1, z:4} )    // [object Object] [object Object]
console.log({x:1, y:4} - {y:1, z:4} )    // NaN

// 🧠 Summary:
// "object" = lowercase → refers to the internal type
// "Object" = uppercase → refers to the constructor function name

console.log(true + true)                  // 2
console.log(true - true)                  // 0
console.log(false + false)                // 0
console.log(false - false)                // 0
console.log(true + false)                 // 1
console.log(true - false)                 // 1
console.log(false + true)                 // 1
console.log(false - true)                 // -1
console.log('')

// == vs ===
console.log('compare == vs ===')
console.log('2' > '12');                   // true (string comparison)
console.log('')

console.log(false == true)                 // false
console.log(false === true)                // false
console.log(false == '0')                  // true
console.log(false == 0)                    // true
console.log(false == '')                    // true
console.log('')

console.log(null == null)                  // true
console.log(null === null)                 // true
console.log(null == 0)                     // false
console.log(null == false);                // false
console.log('')

console.log(undefined == undefined);       // true
console.log(undefined === undefined);      // true
console.log(undefined == 0)                // false
console.log(undefined == false);           // false
console.log('')

console.log(null == undefined)             // true
console.log(null === undefined)            // false
console.log('')

console.log(NaN == NaN);                   // false
console.log(NaN === NaN);                  // false
console.log('')

console.log([] == []);                     // false
console.log( [1,2] == [1,2] )              // false
console.log([] == ![]);                    // true
console.log([] == 0);                      // true
console.log([] == false);                  // true
console.log(![] == false);                  // true
console.log('')

console.log({} == {});                     // false
console.log({} == !{});                    // false
console.log({} == 0);                      // false
console.log({} == false);                  // false
console.log('')               

console.log("" == 0);             // true
console.log("" === 0);            // false

// ==================================== equal coercion ==============================

var a = 12;
var b = "12";
a == b // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.

var a = 226;
var b = "226";

a === b // Returns false because coercion does not take place and the  operands are of different types. Hence they are not equal.
// ==================================================================


// Boolean
console.log('###### Boolean')
console.log( null )                    // null
console.log( !null )                   // true
console.log( !!null )                  // false
console.log( undefined )               // undefined
console.log( !undefined )              // true
console.log( !!undefined )             // false
console.log( NaN )                     // NaN
console.log( !NaN )                    // true
console.log( !!NaN )                   // false
console.log('')       
console.log( 0 )                       // 0
console.log( !0 )                      // true
console.log( !!0 )                     // false
console.log( " " )                     // " "
console.log( !" " )                    // false
console.log( !!" " )                   // true
console.log( "text" )                  // text
console.log( !"text" )                 // false
console.log( !!"text" )                // true


// typeof Operator
console.log('###### typeof Operator')
console.log(typeof null);                      // "object"
console.log(typeof undefined);                 // "undefined"
console.log(typeof NaN);                       // "number"
console.log(typeof []);                        // "object"
console.log(typeof {});                        // "object"
console.log('')     

console.log(typeof (() => {}));                // "function"
console.log(typeof function(){});              // "function" (only special typeof)

console.log(typeof "hello");                   // "string"
console.log(typeof 123);                       // "number"
console.log(typeof true);                      // "boolean"
console.log(typeof ("abc" - 5));               // "number" (NaN is number)

console.log(typeof Infinity);                  // "number"
console.log(typeof typeof 1)                   // string


// NaN Handling
console.log('')   
console.log('######  NaN Handling')
console.log(isNaN(NaN));                 // true
console.log(isNaN("hello"));             // true
console.log(isNaN("123"));               // false
console.log(isNaN(true));                // false
console.log(isNaN(undefined));           // true
console.log(isNaN([]));                  // false      //  ye 0 me convert ho jata 
console.log(isNaN({}));                  // true       // ye NaN me 

console.log(Number("hello"));            // NaN
console.log(Number(true));               // 1
console.log(Number(false));              // 0

// Unary Operators & Parsing
console.log('')   
console.log('######  Unary Operators & Parsing')
console.log(+"");                 // 0
console.log(+"123");              // 123
console.log(+"123");              // 123
console.log(+true);               // 1
console.log(+false);              // 0
console.log(!!"false");           // true
console.log(+null);               // 0
console.log(+undefined);          // NaN
console.log(+{});                 // NaN
console.log(+[]);                 // 0
console.log(!!"0");               // true



// Falsy and Truthy Values
console.log('Falsy and Truthy Values')   
console.log('')   
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false
console.log(Boolean(false));      // false

console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
console.log(Boolean("0"));        // true
console.log(Boolean('123'));      // true
console.log(Boolean("false"));    // true


// parseInt vs Number
console.log('parseInt vs Number')
console.log(parseInt("42px"));    // 42
console.log(Number("42px"));      // NaN
console.log(parseInt("08"));      // 8 
console.log(parseInt("0x10"));    // 16            "0x" prefix tells JavaScript the number is in hex. Hexadecimal digits go from 0 to 9 and then a to f
console.log(Number("0x10"));      // 16            "10" in hex means 1 × 16 + 0 = 16 in decimal.
console.log('')


// Logical Operators (return values, not just booleans)
console.log("hello" && 123);            // 123
console.log(null || "fallback");        // "fallback"
console.log(undefined && "test");       // undefined

//
console.log(1<2<3)                      // true
console.log(3>2>1)                      // false


// 
// =================================== Boolean coersion
var x = 220;
var y = "Hello";
var z = undefined;
        
console.log(x || y )   // Returns 220 since the first value is truthy          ### 🔹 OR operator (`||`) — returns the **first truthy** value it finds:
console.log(x || z)   // Returns 220 since the first value is truthy

console.log(x && y)    // Returns "Hello" since both the values are truthy    🔹 AND operator (&&) — returns the first falsy value, or the last value if all are truthy:
console.log(y && z)   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}
// ================================================================



// remember
// 1) null ka compair hote samay use 0 consider kiya jata hain  # in case of number only
// | Operation Type              | Coercion Rule                                                     | Example         | Result  |
// | --------------------------- | ----------------------------------------------------------------- | --------------- | ------- |
// | Arithmetic (`+`, `-`, etc.) | `null` becomes `0`                                                | `null + 1`      | `1`     |
// | Equality (`==`)             | 🟠`null == undefined` is `true` <br> but not equal to anything else | `null == 0`     | `false` |
// | Strict Equality (`===`)     | No coercion; type and value must match                            | `null === null` | `true`  |
// | Boolean context             | `null` is falsy                                                   | `if (null)`     | false   |

// 2)undefine ko compair krte samay wo smjo kuch bhi nahi ke sath deal kr rhe ho , use number ke sath use kroge to NaN aayega, 
// use aur ksisi ke sath use kroge to wo conact ho jayea lekin kisi value me convart nhi hoga bcz it is nothing
// | **Context**             | **Behavior / Rule**                      | **Example**               | **Result**    |
// | ----------------------- | ---------------------------------------- | ------------------------- | ------------- |
// | Arithmetic operations   | `undefined` becomes `NaN` (Not a Number) | `undefined + 1`           | `NaN`         |
// | Equality (`==`)         | `undefined == null` is `true`            | `undefined == null`       | `true`        |
// | Strict Equality (`===`) | Only equals itself                       | `undefined === undefined` | `true`        |
// | Boolean context         | `undefined` is **falsy**                 | `if (undefined)`          | false         |
// | typeof                  | Returns the string `'undefined'`         | `typeof undefined`        | `"undefined"` |


// 3) + and -
// | Operator        | Behavior                                   | Example    | Result |
// | --------------- | ------------------------------------------ | ---------- | ------ |
// | `+`             | String concat if any operand is string     | `"5" + 1`  | `"51"` |
// | `+`             | Otherwise, converts to numbers             | `true + 1` | `2`    |
// | `-` `*` `/` `%` | Always convert operands to numbers         | `"5" - 1`  | `4`    |


// 4) empty string has no characters, JavaScript treats it as nothing = 0.

// 5) [] is a truthy value.
// ![] becomes false
// [] == false  // Now it becomes this.

// 6) {} is truthy, so !{} becomes false.
// {} == false

// 7) empthy string are false
// space in string that is true

// 8) The + operator, when used with non-numeric operands, performs string concatenation.
// An empty array [] is coerced to an empty string "" when used in a string context.

// The - operator performs numeric subtraction.
// Both arrays [] are coerced to numbers:
// Number([]) results in 0.