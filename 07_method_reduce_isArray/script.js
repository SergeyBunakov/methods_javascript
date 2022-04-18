"use strict";
console.log("=== Method Reduce ===");

//  ======================================================
let a1 = [22, 33, 44];
let b1 = a1.reduce((accum, item, index, array) => {
    //  ==================
    // console.log(accum);
    // console.log(item);
    //  ==================
    // accum = accum + item;
    //  ==================
    accum = accum + " " + item;
    //  ==================
    return accum;
});
console.log("=============");
console.log(b1);

//  ======================================================
let a2 = [3, 4, -5, 7, -6, 2];
let b2 = a2.reduce((accum, item) => {
    if (item > 0) {
        accum += item;
    }
    return accum;
}, 0);
console.log("=============");
console.log(b2);

//  ======================================================
console.log("=== Знайти найбільше число в масиві ===");
let a3 = [3, 4, -5, 7, -6, 2, 123, -33];
let b3 = a3.reduce((accum, item) => {
    if (item > accum) {
        accum = item;
    }
    return accum;
});
console.log("======= найбільше число ======");
console.log(b3);

//  ======================================================
let a4 = [
    { id: 53, city: "arc" },
    { id: 123, city: "rca" },
    { id: 353, city: "acr" },
];
// [53, 123, 353]

let b4 = a4.reduce((accum, item) => {
    accum.push(item.id);
    return accum;
}, []);
console.log("=== вивести вибіркові дані об'єкта в масив === ");
console.log(b4);

//  ======================================================
let arr1 = new Array();
arr1 = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr1));

//  ======================================================
let arr2 = "hello";
console.log(Array.isArray(arr2));
