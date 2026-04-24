export {};

// ==========================================
// TOPIC 6: Enums
// ==========================================

// --- NUMERIC ENUM (default) ---
// Values auto-increment from 0
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

console.log(Direction.Up);    // 0
console.log(Direction.Right); // 3

let move: Direction = Direction.Left;
console.log(move); // 2


// --- NUMERIC ENUM WITH CUSTOM START ---
enum StatusCode {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(StatusCode.OK);          // 200
console.log(StatusCode.NotFound);    // 404
console.log(StatusCode.ServerError); // 500


// --- STRING ENUM ---
// More readable and debuggable than numeric
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

console.log(Role.Admin); // ADMIN
console.log(Role.User);  // USER

function getAccess(role: Role): void {
  if (role === Role.Admin) {
    console.log("Full access");
  } else if (role === Role.User) {
    console.log("Limited access");
  } else {
    console.log("Read-only access");
  }
}

getAccess(Role.Admin);
getAccess(Role.Guest);


// --- CONST ENUM ---
// Inlined at compile time — no JavaScript object generated (more efficient)
const enum Planet {
  Mercury = 1,
  Venus,
  Earth,
  Mars,
}

console.log(Planet.Earth); // 3


// --- ENUM USE CASE: order status ---
enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED",
}

type Order = {
  id: number;
  item: string;
  status: OrderStatus;
};

const order: Order = { id: 1, item: "Laptop", status: OrderStatus.Pending };
console.log(order);

order.status = OrderStatus.Shipped;
console.log(order.status); // SHIPPED
