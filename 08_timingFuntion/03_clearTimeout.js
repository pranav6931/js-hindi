const id = setTimeout(() => {
    console.log("This will not run");
}, 3000);

// Cancel the timeout before 3 seconds
clearTimeout(id);



//   ✅ What happens here?
// You asked JavaScript to wait 3 seconds, then run a console.log.
// But you used clearTimeout(id) before 3 seconds passed, so…
// ❌ That scheduled function is never executed!



// 📦 Summary:

// Function	                  Purpose
// setTimeout()	              Schedule a task to run later
// clearTimeout()	              Cancel a scheduled task (if needed)