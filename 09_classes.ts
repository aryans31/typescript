// ==========================================
// TOPIC 9: Classes
// ==========================================

// --- BASIC CLASS ---
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
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
  public owner: string;
  private balance: number;

  constructor(owner: string, initialBalance: number) {
    this.owner = owner;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  getBalance(): number {
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
  constructor(
    public brand: string,
    public model: string,
    private price: number
  ) {}

  getInfo(): string {
    return `${this.brand} ${this.model} - ₹${this.price}`;
  }
}

const car = new Car("Toyota", "Innova", 1500000);
console.log(car.getInfo());


// --- READONLY IN CLASS ---
class Config {
  readonly appName: string;

  constructor(name: string) {
    this.appName = name;
  }
}

const cfg = new Config("MyApp");
console.log(cfg.appName);
// cfg.appName = "Other"; // ERROR


// --- INHERITANCE ---
class Animal {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name); // must call parent constructor
  }

  speak(): void {
    console.log(`${this.name} barks!`);
  }
}

const dog = new Dog("Bruno", "Labrador");
dog.speak();           // Bruno barks!
console.log(dog.breed); // Labrador


// --- IMPLEMENTING AN INTERFACE ---
interface Printable {
  print(): void;
}

class Invoice implements Printable {
  constructor(public item: string, public amount: number) {}

  print(): void {
    console.log(`Invoice: ${this.item} - ₹${this.amount}`);
  }
}

const inv = new Invoice("Laptop", 50000);
inv.print();


// --- ABSTRACT CLASS ---
// Cannot be instantiated directly — only used as a base
abstract class Shape {
  abstract area(): number; // subclasses must implement this

  describe(): void {
    console.log(`This shape has area: ${this.area()}`);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
circle.describe(); // This shape has area: 78.53...

const rect = new Rectangle(4, 6);
rect.describe();   // This shape has area: 24
