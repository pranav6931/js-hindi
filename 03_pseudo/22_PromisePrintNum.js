// Write a function that simulates an asynchronous counter. The function should:
// 1.	Start counting from 1 to n.
// 2.	Print each number after a delay of i * 1000ms (where i is the current number).
// 3.	Return a Promise that resolves when counting is complete.

function asyncCounter(n) {
    return new Promise((resolve) => {
      for (let i = 1; i <= n; i++) {
        setTimeout(() => {
          console.log(i);
          if (i === n) {
            resolve("Counting complete ✅");
          }
        }, i * 1000);
      }
    });
  }
  
  // Example usage:
  asyncCounter(5).then(msg => console.log(msg));