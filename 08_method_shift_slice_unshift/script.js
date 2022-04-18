"use strict";
console.log("=== methods shift, slice, unshift === ");

// shift
let a1 = [3, 4, 5];
console.log(a1); // (3) [3, 4, 5]
let b1 = a1.shift();
console.log(b1); // 3
console.log(a1); // (2) [4, 5]
a1.shift();
a1.shift();
console.log(a1); // []

// unsshift
let a2 = [7, 8, 9];
let b2 = a2.unshift(22);
console.log(a2); // (4) [22, 7, 8, 9]
console.log(b2); // 4

// slice
let a3 = [22, 33, 44, 55, 66, 77, 88, 99];
let b3 = a3.slice(3);
console.log(a3); // (8) [22, 33, 44, 55, 66, 77, 88, 99]
console.log(b3); // (5) [55, 66, 77, 88, 99]

let a4 = [21, 32, 43, 54, 65, 76, 87, 98];
let b4 = a4.slice(3, 5);
console.log(a4); // (8) [21, 32, 43, 54, 65, 76, 87, 98]
console.log(b4); // (2) [54, 65]

let word = "Hello";
console.log(word.slice(1, 4));  // ell
