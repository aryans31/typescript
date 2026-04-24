export {};

// ==========================================
// TOPIC 5: Union & Intersection Types
// ==========================================

// --- UNION TYPES ---
// A value can be one of several types (OR)
let id: string | number;
id = 101;
id = "ABC123";
console.log(id);

// Union in function parameter
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log("String ID:", id.toUpperCase());
  } else {
    console.log("Number ID:", id);
  }
}
printId(42);
printId("abc");


// --- UNION WITH OBJECTS ---
type Cat = { kind: "cat"; meow: () => void };
type Bird = { kind: "bird"; fly: () => void };

type Pet = Cat | Bird;

function handlePet(pet: Pet): void {
  if (pet.kind === "cat") {
    pet.meow();
  } else {
    pet.fly();
  }
}

handlePet({ kind: "cat", meow: () => console.log("Meow!") });
handlePet({ kind: "bird", fly: () => console.log("Flap flap!") });


// --- INTERSECTION TYPES ---
// Combines multiple types into one (AND) — must have ALL properties
type HasName = { name: string };
type HasAge = { age: number };

type Person = HasName & HasAge;

const person: Person = { name: "Aryan", age: 22 };
console.log(person);


// --- PRACTICAL INTERSECTION ---
type Admin = {
  role: "admin";
  permissions: string[];
};

type BaseUser = {
  name: string;
  email: string;
};

type AdminUser = BaseUser & Admin;

const adminUser: AdminUser = {
  name: "Aryan",
  email: "aryan@example.com",
  role: "admin",
  permissions: ["read", "write", "delete"],
};
console.log(adminUser);


// --- UNION vs INTERSECTION ---
// Union  (|) → value matches ONE of the types  → fewer required properties
// Intersection (&) → value matches ALL types   → more required properties
