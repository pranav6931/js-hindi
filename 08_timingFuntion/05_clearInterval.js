// ❓ What is clearInterval()?
// clearInterval() is a built-in JavaScript function used to stop a function from running repeatedly that was started using setInterval().

const intervalId = setInterval(() => {
    console.log("Repeating...");
  }, 1000);
  
  // Stop after 5 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped interval.");
  }, 5000);