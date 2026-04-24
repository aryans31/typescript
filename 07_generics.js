"use strict";
// ==========================================
// TOPIC 7: Generics
// ==========================================
// --- THE PROBLEM WITHOUT GENERICS ---
// You'd need a separate function for each type, or use `any` (unsafe)
function getFirstAny(arr) {
    return arr[0];
}
// --- GENERIC FUNCTION ---
// <T> is a type parameter — T gets replaced with the actual type when called
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([1, 2, 3])); // 1
console.log(getFirst(["a", "b", "c"])); // a
console.log(getFirst([true, false])); // TypeScript infers T = boolean
// --- GENERIC WITH MULTIPLE TYPE PARAMS ---
function pair(first, second) {
    return [first, second];
}
console.log(pair("Aryan", 22)); // ["Aryan", 22]
console.log(pair("Delhi", true)); // inferred
const userResponse = {
    data: { name: "Aryan", age: 22 },
    status: 200,
    message: "Success",
};
console.log(userResponse);
const numberResponse = {
    data: [1, 2, 3],
    status: 200,
    message: "OK",
};
console.log(numberResponse);
const numBox = { value: 42, label: "number box" };
const strBox = { value: "hello", label: "string box" };
console.log(numBox, strBox);
// --- GENERIC CONSTRAINTS ---
// Use `extends` to restrict what T can be
function getLength(item) {
    return item.length;
}
console.log(getLength("hello")); // 5
console.log(getLength([1, 2, 3])); // 3
// console.log(getLength(42));          // ERROR: number has no .length
// --- GENERIC CLASS ---
class Stack {
    items = [];
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    get size() {
        return this.items.length;
    }
}
const numStack = new Stack();
numStack.push(1);
numStack.push(2);
numStack.push(3);
console.log(numStack.peek()); // 3
console.log(numStack.pop()); // 3
console.log(numStack.size); // 2
const strStack = new Stack();
strStack.push("a");
strStack.push("b");
console.log(strStack.pop()); // b
