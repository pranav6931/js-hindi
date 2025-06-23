// String methods

const str = "Hello World";

console.log(str.replace(/\s/g, ""));                               // HelloWorld -  to remove space 
console.log(str.replace(/\s/g, "").toLowerCase().toUpperCase());   // HELLOWORLD -  see we can chaining the mmethods also 

console.log(str.length);                                           // 11
console.log(str.indexOf("W"));                                     // 6
console.log(str.substring(1,7));                                   // ello W
console.log(str.slice(1,7));                                       // ello W - same but we can access -ve index too // substr() removed form JS

console.log(str.split(" "));                                       // [ 'Hello', 'World' ]  - it split from given input and 
                                                                   // put it in a array
console.log(str.split(""));                                        // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']                            

console.log(str.includes("W"));                                    // true - same methods we can use in array


const str1  = "    Hello     ";
console.log(str1.trim());                                          // Hello

console.log(str.concat(str1));                                     // to concat string 

/////////////////////////////////////////////

// substring vs slice

let str11 = "JavaScript";

console.log(str11.slice(0, 4));       // "Java"
console.log(str11.substring(0, 4));   // "Java"


console.log(str11.slice(-6));         // "Script"
console.log(str.slice(-5,-2));        // cri

console.log(str11.substring(-6));     // "JavaScript" (because -6 becomes 0)


console.log(str.slice(5, 2));       // "" (empty string)
console.log(str.substring(5, 2));   // "vaS" (automatically swaps 2 and 5)