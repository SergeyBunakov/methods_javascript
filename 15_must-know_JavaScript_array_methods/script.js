'use strict';
console.log('15 must-know JavaScript array methods')

// Instead of using this way

// const myAwesomeArray = ["a", "b", "c", "d", "e"]  // 1. for some()
// const myAwesomeArray = [1, 2, 3, 4, 5]  // 2. for reduce()
// const myAwesomeArray = ["a", "b", "c", "d", "e"]    // 3.every() one example
// const myAwesomeArray = ["a", "a", "a", "a", "a"]   //3. every() two example
// const myAwesomeArray = [5, 4, 3, 2, 1]  // 4. map
// const myAwesomeArray = [[1, 2], [3, 4], 5]  // 5. flat
/*
   const myAwesomeArray = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
    { id: 4, name: "Mass" },
]   // 6. filter
*/
/*
const myAwesomeArray = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
]   // 7. forEach
*/
/*
const myAwesomeArray = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
]   // 8. findIndex
*/
/*
    const myAwesomeArray = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
]   // 9. find
*/
// const myAwesomeArray = [5, 4, 3, 2, 1]  // 10. sort
// const myAwesomeArray = [1, 2, 3, 4, 5]   // 11. concat
// const myAwesomeArray2 = [10, 20, 30, 40, 50]    // 11. concat
// const myAwesomeArray = [1, 2, 3, 4, 5]  // 12. fill
const myAwesomeArray = [1, 2, 3, 4, 5]  // 13. includes
// const myAwesomeArray = ["e", "d", "c", "b", "a"]    // 14. reverse
// const myAwesomeArray = [[1], [2], [3], [4], [5]]    // 15. flatMap

myAwesomeArray.some(test => {
    if (test === "d") {
        return test
    }
})
// We'll use the shorter one

// 1. some()
// Этот метод проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции. Он вернет значение true, если хотя бы один элемент совпадет с проверяемой функцией, и значение false — если нет.
console.log('=== some() example ===')
// const myAwesomeArray = ["a", "b", "c", "d", "e"]  // for some()
let a = myAwesomeArray.some(test => test === "d")
console.log(a)
//-------> Output : true

// 2. reduce()
// Этот метод принимает функцию, которая имеет в качестве аргумента аккумулятор и значение. Он применяет функцию к аккумулятору и каждому значению массива, чтобы в результате вернуть только одно значение.
console.log('=== reduce() example ===')
// const myAwesomeArray = [1, 2, 3, 4, 5]  // for reduce()
let b = myAwesomeArray.reduce((total, value) => total * value)
console.log(b)
// 1 * 2 * 3 * 4 * 5
//-------> Output = 120

// 3. every()
// Этот метод проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции. Он вернет значение true, если каждый элемент совпадет с проверяемой функцией, и значение false — если нет.
console.log('=== every() example one ===')
// const myAwesomeArray = ["a", "b", "c", "d", "e"]    // every() one example
let c = myAwesomeArray.every(test => test === "d")  // every-1
console.log(c)
//-------> Output : false
console.log('=== every() example two ===')
// const myAwesomeArray = ["a", "a", "a", "a", "a"]   // every() two example
let d = myAwesomeArray.every(test => test === "a")  // every-2
console.log(d)
//-------> Output : true

// 4.map()
// Этот метод принимает функцию в качестве параметра и создает новый массив с результатом вызова указанной функции для каждого элемента массива. Он всегда будет возвращать одинаковое количество элементов.
console.log('=== map() example ===')
// const myAwesomeArray = [5, 4, 3, 2, 1]  // map
let e = myAwesomeArray.map(x => x * x)  // map
console.log(e)
//-------> Output : 25
//                  16
//                  9
//                  4
//                  1

// 5. flat()
// Этот метод принимает в качестве аргумента массив массивов и сглаживает вложенные массивы в массив верхнего уровня. Обратите внимание, что этот метод работает только для одного уровня.
console.log('=== flat() ===')
// const myAwesomeArray = [[1, 2], [3, 4], 5]  // flat
let f = myAwesomeArray.flat()   // flat
console.log(f)
//-------> Output : [1, 2, 3, 4, 5]

// 6. filter()
// Этот метод принимает функцию в качестве параметра и возвращает новый массив, содержащий все элементы массива, для которого функция фильтрации передавалась в качестве аргумента, и возвращает ее со значением true.
console.log('=== filter() ===')
/*
   const myAwesomeArray = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
    { id: 4, name: "Mass" },
]   // filter
*/
let g = myAwesomeArray.filter(element => element.name === "Mass")   // filter
console.log(g)
//-------> Output : 0:{id: 3, name: "Mass"},
//                  1:{id: 4, name: "Mass"}

// 7. forEach()
// Этот метод применяет функцию к каждому элементу массива.
console.log('=== forEach() ===')
/*
const myAwesomeArray = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
]   // forEach
*/
let h = myAwesomeArray.forEach(element => console.log(element.name))    //forEach
console.log(h)
//-------> Output : john
//                  Ali
//                  Mass

// 8. findIndex()
// Этот метод принимает функцию в качестве параметра и в дальнейшем применяет ее к массиву. Он возвращает индекс найденного элемента, если элемент удовлетворяет условию проверяющей функции, переданной в качестве аргумента. Если не удовлетворяет, возвращается –1.
console.log('=== findIndex() ===')
/*
const myAwesomeArray = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
]   // findIndex
*/
let i = myAwesomeArray.findIndex(element => element.id === 3)   // findIndex
console.log(i)
//-------> Output : 2
let j = myAwesomeArray.findIndex(element => element.id === 7)   // findIndex
console.log(j)
//-------> Output : -1

// 9. find()
// Этот метод принимает функцию в качестве аргумента и в дальнейшем применяет ее к массиву. Он возвращает значение элемента, найденного в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае оно возвращается со значением undefined.
console.log('=== find() ===')
/*
    const myAwesomeArray = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
]   //find
*/
let k = myAwesomeArray.find(element => element.id === 3)
console.log(k)
//-------> Output : {id: 3, name: "Mass"}
let l = myAwesomeArray.find(element => element.id === 7)
console.log(l)
//-------> Output : undefined

// 10. sort()
// Этот метод принимает функцию в качестве параметра. Он сортирует элементы массива и возвращает их.
console.log('=== sort() ===')
// const myAwesomeArray = [5, 4, 3, 2, 1]  // sort
// Sort from smallest to largest
let m = myAwesomeArray.sort((a, b) => a - b)
console.log(m)
//-------> Output : [1, 2, 3, 4, 5]
// Sort from largest to smallest
let n = myAwesomeArray.sort((a, b) => b - a)
console.log(n)
//-------> Output : [5, 4, 3, 2, 1]

// 11. concat()
// Этот метод объединяет два или более массива/значения и возвращает новый массив.
console.log('=== concat() ===')
// const myAwesomeArray = [1, 2, 3, 4, 5]   // concat
// const myAwesomeArray2 = [10, 20, 30, 40, 50]    // concat
let o = myAwesomeArray.concat(myAwesomeArray)
console.log(o)
//-------> Output : [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]

// 12. fill()
// Этот метод заполняет все элементы массива одинаковым значением, от начального индекса (по умолчанию 0) до конечного индекса (по умолчанию array.length).
console.log('=== fill() ===')
// const myAwesomeArray = [1, 2, 3, 4, 5]  // fill

// The first argument (0) is the value
// The second argument (1) is the starting index
// The third argument (3) is the ending index
let p = myAwesomeArray.fill(0, 1, 3)
console.log(p)
//-------> Output : [1, 0, 0, 4, 5]

// 13. includes()
// Этот метод возвращает значение true, если массив содержит определенный элемент, и значение false — если нет.
console.log('=== includes() ===')
// const myAwesomeArray = [1, 2, 3, 4, 5]  // 13. includes
let q1 = myAwesomeArray.includes(3)
console.log(q1)
//-------> Output : true
let q2 = myAwesomeArray.includes(8)
console.log(q2)
//-------> Output : false

// 14. reverse()
// Этот метод меняет порядок следования элементов в массиве на обратный. Первый элемент становится последним, а последний — первым.
console.log('=== reverse() ===')
// const myAwesomeArray = ["e", "d", "c", "b", "a"]    // 14. reverse
let r = myAwesomeArray.reverse()
console.log(r)
//-------> Output : ['a', 'b', 'c', 'd', 'e']

// 15. flatMap()
// Этот метод применяет функцию к каждому элементу массива, а затем сглаживает результат в новый массив. Он объединяет метод flat() и метод map() в одну функцию.
console.log('=== flatMap() ===')
// const myAwesomeArray = [[1], [2], [3], [4], [5]]    // 15. flatMap
let s = myAwesomeArray.flatMap(arr => arr * 10)
console.log(s)
//-------> Output : [10, 20, 30, 40, 50]

// With .flat() and .map()
myAwesomeArray.flat().map(arr => arr * 10)
//-------> Output : [10, 20, 30, 40, 50]
