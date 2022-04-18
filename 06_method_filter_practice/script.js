"use strict";
console.log("=== method filter (practice) ===");

// =======================================================
const a1 = [1, 2, -2, 3, 0, 7, -5, -3, 87, 0, 23, 42, 68, 0, 41, 9, 8, 7, 0];

let b1 = a1.filter((item, index) => {
    if (item > -1) {
        return true;
    }
});
console.log(a1);
console.log(b1);

// =======================================================
const a2 = [1, 2, 3, 4, 5, 0, 5, 4, 3, 2, 1, 0];
let b2 = a2.filter((item, index) => {
    console.log(index);
    return index; // помилка, необхідно вказувати булево значення (true або false)
    // return true;
});
console.log(a2);
console.log(b2);

// =======================================================
const clients = [
    { iin: "hr34is87", user: "Ivanenko", debt: 4 },
    { iin: "jc5409so", user: "Petrenko", debt: 0 },
    { iin: "kbv987d1", user: "Sudorenko", debt: 0 },
    { iin: "s32ed43d", user: "ItGid.info", debt: 21 },
    { iin: "kdf921rf", user: "OOO MMM", debt: 14 },
    { iin: "iuy33iu7", user: "Spirtbank", debt: 72340 },
    { iin: "lh123ls8", user: "PrivetBank", debt: 4300 },
];
console.log(clients);

let debts = clients
    .filter((item) => item.debt >= 10)
    .sort((a, b) => b.debt - a.debt);
console.log(debts);
