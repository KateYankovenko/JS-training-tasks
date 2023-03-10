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


// Дан массив с числами. Найдите сумму этих чисел.
// const numbers = [23, 67, 89, 0, -1, 4];
// let total = numbers.reduce((previousNumber, number) => {
//    return previousNumber + number;
// },0)
// console.log(total)


// Дан массив с числами.Оставьте в нем только положительные числа.
// Затем извлеките квадратный корень и этих чисел.
// const numbers = [23, 67, 89, 0, -1, 4,-98];
// const positiveNums = numbers.filter(number => number > 0)
// .map(number=>Number(Math.sqrt(number).toFixed(2)))
// console.log(positiveNums)


/*
 * Считаем общее количество часов
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];
// let total = 0;

// const timePlayed = players.map(player => player.timePlayed)//[310, 470, 230, 150, 80]
// timePlayed.reduce(number => total += number)//2480
// console.log(timePlayed)
// console.log(total)


/*
 * Считаем общую сумму товаров корзины
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// let totalAmount = cart.map(cart => cart.price)
//     .reduce((total, price) => total += price, 0)
// console.log(totalAmount)//290


/*
 * Собираем все теги из твитов
 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.flatMap(tweet => tweet.tags)//['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']
const uniqueTags = allTags.filter((tag,index,array) => array.indexOf(tag)===index)//['js', 'nodejs', 'html', 'css', 'react']

// console.log(allTags)
// console.log(uniqueTags)




// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// для збирання тегів з колекції
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));


// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.

const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(tags);

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);







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






