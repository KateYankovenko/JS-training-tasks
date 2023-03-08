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


const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];
// const coursesAll = students.flatMap(student => student.courses)
// console.log(coursesAll)

// const uniqueCourses = coursesAll.filter((course, indx, array) => array.indexOf(course) === indx)
// console.log(uniqueCourses)

const coursesAll = students.flatMap(student => student.courses)
    .filter((course, indx, array) => array.indexOf(course) === indx);
console.log(coursesAll);
                   

