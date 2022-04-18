"use strict";
console.log("=== 6 use cases of Spread ===");

const a = [3, 4, 5];
const b = ["c", "d", "e"];

// merge
const c = [...a, ...b];
console.log(c); // (6) [3, 4, 5, 'c', 'd', 'e']

// clone
const d = [...a];
const d1 = [...b];
console.log(d); // (3) [3, 4, 5]
console.log(d1); // (3) ['c', 'd', 'e']

// string --> array
const str = [..."hello"];
console.log(str); // (5) ['h', 'e', 'l', 'l', 'o']

// set --> array
const tes = [...new Set([2, 3, 4, 3, 2, 5])];
console.log(tes); // (4) [2, 3, 4, 5]

function test() {
    console.log(arguments);     // Arguments(5) [3, 4, 5, 6, 7, callee: (...), Symbol(Symbol.iterator): ƒ]
    console.log([...arguments]);    // (5) [3, 4, 5, 6, 7]
}
test(3, 4, 5, 6, 7);    

// node list
// querySelectorAll()
let p = document.querySelectorAll('p');
console.log(p);    // NodeList(7) [p, p, p, p, p, p, p]
console.log([...p]);    // (7) [p, p, p, p, p, p, p]

