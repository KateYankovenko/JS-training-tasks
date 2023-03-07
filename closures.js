"use strict";

/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */


// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

// const callback1 = function (value) {
//     return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//     return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);



const fnA = function (parameter) {
    const innerVariable = 'значение fnA';

    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Это вызов innerFunction');
    };

    return innerFunction;
};

// const fnB = fnA(555);

// fnB();

// console.log(fnB);



/*
 * Dish maker
 */
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} cooking ${dish}`);
// };

// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'кофе');

const makeSheff = function (name) {
    const innverVar = 555;
    const message = 'hello';

    const makeDish = function (dish) {
        console.log(message);
        console.log(innverVar);
        console.log(`${name} готовит ${dish}`);
    };

    return makeDish;
};

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('котлеты');

// const poly = makeSheff('Poly');

// console.dir(poly);

// poly('чай');

// console.dir(mango);


/*
 * Округлятор 
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

// const rounder2 = rounder(2);

// console.dir(rounder2);

// console.log(rounder2(3.4567));
// console.log(rounder2(5.4512312312367));



//------------------------------------------Closures in fuctions-----------------------//




    // Когда вы объявляете новую функцию и присваиваете её переменной,
    //     то в этой переменной вы храните не только определение функции,
    //     но и её замыкание.Замыкание содержит все переменные, которые 
    //         находятся в области видимости во время создания функции.

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//     let salary = baseSalary;

//     return {
//         raise(amount) {
//             if (amount > 1000) {
//                 return 'Too much';
//             }

//             salary += amount;
//         },
//         lower(amount) {
//             salary -= amount;
//         },
//         current() {
//             return `Salary nowadays is ${employeeName} - ${salary}`;
//         },
//     };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager.current());

// console.log(salaryManager.raise(10000000));

// console.log(salaryManager.current());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());


// const fnH = () => ({ a: 6 });
// console.log(fnH())


//--------------------------------Closures expl. exmpls. get from: medium.com/nuances-of-programming/
// Замыкание — это коллекция всех переменных из области видимости во время создания функции.


// let val = 7
//  function createAdder() {
//    function addNumbers(a, b) {
//       let ret = a + b
//       return ret
//     }
//     return addNumbers
//   }
//   let adder = createAdder()
// let sum = adder(val, 8)
//  console.log(adder)
//  console.log('example of function returning a function: ', sum)




//  function createCounter() {
//    let counter = 0
//    const myFunction = function() {
//      counter = counter + 1
//      return counter
//    }
//    return myFunction
//  }
//  const increment = createCounter()//Обява має опис ф-ії myFunction разом із замиканням на лок.обл.вид. зі всіма лок.змінними
//  const c1 = increment()
//  const c2 = increment()
//  const c3 = increment()
//  console.log('example increment', c1, c2, c3)


// let addArr = [1, 3, 4, 5]
// let newArray = []
// addArr.forEach((element, index) => addArr[index]=element * 2)
// // console.log(newArray)
// console.log(addArr)


// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// // const allCourses1 = students.map(student => student.courses);
// // console.log(allCourses)
// // console.log(allCourses1)
// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// console.log(uniqueCourses)


const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Манго і Ківі

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Аякс

// В колбек-функції зручно деструктуризувати властивості об'єкта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Полі і Х'юстон