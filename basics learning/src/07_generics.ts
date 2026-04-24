export {};

// ==========================================
// TOPIC 7: Generics
// ==========================================

// --- THE PROBLEM WITHOUT GENERICS ---
// You'd need a separate function for each type, or use `any` (unsafe)
function _getFirstAny(arr: any[]): any {
  return arr[0];
}

// --- GENERIC FUNCTION ---
// <T> is a type parameter — T gets replaced with the actual type when called
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst<number>([1, 2, 3]));       // 1
console.log(getFirst<string>(["a", "b", "c"])); // a
console.log(getFirst([true, false]));            // TypeScript infers T = boolean


// --- GENERIC WITH MULTIPLE TYPE PARAMS ---
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

console.log(pair<string, number>("Aryan", 22)); // ["Aryan", 22]
console.log(pair("Delhi", true));               // inferred


// --- GENERIC INTERFACE ---
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type User = { name: string; age: number };

const userResponse: ApiResponse<User> = {
  data: { name: "Aryan", age: 22 },
  status: 200,
  message: "Success",
};
console.log(userResponse);

const numberResponse: ApiResponse<number[]> = {
  data: [1, 2, 3],
  status: 200,
  message: "OK",
};
console.log(numberResponse);


// --- GENERIC TYPE ALIAS ---
type Box<T> = {
  value: T;
  label: string;
};

const numBox: Box<number> = { value: 42, label: "number box" };
const strBox: Box<string> = { value: "hello", label: "string box" };
console.log(numBox, strBox);


// --- GENERIC CONSTRAINTS ---
// Use `extends` to restrict what T can be
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("hello"));        // 5
console.log(getLength([1, 2, 3]));      // 3
// console.log(getLength(42));          // ERROR: number has no .length


// --- GENERIC CLASS ---
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }
}

const numStack = new Stack<number>();
numStack.push(1);
numStack.push(2);
numStack.push(3);
console.log(numStack.peek()); // 3
console.log(numStack.pop());  // 3
console.log(numStack.size);   // 2

const strStack = new Stack<string>();
strStack.push("a");
strStack.push("b");
console.log(strStack.pop()); // b
