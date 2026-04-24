export {};
// ==========================================
// TOPIC 1: Types & Type Annotations
// ==========================================

// --- PRIMITIVE TYPES ---

let userName: string = "Aryan";
let age: number = 22;
let isStudent: boolean = true;

console.log(userName, age, isStudent);


// --- ANY ---
// Disables type checking — avoid using it
let randomValue: any = "hello";
randomValue = 42;       // no error
randomValue = true;     // no error
console.log(randomValue);


// --- UNKNOWN ---
// Like `any` but safer — must check type before using
let userInput: unknown = "TypeScript";

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // OK only inside the check
}


// --- VOID ---
// Used for functions that return nothing
function greet(): void {
  console.log("Hello, Aryan!");
}
greet();


// --- NEVER ---
// Used for functions that never return (throw or infinite loop)
function throwError(message: string): never {
  throw new Error(message);
}


// --- NULL & UNDEFINED ---
let nothing: null = null;
let notAssigned: undefined = undefined;
console.log(nothing, notAssigned);


// --- TYPE ANNOTATIONS ON FUNCTIONS ---
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(3, 4)); // 7


// --- TYPE INFERENCE ---
// TypeScript can figure out the type automatically
let city = "Delhi";   // inferred as string
// city = 100;        // ERROR: Type 'number' is not assignable to type 'string'
