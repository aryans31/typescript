"use strict";
// ==========================================
// TOPIC 9: Classes
// ==========================================
// --- BASIC CLASS ---
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
const p1 = new Person("Aryan", 22);
p1.greet();
// --- ACCESS MODIFIERS ---
// public    → accessible everywhere (default)
// private   → only inside the class
// protected → inside the class and subclasses
class BankAccount {
    owner;
    balance;
    constructor(owner, initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount("Aryan", 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.balance);   // ERROR: private
// --- SHORTHAND CONSTRUCTOR ---
// Declare and assign properties directly in constructor params
class Car {
    brand;
    model;
    price;
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    getInfo() {
        return `${this.brand} ${this.model} - ₹${this.price}`;
    }
}
const car = new Car("Toyota", "Innova", 1500000);
console.log(car.getInfo());
// --- READONLY IN CLASS ---
class Config {
    appName;
    constructor(name) {
        this.appName = name;
    }
}
const cfg = new Config("MyApp");
console.log(cfg.appName);
// cfg.appName = "Other"; // ERROR
// --- INHERITANCE ---
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    breed;
    constructor(name, breed) {
        super(name); // must call parent constructor
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} barks!`);
    }
}
const dog = new Dog("Bruno", "Labrador");
dog.speak(); // Bruno barks!
console.log(dog.breed); // Labrador
class Invoice {
    item;
    amount;
    constructor(item, amount) {
        this.item = item;
        this.amount = amount;
    }
    print() {
        console.log(`Invoice: ${this.item} - ₹${this.amount}`);
    }
}
const inv = new Invoice("Laptop", 50000);
inv.print();
// --- ABSTRACT CLASS ---
// Cannot be instantiated directly — only used as a base
class Shape {
    describe() {
        console.log(`This shape has area: ${this.area()}`);
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
circle.describe(); // This shape has area: 78.53...
const rect = new Rectangle(4, 6);
rect.describe(); // This shape has area: 24
