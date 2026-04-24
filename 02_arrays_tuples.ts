// ==========================================
// TOPIC 2: Arrays & Tuples
// ==========================================

// --- ARRAYS ---

// Two ways to declare an array:
let fruits: string[] = ["apple", "banana", "mango"];
let numbers: Array<number> = [1, 2, 3, 4, 5];

console.log(fruits);
console.log(numbers);

// Accessing elements
console.log(fruits[0]); // apple

// Array methods work as expected
fruits.push("orange");
console.log(fruits);

// fruits.push(42); // ERROR: number is not assignable to string


// --- ARRAY OF MIXED TYPES (using union) ---
let mixed: (string | number)[] = ["Aryan", 22, "Delhi", 100];
console.log(mixed);


// --- TUPLES ---
// A fixed-length array where each position has a specific type

let person: [string, number] = ["Aryan", 22];
console.log(person);
console.log(person[0]); // Aryan
console.log(person[1]); // 22

// person = [22, "Aryan"]; // ERROR: types are in wrong order


// --- TUPLE WITH LABELS (named tuples) ---
let employee: [name: string, age: number, isActive: boolean] = ["Ravi", 30, true];
console.log(employee);


// --- READONLY ARRAY ---
// Prevents modification of the array
const readonlyNums: readonly number[] = [10, 20, 30];
console.log(readonlyNums);
// readonlyNums.push(40); // ERROR: Property 'push' does not exist on type 'readonly number[]'


// --- TUPLE USE CASE: function returning multiple values ---
function getUser(): [string, number] {
  return ["Aryan", 22];
}

const [userName, userAge] = getUser(); // destructuring
console.log(`Name: ${userName}, Age: ${userAge}`);
