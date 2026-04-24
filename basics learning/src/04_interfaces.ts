export {};

// ==========================================
// TOPIC 4: Interfaces
// ==========================================

// --- BASIC INTERFACE ---
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

const user1: User = { name: "Aryan", age: 22, isActive: true };
console.log(user1);


// --- OPTIONAL & READONLY IN INTERFACE ---
interface Product {
  readonly id: number;
  name: string;
  price: number;
  discount?: number;
}

const laptop: Product = { id: 1, name: "Laptop", price: 50000 };
console.log(laptop);


// --- INTERFACE FOR FUNCTIONS ---
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

console.log(add(3, 4));       // 7
console.log(multiply(3, 4));  // 12


// --- EXTENDING INTERFACES ---
// An interface can inherit from another
interface Animal {
  name: string;
  sound: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = { name: "Bruno", sound: "Woof", breed: "Labrador" };
console.log(dog);


// --- EXTENDING MULTIPLE INTERFACES ---
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

interface Duck extends Flyable, Swimmable {
  name: string;
}

const duck: Duck = {
  name: "Donald",
  fly() { console.log(`${this.name} is flying!`); },
  swim() { console.log(`${this.name} is swimming!`); },
};

duck.fly();
duck.swim();


// --- INTERFACE vs TYPE ALIAS ---
// Both are similar but interfaces can be extended/merged; types are more flexible with unions
// Rule of thumb: use interface for objects/classes, type for unions/primitives

interface Point {
  x: number;
  y: number;
}

// Declaration merging — you can add to an interface later (not possible with type alias)
interface Point {
  z: number;
}

const point: Point = { x: 1, y: 2, z: 3 };
console.log(point);
