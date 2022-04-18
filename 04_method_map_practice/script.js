"use strict";
console.log("=== метод Map ===");

const temp = [0, 4, 4, 8, 10, 6, 4, 3, -1, -2, -2]; // C°
// F = C° * 1.8 + 32

let tF = temp.map((item) => {
    console.log(item);
    return item * 1.8 + 32;
});

console.log(tF);

let a = [33, 44, 55];
a[10] = 90;

let b = a.map((item, index, array) => item);
console.log(b);

// let b = a.map((item, index, array) => array);
// console.log(b);

//  ====================================================
console.log('=== a1.map ===');
let a1 = [33, 44, 55];
a1[10] = 90;

let b1 = a1.map((item, index, array) => {
    if (index == 1) {
        array[index + 1] = 67;
    }
    return item;
 });
console.log(b1);  // (11) [33, 44, 67, empty × 7, 90]

//  ====================================================
console.log('=== a2.map ===');
let a2 = [33, 44, 55];
let b2 = a2.map((item, index, array) => {
    if (index == 2) {
        array[index + 1] = 67;
    }
    return item;
 });
console.log(b2);  // (3) [33, 44, 55]
console.log(a2);  // (4) [33, 44, 55, 67]


//  ====================================================
console.log('=== const k === ');
const k = [
    {name: 'Ivan', order: 12, sum: '12.5'},
    {name: 'Stephan  ', order: 12, sum: '12.5'},
    {name: 'Sergey      ', order: 12, sum: '12.5'},
    {name: 'matilda ', order: 12, sum: '12.5'},
    {name: 'Ivan Petr  ', order: 12, sum: '12.50'},
];

const kBack = k.map(item => {
    item.name = item.name.trim().toLowerCase();
    return item;
});
console.log(kBack);



