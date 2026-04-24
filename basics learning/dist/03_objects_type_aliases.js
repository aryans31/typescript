"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==========================================
// TOPIC 3: Objects & Type Aliases
// ==========================================
// --- OBJECT TYPE ANNOTATION ---
let user = {
    name: "Aryan",
    age: 22,
    isActive: true,
};
console.log(user);
// --- OPTIONAL PROPERTIES ---
// Use `?` to mark a property as optional
let product = {
    name: "Laptop",
    price: 50000,
    // discount is optional — no error without it
};
console.log(product);
// --- READONLY PROPERTIES ---
// Prevents reassigning a property after creation
let config = {
    appName: "MyApp",
    version: 1,
};
// config.appName = "OtherApp"; // ERROR: Cannot assign to 'appName' because it is read-only
console.log(config);
const user1 = { name: "Aryan", age: 22, isActive: true };
const user2 = { name: "Ravi", age: 30, isActive: false };
console.log(user1);
console.log(user2);
const laptop = { id: 1, name: "Laptop", price: 50000 };
const phone = { id: 2, name: "Phone", price: 20000, discount: 10 };
console.log(laptop);
console.log(phone);
const emp = {
    name: "Aryan",
    age: 22,
    address: {
        city: "Delhi",
        country: "India",
    },
};
console.log(emp);
console.log(emp.address.city); // Delhi
const userId = 101;
const userName = "aryan_dev";
console.log(userId, userName);
//# sourceMappingURL=03_objects_type_aliases.js.map