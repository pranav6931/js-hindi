//1) Dynamic ststic weakly strongly
//2) Data Type with stack and heap memory 
//3) String Interpolation  
//4) How to declare String 
//5) type conversion
//6) Symbol data type

// Dynamic ststic weakly strongly
  // Dynamic Typed : Javascript ==> we can define number variable to string at runtime.
  // Static typed : Typescript ==> we can not define number variable to string at run time ( it will through error).

  // Weakly Typed : Javascript ==> we can add number and string variable 
  // Strongly Typed : typescript ==> we can not add number and string bcz diff data type 

//------------------------------------------------------------------------------------------------------------------  

// Data Type -data ko kis tarike se memory me store kiya jata hain aur kis type se access kiya jata hain
//  us base pe iske 2 type decide kiye gye hain..

//  1) Primitive and 2) non-Primitive (referance type)

// 1) Primitive Datatype
    //   - String, Boolean, number, null, undefined, symbol, BigInt

    // Primitive DataType me Stack memory use hoti hian

    // Stack memory
      // Stack memory ek ke upper ek rakhi jati hain aur orignal value ki copy provide ki jati hain,
      // na ki use memory se replace kiya jata hain

      let myStack = "85gb";
      let myStcak1 = myStack;
      myStack1 = "1000gb";
      
      console.log(`myStack value is : ${myStack}`);   // 85gb
      console.log(`myStack1 value is : ${myStack1}`);  // 1000gb    that means in heap memorymake a copy of orignal value and do changes 

// 2) Non-Primitive
    //   - Array, Object, function   ( in sbka return type Object hi ata hain)

    // Non-Primitive DataType me Heap memory use hoti hian

    //Heap Momory 
      // Heap momory ek container ke under hoti hain isme orignal value ko hi change or modified kiya jata hain
      // aur purani value ko store nhi kiya jata.

      let myObj = {
        birthPlace : "pattan",
        birthTime : "7:30am"
      }

      let myObj1 = myObj;
      myObj1.birthPlace = "multai";
      console.log(`myObj birthPlace value is : ${myObj.birthPlace}`);   // multai
      console.log(`myObj1 birthPlace value is : ${myObj1.birthPlace}`); // multai  so both value is same because it updates the orignal value 
    
    
// typeOf operators results :
   // https://262.ecma-international.org/5.1/#sec-11.4.3    


// String Interpolation   

let userName = "ram";
let userScore = 60;

console.log(`my name is ${userName} and score is ${userScore}`);

// yaad rhe variable ko ${} ke under hi rkhna hain with outside back ticks

// #################################################################################################

// How to declare String 

let myName = "pranav";                   // 1st syntax to declare
let myAltName = new String('Tiku');   // 2ns syntax to declare   // paste this to browser console and
                                                      
console.log(typeof(myName));        // string
console.log(typeof(myAltName));     // object

console.log(myName);        // pranav
console.log(myAltName);     // [String: 'Harshal']

console.log(myName.length);        // 6
console.log(myAltName.length);     // 7


// type conversion

let x = "33";   // replace value with "33a" and check y value 
let y = x;
y = Number(x);

console.log(`typeof of y is : ${typeof(y)} and it's value is : ${y}`);

// Using Number() we can convert strign to number 
// "33" ==> 33
// "33a" ==> NaN
// true ==> 1
// false ==> 0

// Using Boolean()
// 1 ==> true 
// 0 ==> false

// using String()
// 33 ==> 33 - string


// 6) Symbol data type 
   // Symbol is use for making any unique variables 

const id1 = Symbol('123');   // both value is same 
const id2 = Symbol('123');   // both value is same but if we check it 

console.log(`is both vlaue is same : ${id1 == id2}`);   //false 