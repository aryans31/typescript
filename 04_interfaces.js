"use strict";
// ==========================================
// TOPIC 4: Interfaces
// ==========================================
const user1 = { name: "Aryan", age: 22, isActive: true };
console.log(user1);
const laptop = { id: 1, name: "Laptop", price: 50000 };
console.log(laptop);
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log(add(3, 4)); // 7
console.log(multiply(3, 4)); // 12
const dog = { name: "Bruno", sound: "Woof", breed: "Labrador" };
console.log(dog);
const duck = {
    name: "Donald",
    fly() { console.log(`${this.name} is flying!`); },
    swim() { console.log(`${this.name} is swimming!`); },
};
duck.fly();
duck.swim();
const point = { x: 1, y: 2, z: 3 };
console.log(point);
