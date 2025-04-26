// 1. Object (In TypeScript)
// An object is a real-world entity that has properties (data) and behaviors (functions/methods).
// In TypeScript, an object is created from a class, or it can be a simple key-value pair structure.

// Think of a "Car" — it has properties like color, brand, and behaviors like start(), stop().
// 0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟*️⃣💥

// 1️⃣: Object Literal
let car = {
    brand: "Toyota",                                  // string
    age: 20,                                          // number
    myArr: [10, 20, 30, 40],
    myFun1: function () {                              // regular function
        console.log("regular fun executed");
    },
    myFun2: () => {
        console.log("Arrow fun executed");
    },
    myFun3() {
        console.log("direct fun executed without key :");
    }
};

console.log(car.brand);                       // Output: Toyota
console.log(car.age);                         // Output: 20
console.log(car.myArr);                       // Output: [10,20,30,40]
car.myFun1();                                 // Output: regular fun executed
car.myFun2();                                 // Output: Arrow fun executed
car.myFun3();                                 // Output: direct fun executed without key :


// 2️⃣ Object created from a Class

class Car {
    //  brand: string;
    //  color: string;

    // constructor(brand: string, color: string) {
    //   this.brand = brand;
    //   this.color = color;
    // }

    start() {
        console.log(`${this.brand} car is starting...`);
    }
}

// Creating an object (instance) of Car
let myCar = new Car("Honda", "Blue");

console.log(myCar.color); // Output: Blue
myCar.start();            // Output: Honda car is starting...


// 3️⃣ Using Interface (Structure Only, No Implementation)
//   interface Animal {
//     name: string;
//     sound: string;
//   }

//   const dog: Animal = {
//     name: "Dog",
//     sound: "Bark"
//   };

// 4️⃣ Using Object.create() (Prototype-based)
const prototype = {
    greet() {
        console.log("Hello!");
    }
};
const obj = Object.create(prototype);
obj.greet(); // Output: Hello!


// 5️⃣ Using Type Alias (Similar to Interface)
// type Car = {
//     brand: string;
//     model: string;
//   };
  
//   const car: Car = {
//     brand: "Tesla",
//     model: "Model 3"
//   };

// 6️⃣ Using a Function (Factory Function Pattern)

// function createUser(name: string, age: number) {
//   return {
//     name,
//     age
//   };
// }

// const user = createUser("Bob", 40);

// 7️⃣ Object.assign()
// Merge two objects into one
const obj1 = { name: "John" };
const obj2 = { age: 30 };

const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);
// Output: { name: 'John', age: 30 }

// Clone (Copy) an object
const user = { name: "Alice", age: 25 };

const clonedUser = Object.assign({}, user);
console.log(clonedUser);
// Output: { name: 'Alice', age: 25 }

// Update an existing object
const car = { brand: "Toyota" };
Object.assign(car, { color: "Red" });

console.log(car);
// Output: { brand: 'Toyota', color: 'Red' }