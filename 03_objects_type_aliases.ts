// ==========================================
// TOPIC 3: Objects & Type Aliases
// ==========================================

// --- OBJECT TYPE ANNOTATION ---
let user: { name: string; age: number; isActive: boolean } = {
  name: "Aryan",
  age: 22,
  isActive: true,
};
console.log(user);


// --- OPTIONAL PROPERTIES ---
// Use `?` to mark a property as optional
let product: { name: string; price: number; discount?: number } = {
  name: "Laptop",
  price: 50000,
  // discount is optional — no error without it
};
console.log(product);


// --- READONLY PROPERTIES ---
// Prevents reassigning a property after creation
let config: { readonly appName: string; version: number } = {
  appName: "MyApp",
  version: 1,
};
// config.appName = "OtherApp"; // ERROR: Cannot assign to 'appName' because it is read-only
console.log(config);


// --- TYPE ALIAS ---
// Give a name to a type so you can reuse it

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

const user1: User = { name: "Aryan", age: 22, isActive: true };
const user2: User = { name: "Ravi", age: 30, isActive: false };

console.log(user1);
console.log(user2);


// --- TYPE ALIAS WITH OPTIONAL & READONLY ---
type Product = {
  readonly id: number;
  name: string;
  price: number;
  discount?: number;
};

const laptop: Product = { id: 1, name: "Laptop", price: 50000 };
const phone: Product = { id: 2, name: "Phone", price: 20000, discount: 10 };

console.log(laptop);
console.log(phone);


// --- NESTED OBJECTS ---
type Address = {
  city: string;
  country: string;
};

type Employee = {
  name: string;
  age: number;
  address: Address; // nested type
};

const emp: Employee = {
  name: "Aryan",
  age: 22,
  address: {
    city: "Delhi",
    country: "India",
  },
};
console.log(emp);
console.log(emp.address.city); // Delhi


// --- TYPE ALIAS FOR PRIMITIVES ---
// You can also alias primitive types
type ID = number;
type Username = string;

const userId: ID = 101;
const userName: Username = "aryan_dev";
console.log(userId, userName);
