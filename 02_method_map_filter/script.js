"use strict";
console.log("Array Methods. map, filter");

// ======================================================
// map
console.log(" ======= map ========== ");
const a1 = [3, 4, 5];
console.log(a1);

let b1 = a1.map((item, index) => {
    // console.log(item);
    console.log(index, item);
    // return index * 3;
    return item * 3;
});
console.log(b1);

// ======================================================
console.log(" ================= ");
const a2 = [];
a2[0] = 5;
a2[4] = 6;

let b2 = a2.map((item) => {
    console.log(item);
    return item * 3;
});
console.log(b2);

// ======================================================
// filter
console.log(" ======== filter ========= ");
const a3 = [3, 4, 5, 123, 43, 58, 9, 0, 12, 2, 1, 256, 11, 13, 12];
console.log(a3);

let b3 = a3.filter((item, index) => {
    if (item > 12) {
        return true; // метод filter має повертати тільки булево значення true
    }
});
console.log(b3);

// ======================================================
console.log(" ================= ");
const a4 = [1, 0, 4, 2, 3, 0, 4, 0, 9];
console.log(a4);
let b4 = a4.filter((item, index) => {
    if (item % 2 === 0) {
        return true;
    }
});
console.log(b4);
