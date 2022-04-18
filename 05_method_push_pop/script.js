"use strict";
console.log("=== methods push + pop ===");

//  ===================================================
console.log(" ===================================== ");

const browser = [];

//  push
let a1 = [99, 88];
console.log(a1);
a1[0] = 68;
console.log(a1);
a1[a1.length] = 45;
console.log(a1);
a1.push(21,34,12);
console.log(a1);
console.log(a1);
console.log(a1.push(112));
console.log(a1);

function hello(b) {
// let b = 1223;
    return a1.push(b);
}
console.log(hello(1223));
console.log(a1);

//  pop
a1.pop();
console.log(a1);
console.log(a1.pop());
console.log(a1);
console.log(a1.pop());
console.log(a1);

const b1 = [3];
console.log(b1);
console.log(b1.pop());
console.log(b1);
console.log(b1.pop());
console.log(b1);


//  ===================================================
console.log("=== Car ===");
let car = [];
document.querySelector(".add").onclick = () => {
    let id = document.querySelector("#goods").value;
    if (!car.includes(id)) {
        car.push(id)
    }
    console.log(car);
}
document.querySelector(".pop").onclick = () => {
    let id = document.querySelector("#goods").value;
      let goods = car.pop()
    console.log("Товар id " + goods + " був видалений");
    console.log(car);
}
