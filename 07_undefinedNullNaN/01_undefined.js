// undefined
//	A variable has been declared but not assigned a value
// undefined (primitive)

let a;
console.log(a); // 👉 undefined

function greet() {}
console.log(greet()); // 👉 undefined (no return)



// Feature               | undefined                                                 | null
// Meaning               | A variable has been declared but not assigned a value     | A variable has been explicitly assigned "no value"
// Type                  | undefined (primitive)                                     | object (yes, weirdly!)
// Set by                | JavaScript itself                                         | Developer (you)
// Use case              | Unintentional absence of value                            | Intentional absence of value
// Default value of      | Uninitialized variables, missing function returns         | Manually set to represent "empty"