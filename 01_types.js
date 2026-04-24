"use strict";
// ==========================================
// TOPIC 1: Types & Type Annotations
// ==========================================
// --- PRIMITIVE TYPES ---
let userName = "Aryan";
let age = 22;
let isStudent = true;
console.log(userName, age, isStudent);
// --- ANY ---
// Disables type checking — avoid using it
let randomValue = "hello";
randomValue = 42; // no error
randomValue = true; // no error
console.log(randomValue);
// --- UNKNOWN ---
// Like `any` but safer — must check type before using
let userInput = "TypeScript";
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase()); // OK only inside the check
}
// --- VOID ---
// Used for functions that return nothing
function greet() {
    console.log("Hello, Aryan!");
}
greet();
// --- NEVER ---
// Used for functions that never return (throw or infinite loop)
function throwError(message) {
    throw new Error(message);
}
// --- NULL & UNDEFINED ---
let nothing = null;
let notAssigned = undefined;
console.log(nothing, notAssigned);
// --- TYPE ANNOTATIONS ON FUNCTIONS ---
function add(a, b) {
    return a + b;
}
console.log(add(3, 4)); // 7
// --- TYPE INFERENCE ---
// TypeScript can figure out the type automatically
let city = "Delhi"; // inferred as string
// city = 100;        // ERROR: Type 'number' is not assignable to type 'string'
