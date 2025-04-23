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

