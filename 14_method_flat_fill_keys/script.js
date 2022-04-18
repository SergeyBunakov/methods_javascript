"use strict";
console.log("=== method flat, fill, keys ===");

// flat
let a1_1 = [3, 4, [6, 7], 5, [[8, 9, 7], 3], 2, 1];
let b1_1 = a1_1.flat();
console.log(a1_1); // (7) [3, 4, Array(2), 5, Array(1), 2, 1]
console.log(b1_1); // (9) [3, 4, 6, 7, 5, Array(3), 3, 2, 1]

let b1_2 = a1_1.flat(2);
console.log(b1_2); // 11) [3, 4, 6, 7, 5, 8, 9, 7, 3, 2, 1]

let a2_1 = [3, [4, 5]];
a2_1[100] = 100;
let b2_1 = a2_1.flat();
console.log(a2_1); // 101) [3, Array(2), empty × 98, 100]
console.log(b2_1); // (4) [3, 4, 5, 100]

// fill
let c = [1, 1, 1, 1, 1, 1];
console.log(c); // (6) [1, 1, 1, 1, 1, 1]
let d = c.fill(2, 1, 4);
console.log(c); // (6) [1, 2, 2, 2, 1, 1]
console.log(d); // (6) [1, 2, 2, 2, 1, 1]

// keys
console.log(a1_1);  // (7) [3, 4, Array(2), 5, Array(2), 2, 1]
console.log(Object.keys(a1_1)); // (7) ['0', '1', '2', '3', '4', '5', '6']

let k = {hi: 3, hello: 7};
console.log(Object.keys(k));    // (2) ['hi', 'hello']

