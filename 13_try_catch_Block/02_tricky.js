
// See , any kind of error catch will take care of that
try {
  console.log(x);
} catch (e) {
  console.log("Caught:", e.message);
}



// // 🔥 1. Catch block parameter shadowing
let error = "outside";

try {
  throw "inside";
} catch (error) {
  console.log(error);                             // output: inside
}

console.log(error);                               // output: outside



// 🔥 2. return inside try and finally

function test() {
  try {
    return "try";
  } finally {
    return "finally";
  }
}

console.log(test());                                    // output: finally
                                                        // 🔸 finally overrides return from try.

// 🔥 3. Error thrown inside catch

try {
  throw new Error("oops");
} catch (e) {
  console.log("Caught:", e.message);                    // output: Caught: oops
  throw new Error("new error");
} finally {
  console.log("Finally block");                         // output: Finally block
} 
                                                        // The new error is thrown after finally is executed.

// 🔥 4. No error thrown

try {
  console.log("No error");                               // output: No error
} catch (e) {
  console.log("Caught:", e.message);
} finally {
  console.log("Finally");                                // output: Finally
}


// 🔥 5. try-catch with async/await

async function fetchData() {
  try {
    await Promise.reject("Oops!");
  } catch (e) {
    console.log("Caught:", e);                             // output: Caught: Oops!
  }
}
fetchData();



// 🔥 6. Error inside finally

try {
  throw new Error("Try error");
} catch (e) {
  console.log("Caught:", e.message);                       // output: Caught: Try error
} finally {
  throw new Error("Error in finally");
}
                                                           // 🔸 Output: Uncaught Error: Error in finally

// 🔥 7. Catch is optional (ES10+)

try {
  console.log("Just try");
} finally {
  console.log("Only finally");                               // output: Just try, Only finally
}
// 🔥 8. Re-throwing error

try {
  throw new Error("Initial");
} catch (e) {
  console.log("Handling:", e.message);                         // output: Handling: Initial
  throw e;                   // rethrowing
}
                                                               // If you rethrow, it will crash or need to be caught elsewhere.

// 🔥 9. Synchronous vs asynchronous error

try {
  setTimeout(() => {
    throw new Error("async error");
  }, 100);
} catch (e) {
  console.log("Caught:", e.message);
}
                                                      //  🔥 Output: ❌ Uncaught Error: async error