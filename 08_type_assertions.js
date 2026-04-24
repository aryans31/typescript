"use strict";
// ==========================================
// TOPIC 8: Type Assertions
// ==========================================
// --- WHAT IS TYPE ASSERTION? ---
// You tell TypeScript "trust me, I know the type of this value"
// It does NOT convert/cast the value — it only affects type checking
// --- AS SYNTAX (preferred) ---
let input = "Hello, TypeScript!";
let strLength = input.length;
console.log(strLength); // 17
// --- ANGLE BRACKET SYNTAX (not usable in JSX) ---
let value = "Aryan";
let len = value.length;
console.log(len); // 5
// --- ASSERTING TO A MORE SPECIFIC TYPE ---
// Common when working with DOM or API responses
const rawData = { name: "Aryan", age: 22 };
const user = rawData;
console.log(user.name, user.age);
// --- NON-NULL ASSERTION OPERATOR (!) ---
// Tells TypeScript: "this value is definitely not null or undefined"
function getUsername() {
    return "Aryan";
}
const username = getUsername(); // we're sure it's not null
console.log(username.toUpperCase()); // ARYAN
// --- DOUBLE ASSERTION ---
// When direct assertion fails, go through `unknown` first
// Use sparingly — it bypasses safety
const num = 42;
console.log(typeof num); // still number at runtime — assertion is compile-time only
// --- CONST ASSERTION ---
// `as const` makes values deeply readonly and infers literal types
const config = {
    host: "localhost",
    port: 3000,
};
// config.port = 8080; // ERROR: Cannot assign to 'port' because it is read-only
console.log(config);
const directions = ["Up", "Down", "Left", "Right"];
// directions.push("Forward"); // ERROR
console.log(directions);
let move = "Up";
// move = "Forward"; // ERROR
console.log(move);
