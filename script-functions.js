

// function multiply(x,y,z) {
//     console.log(`Multiplication result is: ${x*y*z}`);
// }
// multiply(2,1,2);




// console.log("beginning")
// function multiply(x, y, z) {
//     console.log("Log before return")
//     return (x * y * z)
//     console.log("log after")//never resolve
// }
// console.log("Before")
// console.log(multiply(2, 7, 8))
// console.log("after")
/*beginning
 Before
 Log before return
 112
 after*/


// function countSum(countFrom = 1, countTo = 20, step = 2) {
//     console.log("It is a sum!")
//     let sum = 0;
//     for (let i = countFrom; i < countTo; i += step){
//          sum +=i;
//     }
//     return(`Counting sum is:${sum}`)
// }
// console.log(countSum(2,500,5))//Counting sum is:24950



// // Доступ до списку всіх аргументів можна отримати за
// допомогою спеціальної змінної arguments, яка доступна
// тільки всередині функції і зберігає всі аргументи у якості
// псевдомасиву.

// // Псевдомасив - колекція з властивістю length і можливістю
// звернутися до елементу за індексом, але відсутністю більшості
// методів для роботи з масивом.

// function multiply() {
//     let total = 1;
//     console.log("before!")
//     for (const argument of arguments) {
//         total *= argument;
//     }
//     return total
// }
// console.log(multiply(122,67))//8174


// Використовуючи метод Array.from(), який створить масив із псевдомасиву.

// function multiply(...args) {
//     let total = 1;
//     console.log("Start!!!")
//     for (let argument of arguments) {
//         total *= argument;
//         console.log(total)
//     }
//     return(`Final result is: ${total}`)
// }
// console.log(multiply(3,6,7,9,4))


//Early return

// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log("U shoud input amount > 0");
//         return;
//     }
//     if (amount > balance) {
//         console.log("U have no money enough!");
//         return;
//     }
//     console.log("The operation was successfull!");
// }
// withdraw(345, 678);
// withdraw(6788888, 564)
// withdraw(0,78)



//FUNCTIONAL EXPRESSION can not be called as a function -
//before it's initialisation!!!!!!

// const multiply = function (x, y, z) {
//     console.log(`Do the multiplication!!!! Result: ${x*y*z}`)
//     return;
// }
// multiply(9,7,4)


/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */
//  function calculateTotalPrice (items = []) {
//      let totalSum = 0;
//     for (const item of items) {
//         totalSum += item;
//         console.log("Here is ur sum!")
//     }
//     return totalSum;
// }
// console.log(calculateTotalPrice([1, 2, 3]))//6


/*
 * Напиши функцию logItems(items) для перебора и 
логирования массива*/
// const logItems = function (items = []) {
//     console.log("Logging of an array is started!")
//     for (let i = 0; i < items.length; i += 1){
//         console.log(`${items[i]} is elemet of array!`)
//     }
//     return;
// }
// console.log(logItems([1,8,3,7]))

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);


/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */
// function findLogin(allLogins, loginToFind){
//     console.log("Login searching is started NOW!!!")
    
//             return allLogins.includes(loginToFind) ? console.log("Login is here")
//                 : console.log("Login is not here!")
    
// }
// console.log(findLogin(["Hanna", "Logan", "Jay"], "Anna"))


/*
 * Напиши функцию findSmallesNumber(numbers) для поиска 
самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */
// function findSmallestNumber(numbers) {
//     for (const number of numbers) {
//        return Math.min(...numbers)
//     }
// }
// console.log(findSmallestNumber([1,4,5]))//1

// function findSmallestNumber(numbers) {
//     const smallestNumber = numbers[0]
//     for (const number of numbers) {
//         if (number<smallestNumber) {
//                 smallestNumber=number

//         }
//     }
//     return smallestNumber
// }
// console.log(findSmallestNumber([1,7,5]))//1


/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена 
 * быть строка «jAVAsCRIPT».
 */
// function changeCase(string = "") {
//     console.log(string)
//     let newString = ""
//     for (let i of string) {
//         if (i === i.toLowerCase()) {
//            newString+=i.toUpperCase()
//         } else {
//             newString+=i.toLowerCase()
//        }
//    }
//     return newString
// }
// console.log(changeCase("FaFi"))


// const changeCase = function (string) {
//     const letters = string.split('');
//     console.log(letters)
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// };

// console.log(changeCase('qweRTY')); // QWErty


/*
 * Напиши функцию slugify(string) которая получает строку 
и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */
// function slugify(string) {
//     console.log(string)
//     return string.toLowerCase().split(' ').join('-');
// }
// console.log(slugify("Show me 10 ways to home"))


/*
 * Напиши функцию add для сложения произвольного количества
 аргументов (чисел)
 * - Операция ... (rest)
 */
// function adding(array) {
//     let totalSum = 0;
//     for (let i = 0; i < array.length; i += 1){
//         totalSum+=array[i]
//     }
//     return totalSum
// }
// console.log(adding([1, 2, 3]))

// function adding(...args) {
//     let totalSum = 0;
//     for (let arg of args) {
//         totalSum+=arg
//     }

//     return totalSum
// }
// console.log(adding(1,2,3))//6


/*
 * Напиши функцию filterNumbers(array [, number1, ...])
 которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное 
 * количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут 
 * только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */
// function filterNumbers(array = [], ...numbers) {
//     console.log(array)
//     let filteredNums = [];
//     for (let i of array) {
//         if (numbers.includes(i)) {
//         filteredNums.push(i)
//         } else {
//             console.log("No coinsidence!")
//     }
//     }
//     return filteredNums
// }
// console.log(filterNumbers([1,4,2], 4,2,1))


// Напишите функцию remove_char(str), которая возвращает строку,
//     очищенную от всех не буквенно - цифровых символов.
// function removeChar(str) {
//     console.log("Here is initial raw string:", str)
//     let newStr = str.replace(/[^a-zа-яё0-9\s]/gi, ' ');
    
//     return newStr
// }
// console.log(removeChar("There$is my_10*days!"))


// Напишите функцию insensitive_search(str1, str2),
// которая осуществляет поиск
// подстроки str2 в строке str1 без учёта регистра символов.

// function intensiveSearch(str1, str2) {
//     let newStr2 = str2.toLowerCase()
//     let newStr1 = str1.toLowerCase()
//     const message = newStr1.includes(newStr2) ? "Includes" : "NOT includes"
//     return message
// }
// console.log(intensiveSearch("Here is JavaScript!","mamba"))



// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
// function insensitiveSearch(str1, str2) {
//     let newStr2 = str2.toLowerCase()
//     let newStr1 = str1.toLowerCase()
//     const message = newStr2 === newStr1 ? "Strings are equal!" : "Strs are NOT equal!"
//     return message

// }
// console.log(insensitiveSearch("Samsung", "sAMSUNG"))


// Напишите функцию repeatStr(str, n), которая вовращает
// строку повторяемую определённое количество раз.
// function repeatStr(str, n) {
//     return str.repeat(n)
// }
// console.log(repeatStr("Hello, mfr!", 7))


// Напишите функцию path(pathname), которая вовращает
// имя файла(подстрока после последнего символа "\" )
// из полного пути к файлу.
function path(pathname) {
    let fileName = pathname.split("/").pop();

    return fileName
}
console.log(path("/home/user/dir/file.txt"))


