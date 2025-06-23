const addNum = (num1,num2) => {
    return num1+num2
}

console.log(addNum(5,5));


// Why Arrow introduce

// In JavaScript, using regular functions inside methods or callbacks often required workarounds to maintain the correct this context, such as:
function Timer() {
  this.seconds = 0;
  setInterval(function () {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);                   // ❌ `this` is not what you expect
}
const t = new Timer();

// With arrow functions, the problem is solved elegantly:
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;               // ✅ `this` refers to Timer instance
    console.log(this.seconds);
  }, 1000);
}
const t1 = new Timer();

