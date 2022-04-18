"use strict";
console.log("=== method Join, Split ===");

// split
let str1 = "hello";
let a1 = str1.split("");
let a2 = str1.split("", 3);
console.log(a1); // (5) ['h', 'e', 'l', 'l', 'o']
console.log(a2); // (3) ['h', 'e', 'l']

let str2 = 'hello hi word test';
let a3 = str2.split(' ');
console.log(a3);    // (4) ['hello', 'hi', 'word', 'test']

// join
let str3 = ['h', 'e', 'l', 'l', 'o'];

let a4 = str3.join();   // h,e,l,l,o
console.log(a4);

let a5 = str3.join(''); // hello
console.log(a5);

let a6 = str3.join('-'); // h-e-l-l-o
console.log(a6);
console.log(str3);  // (5) ['h', 'e', 'l', 'l', 'o']
