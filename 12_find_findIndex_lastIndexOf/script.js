"use struct";
console.log("=== method_Find_findIndex_LastIndexOf ===");

// find
let a1 = [2, 3, 4, 5, 6, 7];
let b1 = a1.find((item, index) => {
    if (item === 4) {
        return true;
    }
});
console.log(b1);

let a2 = [31, 33, 35, 42, 48, 54, 75, 72];
let b2 = a2.find((item) => {
    if (item >= 35 && item <= 72) {
        return true;
    }
});
console.log(b2);

const c = [
    { name: "ivan", age: 12 },
    { name: "stepan", age: 22 },
    { name: "seg", age: 58 },
    { name: "elena", age: 56 },
    { name: "dasha", age: 15 },
    { name: "denis", age: 17 },
];

let b3 = c.find((item) => {
    if (item.age <= 18) {
        return true;
    }
});
console.log(b3);

let d = [22,33,44,55,67,77];
let d1 = d.findIndex(item => {
    if (item > 48) {
        return true;
    }
});
console.log(d1);

let f = "hello";
let f1 = f.lastIndexOf('l');
console.log(f1);
