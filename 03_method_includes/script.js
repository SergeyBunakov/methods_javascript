"use strict";
console.log("=== method includes ===");
console.log(" ======================= ");

const transactions = [
    "12bv65js8u",
    "yt675l2e43",
    "3k6y765sf8",
    "02jf954th8",
    "kc67mhf76s",
];
const test = [44, 55, 66, 77, 88, 2, 3, 4];

if (test.indexOf(44) !== -1) {
    console.log("Yes;")
} else {
    console.log('No');
}

//  incudes повертає true або flse
if (test.includes(77, 3)) {
    console.log("Yes;")
} else {
    console.log('No');
}

if (transactions.includes("02jf954th8")) {
    console.log('Yes');
} else {
    console.log('No');
}

const user = [
    {name: "Petrov", age: 54},
    {name: "Petrvcry", age: 35},
    {name: "zagorodnui", age: 43},
    {name: "Zagorodnuk", age: 24},
    {name: "Kondrashovsky", age: 32},
];

let userName = user.filter(item => 
    item.name.includes('ov'));

console.log(userName);
