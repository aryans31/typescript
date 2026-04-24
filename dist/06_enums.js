"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==========================================
// TOPIC 6: Enums
// ==========================================
// --- NUMERIC ENUM (default) ---
// Values auto-increment from 0
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0
console.log(Direction.Right); // 3
let move = Direction.Left;
console.log(move); // 2
// --- NUMERIC ENUM WITH CUSTOM START ---
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.OK); // 200
console.log(StatusCode.NotFound); // 404
console.log(StatusCode.ServerError); // 500
// --- STRING ENUM ---
// More readable and debuggable than numeric
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
console.log(Role.Admin); // ADMIN
console.log(Role.User); // USER
function getAccess(role) {
    if (role === Role.Admin) {
        console.log("Full access");
    }
    else if (role === Role.User) {
        console.log("Limited access");
    }
    else {
        console.log("Read-only access");
    }
}
getAccess(Role.Admin);
getAccess(Role.Guest);
console.log(3 /* Planet.Earth */); // 3
// --- ENUM USE CASE: order status ---
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
const order = { id: 1, item: "Laptop", status: OrderStatus.Pending };
console.log(order);
order.status = OrderStatus.Shipped;
console.log(order.status); // SHIPPED
//# sourceMappingURL=06_enums.js.map