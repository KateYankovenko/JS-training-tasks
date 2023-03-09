"use strict"

// Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.
// const numbers = [23, 67, 89, 0, -1, 4];
// const sorted = [];
// numbers.forEach((number, numbers) => sorted.push(number ** 2))
// console.log(sorted)


// Дан массив с числами. Найдите сумму этих чисел.
// const numbers = [23, 67, 89, 0, -1, 4];
// let total = 0;
// numbers.forEach(number => total += number)
// console.log(total)


// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
// const numbers = [23, 67, 89, 0, -1, 4];
// const sqrtArr = [];
// numbers.map(number => sqrtArr.push(number ** 2));
// console.log(sqrtArr)



// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// const numbers = [23, 67, 89, 0, -1, 4];
// const bigNums = numbers.filter(number => number > 0)
// console.log(bigNums)


// Дан массив с числами. Оставьте в нем только четные числа.
// const numbers = [6, 8, 90, 45, 3, 1, 7,12,73]
// const evenNums = [];
// console.log(numbers.filter(number=>number%2==0))


// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// const strings = ["Koala", "Bear", "Bavaria", "Jo", "Calipso"]
// const newStr = []
// console.log(strings.filter(string=>string.length>5))


// Дан массив, в нем могут быть обычные элементы и подмассивы, например[1, 2, [3, 4], 5, [6, 7]].
// Оставьте в нем только подмассивы.
// const numbers = [6, 8, 90, 45, [3, 4], 3, 1, [6, 7], 7, 12, 73]
// const newArr = numbers.filter(number => Array.isArray(number))

// console.log(newArr)


// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// const numbers = [6, 8, -90, 45, -3, -1, 7, -12, -73]
// let negativeTotalQuantity = numbers.filter(number => number < 0)
// console.log(negativeTotalQuantity.length)//5










// const planets = ["Земля", "Марс", "Венера", "Юпітер"];
// planets.map(planet => console.log(`Planet: ${planet.toUpperCase()}`))
// console.log(planets)


// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// const names = students.map(student => student.name)
// console.log(names)


// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const coursesAll = students.flatMap(student => student.courses)
//     .filter((course, indx, array) => array.indexOf(course) === indx);
// console.log(coursesAll);
                   
// const userName = students.find(({ name }) => name === "Ківі")
// console.log(userName)

// const courseIndx = students.findIndex(student => student.name === "Полі")
// console.log(courseIndx)

// console.log([67,8,0,-45].every(elem=>elem>=0))
// console.log([-67,-8,0,-90].every(elem=>elem<=0))

// console.log([67,8,0,-45].some(elem=>elem>=0))

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true






