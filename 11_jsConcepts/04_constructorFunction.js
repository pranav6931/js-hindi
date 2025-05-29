function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new Person("Pranav", 27);          // This is what happens under the hood:
                                                 // A new empty object is created: {}
                                                 // this is set to refer to that new object
                                                 // The properties name and age are added to this
console.log(user1);     // 👉 { name: "Pranav", age: 27 }