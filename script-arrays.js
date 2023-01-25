// const numbers = [1, 2, 3, 4, 5, 6];
// const firstNumber = numbers[0];
// numbers[1] = 123;
// console.log(firstNumber);//1
// console.log(numbers);//[1, 123, 3, 4, 5, 6]
// console.log(numbers.length);//6





// let fruit = "apple";
// fruit = "rad apple";
// console.log(fruit);//rad apple
// console.log(fruit.indexOf("a"))//1


// let fruits = ["Apple", "Banana", "Grape"];
// const lastArrayElementIndex = fruits.length - 1;
// console.log(lastArrayElementIndex);//2

// Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.
// const books = ["horror", "poem", "novell"];
// for (let i = 0; i <books.length; i += 1){
//     console.log(books[i]);//horror, poem, novell
// }

// const clients = ["Mango", "Bill"];
// for (const client of clients) {
//     console.log(client);
// }

// const string = "Java Script";
// for (const character of string) {
//     console.log(character);
// }


// const clients = ["Bill", "Anna", "Gill"];
// const mainClient = "Anna";
// let message = "";

// for (const client of clients) {
//     if (client === mainClient) {
//         message = "We have found ur main client!";
//         break;
//     }
//         message = "Sorry, there is no such a client!";
// }
// console.log(message);

// const clients = ["Bill", "Anna", "Gill"];
// const mainClient = "Anna";
// let message = "Sorry, there is no such a client!";
// ;

// for (const client of clients) {
//     if (client === mainClient) {
//         message = "We have found ur main client!";
//         break;
//     }
// }
// console.log(message);

//Перериваємо цикл бо шукаємо лише одне число із діапазону
// const numbers = [1, 78, 90, 5, 43, 3];
// const newArray = [];

// for (let number of numbers) {
//     if (number > 50) {
//         console.log(number);
//     }
// }
// console.log(newArray);


// Продовжуємо цикл, бо нам треба вивести всі числа,
//     що відповідають запиту!!!
// const numbers = [1, 2, 45, 67, 32, 12, 10];
// const threshold = 15;
// let message = "Sorry, we see no such a number!";

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < threshold) {
//         message = "We have found all desired numbers!";
//         console.log(numbers[i]);
//         continue;
//     }
// }
// console.log(message);


/*
 * Посчитать общую сумму покупок в корзине
 */
// const goods = [1, 5, 6, 7, 2];
// let totalSum = 0;
// for (let i = 0; i< goods.length; i += 1){
//     totalSum += goods[i];
// }
// console.log(totalSum);//21

// const goods = [1, 5, 6, 7, 2];//21
// let totalSum = 0;
// for(const value of goods){
//     totalSum += value;
// }
// console.log(totalSum);//21

//add some tax value 1.1 to the sum:
// const goods = [1, 5, 6, 7, 2];//21
// let totalSum = 0;
// for(const value of goods){
//     totalSum += Math.round(value*1.1);
// }
// console.log(totalSum);//24


/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */
// const numbers = [1, 2, 4, 6, 7, 8, 9];
// let evenSum = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] % 2 === 0) {
//         evenSum += numbers[i];
//     }
// }
// console.log(evenSum);//20

// const numbers = [1, 2, 4, 6, 7, 8, 9];
// let evenSum = 0;
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         evenSum += number;
//     }
// }
// console.log(evenSum);//20

// const numbers = [1, 2, 4, 6, 7, 8, 9];
// let evenSum = 0;
// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log("Skip the iteration, not even number!");
//         continue;
//     }
//     evenSum += number;
//     console.log("The number is even!");//2,4,6 and 8
// }
// console.log(evenSum);//20


/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

// const logins = ["Lenny", "Anna", "Pony"];
// const userLogin = "Ann";
// let message = `Can not find ${userLogin} in here!`;
// for (const login of logins) {
//     if (login === userLogin) {
//         message = `User ${userLogin} is in here!`;
//         break;
//     }
// }
// console.log(message);

// const logins = ["Lenny", "Anna", "Pony"];
// const userLogin = "Ann";
// let message = "";
// for (let i = 0; i < logins.length; i += 1){
//     if (logins[i] === userLogin) {
//         message = `Login ${userLogin} is here!`;
//         break;
//     }
//     message = `${userLogin} is not here!`;
// }
// console.log(message);

// const logins = ["Lenny", "Anna", "Pony"];
// const userLogin = "Anna";
// let message = `${userLogin} is not here!`;
// if (logins.includes(userLogin)) {
//     message = `${userLogin} is in here!`;
// }
// console.log(message);

// const logins = ["Lenny", "Anna", "Pony"];
// const userLogin = "Ann";

// const searchLogin = logins.includes(userLogin) ? `${userLogin} is here!` : `${userLogin} is not here!`;

// console.log(searchLogin);


/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */
// const numbers = [1, 45, 6, 0, 9];
// let max = Math.max.apply(null, numbers);//45
// let min = Math.min.apply(null, numbers);//0
// console.log(max);
// console.log(min);

// const numbers = [1, 45, 6, 0, 9];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//         console.log(`${number} is smallest here!`);
//         break;
//     }
// }
// console.log(smallestNumber);


/*
 * Напиши скрипт, который объединяет все элементы массива в одно 
строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */
// const members = ["Anna", "Bill", "Debby"];
// // console.log(members.join(","));//Anna,Bill,Debby
// for (let i = 0; i < members.length; i += 1){
//     console.log(members.toString());//Anna,Bill,Debby
// }


/*
 * Напиши скрипт который заменяет регистр каждого символа в строке 
на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть 
строка «jAVAsCRIPT».
 */
// const stringA = "JavaScript";
// const stringB = stringA.split("");//(10) ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
// console.log(stringB);
// let invertedStr = "";
// for (let variable of stringB) {
//     if (variable === variable.toUpperCase()) {
//         console.log("This letter is in upperregoster!");
//         variable = variable.toLowerCase();
//         invertedStr += variable;
//     } else {
//         console.log("This letter is in lowerregoster!");
//         variable = variable.toUpperCase();
//         invertedStr += variable;
//     }
// }


// for (let letter of stringB) {
//     const isEqual = letter === letter.toLowerCase();

//   invertedStr += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log(invertedStr);//jAVAsCRIPT


/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */
// let nameOfArticle = "The great union.";
// const protocol = "https//:";
// const domen = "dev.to";
// // const newName = nameOfArticle.toLowerCase();
// // const words = newName.split(" ");
// // const slug = words.join("");
// // let fullName = protocol.concat(slug, domen);

// let fullName = protocol.concat(nameOfArticle, domen);
// let title = fullName.toLowerCase().split(" ").join("");
// console.log(fullName);//https//:The great union.dev.to
// console.log(title)//https//:thegreatunion.dev.to


/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */
// const a = [1, 3, 4, 5, 6];
// const b = [5, 9, 0, 3, 4];
// let c = a.concat(b);//[1, 3, 4, 5, 6, 5, 9, 0, 3, 4]
// console.log(c)
// let arraySum = 0;
// // for (let value of c) {
// //     arraySum += value;
// // }
// for (let i = 0; i < c.length; i += 1){
//     arraySum += c[i];
// }
// console.log(arraySum)


/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */
// const cards = ["Card1", "Card2", "Card3", "Card4"];
// console.log(cards);

// const deletedCards = cards.splice(2,1)
// console.log(deletedCards)//['Card3']
// console.log(cards)//['Card1', 'Card2', 'Card4']

// const addCards = cards.splice(1, 0, 'Card33')
// console.log(cards)//['Card1', 'Card33', 'Card2', 'Card4']

// const renewCards = cards.splice(0, 2, "Raw", "Paw")
// console.log(cards)//['Raw', 'Paw', 'Card2', 'Card4']



















// const fruits = ["apple", "grape", "malone"];
// const fruit = "";
// const fruitToFind = fruits.includes(fruit) ? console.log(`${fruit} is in here!`) : console.log("Can not find here!");

// const a = "Mango";
// console.log(a.split(""));//string to an array
// const b = ["qwerty", 123];
// console.log(b.join(""));//array to a string













// let a = 5;
// let b = a;
// a = 7;
// console.log(a);//7
// console.log(b);//5

// let c = [1, 2, 3];
// let d = c;
// c[0] = 7;
// d.push(8);
// console.log(c);//(4) [7, 2, 3, 8]
// console.log(d);//(4) [7, 2, 3, 8]
