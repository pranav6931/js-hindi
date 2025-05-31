// 🔹 What is try-catch in JavaScript?

// ✅ Definition:
// try-catch is a control structure in JavaScript used to handle exceptions (errors) that occur during code execution.
// It allows you to:
// Try a block of code that might throw an error
// Catch the error if it occurs, preventing your application from crashing


// ✅ Syntax:

try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // (Optional) Code that always runs, error or not
}

// 🔸 Why is try-catch used?
// Without try-catch, JavaScript stops execution if an error occurs.
// 🧨 Example (Without try-catch):

console.log("Start");
nonExistingFunction();  // This throws an error
console.log("End");     // This won't run


// Ex :
console.log("Start");
try {
  nonExistingFunction();
} catch (error) {
  console.log("Caught error:", error.message);
}
console.log("End");                                        // Start
                                                           // ERROR!
                                                           // Caught error: nonExistingFunction is not defined
                                                           // End

// in async/ await

async function getData() {
  try {
    const res = await fetch('wrong-url');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}
getData();                                                  // Error fetching data: Failed to parse URL from wrong-url