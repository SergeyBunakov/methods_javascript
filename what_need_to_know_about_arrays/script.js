'use strict';
console.log('The basis of the foundations');

function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + ' ';
    }
    // console.log([out]);
    document.querySelector(domElem).innerHTML = out;

}

// =========================================
function f_start() {

    function flatDeep(arr) {
        return arr.reduce((flattenArray, element) => {
            return Array.isArray(element)
                ? [...flattenArray, ...flatDeep(element)]
                : [flattenArray, element]
        }, [])
    }

    let resultFlatDeep = flatDeep([1, 2, 3, [4, [[[5, [6, 7]]]], 8]])
    console.log(resultFlatDeep) // [1,2,3,4,5,6,7,8]

    showArr('.out-start', resultFlatDeep)
}

document.querySelector('.b-start').onclick = f_start

// =========================================

console.log("=== Map ===");

// =================== метод map ======================

function f1_1() {
    const numbers = [1, 2, 3, 4]
    const numbersPlusOne = numbers.map(n => n + 1)

    console.log(numbersPlusOne) // [2, 3, 4, 5]
    showArr('.out-1_1', numbers);
}

document.querySelector('.b-1_1').onclick = f1_1;

// =========================================

function f1_2() {
    const allActivities = [
        {
            title: 'My activity',
            coordinates: [50.123, 3.291]
        },
        {title: 'Another activity', coordinates: [1.238, 4.292]},
    ]
    const allCoordinates = allActivities.map(activity => activity.coordinates)

    console.log(allCoordinates) // [[ 50.123, 3.291], [ 1.238, 4.292]]

    showArr('.out-1_2', allCoordinates);
}

document.querySelector('.b-1_2').onclick = f1_2;

// =================== конец метода map ======================

console.log('=== Метод filter ===')

// =============== метод filter ==========================

function f2_1() {
    const numbers = [1, 2, 3, 4, 5, 6]
    const oddNumbers = numbers.filter(n => n % 2 !== 0)

    console.log(oddNumbers) // [1, 3, 5]

    showArr('.out-2_1', oddNumbers)
}

document.querySelector('.b-2_1').onclick = f2_1;

// =========================================

function f2_2() {
    const participants = [
        {id: 'a3f47', username: 'john'},
        {id: 'fek28', username: 'mary'},
        {id: 'n3j44', username: 'sam'},
    ]

    function removeParticipant(participants, id) {
        return participants.filter(participant => participant.id !== id)
    }

    let result = removeParticipant(participants, 'a3f47')
    console.table(result)
    // console.log(result)
    showArr('.out-2_2', result)
}

document.querySelector('.b-2_2').onclick = f2_2;
// =============== конец метода filter ==========================

console.log('=== метод reduce ===')

// =============== метод reduce ==========================

function f3_1() {

    const map = (arr, fn) => {
        return arr.reduce((mappedArr, element) => {
            return [...mappedArr, fn(element)]
        }, [])
    }
    let resultMap = map([1, 2, 3, 4], n => n + 1)
    console.log(map([1, 2, 3, 4], n => n + 1)) // [2, 3, 4, 5]

    const filter = (arr, fn) => {
        return arr.reduce((filteredArr, element) => {
            return fn(element) ? [...filteredArr] : [...filteredArr, element]
        }, [])
    }
    let resultFilter = filter([1, 2, 3, 4, 5, 6], n => n % 2 === 0)
    console.log(filter([1, 2, 3, 4, 5, 6], n => n % 2 === 0)) // [1, 3, 5]

    showArr('.out-3_1_a', resultMap)
    showArr('.out-3_1_b', resultFilter)
}

document.querySelector('.b-3_1').onclick = f3_1;

function f3_2() {
    const arr = [1, 2, 3, [4, [[[5, [6, 7]]]], 8]];

    function flatDeep(arr) {
        return arr.reduce((flattenArray, element) => {
            return Array.isArray(element) ? [...flattenArray, ...flatDeep(element)] : [...flattenArray, element]
        }, [])
    }

    console.log(flatDeep([1, 2, 3, [4, [[[5, [6, 7]]]], 8]])) // [1, 2, 3, 4, 5, 6, 7, 8]
    showArr('.out-3_2', flatDeep(arr));
}

document.querySelector('.b-3_2').onclick = f3_2;

// =============== конец метода reduce ==========================

console.log('=== spread оператор ===')

function f4_1() {
    const numbers = [1, 2, 3]
    const numbersCopy = [...numbers]

    console.log(numbersCopy) // [1, 2, 3]

    const otherNumbers = [4, 5, 6]
    const numbersConcatenated = [...numbers, ...otherNumbers]

    console.log(numbersConcatenated) // [1, 2, 3, 4, 5, 6]

    showArr('.out-4_1a', numbersCopy)
    showArr('.out-4_1a_1', numbersConcatenated)
}

document.querySelector('.b-4_1a').onclick = f4_1;

// ================================================
function f4_1b() {
    const arr = ['foo', 42, {name: 'Thomas'}]
    let copy = [...arr]

    let copy_1 = copy[0] = 'bar'

    console.log(arr) // Никаких изменений: ["foo", 42, { name: "Thomas" }]
    console.log(copy) // ["bar", 42, { name: "Thomas" }]
    showArr('.out-4_1b_1', copy_1)
    showArr('.out-4_1b_2', copy)

    let copy_2 = copy[2].name = 'Hello'

    console.log(arr) // /!\ ИЗМЕНЕНИЯ ["foo", 42, { name: "Hello" }]
    console.log(copy) // ["bar", 42, { name: "Hello" }]

    showArr('.out-4_1b_3', copy_2)
    showArr('.out-4_1b_4', copy)
}

document.querySelector('.b-4_1b').onclick = f4_1b;
document.querySelector('.b-4_1b_1').onclick = f4_1b;
// =============== конец spread оператора ==========================

console.log('=== method includes ===')

// =============== includes (стандарт ES2016) =======================
function f5() {
    const sports = ['football', 'archery', 'judo']
    const hasFootball = sports.includes('football')
    console.log(hasFootball) // true

    let out_5 = document.querySelector('.out-5_1')
    out_5.innerHTML = hasFootball
}

document.querySelector('.b-5_1').onclick = f5;
// =============== end includes =======================

console.log('=== method concat ===')

// =============== method concat =======================
function f6_1() {
    const numbers = [1, 2, 3]
    const otherNumbers = [4, 5, 6]
    const numbersConcatenated = numbers.concat(otherNumbers)
    console.log(numbersConcatenated) // [1, 2, 3, 4, 5, 6]

    showArr('.out-6_1', numbersConcatenated)
}

document.querySelector('.b-6_1').onclick = f6_1;

function f6_1a() {
    // Вы можете объединять любое количество массивов
    function concatAll(arr, ...arrays) {
        return arr.concat(...arrays)
    }

    let out_6_1a = concatAll([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12])

    console.log(concatAll([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12])) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    showArr('.out-6_1a', out_6_1a)
}

document.querySelector('.b-6_1a').onclick = f6_1a;
// =============== end method concat =======================

console.log('=== method forEach ===')

// =============== method forEach =======================
function f7() {

    const numbers = [1, 2, 3, 4, 5]
    numbers.forEach(console.log)

// 1 0 [ 1, 2, 3 ]
// 2 1 [ 1, 2, 3 ]
// 3 2 [ 1, 2, 3 ]
}

document.querySelector('.b-7').onclick = f7;
// =============== end method forEach =======================

console.log('=== method indexOf ===')

// =============== method indexOf =======================
function f8() {
    const sports = ['football', 'archery', 'judo']
    const judoIndex = sports.indexOf('judo')

    let out8_1 = document.querySelector('.out-8_1')
    out8_1.innerHTML = judoIndex

    console.log(judoIndex) // 2
}

document.querySelector('.b-8_1').onclick = f8;
// =============== end method indexOf =======================

console.log('=== method find ===')

// =============== method find =======================
function f9() {
    const users = [
        {id: 'af35', name: 'john'},
        {id: '6gbe', name: 'mary'},
        {id: '932j', name: 'gary'},
    ]

    const user = users.find(user => user.id === '6gbe')
    document.querySelector('.out-9_1').innerHTML = user

    console.log(user) // { id: '6gbe', name: 'mary' }

    // showArr('.out-9_1', user)
}

document.querySelector('.b-9_1').onclick = f9;
// =============== end method find =======================

// ===============  method findIndex =======================
// 10 findIndex
console.log('=== findIndex ===')

function f10() {
    const users = [
        {id: 'af35', name: 'john'},
        {id: '6gbe', name: 'mary'},
        {id: '932j', name: 'gary'},
    ]

    const user = users.findIndex(user => user.id === '6gbe')
    document.querySelector('.out-10', user).innerHTML = user
    console.log(user) // 1
    // showArr('.out-10', user)
}

document.querySelector('.b-10').onclick = f10;

// =============== end method findIndex =======================

// ===============  method slice =======================
// 11 slice
console.log('=== slice ===')

function f11() {
    // «Традиционный» способ реализации:
// Определить количество сообщений для использования в цикле
    const messages = ['hello', 'name', 'age', 'city', 'country', 'stay']
    const nbMessages = messages.length < 5 ? messages.length : 5
    let messagesToShow = []
    for (let i = 0; i < nbMessages; i++) {
        let posts = ''
        messagesToShow.push(posts[i])
    }

// Даже если массив содержит меньше 5 элементов,
// slice вернёт поверхностную копию всего массива
    messagesToShow = messages.slice(0, 5)
    showArr('.out-11', messagesToShow)
    console.log(messagesToShow)
}

document.querySelector('.b-11').onclick = f11;
// =============== end method slice =======================

// ===============  method some =======================
// 12 some
console.log('=== some ===')

function f12() {
    const users = [
        {
            id: 'fe34',
            permissions: ['read', 'write'],
        },
        {
            id: 'a198',
            permissions: [],
        },
        {
            id: '18aa',
            permissions: ['delete', 'read', 'write'],
        }
    ]

    const hasDeletePermission = users.some(user =>
        user.permissions.includes('delete')
    )

    console.log(hasDeletePermission) // true
    document.querySelector('.out-12').innerHTML = hasDeletePermission
}

document.querySelector('.b-12').onclick = f12;

// =============== end method some =======================

// ===============  method every =======================
// 13 every
console.log('=== every ===')

function f13() {
    const users = [
        {
            id: 'fe34',
            permissions: ['read', 'write'],
        },
        {
            id: 'a198',
            permissions: [],
        },
        {
            id: '18aa',
            permissions: ['delete', 'read', 'write'],
        }
    ]

    const hasAllReadPermission = users.every(user =>
        user.permissions.includes('read')
    )

    console.log(hasAllReadPermission) // false
    document.querySelector('.out-13').innerHTML = hasAllReadPermission
}

document.querySelector('.b-13').onclick = f13;

// =============== end method every =======================

// ===============  method flat =======================
// 14 flat
console.log('=== flat ===')

function f14() {

    const numbers = [1, 2, [3, 4, [5, [6, 7]], [[[[8]]]]]]

    const numbersflattenOnce = numbers.flat()
    console.log(numbersflattenOnce) // [1, 2, 3, 4, Array[2], Array[1]]

    const numbersflattenTwice = numbers.flat(2)
    console.log(numbersflattenTwice) // [1, 2, 3, 4, 5, Array[2], Array[1]]

    const numbersFlattenInfinity = numbers.flat(Infinity)
    console.log(numbersFlattenInfinity) // [1, 2, 3, 4, 5, 6, 7, 8]

    let messageFlatA = '[1, 2, 3, 4, Array[2], Array[1]]'
    let messageFlatB = '[1, 2, 3, 4, 5,Array[2], Array[1]]'
    let messageFlatC = '[1, 2, 3, 4, 5, 6, 7, 8]'

    let a = document.querySelector('.out-14a')
    a.textContent = messageFlatA

    let b = document.querySelector('.out-14b')
    b.textContent = messageFlatB

    let c = document.querySelector('.out-14c')
    c.textContent = messageFlatC

}

document.querySelector('.b-14').onclick = f14;

// =============== end method flat =======================

// ===============  method flatMap =======================
// 15 flatMap
console.log('=== flatMap ===')

function f15() {
    let sentences = [
        'Это предложение',
        'Это уже другое предложение',
        "Не могу ничего найти",
    ]

    let allWords = sentences.flatMap(sentence => sentence.split(' '))

    console.log(allWords) // ["Это", "предложение", "Это", "уже", "другое", "предложение", "Не", "могу", "ничего", "найти"]
    showArr('.out-15a', allWords)

    let wordsCount = allWords.reduce((count, word) => {
        count[word] = count[word] ? count[word] + 1 : 1
        return count
    }, {})

    console.log(wordsCount) // { "Не": 1, "Это": 2, "другое": 1, "могу": 1, "найти":
    // 1, "ничего": 1, "предложение": 2, "уже": 1}

    let out15bMessage = '{ "Не": 1, "Это": 2, "другое": 1, "могу": 1, "найти": 1, "ничего": 1, "предложение": 2, "уже": 1}'

    let out15b = document.querySelector('.out-15b')
    out15b.innerHTML = out15bMessage

}

document.querySelector('.b-15a').onclick = f15;
document.querySelector('.b-15b').onclick = f15;

// =============== end method flatMap =======================

// ===============  method join =======================
// 16 join
console.log('=== join ===')

function f16() {
    const potentialParticipants = [
        {id: 'k38i', name: 'john', age: 17},
        {id: 'baf3', name: 'mary', age: 13},
        {id: 'a111', name: 'gary', age: 24},
        {id: 'fx34', name: 'emma', age: 34},
    ]

    const participantsFormatted = potentialParticipants
        .filter(user => user.age > 18)
        .map(user => user.name)
        .join(', ')

    console.log(participantsFormatted) // gary, emma
    showArr('.out-16', participantsFormatted)
}

document.querySelector('.b-16').onclick = f16;

// =============== end method join =======================

// ===============  method from =======================
// 17 from
console.log('=== from ===')

function f17() {
    const nodes = document.querySelectorAll('.out-17') // Это экземпляр NodeList
    const todoItems = Array.from(nodes) // Теперь можно использовать привычные map, filter и т.п.

    todoItems.forEach(item => {
        item.addEventListener('click', function () {
            alert(`Вы нажали на ${item.innerHTML}`)
        })
    })
    showArr('.out-17', todoItems)

}

document.querySelector('.b-17').onclick = f17;

// =============== end method from =======================

// ===============  method sort =======================
// 18 sort
console.log('=== sort ===')

function f18_1() {
    console.log('=== sort ===')
    const names = ['john', 'mary', 'gary', 'anna']
    names.sort()
    console.log(names) // ['anna', 'gary', 'john', 'mary']
    showArr('.out-18_1', names)
}

document.querySelector('.b-18_1').onclick = f18_1;

// =======================================================
function f18_2() {
    const numbers = [23, 12, 17, 187, 3, 90]
    numbers.sort()
    console.log(numbers) // [12, 17, 187, 23, 3, 90]
    showArr('.out-18_2', numbers)
}

document.querySelector('.b-18_2').onclick = f18_2;

// =======================================================
function f18_3() {
    const numbers = [23, 12, 17, 187, 3, 90]
    numbers.sort((a, b) => a - b)
    console.log(numbers) // [3, 12, 17, 23, 90, 187]
    showArr('.out-18_3', numbers)
}

document.querySelector('.b-18_3').onclick = f18_3;

// =======================================================
function f18_4() {
    const posts = [
        {
            title: 'Создание бота для Discord менее чем за 15 минут',
            date: new Date(2018, 11, 26),
        },
        {
            title: 'Как улучшить свой CSS',
            date: new Date(2018, 6, 17),
        },
        {
            title: 'Массивы в JavaScript',
            date: new Date()
        },
    ]

    posts.sort((a, b) => a.date - b.date)
// Вычитание двух дат вернёт разницу между ними в миллисекундах

    console.log(posts)
// [ { title: 'Как улучшить свой CSS', date: 2018-07-17T00:00:00.000Z },
// { title: 'Создание бота для Discord менее чем за 15 минут', date:
// 2018-12-26T00:00:00.000Z },
// { title: 'Массивы в JavaScript', date: 2019-03-16T10:31:00.208Z } ]
    showArr('.out-18_4', posts)
}

document.querySelector('.b-18_4').onclick = f18_4;

// =============== end method sort =======================

// ===============  method fill =======================
// 19 fill
console.log('=== fill ===')

function f19() {
    function fakeUser() {
        return {
            id: 'fe38',
            name: 'thomas',
        }
    }

    const posts = Array(3).fill(fakeUser())
    console.log(posts)
    showArr('.out-19', posts)
}

document.querySelector('.b-19').onclick = f19;

// =============== end method fill =======================

// ===============  method reverse =======================
// 20 reverse
console.log('=== reverse ===')

function f20() {
    const numbers = [1, 2, 3, 4, 5]
    numbers.reverse()

    console.log(numbers) // [5, 4, 3, 2, 1]
    showArr('.out-20', numbers)
}

document.querySelector('.b-20').onclick = f20;
// =============== end method reverse =======================

// ===============  method pop =======================
// 21 pop
console.log('=== pop ===')

function f21() {
    const messages = ['Привет', 'Эй!', 'Ты как?', "Та вроде нормально"]
    const lastMessage = messages.pop()
    console.log(messages) // ['Привет', 'Эй!', 'Ты как?']
    console.log(lastMessage) // Та вроде нормально
    showArr('.out-21', messages)
    showArr('.out-21_1', lastMessage)
}

document.querySelector('.b-21').onclick = f21;
// =============== end method pop =======================

// ===============  method push =======================
// 22 push
console.log('=== push ===')

function f22() {
    const todoItems = [1, 2, 3, 4, 5]
    const itemsIncremented = []
    for (let i = 0; i < todoItems.length; i++) {
        itemsIncremented.push(todoItems[i] + 1)
    }

    console.log(itemsIncremented) // [2, 3, 4, 5, 6]

    const todos = ['Написание статьи', 'Вычитка']
    todos.push('Публикация')
    console.log(todos) // ['Написание статьи', 'Вычитка', 'Публикация']
    showArr('.out-22', todos)
}

document.querySelector('.b-22').onclick = f22;
// =============== end method push =======================

// ===============  method splice =======================
// 23 splice
console.log('=== splice ===')

function f23_1() {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май']

// С помощью splice
    months.splice(2, 1) // Удалить один элемент начиная со 2-й позиции
    console.log(months) // ['Январь', 'Февраль', 'Апрель', 'Май']

// Забыв о splice()
    const monthsFiltered = months.filter((month, i) => i !== 3)
    console.log(monthsFiltered) // ['Январь', 'Февраль', 'Апрель', 'Май']
    showArr('.out-23_1a', months)
    showArr('.out-23_1b', monthsFiltered)
}

document.querySelector('.b-23_1').onclick = f23_1;

// =======================================================
function f23_2() {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май']

// С помощью splice()
    months.splice(1, 3) // Удалить 3 элемента, начиная с позиции 1
    console.log(months) // ['Январь', 'Май']

// Забыв о splice()
    const monthsFiltered = [...months.slice(0, 1), ...months.slice(4)]
    console.log(monthsFiltered) // ['Январь','Май']
    showArr('.out-23_2a', months)
    showArr('.out-23_2b', monthsFiltered)
}

document.querySelector('.b-23_2').onclick = f23_2;
// =============== end method splice =======================

// ===============  method shift =======================
// 24 shift
console.log('=== shift ===')

function f24a() {
    const numbers = [1, 2, 3, 4, 5]

// С помощью shift()
    const firstNumber = numbers.shift()
    console.log(firstNumber) // 1
    console.log(numbers) // [2, 3, 4, 5]

    let out24a1 = document.querySelector('.out-24a_1')
    out24a1.innerHTML = firstNumber
    let out24a2 = document.querySelector('.out-24a_2')
    out24a2.innerHTML = numbers
}
document.querySelector('.b-24a').onclick = f24a;

// =======================================================
function f24b() {
    const numbers = [1, 2, 3, 4, 5]
// Забыв о shift()
    const [firstNumber, ...numbersWithoutOne] = numbers
    console.log(firstNumber) // 1
    console.log(numbersWithoutOne) // [2, 3, 4, 5]

    let out24b1 = document.querySelector('.out-24b_1')
    out24b1.innerHTML = firstNumber
    let out24b2 = document.querySelector('.out-24b_2')
    out24b2.innerHTML = numbersWithoutOne
    // showArr('.out-24b_1', firstNumber)
    // showArr('.out-24b_2', numbersWithoutOne)
}
document.querySelector('.b-24b').onclick = f24b;

// =============== end method shift =======================

// ===============  method unshift =======================
// 25 unshift
console.log('=== unshift ===')

function f25a() {
    // С помощью unshift
    const numbers = [3, 4, 5]

    numbers.unshift(1, 2)
    console.log(numbers) // [1, 2, 3, 4, 5]
    showArr('.out-25a', numbers)
}
document.querySelector('.b-25a').onclick = f25a;

// ==========================================================
function f25b() {
    // Забыв о unshift
    const numbers = [3, 4, 5]

    const newNumbers = [1, 2, ...numbers]
    console.log(newNumbers) // [1, 2, 3, 4, 5]
    showArr('.out-25b', newNumbers)
}
document.querySelector('.b-25b').onclick = f25b;
// =============== end method unshift =======================


/*
function f() {
    showArr('.out-', )
}
document.querySelector('.b-').onclick = f;
*/

