"use strict";
console.log("Array Methods. indexOf");

console.log(" ================ ");
const a = [8, 7, 6, 5, 4];
console.log(a.indexOf(5)); // 3
console.log(a.indexOf(3)); // -1

if (a.indexOf(7) !== -1) {
    console.log("Yes");
} else {
    console.log("No");
}

console.log(" ================ ");
const b = ["Hi", "Hello"];
console.log(b.indexOf("Hello")); // 1

console.log(" ================ ");

const c = [7, 8, 2, 9, 3, 4, 2, 8, 9, 2, 3];
// console.table(c);
console.log(c.indexOf(2)); // 2
console.log(c.indexOf(9, 4)); // 8

console.log(" ================ ");

function indexOfEmulation(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(indexOfEmulation(c, 9));
console.log(indexOfEmulation(c, 6));
console.log(indexOfEmulation(c, 9, 4));
