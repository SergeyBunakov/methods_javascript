"use strict";
console.log("=== method splice, concar ===");

// concat
let a1 = [21, 22, 23, 24];
let a2 = [31, 32, 33, 34];
let a3 = [48, 49, 50];
let a4 = [];

let b1 = a1.concat(a2);
console.log(b1); // (8) [21, 22, 23, 24, 31, 32, 33, 34]

let b2 = a2.concat(a1);
console.log(b2); // (8) [31, 32, 33, 34, 21, 22, 23, 24]

let b3 = a1.concat(a2, a3);
console.log(b3); // (11) [21, 22, 23, 24, 31, 32, 33, 34, 48, 49, 50]

a4[22] = 100;
console.log(a1.concat(a3, a4)); // (30) [21, 22, 23, 24, 48, 49, 50, empty × 22, 100]

// concat --> string
let str1 = "hello";
let str2 = "hi";
let str3 = str1.concat(str2);
console.log(str3); // hellohi

// splice
let spl1 = [33, 44, 55, 66, 77, 88, 99];
console.log(spl1); // (7) [33, 44, 55, 66, 77, 88, 99]
spl1.splice(2, 2);
console.log(spl1); // (5) [33, 44, 77, 88, 99]

let spl2 = [21,22,23,24,25,26,27,28,29,30];
console.log(spl2);  // (10) [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
spl2.splice(2,2,'hi', 'hd', 'hr', 'ht');
console.log(spl2);  // (12) [21, 22, 'hi', 'hd', 'hr', 'ht', 25, 26, 27, 28, 29, 30]
