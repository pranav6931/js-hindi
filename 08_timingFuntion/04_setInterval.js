//🧠 What is setInterval()?
// It's built-in JavaScript function that lets you run a block of code repeatedly at fixed time intervals (in milliseconds).


//✅ Syntax:
// const intervalId = setInterval(callbackFunction, delay);

// way 1
// setInterval(myFun, 2000);                     // har 2 sec me ye call hote rhega 
// function myFun(){
//     console.log("main hu don");
// }


// way 2 : assign it in a variable so that we can clear it alsp ( rokne ke liye )
// const intervalId = setInterval(() => {
//     console.log("This prints every 2 seconds");
//   }, 2000);



//   🔁 Real-life use cases:
// Auto-refreshing data (like weather or stock prices).
// Countdown timers.
// Animations or game loops.
// Showing temporary notifications.


let count = 0;
const intervalId1 = setInterval(() => {
  count++;
  console.log("Count:", count);

  if (count === 5) {
    clearInterval(intervalId);                        // Stop after 5 times
  }
}, 1000);
