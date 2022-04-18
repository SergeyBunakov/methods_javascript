"use strict";
console.log("=== method every, some ===");

const a = [4, 5, 6, 7, 8, 1, 4, 2, 9, 2];

// every

let b = a.every((item) => {
    if (item > 0 && item < 10) {
        return true;
    }
});
console.log(b);

const c = [
    { name: "ivan", age: 12 },
    { name: "stepan", age: 22 },
    { name: "seg", age: 58 },
    { name: "elena", age: 56 },
    { name: "dasha", age: 15 },
];

let d = c.every((item) => {
    if (item.age >= 16) {
        return true;
    }
});
console.log(d);

let f = c.some((item) => {
    if (item.age < 16) {
        return true;
    }
});
console.log(f);

let e = [];
let e1 = e.some(item => {
    return true;
})
console.log(e1);

let e2 = e.every(item => {
    return true;
})
console.log(e2);
