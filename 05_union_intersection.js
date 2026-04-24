"use strict";
// ==========================================
// TOPIC 5: Union & Intersection Types
// ==========================================
// --- UNION TYPES ---
// A value can be one of several types (OR)
let id;
id = 101;
id = "ABC123";
console.log(id);
// Union in function parameter
function printId(id) {
    if (typeof id === "string") {
        console.log("String ID:", id.toUpperCase());
    }
    else {
        console.log("Number ID:", id);
    }
}
printId(42);
printId("abc");
function handlePet(pet) {
    if (pet.kind === "cat") {
        pet.meow();
    }
    else {
        pet.fly();
    }
}
handlePet({ kind: "cat", meow: () => console.log("Meow!") });
handlePet({ kind: "bird", fly: () => console.log("Flap flap!") });
const person = { name: "Aryan", age: 22 };
console.log(person);
const adminUser = {
    name: "Aryan",
    email: "aryan@example.com",
    role: "admin",
    permissions: ["read", "write", "delete"],
};
console.log(adminUser);
// --- UNION vs INTERSECTION ---
// Union  (|) → value matches ONE of the types  → fewer required properties
// Intersection (&) → value matches ALL types   → more required properties
