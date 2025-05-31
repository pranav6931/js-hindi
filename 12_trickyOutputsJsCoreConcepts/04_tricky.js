
// 🔹 1. this Keyword & Context Binding
const obj = {
  name: 'Pranav',
  greet: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  }
};
obj.greet();                                // Pranav


// call
const obj1 = { a: 10 };
function print() {
  console.log(this.a);
}
print.call(obj1);  // 10


// 
console.log('start');
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('end');                                                    // start
                                                                       // end
                                                                       // promise
                                                                       // timeout


const { a, ...rest } = { a: 10, b: 20, c: 30 };
console.log(rest);                                                       // { b: 20, c: 30 }                            


// 🔹 9. JSON & Circular References
// Why does this throw an error?
const a3 = {};
a3.self = a3;
JSON.stringify(a3);  // TypeError: Converting circular structure to JSON

