// Null

// 💬 Why does null exist?
// JavaScript needed a way to represent "no value" or "nothing here" intentionally — and that’s where null comes in.
// Unlike undefined, which usually means "was never set," null says:
// “I intentionally set this to nothing. It’s empty, and I know it.”

// ✅ When to Use null
// 1. Initialize a variable to an empty state

let user = null; // No user yet, but we’ll assign later

// 2. Reset a value
formData.name = null; // Clear input field

// 3. When returning ‘no result’ from a function
function findUser(id) {
  return users[id] || null; // Return null if not found
}

// 4. When working with databases / APIs
// Many APIs return null to indicate no data found or no match.

{
  "name": null,
  "email": "test@example.com"
}


// 🎯 Why Is It Important?
// ✅ It's explicit. You're in control and making a conscious decision.
// ✅ Helps you avoid bugs caused by undefined.
// ✅ Makes your code more readable and intentional.

// 🔁 undefined vs null Real Example
let response = undefined; // Never received data
let response = null;      // Received data, but it's empty (e.g., user not found)


✅ Using null Intentionally:
js
Copy
Edit
let currentUser = null; // No one is logged in yet

// After login
currentUser = {
  name: "Pranav",
  role: "Admin"
};

// After logout
currentUser = null;
Here, null clearly tells us: “There is no user at the moment.”

