
// Callback Hell

// Callback Hell refers to the situation where multiple nested callbacks are used, making the code difficult to read, 
// understand, and maintain. It often occurs when dealing with asynchronous operations in sequence, like fetching data, 
// reading files, or calling APIs.

// It’s also called the "Pyramid of Doom" due to the structure of the code.

function step1Callback(result1) {
  doStep2(result1, step2Callback);
}

function step2Callback(result2) {
  doStep3(result2, step3Callback);
}

function step3Callback(result3) {
  console.log('Final result:', result3);
}

doStep1(step1Callback);